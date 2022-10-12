import React, { useContext,useReducer } from "react"
import reducer from "../components/reducer/sidebarReducer"

const sidebarContext = React.createContext()

const initialState = {
    isSidebarOpen: false,

}


const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    
    const toggleSidebar = () => {
        dispatch({type:'TOGGLE_SIDEBAR'})
    }

  return <sidebarContext.Provider value={{...state, toggleSidebar}}>{children}</sidebarContext.Provider>
}



export {AppProvider, sidebarContext}
