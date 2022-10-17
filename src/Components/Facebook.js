import React, { useState } from 'react'
import ReactFacebookLogin from 'react-facebook-login';

const Facebook = () => {

    const [state, setState] = useState({
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: "",
    });

    const componentClicked = () => { console.log("clicked") };

    const responseFacebook = (response) => { 
        console.log(response);
        setState({
          isLoggedIn: true,
          userID: response.userID,
          name: response.name,
          email: response.email,
          picture: response.picture.data.url,
        });
    };

    let fbContent;
    
    if (state.isLoggedIn) {
        fbContent = (
          <div
            style={{
              width: "400px",
              margin: "auto",
              background: "#f4f4f4",
              padding: "20px",
            }}
          >
            <img src={state.picture} alt={state.name} />
            <h2>Welcome {state.name}</h2>
            Email: {state.email}
          </div>
        );
        
    } else {

        fbContent = (
            <ReactFacebookLogin
            appId="629741745261106"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
            />
        );
        
    }

    
    return <div className='my-3'>{fbContent}</div>;
}

export default Facebook;