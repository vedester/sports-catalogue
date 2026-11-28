This is project for a sports catalogue website:
Front end is using: Next.js, Backend is: Django

# Sports Catalogue Website

## 1. Project Overview

The Sports Catalogue Website is a web-based platform designed to showcase and manage sports products through an organized, user-friendly online catalogue.

The platform will allow customers to browse sports products, explore categories and brands, view product details, and place orders. The initial ordering process will use WhatsApp to connect customers directly with the business.

The long-term objective is to develop a complete sports e-commerce platform with customer accounts, inventory management, order processing and online payments.

## 2. Technology Stack

The project uses a separate frontend and backend architecture.

### Frontend
- **Next.js** – React-based framework for building the user interface.
- **React** – Component-based interface development.
- **TypeScript** – Type safety and improved code maintainability.
- **Tailwind CSS** – Styling and responsive layouts.
- **Lucide React** – Icons and interface elements.

### Backend
- **Python** – Backend programming language.
- **Django** – Web framework for application logic and data management.
- **Django REST Framework (DRF)** – Building RESTful APIs for frontend-backend communication.
- **PostgreSQL** – Relational database management system.

### Development Environment
- Visual Studio Code
- Windows Subsystem for Linux (WSL)
- Git and GitHub for version control
- Python virtual environment for backend dependencies
- Node.js and npm for frontend dependencies

## 3. Project Architecture

The application follows a frontend-backend separation.

**Frontend (Next.js):**
- Displays products and categories.
- Provides navigation, search and filtering.
- Handles customer interactions.
- Communicates with the backend through API requests.
- Provides the shopping and ordering interface.

**Backend (Django and DRF):**
- Manages application data and business logic.
- Provides APIs to the frontend.
- Manages products, categories and brands.
- Handles customer accounts and authentication.
- Manages inventory and orders.
- Integrates with payment services.

**Database (PostgreSQL):**
- Stores product information.
- Stores categories and brands.
- Stores customer and account information.
- Stores inventory and order records.
- Stores payment and transaction information as the system develops.

## 4. Initial Product Categories

The initial catalogue will focus on:

1. Men's football jerseys and kits.
2. Women's football jerseys and kits.
3. Kids' football jerseys and kits.
4. Sports footwear, including football boots.

The catalogue may expand to include:
- Basketball merchandise.
- Sports accessories.
- Training equipment.
- Other sports-related products.

## 5. Planned Features

### Phase 1: Product Catalogue
- Product listing and display.
- Product categories.
- Brand management.
- Product descriptions and pricing.
- Product availability.
- Product detail pages.
- Product search and filtering.

### Phase 2: Customer Accounts
- Customer registration.
- Login and logout.
- User profiles.
- Authentication and authorization.
- Password management.

### Phase 3: Inventory Management
- Stock quantity tracking.
- Stock updates.
- Product availability management.
- Low-stock monitoring.
- Inventory movement records.

### Phase 4: Order Management
- Shopping cart.
- Order creation.
- Order item management.
- Order status tracking.
- Customer order history.
- WhatsApp ordering integration.

### Phase 5: Payments
- M-Pesa integration.
- Payment initiation and confirmation.
- Transaction status tracking.
- Payment records and notifications.

### Phase 6: Testing and Deployment
- Backend and API testing.
- Frontend testing.
- Authentication and security testing.
- Database configuration.
- Production deployment.
- Domain and HTTPS configuration.
- Backups and monitoring.

## 6. Project Structure

The repository is organized into separate frontend and backend directories.

