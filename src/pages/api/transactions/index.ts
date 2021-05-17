import { DBConnect } from '@/pages/api/dbController'
import Transaction from '@/pages/api/transaction'

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
                await Transaction.create(body)
                
                return res.status(200).json({success:true, body: 'Successfully inserted..'})
            } catch(err) {
                console.log(err)
                return res.status(400).json({success:false, body: 'Could not insert data..'})
            }
            break
        default:
            return res.status(404).json({success:false, body: 'Page not found..'})
            break
    }
}
