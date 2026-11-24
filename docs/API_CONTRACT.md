# Sports Catalogue – API Contract

**Project:** Sports Catalogue  
**API Version:** v1  
**Backend:** Django + Django REST Framework  
**Frontend:** Next.js + TypeScript  
**Database:** PostgreSQL  
**Document Status:** Initial Development Specification

---

## 1. Purpose

This document defines the API endpoints, HTTP methods, request parameters, response structures and authentication requirements for the Sports Catalogue application.

It serves as a shared agreement between frontend and backend developers to ensure that both applications communicate consistently.

The initial release will provide a product catalogue with WhatsApp-based ordering. The architecture should accommodate future e-commerce functionality, including shopping carts, customer accounts, orders and online payments.

## 2. API Architecture

The backend will expose a RESTful API that the Next.js frontend will consume.

**Base URL (development):**

`http://127.0.0.1:8000/api/v1/`

**Base URL (production):**

`https://your-backend-domain.com/api/v1/`

All API responses should use JSON unless the endpoint involves file uploads.

### HTTP methods

| Method | Purpose |
|---|---|
| GET | Retrieve resources |
| POST | Create resources |
| PUT | Replace an existing resource |
| PATCH | Partially update a resource |
| DELETE | Delete a resource |

## 3. Initial Application Modules

The Django backend will initially contain these applications:

| Application | Responsibility |
|---|---|
| accounts | Authentication and user permissions |
| catalog | Products, categories, brands, images and variants |
| inventory | Stock levels and availability |
| common | Shared utilities and reusable functionality |

The `config` package will manage the Django project configuration.

## 4. Public API Endpoints

These endpoints will be accessible to website visitors without authentication.

### 4.1 Products

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products/` | Retrieve all published products |
| GET | `/products/{slug}/` | Retrieve a single product |

**Supported query parameters:**

| Parameter | Example | Description |
|---|---|---|
| search | `?search=nike` | Search products |
| category | `?category=mens-kits` | Filter by category slug |
| brand | `?brand=adidas` | Filter by brand slug |
| gender | `?gender=men` | Filter by gender |
| size | `?size=M` | Filter by available size |
| min_price | `?min_price=1000` | Minimum price |
| max_price | `?max_price=5000` | Maximum price |
| ordering | `?ordering=price` | Sort ascending by price |
| ordering | `?ordering=-price` | Sort descending by price |
| page | `?page=2` | Retrieve another page |

Multiple filters should be usable together.

Example:

`GET /products/?category=mens-kits&brand=adidas&gender=men&page=1`

### 4.2 Categories

| Method | Endpoint | Description |
|---|---|---|
| GET | `/categories/` | Retrieve all active categories |
| GET | `/categories/{slug}/` | Retrieve category details |

Initial category examples:

- Men's Kits
- Women's Kits
- Kids' Kits
- Sports Footwear

Categories should be manageable through the administration interface rather than hardcoded in the frontend.

### 4.3 Brands

| Method | Endpoint | Description |
|---|---|---|
| GET | `/brands/` | Retrieve all active brands |
| GET | `/brands/{slug}/` | Retrieve brand details |

Initial brand examples include Nike, Adidas and Puma.

## 5. Administrative API Endpoints

Administrative endpoints will be restricted to authenticated users with appropriate permissions.

### 5.1 Product management

| Method | Endpoint | Description |
|---|---|---|
| POST | `/products/` | Create a product |
| PATCH | `/products/{id}/` | Update a product |
| PUT | `/products/{id}/` | Replace a product |
| DELETE | `/products/{id}/` | Delete a product |

### 5.2 Category management

| Method | Endpoint | Description |
|---|---|---|
| POST | `/categories/` | Create a category |
| PATCH | `/categories/{id}/` | Update a category |
| DELETE | `/categories/{id}/` | Delete a category |

### 5.3 Brand management

| Method | Endpoint | Description |
|---|---|---|
| POST | `/brands/` | Create a brand |
| PATCH | `/brands/{id}/` | Update a brand |
| DELETE | `/brands/{id}/` | Delete a brand |

### 5.4 Product image management

| Method | Endpoint | Description |
|---|---|---|
| POST | `/products/{id}/images/` | Upload product images |
| DELETE | `/products/{id}/images/{image_id}/` | Delete a product image |

Image uploads will use `multipart/form-data`.

## 6. Authentication

The backend will use Django REST Framework with JWT authentication, using Simple JWT.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/token/` | Obtain access and refresh tokens |
| POST | `/auth/token/refresh/` | Refresh an access token |

Authentication requirements:

- Public catalogue endpoints should allow unauthenticated access.
- Product creation and modification must require authentication.
- Category and brand management must require authentication.
- Only authorised administrators should be able to manage catalogue records.
- Passwords must be securely hashed by Django.
- JWT secrets must be stored in environment variables.

## 7. Product Data Structure

The following is the proposed product response structure.

