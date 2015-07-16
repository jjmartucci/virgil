var React = require("react");
var Button = require("js/components/elements/Button");
var Input = require("js/components/elements/Input");
let styles = require("sass/components/blocks/_login-form.scss");

var LoginForm = React.createClass({

    statics: {
        title: "Login Form",
        mock: function(){
            return({
                text: "Form",
                classeName: "login-form"
            });
        }
    },

    render: function() {

    var {...other } = this.props;

    return (
        <form>
        <Input type="text" placeholder="Username" className="login-form__text-input"/>
        <Input type="password" placeholder="Password" className="login-form__text-input"/>
        <Button text="Login" className="login-form__button button--primary"/>
            <a href="#" className="login-form__forgot-password">Forgot password?</a>
        </form>
    );

    }

});

module.exports = LoginForm;