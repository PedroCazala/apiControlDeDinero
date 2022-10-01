import {Schema,model} from 'mongoose'

const incomeCollection = 'incomes'
const incomeSchema = new Schema({
    day:{type:Number,require:true,min:1,max:31},
    month:{type:Number,require:true,min:1,max:12},
    year:{type:Number, require: true},
    amount:{type:Number,require:true},
    source:{type:String},
    shift:{type:String},
    description:{type:String}
})

const incomeModel = model(incomeCollection,incomeSchema)