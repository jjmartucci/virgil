var React = require("react");
require ("sass/components/elements/_buttons");

var Button = React.createClass({

    statics: {
        title: "Button",
        mock: function(){
            return({
                text: "Button",
                className: "button button--primary"
            });
        }
    },

    render: function() {

        var { text, ...other } = this.props;

return (
    <button {...other}>{text}</button>
);

}

});

module.exports = Button;