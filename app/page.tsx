import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Users, ShoppingCart, Zap, Code, Lock } from "lucide-react";

export const metadata = {
  title: "Dizi - Penyedia API Gratis untuk Developer | Free API Provider",
  description:
    "Dizi menyediakan API gratis berkualitas tinggi untuk pengembang. Akses endpoint yang handal untuk proyek Anda dengan dokumentasi lengkap dan dukungan teknis. | Dizi provides high-quality free APIs for developers. Access reliable endpoints for your projects with comprehensive documentation and technical support."
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold">
              API Gratis untuk
              <span className="text-primary"> Proyek Anda</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Akses API handal dan berkinerja tinggi tanpa biaya. Sempurna untuk
              prototipe, pembelajaran, dan aplikasi produksi.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/docs/getting-started">Mulai Sekarang</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/docs">Lihat Dokumentasi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mengapa Memilih API Kami?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Sangat Cepat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dioptimalkan untuk kecepatan dengan distribusi CDN global dan
                  latensi minimal.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Lock className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Aman Secara Default</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enkripsi HTTPS dan autentikasi API key opsional untuk keamanan
                  Anda.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Code className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Ramah Developer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dokumentasi lengkap dan desain API yang intuitif.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* API Showcase Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            API yang Tersedia
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Users API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  API manajemen pengguna lengkap dengan autentikasi dan profil.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/docs/users-api">Pelajari Lebih Lanjut</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <ShoppingCart className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Products API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  API manajemen produk siap e-commerce dengan kategori dan
                  pencarian.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/docs/products-api">Pelajari Lebih Lanjut</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Database className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Orders API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Sistem manajemen pesanan lengkap dengan pelacakan status.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/docs/orders-api">Pelajari Lebih Lanjut</Link>
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
            <h2 className="text-3xl font-bold">Tentang Dizi</h2>
            <p className="text-lg text-muted-foreground">
              Kami percaya dalam memberdayakan pengembang dengan alat yang
              handal dan gratis. Misi kami adalah menyediakan API berkualitas
              tinggi yang membantu Anda membangun aplikasi luar biasa tanpa
              khawatir tentang infrastruktur atau biaya.
            </p>
            <Button asChild>
              <Link href="/docs">Jelajahi API Kami</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
