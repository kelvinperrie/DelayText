# JQuery pluging to display text with a delay between words or characters

## Usage

```
$(".myDiv").outputCharactersWithDelay("Hello world");
```

## Configuration

The only configuration options are the delay between each output and the callback when complete. Pass this as an additional object.

```
var textToOutput = "Hello world";
$(".myDiv").outputWordsWithDelay(textToOutput, { outputPartDelay: 200, completedCallBack: function () { myDoneFunction(); } });
```
