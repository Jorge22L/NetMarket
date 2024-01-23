namespace WebApi.Errors
{
    public class CodeErrorExceptions : CodeErrorResponse
    {
        public CodeErrorExceptions(int statusCode, string message = null, string details = null) : base(statusCode, message)
        {
            Details = details;
        }

        public string Details { get; set; }
    }
}
