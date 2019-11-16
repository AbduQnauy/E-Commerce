import React from "react";
import { connect } from "react-redux";
import { SignInContainer, Title, Button } from "./sign-in.styles";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email, password);

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (error) {
    //   alert(error.message);
    // }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <Title>I already have an account</Title>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <Button>
            <CustomButton type="submit">sign in</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              sign in with google
            </CustomButton>
          </Button>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
