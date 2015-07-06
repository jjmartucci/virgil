var React = require("react");
var Button = require("js/components/elements/Button");
var Input = require("js/components/elements/Input");

var SignupForm = React.createClass({

    statics: {
        title: "Signup Form",
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
        <Button text="Create Account" className="login-form__button button--primary"/>
    </form>
);

}

});

module.exports = SignupForm;