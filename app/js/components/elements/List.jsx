var React = require("react");
var Link = require("./Link");

var ListItem = React.createClass({
    render: function(){
        return(
            <li>{this.props.data}</li>
        )
    }
});

var List = React.createClass({

    statics: {
        title: "List",
        mock: function(){
            return({
                data: ["list item 1", "list item 2", "list item 3"],
                ordered: true,
            });
        }
    },

    render: function() {
        var listItems = [];
        var {data, ordered, ...other} = this.props;
        data.forEach(function(current, index, array){
           listItems.push(<ListItem key={index} data={current} />);
        });
        var render;
        if(ordered){
            render= <ol {...other}>{listItems}</ol>
        }
        else{
            render = <ul {...other}>{listItems}</ul>
        }

        return (
            render
        );
    }
});

module.exports = List;

