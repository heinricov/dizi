import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

export default function GettingStartedPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Getting Started</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-xl text-muted-foreground mb-8">
          Welcome to OpenAPI Hub! This guide will help you get started with our
          APIs and show you how to make your first API request.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Get Your API Key</h3>
                <p className="text-muted-foreground">
                  Sign up for a free account to get your API key. You will need
                  this to authenticate your requests.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Choose Your API</h3>
                <p className="text-muted-foreground">
                  Browse our available APIs and choose the one that fits your
                  needs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Make Your First Request</h3>
                <p className="text-muted-foreground">
                  Follow our examples to make your first API request.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
          <p className="mb-4">
            All API requests require authentication using an API key. Include
            your API key in the Authorization header:
          </p>
          <pre className="bg-accent p-4 rounded-lg overflow-x-auto mb-4">
            <code>{`Authorization: Bearer YOUR_API_KEY`}</code>
          </pre>
          <Button asChild>
            <Link href="/docs/authentication">
              Learn More About Authentication
            </Link>
          </Button>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Base URL</h2>
          <p className="mb-4">All API requests should be made to:</p>
          <pre className="bg-accent p-4 rounded-lg overflow-x-auto">
            <code>https://api.openhub.dev/v1</code>
          </pre>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Rate Limiting</h2>
          <p className="mb-4">
            Free accounts are limited to 1000 requests per day. Rate limit
            information is included in the response headers:
          </p>
          <pre className="bg-accent p-4 rounded-lg overflow-x-auto">
            <code>{`X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1682640000`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <p className="mb-4">
            Now that you are set up, check out our API documentation:
          </p>
          <ul className="space-y-2">
            <li>
              <Link
                href="/docs/users-api"
                className="text-primary hover:underline"
              >
                Users API Documentation
              </Link>
            </li>
            <li>
              <Link
                href="/docs/products-api"
                className="text-primary hover:underline"
              >
                Products API Documentation
              </Link>
            </li>
            <li>
              <Link
                href="/docs/orders-api"
                className="text-primary hover:underline"
              >
                Orders API Documentation
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
