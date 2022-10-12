function reducer (state, action){
    if(action.type === 'TOGGLE_SIDEBAR'){
        return {...state, isSidebarOpen: !state.isSidebarOpen }
    }

    

}




export default reducer