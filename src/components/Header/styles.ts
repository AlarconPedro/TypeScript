import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 100%;
    margin: 0 auto;

    padding: 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: var(--white);
    }
    
    div {
        display: flex;
        align-items: center;

        button {
            font-size: 1rem;
            color: var(--white);

            background: var(--blue-light);
            border: 0;
            padding: 0 2rem;

            border-radius: 0.25rem;
            height: 3rem;

            &:hover {
                filter: brightness(0.8);
            }
        }

        h3 {
            color: var(--white);
            margin-left: 10px;
        }
    }
`;
