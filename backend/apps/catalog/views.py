from rest_framework import generics
from rest_framework.permissions import AllowAny
from django.db.models import Q

from .models import Category, Brand, Product
from .serializers import (
    CategorySerializer,
    BrandSerializer,
    ProductSerializer,
)


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all().order_by('name')
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]


class BrandListView(generics.ListAPIView):
    queryset = Brand.objects.all().order_by('name')
    serializer_class = BrandSerializer
    permission_classes = [AllowAny]


class ProductListView(generics.ListAPIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        queryset = Product.objects.filter(
        is_published=True
        ).select_related(
            'category', 'brand'
        ).prefetch_related(
            'variants__stock',
            'images'
        ).order_by('-created_at')

        category = self.request.query_params.get('category')
        brand = self.request.query_params.get('brand')
        search = self.request.query_params.get('search')
        available = self.request.query_params.get('available')

        if category:
            queryset = queryset.filter(category__slug=category)

        if brand:
            queryset = queryset.filter(brand__slug=brand)

        if search:
            queryset = queryset.filter(
                Q(name__icontains=search) |
                Q(description__icontains=search) |
                Q(brand__name__icontains=search) |
                Q(category__name__icontains=search)
            )

        if available is not None:
            queryset = queryset.filter(available=available.lower() == 'true')

        return queryset

class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.filter(
        is_published=True
    ).select_related(
        'category', 'brand'
    ).prefetch_related(
        'variants__stock',
        'images'
    )

    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    lookup_field = 'slug'
