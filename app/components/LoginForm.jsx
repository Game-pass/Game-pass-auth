"use client";
import { doSocialLogin } from "@/app/actions";
import { useState } from "react";
import Image from "next/image";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData) => {
    const action = formData.get('action');
    setIsLoading(true);
    
    try {
      await doSocialLogin(formData);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-white mb-3 tracking-tight">
            Welcome
          </h1>
          <p className="text-gray-400 text-lg font-medium">Continue your journey</p>
        </div>

        {/* Login Card */}
        <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
          <form action={handleSubmit}>
            
            {/* Google Button */}
            <button
              type="submit"
              name="action"
              value="google"
              disabled={isLoading}
              className="relative w-full group overflow-hidden rounded-2xl bg-white text-gray-900 font-bold py-5 px-8 transition-all duration-500 ease-out transform hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none active:scale-[0.98] active:translate-y-0"
            >
              {/* Ripple effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-blue-400/30 rounded-full animate-ping" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400/30 rounded-full animate-ping animation-delay-300" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-400/30 rounded-full animate-ping animation-delay-500" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400/30 rounded-full animate-ping animation-delay-700" />
              </div>
              
              <div className="relative flex items-center justify-center gap-4 z-10">
                {isLoading ? (
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce animation-delay-100" />
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce animation-delay-200" />
                  </div>
                ) : (
                  <Image
                    src="/google2.png"
                    alt="Google logo"
                    width={24}
                    height={24}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                <span className="text-lg font-bold tracking-wide">
                  {isLoading ? 'Connecting' : 'Continue with Google'}
                </span>
              </div>
              
              {/* Subtle inner shadow */}
              <div className="absolute inset-0 rounded-2xl shadow-inner shadow-gray-200/50 group-hover:shadow-gray-300/70 transition-shadow duration-500" />
            </button>
            
            {/* Decorative elements */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse animation-delay-200" />
                <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse animation-delay-400" />
              </div>
            </div>
          </form>
        </div>
        
        {/* Bottom text */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm font-medium">
            Secure authentication powered by Google
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;