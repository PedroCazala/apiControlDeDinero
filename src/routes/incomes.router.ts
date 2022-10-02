import { Router } from "express"
import { incomesController } from "../controller/incomes.controller"

const incomesRouter = Router()
//------ GET ------
//traer todos los income
incomesRouter.get('/',(_,res)=>incomesController.getAll(_,res))

//traer solo los incomes de determinado origen
//traer solo los incomes de determinado origen y turno
// traer todos los incomes con determinada fecha o rango de fechas

//------ POST ------
//Crear nuevo income
incomesRouter.post('/',(req,res)=> incomesController.newIncome(req,res) )

export{incomesRouter}