using DntAppApi.Core.Entities;
using DntAppApi.Models;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace DntAppApi.Infrastructure
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly AppSettings _appSettings;
        private MpContext context;
        List<UserModel> _list = new List<UserModel>()
        {
            new UserModel { Id = 101, UserName = "A", Password = "A"},
            new UserModel { Id = 102, UserName = "B", Password = "B"},
            new UserModel { Id = 103, UserName = "C", Password = "C"}
        };
        public AuthenticationService(IOptions<AppSettings> appSettings, MpContext _context)
        {
            context = _context;
            _appSettings = appSettings.Value;
        }

        public UserModel Authenticate(UserModel model)
        {
            try
            {

                var DTO = _list.FirstOrDefault(x => x.UserName == model.UserName && x.Password == model.Password);
                if (DTO == null)
                    return null;
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_appSettings.Key);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new System.Security.Claims.ClaimsIdentity(
                        new Claim[]
                        {
                        new Claim(ClaimTypes.Name,model.UserName),
                        new Claim(ClaimTypes.Role, "Admin"),
                        new Claim(ClaimTypes.Version, "V3.1")
                        }),
                    Expires = DateTime.UtcNow.AddDays(2),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                model.token = tokenHandler.WriteToken(token);
                model.Password = null;
            }
            catch (Exception ex)
            {
                var aa = ex.Message;
                throw ex;
            }
            return model;
        }
    }
}
