var ir = 50;
var i = 0;
var txt = "Kellemes Karácsonyi ünnepeket!";

function run1() {
	var context = document.getElementById('betuk').getContext('2d');
        context.font = '30px serif';
	
	setInterval(function() {
		if (i<txt.length){	
			if (i%2){	
			context.fillStyle = "red";
		}else{
			context.fillStyle = "black";
		}
			//alert(i);
		
			context.fillText(txt[i], ir, 50);
			ir+=20;i+=1;
		
 		}  
    	}, 150);
  
}