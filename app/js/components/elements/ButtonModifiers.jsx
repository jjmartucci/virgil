var React = require("react");
var Button = require("js/components/elements/Button");
require ("sass/components/elements/_buttons");

var ButtonModifiers = React.createClass({

    statics: {
        title: "Button Modifiers",
        hideFromNav: true,
        hideReactMarkup: true,
        notes: function(){
            return(
                <p>This is an example of a component hidden from the navigation.</p>
            )
        }

    },

    render: function() {

        return (
            <div>
            <Button className="button button--secondary" text="Button Secondary" />
            <Button className="button button--alert" text="Button Alert" />
                </div>
        );

}

});

module.exports = ButtonModifiers;