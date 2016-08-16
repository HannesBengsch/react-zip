var React = require('react');

module.exports = function zip() {
    if (arguments.length === 0) {
        return function() {
            return null;
        }
    }

    var remaining = [];
    var i = 1;

    while (i < arguments.length) {
        remaining[i - 1] = arguments[i];
        i++;
    }

    return function(props) {
        return React.createElement(arguments[0], props, zip(remaining));
    }
}
