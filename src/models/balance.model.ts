/*conjunto de ingresos y egresos, de determinado sector, ejemplo: El usuario pepe puede tener una sección de ingresos y egresos personales, y otra para su negocio que comparte con su hermano luis, y luis tendrá la personal y la del negocio compartido con su hermano*/

import moongose,{Schema, model, Types} from 'mongoose'

const balanceCollection = 'balances'

const balanceSchema = new Schema({
    incomes:{type:Types.ObjectId, require:true},
    expenses:{type:Types.ObjectId, require:true}
})

export const balanceModel = model(balanceCollection,balanceSchema)