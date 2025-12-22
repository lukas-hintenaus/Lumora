using Microsoft.AspNetCore.Mvc;
 
namespace Lumora_Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {
        private static List<Test> tests = new List<Test>
        {
            new Test{id = 1, message = "hello from backend"},
            new Test{id = 2, message = "hello world" }
        };

        [HttpGet("{id}")]
        public ActionResult<Test> Get(int id)
        {
            var test = tests.FirstOrDefault(t  => t.id == id);
            if(test == null)
            {
                return NotFound();
            }
            return Ok (test);
        }
    }
}

