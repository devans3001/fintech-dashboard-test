"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";


function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePassword = () => setPasswordVisible((prev) => !prev);

  return (
    <form>
      <div className="mb-4">
        <Input type="email" placeholder="Email" required />
      </div>
      <div className="mb-4 relative flex items-center justify-center">
        <Input
          type={passwordVisible ? "text" : "password"}
          placeholder="Password"
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
        Sign In
      </Button>
    </form>
  );
}
export default LoginForm;
