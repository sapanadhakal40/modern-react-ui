import LoginForm from "@/components/forms/login-form";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function LoginPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md border border-gray-100 shadow-2xl rounded-lg p-8">
            <div className="flex justify-center mb-8">
            
            </div>

            <h1 className="text-3xl text-blue-500 font-semibold text-center mb-2">
              Welcome back
            </h1>
            <p className="text-gray-500 text-center mb-8">
              Sign in to your SplitSmart account
            </p>

            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}