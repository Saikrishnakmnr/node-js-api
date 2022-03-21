import { Router } from 'express'

import students from './students'
import departments from './departments'
import faculty from './faculty'
import subjects from './subjects'

const router = new Router()

router.use('/students', students)
router.use('/departments', departments)
router.use('/faculty', faculty)
router.use('/subjects', subjects)



export default router




