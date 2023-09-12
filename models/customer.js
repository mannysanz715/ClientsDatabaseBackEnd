import mongoose from 'mongoose'

const Schema = mongoose.Schema

const customerSchema = new Schema({
  name: String,
  phoneNumber: String,
  address: String,
  permitNumber: String,
},{
  timestamps: true,
})

const Customer = mongoose.model('Customer', customerSchema)

export { Customer }