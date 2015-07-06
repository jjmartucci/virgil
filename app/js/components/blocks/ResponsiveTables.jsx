var React = require("react");

var ResponsiveTableInteraction = require("js/ui/ResponsiveTablesUI");
require("sass/components/_responsive-tables.scss");


var TableHeader = React.createClass({

    render: function(){
        return(
            <th key={this.props.key}>{this.props.headerData}</th>
        );
    }
});

var TableData = React.createClass({

    render: function(){
        return(
            <td key={this.props.key}>{this.props.tableData}</td>
        );
    }
});

var TableRow = React.createClass({

    render: function() {
        return (
            <tr key={this.props.key}>{this.props.rowData}</tr>
        );
    }

});

var ResponsiveTable = React.createClass({

    statics: {
        title: "Responsive Tables",
        notes: function(){
            return(
              <p>Uses <pre><code>ResponsiveTablesUI.js</code></pre></p>
            );
        },
        mock: function(){
            return({
                headers: ['Column One Header', 'Column Two Header', 'Column Three Header'],
                data: [
                    ['Data One', 'Data Two', 'Data Three'],
                    ['Data One', 'Data Two', 'Data Three'],
                    ['Data One', 'Data Two', 'Data Three']
                ]
            });
        }

    },

    componentDidMount : function(){
        ResponsiveTableInteraction(this.getDOMNode());
    },

    render: function() {

        var tableRows = [];
        var headerRow = [];
        this.props.headers.forEach(function(current,index, array){
            headerRow.push( <TableHeader key={index} headerData={current} /> );
        });


        this.props.data.forEach(function(current, index, array){
            var row = [];

            current.forEach(function(current,index, array){
                row.push(<TableData key={index} tableData={current} />);
            });

            tableRows.push(<TableRow key={index} rowData={row} />);
        });



        return (
            <table>
                <thead>
                    {headerRow}
                </thead>

                <tbody>
                    {tableRows}
                </tbody>
            </table>
        );
    }
});

module.exports = ResponsiveTable;

