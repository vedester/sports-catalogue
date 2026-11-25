Milestone 1 — Project foundation and design system
Our starting point
- Finalise frontend architecture.
- Establish colour palette, typography, spacing and design tokens.
- Configure reusable UI primitives.
- Establish responsive layout conventions.
- Clean up the generated Next.js starter configuration where necessary.
Deliverable: A consistent design foundation ready for application development.



Milestone 2 — Main storefront and navigation
- Header and navigation.
- Responsive mobile navigation.
- Homepage hero section.
- Featured categories.
- Featured products.
- Promotional sections.
- Footer.
Deliverable: A complete, responsive storefront homepage.



Milestone 3 — Product catalogue
- Product listing page.
- Product cards.
- Category filtering.
- Brand filtering.
- Search.
- Sorting and pagination.
- Loading, empty and error states.
Deliverable: Customers can find and browse products easily.



Milestone 4 — Product details and WhatsApp ordering
- Product detail pages.
- Product image gallery.
- Product descriptions and specifications.
- Product availability display.
- WhatsApp ordering with prefilled product details.
Deliverable: Customers can inspect a product and initiate an order through WhatsApp.



Milestone 5 — Backend development and API integration
- Django project configuration.
- Product, category and brand models.
- Serializers and API views.
- Filtering, searching and pagination.
- PostgreSQL integration.
- Frontend API services.
- Replace mock data with real API responses.
Deliverable: The storefront operates using real backend data.



Milestone 6 — Administration dashboard
- Admin authentication.
- Dashboard overview.
- Product management.
- Category and brand management.
- Image uploads.
- Product availability and pricing management.
Deliverable: Administrators can manage the catalogue without editing source code.



Milestone 7 — Testing, security and performance
- Frontend and backend testing.
- API validation and permissions.
- Responsive testing.
- Accessibility checks.
- Image optimisation.
- SEO and metadata.
- Error handling and security review.
Deliverable: A tested, reliable application ready for deployment.



Milestone 8 — Deployment and documentation
- Production environment configuration.
- Frontend and backend deployment.
- Database configuration.
- Domain and HTTPS.
- Environment variables.
- Deployment and maintenance documentation.
Deliverable: A publicly accessible production website.



Milestone 9 — Future e-commerce capabilities
- Shopping cart.
- Customer accounts.
- Checkout.
- M-Pesa integration.
- Order management.
- Inventory tracking.
- Order notifications.

frontend/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── logos/
│
├── src/
│   │
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   │
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── categories/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   └── admin/
│   │       ├── login/
│   │       └── dashboard/
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   └── shared/
│   │
│   ├── features/
│   │   ├── products/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── types/
│   │   │
│   │   ├── categories/
│   │   ├── brands/
│   │   └── admin/
│   │
│   ├── services/
│   │   ├── api.ts
│   │   └── endpoints.ts
│   │
│   ├── lib/
│   ├── hooks/
│   ├── types/
│   └── config/
│
├── package.json
└── tsconfig.json