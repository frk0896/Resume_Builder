const initialState = {
    basicDetails:[],
};
export default function(state = initialState,action){
    switch (action.type){
        case 'BASIC_DETAILS':
            return{...state, basicDetails: action.payload}
            default:
                return state;
    }
}