import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function UsersAPIPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Users API</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-xl text-muted-foreground mb-8">
          The Users API provides endpoints for managing user accounts,
          authentication, and user profiles.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Feature</h2>

        <div className="space-y-8">
          {/* List Users Endpoint */}
          <div className="border rounded-lg p-6 mb-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-medium">Users</h3>
              </div>
              <Link
                href="https://dizi.vercel.app/api/users"
                className="bg-blue-100 text-blue-800 text-xs lg:text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-500 dark:text-yellow-300 mb-2"
              >
                Basic
              </Link>
            </div>
            <p className="">
              API Link:{" "}
              <Link
                href="https://dizi.vercel.app/api/users"
                className="text-sm ml-3 text-blue-500 hover:underline"
              >
                https://dizi.vercel.app/api/users
              </Link>
            </p>
            <p>
              Data: <span className="text-sm ml-3"> 10</span>
            </p>
            <p>
              Variabel: <span className="text-sm ml-3">id, Nama, Email</span>
            </p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Endpoints</h2>

          <div className="space-y-8">
            {/* List Users Endpoint */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium">List Users</h3>
                </div>
                <code className="text-sm bg-accent px-2 py-1 rounded">
                  GET /users
                </code>
              </div>

              <Tabs defaultValue="request" className="w-full">
                <TabsList>
                  <TabsTrigger value="request">Request</TabsTrigger>
                  <TabsTrigger value="response">Response</TabsTrigger>
                </TabsList>
                <TabsContent value="request">
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto mt-4">
                    <code>{`curl https://api.openhub.dev/v1/users \\
  -H "Authorization: Bearer YOUR_API_KEY"`}</code>
                  </pre>
                </TabsContent>
                <TabsContent value="response">
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto mt-4">
                    <code>{`{
  "users": [
    {
      "id": "user_123",
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2024-01-01T00:00:00Z"
    },
    {
      "id": "user_124",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "created_at": "2024-01-02T00:00:00Z"
    }
  ],
  "total": 2,
  "page": 1,
  "per_page": 10
}`}</code>
                  </pre>
                </TabsContent>
              </Tabs>
            </div>

            {/* Get User Endpoint */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium">Get User</h3>
                <code className="text-sm bg-accent px-2 py-1 rounded">
                  GET /users/:id
                </code>
              </div>

              <Tabs defaultValue="request" className="w-full">
                <TabsList>
                  <TabsTrigger value="request">Request</TabsTrigger>
                  <TabsTrigger value="response">Response</TabsTrigger>
                </TabsList>
                <TabsContent value="request">
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto mt-4">
                    <code>{`curl https://api.openhub.dev/v1/users/user_123 \\
  -H "Authorization: Bearer YOUR_API_KEY"`}</code>
                  </pre>
                </TabsContent>
                <TabsContent value="response">
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto mt-4">
                    <code>{`{
  "id": "user_123",
  "name": "John Doe",
  "email": "john@example.com",
  "created_at": "2024-01-01T00:00:00Z",
  "profile": {
    "avatar_url": "https://example.com/avatar.jpg",
    "bio": "Software developer",
    "location": "San Francisco, CA"
  }
}`}</code>
                  </pre>
                </TabsContent>
              </Tabs>
            </div>

            {/* Create User Endpoint */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium">Create User</h3>
                <code className="text-sm bg-accent px-2 py-1 rounded">
                  POST /users
                </code>
              </div>

              <Tabs defaultValue="request" className="w-full">
                <TabsList>
                  <TabsTrigger value="request">Request</TabsTrigger>
                  <TabsTrigger value="response">Response</TabsTrigger>
                </TabsList>
                <TabsContent value="request">
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto mt-4">
                    <code>{`curl -X POST https://api.openhub.dev/v1/users \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "secure_password"
  }'`}</code>
                  </pre>
                </TabsContent>
                <TabsContent value="response">
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto mt-4">
                    <code>{`{
  "id": "user_123",
  "name": "John Doe",
  "email": "john@example.com",
  "created_at": "2024-01-01T00:00:00Z"
}`}</code>
                  </pre>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Query Parameters</h2>
          <div className="border rounded-lg divide-y">
            <div className="p-4">
              <h3 className="font-medium mb-2">page</h3>
              <p className="text-muted-foreground">
                Page number for pagination (default: 1)
              </p>
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">per_page</h3>
              <p className="text-muted-foreground">
                Number of items per page (default: 10, max: 100)
              </p>
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">sort</h3>
              <p className="text-muted-foreground">
                Sort field (created_at, name, email)
              </p>
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">order</h3>
              <p className="text-muted-foreground">Sort order (asc, desc)</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Error Responses</h2>
          <div className="border rounded-lg divide-y">
            <div className="p-4">
              <h3 className="font-medium mb-2">400 Bad Request</h3>
              <p className="text-muted-foreground">
                Invalid request parameters
              </p>
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">401 Unauthorized</h3>
              <p className="text-muted-foreground">
                Invalid or missing API key
              </p>
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">404 Not Found</h3>
              <p className="text-muted-foreground">User not found</p>
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">429 Too Many Requests</h3>
              <p className="text-muted-foreground">Rate limit exceeded</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
