window.onload=function init(){
    generateQuiz("addition");
    
}
var nums1= new Array();
var nums2=new Array();

function generationQuiz(){
    var quizType =document.getElementById("quizType").value;
    switch (quizType) {
        case "addition":
            var operator =" + ";
            generateQuestions(quizType,operator,5);
            break;
        case "subtraction":
            var operator =" - ";
            generateQuestions(quizType,operator,5);
            break;
        case "multiplication":
            var operator =" * ";
            generateQuestions(quizType,operator,5);
            break;
        //case
        default:
            var operator =" + ";
            generateQuestions(quizType,operator,5);
            break;
            
        
    }
    
}

function generateQuestions( quizType, operateor, numOfQuestions) {
    //code
    for (var i =0; i<numOfQuestions;i++){
        document/getElementById.innerHTML=quizType.toUpperCase()+ " QUIZ";
        nums1
        nums2
        
    }
}