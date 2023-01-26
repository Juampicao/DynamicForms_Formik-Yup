import { CustomLogger } from "./CustomLogger";

const customLogger = new CustomLogger();

export class CustomError{
    constructor() { }
    
    badRequest(functionName: string, message?: any) {
        customLogger.logError(`Bad Request, ${functionName}`, message)
        alert(`Ups, hubo un error de tipo badRequest en la función [${functionName}]\n\nError Message: ${message} `)
    }

}