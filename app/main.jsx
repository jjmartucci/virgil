var React = require("react");

var config = require("config");
var styleguideUI = require("js/ui/Styleguide");

// These components construct the styleguide. Delete at your own risk.
var ActionButton = require("js/styleguide/ActionButton");
var StyleGuideComponent = require("js/styleguide/StyleGuideComponent");
var Link = require("js/styleguide/Link");
var List = require("js/styleguide/List");
let ReactIcon = require("icons/react-button");
let CodeIcon = require("icons/code-button");
let NotesIcon = require("icons/notes-button");
let MenuIcon = require("icons/menu-button");
let initialRender = true;
let singlePage = false;

require("index.html");
require("sass/components/_block-grid.scss");
require("sass/components/_container.scss");

// These are styles and javascript used only to create the styleguide
require("sass/styleguide.scss");


function getElementsFromDirectory(context, exportArray) {

    var keys = context.keys();
    keys.forEach(function (current, index, array) {
        var styleElement = context(current);
        var notes = styleElement.notes ? styleElement.notes() : false;
        var title = styleElement.title ? styleElement.title : false;
        var mock = styleElement.mock ? styleElement.mock() : false;
        var hideCode = styleElement.hideCode ? true : false;
        var hideReactMarkup = styleElement.hideReactMarkup ? true : false;
        var route = styleElement.route ? true : false;

        exportArray.push(
            {
                title: title,
                name: styleElement.displayName,
                func: styleElement,
                notes: notes,
                mock: mock,
                hideCode: hideCode,
                hideReactMarkup: styleElement.hideReactMarkup,
                hideFromNav: styleElement.hideFromNav,
                route: route

            });
    });

}


config.forEach(function (current, index, array) {
    current.elements = [];
    getElementsFromDirectory(current.context, current.elements);
});


var Page = React.createClass({

    render: function () {

        var elements = [];

        config.forEach(function (current, index, array) {
            current.elements.map(function (object, i) {
                elements.push(<StyleGuideComponent key={i + current.name} code={object}/>);
            })
        });

        return (
            <div id="main">
                <div id="components">
                    { elements }
                </div>
            </div>
        );
    }
});

var Nav = React.createClass({

    render: function () {
        var navList = [];

        config.forEach(function (current, index, array) {
            var navSection = [];
            var listOfElements = [];
            navSection.push(<h2 className="styleguide-nav__header">{current.name}</h2>);

            current.elements.forEach(function (current, index, array) {
                if (!current.hideFromNav) {
                    var link;
                    if(current.route){
                        link = "#" + current.name + "?route=true"
                    }
                    else{
                        link = "#" + current.name;
                    }


                    listOfElements.push(<Link key={index} href={link} text={current.title} />);
                }
            });


            navSection.push(<List key={index} data={listOfElements} />);
            navList.push(navSection);

        });


        return (
            <div id="nav">
                <nav className="styleguide-nav">
                    { navList }
                </nav>
            </div>
        );
    }
});

var OffCanvas = React.createClass({
    menuToggle: function () {
        var elementClasses = document.getElementById('page').classList;
        if (elementClasses.contains('menu-open')) {
            elementClasses.remove('menu-open');
        }
        else {
            elementClasses.add('menu-open');
        }
    },

    noteToggle: function () {
        var noteClasses = document.getElementsByClassName('styleguide-item__notes');
        for (var i = 0; i < noteClasses.length; i++) {
            var classList = noteClasses[i].classList;
            if (classList.contains('notes-hidden')) {
                classList.remove('notes-hidden');
            }
            else {
                classList.add('notes-hidden');
            }
        }

    },

    codeToggle: function () {
        var codeClasses = document.getElementsByClassName('styleguide-item__compiled-code');
        for (var i = 0; i < codeClasses.length; i++) {
            var classList = codeClasses[i].classList;
            if (classList.contains('code-hidden')) {
                classList.remove('code-hidden');
            }
            else {
                classList.add('code-hidden');
            }
        }
    },

    reactCodeToggle: function () {
        var codeClasses = document.getElementsByClassName('styleguide-item__react-code');
        for (var i = 0; i < codeClasses.length; i++) {
            var classList = codeClasses[i].classList;
            if (classList.contains('code-hidden')) {
                classList.remove('code-hidden');
            }
            else {
                classList.add('code-hidden');
            }
        }
    },

    render: function () {
        return (
            <div id="menu-toggle">
                <ActionButton
                    action={this.menuToggle}
                    text="Hide Menu"
                    toggledText="Show Menu"
                    icon={MenuIcon}
                    active={true}
                    className="button button--nav-toggle button--menu-toggle"
                />
                <ActionButton
                    action={this.noteToggle}
                    text="Hide Notes"
                    icon={NotesIcon}
                    toggledText="Show Notes"
                    active={true}
                    className="button button--nav-toggle button--can-hide"
                />
                <ActionButton
                    action={this.reactCodeToggle}
                    text="react"
                    icon={ReactIcon}
                    toggledText="Show React Code"
                    active={true}
                    className="button button--nav-toggle button--can-hide"
                />
                <ActionButton
                    action={this.codeToggle}
                    text="Hide HTML Code"
                    icon={CodeIcon}
                    toggledText="Show HTML Code"
                    active={true}
                    className="button button--nav-toggle button--can-hide"
                />

            </div>
        )
    }
})

var StyleGuide = React.createClass({

    componentDidMount: function(){
        styleguideUI();
    },

    componentDidUpdate: function(){
        styleguideUI();
    },

    render: function(){

        var route = this.props.route;
        var render;

        if(route){

            try {
                // a path we KNOW is totally bogus and not a module
                var Component = require("js/components/pages/" + route);
                render = < Component />;
            }
            catch (e) {
            }
        }

        else{
            render = <div id="app">
                <Page />
                <Nav />
                <OffCanvas />
            </div>
        }

        return (
            render
        )
    }
})


function render () {
    var route = window.location.hash.substr(1);
    var routeTo = route.search("\\?route=true");
    var component;

    if(routeTo != -1){
        component = route.replace('?route=true', '');
        initialRender = true;
        singlePage = true;
    }
    else{
        component = false;

        if(singlePage){
            singlePage = false;
            initialRender = true;
        }
    }


    if(initialRender) {
        initialRender = false;
        React.render(<StyleGuide route={component}/>, document.querySelector("#page"));
    }


}

window.addEventListener('hashchange', render);

render(); // render initially