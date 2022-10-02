import { IIncome } from "../interfaces/income.interface"
import { incomeModel } from "../models/income.model"

export class incomesDaoMongo{

    static async getAll(){
        const incomes:IIncome[] = await incomeModel.find()
        return incomes
    }
    static async push(data:IIncome){
        const income = await incomeModel.create(data)
        return income
    }
}