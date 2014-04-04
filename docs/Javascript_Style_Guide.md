##JavaScript style guide

JavaScript is the main client-side scripting language used by the ZhaiLeMe app. This style guide is a list of dos and don'ts for JavaScript programs.

### JavaScript Language Rules
We always write javascript in strict mode

```javascript
'use strict';
```
####Variables
**Always** declare variables.

like this:
```javascript
var goodBoy = 'You\'re a good boy';
```

**NOT** like this
```javascript
badboy = "DON\`T DO THIS"
```

####Constants
* Use ```javascript NAMES_LIKE_THIS ``` for constant values. (all caps)
* Use ```javascript @const to ``` indicate a constant (non-overwritable) pointer (a variable or property).

####Semicolons
To confirm that all code can be minified and compressed, ALWAYS use semicolons.
```javascript
var tellingOff = true;
```
This also will avoid any hard to debug issues.

####Function Declarations Within Blocks

**Do not do this:**
```javascript
if (x) {
  function foo() {}
}
```

While most script engines support Function Declarations within blocks it is not part of ECMAScript (also Google don't allow it in their style guide

**Do this** This is what the cool kids do
```javascript
if (x) {
  var foo = function() {}
}
```


### JavaScript Style Rules

###Naming Conventions;
The following are the standard naming conventions we expect for all ZhaiLeMe JavaScript programs.

####Varibles:
```javascript
variableNamesLikeThis
```

####Functions:
```javascript
functionNamesLikeThis
```

####Classes:
```javascript
ClassNamesLikeThis
```

####Enumerators:
```javascript
EnumNamesLikeThis
```

####Methods:
```javascript
methodNamesLikeThis
```

####Constants:
```javascript
CONSTANT_VALUES_LIKE_THIS
```

####Name Spaces:
```javascript
foo.namespaceNamesLikeThis.bar
```

####Filenames:
```javascript
filenameslikethis.js
```

###Code Formatting:

####Curly Braces
```javascript
if (something) {
  // ...
} else {
  // ...
}
```

####Blank lines
Use newlines to group logically related pieces of code.
```javascript
var fruit = getFruitList();
getFruitPrices(fruit);

var veggies = getVeggiesList();
```

####Array
```javascript
var arr = [1, 2, 3];  // No space after [ or before ].
```

```javascript
// Array initializer.
this.rows_ = [
  '"Nicholas Zhao" <nicholas0401@gmail.com>',
  '"Robin Yan" <robinyzg@gmail.com>'
];
```
####Object
```javascript
var obj = {a: 1, b: 2, c: 3};  // No space after { or before }.
```

```javascript
// Object initializer.
var inset = {
  top: 10,
  right: 20,
  bottom: 15,
  left: 12
};
```
####Function Arguments
When possible, all function arguments should be listed on the same line.
If you have to have a multi-line function, break each argument onto its own line and indent it:
```javascript
foo.bar.thisIsGoingToBeBig = function(
    veryDescriptiveArgumentNumberOne,
    veryDescriptiveArgumentTwo,
    tableModelEventHandlerProxy,
    artichokeDescriptorAdapterIterator) {
  // ...
};

```
####Passing Anonymous Functions
When declaring an anonymous function in the list of arguments for a function call, the body of the function is indented two spaces from the left edge of the statement.

####Comments
All comments are upper case and sit on top of what it is referring to with once space after //
This will also inherit to indented wrapped lines

```javascript

// SELECT FRUIT
var fruit = $(fruits['peach']);

// GET HIDE FRUIT
fruit.hide();



```
####Indenting wrapped lines
Except for array literals, object literals, and anonymous functions, all wrapped lines should be indented either left-aligned to a sibling expression above.

// ALIAS NEW TYPES AFTER THE CONSTRUCTOR
my.module.SomeType = function() { ... };
var SomeType = my.module.SomeType;

// DECLARE METHODS ON THE PROTOTYPE
SomeType.prototype.findButton = function() {
  // BUTTON AS ALIAS FROM ABOVE
  this.button = new Button(dom.getElement('my-button'));
};
####Strings
Prefer ' over "
