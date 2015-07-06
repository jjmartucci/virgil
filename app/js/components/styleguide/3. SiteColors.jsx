var Chromath = require('chromath');
var React = require("react");
style = require("sass/components/styleguide/_color-grid.scss");

var ColorRow = React.createClass({
    render: function(){
        return(
            <div className="color-grid__row">{this.props.tableData}</div>
        )
    }
});

var ColorGrid = React.createClass({
    statics: {
        title: "Color Grid",
        hideCode: true,
        hideReactMarkup: true,

        notes: function() {
            return(
                <p>These are some notes. Neato burrito!</p>
            );
        },

        mock: function(){
            return(
            {
                colors: ['#A9D8E8', '#E09FA3', '#A8548F', '#EDF1FF', '#514646' ],
                steps: [-5, -3, 3, 5, 10, 20]
            }
            );
        }
    },

    sortNumber: function(a,b) {
        return a - b;
    },

    render () {
        var colorGrid = [];

        if(this.props.steps.indexOf(0) === -1){
            this.props.steps.push(0);
        }

        var sortedSteps = this.props.steps.sort(this.sortNumber);

        for(var s=0; s < this.props.steps.length; s++) {

            var step = sortedSteps[s];
            var rowData = [];

            for (var i = 0; i < this.props.colors.length; i++) {
                var color = this.props.colors[i];
                if(step < 0){
                    var calculated = Chromath.tint(color, Math.abs(step) / 100);
                    color = calculated.toString();
                }
                else if(step > 0){
                    var calculated = Chromath.darken(color, Math.abs(step) / 100);
                    color = calculated.toString();
                }

                var width = (100 / this.props.colors.length) + "%";
                var divStyle = {
                    background: color,
                    width: width,
                    float: 'left'
                }

                if(step != 0){
                    var adjustedBy = <span className="color-detail" key={i}>{step + '%'}</span>;
                }
                else{
                    var adjustedBy = <span className="color-detail" key={i}>Base</span>;
                }

                rowData.push(
                    <div className="color-block" style={divStyle} key={i}>
                        <div className="color-details">
                            {adjustedBy}
                            <span className="color-detail">{color}</span>
                        </div>
                    </div>
                );
            }

            colorGrid.push(
                <ColorRow tableData={rowData} key={s}/>
            )
        }

        return (
            <div className="color-grid">{colorGrid}</div>
        );
    }
});

module.exports = ColorGrid;
