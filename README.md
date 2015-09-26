# hasProperty
Utility to check for existence of properties within objects in Javascript / Node.js

Checks for existence of a property name in any object.  Can check Objects, Strings, Numbers, Arrays or Booleans.

## Install
    npm install hasProperty

## Usage

    var hasProp = require('hasProperty').hasProp;
    var sampleObj = {
        test1: "Test1",
        test2: {
            subProp1: 'Hello'
        }
    }
    if (hasProp(sampleObj, "test2.subProp1") {
        console.log('sampleObj.test2.subProp1 exists');
    }

hasProp can check for more than 1 property in an object.

    var hasProp = require('hasProperty').hasProp;
    var sampleObj = {
        test1: "Test1",
        test2: {
            subProp1: 'Hello'
        }
    }
    if (hasProp(sampleObj, "test2.subProp1", "test1") {
        console.log('sampleObj.test2.subProp1 and sampleObj.test1 exist');
    }
