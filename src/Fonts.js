import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
        /* SEBANG_GOTHic */
        @font-face {
            font-family: 'ChosunCentennial';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/ChosunCentennial.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
        }
    `}
  />
)

export default Fonts
