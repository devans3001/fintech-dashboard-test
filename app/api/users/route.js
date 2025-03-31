

import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import bcrypt from "bcryptjs";

const usersFile = path.join(process.cwd(), "app/data/users.json");

export async function POST(req) {
  try {
    const { name, email, password, type } = await req.json();
    const users = JSON.parse(await fs.readFile(usersFile, "utf-8"));

    if (type === "signup") {
      // Check if user already exists
      if (users.some((u) => u.email === email)) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
      }

      // Hash password and save new user
      const hashedPassword = await bcrypt.hash(password, 10);
      users.push({ id: Date.now(), name, email, password: hashedPassword });
      await fs.writeFile(usersFile, JSON.stringify(users, null, 2));

      return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
    }

    if (type === "login") {
      // Find user
      const user = users.find((u) => u.email === email);
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
      }

      return NextResponse.json({ message: "Login successful", user }, { status: 200 });
    }

    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
