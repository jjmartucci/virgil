var React = require("react");

var ActionButton = React.createClass({

    action: function(){
        this.props.action();
        if(this.state.active){

            this.setState({
                text: this.props.text,
                active: false,
            });

            let button = React.findDOMNode(this);
            let classList = button.classList;
            classList.add('button--inactive');

        }
        else{
            this.setState({
                text: this.props.toggledText,
                active: true
            });
            let button = React.findDOMNode(this);
            let classList = button.classList;
            classList.remove('button--inactive');
        }
    },

    getInitialState: function(){
        return {
            text : this.props.text,
            active: this.props.active
        }
    },

    render: function() {
    var {action, text, icon, ...other } = this.props;

        return (
            <button {...other} onClick={this.action} onHover={this.hover} value={text}>
                {icon}
            </button>
        );

    }
});

module.exports = ActionButton;
