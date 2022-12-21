function LoginPage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-3 text-center">LOGO</h1>
      <div className="flex justify-center">
        <div className="border rounded-lg shadow-lg p-10 w-full mx-2">
          <form className="flex flex-col m-0">
            <label className="block mb-2">
              <span className="block">Email</span>
              <input type="text" className="rounded-full w-full" />
            </label>
            <label className="block mb-4">
              <span className="block">Password</span>
              <input type="password" className="rounded-full w-full" />
            </label>
            <button className="rounded-full block mx-auto bg-gray-500 px-6 py-2 text-white">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
