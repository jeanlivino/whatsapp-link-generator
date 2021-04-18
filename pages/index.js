import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Inputs from '../components/Inputs';
import LinkOutput from '../components/LinkOutput';
import Footer from '../components/Footer';

const HomePage = () => {
	const [fields, setFields] = useState({
		message: '',
		phone: ''
	});
	const [link, setLink] = useState('');
	const [isCopied, setIsCopied] = useState(false);

	const formChangeState = (e) => {
		const { name } = e.target;
		let { value } = e.target;
		value = encodeURI(value);

		setFields(state => ({
			...state,
			[name]: value
		}));
	};

	const updatePhone = (phone) => {
		setFields(state => ({
			...state,
			phone
		}))
	};

	const updateLink = (state) => {
		const { hostname } = window.location;
		const formattedLink = `http://${hostname}/go/?p=${state.phone ? state.phone.substr(1) : ''}&m=${state.message ? state.message : ''
			}`;
		setLink(formattedLink);
	};

	const onCopy = () => {
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 3000);
	};

	useEffect(() => {
		updateLink(fields);
	}, [fields]);

	return (
		<div id="root">
			<main className="content container">
				<Header />
				<section className="form">
					<Inputs updatePhone={updatePhone} phone={fields.phone} formChangeState={formChangeState} />
					<LinkOutput isCopied={isCopied} link={link} onCopy={onCopy} />
				</section>
				<Footer />
			</main>
		</div>
	);
};

export default HomePage;
