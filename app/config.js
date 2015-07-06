/*
 * This is the configuration file for Virgil.
 *
 * If you want to change the directory structure / names of your Virgil guide, it can be done here.
 * The name is the name that will appear in the sidebar navigation.
 * The context attribute is where Virgil will pull from components from.
 * If you're pulling in basic React components, just add/replace the './js/components/__folder__' with
 * your folder name.
 *
 * For more info on Webpack's require.context:
 * https://github.com/webpack/docs/wiki/context#requirecontext
 *
 */

var structure = [
    {
        name: 'Styleguide',
        context: require.context('./js/components/styleguide/', false,  /^\.\/.*\.jsx$/)
    },
    {
        name: 'Elements',
        context: require.context('./js/components/elements/', false,  /^\.\/.*\.jsx$/)
    },
    {
        name: 'Blocks',
        context: require.context('./js/components/blocks/', false,  /^\.\/.*\.jsx$/)
    },
    {
        name: 'Structures',
        context: require.context('./js/components/structures/', false,  /^\.\/.*\.jsx$/)
    },
    {
        name: 'Pages',
        context: require.context('./js/components/pages/', false,  /^\.\/.*\.jsx$/)
    }
]

module.exports = structure;