using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ecommerce.Controllers
{
    public class ClientController : Controller
    {
        // GET: Client
        [Route("home")]
        public ActionResult Home()
        {
            return View();
        }
        [Route("info")]
        public ActionResult Info()
        {
            return View();
        }
        [Route("item")]
        public ActionResult Product(string Keyword) {
            ViewBag.Keyword = Keyword;
            return View();
        }
        [Route("my-shop")]
        public ActionResult myShop()
        {
            return View();
        }
        [Route("myshop/itemlist")]
        public ActionResult itemList()
        {
            return View();
        }
    }
}