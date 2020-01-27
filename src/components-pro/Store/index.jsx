import React, {
  useState,
  useCallback,
  useContext,
  createContext,
  useMemo
} from 'react'

const context = createContext({})

context.displayName = 'Store'

export const createStore = ({
  state: initialState = {},
  mutations: initialMutations = () => {},
  getters: initialGetters = () => {}
} = {}) => () => {
  const [state, setState] = useState(initialState)
  const patchState = useCallback((newState) => {
    setState((prevState) => ({
      ...prevState,
      ...newState
    }))
  }, [])
  const mutations = useMemo(() => initialMutations(state, patchState), [
    patchState,
    state
  ])
  const unexecedGetters = useMemo(() => initialGetters(state), [state]) || {}
  const getters = useMemo(
    () =>
      Object.keys(unexecedGetters).reduce(
        (prev, cur) => ({ ...prev, [cur]: unexecedGetters[cur]() }),
        {}
      ),
    [unexecedGetters]
  )
  return {
    state,
    mutations,
    getters
  }
}

export const withStore = (...storeNames) => (WrappedComponent) => {
  const NamedComponent = (props) => {
    const stores = useContext(context)
    const injectedProps =
      typeof storeNames[0] === 'function'
        ? storeNames[0](stores)
        : storeNames.reduce(
            (prev, cur) => ({ ...prev, [cur]: stores[cur] }),
            {}
          )
    return <WrappedComponent {...props} {...injectedProps} />
  }
  NamedComponent.displayName = 'Store.Consumer'
  return NamedComponent
}

export const useStore = (...storeNames) => {
  const stores = useContext(context)
  if (storeNames.length === 0) {
    return stores
  }
  if (storeNames.length === 1) {
    return stores[storeNames[0]]
  }
  return storeNames.map((storeName) => stores[storeName])
}

export const StoreProvider = ({ children, ...stores }) => {
  const value = combineStores(stores)
  return <context.Provider value={value}>{children}</context.Provider>
}

// ---------------- unexport ----------------

function combineStores(stores) {
  return Object.keys(stores).reduce(
    (prev, cur) => ({
      ...prev,
      [cur]: stores[cur]()
    }),
    {}
  )
}
