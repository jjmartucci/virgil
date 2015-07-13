# Virgil
Guiding you through the Hell that is front-end development.

## Fire it Up
1. Clone this repo.
2. Run `npm install`
3. Visit localhost:1234

## What is It
Virgil is a styleguide and component generator built on React + Webpack.

### What if I don't know React?
I tried to keep this as simple as possible, so if all you really want to do is create a styleguide that shows some HTML markup, you can still do it. Check out one of the components in the `elements` folder to get an idea of how the templates are rendered.

## Why Another Styleguide Generator
Virgil tries to be better about:
- Recognizing that most components are HTML + CSS + JavaScript. Webpack loading allows you to require all of the parts you need at the component level.
- Knowing that if you work on a lot of projects, you might want to reuse parts from one styleguide in another.
- Using JSX / React components - so if you're already working on projects using React you're not working in two different templating languages.

## Configuration
Out of the box the styleguide is organized into five sections: Styleguide, Elements, Blocks, Structures, and Pages. 
- Styleguide is static content, mostly notes or descriptions of general style usage. Colors, fonts, base sizes and line heights and other things should live here.
- Elements are the lowest level of component. Generally these are actual HTML elements, or single elements with modifiers.
- Blocks are made up of multiple elements.
- Structures are multiple blocks in a container. A block might have internal spacing, but a structure has external spacing. Generally these span the entire width of the page. If you stack them on top of each other, you get a...
- Page. Structures on top of each other.

If you want to change this structure, go to `app/config.js`. The file should be self-explanatory, and you can add / delete any number of folders from here. The sections will load in order based on this config file, and individual components will load based on file order, so you can number them to load them in non-alphabetical order (see the styleguide folder as an example of that).

## Component Statics
Each component can use React's [statics](https://facebook.github.io/react/docs/component-specs.html#statics) object to define a few properties that can be used in the styleguide itself.

- notes - A function that returns anything, though preferably JSX. Will display above the component, can be toggled on and off.
- title - A String.
- hideCode - Boolean. Hide HTML markup for this component.
- hideReactMarkup - Boolean. Hide React markup for this component.
- hideFromNav - Boolean. Keeps the component from showing up in the navigation.
- mock - Object with properties you wish to pass to the element in the styleguide. This can be used in place of (or along with) getDefaultProps to load in properties that will appear in the styleguide that can be removed from the actual project. Note that this will only work for the base level component, components that include other components will require properties passed to them.
- route - Loads the component in a new page. Handy for full page views. At the moment it only works if the component lives in `js/components/pages`.

#Webpack
- Running `webpack` from the command line will build out the build folder.
- Running `webpack-dev-server` will fire up a local server at `localhost:8080` that will allow you to see updates in real time. This does _not_ add files to the build folder.

## Structure
app is where all of the code lives. Build is where the compiled code gets spit out.
Inside app:
- images - For static image assets. You can load these with require().
- js
	- components - These are React components.  
	- styleguide - Components specific to this styleguide. Don't change these unless you know what you're doing.
- sass
	- components - Styles for the React components. Uses the same naming convention as the React components.
	- config - Variables.
	- mixins - Some mixins for the styleguide and the included components. 
	- styleguide.scss - Styles the styleguide, if you want to change the way it looks, start here.
- config.js - Defines the folders to be used in the styleguide.
- index.html - Main page content.
- main.jsx - Entry point to the app. 

## Requirements
None. Everything displayed in the styleguide is HTML and JS.

## Reference Guide
- [Webpack Dev Server](http://webpack.github.io/docs/webpack-dev-server.html)
- [React Reusable Components](https://facebook.github.io/react/docs/reusable-components.html)

# TODO 
- Allow for tags that can enclose text.
- Filtering, only show selected components.
- At the moment pages with route=true must exist in the pages/ folder under js-components