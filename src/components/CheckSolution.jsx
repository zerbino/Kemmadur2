/**
 * Created by rmartignoni on 10/02/2017.
 */
import { checkSolution } from "../actions/actions";
import { connect } from "react-redux";
import React from "react";

let CheckSolution = ({dispatch, disabled}) => {
	return (
		<button
			onClick={ ()=>{dispatch(checkSolution())} }
			disabled={disabled}
		>
			check solution
		</button>
	)
};

export default CheckSolution;
