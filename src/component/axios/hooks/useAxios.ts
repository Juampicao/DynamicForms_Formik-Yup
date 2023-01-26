import axios from "axios";
import { useReducer } from 'react';
import { CustomError } from "../helpers/CustomError";
import { CustomLogger } from "../helpers/CustomLogger";
import { IAxiosState, ObjectFetchAxios } from '../interfaces/interfaces';
import { axiosReducer } from '../reducer/axiosReducer';

const customLogger = new CustomLogger()
const customError = new CustomError();

//Initial State for reducer.
const INITIAL_STATE: IAxiosState = {
    loading: false,
    errorAPI: null,
    respuestaAPI: "Aun no hay data",
}


const useAxios = () => {

  const [state, dispatch] = useReducer(axiosReducer, INITIAL_STATE);
  // const [state, dispatch] = useReducer<any>(axiosReducer,INITIAL_STATE );
 
  /**
   * Axios request. 
   * @param fetchAxiosObject FetchAxios(url, method, data, functionName)
   * @returns data from axios.
   */
  const handleSubmit = async (fetchAxiosObject: ObjectFetchAxios ) => {
    

    const { method, url, data, functionName } = fetchAxiosObject; 
    
    let componenteDesmontado = false;
 
    const consultaAPI = async () => {
      
      // customLogger.logDebug("handleSubmit, useAxios", "Activando la funcion..")
      
      dispatch({ type: 'INICIO_CONSULTA_API' });
 
      try {
        const response = await axios({ method: method, url: url, data: data });
        if (!componenteDesmontado) {
          dispatch({ type: 'RESPUESTA_CONSULTA_OK', payload: response });
          customLogger.logDebug(functionName, response)
        }

      } catch (error : any) {
        if (!componenteDesmontado) {
          dispatch({ type: 'RESPUESTA_CONSULTA_ERROR', payload: error.response });
        }
        // customLogger.logError(functionName, error)
        customError.badRequest(functionName, error)
      }
      
    };
 
    await consultaAPI();
 
    return () => {
      componenteDesmontado = true;
    };
 
  }
  
  return { state, handleSubmit };
  
};
 
export default useAxios;

