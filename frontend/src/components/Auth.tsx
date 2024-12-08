import { ChangeEventHandler } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@stark9/input-validations";
import axios from "axios";
import { BACKEND_URL } from "../../config"


const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostinputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: ""
  })

  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type == "signin" ? "signin" : "signup"}`, postInputs)
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs")
    } catch (e) {
      alert("Some error!")
      console.error(e);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-2 w-screen md:w-auto">
      <h1 className="text-3xl font-bold">{type == "signup" ? "Create an account" : "Login to your Account"}</h1>
      <h4 className="text-sm text-gray-500 font-semibold">{type == "signup" ? "Already have an account?" : "Don't have an account?"} <Link className="underline" to={type == "signup" ? "/signin" : "/signup"}>{type == "signup" ? "Login" : "SignUp"}</Link></h4>


      <form action="" method="post" className="flex flex-col w-1/2 items-start">
        {type == "signup" ? <LabelledInput label="Name" placeholder="Enter your username" onChange={(e) => {
          setPostinputs({
            ...postInputs, name: e.target.value
          })
        }} /> : null}
        <LabelledInput label="Email" type="email" placeholder="m@example.com" onChange={(e) => {
          setPostinputs({
            ...postInputs, username: e.target.value
          })
        }} />
        <LabelledInput label="Password" type="password" placeholder="" onChange={(e) => {
          setPostinputs({
            ...postInputs, password: e.target.value
          })
        }} />
        <button type="button" onClick={sendRequest} className="border p-2 m-1 rounded-lg w-full bg-black text-white">{type == "signup" ? "Sign Up" : "Sign In"}</button>
      </form>
    </div>
  )
}

interface LabelledInputType {
  label: string;
  type?: string;
  placeholder: string;
  onChange: (e: ChangeEventHandler<HTMLInputElement>) => void;
}

function LabelledInput({ label, type, placeholder, onChange }: LabelledInputType) {
  return <div className="w-full">
    <label htmlFor="" className="font-semibold">{label}</label>
    <input type={type || "text"} placeholder={placeholder} onChange={onChange} className="border p-2 m-1 rounded-lg w-full focus:border-blue-400" />
  </div>
}

export default Auth
