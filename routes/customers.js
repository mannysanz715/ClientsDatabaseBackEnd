import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as customerCtrl from '../controllers/customers.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, customerCtrl.index)
router.get('/:id', checkAuth, customerCtrl.details)
router.post('/create', checkAuth, customerCtrl.create)

export { router }
