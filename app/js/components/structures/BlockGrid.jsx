var React = require("react");
var StyleGuideComponent = require("js/components/StyleGuideComponent");

require ("sass/components/_block-grid.scss");


var BlockGrid = React.createClass({
    statics : {
        title: "Block Grid",
    },

    render () {
        var notes = <p>This is a block grid.</p>
        var title = "Block Grid";

        return (
            <div className="block-grid">
                <div className="block-grid-item">Block Grid Item</div>
                <div className="block-grid-item">Block Grid Item</div>
                <div className="block-grid-item">Block Grid Item</div>
                <div className="block-grid-item">Block Grid Item</div>
                <div className="block-grid-item">Block Grid Item</div>
                <div className="block-grid-item">Block Grid Item</div>
                <div className="block-grid-item">Block Grid Item</div>
                <div className="block-grid-item">Block Grid Item</div>
            </div>
        );
}
});

module.exports = BlockGrid;
