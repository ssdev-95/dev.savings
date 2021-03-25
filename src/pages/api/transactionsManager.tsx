import firebase from './databaseController'

export const sendToDatabase = (transaction) => {
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

export const retrieveTransactions = () => {
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

export const updateTransaction= () => {}

export const removeTransaction = (id: string) => {
    function getIndex(docs, doc_id) {
        return docs.map(doc=>{
            return doc.id == doc_id && Number(docs.indexOf(doc))
        })
    }

    firebase
        .firestore()
        .collection('transactions')
        .onSnapshot(snap=>{
            snap
                .docs
                .splice(getIndex(snap.docs, id), 1)
        })
}
