import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

const JSON_SERVER_URL = process.env.JSON_SERVER_URL || "http://localhost:3001";

export async function POST(req) {
  try {
    const { name, email, password, type } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    if (type === "signup") {
      const res = await fetch(`${JSON_SERVER_URL}/users?email=${email}`);
      const existingUsers = await res.json();

      if (existingUsers.length > 0) {
        return NextResponse.json(
          { error: "User already exists" },
          { status: 400 }
        );
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = {
        id: Date.now(),
        name,
        email,
        password: hashedPassword,
        createdAt: new Date().toISOString(),
      };

      const createUserRes = await fetch(`${JSON_SERVER_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!createUserRes.ok) throw new Error("Failed to create user");

    //   redirect("dashboard")

      return NextResponse.json(
        { message: "User registered successfully", user: { id: newUser.id, name, email } },
        { status: 201 }
      );
    }

    if (type === "login") {
      const findUserRes = await fetch(`${JSON_SERVER_URL}/users?email=${email}`);
      const users = await findUserRes.json();
      const user = users[0];

      if (!user) {
        return NextResponse.json(
          { error: "User not found" },
          { status: 401 }
        );
      }

      if (!user.password) {
        return NextResponse.json(
          { error: "User has no password stored" },
          { status: 401 }
        );
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return NextResponse.json(
          { error: "Invalid credentials" },
          { status: 401 }
        );
      }

      const { password: _, ...userData } = user;
      return NextResponse.json(
        { message: "Login successful test", user: userData },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: "Invalid request type" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
