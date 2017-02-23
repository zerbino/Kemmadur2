/**
 * Created by rmartignoni on 10/02/2017.
 */
import React from "react";
import SentenceDisplayerContainer from "../containers/SentenceDisplayerContainer";

const SentenceDisplayerList = ({exerciseList}) => {
	return (
		<div>
			{
				exerciseList.map((exercise) => {
					return <SentenceDisplayerContainer key={exercise.id} exerciseId={exercise.id} exerciseList={exerciseList}/>
				})
			}
		</div>
	)
};

export default SentenceDisplayerList;
