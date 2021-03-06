import 'dotenv/config'
import Koa from 'koa'
import koaBody from 'koa-body'

import { errorHandlingMiddleware, authMiddleware } from './middlewares'
import routes from './routes'

const app = new Koa()

app.use(koaBody())
app.use(errorHandlingMiddleware)
app.use(authMiddleware)
app.use(routes.routes())

export default app
