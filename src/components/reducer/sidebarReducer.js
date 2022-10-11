function reducer (state, action){
    if(action.type === 'TOGGLE_SIDEBAR'){
        // console.log(action.payload)
        return {...state, isSidebarOpen: !state.isSidebarOpen }
    }

    

}




export default reducer