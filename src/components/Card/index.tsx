import { useNavigation } from 'src/hooks/useNavigation'
import { DoubleArrow } from '@material-ui/icons'
import { CardWrapper } from './styles'
import { CardProps } from 'src/@types'

function Card({ title, value }: CardProps) {
    const { goForward, goBackward } = useNavigation()

    return (
        <CardWrapper onClick={goBackward}>
            <button>
                <DoubleArrow />
            </button>
            <div>
                <span>{title}</span>
                <p>{value}</p>
            </div>
            <button onClick={goForward}>
                <DoubleArrow />
            </button>
        </CardWrapper>
    )
}

export { Card }