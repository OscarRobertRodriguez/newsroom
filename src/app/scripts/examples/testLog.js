module.exports = {
    // all properties and methods from this object are accessible outside this component as the object properties and methods
    // if you need a property or a method accessible for use outside this component, they should be placed on this object

    property: 'I am the property!',

    log: function() {
        console.log('Test!');
    },

    log2: function () {
        let text = cantTouchMe(this.property);
        console.log(text);
    }
};


/* all variables and functions here are not accessible outside this component */

// this function can only be used in this component/file
function cantTouchMe(string) {
    return string.toUpperCase();
}