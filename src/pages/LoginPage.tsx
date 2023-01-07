import { Input, Checkbox, Button } from "antd";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="bg-mainpattern w-screen h-screen flex justify-center items-center p-3">
      <div className="border rounded-xl md:w-[30rem] w-full px-6 py-7 shadow-lg bg-white">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Welecome back!
        </h1>
        <div className="email-input my-6">
          <p>Email</p>
          <Input placeholder="email" size="large" />
        </div>
        <div className="email-input my-6">
          <p>Password</p>
          <Input.Password placeholder="password" size="large" />
        </div>
        <Checkbox>Remember me</Checkbox>
        <Link to={"/"}>
          <Button type="primary" block danger className="mt-9" size="large">
            Login
          </Button>
        </Link>
        <div className="flex my-3 text-sm md:text-base">
          <p>Need an ccount?</p>
          <Link to={"/register"} className="ml-2 text-red-600">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
