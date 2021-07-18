import { useContext } from 'react'
import { NavigationContext } from 'src/contexts/Navigation'

function useNavigation() {

    return useContext(NavigationContext)
}

export { useNavigation }