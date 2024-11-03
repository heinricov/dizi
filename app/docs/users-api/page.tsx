import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, GraduationCap, Code, Lock, Zap } from "lucide-react";
import Link from "next/link";
import { CopyButton } from "@/components/navigasi/copy-button";
import { FaImage } from "react-icons/fa6";

export const metadata = {
  title: "Users API - Dokumentasi Lengkap dan Endpoint",
  description:
    "Dokumentasi lengkap Users API Dizi. Akses data pengguna, gambar profil, dan informasi sekolah dengan mudah melalui REST API."
};

export default function UsersAPIPage() {
  return (
    <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Introduction Section */}
      <section className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Users API</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Users API menyediakan akses ke berbagai data pengguna yang dapat
            Anda gunakan untuk aplikasi Anda. Dengan dukungan untuk manajemen
            pengguna dasar, gambar profil, dan data sekolah.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Aman</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Dilengkapi dengan autentikasi API key dan rate limiting
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Cepat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Response time cepat dengan CDN global
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Mudah</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Dokumentasi lengkap dan format JSON yang konsisten
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Available APIs Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">API yang Tersedia</h2>
        <div className="grid gap-6">
          {/* Basic Users API */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Basic Users API</CardTitle>
                  <CardDescription>
                    Endpoint dasar untuk manajemen pengguna
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Akses data pengguna dasar seperti nama, email, dan informasi
                  profil lainnya.
                </p>
                <Tabs defaultValue="get" className="w-full">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="get">GET</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                  </TabsList>
                  <TabsContent value="get">
                    <div className="relative">
                      <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                        <code>GET https://api.dizi.dev/v1/users</code>
                      </pre>
                      <CopyButton text="https://api.dizi.dev/v1/users" />
                    </div>
                  </TabsContent>
                  <TabsContent value="response">
                    <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                      <code>
                        {JSON.stringify(
                          {
                            id: "user_123",
                            name: "John Doe",
                            email: "john@example.com",
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

          {/* Users with Images API */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <FaImage className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Users with Images API</CardTitle>
                  <CardDescription>
                    Endpoint untuk data pengguna dengan gambar profil
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Dapatkan data pengguna lengkap dengan URL gambar profil dan
                  avatar.
                </p>
                <Tabs defaultValue="get" className="w-full">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="get">GET</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                  </TabsList>
                  <TabsContent value="get">
                    <div className="relative">
                      <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                        <code>
                          GET https://api.dizi.dev/v1/users/with-images
                        </code>
                      </pre>
                      <CopyButton text="https://api.dizi.dev/v1/users/with-images" />
                    </div>
                  </TabsContent>
                  <TabsContent value="response">
                    <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                      <code>
                        {JSON.stringify(
                          {
                            id: "user_123",
                            name: "John Doe",
                            email: "john@example.com",
                            profile_image:
                              "https://api.dizi.dev/images/profile/123.jpg",
                            avatar: "https://api.dizi.dev/images/avatar/123.jpg"
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

          {/* School Users API */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>School Users API</CardTitle>
                  <CardDescription>
                    Endpoint untuk data pengguna dengan informasi sekolah
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Akses data pengguna dengan informasi sekolah seperti nama
                  sekolah, tingkat, dan jurusan.
                </p>
                <Tabs defaultValue="get" className="w-full">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="get">GET</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                  </TabsList>
                  <TabsContent value="get">
                    <div className="relative">
                      <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                        <code>GET https://api.dizi.dev/v1/users/school</code>
                      </pre>
                      <CopyButton text="https://api.dizi.dev/v1/users/school" />
                    </div>
                  </TabsContent>
                  <TabsContent value="response">
                    <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                      <code>
                        {JSON.stringify(
                          {
                            id: "user_123",
                            name: "John Doe",
                            email: "john@example.com",
                            school: {
                              name: "SMA Negeri 1",
                              level: "SMA",
                              grade: "12",
                              major: "IPA"
                            }
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
        <Card>
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
                    <code>{`fetch('https://api.dizi.dev/v1/users', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}</code>
                  </pre>
                  <CopyButton
                    text={`fetch('https://api.dizi.dev/v1/users', {
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
                <div className="grid grid-cols-1 gap-4">
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
                              id: "user_123",
                              name: "John Doe"
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
                              code: "unauthorized",
                              message: "Invalid API key"
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
