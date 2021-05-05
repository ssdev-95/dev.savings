import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://root:sudo@cluster0.o43jk.mongodb.net/finances?retryWrites=true&w=majority"

const DBConnect = async () => {
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    client.connect(err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
    });

    return client
}

export { DBConnect }