```text
sports-catalogue/
│
├── backend/
│   ├── config/
│   ├── apps/
│   │   ├── catalog/
│   │   ├── accounts/
│   │   └── inventory/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

The backend applications will be developed as separate Django apps to keep responsibilities organized and make the project easier to maintain.

An Orders application and payment functionality will be introduced as development progresses.

## 7. Local Development Setup

### Prerequisites
- Python 3.10 or compatible version.
- Node.js and npm.
- PostgreSQL 14 or compatible version.
- Git.
- Visual Studio Code (recommended).

### 7.1 Clone the Repository

```bash
git clone https://github.com/vedester/sports-catalogue.git
cd sports-catalogue
```

### 7.2 Backend Setup

Navigate to the backend:

```bash
cd backend
```

Create and activate a virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

### 7.3 PostgreSQL Setup

Install and start PostgreSQL if it is not already installed.

Create a PostgreSQL database and a dedicated database user for the project. Use your own secure password.

Configure the database connection in the backend `.env` file.

### 7.4 Environment Variables

Create a `.env` file inside the `backend/` directory.

Use the following structure:

```dotenv
SECRET_KEY=<your-generated-django-secret-key>
DEBUG=True

DB_NAME=sports_catalogue
DB_USER=<your-postgresql-username>
DB_PASSWORD=<your-postgresql-password>
DB_HOST=127.0.0.1
DB_PORT=5432
```

Generate a Django secret key using:

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Never commit the `.env` file or share its secrets publicly.

### 7.5 Database Migrations

Apply database migrations:

```bash
python manage.py migrate
```

Create an administrator account:

```bash
python manage.py createsuperuser
```

### 7.6 Start the Backend

```bash
python manage.py runserver
```

Backend:

`http://127.0.0.1:8000/`

Django Admin:

`http://127.0.0.1:8000/admin/`

### 7.7 Frontend Setup

Open a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend:

`http://localhost:3000/`

### 7.8 API Endpoints

The backend currently exposes these public catalogue endpoints:

| Endpoint | Purpose |
|---|---|
| `/api/catalog/categories/` | List categories |
| `/api/catalog/brands/` | List brands |
| `/api/catalog/products/` | List published products |
| `/api/catalog/products/<slug>/` | Retrieve a product |

Supported product filters:

- `?category=<category-slug>`
- `?brand=<brand-slug>`
- `?search=<search-term>`
- `?available=true` or `?available=false`

**Note:** Each contributor must configure their own local PostgreSQL database and `.env` file. Database passwords and Django secret keys must never be committed to GitHub.

## 8. Version Control and Collaboration

GitHub is used for source control and collaboration between project contributors.

Development practices:
- Work on clearly defined features.
- Keep frontend and backend changes organized.
- Commit changes with descriptive messages.
- Pull and review shared changes carefully.
- Avoid overwriting another contributor's work.
- Test changes before merging them into the main branch.

## ## 9. Current Development Status

The project is under active development.

### Implemented

**Project foundation**
- Next.js frontend project.
- Django backend project.
- PostgreSQL database configuration.
- Django REST Framework integration.
- CORS configuration for local frontend-backend communication.
- Environment-based configuration using `.env`.

**Product catalogue**
- Category management.
- Brand management.
- Product management.
- Product variants with SKU, size, colour and optional variant pricing.
- Multiple product images per product.
- Primary product image selection.
- Product publication controls.
- Product availability management.

**Inventory**
- Stock records associated with individual product variants.
- Stock quantity tracking.
- Product stock availability information exposed through the catalogue API.

**Catalogue API**
- Category listing.
- Brand listing.
- Published product listing.
- Product detail retrieval by slug.
- Filtering by category and brand.
- Product search.
- Filtering by availability.
- Nested product data, including variants, images and stock quantities.

**Administration**
- Django Admin registration for categories, brands, products, variants, images and stock records.

### Still Planned

- Complete frontend integration with catalogue APIs.
- Customer registration and authentication.
- Shopping cart.
- Order creation and management.
- WhatsApp ordering workflow.
- Inventory movement history and low-stock monitoring.
- M-Pesa integration.
- Automated testing.
- Production deployment.

The initial release will prioritise a functional product catalogue with WhatsApp-based ordering. Advanced e-commerce functionality will be introduced incrementally.

## 10. Project Objective

The overall goal is to build a scalable, maintainable and user-friendly sports catalogue and e-commerce platform that connects customers with sports products while providing the business with tools to manage its catalogue, customers, stock, orders and payments.