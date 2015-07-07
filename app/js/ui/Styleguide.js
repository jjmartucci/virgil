var hljs = require("highlight.js");
var beautify_html = require('js-beautify').html;

var styleguideUI = function() {

    var renderedComponents = document.getElementsByClassName('styleguide-item');

    for (var i = 0; i < renderedComponents.length; i++) {

        var component = renderedComponents[i].getElementsByClassName('react-component');
        var compiledCode = renderedComponents[i].getElementsByClassName('compiled-code');

        if (compiledCode.length) {
            var componentClone = component[0].cloneNode('deep');

            // de-reactify all child nodes
            var children = componentClone.querySelectorAll('*');
            for (var c = 0; c < children.length; c++) {
                children[c].removeAttribute('data-reactid');
            }

            var inner = componentClone.innerHTML;
            var beautified = beautify_html(inner);
            var preWrap = document.createElement('pre');
            var codeWrap = document.createElement('code');
            codeWrap.innerText = beautified;
            preWrap.appendChild(codeWrap);
            compiledCode[0].appendChild(preWrap);
        }

    }

    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
}

module.exports = styleguideUI;