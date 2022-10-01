import {Schema,model} from 'mongoose'

const userCollection = 'users'
const userSchema = new Schema({
    email:{type:String,required:true},
    password:{type:String,require:true},
    name:{type:String, required:true},
    lastName:{type:String, required:true},
    dateBird:{type:String},
    img:{type:String}
})

const userModel = model(userCollection,userSchema)