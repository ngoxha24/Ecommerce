using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ecommerce.Controllers
{
    public class ItemController : Controller
    {
        // GET: item
        [Route("product")]
        public ActionResult Product(int id)
        {
            ViewBag.ProductId = id;
            return View();
        }
    }
}