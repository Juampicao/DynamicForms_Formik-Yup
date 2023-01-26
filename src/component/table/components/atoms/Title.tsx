
interface PropsTitle{
    title: any
}
const Title = ({title} : PropsTitle) => {
    return (
        <>
            <h2 className="text-center font-bold text-xl my-2" >{title }</h2>
        </>
  )
}

export default Title