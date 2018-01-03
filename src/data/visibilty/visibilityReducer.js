export const visibilityReducer = (state=false,action) =>{
    switch(action.type){
        case "visibility":
        return action.payload;
        default:
        return state;
    }
}