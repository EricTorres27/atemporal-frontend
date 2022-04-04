/* eslint-disable camelcase */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useEffect, useReducer } from 'react'
import { whoIamService, loginService } from './../services/auth.service'

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
}

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    }
  },
  LOGIN: (state, action) => {
    const { user } = action.payload
    return {
      ...state,
      isAuthenticated: true,
      user
    }
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload
    return {
      ...state,
      isAuthenticated: true,
      user
    }
  },
  UPDATE_USER: (state, action) => {
    const { user } = action.payload
    return {
      ...state,
      user
    }
  }
}

const reducer = (state, action) => (handlers[action.type]
  ? handlers[action.type](state, action)
  : state)

export const AuthContext = createContext({
  ...initialState,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
})

export const AuthProvider = (props) => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const initialize = async () => {
      try {
        const token = window.localStorage.getItem('TOKEN_ISABEL')

        if (token) {
          try {
            const user = await whoIamService(token)
            // console.log('DISPATCH INITIALIZE TOKEN', user)
            dispatch({
              type: 'INITIALIZE',
              payload: {
                isAuthenticated: true,
                user
              }
            })
          } catch (error) {
            console.log(error)
            dispatch({
              type: 'INITIALIZE',
              payload: {
                isAuthenticated: false,
                user: null
              }
            })
            window.localStorage.removeItem('TOKEN_ISABEL')
          }
        } else {
          // console.log('DISPATCH INITIALIZE NOT TOKEN')
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null
            }
          })
        }
      } catch (err) {
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null
          }
        })
        window.localStorage.removeItem('TOKEN_ISABEL')
      }
    }
    initialize()
  }, [])

  const login = async ({ correo_electronico, password }) => {
    const token = await loginService(correo_electronico, password)
    const user = await whoIamService(token)
    localStorage.setItem('TOKEN_ISABEL', token)
    dispatch({
      type: 'LOGIN',
      payload: {
        user
      }
    })
  }

  const logout = async () => {
    localStorage.removeItem('TOKEN_ISABEL')
    dispatch({ type: 'LOGOUT' })
  }

  const updateUserContext = async () => {
    const user = await whoIamService(localStorage.getItem('TOKEN_ISABEL'))
    dispatch({
      type: 'UPDATE_USER',
      payload: {
        user
      }
    })
  }

  const values = {
    ...state,
    login,
    logout,
    updateUserContext
  }

  return (
    <AuthContext.Provider
      value={values}
    >
      {children}
    </AuthContext.Provider>
  )
}
