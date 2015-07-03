var React = require("react");

var Paragraph = React.createClass({

    statics: {
        title: "Paragraph"
    },

    render () {
        return (
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur eius est mollitia nihil placeat quas repudiandae suscipit. Aperiam consectetur dignissimos ea error est facilis labore molestias nostrum sint, unde!</p>
        );
    }
});

module.exports = Paragraph;

