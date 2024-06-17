import { useState, ChangeEvent, MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";
import { authThunkService } from "../../../store/core/slices/auth/service/auth-thunk.service";
import { useAppDispatch } from "../../../store/hook";
import { todoThunkService } from "../../../store/core/slices/todo/service/todo-thunk.service";
import { coreApi } from "../../../store/core/api";
import { tagTypesTodo } from "../../../store/core/slices/todo";

export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("password123456");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const Access: React.MouseEventHandler<HTMLButtonElement> = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();

    if ([email, password === ""].includes("")) {
      notification.warning({
        message: "Info:",
        description: `All fields are required`,
      });
      return;
    } else if (password.length < 6) {
      notification.info({
        message: "Info:",
        description: "password must be greater than 6 digits",
      });
      return;
    }

    await dispatch(authThunkService.loginThunk({ email, password, navigate }));
    await dispatch(coreApi.util.invalidateTags(tagTypesTodo));

    // await dispatch(todoThunkService.getTodosThunk());
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className=" px-16 py-12 mt-4 bg-white shadow-lg text-xl font-inter">
        <h3 className="text-center text-3xl">Login to your Account</h3>
        <form action="">
          <div className="mt-4">
            <div>
              <label className="block text-left text-xl" htmlFor="email">
                Email address
              </label>
              <input
                type="text"
                name="email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                          focus:ring-1 focus:ring-blue-600"
                onChange={handleChange}
                value={email}
              />
            </div>
            <div className="mt-4">
              <label className="block text-left">Password</label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 mt-2 border rounded-md 
                           focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={handleChange}
                value={password}
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button
                className="px-6 py-2 mt-4 text-white bg-blue-600 
                            rounded-lg hover:bg-blue-800"
                onClick={Access}
              >
                Login
              </button>
              <Link
                to="/register"
                className="text-blue-600 text-2xl hover:text-blue-800"
              >
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
