var React = require("react");

var Constrainer = React.createClass({

    limit: function(event){
        let main = document.getElementById('main');
        main.style['max-width'] = event.target.value;

    },

    render: function() {
        var {...other } = this.props;

        return (
            <input type="text" {...other}  onChange={this.limit} />
        );

    }
});

module.exports = Constrainer;