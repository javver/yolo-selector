# yolo-selector [![Build Status](https://app.travis-ci.com/javver/yolo-selector.svg?branch=master)](https://app.travis-ci.com/github/javver/yolo-selector)

> Select obsolete HTML elements using jQuery.

The original list of elements comes from the [Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Obsolete_and_deprecated_elements).


## Install

```
$ npm install yolo-selector
```


## Usage

```js
const jQuery = require('jquery');
const instalYolo = require('yolo-selector');

instalYolo(jQuery);

$(':yolo').css({ border: '5px solid red' });
```


## API

### installYolo(jQuery)

#### jQuery

Type: `object`

The jQuery object.

## License

MIT © [Javier Cardona](http://javver.com)
