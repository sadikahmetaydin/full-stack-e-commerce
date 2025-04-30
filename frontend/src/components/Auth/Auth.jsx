import "./Auth.css";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Auth = () => {
  return (
    <>
      <section className="account-page">
          <div className="container">
              <div className="account-wrapper">
                  <Login />
                  <Register />
              </div>
          </div>
      </section>
    </>
  )
}
export default Auth