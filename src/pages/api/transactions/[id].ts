import { DBConnect } from '@api/dbController'

const db_name = "finances"
const collection_name = "transactions"

export default async (req, res) => {
    const client = await DBConnect()

    await client.connect()

    const collection = client.db(db_name).collection(collection_name)
    const { method, query: { id }, body } = req


    switch(method) {
        case 'PUT': 
            try {
                const data = collection.findOneAndUpdate({ _id: id}, body)

                if(!data) res.status(400).json({success:false, body: 'Could not update data..'})

                res.status(200).json({success:true, body: 'Successfully updated data'})
            } catch(err) {
                res.status(400).json({success:false, body: 'Could not update data..'})
            }
            break
        case 'DELETE':
            try {
                const deleted = await collection.findOneAndDelete({ _id:id })

                if(!deleted) res.status(400).json({success:false, body: 'Could not delete data..'})

                res.status(200).json({success:true, body: 'Successfully deleted..'})
            } catch(err) {
                res.status(400).json({success:false, body: 'Could not delete data..'})
            }
            break
        default:
            res.status(404).json({success:false, body: 'Page not found..'})
            break
    }

    await client.close()
}