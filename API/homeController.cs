using Ecommerce.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Ecommerce.API
{
    public class homeController : ApiController
    {
        EcommerceEntities db = new EcommerceEntities();
        [HttpGet]
        [Route("item/listtype")]
        public IList<ItemType> getAllType()
        {
            var res = db.ItemTypes.ToList();
            return res;
        }
        [HttpGet]
        [Route("item/discount")]
        public IList<Category> getDiscountItems() 
        {
            var res = db.Categories.Where(x => x.DiscountPrice != 0 && x.IsDeleted == false).ToList();
            return res;
        }
        [HttpGet]
        [Route("item/getlist")]
        public IList<Item> getItems() {
            var res = db.Items.Where(x => x.IsDeleted == false).ToList();
            return res;
        }
        

    }
}
