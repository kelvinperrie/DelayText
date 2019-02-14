# JQuery pluging to display text with a delay between words or characters

## Usage

```
$(".myDiv").outputCharactersWithDelay("Hello world");
```

## Configuration

The only configuration options are the delay between each output and callbacks for when output complete or when each output part (e.g. word) is complete. Pass this as an additional object.

```
var textToOutput = "Hello world";
$(".myDiv").outputWordsWithDelay(textToOutput, { outputPartDelay: 200, completedCallBack: function () { myDoneFunction(); } });
```
## Demo

http://htmlpreview.github.io/?https://github.com/kelvinperrie/DelayText/blob/master/demo.html
