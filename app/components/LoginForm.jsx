"use client";

import { doSocialLogin } from "@/app/actions";
import { useState } from "react";
import Image from "next/image";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <form action={doSocialLogin} className="flex flex-col items-center gap-2">
      {/* Google Button */}
      <button
        type="submit"
        name="action"
        value="google"
        className="flex items-center justify-center w-64 gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
      >
        <Image
          src="/google2.png" // You’ll need to put a Google logo in your /public folder
          alt="Google logo"
          width={20}
          height={20}
        />
        Sign in with Google
      </button>

      {/* GitHub Button */}
      <button
        type="submit"
        name="action"
        value="github"
        className="flex items-center justify-center w-64 gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none"
      >
        <Image
          src="/github-mark-white.svg" // optional logo for GitHub in /public
          alt="GitHub logo"
          width={20}
          height={20}
        />
        Sign in with GitHub
      </button>
    </form>
  );
};

export default LoginForm;
