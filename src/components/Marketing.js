import React, { Component } from 'react';
import username from '../svg/username.svg';
import password from '../svg/password.svg';
import { BrowserRouter as Router, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import graph from '../img/graph.png';

import {
	Grid,
	Row,
	Col,
 	FormGroup,
	InputGroup,
	FormControl,
 	Button,
 	Panel,
	Image, } from 'react-bootstrap';

class Marketing extends Component {
  render() {
    return (
      <div className="tablet-to-desktop">
				<Grid>
					<Row>

						<Col sm={4} md={4} className="login">
								<Panel>
									<Panel.Body>
										<Row>
											<Col sm={2} md={2}></Col>
											<Col sm={8} md={8}>
												<div className="logo text-center">
													<svg width="140" height="27" viewBox="0 0 140 27" xmlns="http://www.w3.org/2000/svg"><g fill="none"><text transform="translate(32 -4)" fill="#555" fontFamily="WhitneyHTF-Light, Whitney HTF" fontSize="30" fontWeight="300"><tspan x="0" y="28">Palaterra</tspan></text><path fill="#904BDE" d="M10.273 20.998l-9.409-15.845 18-.306z"/><path fill="#41C299" opacity=".832" d="M10 11l9 16h-18z"/></g></svg>
												</div>
											</Col>
											<Col sm={2} md={2}></Col>
										</Row>
									<Row>
										<Col sm={1} md={1}></Col>
										<Col sm={10} md={10}>
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
											<Row className="sign-in-row">
												<Col sm={2} md={2} lg={3}></Col>
												<Col sm={8} md={8} lg={6}>
													<Button className="pt-btn btn-purple">{this.props.loginText}</Button>
												</Col>
												<Col sm={2} md={2} lg={3}></Col>
											</Row>
										</form>
										<Row>
											<Col xs={12} className="text-center text-gray">
												<Router>
												<Link to="#" className="light-gray">{this.props.helpText}</Link>
												</Router>
											</Col>
										</Row>
										</Col>
										<Col sm={1} md={1}></Col>
									</Row>
									</Panel.Body>
								</Panel>
						</Col>

						<Col sm={1} md={2}></Col>

						<Col sm={6} md={6} className="marketing">
							<Grid fluid>
								<Row className="copy-row">
									<Col sm={12} md={12}>
										<h1 className="text-center">{this.props.marketingTextOne}<br />{this.props.marketingTextTwo}</h1>
									</Col>
								</Row>
								<Row className="graph-row">
									<Col sm={12} md={12}>
										<Image src={graph} responsive />
									</Col>
								</Row>
								<Row>
									<Col sm={4} md={4}></Col>
									<Col sm={4} md={4}>
										<Button className="pt-btn btn-green">{this.props.registerText}</Button>
									</Col>
									<Col sm={4} md={4}></Col>
								</Row>
							</Grid>
						</Col>

					</Row>
				</Grid>
      </div>
    );
  }
}

Marketing.propTypes = {
	loginText: PropTypes.string.isRequired,
	registerText: PropTypes.string.isRequired,
	helpText: PropTypes.string.isRequired,
	marketingTextOne: PropTypes.string.isRequired,
	marketingTextTwo: PropTypes.string.isRequired,
}

export default Marketing;
