var React = require("react");
var Signup = require("js/components/blocks/SignupForm");
var Login = require("js/components/blocks/LoginForm");

let style = require("sass/components/structures/_user-accounts.scss");

var UserAccount = React.createClass({

    statics: {
        title: "User Account",
        mock: function(){
            return({
                text: "Form",
                className: "login-form"
            });
        }
    },

    render: function() {

        var {...other } = this.props;

    return (
    <div className="user-accounts">
        <div className="user-accounts__column">
            <Login />
        </div>
        <div className="user-accounts__column">
            <Signup />
        </div>
    </div>
);

}

});

module.exports = UserAccount;