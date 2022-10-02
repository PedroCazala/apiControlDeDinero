import{Request, Response} from 'express'
import { IIncome } from '../interfaces/income.interface'
import { incomesServices } from '../services/incomes.services'
export class incomesController{
    static async getAll(_:Request,res:Response){
        const incomes =await incomesServices.getAll()
        res.status(200).json(incomes)
    }
    static async newIncome(req:Request,res:Response){
        const data = req.body
        const income =await incomesServices.createIncome(data)
        res.status(200).json(`Income creado con id ${income._id}`)
    }
}