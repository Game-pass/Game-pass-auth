"use client";
import { doSocialLogin } from "@/app/actions";
import { useState } from "react";
import Image from "next/image";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingAction, setLoadingAction] = useState(null);

  const handleSubmit = async (formData) => {
    const action = formData.get('action');
    setIsLoading(true);
    setLoadingAction(action);
    
    try {
      await doSocialLogin(formData);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
      setLoadingAction(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to your account to continue</p>
        </div>

        {/* Login Form */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <form action={handleSubmit} className="space-y-4">
            
            {/* Google Button */}
            <button
              type="submit"
              name="action"
              value="google"
              disabled={isLoading}
              className="relative w-full group overflow-hidden rounded-xl bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-6 transition-all duration-200 ease-in-out transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <div className="flex items-center justify-center gap-3">
                {loadingAction === 'google' ? (
                  <div className="w-5 h-5 border-2 border-gray-400 border-t-gray-900 rounded-full animate-spin" />
                ) : (
                  <Image
                    src="/google2.png"
                    alt="Google logo"
                    width={20}
                    height={20}
                  />
                )}
                <span className="text-sm">
                  {loadingAction === 'google' ? 'Signing in...' : 'Continue with Google'}
                </span>
              </div>
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-900 text-gray-500">or</span>
              </div>
            </div>

            {/* GitHub Button */}
            <button
              type="submit"
              name="action"
              value="github"
              disabled={isLoading}
              className="relative w-full group overflow-hidden rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 text-white font-semibold py-4 px-6 transition-all duration-200 ease-in-out transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <div className="flex items-center justify-center gap-3">
                {loadingAction === 'github' ? (
                  <div className="w-5 h-5 border-2 border-gray-500 border-t-white rounded-full animate-spin" />
                ) : (
                  <Image
                    src="/github-mark-white.svg"
                    alt="GitHub logo"
                    width={20}
                    height={20}
                  />
                )}
                <span className="text-sm">
                  {loadingAction === 'github' ? 'Signing in...' : 'Continue with GitHub'}
                </span>
              </div>
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-center text-xs text-gray-500">
              By continuing, you agree to our{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;