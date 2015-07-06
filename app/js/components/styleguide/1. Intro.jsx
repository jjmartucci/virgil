var React = require("react");
var virgilImg = require("images/virgil.png");

var Intro = React.createClass({

    statics: {
        hideCode: true,
        hideReactMarkup: true,
        title: "Intro"
    },

    render: function() {
        return (
            <div>
            <img src={virgilImg} />
            <p>Let's start off by defining some of the typography used here.</p>

            </div>
        );
    }
});

module.exports = Intro;