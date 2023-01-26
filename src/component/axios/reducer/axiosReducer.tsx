
export const axiosReducer = (state: any, action: any) => {
   switch (action.type) {
    case 'INICIO_CONSULTA_API':
           return {
               ...state,
               loading: true,
               errorAPI: null,
               respuestaAPI: "Error"
           };
    case 'RESPUESTA_CONSULTA_OK':
           return {
               ...state,
               loading: false,
               errorAPI: null,
                respuestaAPI: action.payload
           };
    case 'RESPUESTA_CONSULTA_ERROR':
           return {
               ...state,
               loading: false,
               errorAPI: action.payload,
               respuestaAPI: "Error"
           };
    default:
      return state;
  }
};


