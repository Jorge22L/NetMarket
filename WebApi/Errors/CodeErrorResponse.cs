namespace WebApi.Errors
{
    public class CodeErrorResponse
    {
        public CodeErrorResponse(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageStringCode(statusCode);
        }

        private string GetDefaultMessageStringCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "Request creado tiene errores",
                401 => "No tienes autorización para este recurso",
                404 => "Recurso no encontrado",
                500 => "Se produjeron errores en el servidor",
                _ => null
            };
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }
    }
}
