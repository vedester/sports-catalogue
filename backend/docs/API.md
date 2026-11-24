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


A. Public catalogue endpoints
These are used by the customer-facing website.
Method	Endpoint	Purpose
GET	/api/v1/products/	Retrieve products
GET	/api/v1/products/{slug}/	Retrieve one product
GET	/api/v1/categories/	Retrieve categories
GET	/api/v1/categories/{slug}/	Retrieve one category
GET	/api/v1/brands/	Retrieve brands

We should also support query parameters.

For example:
GET /api/v1/products/?search=nike
GET /api/v1/products/?category=football-kits
GET /api/v1/products/?gender=men
GET /api/v1/products/?ordering=price
GET /api/v1/products/?page=2


A query parameter is additional information passed in the URL to filter, search or organise results.
B. Administration endpoints
These will eventually power your custom Next.js admin dashboard.
Method	Endpoint	Purpose
POST	/api/v1/products/	Create product
PATCH	/api/v1/products/{id}/	Update product
DELETE	/api/v1/products/{id}/	Delete product
POST	/api/v1/categories/	Create category
POST	/api/v1/products/{id}/images/	Upload product images

All administrative endpoints must require authentication and appropriate permissions.
C. Future endpoints
We don't need to implement these now, but our architecture should accommodate them.
GET    /api/v1/cart/
POST   /api/v1/cart/items/
DELETE /api/v1/cart/items/{id}/

POST   /api/v1/orders/
GET    /api/v1/orders/
GET    /api/v1/orders/{id}/

POST   /api/v1/payments/mpesa/
GET    /api/v1/payments/{id}/