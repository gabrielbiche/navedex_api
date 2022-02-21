import { DATABASE } from '../config'

export const development = {
  client: 'pg',
  connection: DATABASE,
  migrations: {
    directory: `${__dirname}/migrations`
  },
  seeds: {
    directory: `${__dirname}/seeds`
  }
}

export default { development }
