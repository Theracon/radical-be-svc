export const ErrorHelper = (error: unknown) => {
  return {
    stack: error instanceof Error ? error.stack : [],
    message: error instanceof Error ? error.message : String(error)
  }
}
