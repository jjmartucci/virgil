var React = require("react");
style = require("sass/components/elements/_blockquote.scss");

var Blockquote = React.createClass({

    statics: {
        title: "Blockquote",
        mock: function(){
            return({
               text: "It's a dangerous business going out your front door.",
                citation: "J.R.R Tolkien",
                className: "blockquote"
            });
        }
    },

    render () {
        var {text, citation, ...other} = this.props;

        return (
            <blockquote {...other}>
            { text }
            <cite className="blockquote__citation">{ citation }</cite>
            </blockquote>
        );
    }
});

module.exports = Blockquote;

