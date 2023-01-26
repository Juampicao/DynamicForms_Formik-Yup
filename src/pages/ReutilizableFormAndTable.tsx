import { FormComponent } from '../component/forms/components'
import Header from '../component/table/components/atoms/Header'
import ListComponent from '../component/table/components/table/ListComponent'
import { ObjectListProps } from './interfaces/Interfaces'

interface ReutilizableFormAndTableProps {
    objectList: ObjectListProps
}
const ReutilizableFormAndTable = ({ objectList }: ReutilizableFormAndTableProps) => {
    
  const { title, className, url, urlSchemaForm} = objectList
  
  return (
    <>
      <Header title={title} />
      <div className='grid grid-cols-3'>
      <ListComponent className={`${className} col-span-2`} url={url} title={title}   />
      <FormComponent urlSchemaForm={urlSchemaForm}  urlPost={url} />
      </div>

    </>
  )
}

export default ReutilizableFormAndTable