import { useRouter } from "next/router"
import connect from "../../utils/database"

export default async function handler(req, res){
    const {db} = await connect()
   
    const {query} = req
    const {id} = query
    
    const contrato = {
         numContrato: id
    }

    const response = await db.collection("contratos").findOne(contrato)

    res.status(200).json(response)
}