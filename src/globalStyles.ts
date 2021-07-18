import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    root {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
        background: #f0f0f0;
        overflow: hidden;
    }

    html, body, button, a, span, p, h1, h2, h3, h4 {
        font-family: 'Inter', sans-serif;
    }
`

export { GlobalStyle }