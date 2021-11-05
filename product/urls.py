# from django.urls import path, include
# from rest_framework import routers

from .views import CategoryView, ProductReviewView,productDetailView

from django.urls import path,include
from rest_framework import routers

# from rest_framework.urlpatterns import format_suffix_patterns
router = routers.DefaultRouter()
router.register('category', CategoryView, basename="CatagoryViewset")
router.register('peoduct', productDetailView, basename='product')
# router.register('review', ProductReviewView, basename='review')

urlpatterns = [
    path("",include(router.urls)),
    path('review/', ProductReviewView.as_view()),
    # path('review/<int:pk>/', ProductReviewViewDetails.as_view()),
]
