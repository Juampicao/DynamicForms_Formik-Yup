import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { CustomLogger } from '../../axios/helpers/CustomLogger';
import useAxios from '../../axios/hooks/useAxios';
import { IMethods, ObjectFetchAxios } from '../../axios/interfaces/interfaces';
import { BotonSubmit } from '../../table/components/atoms/botones/Botones';
import Spiner from '../../table/components/atoms/spiner/Spiner';
import { ContenedorFormularios, MyCheckbox, MySelect, MyTextInput } from '../components';
import { CustomSchemaProps, DynamicFormProps } from '../interfaces/interfaces';

// Css
import "../styles/styles.css";

const customLogger = new CustomLogger();

export const DynamicForm = ({ customShema, className , urlPost}: DynamicFormProps) => {

    const { handleSubmit, state } = useAxios()
    
    const [formDataValidator, setFormDataValidator] = useState<any[]>(customShema)

    const initialValues: { [key: string]: any } = {};
    const requiredFields: { [key: string]: any } = {}

    
    for (const input of formDataValidator) {
        
        // Capturo valor inicial
        initialValues[ input.name ] = input.value;


        // 1° Validacion if exist
        if ( !input.validations ) continue;

        // String
        let schema = Yup.string()
        let schemaBoolean = Yup.bool();
        
        // Itero los tipos de validacion posibles.
        for (const rule of input.validations ) {
            if ( rule.type === 'required' ) {
                schema = schema.required(rule.value ? rule.value : "Este campo es requerido");
            }

            if ( rule.type === 'minLength' ) {
                schema = schema.min( (rule as any).value || 2, `Mínimo de ${ (rule as any).value || 2 } caracteres`);
            }

            if ( rule.type === 'email' ) {
                schema = schema.email(`Revise el formato del email`);
            }

            if ( rule.type === 'checkbox' ) {
                // schema = schema.isValid(`Revise el formato del email`);
                schemaBoolean = schemaBoolean.oneOf([true], 'Acepta las politicas');
            }
            // ... otras reglas
        }

        requiredFields[input.name] = schema;
    }

    const validationSchema = Yup.object({ ...requiredFields });
    

    /**
     * Post Axios.
     * @param fetchObject ObjectFetchAxios
     */
    const onHandleSubmit = async (fetchObject : ObjectFetchAxios) => {
        handleSubmit(fetchObject)
        location.reload();
    }


    // Cargar el customSchema
    useEffect(() => {
        customLogger.logDebug("DynamicForm => CustomShema", customShema)
        setFormDataValidator(customShema)        
    }, [customShema])

    return (
        <ContenedorFormularios className={className} > 

        <div className='mx-auto'>
            <h1 className='font-bold text-center text-xl'>Dynamic Form</h1>

                {
                    formDataValidator.length < 0 ?
                        <Spiner />
                        :
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            validateOnBlur={true}
                            onSubmit={(values, { resetForm }) => {
                                customLogger.logDebug("onSubmit,DynamicForm", values)

                                const fetchObject = new ObjectFetchAxios(urlPost, IMethods.POST, values, "POSTDynamicForm")
                                onHandleSubmit(fetchObject)
                                .then(() => resetForm())
                            }}
                        >
                            {({isValid} ) => (
                                <Form noValidate className='form_container'>
                                    {formDataValidator.map(({ type, name, placeholder, label, options } : CustomSchemaProps) => {

                                        if (type === 'input' || type === 'password' || type === 'email') {
                                            return (
                                            <div>
                                                <MyTextInput
                                                    key={name}
                                                    type={(type as any)}
                                                    name={name}
                                                    label={label}
                                                    placeholder={placeholder}
                                                />
                                            </div>
                                            )

                                        } else if (type === 'select') {
                                            return (
                                            <div>
                                                <MySelect
                                                    key={name}
                                                    label={label}
                                                    name={name}
                                                    className="selectstyles"
                                                >
                                                    <option value="">Select an option</option>
                                                    {
                                                        options?.map(({ id, label }: any) => (
                                                            // <option key={id} value={id}>{label}</option> // Todo Cambiar por ID
                                                            <option key={id} value={label}>{label}</option>

                                                        ))
                                                    }
                                                </MySelect>
                                            </div>
                                            )
                                        } else if (type === 'checkbox') {
                                            return (
                                            <div className='flex items-center'>
                                                    <MyCheckbox
                                                        label={label}
                                                        name={name}
                                                        className="selectstyles"
                                                    >
                                                    </MyCheckbox>
                                            </div>
                                            )
                                        }
                            
                                        throw new Error(`El type: ${type}, no es soportado`);
                                    })}
                                                                
                                    {/* Button */}
                                    <div className='grid items-center'>                                  
                                         <BotonSubmit value={"Enviar"} type="submit" 
                                            disabled={!isValid}
                                            className={`${!isValid ? `disabled bg-blue-300 hover:bg-blue-300 active:bg-blue-300 focus:bg-blue-300` : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"}`}
                                        />                                        
                                    </div>
                                    {/* Button */}

                    
                                </Form>
                            )}
                        </Formik>
                }
            </div>
        </ContenedorFormularios>
            
    )
}
