var React = require("react");
let style = require("sass/components/elements/_highlevel-copy.scss");

var HighlevelCopy = React.createClass({

    statics: {
        title: "Highlevel Copy",
        mock: function(){
    return({
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi atque cumque dignissimos explicabo magni non numquam officia officiis pariatur quia reprehenderit sint sunt tempore tenetur vel voluptas voluptate, voluptatum?",
        className: "highlevel-copy"
    });
}
},

render () {
    var {text, ...other} = this.props;

return (
    <p {...other}>{text}</p>
);
}
});

module.exports = HighlevelCopy;

