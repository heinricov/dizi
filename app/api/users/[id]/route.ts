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
  return JSON.parse(fileContents);
}

// Function to write users to the JSON file
function writeUsers(users: User[]) {
  const filePath = path.join(process.cwd(), "app/api/users/users.json");
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

// GET handler to retrieve a specific user by ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const users = getUsers();
    const user = users.find((u: User) => u.id === parseInt(params.id));

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const { password, ...safeUser } = user;
    return NextResponse.json(safeUser);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to fetch user";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// PUT handler to update a specific user by ID
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const users = getUsers();
    const userIndex = users.findIndex(
      (u: User) => u.id === parseInt(params.id)
    );

    if (userIndex === -1) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const updatedUser: Partial<User> = await request.json();
    users[userIndex] = { ...users[userIndex], ...updatedUser };

    writeUsers(users);

    const { password, ...safeUser } = users[userIndex];
    return NextResponse.json(safeUser);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to update user";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// DELETE handler to remove a specific user by ID
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    let users = getUsers();
    const userIndex = users.findIndex(
      (u: User) => u.id === parseInt(params.id)
    );

    if (userIndex === -1) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    users = users.filter((u: User) => u.id !== parseInt(params.id));
    writeUsers(users);

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to delete user";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
