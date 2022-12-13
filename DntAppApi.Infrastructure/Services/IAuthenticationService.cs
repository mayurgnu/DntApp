using DntAppApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DntAppApi.Infrastructure
{
    public interface IAuthenticationService
    {
        UserModel Authenticate(UserModel model);
    }
}
