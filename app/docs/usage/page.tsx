import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Clock, Key, Shield, Zap, RefreshCcw } from "lucide-react";

export const metadata = {
  title: "Pola Penggunaan API - Metode dan Praktik Terbaik",
  description:
    "Pelajari berbagai cara menggunakan API, termasuk pembatasan penggunaan, autentikasi, dan perbedaan antara API statis dan dinamis."
};

export default function APIUsagePatternsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          Pola Penggunaan API
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8">
          Pelajari berbagai metode dan praktik terbaik dalam menggunakan API,
          termasuk pembatasan penggunaan, autentikasi, dan perbedaan antara API
          statis dan dinamis.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Pembatasan Penggunaan API</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-6 h-6" />
                Token-based Rate Limiting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                API menggunakan token untuk membatasi jumlah permintaan yang
                dapat dilakukan oleh pengguna dalam periode waktu tertentu.
              </p>
              <Alert>
                <Zap className="h-4 w-4" />
                <AlertTitle>Contoh</AlertTitle>
                <AlertDescription>
                  API key: X-API-Key: your_api_key_here
                  <br />
                  Batas: 1000 permintaan per hari
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-6 h-6" />
                Time-based Usage Limits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                API membatasi penggunaan berdasarkan interval waktu tertentu,
                seperti per menit, jam, atau hari.
              </p>
              <Alert>
                <Zap className="h-4 w-4" />
                <AlertTitle>Contoh</AlertTitle>
                <AlertDescription>
                  Header: X-RateLimit-Remaining: 45
                  <br />
                  X-RateLimit-Reset: 1623456789
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Autentikasi API</h2>
        <Tabs defaultValue="static" className="w-full">
          <TabsList className="w-full justify-start mb-4">
            <TabsTrigger value="static">Static Authentication</TabsTrigger>
            <TabsTrigger value="dynamic">Dynamic Authentication</TabsTrigger>
          </TabsList>
          <TabsContent value="static">
            <Card>
              <CardHeader>
                <CardTitle>Static API Authentication</CardTitle>
                <CardDescription>
                  Menggunakan kredensial tetap untuk autentikasi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Static authentication menggunakan kredensial yang tidak
                  berubah, seperti API key atau token statis. Metode ini
                  sederhana tetapi kurang aman untuk aplikasi yang memerlukan
                  tingkat keamanan tinggi.
                </p>
                <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-4">
                  <code>{`// Contoh penggunaan API key statis
fetch('https://api.example.com/data', {
  headers: {
    'Authorization': 'Bearer YOUR_STATIC_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}</code>
                </pre>
                <Alert variant-page="warning">
                  <AlertTitle>Perhatian</AlertTitle>
                  <AlertDescription>
                    API key statis harus dijaga kerahasiaannya dan tidak boleh
                    disimpan di client-side code yang dapat diakses publik.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="dynamic">
            <Card>
              <CardHeader>
                <CardTitle>Dynamic API Authentication</CardTitle>
                <CardDescription>
                  Menggunakan token yang berubah secara dinamis untuk
                  autentikasi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Dynamic authentication menggunakan token yang berubah seiring
                  waktu, seperti JWT (JSON Web Tokens) atau OAuth tokens. Metode
                  ini lebih aman dan fleksibel, cocok untuk aplikasi yang
                  memerlukan tingkat keamanan tinggi.
                </p>
                <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-4">
                  <code>{`// Contoh penggunaan JWT
async function fetchWithJWT() {
  const token = await getJWTToken(); // Fungsi untuk mendapatkan JWT
  const response = await fetch('https://api.example.com/data', {
    headers: {
      'Authorization': \`Bearer \${token}\`
    }
  });
  const data = await response.json();
  console.log(data);
}

fetchWithJWT();`}</code>
                </pre>
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertTitle>Keuntungan</AlertTitle>
                  <AlertDescription>
                    Token dinamis memiliki masa berlaku terbatas dan dapat
                    dicabut, meningkatkan keamanan sistem.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Pola Penggunaan API Lainnya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCcw className="w-6 h-6" />
                Webhook
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Webhook memungkinkan API untuk mengirim data ke aplikasi Anda
                secara real-time ketika suatu peristiwa terjadi, tanpa perlu
                melakukan polling terus-menerus.
              </p>
              <Badge variant="secondary" className="mb-2">
                Event-driven
              </Badge>
              <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`// Contoh endpoint webhook
app.post('/webhook', (req, res) => {
  const event = req.body;
  console.log('Received event:', event);
  // Proses event
  res.status(200).send('Event received');
});`}</code>
              </pre>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-6 h-6" />
                GraphQL
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                GraphQL adalah bahasa query untuk API yang memungkinkan klien
                untuk meminta data yang spesifik yang mereka butuhkan dalam satu
                permintaan.
              </p>
              <Badge variant="secondary" className="mb-2">
                Flexible querying
              </Badge>
              <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`// Contoh query GraphQL
query {
  user(id: "123") {
    name
    email
    posts {
      title
    }
  }
}`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Praktik Terbaik Penggunaan API
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc list-inside space-y-2">
              <li>
                Selalu gunakan HTTPS untuk mengenkripsi data yang dikirim dan
                diterima.
              </li>
              <li>
                Implementasikan rate limiting untuk mencegah penyalahgunaan API.
              </li>
              <li>
                Gunakan autentikasi yang kuat dan otorisasi yang tepat untuk
                melindungi data sensitif.
              </li>
              <li>
                Versioning API Anda untuk memudahkan pemeliharaan dan upgrade.
              </li>
              <li>
                Sediakan dokumentasi yang jelas dan up-to-date untuk API Anda.
              </li>
              <li>
                Implementasikan logging dan monitoring untuk melacak penggunaan
                dan kinerja API.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Kesimpulan</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              Memahami berbagai pola penggunaan API sangat penting dalam
              pengembangan aplikasi modern. Dari pembatasan penggunaan hingga
              metode autentikasi yang berbeda, setiap pola memiliki kelebihan
              dan use case tersendiri.
            </p>
            <p>
              Pilih pola yang sesuai dengan kebutuhan keamanan, skalabilitas,
              dan fungsionalitas aplikasi Anda. Selalu ikuti praktik terbaik
              untuk memastikan API Anda aman, efisien, dan mudah digunakan.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
