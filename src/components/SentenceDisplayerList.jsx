/**
 * Created by rmartignoni on 10/02/2017.
 */
import React from "react";
import SentenceDisplayerContainer from "../containers/SentenceDisplayerContainer";

const SentenceDisplayerList = ({exerciseList}) => {
	return (
		<div>
			{
				exerciseList.map((exercise, index) => {
					return <SentenceDisplayerContainer key={exercise.id} exerciseList={exerciseList} exerciseIndex={index}/>
				})
			}
		</div>
	)
};

export default SentenceDisplayerList;
