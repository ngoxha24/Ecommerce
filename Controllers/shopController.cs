using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ecommerce.Controllers
{
    public class shopController : Controller
    {
        // GET: shop
        [Route("shop")]
        public ActionResult Shop(int id)
        {
            ViewBag.ShopId = id;
            return View();
        }
    }
}