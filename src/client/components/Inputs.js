/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

function InputPhone(props) {
  const { updatePhone, phone, formChangeState } = props;
  return (
    <section className="inputs">
      <label htmlFor="phone">your phone</label>
      <PhoneInput name="phone" placeholder="Enter phone number" value={phone} onChange={updatePhone} />
      <label htmlFor="message">your message</label>
      <textarea label="Mensagem" placeholder="Type your message..." name="message" onChange={formChangeState} />
    </section>
  );
}
InputPhone.defaultProps = {
  phone: ''
};

InputPhone.propTypes = {
  updatePhone: PropTypes.func.isRequired,
  formChangeState: PropTypes.func.isRequired,
  phone: PropTypes.string,
};

export default InputPhone;
