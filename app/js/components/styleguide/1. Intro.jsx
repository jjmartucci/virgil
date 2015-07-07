var React = require("react");
var FlexboxHero = require("js/components/structures/FlexboxHero");
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
            <FlexboxHero
                backgroundImgSrc={virgilImg}
                titleText="Virgil"
                copy = "Guiding You Through Front-End Hell"
            />

            <p>Let's start off by defining some of the typography used here.</p>

            </div>
        );
    }
});

module.exports = Intro;