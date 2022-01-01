using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Core.Repositories.MimeType
{
//    public class MimeTypeRepository : IMimeTypeRepository
//    {

//        private THNLPContentContext ContentDbContext { get; set; }
//        public MimeTypeRepository(THNLPContentContext ctx)
//        {
//            this.ContentDbContext = ctx;
//        }

//        public Task<RepositoryResult<MIMEType>> Add(Guid TenantId, MIMEType entity)
//        {
//            throw new NotImplementedException();
//        }

//        public Task<RepositoryResult<IEnumerable<MIMEType>>> AddRange(Guid TenantId, IEnumerable<MIMEType> entities)
//        {
//            throw new NotImplementedException();
//        }

//        public async Task<RepositoryResult<IEnumerable<MIMEType>>> Find(Guid TenantId, Expression<Func<MIMEType, bool>> expression, int offset, int pageSize, int pageCount)
//{
//            var queryResult = await ContentDbContext.Set<MIMEType>().Where(expression).ToListAsync();
//            var result = new 
//                RepositoryResult<IEnumerable<MIMEType>>() 
//                    { 
//                        OperationSuccessful = queryResult != null && queryResult.Any(), 
//                        Payload = queryResult, UTCTimestamp = DateTime.UtcNow 
//                    }
//            ;
//            return result;
//        }

//        public async Task<RepositoryResult<IEnumerable<MIMEType>>> GetAll(Guid TenantId, int offset, int pageSize, int pageCount)
//        {
//            // clumsy tenant awre getall 
//            var tenant = await ContentDbContext.Tenants.Where(w => w.Id == TenantId).FirstOrDefaultAsync();
//            var queryResult = tenant.ContentCollections.SelectMany(s => s.MimeContents).Select(sm => sm.MIMEType)
//                                .Skip(offset).Take(pageSize * pageCount);

//            // var queryResult = await ContentDbContext.Set<MIMEType>().Where(w => w.MimeContents.Any()).Skip(offset).Take(pageSize * pageCount).ToListAsync();
//            var result = new 
//                RepositoryResult<IEnumerable<MIMEType>>() 
//                    { 
//                        OperationSuccessful = queryResult != null && queryResult.Any(), 
//                        Payload = queryResult, UTCTimestamp = DateTime.UtcNow 
//                    };

//            return result;
//        }

//        public async Task<RepositoryResult<MIMEType>> GetById(Guid TenantId, Guid id)
//        {
//            var queryResult = await ContentDbContext.Set<MIMEType>().FindAsync(id);
//            var result = new
//               RepositoryResult<MIMEType>()
//            {
//                OperationSuccessful = queryResult != null,
//                Payload = queryResult,
//                UTCTimestamp = DateTime.UtcNow
//            };

//            return result;
//        }

//        public Task<RepositoryResult<MIMEType>> Remove(Guid TenantId, MIMEType entity)
//        {
//            throw new NotImplementedException();
//        }

//        public Task<RepositoryResult<IEnumerable<MIMEType>>> RemoveRange(Guid TenantId, IEnumerable<MIMEType> entities)
//        {
//            throw new NotImplementedException();
//        }


//    }
}
