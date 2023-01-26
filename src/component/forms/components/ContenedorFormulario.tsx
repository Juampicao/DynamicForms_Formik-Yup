
interface Props {
  children: any
  className?: string
}
export const ContenedorFormularios = ({ children, className } : Props) => {
  return (
    <>
      <div className={`grid items-center p-5 py-10 xs:p-0 ${className}`} data-aos="fade-left">
        {children}
      </div>
    </>
  );
};

