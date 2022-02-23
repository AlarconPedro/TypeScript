import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #0067A3;
        --background-modal: #f0f2f5;

        --blue:  #004269;
        --green: #03bb85;

        --blue-light: #4DA1D2;

        --text-body: #363f5f;

        --white: #fff;
    }

    * {
        margin: 0;
        padding: 0;

    }

    html {
        @media (max-width: 1080px) {
            font-size: 94%;
        }

        @media (max-width: 720px) {
            font-size: 88%;
        }
    }

    body {
        background: var(--background);
    }

    body, input, textarea,button {
        font-family: 'Roboto', 'Arial';
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        max-width: 100px;
        max-width: 567px;
        position: relative;
        background: var(--background-modal);
        padding: 3rem;
        border-radius: 0.24rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1rem;
        top: 1rem;
        border: 0;
        background: transparent;

        color: #f00;
        &:hover {
            filter: brightness(0.8);
        }

        svg {
            font-size: 20px;
        }
    }

`;
