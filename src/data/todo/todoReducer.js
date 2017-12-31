export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return state.concat(action.payload);
        case 'delete':
            return state.slice(0, action.payload).concat(state.slice(action.payload + 1, state.length));
        case 'toggle':
            return state.map((todo, i) => {
                if (i === action.payload) {
                    todo.done = !todo.done
                }
                return todo;
            });
             default:
            return state;
    }
}