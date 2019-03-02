import React, { Component } from 'react';
import './Footer.css';

export default class Foot extends Component {
	render() {
		return (
			<footer className="page-footer yellow accent-2">
	          <div className="container">
	            <div className="row">
	              <div className="col l6 s12">
	                <h5 className="black-text">About ConnectFit</h5>
	                <p className="black-text text-lighten-4">Set goals, track your progress and interact with your peers! ConnectFit turns your local gym into its own social network.</p>
	              </div>
	              <div className="col l4 offset-l2 s12">
	                <h5 className="black-text">Developer</h5>
	                <ul>
	                  <li><a className="black-text text-lighten-3" href="#!">Richmond Ampomah</a></li>
	                </ul>
	              </div>
	            </div>
	          </div>
	          <div className="footer-copyright yellow">
	            <div className="container">
	            © 2019
	            <a className="black-text text-lighten-4 right" href="#!"></a>
	            </div>
	          </div>
	        </footer>
		);
	}
}




