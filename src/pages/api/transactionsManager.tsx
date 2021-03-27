import firebase from './databaseController'

export const onCreate = (transaction) => {
    const {description, amount, date} = transaction
    firebase
        .firestore()
        .collection('transactions')
        .add({
            name: description,
            value: amount,
            when: date
        })
}

export const onRetrieve = () => {
    let transactions = []
    firebase
            .firestore()
            .collection('transactions')
            .onSnapshot(snapshot=>{
                snapshot
                    .docs
                    .map(doc=>{
                        transactions
                                .push({
                                    id: doc.id,
                                    description: doc.data().name,
                                    amount: doc.data().value,
                                    date: doc.data().when
                                })
                    })
            })
    return transactions
}

export const onUpdate= (id: string, transaction) => {
    firebase
        .firestore()
        .collection('transactions')
        .doc(id)
        .update({
            name: transaction.decription,
            value: transaction.amount,
            when: transaction.date
        })
}

export const onDelete = (id: string) => {
    firebase
        .firestore()
        .collection('transactions')
        .doc(id)
        .delete()
        .then(()=>alert('Status 200 - Sucessfully deleted!'))
        .catch(error=>{
            console.log(error)
            alert('Status 500 - Error deleting document!')
        })
}
