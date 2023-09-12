import { Customer } from '../models/customer.js'


async function index(req, res) {
  try {
    const customers = await Customer.find({})
    res.json(customers)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function create(req, res) {
  try{
    const customer = await Customer.create(req.body)
    res.json(customer)
  } catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}

export { index, create }
