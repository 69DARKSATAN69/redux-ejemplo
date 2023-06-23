const Reductores = (state, action) => {
    switch(action.type){
case 'INCREMENTAR':
    return state+action.payload;
case 'DECREMENTAR':
    return state-action.payload;
default:
        return state;
    }

}

export default Reductores;