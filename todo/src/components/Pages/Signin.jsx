import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import ThemeToggle from "./ThemeToggle";

const Signin = () => {
  const [formdata, Setformdata] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const handleChange = (e) => {
    Setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: formdata.email,
      password: formdata.password,
    });

    setSubmitting(false);

    if (error) {
      setError(error.message);
      return;
    }
    navigate("/Dashboard");
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f8f9ff] dark:bg-[#0b1020]">
      <ThemeToggle className="fixed top-4 right-4" />
      <Card className="w-full max-w-sm bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.06)] rounded-3xl dark:bg-white/5 dark:border-white/10 dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        <CardHeader>
          <CardTitle className="text-[#0b1c30] dark:text-[#e6e9ff] font-bold text-2xl">
            Log in to your Account
          </CardTitle>
          <CardDescription className="text-[#464554] dark:text-[#a3a6c2]">
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button
              variant="link"
              className="text-[#4648d4] hover:text-[#4648d4]/80 dark:text-[#8b8dff] dark:hover:text-[#8b8dff]/80"
            >
              <Link to="/Signup">Sign Up</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label
                  htmlFor="email"
                  className="text-[10px] font-semibold tracking-wider uppercase text-[#464554] dark:text-[#a3a6c2]"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  value={formdata.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="bg-white/60 border-[#4648d4]/10 rounded-xl focus-visible:ring-2 focus-visible:ring-[#4648d4]/20 focus-visible:border-[#4648d4]/30 dark:bg-white/5 dark:border-white/10 dark:text-[#e6e9ff] dark:placeholder:text-[#a3a6c2]/60 dark:focus-visible:ring-[#8b8dff]/30 dark:focus-visible:border-[#8b8dff]/40"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label
                    htmlFor="password"
                    className="text-[10px] font-semibold tracking-wider uppercase text-[#464554] dark:text-[#a3a6c2]"
                  >
                    Password
                  </Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm text-[#4648d4] dark:text-[#8b8dff] underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  name="password"
                  value={formdata.password}
                  onChange={handleChange}
                  className="bg-white/60 border-[#4648d4]/10 rounded-xl focus-visible:ring-2 focus-visible:ring-[#4648d4]/20 focus-visible:border-[#4648d4]/30 dark:bg-white/5 dark:border-white/10 dark:text-[#e6e9ff] dark:placeholder:text-[#a3a6c2]/60 dark:focus-visible:ring-[#8b8dff]/30 dark:focus-visible:border-[#8b8dff]/40"
                />
              </div>
            </div>
            {error && (
              <p className="text-sm text-red-600 dark:text-red-400 mt-4">
                {error}
              </p>
            )}
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-[#4648d4] text-white hover:bg-[#4648d4]/90 dark:bg-[#6063ee] dark:hover:bg-[#6063ee]/90 shadow-lg shadow-[#4648d4]/20 text-xs font-semibold tracking-wider uppercase py-3"
            >
              {submitting ? "Logging in..." : "Login"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full rounded-xl border-[#4648d4]/20 text-[#464554] hover:bg-white/40 dark:border-white/15 dark:text-[#c8cbe6] dark:hover:bg-white/10 text-xs font-semibold tracking-wider uppercase py-3"
            >
              Login with Google
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Signin;
