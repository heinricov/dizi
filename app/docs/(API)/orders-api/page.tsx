import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Truck, FileText, Zap, BarChart } from "lucide-react";
import Link from "next/link";
import { CopyButton } from "@/components/navigasi/copy-button";

export const metadata = {
  title: "Orders API - Dokumentasi Lengkap dan Endpoint",
  description:
    "Dokumentasi lengkap Orders API Dizi. Kelola pesanan, status pengiriman, dan pembayaran dengan mudah melalui REST API."
};

export default function OrdersAPIPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Introduction Section */}
      <section className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Orders API</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Orders API menyediakan akses ke berbagai data pesanan yang dapat
            Anda gunakan untuk aplikasi e-commerce Anda. Dengan dukungan untuk
            manajemen pesanan, status pengiriman, dan informasi pembayaran.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <Card className="w-full">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Manajemen Pesanan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Kelola pesanan dengan mudah dari pembuatan hingga pengiriman
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
                  Proses pesanan dengan cepat dan efisien untuk volume tinggi
                </p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <BarChart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Analisis Pesanan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Dapatkan wawasan mendalam tentang tren pesanan dan perilaku
                  pelanggan
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
          {/* Basic Orders API */}
          <Card className="w-full">
            <CardHeader>
              <div className="flex items-center gap-4">
                <ShoppingBag className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Basic Orders API</CardTitle>
                  <CardDescription>
                    Endpoint dasar untuk manajemen pesanan
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Akses data pesanan dasar seperti ID pesanan, total, dan
                  status.
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
                          GET https://api.dizi.dev/v1/orders
                        </code>
                      </pre>
                      <CopyButton text="https://api.dizi.dev/v1/orders" />
                    </div>
                  </TabsContent>
                  <TabsContent value="response">
                    <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                      <code>
                        {JSON.stringify(
                          {
                            id: "order_123",
                            customer_id: "cust_456",
                            total: 129.99,
                            status: "processing",
                            created_at: "2024-01-15T10:30:00Z"
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

          {/* Order Details API */}
          <Card className="w-full">
            <CardHeader>
              <div className="flex items-center gap-4">
                <FileText className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Order Details API</CardTitle>
                  <CardDescription>
                    Endpoint untuk informasi detail pesanan
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Dapatkan informasi lengkap pesanan termasuk item yang dipesan
                  dan alamat pengiriman.
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
                          GET https://api.dizi.dev/v1/orders/{"{order_id}"}
                        </code>
                      </pre>
                      <CopyButton text="https://api.dizi.dev/v1/orders/{order_id}" />
                    </div>
                  </TabsContent>
                  <TabsContent value="response">
                    <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                      <code>
                        {JSON.stringify(
                          {
                            id: "order_123",
                            customer_id: "cust_456",
                            items: [
                              {
                                product_id: "prod_789",
                                quantity: 2,
                                price: 59.99
                              },
                              {
                                product_id: "prod_101",
                                quantity: 1,
                                price: 10.01
                              }
                            ],
                            shipping_address: {
                              street: "123 Main St",
                              city: "Anytown",
                              state: "CA",
                              zip: "12345"
                            },
                            total: 129.99,
                            status: "processing"
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

          {/* Order Status API */}
          <Card className="w-full">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Truck className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Order Status API</CardTitle>
                  <CardDescription>
                    Endpoint untuk pembaruan status pesanan
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Perbarui dan lacak status pesanan dari pemrosesan hingga
                  pengiriman.
                </p>
                <Tabs defaultValue="put" className="w-full">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="put">PUT</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                  </TabsList>
                  <TabsContent value="put">
                    <div className="relative">
                      <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                        <code className="break-all">
                          PUT https://api.dizi.dev/v1/orders/{"{order_id}"}
                          /status
                        </code>
                      </pre>
                      <CopyButton text="https://api.dizi.dev/v1/orders/{order_id}/status" />
                    </div>
                  </TabsContent>
                  <TabsContent value="response">
                    <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                      <code>
                        {JSON.stringify(
                          {
                            id: "order_123",
                            status: "shipped",
                            updated_at: "2024-01-16T14:45:00Z"
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
                    <code>{`fetch('https://api.dizi.dev/v1/orders', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}</code>
                  </pre>
                  <CopyButton
                    text={`fetch('https://api.dizi.dev/v1/orders', {
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
                              id: "order_123",
                              status: "processing",
                              total: 129.99
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
                              code: "order_not_found",
                              message: "The requested order does not exist"
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
