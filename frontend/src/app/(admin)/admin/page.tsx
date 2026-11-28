
import {
  Package,
  Folder,
  Tag,
  Layers,
  ArrowUpRight,
  Activity,
  Database,
  ShieldCheck,
  Image,
} from "lucide-react";

const statistics = [
  {
    label: "Total products",
    value: "—",
    description: "Products in your catalogue",
    icon: Package,
  },
  {
    label: "Categories",
    value: "—",
    description: "Product categories",
    icon: Folder,
  },
  {
    label: "Brands",
    value: "—",
    description: "Registered brands",
    icon: Tag,
  },
  {
    label: "Collections",
    value: "—",
    description: "Merchandising collections",
    icon: Layers,
  },
];

const setupItems = [
  {
    title: "Backend API integration",
    description: "Connect the dashboard to your Django REST API.",
    icon: Database,
    status: "Pending",
  },
  {
    title: "Administrator authentication",
    description: "Configure secure administrator access and permissions.",
    icon: ShieldCheck,
    status: "Pending",
  },
  {
    title: "Product catalogue",
    description: "Enable product creation, editing and publishing.",
    icon: Package,
    status: "Pending",
  },
  {
    title: "Media library",
    description: "Configure product image uploads and management.",
    icon: Image,
    status: "Pending",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page heading */}
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Store management
          </p>

          <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-muted">
            Overview of your store and catalogue management.
          </p>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-xs font-medium text-muted">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          Setup in progress
        </div>
      </section>

      {/* Statistics */}
      <section>
        <div className="mb-4">
          <h2 className="text-base font-semibold">
            Catalogue overview
          </h2>
          <p className="mt-1 text-sm text-muted">
            Your store statistics will appear here once the API is connected.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statistics.map((stat) => {
            const Icon = stat.icon;

            return (
              <article
                key={stat.label}
                className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-muted">
                    {stat.label}
                  </p>

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>
                </div>

                <p className="mt-5 text-3xl font-semibold tracking-tight">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-muted">
                  {stat.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Setup and activity */}
      <section className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl border border-border bg-surface">
          <div className="border-b border-border p-5">
            <h2 className="font-semibold">
              Store setup
            </h2>
            <p className="mt-1 text-sm text-muted">
              Key components required before full administration is available.
            </p>
          </div>

          <div className="divide-y divide-border">
            {setupItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background text-muted">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-medium">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-muted">
                      {item.description}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-600 dark:text-amber-400">
                    {item.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface">
          <div className="border-b border-border p-5">
            <h2 className="font-semibold">
              Recent activity
            </h2>
            <p className="mt-1 text-sm text-muted">
              Latest changes made to your store.
            </p>
          </div>

          <div className="flex min-h-72 flex-col items-center justify-center p-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background text-muted">
              <Activity size={22} strokeWidth={1.7} />
            </div>

            <h3 className="mt-4 text-sm font-semibold">
              No activity to display
            </h3>

            <p className="mt-2 max-w-xs text-xs leading-5 text-muted">
              Store activity will appear here when administrative actions
              and activity tracking are implemented.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom information */}
      <section className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold">
            Your administration workspace
          </p>
          <p className="mt-1 text-xs text-muted">
            Manage your catalogue, store identity and merchandising from one place.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-muted">
          <span>Frontend development</span>
          <ArrowUpRight size={15} />
        </div>
      </section>
    </div>
  );
}
