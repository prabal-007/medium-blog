import Quote from "../components/Quote"
import Auth from "../components/Auth"

const SignUp = () => {
  return (
    <div className="grid grid-cols-2 grid-flow-col">
        <Auth type="signup"/>
        <Quote />
    </div>
  )
}

export default SignUp
