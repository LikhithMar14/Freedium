"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/ui/icons"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { BACKEND_URL } from "@/lib/constants"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long." }),
})

const SignInForm = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    setTimeout(() => {
      console.log(values)
      setIsLoading(false)
    }, 2000)
  }

  return (

    <Card className="w-full max-w-sm mx-auto rounded-xl shadow-lg border border-gray-200 ">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-3xl font-semibold">Welcome Back</CardTitle>
        <CardDescription className="text-gray-500">Sign in to your account</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" {...field} className="rounded-xl" />
                  </FormControl>
                  <FormMessage className="text-red-500"/>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} className="rounded-xl" />
                  </FormControl>
                  <FormMessage className="text-red-500"/>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full py-3 rounded-lg font-medium bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading && <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />}
              Sign In
            </Button>
          </form>
        </Form>

        <div className="relative my-4">
          <Separator />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-gray-500 text-sm">
            Or continue with
          </span>
        </div>
        <a href={`${BACKEND_URL}/auth/google/login` }
        >
        <Button
          variant="outline"
          className="w-full py-3 mt-5 rounded-lg font-medium flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
          onClick={() => console.log("Sign in with Google")}
        >
          <Icons.google className="mr-2 h-5 w-5" />
          Sign in with Google
        </Button>
        </a>
      </CardContent>

      <CardFooter className="flex justify-center py-4">
        <p className="text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="#" className="text-purple-600 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </CardFooter>
    </Card>

  )
}

export default SignInForm
