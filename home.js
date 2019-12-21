"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var text = function text() {
  return HomeData[Locale];
};

var imageUrl = ImageSource + "/home/image/";

function ShowCase(props) {
  return React.createElement("section", {
    id: "showcase",
    className: "showcase background-wine text-white"
  }, React.createElement("div", {
    className: ""
  }, React.createElement("img", {
    src: imageUrl + "showcase.jpg"
  })), React.createElement("div", {
    className: "text"
  }, React.createElement("h1", null, text().showcase.title), React.createElement("div", null, React.createElement("p", {
    className: "animateOne animated zoomIn"
  }, text().showcase.content), React.createElement(Button, {
    size: "small",
    href: "#contact",
    className: "text-white"
  }, text().showcase.button))));
}

function MarcketCard(props) {
  var data = props.data;
  return React.createElement("div", {
    className: "item background-wine marcket-card"
  }, React.createElement(Card, null, React.createElement(CardMedia, {
    className: "itemMedia",
    image: imageUrl + data.image,
    title: data.title
  }), React.createElement(CardContent, {
    className: "itemContent"
  }, React.createElement(Typography, {
    gutterBottom: true,
    variant: "headline",
    component: "h2"
  }, data.title), React.createElement(Typography, {
    component: "p"
  }, data.content)), React.createElement(CardActions, null)));
}

function Marcket(props) {
  var cards = text().marcket.data.map(function (data, index) {
    return React.createElement(MarcketCard, {
      key: index,
      data: data
    });
  });
  return React.createElement("section", {
    id: "marcket",
    className: ""
  }, React.createElement("h1", null, text().marcket.title), React.createElement("div", {
    className: "itemList"
  }, cards));
}

function PlatformCard(props) {
  var data = props.data;
  return React.createElement("div", {
    className: "smallItem platform-card"
  }, React.createElement(Card, null, React.createElement(CardMedia, {
    className: "itemMedia",
    image: imageUrl + data.image,
    title: data.title
  }), React.createElement(CardContent, {
    className: "itemContent"
  }, React.createElement(Typography, {
    gutterBottom: true,
    variant: "headline",
    component: "h2"
  }, data.title), React.createElement(Typography, {
    component: "p"
  }, data.content)), React.createElement(CardActions, null)));
}

function getSteps() {
  return text().platform.steps;
}

function getStepContent(step) {
  return text().platform.stepsText[step];
}

function WineTravelSteps() {
  var _React$useState = React.useState(1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

  var steps = getSteps();

  var handleNext = function handleNext() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep + 1;
    });
  };

  var handleBack = function handleBack() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep - 1;
    });
  };

  var handleReset = function handleReset() {
    setActiveStep(0);
  };

  return React.createElement("div", null, React.createElement(Stepper, {
    alternativeLabel: true,
    activeStep: activeStep
  }, steps.map(function (label) {
    return React.createElement(Step, {
      key: label
    }, React.createElement(StepLabel, null, label));
  })), React.createElement("div", null, activeStep === steps.length ? React.createElement("div", null, React.createElement(Button, {
    onClick: handleReset
  }, "Reset")) : React.createElement("div", null, React.createElement(Typography, null, getStepContent(activeStep)), React.createElement("div", null, React.createElement(Button, {
    disabled: activeStep === 0,
    onClick: handleBack
  }, "Back"), React.createElement(Button, {
    variant: "contained",
    color: "primary",
    onClick: handleNext
  }, activeStep === steps.length - 1 ? 'Finish' : 'Next')))));
}

function Platform(props) {
  var cards = text().platform.data.map(function (data, index) {
    return React.createElement(PlatformCard, {
      key: index,
      data: data
    });
  });
  return React.createElement("section", {
    id: "platform",
    className: "background-wine text-white"
  }, React.createElement("h1", null, text().platform.title), React.createElement("div", {
    className: "wineTravelSteps"
  }, React.createElement(WineTravelSteps, null)), React.createElement("div", {
    className: "itemList"
  }, cards));
}

function SupportCard(props) {
  var data = props.data;
  return React.createElement("div", {
    className: "item background-wine support-card"
  }, React.createElement(Card, null, React.createElement(CardMedia, {
    className: "itemMedia",
    image: imageUrl + data.image,
    title: data.title
  }), React.createElement(CardContent, {
    className: "itemContent"
  }, React.createElement(Typography, {
    gutterBottom: true,
    variant: "headline",
    component: "h2"
  }, data.title), React.createElement(Typography, {
    component: "p"
  }, data.content)), React.createElement(CardActions, null)));
}

function Support(props) {
  var cards = text().support.data.map(function (data, index) {
    return React.createElement(SupportCard, {
      key: index,
      data: data
    });
  });
  return React.createElement("section", {
    id: "support",
    className: ""
  }, React.createElement("h1", null, text().support.title), React.createElement("div", {
    className: "itemList"
  }, cards));
}

function Contact(props) {
  var data = text().contact.data;
  return React.createElement("section", {
    id: "contact",
    className: "background-wine text-white"
  }, React.createElement("h1", null, data.contact), React.createElement("div", {
    className: "contact-info"
  }, React.createElement("div", {
    className: "contact-info-item"
  }, data.phone), React.createElement("div", {
    className: "contact-info-item"
  }, data.mail), React.createElement("div", {
    className: "contact-info-item"
  }, data.whatsapp), React.createElement("div", {
    className: "contact-info-item"
  }, data.wechat)), React.createElement("div", {
    className: "iframe"
  }, React.createElement("iframe", {
    className: "contact-map",
    width: "100%",
    height: "500px",
    frameBorder: "0",
    src: "https://www.google.com/maps/embed/v1/place?q=plaza%20museo%20cultura%20china%20%2C%20Madrid%2C%20Espa%C3%B1a&key=AIzaSyBLUievS93qpr4IBKpuq42p7E2T3pzM4cw",
    allowFullScreen: true
  })));
}

function Footer(props) {
  var data = text().footer;
  var listItem = [];

  for (var name in data) {
    listItem.push(React.createElement("p", null, data[name]));
  }

  return React.createElement("section", {
    id: "footer",
    className: "footer background-wine text-white"
  }, listItem);
}

var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));
    _this.state = {
      locale: Locale
    };
    _this.changeTitle = props.title;
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      this.changeTitle(text().title);
      return React.createElement("div", null, React.createElement(ShowCase, null), React.createElement(Marcket, null), React.createElement(Platform, null), React.createElement(Support, null), React.createElement(Contact, null), React.createElement(Footer, null));
    }
  }]);

  return Home;
}(React.Component);

window.onload = function () {
  ReactDOM.render(React.createElement(Page, null, React.createElement(Home, null)), document.getElementById("page"));
};