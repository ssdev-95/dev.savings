import styled from 'styled-components'
import colors from 'src/colors.json'

const CardWrapper = styled.div`
    background: ${colors.white};
    width:  6rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;

    div {
        height: 100%;
        flex: 4.4;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding-left: 4px;
        gap: 4px;

        span {
            margin-top: 4px;
            color: ${colors.gray};
            line-height: 0;
        }

        p {
            color: ${colors.blue};
            font-weight: 700;
            font-size: 1.48rem;
            line-height: 0;
        }
    }

    button {
        background: transparent;
        border: 0;
        height: 100%;
        flex: .8;

        &:hover {
            background: rgba(0, 0, 0, .25);
        }

        &:first-of-type {
            border-radius: 8px 0 0 8px;
            svg {
                transform: rotate(180deg);
            }
        }

        &:last-of-type {
            border-radius: 0 8px 8px 0;
        }
    }
`

export { CardWrapper }