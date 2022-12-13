using DntAppApi.Infrastructure;
using DntAppApi.Core.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DntAppApi.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        // GET api/values
        private static IProduct_Repository _IMstProduct_Repository;
        public ProductController(IProduct_Repository IMstProduct_Repository)
        {
            _IMstProduct_Repository = IMstProduct_Repository;
        }

        [HttpGet]
        public IQueryable<MstProduct> Get()
        {
            var data = _IMstProduct_Repository.GetAll();
            return data;
        }

        [HttpPost]
        public MstProduct Post(MstProduct obj)
        {
            _IMstProduct_Repository.Save(obj);
            return obj;
        }
        [HttpPut]
        public MstProduct Put(MstProduct obj)
        {
            _IMstProduct_Repository.Save(obj);
            return obj;
        }
        [HttpDelete]
        public int Delete(int Productid)
        {
            _IMstProduct_Repository.Remove(Productid);
            return 1;
        }
    }
}
