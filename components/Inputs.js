import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const formatPhone = value => {
  const cleaned = value.replace(/\D/g, '')

  if (cleaned.length <= 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
  } else {
    return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
  }
}

function InputPhone({ updatePhone, formChangeState }) {
  const [phoneValue, setPhoneValue] = React.useState('')

  useEffect(() => {
    updatePhone(phoneValue.replace(/\D/g, '')) // envia só os números limpos
  }, [phoneValue])

  return (
    <section className="inputs">
      <label htmlFor="phone">Telefone</label>
      <input
        name="phone"
        placeholder="Digite o número de telefone..."
        value={phoneValue}
        onChange={e => setPhoneValue(formatPhone(e.target.value))}
        maxLength={15}
      />
      <label htmlFor="message">Mensagem</label>
      <textarea
        label="Mensagem"
        placeholder="Digite a mensagem padrão..."
        name="message"
        onChange={formChangeState}
      />
    </section>
  )
}

InputPhone.defaultProps = {
  phone: '',
}

InputPhone.propTypes = {
  updatePhone: PropTypes.func.isRequired,
  formChangeState: PropTypes.func.isRequired,
  phone: PropTypes.string,
}

export default InputPhone
