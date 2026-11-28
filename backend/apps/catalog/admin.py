from django.contrib import admin
from .models import Category, Brand, Product, ProductVariant, ProductImage


class ProductVariantInline(admin.TabularInline):
    model = ProductVariant
    extra = 1


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'category',
        'brand',
        'price',
        'available',
        'is_published',
    )

    list_filter = ('available', 'is_published')

    inlines = [ProductVariantInline, ProductImageInline]


admin.site.register(Category)
admin.site.register(Brand)