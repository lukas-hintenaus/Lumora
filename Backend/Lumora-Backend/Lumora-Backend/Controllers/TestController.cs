using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Lumora_Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class SecureController : ControllerBase
    {
        [Authorize] // Requires valid bearer token
        [HttpGet]
        public IActionResult GetSecureData()
        {
            var username = User.Identity?.Name;
            return Ok(new { message = "This is secure data", user = username });
        }

        [AllowAnonymous] // Publicly accessible
        [HttpGet("public")]
        public IActionResult GetPublicData()
        {
            return Ok(new { message = "This is public data" });
        }
    }
}
