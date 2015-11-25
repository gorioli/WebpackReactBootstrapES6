//import React from 'react';
//
//class Hello extends React.Component {
//    render() {
//        return <h1>Hello</h1>
//    }
//}
//
//React.render(<Hello/>, document.getElementById('content'));


'use strict';

//var React = require('react');
//var ReactDOM = require('react-dom');
//var data = require('./data.js');
//var ContentBox = require('./components/ContentBox.jsx');


import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';
import ContentBox from  './components/ContentBox.jsx';


//class Hello extends React.Component {
//    render() {
//        return <h1>Hello</h1>
//    }
//}
//
//ReactDom.render(<Hello/>, document.getElementById('content'));


(function main() {

    ReactDOM.render(
        <ContentBox data={data}/>,
        document.getElementById('content')
    );
})();