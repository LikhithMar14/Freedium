"use client";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BACKEND_URL } from "@/lib/constants";

const SignupForm = () => {
  return (
    <Card className="w-full max-w-sm mx-auto rounded-xl shadow-lg border border-gray-200">
      <CardHeader className="text-center">
        <CardTitle className="flex flex-col text-2xl font-semibold">
          Join the Community & Start Writing
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="relative my-4">
          <Separator className="space-y-2" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-gray-500 text-sm">
            Sign up with
          </span>
        </div>

        <a href={`${BACKEND_URL}/auth/google/login`}>
          <Button
            variant="outline"
            className="w-full py-3 mt-5 rounded-lg font-medium flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
          >
            <Icons.google className="mr-2 h-5 w-5" />
            Sign up with Google
          </Button>
        </a>
      </CardContent>

      <CardFooter className="flex justify-center py-4">
        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/auth/signin"
            className="text-purple-600 font-medium hover:underline"
          >
            Sign in
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignupForm;
