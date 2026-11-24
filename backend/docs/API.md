Resource	Method	Endpoint
Products	GET	/api/v1/products/
Product details	GET	/api/v1/products/{slug}/
Categories	GET	/api/v1/categories/
Category details	GET	/api/v1/categories/{slug}/
Brands	GET	/api/v1/brands/
Product search	GET	/api/v1/products/?search=nike

For administration:
Operation	Method	Endpoint
Create product	POST	/api/v1/products/
Update product	PATCH	/api/v1/products/{id}/
Delete product	DELETE	/api/v1/products/{id}/
Create category	POST	/api/v1/categories/
Upload product images	POST	/api/v1/products/{id}/images/