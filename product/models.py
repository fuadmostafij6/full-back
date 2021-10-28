from django.db import models

# Create your models here.


class Category(models.Model):
    title = models.CharField(max_length=199)
    date = models.DateField(auto_now_add=True)
    image = models.ImageField(upload_to="category/")

    def __str__(self):
        return self.title


class Product(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True)
    image = models.ImageField(upload_to="products/")
    marcket_price = models.PositiveIntegerField()
    selling_price = models.PositiveIntegerField()
    description = models.TextField()

    def __str__(self):
        return self.title


# class Cart(models.Model):
#     customer = models.ForeignKey(Profile, on_delete=models.CASCADE)
#     total = models.PositiveIntegerField()
#     complit = models.BooleanField(default=False)
#     date = models.DateField(auto_now_add=True)
#
#
# class CartProduct(models.Model):
#     cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
#     product = models.ManyToManyField(Product)
#     price = models.PositiveIntegerField()
#     quantity = models.PositiveIntegerField()
#     subtotal = models.PositiveIntegerField()
#
#     def __str__(self):
#         return f"Cart=={self.cart.id}<==>CartProduct:{self.id}==Qualtity=={self.quantity}"
#
#
# ORDER_STATUS = (
#     ("Order Received", "Order Received"),
#     ("Order Processing", "Order Processing"),
#     ("On the way", "On the way"),
#     ("Order Completed", "Order Completed"),
#     ("Order Canceled", "Order Canceled"),
# )
#
#
# class Order(models.Model):
#     cart = models.OneToOneField(Cart, on_delete=models.CASCADE)
#     address = models.CharField(max_length=255)
#     mobile = models.CharField(max_length=16)
#     email = models.CharField(max_length=200)
#     total = models.PositiveIntegerField()
#     discount = models.PositiveIntegerField()
#     order_status = models.CharField(max_length=100, choices=ORDER_STATUS, default="Order Received")
#     date = models.DateField(auto_now_add=True)
#     payment_complit = models.BooleanField(default=False, blank=True, null=True)
