import {Schema,model} from 'mongoose'

const expenseCollection = 'expenses'
const expenseSchema = new Schema({
    day:{type:Number,require:true,min:1,max:31},
    month:{type:Number,require:true,min:1,max:12},
    year:{type:Number, require: true},
    amount:{type:Number,require:true},
    description:{type:String},
    tickets:{type:String}//las img de las boletas
})

const expenseModel = model(expenseCollection,expenseSchema)