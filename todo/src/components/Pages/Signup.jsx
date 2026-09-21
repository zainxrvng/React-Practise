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


const Signup = () => {
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

  const { data, error } = await supabase.auth.signUp({
    email: formdata.email,
    password: formdata.password,
  });

  setSubmitting(false);

  if (error) {
    setError(error.message);
    return;
  }

  // Email confirmation ON = account created, but no session (key card) yet
  if (!data.session) {
    setError("Account created! Check your email to confirm, then sign in.");
    return;
  }

  navigate("/Dashboard");
};
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f8f9ff]">
      <Card className="w-full max-w-sm bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.06)] rounded-3xl">
        <CardHeader>
          <CardTitle className="text-[#0b1c30] font-bold text-2xl">
            Create a new Account
          </CardTitle>
          <CardDescription className="text-[#464554]">
            Enter your email below to create your account
          </CardDescription>
          <CardAction>
            <Button
              variant="link"
              className="text-[#4648d4] hover:text-[#4648d4]/80"
            >
              <Link to="/Signin">Sign In</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label
                  htmlFor="email"
                  className="text-[10px] font-semibold tracking-wider uppercase text-[#464554]"
                >
                  Email
                </Label>
                <Input
                  onChange={handleChange}
                  id="email"
                  type="email"
                  name="email"
                  value={formdata.email}
                  placeholder="m@example.com"
                  required
                  className="bg-white/60 border-[#4648d4]/10 rounded-xl focus-visible:ring-2 focus-visible:ring-[#4648d4]/20 focus-visible:border-[#4648d4]/30"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label
                    htmlFor="password"
                    className="text-[10px] font-semibold tracking-wider uppercase text-[#464554]"
                  >
                    Password
                  </Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  name="password"
                  value={formdata.password}
                  onChange={handleChange}
                  className="bg-white/60 border-[#4648d4]/10 rounded-xl focus-visible:ring-2 focus-visible:ring-[#4648d4]/20 focus-visible:border-[#4648d4]/30"
                />
              </div>
            </div>
            {error && <p className="text-sm text-red-600 mt-4">{error}</p>}
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-[#4648d4] text-white hover:bg-[#4648d4]/90 shadow-lg shadow-[#4648d4]/20 text-xs font-semibold tracking-wider uppercase py-3"
            >
              {submitting ? "Creating account..." : "Sign Up"}
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-xl border-[#4648d4]/20 text-[#464554] hover:bg-white/40 text-xs font-semibold tracking-wider uppercase py-3"
            >
              Sign up with Google
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
