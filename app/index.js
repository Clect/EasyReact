//var component = require('./component');
require('./index.less');

import React from 'react';
import ReactDOM from 'react-dom';
 
class SignUpInput extends React.Component {
	render() {
    	return <div>
    	<img src="i/u5.png" />
    	<p className="signUpTitle">菩提果 数字体验点登录</p>
    	<div className="phoneNumber">
    	Q
    		<input />
    	</div>
    	<div className="password" >
    	Q
    		<input />
    	</div>
    	<div className="signUp">
    		<input type="button" value="Sign Up" />
    	</div>
    	</div>
	}
}
 
ReactDOM.render(<SignUpInput />, document.getElementById('content'));

//document.body.appendChild(component());