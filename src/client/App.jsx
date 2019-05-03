// lib
import React, { Component, Fragment } from 'react';
import 'milligram/dist/milligram.min.css';

// custom
import './App.scss';
import imageBg from './bg.png';

// my components
import Header from './components/Header';
import Inputs from './components/Inputs';
import LinkOutput from './components/LinkOutput';
import Footer from './components/Footer';

export default class App extends Component {
  state = {
    message: '',
    phone: '',
    link: '',
    isCopied: false
  };

  formChangeState = (e) => {
    const { name } = e.target;
    let { value } = e.target;
    value = encodeURI(value);
    this.setState({ [name]: value }, () => this.updateLink(this.state));
  };

  updatePhone = (phone) => {
    this.setState({ phone }, () => this.updateLink(this.state));
  };

  updateLink = (state) => {
    const { hostname } = window.location;
    const link = `${hostname}/go/?p=${state.phone ? state.phone.substr(1) : ''}&m=${
      state.message ? state.message : ''
    }`;
    this.setState({ link });
  };

  onCopy = () => {
    this.setState({ isCopied: true });
    setTimeout(() => this.setState({ isCopied: false }), 3000);
  };

  render() {
    const { phone, isCopied, link } = this.state;
    const { updatePhone, formChangeState, onCopy } = this;
    return (
      <Fragment>
        <img src={imageBg} alt="background" className="background" />
        <main className="content container">
          <Header />
          <section className="form">
            <Inputs updatePhone={updatePhone} phone={phone} formChangeState={formChangeState} />
            <LinkOutput isCopied={isCopied} link={link} onCopy={onCopy} />
          </section>
          <Footer />
        </main>
      </Fragment>
    );
  }
}
