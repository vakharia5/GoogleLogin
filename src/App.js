import React, { Component } from 'react'
import GoogleLogin ,{GoogleLogout} from 'react-google-login';

class App extends Component{
  responseGoogle = (googleUser) => {
    console.log(googleUser)
   
    // console.log(response.profileObj);
    // console.log("ID",response.getId());
    
    let profile = googleUser.getBasicProfile();
    console.log(profile);
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
  }
  
Logout = () => 
{
  console.log("user log out");
  // let auth2 = gapi.auth2.getAuthInstance();
  // auth2.signOut().then(function () {
  //   console.log('User signed out.');
  // });
}
  render(){
    return(
      <div className="App"> 
        <GoogleLogin 
        clientId = "24418157416-70ioh9bt3dspsril490nkd09sqjf67uc.apps.googleusercontent.com"
        buttonText = "Login"
        onSuccess = {this.responseGoogle}
        onFailure = {this.responseGoogle}
        cookiePolicy = {'single_host_origin'}/> 
       <div style={{align : 'right'}}>
       <GoogleLogout
      clientId="24418157416-70ioh9bt3dspsril490nkd09sqjf67uc.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={this.Logout}
    />
    </div>
       </div>
    )
  }
}

export default App;