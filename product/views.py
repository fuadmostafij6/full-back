

from .models import Product, Category, ProductReview
from .serializers import ProductSerializers, CatagorySerializer, ProductReviewSerializer




# from rest_framework import viewsets
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
# from rest_framework.response import Response
# from snippets.models import Snippet
# from snippets.serializers import SnippetSerializer
# from django.http import Http404
from rest_framework.response import Response
from rest_framework import status


class CategoryView(ModelViewSet):
    serializer_class = CatagorySerializer
    queryset = Category.objects.all()


class productDetailView(ModelViewSet):

    serializer_class = ProductSerializers

    def get_queryset(self):
        queryset = Product.objects.all()

        id = self.request.query_params.get('id', None)
        if id is not None:
            queryset = queryset.filter(category__id = id)
        return queryset


# class ProductReviewView(ModelViewSet):
#     queryset = ProductReview.objects.all()
#     serializer_class = ProductReviewSerializer

class ProductReviewView(APIView):


    def get(self, request, format=None):
        snippets = ProductReview.objects.all()
        serializer = ProductReviewSerializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        data = request.data
        response_msg = {"error": True}

        if data:
            new_product = Product.objects.create(
                    title=data.get('title'),
                    slug=data.get('slug')

                 )
            new_product.save()
            new_review = ProductReview.objects.create(
                    review=data.get('review'),
                    review_text=data.get('review_text'),
                    product=new_product
                    )
            new_review.save()
            response_msg = {"error": False}
        else:
            response_msg = {"error": True}
        return Response(response_msg)





        # def post(self, request,  *args, **kwargs):
        #
        #     data = request.data
        #
        #     new_product = Product.objects.create(
        #         title=data['product']['title'],
        #         slug=data['product']['slug']
        #
        #
        #      )
        #     new_product.save()
        #     new_review = ProductReview.objects.create(
        #         review=data['review'],
        #         review_text=data['review_text'],
        #         product=new_product
        #         )
        #     new_review.save()
        #     serializer = ProductReviewSerializer(new_review)
        #
        #     return Response(serializer.data)
        #










