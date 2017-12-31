export default (reducer) =>{
    let state;
    let list = [];

    function getState(){
      return state;
    }

    function dispatch(action){
      state = reducer(state, action);                          
      list.forEach(fu => fu());
    }

    function subscribe(fu){
      list.push(fu);
    }

    dispatch({});

    return({
      getState,
      dispatch,
      subscribe
    }
    );
  }