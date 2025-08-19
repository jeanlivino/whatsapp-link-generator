import React from 'react'
import PhoneInput from 'react-phone-number-input'
import PropTypes from 'prop-types'

function InputPhone({ updatePhone, phone, formChangeState }) {
  return (
    <section className="inputs">
      <label htmlFor="phone">Telefone</label>
      <PhoneInput
        country="BR"
        name="phone"
        placeholder="Digite o número de telefone..."
        value={phone}
        onChange={updatePhone}
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
