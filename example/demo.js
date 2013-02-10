var codemirror = require('codemirror');
require('codemirror-mode-css')(codemirror);
var textarea = document.getElementById('source');
codemirror.fromTextArea(textarea);
