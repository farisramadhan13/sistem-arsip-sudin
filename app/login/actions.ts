"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import fs from "fs";
import path from "path";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email dan password wajib diisi." };
  }

  try {
    const dbPath = path.join(process.cwd(), "database", "users.json");
    const usersData = fs.readFileSync(dbPath, "utf-8");
    const users = JSON.parse(usersData);

    const user = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (user) {
      // Set session cookie
      const cookieStore = await cookies();
      cookieStore.set("auth_session", user.username, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });

      // We cannot call redirect directly inside the try block if it's meant to be caught. 
      // Next.js redirect throws an error to perform the redirect, so we need to return success.
      return { success: true };
    } else {
      return { error: "Email atau password salah." };
    }
  } catch (error) {
    console.error("Error reading database:", error);
    return { error: "Terjadi kesalahan pada sistem." };
  }
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("auth_session");
  redirect("/login");
}
