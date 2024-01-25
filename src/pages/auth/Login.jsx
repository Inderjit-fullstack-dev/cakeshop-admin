import { Input } from "semantic-ui-react";
import { Header } from "../../components/layout/Header";
import { Button } from "semantic-ui-react";

export const Login = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="login__container">
          <h3>Authentication</h3>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <Input type="text" placeholder="Enter Your Email" fluid />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <Input type="password" placeholder="Enter Your Password" fluid />
          </div>
          <Button primary>Login</Button>
        </div>
      </div>
    </>
  );
};
