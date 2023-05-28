'use client'
import { signIn,  useSession } from "next-auth/react";
import Nav from "./Nav";

export default function Layouts({children}) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">
            Login with google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-900 min-h-screen flex ">
      <Nav />
      <div className="bg-white flex-grow my-2 mr-2 rounded-lg p-4">
        {children}
        </div>
    </div>
  );
}
