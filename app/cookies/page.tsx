import { PageHeader } from "@/components/layouts/page-header";
import { ResponsiveControl } from "@/components/layouts/responsive-control";

export default function CookiesPage() {
  return (
    <div className="cookies-page relative z-50">
      <PageHeader>
        <ResponsiveControl>
          <h2 className="font-semibold text-6xl">{'Cookies'}</h2>
        </ResponsiveControl>
      </PageHeader>
      <div className="cookies-list-container mt-12">

      </div>
    </div>
  )
}