using DntAppApi.Infrastructure;
using DntAppApi.Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DntAppApi.Infrastructure
{
    public interface IProduct_Repository : IDisposable
    {
        IQueryable<MstProduct> GetAll();
        void Save(MstProduct obj);
        void Remove(int Productid);
    }
}
