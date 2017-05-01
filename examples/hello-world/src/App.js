import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login-component';

class App extends Component {
  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }

  render () {
    return (
      <div>
        <GoogleLogin socialId="yourClientID"
                     class="google-login"
                     icon="my-icon-classname"
                     scope="profile"
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
      </div>
    );
  }
}

export default App;
