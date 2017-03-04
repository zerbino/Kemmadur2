/**
 * Created by rmartignoni on 10/02/2017.
 */
import React from "react";
import SentenceDisplayerContainer from "../containers/SentenceDisplayerContainer";
import CorrectionContainer from "../containers/CorrectionContainer";

const SentenceDisplayerList = ({exerciseList}) => {
	return (
		<div className="sentencesAndCorrections">
			{
				exerciseList.map((exercise) => {
					return (
						<div key={exercise.id} className="sentenceAndCorrection">
							<SentenceDisplayerContainer exerciseId={exercise.id} exerciseList={exerciseList}/>
							<CorrectionContainer exerciseId={exercise.id} exerciseList={exerciseList}/>
						</div>
					)
				})
			}
		</div>
	)
};

export default SentenceDisplayerList;
