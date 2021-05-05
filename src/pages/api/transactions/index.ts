import { DBConnect } from '@api/dbController'
import Transaction from '@api/transaction'

DBConnect()

export default async (req, res) => {
    const { method, body } = req


    switch(method) {
        case 'GET': 
            try {
                const data = await Transaction.find({})

                if(!data) res.status(400).json({success:false, body: 'No data found..'})

                res.status(200).json({success:true, body: data})
            } catch(err) {
                res.status(400).json({success:false, body: 'Could not find data..'})
            }
            break
        case 'POST':
            try {
                const newData = await Transaction.create(body)

                if(!newData) res.status(400).json({success:false, body: 'Couldn`t insert data..'})

                res.status(200).json({success:true, body: 'Successfully inserted..'})
            } catch(err) {
                res.status(400).json({success:false, body: 'Could not insert data..'})
            }
            break
        default:
            res.status(404).json({success:false, body: 'Page not found..'})
            break
    }
}
