const logger = {
    info: (...params: string[]) => console.log(...params),
    error: (...params: string[]) => console.error(...params),
}

export default logger