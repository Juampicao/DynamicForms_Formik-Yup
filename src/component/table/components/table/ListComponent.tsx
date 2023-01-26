
import { useEffect } from "react";
import useAxios from "../../../axios/hooks/useAxios";
import { IMethods, ObjectFetchAxios } from "../../../axios/interfaces/interfaces";
import Spiner from "../atoms/spiner/Spiner";
import Title from "../atoms/Title";
import ViewComponent from "./ViewComponent";

export interface ObjectProps{
  id: number;
  [x: string]: any;
}

interface ListComponentProps{
  url: string,
  title: string
  className?: string
}

const ListComponent = ({url, title, className} : ListComponentProps) => {
  
  let urlBase = url
  
  const { handleSubmit, state } = useAxios();
  
  const { loading, respuestaAPI } = state;

  /**
   * HandleDelete
   */
  async function handleDelete (id : number)  {
    let funcitonName = "handleDelete"
    let url = `${urlBase}/${id}`
    const fetchAxiosObject = new ObjectFetchAxios(url,  IMethods.DELETE, "", funcitonName)
    await handleSubmit(fetchAxiosObject)
    await location.reload();
  }

  const getAllData = () => {
    let funcitonName = "getAllData, ListComponent"
    let url = `${urlBase}`
    const fetchAxiosObject = new ObjectFetchAxios(url,  IMethods.GET, "", funcitonName)
    handleSubmit(fetchAxiosObject)
  }



  useEffect(() => {
    getAllData()
  }, [])
  
  return (
    <>
      {loading ? (
        <Spiner />
        ) : (
          <div className={`custom-table ${className}`}>
          <Title title={title} />
          <table >
            <thead >
              <tr >
                  {
                    respuestaAPI?.data &&
                    Object.keys(respuestaAPI.data[0]).map((ObjectKeys) => (
                        <>
                        <th> {ObjectKeys}</th>
                        </>
                      ))
                      
                    }
                    <th> Funciones </th>
                  
              </tr>
              </thead>
              <tbody >
                 {respuestaAPI?.data?.length > 0 ? (
                  respuestaAPI.data.map((object : any) => (
                    <ViewComponent
                      key={object.id}
                      object={object}
                      deleteFn={handleDelete}
                    />
                ))
              ) : (
                <p className="my-5 text-center">
                  No hay ningun objeto para mostrar
                </p>
              )}
            </tbody>
          </table>
        </div>
      )}

    </>
  )
}

export default ListComponent


//   // // Transform to array.

// export interface ObjectProps{
//   id: number;
//   [x: string]: any;
// }

// interface ListComponentProps{
//   url: string,
//   title: string
//   className?: string
// }

// Hardcoded Data

// Example Arrays
// let ArrayClubs = [{ id: 1,  name: "independiente", country: "Argentina" }, { id: 2, name: "Boca", country: "España" }]
// let ArrayPeople = [{ nombre: "susana", edad: 20 }]
  
// // Take de keys
// const object : ObjectProps = {
//   id : 10, 
//   name: "river",
//   country : "argentina",
// }




// const ListComponent = ({url, title, className} : ListComponentProps) => {
  
//   let urlBase = url
  
//   const { handleSubmit, state } = useAxios();
  
//   const { loading, respuestaAPI, errorAPI } = state;
//   const { getAll, data, cargando} = useClub()

//   /**
//    * HandleDelete
//    */
//   const handleDelete = (id : number) => {
//     let funcitonName = "handleDelete"
//     let url = `${urlBase}/${id}`
//     const fetchAxiosObject = new ObjectFetchAxios(url,  IMethods.DELETE, "", funcitonName)
//     handleSubmit(fetchAxiosObject)
//   }

//   const getAllData = () => {
//     getAll()
//   }

//   const handlePost = (data: any) => {
//     let funcitonName = "handlePost, ListComponent"
//     let url = `${urlBase}`
//     let body = {}
//     const fetchAxiosObject = new ObjectFetchAxios(url,  IMethods.GET, "", funcitonName)
//     handleSubmit(fetchAxiosObject)
//   }

//   useEffect(() => {
//     getAllData()
//     console.log(data)
//     if (respuestaAPI?.data) {
      
//       console.log(respuestaAPI.data[0])
//     }

//   }, [])
  
//   return (
//     <>
//       {loading ? (
//         <Spiner />
//         ) : (
//           <div className={`custom-table ${className}`}>
//             {JSON.stringify(data)}
//           {/* <Title title={title} />
//           <table >
//             <thead >
//               <tr >
//                   {
//                     data? 
//                     Object.keys(data[0]).map((ObjectKeys) => (
//                         <>
//                         <th> {ObjectKeys}</th>
//                         </>
//                       ))
//                       : ""
//                     }
//                     <th> Funciones </th>
                  
//               </tr>
//               </thead>
//               <tbody >
//                  {data?.length > 0 ? (
//                   respuestaAPI.data.map((object : any) => (
//                     <ViewComponent
//                       key={object.id}
//                       object={object}
//                       deleteFn={handleDelete}
//                     />
//                 ))
//               ) : (
//                 <p className="my-5 text-center">
//                   No hay ningun objeto para mostrar
//                 </p>
//               )}
//             </tbody>
//           </table> */}
//         </div>
//       )}

//     </>
//   )
// }

// export default ListComponent

