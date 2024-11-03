import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Tag, ShoppingCart, Zap, Search } from "lucide-react";
import Link from "next/link";
import { CopyButton } from "@/components/navigasi/copy-button";

export const metadata = {
  title: "Product API - Dokumentasi Lengkap dan Endpoint",
  description:
    "Dokumentasi lengkap Product API Dizi. Akses data produk, kategori, dan informasi inventaris dengan mudah melalui REST API."
};

export default function ProductAPIPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Introduction Section */}
      <section className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Product API</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Product API menyediakan akses ke berbagai data produk yang dapat
            Anda gunakan untuk aplikasi e-commerce Anda. Dengan dukungan untuk
            manajemen produk, kategori, dan inventaris.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <Card className="w-full">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Pencarian Mudah</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Fitur pencarian produk yang powerful dan fleksibel
                </p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Performa Tinggi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Response time cepat untuk katalog produk berskala besar
                </p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Tag className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Kategorisasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Manajemen kategori produk yang terstruktur dan hierarkis
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Available APIs Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">API yang Tersedia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Product API */}
          <Card className="w-full">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Package className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Basic Product API</CardTitle>
                  <CardDescription>
                    Endpoint dasar untuk manajemen produk
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Akses data produk dasar seperti nama, deskripsi, harga, dan
                  stok.
                </p>
                <Tabs defaultValue="get" className="w-full">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="get">GET</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                  </TabsList>
                  <TabsContent value="get">
                    <div className="relative">
                      <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                        <code className="break-all">
                          GET https://api.dizi.dev/v1/products
                        </code>
                      </pre>
                      <CopyButton text="https://api.dizi.dev/v1/products" />
                    </div>
                  </TabsContent>
                  <TabsContent value="response">
                    <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                      <code>
                        {JSON.stringify(
                          {
                            id: "prod_123",
                            name: "Smartphone X",
                            description: "Latest model with advanced features",
                            price: 799.99,
                            stock: 50,
                            created_at: "2024-01-01T00:00:00Z"
                          },
                          null,
                          2
                        )}
                      </code>
                    </pre>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>

          {/* Product Categories API */}
          <Card className="w-full">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Tag className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Product Categories API</CardTitle>
                  <CardDescription>
                    Endpoint untuk manajemen kategori produk
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Akses dan kelola kategori produk beserta hierarkinya.
                </p>
                <Tabs defaultValue="get" className="w-full">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="get">GET</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                  </TabsList>
                  <TabsContent value="get">
                    <div className="relative">
                      <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                        <code className="break-all">
                          GET https://api.dizi.dev/v1/products/categories
                        </code>
                      </pre>
                      <CopyButton text="https://api.dizi.dev/v1/products/categories" />
                    </div>
                  </TabsContent>
                  <TabsContent value="response">
                    <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                      <code>
                        {JSON.stringify(
                          {
                            id: "cat_123",
                            name: "Electronics",
                            slug: "electronics",
                            parent_id: null,
                            children: [
                              {
                                id: "cat_124",
                                name: "Smartphones",
                                slug: "smartphones",
                                parent_id: "cat_123"
                              }
                            ]
                          },
                          null,
                          2
                        )}
                      </code>
                    </pre>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>

          {/* Inventory Management API */}
          <Card className="w-full">
            <CardHeader>
              <div className="flex items-center gap-4">
                <ShoppingCart className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Inventory Management API</CardTitle>
                  <CardDescription>
                    Endpoint untuk manajemen inventaris produk
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Kelola stok produk, pembaruan inventaris, dan pelacakan
                  penjualan.
                </p>
                <Tabs defaultValue="get" className="w-full">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="get">GET</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                  </TabsList>
                  <TabsContent value="get">
                    <div className="relative">
                      <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                        <code className="break-all">
                          GET https://api.dizi.dev/v1/products/inventory
                        </code>
                      </pre>
                      <CopyButton text="https://api.dizi.dev/v1/products/inventory" />
                    </div>
                  </TabsContent>
                  <TabsContent value="response">
                    <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                      <code>
                        {JSON.stringify(
                          {
                            product_id: "prod_123",
                            sku: "SMX-001",
                            quantity: 50,
                            warehouse_id: "wh_001",
                            last_updated: "2024-01-15T10:30:00Z",
                            low_stock_threshold: 10
                          },
                          null,
                          2
                        )}
                      </code>
                    </pre>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Cara Menggunakan API</h2>
        <Card className="w-full">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  1. Dapatkan API Key
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Daftar untuk mendapatkan API key Anda yang akan digunakan
                  untuk autentikasi.
                </p>
                <Button asChild>
                  <Link href="/docs/authentication">Dapatkan API Key</Link>
                </Button>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2. Buat Request</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Gunakan API key Anda dalam header Authorization untuk setiap
                  request.
                </p>
                <div className="relative">
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`fetch('https://api.dizi.dev/v1/products', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}</code>
                  </pre>
                  <CopyButton
                    text={`fetch('https://api.dizi.dev/v1/products', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  3. Handle Response
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Response akan selalu dalam format JSON dengan struktur yang
                  konsisten.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">
                      Sukses Response (200)
                    </h4>
                    <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                      <code>
                        {JSON.stringify(
                          {
                            success: true,
                            data: {
                              id: "prod_123",
                              name: "Smartphone X",
                              price: 799.99
                            }
                          },
                          null,
                          2
                        )}
                      </code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">
                      Error Response (4xx/5xx)
                    </h4>
                    <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                      <code>
                        {JSON.stringify(
                          {
                            success: false,
                            error: {
                              code: "product_not_found",
                              message: "The requested product does not exist"
                            }
                          },
                          null,
                          2
                        )}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
