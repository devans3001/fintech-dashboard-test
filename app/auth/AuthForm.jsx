

"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export default function AuthForm({ type }) {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (type === "signup") {
      // Signup API call (replace with your API)
      const res = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) router.push("/dashboard");
      setLoading(false);
    } else {
      // NextAuth sign-in
      const result = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      if (result?.ok) router.push("/dashboard");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleInput}
        required
      />
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleInput}
          required
        />
        <motion.button
          type="button"
          onClick={togglePassword}
          whileTap={{ scale: 0.9 }}
          className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </motion.button>
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Processing..." : type === "signup" ? "Sign Up" : "Sign In"}
      </Button>
    </form>
  );
}
