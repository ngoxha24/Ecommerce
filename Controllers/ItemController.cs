using Ecommerce.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ecommerce.Controllers
{
    public class ItemController : Controller
    {
        EcommerceEntities db = new EcommerceEntities();
        // GET: item
        [Route("product")]
        
        public ActionResult Product(int id)
        {
            var productName = db.Items.FirstOrDefault(x => x.Id == id).ItemName;

            ViewBag.ProductId = id;
            ViewBag.ProductName = productName;
            return View();
        }
    }
}