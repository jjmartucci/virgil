var React = require("react");
var styles = require("sass/components/elements/_headings.scss");

var Headings = React.createClass({

    statics: {
        hideReactMarkup: true,
        title: "Headings",
        notes: function(){
            return(
               <p>Heading elements are normalized: use the heading-level classes to get the heading style you want.</p>
            );
        }
    },

    render: function() {
        return (
            <div>
                <h1 className="heading-level-one">Heading 1</h1>
                <h2 className="heading-level-two">Heading 2</h2>
                <h3 className="heading-level-three">Heading 3</h3>
                <h4 className="heading-level-four">Heading 4</h4>
                <h5 className="heading-level-five">Heading 5</h5>
                <h6 className="heading-level-six">Heading 6</h6>
            </div>
        );
    }
});

module.exports = Headings;

