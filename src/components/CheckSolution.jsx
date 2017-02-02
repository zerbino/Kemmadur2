/**
 * Created by rmartignoni on 10/02/2017.
 */
import { checkSolution } from "../actions/actions";
import { connect } from "react-redux";
import React from "react";
import FlatButton from 'material-ui/FlatButton';

let CheckSolution = ({onCheckSolution, disabled}) => {

	let checkSolution = (e) => {
		e.preventDefault();
		onCheckSolution();
	};

	let buttonStyle = {float: "right", height: "inherit"};

	let labelStyle = {color: disabled ? "grey" : "rgb(66, 134, 244)"};

	return (
		<FlatButton
			style={buttonStyle}
			onClick={ (e)=>{checkSolution(e)} }
			disabled={disabled}
			labelStyle={labelStyle}
			label="Voir la solution"
			primary={true}
		/>
	)
};

export default CheckSolution;
