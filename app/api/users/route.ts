interface User {
  id: number;
  nama: string;
  email: string;
  password: string;
}

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Function to read users from the JSON file
function getUsers(): User[] {
  const filePath = path.join(process.cwd(), "app/api/users/users.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents) as User[];
}

// GET handler to retrieve all users
export async function GET() {
  try {
    const users = getUsers();
    const safeUsers = users.map(({ id, nama, email }: User) => ({
      id,
      nama,
      email
    }));
    return NextResponse.json(safeUsers);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to fetch users";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// // POST handler to add a new user
// export async function POST(request: Request) {
//   try {
//     const users = getUsers();
//     const newUser = await request.json();

//     if (!isValidUser(newUser)) {
//       return NextResponse.json({ error: 'Invalid user data' }, { status: 400 });
//     }

//     const newId = Math.max(...users.map(user => user.id), 0) + 1;
//     const userToAdd: User = { id: newId, ...newUser };

//     users.push(userToAdd);

//     const filePath = path.join(process.cwd(), 'app/api/users/users.json');
//     fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

//     const { password, ...safeUser } = userToAdd;
//     return NextResponse.json(safeUser, { status: 201 });
//   } catch (error: unknown) {
//     const errorMessage = error instanceof Error ? error.message : 'Failed to add user';
//     return NextResponse.json({ error: errorMessage }, { status: 500 });
//   }
// }

// function isValidUser(user: any): user is Omit<User, 'id'> {
//   return (
//     typeof user.nama === 'string' &&
//     typeof user.email === 'string' &&
//     typeof user.password === 'string'
//   );
// }
