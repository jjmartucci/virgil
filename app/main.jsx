var React = require("react");

var List = require("js/components/elements/List");
var Link = require("Js/components/elements/Link");
var ActionButton = require("js/styleguide/ActionButton");

require("index.html");
require("sass/components/_block-grid.scss");
require("sass/components/_container.scss");
var StyleGuideComponent = require("js/components/StyleGuideComponent");

// These are styles and javascript used only to create the styleguide
require("sass/styleguide.scss");

var styleGuideContext = require.context('./js/components/styleguide/', false,  /^\.\/.*\.jsx$/);
var elementContext = require.context('./js/components/elements/', false,  /^\.\/.*\.jsx$/);
var structureContext = require.context('./js/components/structures/', false,  /^\.\/.*\.jsx$/);

// Get all styleguide parts
var styleguide = [];
var elements = [];
var structures = [];

function getElementsFromDirectory(context, exportTo){
    var keys = context.keys();
    keys.forEach(function(current, index, array){
        var styleElement = context(current);
        var notes = styleElement.notes ? styleElement.notes() : false;
        var title = styleElement.title ? styleElement.title : false;
        var mock = styleElement.mock ? styleElement.mock() : false;
        var hideCode = styleElement.hideCode ? true : false;
        var hideReactMarkup = styleElement.hideReactMarkup ? true : false;
            exportTo.push(
            {
                title: title,
                name : styleElement.displayName,
                func : styleElement,
                notes: notes,
                mock: mock,
                hideCode: hideCode,
                hideReactMarkup: styleElement.hideReactMarkup,
                hideFromNav : styleElement.hideFromNav
            });
    });

}

getElementsFromDirectory(styleGuideContext, styleguide);
getElementsFromDirectory(elementContext, elements);
getElementsFromDirectory(structureContext, structures);



var Page = React.createClass({

    render : function()
    {

        return (
            <div>

            { styleguide.map(function(object, i){
                  return <StyleGuideComponent code={object} />;
            }) }

            { elements.map(function(object, i){
                return <StyleGuideComponent code={object} />;
            }) }

            { structures.map(function(object, i){
                return <StyleGuideComponent code={object} />;
            }) }

            </div>
        );
    }
});

var Nav = React.createClass({

    render: function () {
        var styleList = [];
        styleguide.forEach(function(current,index,array){
            if(!current.hideFromNav) {

                var link = "#" + current.name;
                styleList.push(<Link href={link} text={current.title} />);
            }
        });

        var elementList = [];
        elements.forEach(function(current,index,array){
            if(!current.hideFromNav) {

                var link = "#" + current.name;
                elementList.push(<Link href={link} text={current.title} />);
            }
        });

        var structureList = [];
        structures.forEach(function(current,index,array){
            if(!current.hideFromNav) {
                var link = "#" + current.name;
                structureList.push(<Link href={link} text={current.title} />);
            }
        });

        return(
            <nav>
                <h2>Styleguide</h2>
                <List data={styleList} />
                <h2>Elements</h2>
                <List data={elementList} />
                <h2>Structures</h2>
                <List data={structureList} />
            </nav>
        );
    }
});

var OffCanvas = React.createClass({
    menuToggle : function(){
        var elementClasses = document.getElementById('page').classList;
        if(elementClasses.contains('menu-open')){
            elementClasses.remove('menu-open');
        }
        else{
            elementClasses.add('menu-open');
        }
    },

    noteToggle: function(){
        var noteClasses = document.getElementsByClassName('styleguide-item-notes');
        for(var i = 0; i < noteClasses.length; i++){
            var classList = noteClasses[i].classList;
            if(classList.contains('notes-hidden')){
                classList.remove('notes-hidden');
            }
            else{
                classList.add('notes-hidden');
            }
        }

    },

    codeToggle: function(){
        var codeClasses = document.getElementsByClassName('compiled-code');
        for(var i = 0; i < codeClasses.length; i++){
            var classList = codeClasses[i].classList;
            if(classList.contains('code-hidden')){
                classList.remove('code-hidden');
            }
            else{
                classList.add('code-hidden');
            }
        }
    },

    reactCodeToggle: function(){
        var codeClasses = document.getElementsByClassName('react-code');
        for(var i = 0; i < codeClasses.length; i++){
            var classList = codeClasses[i].classList;
            if(classList.contains('code-hidden')){
                classList.remove('code-hidden');
            }
            else{
                classList.add('code-hidden');
            }
        }
    },

    render: function(){
        return(
            <div>
            <ActionButton
                action={this.menuToggle}
                text="Hide Menu"
                toggledText="Show Menu"
                toggled={false}
                className="button button--nav-toggle"
            />
            <ActionButton
                action={this.noteToggle}
                text="Hide Notes"
                toggledText="Show Notes"
                toggled={false}
                className="button button--nav-toggle"
            />
            <ActionButton
                action={this.reactCodeToggle}
                text="Hide React Code"
                toggledText="Show React Code"
                toggled={false}
                className="button button--nav-toggle"
            />
            <ActionButton
                action={this.codeToggle}
                text="Hide HTML Code"
                toggledText="Show HTML Code"
                toggled={false}
                className="button button--nav-toggle"
            />

            </div>
        )
    }
})

React.render(<Page />, document.querySelector("#components"));
React.render(<Nav />, document.querySelector("#nav"));
React.render(<OffCanvas />, document.querySelector("#menu-toggle"));

require("js/ui/Styleguide");