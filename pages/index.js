import React, { useEffect, useState } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Inputs from '../components/Inputs'
import LinkOutput from '../components/LinkOutput'

import { FormWrapper, PageWrapper } from '~/ui'

const HomePage = () => {
  const [fields, setFields] = useState({
    message: '',
    phone: '',
  })
  const [link, setLink] = useState('')
  const [isCopied, setIsCopied] = useState(false)

  const formChangeState = e => {
    const { name } = e.target
    let { value } = e.target
    value = encodeURI(value)

    setFields(state => ({
      ...state,
      [name]: value,
    }))
  }

  const updatePhone = phone => {
    setFields(state => ({
      ...state,
      phone,
    }))
  }

  const updateLink = state => {
    const { hostname, protocol } = window.location
    const formattedLink = `${protocol}//${hostname}/go/?p=${
      state.phone ? state.phone.substr(1) : ''
    }&m=${state.message || ''}`
    setLink(formattedLink)
  }

  const onCopy = () => {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 3000)
  }

  useEffect(() => {
    updateLink(fields)
  }, [fields])

  return (
    <PageWrapper>
      <main className="container">
        <Header />
        <FormWrapper>
          <Inputs
            updatePhone={updatePhone}
            phone={fields.phone}
            formChangeState={formChangeState}
          />
          <LinkOutput isCopied={isCopied} link={link} onCopy={onCopy} />
        </FormWrapper>
        <Footer />
      </main>
    </PageWrapper>
  )
}

export default HomePage
