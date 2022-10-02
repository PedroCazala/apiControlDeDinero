import { incomesDaoMongo } from "../dao/incomes.daoMongo";
import { IIncome } from "../interfaces/income.interface";

export class incomesServices{
    static getAll(){
        const incomes= incomesDaoMongo.getAll()
        return incomes
    }
    static async createIncome(data:IIncome){
        const income = await incomesDaoMongo.push(data)
        return income
    }
}