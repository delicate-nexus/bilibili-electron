import { ipc } from '@/utils'
import { GET_USER_INFO } from '@/constants'

export const getLoginUrl = () => ipc.get(GET_USER_INFO)
