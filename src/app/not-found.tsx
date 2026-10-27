import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md rounded-lg border p-6">
        <h1 className="text-lg font-semibold">No page at this address</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The only route that exists is the dashboard.
        </p>
        <Link
          href="/dashboard"
          className="mt-6 inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Open the dashboard
        </Link>
      </div>
    </div>
  );
}
