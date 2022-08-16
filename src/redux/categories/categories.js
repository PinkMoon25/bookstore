const CHECK_STATUS = 'CHECK_STATUS';

const checkStatus = ()=>{
    return{
        type: CHECK_STATUS
    }
};

const categoryReducer = (state=[], action)=>{
    if(action.type === CHECK_STATUS){
        return "Under Construction";
    }
    else return state;
};

export default categoryReducer;
export {checkStatus};
