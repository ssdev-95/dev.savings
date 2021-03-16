import React from 'react'

import styles from '../../styles/components/DataTable.module.css'

export const DataTable = () => {
    return (
        <div className={styles.dataTableContainer}>
            <table className={styles.dataTable}></table>
        </div>
    )
}