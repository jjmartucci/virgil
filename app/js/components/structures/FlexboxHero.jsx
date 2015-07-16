var Chromath = require('chromath');
var React = require("react");
var heroImage = require("images/hero.jpg");
var style = require("sass/components/structures/_flexbox-hero.scss");

var FlexboxHero = React.createClass({
    statics: {
        title: "Flexbox Hero",
        mock: function(){
            return({
                backgroundImgSrc: heroImage,
                titleText: 'Hello Hero',
                copy: 'It\'s Dangerous to Go Alone',
                cta: 'Take This!'
            });
        }
    },

    render () {
        var {backgroundImgSrc, titleText, copy, cta, ...other} = this.props;
        var ctaButton;
        var heroStyle = {
            backgroundImage: 'linear-gradient(rgba(169, 216, 232, 1),  rgba(169, 216, 232, .8)), url(' + backgroundImgSrc + ')',
        }

        if(cta){
            ctaButton = <a href="#" className="button button--primary">{cta}</a>
        }
        return (
            <div className="flexbox-hero" style={heroStyle}>
                <div className="flexbox-hero__container">
                    <h1 className="flexbox-hero__title">{titleText}</h1>
                    <p className="flexbox-hero__copy">{copy}</p>
                { ctaButton }
                </div>
            </div>
        );
    }
});

module.exports = FlexboxHero;
