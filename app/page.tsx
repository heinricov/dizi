import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Users, ShoppingCart, Zap, Code, Lock } from "lucide-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Free APIs for Your Next Project | OpenAPI Hub</title>
        <meta
          name="description"
          content="Access reliable, high-performance APIs without cost. Perfect for prototypes, learning, and production applications."
        />
        <meta
          property="og:title"
          content="Free APIs for Your Next Project | OpenAPI Hub"
        />
        <meta
          property="og:description"
          content="Explore a wide range of free, secure, and high-performance APIs designed for developers."
        />
        <meta property="og:image" content="/path/to/og-image.jpg" />{" "}
        {/* Ganti dengan path gambar relevan */}
        <meta property="og:url" content="https://yourwebsite.com" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold">
              Free APIs for Your Next{" "}
              <span className="text-primary">Project</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Access reliable, high-performance APIs without cost. Perfect for
              prototypes, learning, and production applications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/docs/getting-started">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/docs">View Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our APIs?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap
                  className="w-10 h-10 text-primary mb-2"
                  aria-label="Lightning Fast"
                />
                <CardTitle>Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Optimized for speed with global CDN distribution and minimal
                  latency.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Lock
                  className="w-10 h-10 text-primary mb-2"
                  aria-label="Secure by Default"
                />
                <CardTitle>Secure by Default</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  HTTPS encryption and optional API key authentication for your
                  security.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Code
                  className="w-10 h-10 text-primary mb-2"
                  aria-label="Developer Friendly"
                />
                <CardTitle>Developer Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive documentation and intuitive API design.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Available APIs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users
                  className="w-10 h-10 text-primary mb-2"
                  aria-label="Users API"
                />
                <CardTitle>Users API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete user management API with authentication and profiles.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/docs/users-api">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <ShoppingCart
                  className="w-10 h-10 text-primary mb-2"
                  aria-label="Products API"
                />
                <CardTitle>Products API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  E-commerce ready product management with categories and
                  search.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/docs/products-api">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Database
                  className="w-10 h-10 text-primary mb-2"
                  aria-label="Orders API"
                />
                <CardTitle>Orders API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete order management system with status tracking.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/docs/orders-api">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-accent">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">About OpenAPI Hub</h2>
            <p className="text-lg text-muted-foreground">
              We believe in empowering developers with reliable, free tools. Our
              mission is to provide high-quality APIs that help you build
              amazing applications without worrying about infrastructure or
              costs.
            </p>
            <Button asChild>
              <Link href="/docs">Explore Our APIs</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
