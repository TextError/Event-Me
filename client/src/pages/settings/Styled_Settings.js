import styled from 'styled-components';

const StyledSettings = styled.section`
  .settings {
    padding: ${({ plus18px }) => plus18px ? '50px 39px 50px 20px' : '50px 20px'};
    .side-nav {
      ul {
        width: 300px;
        background: var(--mainWhite);
        &:nth-child(1) {
          margin-bottom: 28px;
        }
        .head {
          background: var(--Scolor);
        }
        li {
          color:var(--Pcolor);
          letter-spacing: var(--Spacing);
          font-weight: 600;
        }
        .path {
          padding: 14px;
          margin-bottom: -1px;
          border: 1px solid var(--Shadow);
        }
        .active {
          background: var(--Hover);
        }
      }
    }
  }
`

export default StyledSettings;