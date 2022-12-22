import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getName } from "../utils/formatter";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-[#2B3A55] h-screen">
      <FontAwesomeIcon
        className="mt-auto mb-8"
        icon={faComments}
        size="5x"
        color="#F2E5E5"
      />
      <div className="flex justify-center mx-auto mb-auto">
        <div className="border bg-white rounded-lg shadow-lg p-10 w-full mx-2">
          <div className="flex flex-col m-0">
            <label className="block mb-2">
              <input
                type="text"
                required
                placeholder="Email"
                className="rounded-md w-full peer focus:ring-[#CE7777] focus:border-[#CE7777]"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <p class="invisible peer-invalid:visible text-[#CE7777] font-light">
                Please enter an email address
              </p>
            </label>
            <label className="block mb-4">
              <input
                required
                placeholder="Password"
                type="password"
                className="rounded-md w-full peer focus:ring-[#CE7777] focus:border-[#CE7777]"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
              <p class="invisible peer-invalid:visible text-[#CE7777] font-light">
                Please enter a password
              </p>
            </label>
            <button
              className="rounded-md block mx-auto  px-6 py-2 text-white bg-[#CE7777]"
              onClick={() => {
                if (email && pass) {
                  navigate("/", {
                    state: {
                      name: getName(email),
                    },
                  });
                }
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
