# hasProperty
Utility to check for existence of properties within objects in Javascript / Node.js

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
