Comandos:
  - 1) git clone "https://github.com/Juampicao/DynamicForms_Formik-Yup.git"
  - 2) npm run dev
  - 3) npm run json


component
    /helpers
    - CustomLogger.ts (console)
    - CustomError.ts (alert)
   /hooks
    - useAxios
   /interfaces
   /Styles
    - axiosReducer.tsx
    - AxiosComponenteVisual1.tsx componente visual
    - AxiosComponenteVisual2.tsx componente visual

- 2 Componentes para testear la reusabilidad.
- Pantalla de prueba para testeaer errores.
- UseReducer, useAxios, customLogger, customError.
- Clase fetchAxios creada(method, url, data, functionName) => para enviar la información al useAxios. 
- El useAxiosReducer modifica el estado y el componente visual lo renderiza.

JSON FAKE SERVER para simular el backend.