# TODO 
- Allow for tags that can enclose text.
- Filtering, only show selected components.

# Virgil
Guiding you through the Hell that is front-end development.


## Fire it Up
1. Clone this repo.
2. 
3. Your UI Kit has been generated and lives at localhost:8080.

## Getting Started
This component library / styleguide is built on top of React and webpack, for a few reasons:
- I like React.
- React is designed around building web components.
- Webpack allows you to require CSS and JS as necessary, which means all of the components here are modular. Copy the SASS and JS files out and you can use them anywhere. If you're not using React, just use the base HTML that is rendered.

## Styleguide Overview
The styleguide is organized into five sections: Styleguide, Elements, Blocks, Structures, and Pages. 
- Styleguide is static content, mostly notes or descriptions of general style usage. Colors, fonts, base sizes and line heights and other things should live here.
- Elements are the lowest level of component. Generally these are actual HTML elements, or single elements with modifiers.
- Blocks are made up of multiple elements.
- Structures are multiple blocks in a container. A block might have internal spacing, but a structure has external spacing. Generally these span the entire width of the page. If you stack them on top of each other, you get a...
- Page. Structures on top of each other.


## Component Statics
notes - A function that returns anything, though preferably JSX. Will display above the component, can be toggled on and off.
title - A String.
hideCode - Boolean. Hide HTML markup for this component.
hideReactMarkup - Boolean. Hide React markup for this component.
hideFromNav - Boolean. Keeps the component from showing up in the navigation.
mock - Object with properties you wish to pass to the element in the styleguide. This can be used in place of (or along with) getDefaultProps to load in properties that will appear in the styleguide that can be removed from the actual project. 

## Structure
app is where all of the code lives. Build is where the compiled code gets spit out.
Inside app:
- js
	- components - These are React components. They're sorted into elements, structures, and pages (from smallest to largest). 
	- ui - This js can be pulled out and used anywhere. It's used to create dynamic user interfaces.
	styleguide.js - just some markup that handles the style guide (to delete, should be part of main.jsx).
- sass
	- components - Styles for the React components. Uses the same naming convention as the React components.
	- config - Variables.
	- mixins - Frequently used mixins. I try to create a mixin for each component so that the reused code is nicely defined.
	- styleguide.scss - styles the styleguide.
- index.html
- main.jsx - Entry point to the app. 

## Requirements
None. Everything displayed in the styleguide is HTML and JS.

## Compatability
The goal is IE10+

## Reference Guide
- [Webpack Dev Server](http://webpack.github.io/docs/webpack-dev-server.html)
- [React Reusable Components](https://facebook.github.io/react/docs/reusable-components.html)