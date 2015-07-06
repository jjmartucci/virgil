var React = require("react");
var FlexboxHero = require("js/components/structures/FlexboxHero");
var UserAccounts = require("js/components/structures/UserAccount");
var HighlevelCopy = require("js/components/elements/HighlevelCopy");
var heroImage = require("images/hero.jpg");


var Homepage = React.createClass({

    statics: {
        title: "Homepage",
        hideCode: true,
        hideReactMarkup: true,
        route: true,
    },

    render: function() {

    return (
        <main>
            <FlexboxHero
                backgroundImgSrc={heroImage}
                titleText="Hello Hero"
                copy = "It's Dangerous to Go Alone"
                cta = "Take This!"
            />
            <HighlevelCopy text="This is a demonstration of a single page built out of lower level components" className="highlevel-copy--centered" />
            <UserAccounts />
        </main>
    );

}

});

module.exports = Homepage;