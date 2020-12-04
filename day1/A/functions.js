// A $( document ).ready() block.
let yearActual = 2020;

$( document ).ready(function() {
    console.log( "ready!" );
	
	
	
	$("#btnprocesar").on( "click", function() {
		var texto = $("#finputs").val();
		console.log(texto);
		var result = readInput(texto);
		console.log(result);
		var multiplicacion = calculateSum(result);
		
		
		$("#result").html("El resultado es: " + multiplicacion);
				
	});

});


function readInput(str){
	var html = [];
	var lines = str.split(" ");
	$.each(lines, function(i, val){
		html.push(parseInt(val));
    });	
	return html;
}


function calculateSum(lines){
	var num1;
	var num2;
	var result = 0;
	
	
	$.each(lines, function(i, val1){
		num1 = val1;
		
		$.each(lines, function(j, val2){
			//html.push(parseInt(val));
			num2 = val2;
			if((num1 + num2) == yearActual){
				result = num1 * num2;
			}
		});//end inner foreach
		
    });//end foreach
	
	return result;	
}