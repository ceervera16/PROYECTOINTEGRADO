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
        public Variables Get()
        {
            var repo = new VariablesRepository();
            //List<Partido> partidos = repo.Retrieve();
            Variables var = repo.Retrieve();
            return var;
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

        // PUT: api/Variables
        public void Put(string tipoVar, [FromBody]int variable)
        {
            var repo = new VariablesRepository();
            repo.Update(variable, tipoVar);
        }

        // DELETE: api/Variables/5
        public void Delete(int id)
        {
        }
    }
}
