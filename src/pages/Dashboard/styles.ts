import styled from 'styled-components'

const Dashboard =  styled.div`
    height: 100vh;
    width: 100%;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    div {
        display: flex;
        align-items: space-between;
        width: 70vw;
    }
`

const Wrapper = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4.5rem;

    img {
        height: 3.75rem;
    }
`

export { Dashboard, Wrapper }