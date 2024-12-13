﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ecommerce.Controllers
{
    public class CartController : Controller
    {
        // GET: cart
        [Authorize]
        [Route("cart")]
        public ActionResult Cart()
        {
            ViewBag.Title = ViewBag.ProductName;
            return View();
        }

        // POST: cart
        [Authorize]
        [Route("cart")]
        [HttpPost]
        public ActionResult Cart(FormCollection form)
        {
            ViewBag.Title = ViewBag.ProductName;
            return View();
        }
    }
}