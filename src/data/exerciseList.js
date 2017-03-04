/**
 * Created by rmartignoni on 09/02/2017.
 */
const EXERCISE_LIST = [
	{
		"id": 0,
		"splittedSentence": [
			"Ar ",
			"s",
			"oudarded zo gwisket e ruz hag ar ",
			"m",
			"eleien zo gwisket e du"
		],
		"mutations": [
			{
				"mutationIndex": 1,
				"possibilities": [
					"s",
					"z",
					""
				],
				"solutionIndex": 0,
				"mutationLink": {
					"mutationId": 2
				}
			},
			{
				"mutationIndex": 3,
				"possibilities": [
					"m",
					"v",
					"b"
				],
				"solutionIndex": 1,
				"mutationLink": {
					"mutationId": 0,
					"caseId": 0
				}
			}
		]
	},
	{
		"id": 1,
		"splittedSentence": [
			"Petra eo da ", "m", "icher"
		],
		"mutations": [
			{
				"mutationIndex": 1,
				"possibilities": [
					"m",
					"v",
					"b"
				],
				"solutionIndex": 1,
				"mutationLink": {
					"mutationId": 0,
					"caseId": 2
				}
			}
		]
	},
	{
		"id": 2,
		"splittedSentence": [
			"Setu ma ",
			"t",
			"ad Richard"
		],
		"mutations": [
			{
				"mutationIndex": 1,
				"possibilities": [
					"t",
					"d",
					"z"
				],
				"solutionIndex": 2,
				"mutationLink": {
					"mutationId": 1,
					"caseId": 0
				}
			}
		]
	},
	{
		"id": 3,
		"splittedSentence": [
			"Paotred ", "t", "rist"
		],
		"mutations": [
			{
				mutationIndex: 1,
				possibilities: [
					"t", "d", "z"
				],
				"solutionIndex": 0,
				"mutationLink": {
					"mutationId": 0,
					"caseId": 4
				}
			}
		]
	}
];

export default EXERCISE_LIST;

