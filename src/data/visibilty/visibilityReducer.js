export const visibilityReducer = (state=false,action) =>{
    switch(action.type){
        case "visit_toggle":
        return !state.value;
        case "visit_active":
        return state.text.concat(action.text);
        default:
        return state;
    }
}