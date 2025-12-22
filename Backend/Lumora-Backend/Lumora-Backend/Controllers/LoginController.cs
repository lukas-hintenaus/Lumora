using Microsoft.AspNetCore.Mvc;

namespace Lumora_Backend.Controllers
{
    [ApiController]
    [Route("api/login")]
    public class LoginController : ControllerBase
    {
        string username = "admin";
        string password = "admin";
        [HttpPost("process")]
        public IActionResult ProcessData([FromBody] Request request)
        {
            if(request.username == username && request.password == password)
            {
                var response = new Response
                {
                    loggedIn = true,
                    userId = 12345
                };
                return Ok(response);
            }
            else
            {
                var response = new Response
                {
                    loggedIn = false,
                    userId = -1
                };
                return Ok(response);
            }
        }
    }
}
