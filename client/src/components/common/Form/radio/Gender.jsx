import React, { useState } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../utils/isEmpty/isEmpty';

import Input from './Input';

import StyledRadio from './Styled_Radio';

const Gender = ({ name, onClick }) => {
  const [radio, setRadio] = useState({gender_male: false, gender_female: false});
  const { gender_male, gender_female } = radio;

  const onChange = e => {
    const { name, value } = e.target
    // Find the active state
    const active = Object.entries(radio).filter(([key, val]) => val !== false);
    if(isEmpty(active)) return setRadio({ ...radio, [`${name}_${value}`]: true });
    // Flat array
    const [flattenedArr] = [].concat.apply([],active);
    // Update new state
    setRadio({...radio, [flattenedArr]: false, [`${name}_${value}`]: true });
  };
  return (
    <StyledRadio>
      <Input name={name} radio={gender_male} value='male' onChange={onChange} onClick={onClick} />
      <Input name={name} radio={gender_female} value='female' onChange={onChange} onClick={onClick} />
    </StyledRadio>
  )
}

Gender.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Gender;