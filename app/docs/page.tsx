import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Database, Server, Cloud } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Pengenalan API - Dari Static API hingga Database",
  description: "Pelajari dasar-dasar API, mulai dari static API hingga penggunaan database seperti Firebase."
}

export default function APIIntroductionPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Pengenalan API</h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8">
          Pelajari dasar-dasar API, jenis-jenisnya, dan bagaimana mereka berevolusi dari static API hingga penggunaan database modern.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Apa itu API?</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              API (Application Programming Interface) adalah seperangkat aturan dan protokol yang memungkinkan berbagai aplikasi perangkat lunak untuk berkomunikasi satu sama lain. API mendefinisikan metode dan format data yang dapat digunakan oleh satu program untuk meminta informasi atau layanan dari program lain.
            </p>
            <p>
              Bayangkan API sebagai pelayan di restoran yang mengambil pesanan Anda (permintaan) dari meja (aplikasi klien), menyampaikannya ke dapur (server), dan kemudian membawa makanan (respons) kembali ke meja Anda.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Jenis-jenis API</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="w-6 h-6" />
                Static API
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Static API menyediakan data yang jarang atau tidak pernah berubah. Data ini biasanya disimpan dalam file JSON atau XML dan dihosting di server web statis. Cocok untuk informasi yang jarang diperbarui seperti daftar negara atau zona waktu.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-6 h-6" />
                Dynamic API
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Dynamic API menghasilkan respons berdasarkan permintaan pengguna dan data yang disimpan dalam database. Ini memungkinkan interaksi real-time dan personalisasi, seperti dalam aplikasi media sosial atau e-commerce.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Evolusi API: Dari Static ke Database</h2>
        <Card>
          <CardContent className="pt-6">
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>Static API:</strong> Dimulai dengan file JSON/XML statis. Sederhana tapi terbatas.
              </li>
              <li>
                <strong>Server-side Scripting:</strong> Menggunakan bahasa seperti PHP atau Python untuk menghasilkan respons dinamis.
              </li>
              <li>
                <strong>Database Relasional:</strong> Menyimpan data dalam tabel terstruktur (misalnya MySQL, PostgreSQL).
              </li>
              <li>
                <strong>NoSQL Databases:</strong> Fleksibel untuk data tidak terstruktur (misalnya MongoDB, Cassandra).
              </li>
              <li>
                <strong>Cloud Databases:</strong> Skalabel dan mudah dikelola, seperti Firebase atau AWS DynamoDB.
              </li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Spotlight: Firebase sebagai Backend-as-a-Service</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="w-6 h-6" />
              Firebase
            </CardTitle>
            <CardDescription>
              Platform pengembangan aplikasi yang didukung oleh Google
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Firebase adalah platform Backend-as-a-Service (BaaS) yang menyediakan berbagai alat dan layanan untuk membangun aplikasi web dan mobile dengan cepat. Beberapa fitur utama Firebase meliputi:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Realtime Database: Database NoSQL yang menyinkronkan data secara real-time</li>
              <li>Authentication: Sistem autentikasi yang aman dan mudah diintegrasikan</li>
              <li>Cloud Functions: Menjalankan kode backend tanpa mengelola server</li>
              <li>Hosting: Hosting web cepat dan aman untuk aplikasi Anda</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Contoh Penggunaan API</h2>
        <Tabs defaultValue="static" className="w-full">
          <TabsList className="w-full justify-start mb-4">
            <TabsTrigger value="static">Static API</TabsTrigger>
            <TabsTrigger value="dynamic">Dynamic API</TabsTrigger>
          </TabsList>
          <TabsContent value="static">
            <Card>
              <CardHeader>
                <CardTitle>Contoh Static API</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`// Contoh data dari static API (countries.json)
{
  "countries": [
    {"name": "Indonesia", "code": "ID"},
    {"name": "Malaysia", "code": "MY"},
    {"name": "Singapore", "code": "SG"}
  ]
}

// Mengakses static API
fetch('https://api.example.com/countries.json')
  .then(response => response.json())
  .then(data => console.log(data.countries));`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="dynamic">
            <Card>
              <CardHeader>
                <CardTitle>Contoh Dynamic API dengan Firebase</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`// Inisialisasi Firebase (asumsi sudah dikonfigurasi)
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Mengambil data dari Firestore
async function getUsers() {
  const usersCol = collection(db, 'users');
  const userSnapshot = await getDocs(usersCol);
  const userList = userSnapshot.docs.map(doc => doc.data());
  return userList;
}

getUsers().then(users => console.log(users));`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Kesimpulan</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              API telah berkembang dari sistem statis sederhana menjadi layanan dinamis yang powerful. Pemahaman tentang berbagai jenis API dan penggunaan database modern seperti Firebase dapat membantu Anda membangun aplikasi yang lebih efisien dan skalabel.
            </p>
            <p className="mb-6">
              Seiring berkembangnya kebutuhan aplikasi, pilihlah jenis API dan database yang sesuai dengan kebutuhan proyek Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/docs/static-api">Pelajari Static API</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/docs/firebase">Eksplorasi Firebase</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}