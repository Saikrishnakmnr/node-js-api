import {Router} from 'express'
import { searchStudent } from '../students/controller'

import {create, destroy, index, searchBybranch, searchSubject, update} from './controller'

const router = new Router()

router.post('/', create)

router.put('/:id', update)

router.get('/', index)

router.delete('/:id', destroy)

router.get('/search', searchSubject)

router.get('/:branch', searchBybranch)

export default router 



