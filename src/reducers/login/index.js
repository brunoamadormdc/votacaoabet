const initialState = {
    assembleia: null,
    beneficiario:{},
    status:null,
    votado:null
  }
  
  export default function Loginreducer(state = initialState, action) {
    switch (action.type) {
      
      case '@login/ADD_LOGIN':
       return Object.assign({}, state, {
          assembleia: (state.assembleia = action.payload.assembleia),
          beneficiario: (state.beneficiario = action.payload.beneficiario),
          status: (state.status = action.payload.status),
        })
      
        case '@login/VOTE_OK':
          return Object.assign({}, state, {
             assembleia: (state.assembleia = null),
             beneficiario: (state.beneficiario = {}),
             status: (state.status = null),
             votado: (state.votado = true)
           })
         
    }
    return state
  }