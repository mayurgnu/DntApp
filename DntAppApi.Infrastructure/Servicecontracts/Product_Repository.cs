//using DntAppApi.Infrastructure.Entities;
using DntAppApi.Infrastructure;
using DntAppApi.Infrastructure.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DntAppApi.Infrastructure
{
    public class Product_Repository : IProduct_Repository
    {
        private MpContext context;
        public Product_Repository(MpContext _context)
        {
            context = _context;
        }

        public IQueryable<MstProduct> GetAll()
        {
            return context.MstProducts.AsQueryable();
        }
        public void Save(MstProduct obj)
        {
            if (obj.ProductId == 0)
            {
                context.MstProducts.Add(obj);
                context.SaveChanges();
            }
            else
            {
                context.Entry<MstProduct>(obj).State = EntityState.Modified;
                context.SaveChanges();
            }

        }
        public void Remove(int Productid)
        {
            var obj = context.MstProducts.Find(Productid);
            context.Entry<MstProduct>(obj).State = EntityState.Deleted;
            context.SaveChanges();
        }
        // Flag: Has Dispose already been called?
        bool disposed = false;

        // Public implementation of Dispose pattern callable by consumers.
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        // Protected implementation of Dispose pattern.
        protected virtual void Dispose(bool disposing)
        {
            if (disposed)
                return;

            if (disposing)
            {
                context.Dispose();
            }

            // Free any unmanaged objects here.
            disposed = true;
        }
    }
}
