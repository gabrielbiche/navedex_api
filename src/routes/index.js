import Router from 'koa-router'

import usersRouter from './users-router'
import naversRouter from './navers-router'
import projectsRouter from './projects-router'

const router = new Router()
const api = new Router()

api.use(usersRouter)
api.use(naversRouter)
api.use(projectsRouter)

router.use(api.routes())

export default router
