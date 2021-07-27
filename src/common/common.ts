import { createGlobalStyle } from 'styled-components';

import { breakpoints } from './variables';

export default createGlobalStyle`
  *{
    outline: none;
  }

  #app{
    margin: auto;
    min-width: ${breakpoints.tabletPortrait}px;
  }

  @media screen and (min-width: ${breakpoints.tabletLandscape}px) {
    body.hasSummary{
      #app{
        padding-right: 18rem;
      }
    }
  }
`;
