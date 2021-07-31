import { GrSettingsOption } from 'react-icons/gr'

import styles from './styles.module.scss'

function Spinner() {

    return (
        <div className={styles.spinner}>
            <GrSettingsOption />
            <GrSettingsOption />
        </div>
    )
}

export { Spinner }