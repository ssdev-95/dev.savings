import { useHistory } from 'react-router-dom'

import { Button } from '@material-ui/core'

import { DoubleArrow } from '@material-ui/icons'
import Logo from 'src/icons/logo.svg'

import { Home } from './styles'

function App() {
  const history = useHistory()

  return (
    <Home>
      <img src={Logo} alt="dev.$avings" />
      <h2>Studies show that</h2>
      <h4>you'll always have money if</h4>
      <Button onClick={()=>history.push('/dashboard')} >
        <span>Start saving today</span>
        <DoubleArrow />
      </Button>
    </Home>
  );
}

export { App }
