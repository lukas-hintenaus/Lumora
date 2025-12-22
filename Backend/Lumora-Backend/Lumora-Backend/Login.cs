namespace Lumora_Backend
{
    public class Request
    {
        public string username { get; set; }
        public string password { get; set; }
    }

    public class Response
    {
        public bool loggedIn { get; set; }
        public int userId { get; set; }
    }
}
