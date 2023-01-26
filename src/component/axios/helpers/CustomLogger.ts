export class CustomLogger{
    constructor() { }
    
    logInfo(functionName: string, message?: any) {
        console.info(`[${functionName}]`, message)
    }

    logDebug(functionName: any, message?: any) {
        console.debug(`[${functionName}]`, message)
    }

    logError(functionName: string , error: any) {
        console.error(`[${functionName}]`, error)
        // throw new Error(error)
    }
}