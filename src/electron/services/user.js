import { GET_LOGIN_URL } from '@/constants'
import { createIpcMain } from '@e/utils'

export default () => {
  const userLogin = createIpcMain(GET_LOGIN_URL)
  userLogin.on(() => userLogin.send(1111))
}
