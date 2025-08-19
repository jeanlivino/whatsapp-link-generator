'use client'

import React, { useMemo, useState } from 'react'

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

  const link = useMemo(() => {
    if (typeof window === 'undefined') return ''

    const { hostname, protocol } = window.location
    return `${protocol}//${hostname}/go/?p=${fields.phone}&m=${fields.message || ''}`
  }, [fields])

  const onCopy = () => {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 3000)
  }

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
