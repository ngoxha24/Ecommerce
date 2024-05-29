using Ecommerce.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Ecommerce.Startup))]
namespace Ecommerce
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            CreateRole();
            
        }
        public void CreateRole()
        {
            ApplicationDbContext context = new ApplicationDbContext();
            var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));
            var UserManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
            //if (!roleManager.RoleExists("Admin"))
            //{
            //    var role = new Microsoft.AspNet.Identity.EntityFramework.IdentityRole();
            //    role.Name = "Admin";
            //    roleManager.Create(role);
            //    var user = new ApplicationUser();
            //    user.UserName = "admin@gmail.com";
            //    user.Email = "admin@gmail.com";
            //    string userPWD = "Admin@123";
            //    var chkUser = UserManager.Create(user, userPWD);
                
            //    if (chkUser.Succeeded)
            //    {
            //        var result1 = UserManager.AddToRole(user.Id, "Admin");

            //    }
            //}
            //if (!roleManager.RoleExists("Seller"))
            //{
            //    var role = new Microsoft.AspNet.Identity.EntityFramework.IdentityRole();
            //    role.Name = "Seller";
            //    roleManager.Create(role);
            //    var user = new ApplicationUser();
            //    user.UserName = "seller@gmail.com";
            //    user.Email = "seller@gmail.com";
            //    string userPWD = "Admin@123";
            //    var chkUser = UserManager.Create(user, userPWD);
                
            //    if (chkUser.Succeeded)
            //    {
            //        var result1 = UserManager.AddToRole(user.Id, "Seller");
            //    }
            //}
            //if (!roleManager.RoleExists("Customer"))
            //{
            //    var role = new Microsoft.AspNet.Identity.EntityFramework.IdentityRole();
            //    role.Name = "Customer";
            //    roleManager.Create(role);
            //    var user = new ApplicationUser();
            //    user.UserName = "customer@gmail.com";
            //    user.Email = "customer@gmail.com";
            //    string userPWD = "Admin@123";
                
            //    var chkUser = UserManager.Create(user, userPWD);

            //    if (chkUser.Succeeded)
            //    {
            //        var result1 = UserManager.AddToRole(user.Id, "Customer");
            //    }
            //}
        }
    }
}
