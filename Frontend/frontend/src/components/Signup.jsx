import React from "react";

function Signup() {
    const handleCreateAccount =(e)=>{
        e.preventDefault();

        console.log(document.getElementById('name').value)
        console.log(document.getElementById('email').value)
        console.log(document.getElementById('password').value)

    }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="border rounded-lg border-gray-300  max-w-sm w-full">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
            <a href="/"><button className="btn btn-sm btn-circle btn-ghost relative left-72">✕</button></a>
          
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
       
              <h1 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create a fresh account
              </h1>
            </div>

            <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="block text-sm font-medium text-gray-900">What is your name?</span>
                    </div>
                    <input
                      type="text"
                      id="name"
                      placeholder="Ravi "
                      required
                      className="block w-full mb-7 rounded-md border border-gray-300 py-2 px-3 placeholder:text-gray-400 text-gray-900 focus:outline-none focus:border-gray-300 sm:text-sm"
                    />
                    
                  </label>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@gamil.com"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 placeholder:text-gray-400 text-gray-900 focus:outline-none focus:border-gray-300 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-[#1DA1F2] hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      placeholder="********"
                      autoComplete="current-password"
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 placeholder:text-gray-400 text-gray-900 focus:outline-none focus:border-gray-300 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    id="createAccount"
                    onClick={handleCreateAccount}
                    className="flex w-full justify-center rounded-md bg-[#1DA1F2] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#4d90b9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Create Account
                  </button>
                </div>
              </form>

              <p className="mt-7 text-center">
                Already a member?{" "}
                <span>
                  <a className="text-[#1DA1F2] hover:underline" href="/">
                    Sign In
                  </a>
                  
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
