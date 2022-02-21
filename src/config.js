import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env')
})

export const PORT = process.env.PORT || 3000
export const DATABASE =
  process.env.DATABASE_URL || 'postgres://root:srgty7613@localhost/navedex_api'
export const ACCESS_SECRET = process.env.ACCESS_SECRET || 'mysupersecret'
