import { MongoClient } from "mongodb";

const url = process.env.DATABASE_URL

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

export default async function connect() {
    await client.connect()

    const db = client.db("Workspace")
    return {db, client}
}
