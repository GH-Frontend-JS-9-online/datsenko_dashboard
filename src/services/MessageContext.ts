import {createContext} from 'react'

export const MessageContext = createContext<any>([...JSON.parse(localStorage.getItem('allThreadMessages') as any)])
