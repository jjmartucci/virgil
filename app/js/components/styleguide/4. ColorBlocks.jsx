var Chromath = require('chromath');
var React = require("react");
let style = require("sass/components/styleguide/_color-blocks.scss");

var ColorCubes = React.createClass({
    statics: {
        title: "Color Cubes",
        hideCode: true,
        mock: function(){
            return(
            {colors: ['#627384', '#E55B6B', '#4C4844', '#E5E5E5', '#252C33' ]}
            )
        }
    },

    render () {
        var blocks = [];
        this.props.colors.forEach(function(current,index,array){
            style = {
                background: current
            };

            if(index === 0){
                blocks.push(
                    <div style={style} className="color-cube-primary" key={index}></div>
                    );
            }
            else{
                blocks.push(

                    <div style={style} className="color-cube" key={index}></div>
                        );

            }
        });

        return (
            <div className="color-cubes">{blocks}</div>
        );
    }
});

module.exports = ColorCubes;
