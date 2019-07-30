var marks = {
	"option1" : "1",
	"option2" : "2",
	"option3" : "3",
};
var noofquestions = {
	"option1" : "5",
	"option2" : "4",
	"option3" : "4"
}

var quesSet1 = {
	"all" : [ {
		"no" : "1",
		"question" : "Who carry heridatary units?",
		"answers" : [ "genes", "chromosomes" ],
		"correct" : "genes"
	}, {
		"no" : "2",
		"question" : "A type of disease in mutation?",
		"answers" : [ "all anemia", "sick cell anemia" ],
		"correct" : "sick cell anemia"
	}, {
		"no" : "3",
		"question" : "A type of Radiation?",
		"answers" : [ "atomic explosion", "radio active radiation" ],
		"correct" : "radio active radiation"
	}, {
		"no" : "4",
		"question" : "chromosome similar in  size and shape?",
		"answers" : [ "Genetics", "Homogeneous Chromosome" ],
		"correct" : "Homogeneous Chromosome"
	}, {
		"no" : "5",
		"question" : "Alternative form of gene?",
		"answers" : [ "gene", "allele" ],
		"correct" : "allele"
	}

	]
};
var quesSet2 = {
	"all" : [
			{
				"no" : "1",
				"question" : "Which is pneutypic monohybrid ratio?",
				"answers" : [ "1:2:1", "1:2" ],
				"correct" : "1:2:1"
			},
			{
				"no" : "2",
				"question" : "If a pure tall plant is crossed with a pure dwarf plant,the offsprings?",
				"answers" : [ "3 tall 1 dwarf", "all dwarf" ],
				"correct" : "3 tall 1 dwarf"
			},
			{
				"no" : "3",
				"question" : "The 9:3:3:1 is due to ?",
				"answers" : [ "crossing over", "homogeneous pair" ],
				"correct" : "crossing over"
			},
			{
				"no" : "4",
				"question" : "A plant with green pods and smooth seeds with genotype Ggss?",
				"answers" : [ "Gg and Ss", "Gg and ss" ],
				"correct" : "Gg and Ss"
			}

	]
};
var quesSet3 = {
	"all" : [ {
		"no" : "1",
		"question" : "Study of law of inheritance of characters ?",
		"answers" : [ "Recessive genes", "Autosomes" ],
		"correct" : "Recessive genes"
	}, {
		"no" : "2",
		"question" : "Other Chromosome than sex Chromosome?",
		"answers" : [ "Autosome", "Sex chromosome" ],
		"correct" : "Autosome"
	}, {
		"no" : "3",
		"question" : "A gene that express only similar pair?",
		"answers" : [ "Homogeneous Chromosome", "allele" ],
		"correct" : "Homogeneous Chromosome"
	}, {
		"no" : "4",
		"question" : "Mendel choose which pea?",
		"answers" : [ "garden pea", "normal pea" ],
		"correct" : "garden pea"
	}

	]
};

function getData(data, opv) {

	if (opv == 'option1') {

		var sElement = quesSet1.all.find(function(item) {
			return item.no == data;
		});
	}
	if (opv == 'option2') {
		var sElement = quesSet2.all.find(function(item) {
			return item.no == data;
		});
	}
	if (opv == 'option3') {
		var sElement = quesSet3.all.find(function(item) {
			return item.no == data;
		});
	}
	return sElement;
}

function getquestions(data) {
	var a = data;
	return noofquestions[a];

}
function getMarks(data) {
	var a = data;
	return marks[a];

}
