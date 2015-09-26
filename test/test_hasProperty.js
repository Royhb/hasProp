var assert = require('assert');
var colors = require('colors');
var hasProp = require('../hasProp.js').hasProp;

var util = require('util');
var uf = util.format;

var errorTest = [];

function runTest(actual, expected, funcName) {
    try {
        assert.strictEqual(actual, expected, funcName + ' failed');
        passed(funcName);
    } catch (e) {
        failed(e.message, funcName);
    }
}
function runLooseTest(actual, expected, funcName) {
    try {
        assert.equal(actual, expected, funcName + ' failed');
        passed(funcName);
    } catch (e) {
        failed(e.message, funcName);
    }
}
function passed (moduleName) {
    console.log(colors.green('Test passed: ' + moduleName));
}

function failed (errMsg, funcName) {
    errorTest.push(funcName)
    console.log(colors.red('Test failed: ' + errMsg));
}
function testsDone () {
    console.log(colors.cyan('\n\nTests complete'));
    if (errorTest.length > 0) {
        console.log('Failed tests:');
    } else {
        console.log('All tests ok');
    }
    errorTest.forEach(function (badFunc) {
        console.log(colors.red(uf('    %s', badFunc)));
    });
    console.log('\n');
}

var testObject = {
    level1A: {
        prop2A1: 23,
        prop2A2: {
            prop3A1: "Test"
        }
    },
    level1B: {
        prop2B1: "Another test property"
    },
    level1C: "Test property"
}

runTest(hasProp(testObject, "level1A"), true, 'single top level');
runTest(hasProp(testObject, "level1A.prop2A2"), true, 'single second level');
runTest(hasProp(testObject, "level1A.prop2A2.prop3A1"), true, 'single top level');

runTest(hasProp(testObject, "level1D"), false, 'non existent single top level');
runTest(hasProp(testObject, "level1A.propzzz.propxxx.propyyy.propzzz"), false, 'deep nested non existent');

testsDone();