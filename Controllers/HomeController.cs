using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ecommerce.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Chào mừng bạn đến với trang thương mại điện tử của chúng tôi - nơi bạn có thể tìm thấy mọi thứ mình cần với sự thuận tiện và đa dạng. Từ quần áo đến điện tử, từ đồ gia dụng đến đồ chơi, chúng tôi cam kết cung cấp sản phẩm chất lượng từ các thương hiệu uy tín. Với giao diện dễ sử dụng và dịch vụ khách hàng chuyên nghiệp, chúng tôi hy vọng mang lại trải nghiệm mua sắm trực tuyến tốt nhất cho mọi người. Hãy khám phá và mua sắm ngay hôm nay!";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Email: IT4409@hust.com";

            return View();
        }

    }
}