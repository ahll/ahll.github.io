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
  return ProviderData[Locale];
};

var imageUrl = ImageSource + "/provider/image/";

function ProviderCard(props) {
  var data = props.data;
  return React.createElement("div", {
    className: "item background-wine provider-card"
  }, React.createElement(Card, null, React.createElement(CardMedia, {
    className: "itemMedia",
    image: data.image,
    title: data.name
  }), React.createElement(CardContent, {
    className: "itemContent"
  }, React.createElement(Typography, {
    gutterBottom: true,
    variant: "headline",
    component: "h2"
  }, data.name), React.createElement(Typography, {
    component: "p"
  }, data.owner.value), React.createElement(Typography, {
    component: "p"
  }, data.countryArea.value), React.createElement(Typography, {
    component: "p"
  }, data.vineyardArea.value), React.createElement(Typography, {
    component: "p"
  }, data.majorVarieties.value)), React.createElement(CardActions, null)));
}

function Prividers(props) {
  var cards = text().data.map(function (data, index) {
    return React.createElement(ProviderCard, {
      key: index,
      data: data
    });
  });
  return React.createElement("section", {
    id: "provider",
    className: ""
  }, React.createElement("div", {
    className: "itemList"
  }, cards));
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

var Privider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Privider, _React$Component);

  function Privider(props) {
    var _this;

    _classCallCheck(this, Privider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Privider).call(this, props));
    _this.state = {
      locale: Locale
    };
    _this.changeTitle = props.title;
    return _this;
  }

  _createClass(Privider, [{
    key: "render",
    value: function render() {
      this.changeTitle(text().title);
      return React.createElement("div", null, React.createElement(Prividers, null), React.createElement(Footer, null));
    }
  }]);

  return Privider;
}(React.Component);

window.onload = function () {
  ReactDOM.render(React.createElement(Page, null, React.createElement(Privider, null)), document.getElementById("page"));
};