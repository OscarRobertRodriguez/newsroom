import testLog from './testLog'; // must use relative path, note the starting './' for a file in the current directory

module.exports = {
    // all properties and methods from this object are accessible outside this component as the object properties and methods
    // if you need a property or a method accessible for use outside this component, they should be placed on this object

    log: function() {
        console.log('Spy!');
    },

    log2: function() {
        console.log('Spy again!');
    },

    // assign a method from the 'testLog' component to the property of this component
    logFromTestLog: testLog.log
};