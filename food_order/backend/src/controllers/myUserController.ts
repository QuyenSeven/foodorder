import { Request,Response } from "express"
const createCurrentUser = async(req: Request,res : Response) => {
    try {
        
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Error"
        })
    }
}

export default { createCurrentUser}