var React = require("react");

var ActionButton = React.createClass({

    action: function(){
        this.props.action();
        if(this.state.toggled){
            this.setState({
                text: this.props.text,
                toggled: false,
            });
        }
        else{
            this.setState({
                text: this.props.toggledText,
                toggled: true
            });
        }
    },

    getInitialState: function(){
        return {
            text : this.props.text,
            toggled: this.props.toggled
        }
    },

    render: function() {
    var {action, text, ...other } = this.props;

        return (
            <button {...other} onClick={this.action}
            >{this.state.text}
                </button>
        );

    }
});

module.exports = ActionButton;
