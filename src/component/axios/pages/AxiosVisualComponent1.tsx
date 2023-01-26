import useAxios from '../hooks/useAxios';
import { IClub, IMethods, ObjectFetchAxios } from '../interfaces/interfaces';
import "../styles/styles.css";


const AxiosVisualComponent1 = () => {
  
  let urlBase = 'http://localhost:4000'
  
  const { handleSubmit, state } = useAxios();
  
  const { loading, respuestaAPI, errorAPI } = state;


  /**
   * getAllClubs
   */
  const handleClickGetClubes = () => {
    let funcitonName = "handleClickGetClubes"
    let url = `${urlBase}/clubs`
    const fetchAxiosObject = new ObjectFetchAxios(url, IMethods.GET, "", funcitonName)
    handleSubmit(fetchAxiosObject)
  }


  /**
   * Post Club
   */
  const handleClickPostClub = () => {
    const fetchAxiosObject = new ObjectFetchAxios(
      `${urlBase}/clubs`,
      IMethods.POST,
      {name: "independiente", country: "Argentina" },
      "handleClickPostClub"
    )
    handleSubmit(fetchAxiosObject)
  }


  /**
   * Error Club
   */
  const handleClickErrorClubes = () => {
    let funcitonName = "handleClickErrorClubes"
    let url = `${urlBase}/clubssError`
    const club : IClub= {name: "independiente", country: "Argentina" }
    const fetchAxiosObject = new ObjectFetchAxios(url,  IMethods.POST, club, funcitonName)
    handleSubmit(fetchAxiosObject)
  }
  
  return (
    <div className='container-parent'>
      
      <h2> Componente 1</h2>
      
      <div className='axios-class'>

        <button onClick={handleClickGetClubes} type="button"> GET Clubes</button>
        
        <button onClick={handleClickPostClub} type="button"> POST Club Independiente</button>

        <button onClick={handleClickErrorClubes} type="button"> POST Clubes Error Forzado Mal Url</button>

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
 
export default AxiosVisualComponent1

  // Objeto FetchAxios para enviar al useAxios.
  // let fetchAxiosObject = new ObjectFetchAxios(urlBase, method, data, functionName )
