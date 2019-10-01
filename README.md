## AWS Cognito Example 

from: [AWS Cognito Tutorial Part I/II/III](https://www.youtube.com/watch?v=EaDMG4amEfk)

This application implement several; AWS Cognito functionalities with aws-amplify, a Javascript client for Cognito  

1. Register
2. Login
3. Logout
4. Forgot password
5. Change password

## Configuration

Configure aws-amplify with the region, user_pool_id and app_client_id as define in AWS Cognito console

````javascript
import { Auth } from 'aws-amplify';

Amplify.configure({
    Auth: {
        mandatorySignId: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    }
});
````
## Register

When user enter username, email and passowrd using a form call to Auth.signUp(..) to initiate a signUp procecure. Cognito send an email to user for verification (if configure in the user-pool).

````javascript
import { Auth } from 'aws-amplify';

const { username, email, password } = this.state;
try {
  const signUpResponse = await Auth.signUp({
    username, 
    password, 
    attributes: {
      email
    }
  });  

  // redirect to welcome page
  this.props.history.push("/welcome")
}
catch (error) {
  let err = null;
  !error.message ? err = {"message": error } : err = error;
  this.setState({
    errors: {
      ...this.state.errors,
      cognito: err
    }
  })
}
````

## Login

If user press login and fill in username, password call to Auth.signIn(..) to sign the user in. if pass with no exception then save the user information in the a global App using the `setAuthStatus` and `setUser`

````javascript
import { Auth } from 'aws-amplify';

try {
      const user = await Auth.signIn(this.state.username, this.state.password);
      this.props.auth.setAuthStatus(true);
      this.props.auth.setUser(user);
      this.props.history.push("/")
     }
    catch (error) {
      let err = null;
      !error.message ? err = {"message": error } : err = error;
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err
        }
      })
    }    
  };
````

### Logout

Call to Auth.signOut(..) and update the App user state.

````javascript
import { Auth } from 'aws-amplify';

try {
  Auth.signOut();
  this.props.auth.setAuthStatus(false);
  this.props.auth.setUser(null);
}
catch (error) {
  console.log(error.message)
}
````

### Forgot Password

if user select forgot password link then call to Auth.forgotPassword(..) and redirect the client to a forgot password page so he can enter new credential.

````javascript
import { Auth } from 'aws-amplify';

try {
  await Auth.forgotPassword(this.state.email);
  this.props.history.push('/forgotpasswordverification');
}
catch (e) {
  console.log(e);
}
````

### Change Password

After user enter new password call to Auth to update it
````javascript
import { Auth } from 'aws-amplify';

try {
  const user = await Auth.currentAuthenticatedUser();
  await Auth.changePassword(
    user,
    this.state.oldpassword,
    this.state.newpassword
  );
  this.props.history.push('/changepasswordconfirmation');
}
catch (e) {
  console.log(e)
}
````