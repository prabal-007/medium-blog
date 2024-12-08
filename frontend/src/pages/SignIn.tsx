import Auth from "../components/Auth"
import Quote from "../components/Quote"

const SignIn = () => {
    return (
        <div className="grid grid-cols-2 grid-flow-col">
            <Auth type="signin"/>
            <Quote />
        </div>
      )
    }

export default SignIn
