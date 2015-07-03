var React = require("react");

var Link = React.createClass({

    statics: {
        title: "Link",
        notes: function(){
            return(<p>Maybe it would make more sense to not have this as a self closing component?</p>)
        },
        mock: function(){
            return({
                href: "#top",
                text: "A Link"
            })
        }

    },


    render: function() {

        var {text, ...other} = this.props;

        return (
            <a {...other}>{text}</a>
        );

    }

});

module.exports = Link;