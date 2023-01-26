import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string;
    name: string;
    [x: string]: any;
}


export const MyCheckbox = ({ label, ...props }: Props ) => {

    const [ field ] = useField({ ...props, type: 'checkbox' });

    return (
        <>
            <label>
                { label }   
            </label>
            <input type="checkbox" { ...field } { ...props } />
            <ErrorMessage name={ props.name } component="span" className='error-component-styles'/>
        </>
    )
}
