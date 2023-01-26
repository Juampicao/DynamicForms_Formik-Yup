import { useEffect, useState } from "react";
import { CustomLogger } from "../../axios/helpers/CustomLogger";
import useAxios from "../../axios/hooks/useAxios";
import { IMethods, ObjectFetchAxios } from "../../axios/interfaces/interfaces";
import Spiner from "../../table/components/atoms/spiner/Spiner";
import { DynamicForm } from "../pages";

const customLogger = new CustomLogger();

interface Props{
  urlSchemaForm: string,
  className?: string,
  urlPost: string,
}
export const FormComponent = ({ urlSchemaForm, className, urlPost }: Props) => {
  
  const { handleSubmit, state } = useAxios()
  const { respuestaAPI } = state;

  const [localLoading, setLocalLoading] = useState(true)
  
  const getCustomSchema = new ObjectFetchAxios(urlSchemaForm, IMethods.GET, "", "getCustomShemaData, FormComponent")

  useEffect(() => {
    
    if (urlSchemaForm) {
      customLogger.logDebug(`UrlSchemaForm: ${urlSchemaForm}, FormComponent`)
      try {
        handleSubmit(getCustomSchema)
        .then(() => setLocalLoading(false))
        
      } catch (error) {
        customLogger.logError("getCustomShema,FormComponent", error)
      }
    }
  }, [])
  

  
  return (
    <>

      {
        localLoading ?
          <Spiner/> :
          <>
            <DynamicForm customShema={respuestaAPI.data} urlPost={urlPost} />
          </>
      }
      </>
      )
}


