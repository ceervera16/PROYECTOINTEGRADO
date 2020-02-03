using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi_Robotica.Models;

namespace WebApi_Robotica.Controllers
{
    public class VariablesController : ApiController
    {
        // GET: api/Variables
        public IEnumerable<Variables> Get()
        {
            var repo = new VariablesRepository();
            //List<Partido> partidos = repo.Retrieve();
            List<Variables> vars = repo.Retrieve();
            return vars;
        }

        // GET: api/Variables/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Variables
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Variables/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Variables/5
        public void Delete(int id)
        {
        }
    }
}
