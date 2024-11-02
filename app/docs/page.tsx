import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Documentation</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-xl text-muted-foreground mb-8">
          Welcome to the OpenAPI Hub documentation. Here youll find everything
          you need to get started with our APIs.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="mb-4">
            Our APIs are designed to be easy to use and integrate into your
            applications. Follow these steps to get started:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Sign up for a free API key</li>
            <li>Choose the API endpoints you need</li>
            <li>Make your first API request</li>
          </ol>
          <Button asChild>
            <Link href="/docs/getting-started">Read Getting Started Guide</Link>
          </Button>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Simple API Example</h2>
          <p className="mb-4">
            Here is a quick example of how to use our Users API:
          </p>
          <pre className="bg-accent p-4 rounded-lg overflow-x-auto">
            <code>{`fetch('https://api.openhub.dev/v1/users', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
  .then(response => response.json())
  .then(data => console.log(data));`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Available APIs</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-medium">
                <Link
                  href="/docs/users-api"
                  className="text-primary hover:underline"
                >
                  Users API
                </Link>
              </h3>
              <p className="text-muted-foreground">
                Complete user management system with authentication and
                profiles.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-medium">
                <Link
                  href="/docs/products-api"
                  className="text-primary hover:underline"
                >
                  Products API
                </Link>
              </h3>
              <p className="text-muted-foreground">
                E-commerce ready product management with categories and search.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-medium">
                <Link
                  href="/docs/orders-api"
                  className="text-primary hover:underline"
                >
                  Orders API
                </Link>
              </h3>
              <p className="text-muted-foreground">
                Complete order management system with status tracking.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
