import React, { Component } from 'react';
import username from '../svg/username.svg';
import password from '../svg/password.svg';
import { BrowserRouter as Router, Link } from "react-router-dom";
import PropTypes from 'prop-types';

import {
	Grid,
	Row,
	Col,
 	FormGroup,
	InputGroup,
	FormControl,
 	Button,
 	Panel, } from 'react-bootstrap';

	class Login extends Component {
	  render() {
	    return (
	      <div className="login center-me">
					<Grid fluid>
						<Panel>
							<Panel.Body>
							<div className="logo text-center">
								<svg width="140" height="27" viewBox="0 0 140 27" xmlns="http://www.w3.org/2000/svg"><g fill="none"><text transform="translate(32 -4)" fill="#555" fontFamily="WhitneyHTF-Light, Whitney HTF" fontSize="30" fontWeight="300"><tspan x="0" y="28">Palaterra</tspan></text><path fill="#904BDE" d="M10.273 20.998l-9.409-15.845 18-.306z"/><path fill="#41C299" opacity=".832" d="M10 11l9 16h-18z"/></g></svg>
							</div>
							<Row>
								<Col xs={12} md={8} mdOffset={2}>
								<form className="form-wrapper">
									<FormGroup>
										<InputGroup>
											<InputGroup.Addon>
												<img src={username} alt="username" />
											</InputGroup.Addon>
											<FormControl type="text"
											placeholder="Username"
										 />
										</InputGroup>
									</FormGroup>
									<FormGroup>
										<InputGroup>
											<InputGroup.Addon>
												<img src={password} alt="password" />
											</InputGroup.Addon>
											<FormControl type="text"
											placeholder="Password"
										/>
										</InputGroup>
									</FormGroup>
									<Row>
										<Col xs={12} sm={12}>
											<Button className="btn-purple" bsSize="large" block>{this.props.loginText}</Button>
										</Col>
									</Row>
								</form>
								<Row className="visible-xs visible-sm hidden-md hidden-lg">
									<Col xs={5} className="text-center">
										<Router>
										<Link to="#" className="light-gray">{this.props.helpText}</Link>
										</Router>
									</Col>
									<Col xs={2} className="text-center light-gray">
										|
									</Col>
									<Col xs={5} className="text-center">
										<Router>
										<Link to="#" className="light-gray">{this.props.registerText}</Link>
										</Router>
									</Col>
								</Row>
								</Col>
							</Row>
							</Panel.Body>
						</Panel>
					</Grid>
	      </div>
	    );
	  }
	}

	Login.propTypes = {
		loginText: PropTypes.string.isRequired,
		registerText: PropTypes.string.isRequired,
		helpText: PropTypes.string.isRequired,
	}

	export default Login;
