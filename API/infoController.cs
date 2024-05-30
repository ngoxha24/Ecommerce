using Ecommerce.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Ecommerce.API
{
    public class infoController : ApiController
    {
        EcommerceEntities db = new EcommerceEntities();
        [HttpGet]
        [Route("info/getuser")]
        public AspNetUser getUser()
        {
            var user = db.AspNetUsers.FirstOrDefault(x => x.UserName == User.Identity.Name);
            return user;
        }

        [HttpPost]
        [Route("info/updateuser")]
        public string updateUser(AspNetUser user)
        {
            db.Entry(user).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return "Updated";
        }

    }
}
