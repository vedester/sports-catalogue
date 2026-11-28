from .models import Category, Brand, Product, ProductVariant, ProductImage
from rest_framework import serializers

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'


class ProductVariantSerializer(serializers.ModelSerializer):
    stock_quantity = serializers.IntegerField(
        source='stock.quantity',
        read_only=True
    )

    class Meta:
        model = ProductVariant
        fields = (
            'id',
            'product',
            'sku',
            'size',
            'color',
            'price',
            'created_at',
            'stock_quantity'
        )

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = (
            'id',
            'image',
            'alt_text',
            'is_primary',
            'created_at'
        )

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    brand = BrandSerializer(read_only=True)
    variants = ProductVariantSerializer(many=True, read_only=True)
    images = ProductImageSerializer(many=True, read_only=True)
    in_stock = serializers.SerializerMethodField()

    def get_in_stock(self, obj):
        return obj.variants.filter(stock__quantity__gt=0).exists()

    class Meta:
        model = Product
        fields = (
            'id',
            'category',
            'brand',
            'variants',
            'images',
            'name',
            'slug',
            'description',
            'price',
            'available',
            'is_published',
            'created_at',
            'updated_at',
            'in_stock'
        )
