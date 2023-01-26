import { CustomLogger } from "../../../axios/helpers/CustomLogger";
import useAxios from "../../../axios/hooks/useAxios";
import { BotonSubmit } from "../atoms/botones/Botones";
import Spiner from "../atoms/spiner/Spiner";
import { ObjectProps } from "./ListComponent";

const customLogger = new CustomLogger();

interface Props{
  object: any,
  [x: string]: any;
  deleteFn: (id: number) => void,
}

const ViewComponent = ({ object, deleteFn }: Props) => {

  const { state } = useAxios();
  const { loading } = state;

  let array : ObjectProps[]= Object.values(object)

  // HandleDelete
  function handleDelete(id : number) {
    customLogger.logDebug("HandleDelete, ViewComponent", id)
    let confirmar = confirm(
      `¿Seguro deseas eliminar a\n${object.id}?`
    );
    if (confirmar) {
      deleteFn(id)
    }
  }


  return (
    <>
      {
        loading ? <Spiner /> : 
          
       <tr
      >
        {
          array.map((objectKeys) => (
              <td key={objectKeys.id}> { objectKeys} </td>
          ))
        }
        <td className=" gap space-x-3">
          <BotonSubmit value="Eliminar" onClick={() => handleDelete(object.id)} className="bg-red-500" type={"button"} />
        </td>
          </tr>
      }
      
    </>
  )
}

export default ViewComponent


