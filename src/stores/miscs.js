import { createStore } from '@/components-pro'

export default createStore({
  store: {
    header: null
  },
  mutations: (state, setState) => ({
    setHeader(header) {
      setState({ header })
    }
  })
})
