import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">OpenAPI Hub</h3>
            <p className="text-sm text-muted-foreground">
              Free and reliable APIs for your next project.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/docs"
                  className="text-muted-foreground hover:text-primary"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/getting-started"
                  className="text-muted-foreground hover:text-primary"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/authentication"
                  className="text-muted-foreground hover:text-primary"
                >
                  Authentication
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">APIs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/docs/users-api"
                  className="text-muted-foreground hover:text-primary"
                >
                  Users API
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/products-api"
                  className="text-muted-foreground hover:text-primary"
                >
                  Products API
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} OpenAPI Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
