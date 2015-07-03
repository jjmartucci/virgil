var React = require("react");
var Button = require("js/components/elements/Button");
var velocity = require("velocity-animate");
var classNames = require('classnames');

require("sass/components/structures/_modal");
require("sass/components/elements/_buttons");

var ModalWindow = React.createClass({
    statics : {
        title: "Modal Window",

        notes: function(){

            return(
                <p>Fire events with an element called <code>.modal-trigger</code>. <a href="#" className="modal-trigger" id="modal-example-trigger">example trigger</a></p>
            );
        },

        mock: function(){
            return({
                text: <p>Some modal text.</p>,
                trigger: "modal-example-trigger",
            });
        }
    },

    bounce: function(){
        var modal = this.getDOMNode();
        Velocity(modal, { scale: 1.05 }, { duration: 100 });
        Velocity(modal, { scale: 1 }, { duration: 200 });
    },

    openModal: function(e){
        e.preventDefault();
        var modal = this.getDOMNode();
        var modalWindow = modal.getElementsByClassName('modal-window');
        modalWindow[0].style.display = "block";
        this.setState({
            open : true
        });
        Velocity(modalWindow[0], { translateY: "100px", opacity : 0 }, { duration: 0 });
        Velocity(modalWindow[0], { translateY: "-200px", opacity : 1 }, { duration: 200 });
        Velocity(modalWindow[0], { translateY: 0, opacity : 1 }, { duration: 100 });

    },

    closeModal: function(){
        var modal = this.getDOMNode();
        var modalWindow = modal.getElementsByClassName('modal-window');

        this.setState({
           open: false
        });

        Velocity(modalWindow[0], { translateY: "100px", opacity : 0 },
            {
                duration: 200,
                complete: function(){
                    modalWindow[0].style.display = "none";

                }
            });

    },

    getInitialState: function(){
        return({
            open: false
        })
    },

    componentDidMount: function(){
        var trigger = document.getElementById(this.props.trigger);
        trigger.onclick = this.openModal;
    },

    render: function() {

        var {text, buttons, ...other} = this.props;
        var modalScreenClasses;
        var modalWindowClasses;

        if(this.state.open){
            modalScreenClasses = classNames({
                "modal-screen" : true,
                "modal-screen--open" : true
            });
            modalWindowClasses = classNames({
                "modal-window" : true,
                "modal-window--open" : true
            })
        }

        else{
            modalScreenClasses = classNames({
                "modal-screen" : true,
                "modal-screen--open" : false
        });
        modalWindowClasses = classNames({
            "modal-window" : true,
            "modal-window--open" : false
        })
        }
        return (
            <div className={modalScreenClasses} onClick={this.bounce}>
            <div className={modalWindowClasses}>
                {text}
                {buttons}

            <Button className="button button--primary"  onClick={this.closeModal} text="OK GO" />, <Button className="button button--primary" onClick={this.closeModal} text="Just kidding'" />
            </div>
            </div>
        );
    }
});

module.exports = ModalWindow;
