using Bll;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SiteTemplate.Controllers
{
    [RoutePrefix("api/User")]
    [EnableCors("*","*","*")]
    public class UserController : ApiController
    {
        UserDB db = new UserDB();
        // GET: api/User
        [HttpGet]
        public RequestResult Get()
        {
            return db.GetAllUser();
        }

        [HttpGet, Route("{id}")]
        public RequestResult Get(int id)
        {
            return db.GetUser(id);
        }

        // POST: api/User
        [HttpPost]
        public RequestResult Post([FromBody]User_Dto user)
        {
            return db.AddUser(user);
        }

        // PUT: api/User
        [HttpPut]
        public RequestResult Put([FromBody] User_Dto user)
        {
            return db.UpdateUser(user);
        }

        // DELETE: api/User/5
        [HttpPut, Route("{id}")]
        public RequestResult Delete(int id)
        {
            return db.DeleteUser(id);
        }

        [HttpPost, Route("Login")]
        public RequestResult Login([FromBody] User_Dto user)
        {
            return db.LoginUser(user.UserName,user.Password);
        }
    }
}
