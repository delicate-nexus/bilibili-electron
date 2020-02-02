import { createIpcHook } from '@/utils'
import { GET_LOGIN_URL } from '@/constants'

export const useLoginUrl = createIpcHook(GET_LOGIN_URL)
