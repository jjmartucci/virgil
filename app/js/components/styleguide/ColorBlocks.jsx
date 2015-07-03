var Chromath = require('chromath');
var React = require("react");

var ColorCubes = React.createClass({
    statics: {
        title: "Color Cubes",
        hideCode: true,
        mock: function(){
            return(
            {colors: ['#A9D8E8', '#E09FA3', '#A8548F', '#EDF1FF', '#514646' ]}
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
                    <div style={style} className="color-cube-primary"></div>
                    );
            }
            else{
                blocks.push(

                    <div style={style} className="color-cube"></div>
                        );

            }
        });

        return (
            <div className="color-cubes">{blocks}</div>
        );
    }
});

module.exports = ColorCubes;
