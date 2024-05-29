using Ecommerce.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Ecommerce.API
{
    public class itemController : ApiController
    {
        EcommerceEntities db = new EcommerceEntities();
        [HttpGet]
        [Route("product/getbyid")]
        
        public Item getById(int id)
        {
            var res = db.Items.FirstOrDefault(x => x.Id == id);
            return res;
        }
        [HttpGet]
        [Route("product/getbykeyword")]
        public IList<Item> getByKeyword(string Keyword)
        {
            var res = db.Items.Where(x => x.ItemName.Contains(Keyword)).ToList();
            return res;
        }
        [HttpGet]
        [Route("product/getcategory")]
        public IList<Category> getCategories(int ItemId)
        {
            var res = db.Categories.Where(x => x.ItemId == ItemId).ToList();
            return res;
        }
        [HttpGet]
        [Route("product/getshop")]
        public AspNetUser getShop(int Id)
        {
            var sellerId = db.Items.FirstOrDefault(x => x.Id == Id).SellerId;
            var shop  = db.AspNetUsers.FirstOrDefault(x => x.Id == sellerId);
            return shop;
        }

    }
}
