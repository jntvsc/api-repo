import connect from "../../utils/database"

export default async function handler(req, res){
    const {db} = await connect()
   
    const contrato = {
        numContrato: "1001"
    }

    const response = await db.collection("contratos").findOne(contrato)

    res.status(200).json(response)
}