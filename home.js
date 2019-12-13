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