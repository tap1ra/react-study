'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _logo = require('./logo.svg');

var _logo2 = _interopRequireDefault(_logo);

require('./App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    { className: 'App' },
    _react2.default.createElement(
      'header',
      { className: 'App-header' },
      _react2.default.createElement('img', { src: _logo2.default, className: 'App-logo', alt: 'logo' }),
      _react2.default.createElement(
        'p',
        null,
        'Edit ',
        _react2.default.createElement(
          'code',
          null,
          'src/App.tsx'
        ),
        ' and save to reload.'
      ),
      _react2.default.createElement(
        'a',
        {
          className: 'App-link',
          href: 'https://reactjs.org',
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        'Learn React'
      )
    )
  );
};

exports.default = App;