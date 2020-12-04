// A $( document ).ready() block.
let yearActual = 2020;

$( document ).ready(function() {
    console.log( "ready!" );
	
	
	
	$("#btnprocesar").on( "click", function() {
		var texto = $("#finputs").val();
		var result = readInput(texto);
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
	var num3;
	var result = 0;
	
	$.each(lines, function(i, val1){
		num1 = val1;
		
		$.each(lines, function(j, val2){
			num2 = val2;
			
			$.each(lines, function(j, val3){
				num3 = val3;
				if((num1 + num2 + num3) == yearActual){
					result = num1 * num2 * num3;
					console.log("los numeros son: " + num1 + " - " + num2 + " - " + num3);
				}
			});//end inner foreach 3
			
			
		});//end inner foreach 2
		
    });//end foreach 1
	
	return result;	
}