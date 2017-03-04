import React from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const MutationRuleDialog = ({poppedUp, OnClose, mutationRuleAndCaseId}) => {

	if (!mutationRuleAndCaseId) {
		return null;
	}

	const handleClose = (e) => {
		e.stopPropagation();
		e.preventDefault();
		OnClose();
	};

	let mutationRule = mutationRuleAndCaseId.mutationRule;
	let caseId = mutationRuleAndCaseId.caseId;

	let concernedRuleStyle = {
		backgroundColor: "rgb(213, 217, 224)"
	};

	let cases = (!mutationRule.cases) ? '' : mutationRule.cases.map((oneCase, index) => {
		let style = (oneCase.caseId === caseId) ? concernedRuleStyle : {};
		return <li key={index} style={style}>{oneCase.caseDescription}</li>
	});

	let buttonStyle = {float: "right", height: "inherit"};

	let labelStyle = {color: "rgb(66, 134, 244)"};

	let actions = [
		<FlatButton label="fermer" primary={true} onTouchTap={handleClose}/>
	];

	return (
		<Dialog
			title={mutationRule.mutationName}
			modal={true}
			open={poppedUp}
			autoScrollBodyContent={true}
			labelStyle={labelStyle}
			style={buttonStyle}
			actions={actions}
		>
			<ul>
				{cases}
			</ul>
		</Dialog>
	)
};

export default MutationRuleDialog;
