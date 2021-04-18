import React from 'react'
import uaParser from 'ua-parser-js'

const goPage = () => {
	return (
		<div>
		</div>
	)
}

export async function getServerSideProps({ req, query }) {
	const ua = uaParser(req.headers['user-agent'])
	const { p, m } = query;

	const { type = 'desktop' } = ua.device
	const url = type === 'desktop' ? `https://web.whatsapp.com/send?phone=${p}&text=${m}` : `whatsapp://send?phone=${p}&text=${m}`

	return {
		props: {},
		redirect: {
			destination: url,
			permanent: false,
		},
	}
}
export default goPage
