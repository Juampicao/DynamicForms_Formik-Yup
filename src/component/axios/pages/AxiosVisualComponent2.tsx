
import useAxios from "../hooks/useAxios";
import { IMethods, IPersona, ObjectFetchAxios } from "../interfaces/interfaces";
import "../styles/styles.css";
 

const AxiosVisualComponent2 = () => {
  
  let urlBase = 'http://localhost:4000'
  
  const { handleSubmit, state } = useAxios();
  
  const { loading, respuestaAPI, errorAPI } = state;


  /**
   * getAll
   */
  const handleClickGetPersonas = () => {
    let funcitonName = "handleClickGetPersonas"
    let url = `${urlBase}/people`
    const fetchAxiosObject = new ObjectFetchAxios(url, IMethods.GET, "", funcitonName)
    handleSubmit(fetchAxiosObject)
  } 

  /**
   * Post Persona
   */
  const handleClickPostPersona = () => {
    let funcitonName = "handleClickPostPersona"
    let url = `${urlBase}/people`
    const persona : IPersona= {name: "Santiago", age:26 }
    const fetchAxiosObject = new ObjectFetchAxios(url, IMethods.POST, persona, funcitonName)
    handleSubmit(fetchAxiosObject)
  }

  /**
   * Error Persona
   */
  const handleClickPostErrorPersonas = () => {
    let funcitonName = "handleClickPostErrorPersonas"
    let url = `${urlBase}/peopleError`
    const persona : IPersona= {name: "Santiago", age:26 }
      const fetchAxiosObject = new ObjectFetchAxios(url, IMethods.POST, persona, funcitonName)
    handleSubmit(fetchAxiosObject,)
  }
  
 
  
  return (
    <div className='container-parent'>
      
          <h2> Componente 2</h2>
          
      <div className='axios-class'>
        <button onClick={handleClickGetPersonas} type="button"> GET Personas</button>

        
        <button onClick={handleClickPostPersona} type="button"> POST Persona Santiago</button>


        <button onClick={handleClickPostErrorPersonas} type="button"> POST ERROR persona </button>

        
      </div>

      <div>
        {loading ?
          "cargando..."
          :
          <>
              <div className='container'>
                <span> Loading: </span>
                <p> {JSON.stringify(loading)} </p>
              </div>

              <div className='container'>
                <span> Respuesta Data: </span>
                <p> {JSON.stringify(respuestaAPI.data)} </p>
              </div>
            </>
        }
        {
          errorAPI ?
            <>
              <div className='container'>
                <span> Error: </span>
                <p > { JSON.stringify(errorAPI) }</p>
              </div>
            </>
            :
          ""
        }
    
      </div>
      

    </div>
  );
};
 
export default AxiosVisualComponent2

