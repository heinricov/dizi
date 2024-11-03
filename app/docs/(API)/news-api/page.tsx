import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Newspaper, Tag, Search, Zap, BarChart } from "lucide-react";
import Link from "next/link";
import { CopyButton } from "@/components/navigasi/copy-button";

export const metadata = {
  title: "Blogs API - Dokumentasi Lengkap dan Endpoint",
  description:
    "Dokumentasi lengkap Blogs API Dizi. Akses dan kelola konten blog, kategori, dan pencarian dengan mudah melalui REST API."
};

export default function BlogsAPIPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Introduction Section */}
      <section className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Blogs API</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Blogs API menyediakan akses ke berbagai data blog dan berita yang
            dapat Anda gunakan untuk aplikasi Anda. Dengan dukungan untuk
            manajemen konten, kategori, dan fitur pencarian canggih.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <Card className="w-full">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Newspaper className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Manajemen Konten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Kelola konten blog dengan mudah melalui API yang intuitif
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
                  Akses cepat ke konten dengan caching dan optimisasi query
                </p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <BarChart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Analisis Konten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Dapatkan wawasan tentang performa dan engagement konten Anda
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
          {/* Basic Blogs API */}
          <Card className="w-full">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Newspaper className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Basic Blogs API</CardTitle>
                  <CardDescription>
                    Endpoint dasar untuk manajemen blog
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Akses data blog dasar seperti judul, konten, penulis, dan
                  tanggal publikasi.
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
                          GET https://api.dizi.dev/v1/blogs
                        </code>
                      </pre>
                      <CopyButton text="https://api.dizi.dev/v1/blogs" />
                    </div>
                  </TabsContent>
                  <TabsContent value="response">
                    <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                      <code>
                        {JSON.stringify(
                          {
                            id: "blog_123",
                            title: "10 Tips for Better Productivity",
                            author: "John Doe",
                            published_at: "2024-01-15T10:30:00Z",
                            excerpt:
                              "Discover how to boost your productivity with these simple tips..."
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

          {/* Blog Categories API */}
          <Card className="w-full">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Tag className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Blog Categories API</CardTitle>
                  <CardDescription>
                    Endpoint untuk manajemen kategori blog
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Kelola dan akses kategori blog untuk pengorganisasian konten
                  yang lebih baik.
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
                          GET https://api.dizi.dev/v1/blogs/categories
                        </code>
                      </pre>
                      <CopyButton text="https://api.dizi.dev/v1/blogs/categories" />
                    </div>
                  </TabsContent>
                  <TabsContent value="response">
                    <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                      <code>
                        {JSON.stringify(
                          {
                            categories: [
                              {
                                id: "cat_1",
                                name: "Technology",
                                slug: "technology"
                              },
                              {
                                id: "cat_2",
                                name: "Productivity",
                                slug: "productivity"
                              },
                              {
                                id: "cat_3",
                                name: "Lifestyle",
                                slug: "lifestyle"
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

          {/* Blog Search API */}
          <Card className="w-full">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Search className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Blog Search API</CardTitle>
                  <CardDescription>
                    Endpoint untuk pencarian blog
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Cari blog berdasarkan kata kunci, kategori, atau tanggal
                  publikasi.
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
                          GET
                          https://api.dizi.dev/v1/blogs/search?q=productivity
                        </code>
                      </pre>
                      <CopyButton text="https://api.dizi.dev/v1/blogs/search?q=productivity" />
                    </div>
                  </TabsContent>
                  <TabsContent value="response">
                    <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                      <code>
                        {JSON.stringify(
                          {
                            results: [
                              {
                                id: "blog_123",
                                title: "10 Tips for Better Productivity",
                                excerpt:
                                  "Discover how to boost your productivity with these simple tips...",
                                category: "Productivity"
                              },
                              {
                                id: "blog_124",
                                title: "The Power of Time Management",
                                excerpt:
                                  "Learn effective time management techniques to increase your productivity...",
                                category: "Productivity"
                              }
                            ],
                            total: 2,
                            page: 1,
                            per_page: 10
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
                    <code>{`fetch('https://api.dizi.dev/v1/blogs', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}</code>
                  </pre>
                  <CopyButton
                    text={`fetch('https://api.dizi.dev/v1/blogs', {
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
                              id: "blog_123",
                              title: "10 Tips for Better Productivity",
                              author: "John Doe"
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
                              code: "blog_not_found",
                              message: "The requested blog post does not exist"
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
