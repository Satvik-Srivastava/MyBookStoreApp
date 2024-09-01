import React from "react";

function Login() {
  const handleSignin = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    
    // Access the input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Log the values to the console
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h1>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="" method="POST" className="space-y-6" onSubmit={handleSignin}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 absolute md:top-36 top-44">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 placeholder:text-gray-400 text-gray-900 focus:outline-none focus:border-gray-300 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                      <a href="" className="font-semibold text-[#1DA1F2] hover:text-indigo-500">
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
                      autoComplete="current-password"
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 placeholder:text-gray-400 text-gray-900 focus:outline-none focus:border-gray-300 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    id="signin"
                    className="flex w-full justify-center rounded-md bg-[#1DA1F2] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#4d90b9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-7">
                Not a member? <span><a className="text-[#1DA1F2] hover:underline" href="/signup">Sign Up</a></span>
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
