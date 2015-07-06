var React = require("react");
var reactToJsx = require('react-to-jsx');

var StyleGuideComponent = React.createClass({

    render: function() {

        var code = reactToJsx(< this.props.code.func />);

        var mockData = this.props.code.mock ? this.props.code.mock : false;

        var string = reactToJsx(<this.props.code.func {...mockData}/>);
        var reactCode = false;
        if(!this.props.code.hideReactMarkup){
            reactCode = <div className="react-code"><pre><code>{string}</code></pre></div>
        }
        var codeBlock = false;
        if(!this.props.code.hideCode){
            codeBlock = <div className="compiled-code"></div>
        }

        return (
            <section className="styleguide-item" id={this.props.code.name}>
                <h2>{this.props.code.title}</h2>
                <div className="styleguide-item-notes">
                    {this.props.code.notes}
                </div>
                <div className="react-component">
                    <this.props.code.func {...mockData} />
                </div>
            { reactCode }
            { codeBlock }


            </section>
        );
    }
});

module.exports = StyleGuideComponent;
