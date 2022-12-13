using DntAppApi.Infrastructure;
using DntAppApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DntAppApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private IAuthenticationService _IAuthenticationService;
        public AuthenticationController(IAuthenticationService IAuthenticationService)
        {
            _IAuthenticationService = IAuthenticationService;
        }
        [HttpPost]
        public IActionResult Post([FromBody] UserModel model)
        {
            var user = _IAuthenticationService.Authenticate(model);
            if (user == null)
                return BadRequest(new { message = "Invalid credentials..." });

            return Ok(user); 
        }
    }
}
