using System;
using System.Globalization;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Ecommerce.Models;
using System.Diagnostics;

namespace Ecommerce.Controllers.AdvanceService
{
    public class ChatSupport
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IEmailService _emailService;
        private readonly ISmsService _smsService;

        public ChatSupport(UserManager<ApplicationUser> userManager, IEmailService emailService, ISmsService smsService)
        {
            _userManager = userManager;
            _emailService = emailService;
            _smsService = smsService;
        }

        public async Task SendMessage(string userId, string message)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user != null)
            {
                Debug.WriteLine($"Sending message to user {user.UserName}: {message}");

                _emailService.SendEmail(user.Email, "New Message", message);
                _smsService.SendSms(user.PhoneNumber, message);
            }
        }

        public async Task<string> GetUserName(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            return user?.UserName;
        }

        public async Task<string> GetUserEmail(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            return user?.Email;
        }

        public async Task<string> GetUserPhoneNumber(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            return user?.PhoneNumber;
        }

        public async Task<bool> IsUserOnline(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            return user?.IsOnline ?? false;
        }
    }
}