```json
{
  "id": 1,
  "name": "Home Football Jersey",
  "slug": "home-football-jersey",
  "description": "Home football jersey",
  "price": "3500.00",
  "category": {
    "id": 1,
    "name": "Men's Kits",
    "slug": "mens-kits"
  },
  "brand": {
    "id": 1,
    "name": "Adidas",
    "slug": "adidas"
  },
  "gender": "men",
  "images": [
    {
      "id": 1,
      "image": "http://127.0.0.1:8000/media/jersey.jpg",
      "alt_text": "Home football jersey"
    }
  ],
  "variants": [
    {
      "id": 1,
      "size": "M",
      "color": "Red",
      "stock_quantity": 5
    }
  ],
  "is_available": true,
  "is_featured": false,
  "created_at": "2026-11-24T08:00:00Z"
}
```

### Product fields

| Field | Data type | Description |
|---|---|---|
| id | Integer | Unique product identifier |
| name | String | Product name |
| slug | String | URL-friendly identifier |
| description | Text | Product description |
| price | Decimal | Product price in KES |
| category | Object | Associated category |
| brand | Object | Associated brand |
| gender | String | Target audience |
| images | Array | Product images |
| variants | Array | Available product variations |
| is_available | Boolean | Product availability |
| is_featured | Boolean | Featured product indicator |
| created_at | DateTime | Creation timestamp |

Product prices must use decimal values, not floating-point values.

## 8. Product Variants

A product may have multiple variants.

Examples:

- Jersey: S, M, L, XL, XXL.
- Football boots: EU sizes 38, 39, 40, 41, 42.
- Training shoes: Multiple sizes and colours.

Each variant should independently track its available stock.

The backend should validate stock availability when variants are created or updated.

## 9. API Response Format

### Successful collection response

Product listing endpoints should use pagination.

```json
{
  "count": 20,
  "next": "http://127.0.0.1:8000/api/v1/products/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "name": "Home Football Jersey",
      "slug": "home-football-jersey",
      "price": "3500.00"
    }
  ]
}
```

### Successful single-resource response

```json
{
  "id": 1,
  "name": "Home Football Jersey",
  "slug": "home-football-jersey",
  "price": "3500.00"
}
```

### Validation error response

Use Django REST Framework's standard validation error structure.

```json
{
  "price": [
    "Ensure this value is greater than or equal to zero."
  ]
}
```

Other expected HTTP status codes:

| Status | Meaning |
|---|---|
| 200 | Request successful |
| 201 | Resource created |
| 204 | Resource deleted successfully |
| 400 | Invalid request |
| 401 | Authentication required or invalid |
| 403 | Permission denied |
| 404 | Resource not found |
| 500 | Internal server error |

## 10. WhatsApp Ordering

The initial release will not create orders directly in the database.

Instead, customers will browse products and use a WhatsApp button to enquire or place orders.

The frontend will generate a WhatsApp link containing:

- Product name
- Product identifier
- Selected size
- Selected colour
- Displayed price
- Product URL

The customer will then complete the purchase conversation through WhatsApp.

No checkout or payment API is required in the initial release.

## 11. Future E-commerce Expansion

The following functionality is reserved for future development.

| Module | Future functionality |
|---|---|
| Customers | Customer registration and profiles |
| Cart | Shopping cart and cart items |
| Orders | Order creation and tracking |
| Payments | M-Pesa and other payment integrations |
| Inventory | Advanced stock management |
| Notifications | Order and payment notifications |

These modules should be introduced when the business is ready for full e-commerce functionality.

## 12. Development Agreement

Both developers should follow these guidelines:

1. Agree on endpoint URLs before implementation.
2. Maintain consistent JSON response structures.
3. Use descriptive field names.
4. Use slugs for public product and category detail URLs.
5. Use IDs for administrative update and deletion operations.
6. Validate incoming data on the backend.
7. Protect administrative endpoints using authentication and permissions.
8. Keep API versioning under `/api/v1/`.
9. Document any changes to the API contract.
10. Test endpoints independently before frontend integration.

## 13. Development Responsibilities

| Frontend developer | Backend developer |
|---|---|
| Next.js application | Django application |
| Product catalogue UI | Product models |
| Category pages | Category models |
| Product detail pages | Serializers and API views |
| Search and filtering interface | Filtering and search logic |
| Admin dashboard | Authentication and permissions |
| API integration | API implementation |
| Frontend validation | Backend validation |

## 14. Initial Development Milestone

The first working milestone will be:

1. Set up Django and Django REST Framework.
2. Configure the database.
3. Create the catalogue application.
4. Implement product, category and brand models.
5. Implement serializers and API views.
6. Configure API URLs.
7. Test public endpoints.
8. Connect Next.js to the Django API.
9. Display products dynamically on the frontend.

**Definition of success:** A customer should be able to visit the Next.js website, retrieve products from the Django API, browse categories and view product details without using hardcoded product data.