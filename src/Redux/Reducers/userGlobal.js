const INITIAL_STATE = {
    id: null,
    name: '',
    email: '',
    nrp: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOGIN' :
            return {...INITIAL_STATE,
                id: action.payload.id,
                name: action.payload.name, 
                email: action.payload.email,
                nrp: action.payload.nrp
            }
        case 'KEEP_LOGIN':
            return {...INITIAL_STATE,
                id: action.payload.id,
                name: action.payload.name, 
                email: action.payload.email,
            }
        case 'LOG_OUT' :
            return {...INITIAL_STATE, loading: false }
    
    
            default : 
        return state
        }
    }