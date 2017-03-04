/**
 * Created by rmartignoni on 02/03/2017.
 */
const MUTATION_RULES = [
	{
		mutationRuleId: 0,
		mutationName: "mutation douce",
		letterMutations: {
			"k": "g",
			"p": "b",
			"t": "d",
			"m": "v",
			"b": "v",
			"d": "z"
		},
		cases: [
			{
				caseId: 0,
				caseDescription: "Après l'article pour les mots masculins pluriels de personne"
			},
			{
				caseId: 1,
				caseDescription: "Après l'article pour les mots féminins singuliers"
			},
			{
				caseId: 2,
				caseDescription: "Après \"da\""
			},
			{
				caseId: 3,
				caseDescription: "Après \"re\""
			},
			{
				caseId: 4,
				caseDescription: "Pour un adjectif qualifiant un mot masculin ou féminin mutable après un article",
				relatedTo: [{mutationId: 0, caseId: 0}, {mutationId: 0, caseId: 1}]
			}
		]
	},
	{
		mutationRuleId: 1,
		mutationName: "mutation par spiration",
		letterMutations: {
			"k": "c'h",
			"p": "f",
			"t": "z"
		},
		cases: [
			{
				caseId: 0,
				caseDescription: "Après ma"
			}
		]
	},
	{
		mutationRuleId: 2,
		mutationName: "ce n'est pas une mutation"
	}
];

export default MUTATION_RULES;
