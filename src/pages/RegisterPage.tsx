import { Input, Checkbox, Button, DatePicker } from "antd";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="bg-mainpattern w-screen h-screen flex justify-center items-center p-3">
      <div className="border rounded-xl max-w-[30rem] md:px-6 px-5 py-7 shadow-lg bg-white">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Create an account
        </h1>
        <div className="email-input my-6">
          <p>Email</p>
          <Input size="large" />
        </div>
        <div className="email-input my-6">
          <p>Usermname</p>
          <Input size="large" />
        </div>
        <div className="email-input my-6">
          <p>Password</p>
          <Input.Password size="large" />
        </div>
        <div className="email-input my-6">
          <p>Date of birth</p>
          <DatePicker className="w-full" size="large" />
        </div>
        <div className="agreement flex items-center">
          <Checkbox />
          <p className="ml-3 text-sm">
            It's ok to send me emails with CheatChat updates and spesial offers
            (Optional)
          </p>
        </div>
        <Link to={"/"}>
          <Button type="primary" block danger className="mt-9" size="large">
            Login
          </Button>
        </Link>
        <div className="flex my-3 text-sm md:text-base">
          <Link to={"/login"} className="ml-2 text-red-600">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}
