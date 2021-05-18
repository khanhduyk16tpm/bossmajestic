function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a}function ownKeys(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach((function(t){_defineProperty(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _classPrivateFieldLooseBase(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var id=0;function _classPrivateFieldLooseKey(e){return"__private_"+id+++"_"+e}var _default=_classPrivateFieldLooseKey("default"),_bsModal=_classPrivateFieldLooseKey("bsModal"),_getModal=_classPrivateFieldLooseKey("getModal"),_getHeader=_classPrivateFieldLooseKey("getHeader"),_getBody=_classPrivateFieldLooseKey("getBody"),_getFooter=_classPrivateFieldLooseKey("getFooter"),_getBtn=_classPrivateFieldLooseKey("getBtn"),_show=_classPrivateFieldLooseKey("show"),BootPop=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"show",value:function(e){e=_objectSpread(_objectSpread({},this.default),e);var t=_classPrivateFieldLooseBase(this,_getModal)[_getModal](e.size),o=t.firstChild.firstChild;e.title&&o.appendChild(_classPrivateFieldLooseBase(this,_getHeader)[_getHeader](e.title,e.closeBtn)),o.appendChild(_classPrivateFieldLooseBase(this,_getBody)[_getBody](e.message,e.bodyCenter)),e.buttons&&o.appendChild(_classPrivateFieldLooseBase(this,_getFooter)[_getFooter](e.buttons)),_classPrivateFieldLooseBase(this,_show)[_show](t,e.bootstrap,e.onClose)}},{key:"dialog",value:function(e){e=_objectSpread(_objectSpread({},this.default),e);var t=_classPrivateFieldLooseBase(this,_getModal)[_getModal](e.size);t.firstChild.firstChild.appendChild(_classPrivateFieldLooseBase(this,_getBody)[_getBody](e.message,e.bodyCenter)),_classPrivateFieldLooseBase(this,_show)[_show](t,e.bootstrap,e.onClose)}},{key:"close",value:function(){_classPrivateFieldLooseBase(this,_bsModal)[_bsModal]&&(_classPrivateFieldLooseBase(this,_bsModal)[_bsModal].hide(),_classPrivateFieldLooseBase(this,_bsModal)[_bsModal]=null);var e=document.getElementById(this.modalId);e&&e.remove()}},{key:"SIZE",get:function(){return{SMALL:"modal-sm",DEFAULT:"",MEDIUM:"modal-md",LARGE:"modal-lg",X_LARGE:"modal-xl"}}},{key:"default",get:function(){var e=_classPrivateFieldLooseBase(this,_default)[_default],t=_objectSpread({},e),o=e.buttons;for(var a in t.bootstrap=_objectSpread({},e.bootstrap),t.buttons={},o)t.buttons[a]=_objectSpread({},o[a]);return t}}]),e}();BootPop.modalId="bootpop-modal",Object.defineProperty(BootPop,_default,{writable:!0,value:{title:"Confirm",message:"Are you sure you want to proceed?",size:BootPop.SIZE.DEFAULT,closeBtn:!1,bodyCenter:!1,buttons:{confirm:{label:"Confirm",className:"btn-primary",callback:function(){}},cancel:{label:"Cancel",className:"btn-primary bg-danger",callback:function(){}}},onClose:function(){},bootstrap:{backdrop:"static",keyboard:!1}}}),Object.defineProperty(BootPop,_bsModal,{writable:!0,value:null}),Object.defineProperty(BootPop,_getModal,{writable:!0,value:function(e){var t,o=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),s=["modal-dialog","modal-dialog-centered"].concat(_toConsumableArray(e?[e]:[]));return o.setAttribute("id",this.modalId),o.setAttribute("tabindex","-1"),o.setAttribute("aria-labelledby",this.modalId),o.setAttribute("aria-hidden","true"),o.classList.add("modal","fade"),(t=a.classList).add.apply(t,_toConsumableArray(s)),r.classList.add("modal-content","container-fluid"),a.appendChild(r),o.appendChild(a),o}}),Object.defineProperty(BootPop,_getHeader,{writable:!0,value:function(e,t){var o=document.createElement("div"),a=document.createElement("h5");if(o.classList.add("modal-header","row"),a.classList.add("modal-title"),a.innerText=e,o.appendChild(a),t){var r={label:'<span aria-hidden="true">&times;</span>',className:"close"};t instanceof Function&&(r.callback=t),o.appendChild(_classPrivateFieldLooseBase(this,_getBtn)[_getBtn](r))}return o}}),Object.defineProperty(BootPop,_getBody,{writable:!0,value:function(e){var t,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=document.createElement("div"),r=document.createElement("p"),s=["modal-body","row"].concat(_toConsumableArray(o?["justify-content-center","text-center"]:[]));return(t=a.classList).add.apply(t,_toConsumableArray(s)),r.innerHTML=e,o&&r.classList.add("m-0"),a.appendChild(r),a}}),Object.defineProperty(BootPop,_getFooter,{writable:!0,value:function(e){var t=document.createElement("div");for(var o in t.classList.add("modal-footer","row"),e)t.appendChild(_classPrivateFieldLooseBase(this,_getBtn)[_getBtn](e[o]));return t}}),Object.defineProperty(BootPop,_getBtn,{writable:!0,value:function(e){var t=document.createElement("button");if(t.setAttribute("data-bs-dismiss","modal"),e.className){var o,a=e.className.trim().split(" ").filter((function(e){return e}));a.push("btn"),(o=t.classList).add.apply(o,_toConsumableArray(a))}else t.classList.add("btn","btn-primary");return t.innerHTML=e.label,e.hasOwnProperty("callback")&&(t.onclick=e.callback),t}}),Object.defineProperty(BootPop,_show,{writable:!0,value:function(e,t,o){this.close(),document.body.appendChild(e);var a=new bootstrap.Modal(e,t);a._bshide=a.hide,a.hide=function(){a._bshide(),o()},_classPrivateFieldLooseBase(this,_bsModal)[_bsModal]=a,a.show()}});export{BootPop as default};