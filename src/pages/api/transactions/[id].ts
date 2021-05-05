import { DBConnect } from '@api/dbController'
import Transaction from '@api/transaction'

DBConnect()

export default async (req, res) => {
    const { method, query: { id }, body } = req

    switch(method) {
        case 'PUT': 
            try {
                const data = await Transaction.findByIdAndUpdate(id, body, {
                    new: true,
                    runValidators: true
                })

                if(!data) res.status(400).json({success:false, body: 'Could not update data..'})

                res.status(200).json({success:true, body: 'Successfully updated data'})
            } catch(err) {
                res.status(400).json({success:false, body: 'Couldn`t update data'})
            }
            break
        case 'DELETE':
            try {
                const deleted = await Transaction.deleteOne({ _id:id })

                if(!deleted) res.status(400).json({success:false, body: 'Could not delete data..'})

                res.status(200).json({success:true, body: 'Successfully deleted..'})
            } catch(err) {
                res.status(400).json({success:false, body: 'Couldn`t delete data..'})
            }
            break
        default:
            res.status(404).json({success:false, body: 'Page not found..'})
            break
    }
}