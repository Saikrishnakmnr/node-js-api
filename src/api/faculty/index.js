import {Router} from 'express';


import {create, searchFaculty, update, destroy, show, index} from './controller'

const router = new Router()

router.post('/',create)

router.put('/:id',update)

router.delete('/:id',destroy)

router.get('/search',searchFaculty)

router.get('/:id', show)

router.get('/',index)


export default router