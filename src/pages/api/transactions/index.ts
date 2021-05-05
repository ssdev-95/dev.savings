import { DBConnect } from '@api/dbController'

const db_name = "finances"
const collection_name = "transactions"

export default async (req, res) => {
    const client = await DBConnect()

    await client.connect()

    const collection = client.db(db_name).collection(collection_name)
    const { method, body } = req


    switch(method) {
        case 'GET': 
            try {
                const data = collection.find({})

                const transactionslist = data.map(doc=>{
                    const {_id, description, amount, type, date} = doc

                    return {
                        id: _id,
                        description: description,
                        amount: amount,
                        type: type,
                        date: date
                    }
                })

                if(!data) res.status(400).json({success:false, body: 'Could not find data..'})

                res.status(200).json({success:true, body: transactionslist})
            } catch(err) {
                res.status(400).json({success:false, body: 'Could not find data..'})
            }
            break
        case 'POST':
            try {
                const newData = await collection.insertOne(body)

                if(!newData) res.status(400).json({success:false, body: 'Could not insert data..'})

                res.status(200).json({success:true, body: 'Successfully inserted..'})
            } catch(err) {
                res.status(400).json({success:false, body: 'Could not insert data..'})
            }
            break
        default:
            res.status(404).json({success:false, body: 'Page not found..'})
            break
    }

    await client.close()
}
