import styled from 'styled-components'
import colors from 'src/colors.json'

const { innerWidth: width } = window

 const Home =  styled.div`
    background-image: url('src/icons/coin.png');
    background-repeat: no-repeat;
    background-position: 10% 50%;

    height: 100vh;
    width: 100vw;

    overflow: hidden;
    padding: ${(width>1024)?'4rem 3rem':'4rem 0'};

    display: flex;
    flex-direction: column;
    position: relative;

    align-items: ${(width>1024)?'flex-start':'center'};

    img {
        height: 4rem;
        margin-left: ${width<600?'1rem':'0'};
    }

    h2, h4 {
        line-height: 0;
        color: ${colors.blue};
    }

    h4 {
        font-size: ${(width>1024)?'2rem':'1.5rem'};
    }

    h2 {
        margin-top: 18vh;
        font-size: ${(width>1024)?'3rem':'2.55rem'};
        font-weight: bold;
    }

    button {
        background: ${colors.green};
        color: ${colors.white};

        display: flex;
        align-items: center;
        justify-content: space-evenly;

        border: 0;
        border-radius: 8px;

        height: 3rem;
        width: 17rem;
        transition: all .2s ease;

        margin-top: 15vh;

        &:hover {
            background: ${colors.darkgreen};
        }

        span {
            line-height: 0;
        }
    }
`

export { Home }