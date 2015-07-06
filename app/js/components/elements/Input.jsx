var React = require("react");

var Input = React.createClass({

    statics: {
        title: "Text Input",
        mock: function(){
            return({
                type: "text",
                placeholder: "A Text Input"
            });
        }
    },

    render: function() {

        var {...other } = this.props;

        return (
            <input {...other} />
        );

    }

});

module.exports = Input;