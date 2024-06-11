using Ecommerce.Dto;
using Ecommerce.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Diagnostics;
using System.Security.Cryptography.X509Certificates;
using System.Web.Http.ValueProviders;
namespace Ecommerce.API
{
    public class sellerController : ApiController
    {
        //For itemlist
        EcommerceEntities db = new EcommerceEntities();
        [HttpGet]
        [Route("seller/getSeller")]
        public AspNetUser getSeller()
        {
            var user = db.AspNetUsers.FirstOrDefault(x => x.UserName == User.Identity.Name);
            return user;
        }
        [HttpGet]
        [Route("seller/getShop")]
        public Shop getShop()
        {
            var user = db.AspNetUsers.FirstOrDefault(x => x.UserName == User.Identity.Name);
            var shop = db.Shops.FirstOrDefault(x => x.UserId == user.Id && x.isDeleted == false && x.isApproved == true);
            return shop;
        }
        [HttpGet]
        [Route("seller/getitemlist")]
        public IList<Item> getItems(string Keyword, int Status, bool isSoldOut)
        {
            var user = db.AspNetUsers.FirstOrDefault(x => x.UserName == User.Identity.Name);
            var items = db.Items.Where(x => x.SellerId == user.Id && x.IsDeleted == false && (x.ItemName.ToLower().Contains(Keyword.ToLower()) || Keyword == null) && x.Status == Status 
            && ((x.Quantity == 0 && isSoldOut == true) || (x.Quantity > 0 && isSoldOut == false))).ToList();
            return items;
        }
        [HttpGet]
        [Route("seller/getitembyid")]
        public Item getItemById(int Id)
        {
            var item = db.Items.FirstOrDefault(x => x.Id == Id);
            return item;
        }
        [HttpPost]
        [Route("seller/additem")]
        public string addItem(ItemDto itemDto)
        {
            Item item = new Item();
            item.CreatedTime = DateTime.Now;
            item.ModifiedTime = DateTime.Now;
            item.IsApproved = true;
            item.Status = 1;
            item.IsDeleted = false;
            item.TotalOrder = 0;
            item.TotalRating = 0;
            item.ItemName = itemDto.ItemName;
            item.SellerId = itemDto.SellerId;
            item.SellerName = itemDto.SellerName;
            item.ShopId = itemDto.ShopId;
            item.Quantity = itemDto.Quantity >= 0 ? itemDto.Quantity : 0;
            
            item.ShopName = itemDto.ShopName;
            item.ItemType = itemDto.ItemType;
            item.ItemTypeId = itemDto.ItemTypeId;
            item.ItemDescription = itemDto.ItemDescription;
            item.ItemImageUrl = itemDto.ItemImageUrl;
            item.ItemFooterDescription = itemDto.ItemFooterDescription;
            item.Price = itemDto.Price;
            
            db.Items.Add(item);
            var user = db.AspNetUsers.FirstOrDefault(x => x.UserName == User.Identity.Name);
            var shop = db.Shops.FirstOrDefault(x => x.UserId == user.Id && x.isDeleted == false && x.isApproved == true);
            if (shop != null)
            {
                shop.TotalItem += 1;
            }
            db.Entry(shop).State = System.Data.Entity.EntityState.Modified;
            // Add default cate
            db.SaveChanges();
            var item_parent = db.Items.FirstOrDefault(x => x.ShopId == item.ShopId && x.ItemName == item.ItemName);
            if (item_parent != null)
            {
                categoryDto defaultCate = new categoryDto(item_parent.Id, item_parent.ItemName, "Mặc định", "Mặc định", item_parent.Price, item_parent.Quantity, 0, 0, item_parent.ItemDescription, item_parent.ItemImageUrl);
                addCategory(defaultCate);
            }
            return "Added";
        }
        [HttpPost]
        [Route("seller/updateitem")]
        public string updateItem(Item item)
        {
            db.Entry(item).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return "Updated";
        }
        [HttpPost]
        [Route("seller/deleteitem")]
        public string deleteItem(Item item)
        {
            item.IsDeleted = true;
            db.Entry(item).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return "Deleted";
        }

        //Category

        [HttpGet]
        [Route("seller/getcategorylist")]
        public IList<Category> getCategories(int ItemId)
        {
            var categories = db.Categories.Where(x => x.ItemId == ItemId && x.IsDeleted == false).ToList();
            return categories;
        }
        [HttpGet]
        [Route("seller/getcategorybyid")]
        public Category GetCategoryById(int Id)
        {
            var category = db.Categories.FirstOrDefault(x => x.Id == Id);
            return category;
        }
        [HttpPost]
        [Route("seller/addcategory")]
        public string addCategory(categoryDto cateDto)
        {
            Category cate = new Category();
            cate.Status = 1;
            cate.IsDeleted = false;
            cate.TotalOrder = 0;
            cate.ItemId = cateDto.ItemId;
            cate.ItemName = cateDto.ItemName;
            cate.CateId = cateDto.CateId;
            cate.CateName   = cateDto.CateName;
            cate.Price = cateDto.Price;
            cate.Quantity = cateDto.Quantity;  
            cate.DiscountPrice = cateDto.DiscountPrice;
            cate.QuantityDiscount = cateDto.QuantityDiscount;
            cate.Description = cateDto.Description;
            cate.ImageUrl = cateDto.ImageUrl;
            cate.IsDeleted = false;
            db.Categories.Add(cate);
            db.SaveChanges();
            
            return "Added";
        }
        [HttpPost]
        [Route("seller/updatecategory")]
        public string updateCategory(Category cate)
        {
            db.Entry(cate).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return "Updated";
        }
        [HttpPost]
        [Route("seller/deletecategory")]
        public string deleteCategory(Category cate)
        {
            cate.IsDeleted = true;
            db.Entry(cate).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return "Deleted";
        }

        //Ordertracking
        [HttpGet]
        [Route("tracking/getorderlist")]
        public IList<OrderTable> getOrders(int status)
        {
            var user = db.AspNetUsers.FirstOrDefault( x => x.UserName == User.Identity.Name);
            IList<OrderTable> orders = new List<OrderTable>();
            if (status == 4)
            {
                orders = db.OrderTables
               .Where(x => x.Status >= 4 && x.SellerId == user.Id)
               .OrderBy(x => x.Status)
               .ToList();
                return orders;
            }
           
            orders = db.OrderTables.Where(x => x.Status == status && x.SellerId == user.Id).ToList();
            return orders;

        }
        [HttpGet]
        [Route("tracking/getDeliveryList")]
        public IList<DeliveryProgress> getDeliveryList(int id)
        {
            var res = db.DeliveryProgresses.Where(x => x.OrderTableId == id).ToList();
            return res;
        }
        [HttpPost]
        [Route("tracking/updateorder")]
        public string updateOrder(OrderTable order)
        {
            DeliveryProgress dp = new DeliveryProgress();
            dp.isDeleted = false;
            dp.CreatedTime = DateTime.Now; 
            dp.OrderTableId = order.Id;
            dp.CurrentPlace = order.Description;
            db.Entry(order).State = System.Data.Entity.EntityState.Modified;
            db.DeliveryProgresses.Add(dp);
            if (order.Status == 0)
            {
                var cate = db.Categories.FirstOrDefault(x => x.CateId == order.CateId && x.CateName == order.CateName);

                cate.QuantityDiscount += order.TotalDiscount;
                cate.Quantity += order.TotalAmount;
                db.Entry(cate).State = System.Data.Entity.EntityState.Modified;
            }
            db.SaveChanges();
            return "Added";
        }
        

    }
}
