import { Router } from "express"
import { incomesRouter } from "./incomes.router"

const router = Router()
router.use('/api/incomes',incomesRouter)

router.get('/',(req,res)=>{
    res.send('Server corriendo')
})
router.get('*',(req,res)=>{
    res.send('Página encontrada')
})
export{router}