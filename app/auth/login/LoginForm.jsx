"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function LoginForm() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePassword = () => setPasswordVisible((prev) => !prev);
  const [val, setVal] = useState({
    email: "evans@lol.com",
    password: "password",
  });

  const [isPending, startTransition] = useTransition();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setVal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    startTransition(async () => {
    const res = await signIn("credentials", {
      email: val.email,
      password: val.password,
      redirect: false, 
    });

    if (res?.error) {
      console.error("Login failed:", res.error);
      toast.error(`Error: ${res.error}`); 
    } else {
      toast.success("Login successful!");
      router.push("/dashboard"); 
    }

  })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <Input type="email" placeholder="Email" name="email" value={val.email} onChange={handleInput} required />
      </div>
      <div className="mb-4 relative flex items-center justify-center">
        <Input
          type={passwordVisible ? "text" : "password"}
          onChange={handleInput}
          placeholder="Password"
          value={val.password}
          name="password"
          required
        />
        <motion.button
          type="button"
          onClick={togglePassword}
          whileTap={{ scale: 0.9 }}
          className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400"
        >
          {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
        </motion.button>
      </div>
      <Button className="w-full" type="submit">
       {isPending ? "Loading..." : "Sign In"}
      </Button>
    </form>
  );
}

export default LoginForm;
