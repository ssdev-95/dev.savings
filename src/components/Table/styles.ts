import styled from 'styled-components'

const Table = styled.table`
    height: 100%;
    overflow: auto hidden;
    width: 80vw;
    max-width: 88%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-collapse: collapse;
    grid-area: lower;

    tr {
        width:  80vw;
        height: 2.5rem;
        flex: 1;
        background: red;
    }
`

export { Table }