var React = require("react");

var ListItem = React.createClass({
    render: function(){
        return(
            <li>{this.props.data}</li>
        )
    }
});

var List = React.createClass({

    render: function () {
        var listItems = [];
        var {data, ordered, ...other} = this.props;

    data.forEach(function (current, index, array) {
        listItems.push(<ListItem key={index} data={current} />);
    });
var render;
if (ordered) {
    render = <ol {...other}>{listItems}</ol>
}
else {
    render = <ul {...other}>{listItems}</ul>
}

return (
    render
);
}
})
;

module.exports = List;