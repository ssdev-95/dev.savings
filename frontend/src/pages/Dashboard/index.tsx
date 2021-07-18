import { useNavigation } from 'src/hooks/useNavigation'
import { Card } from 'src/components/Card'
import { TransactionsTable } from 'src/components/Table'
import { Graphic } from 'src/components/Graphic'
import Logo from 'src/icons/logo.svg'

import { Dashboard, Wrapper } from './styles'

function Dash() {
    const { component } = useNavigation()

    return (
        <Dashboard>
            <div>
                <Wrapper>
                    <img src={Logo} alt="dev.$savings"/>
                    { component===0 && <Card title="Liquid" value={17450.95} /> }
                    { component===1 && <Card title="Incomes" value={20000.00} /> }
                    { component===2 && <Card title="Expenses" value={-2549.05} /> }
                </Wrapper>
                <Graphic />
            </div>
            <TransactionsTable />
        </Dashboard>
    )
}

export { Dash }