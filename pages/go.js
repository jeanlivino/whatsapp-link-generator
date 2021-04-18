import { connectToDatabase } from "../utils/mongodb";
import React from 'react'
import uaParser from 'ua-parser-js'
import { isDev } from '../utils/is'

const goPage = (props) => {
	return (
		<div>
			{JSON.stringify(props)}
		</div>
	)
}

export async function getServerSideProps({ req, query }) {
	const ua = uaParser(req.headers['user-agent'])
	const { p, m } = query;

	const { type = 'desktop' } = ua.device
	const url = type === 'desktop' ? `https://web.whatsapp.com/send?phone=${p}&text=${m}` : `whatsapp://send?phone=${p}&text=${m}`
	const content = { phone: p, message: m, type }
	if (isDev()) return {
		props: content
	}


	try {
		{
			const { db } = await connectToDatabase();
			await db.collection("clicks").insertOne(content)
		}
	} finally {
		return {
			props: {},
			redirect: {
				destination: url,
				permanent: false,
			},
		}
	}
}
export default goPage