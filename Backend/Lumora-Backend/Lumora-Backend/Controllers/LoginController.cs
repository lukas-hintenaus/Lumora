using Lumora_Backend.Infrastructure;
using Microsoft.AspNetCore.Mvc;

namespace Lumora_Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly TokenService _tokenService;

        public AuthController(TokenService tokenService)
        {
            _tokenService = tokenService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {

            Console.WriteLine($"Username: '{request.Username}'");
            Console.WriteLine($"Password: '{request.Password}'");

            // Validate credentials (check against database)
            if (IsValidUser(request.Username, request.Password))
            {
                var token = _tokenService.GenerateToken(
                    request.Username,
                    "user-id-123");

                return Ok(new { token });
            }

            return Unauthorized();
        }

        private bool IsValidUser(string username, string password)
        {
            // TODO: Implement actual validation against your database
            return username == "admin" && password == "admin";
        }
    }

    public record LoginRequest(string Username, string Password);

}