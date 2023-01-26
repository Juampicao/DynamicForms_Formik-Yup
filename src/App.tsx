import "./App.css";
import Informacion from "./pages/Informacion";
// import formJson from "./component/forms/data/custom-form.json";
import { ObjectListProps } from "./pages/interfaces/Interfaces";
import ReutilizableFormAndTable from "./pages/ReutilizableFormAndTable";


const objectPeopleList : ObjectListProps ={
  title: "People List",
  className: "",
  url: `${import.meta.env.VITE_API_URL}/people`,
  urlSchemaForm: `${import.meta.env.VITE_API_URL}/schemaPeople`
}

const objectClubList : ObjectListProps = {
  title: "Club List",
  className: "col-span-2",
  url: `${import.meta.env.VITE_API_URL}/clubs`,
  urlSchemaForm: `${import.meta.env.VITE_API_URL}/schemaClub`
}

const App = () => {
  return (
    <>
      <div className="bg-slate-200 p-10 min-h-full">

        <Informacion/>
        <ReutilizableFormAndTable objectList={objectPeopleList} />
        <ReutilizableFormAndTable objectList={objectClubList} />

        </div>
    </>
  )
}

export default App