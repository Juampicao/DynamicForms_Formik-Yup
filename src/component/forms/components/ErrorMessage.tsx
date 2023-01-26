interface ErrorMessageProps{
    message: string,
    className?: string
}

export const ErrorMessage = ({message, className}: ErrorMessageProps) => {
  return (
      <p className={`${className} error-component-styles`}> { message}</p>
  )
}
