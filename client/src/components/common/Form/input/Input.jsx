import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Label from '../label/Label';

import StyledInput from './Styled_Input';

const Input = ({ name, label, value, onChange, onFocus, type, error }) => {  
  const input = useRef();
  const onSetFocus = () => input.current.focus();
  
  return (
    <StyledInput>
      <input 
        className={classnames('form-input', {'validate' : error})}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        type={type}
        autoComplete='off'
        required
        ref={input}
      />
      <Label label={label} value={value} error={error} onSetFocus={onSetFocus} />
    </StyledInput>
  )
}

Input.defaultProps = {
  type: 'text'
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  type: PropTypes.string,
  error: PropTypes.string
}

export default Input;