import styled from 'styled-components';

const StyledButtonOne = styled.div`
  .button-one {
    padding: 10px 15px;
    margin: auto;
    letter-spacing: var(--Spacing);
    border-radius: var(--BorderRadius);
    background: transparent;
    color: var(--mainWhite);
    border: none;
    &:hover {
      cursor: pointer;
      color: var(--Pcolor);
    }
  }
  .box {
    box-shadow: inset 0 0 0 2px var(--mainWhite);
    &:hover {
      box-shadow: inset 0 0 0 2px var(--Pcolor);
    }
  }
  .green {
    background: var(--Green);
  }
  .blue {
    background: var(--Blue);
  }
  .red {
    background: var(--Error);
  }
`

export default StyledButtonOne;