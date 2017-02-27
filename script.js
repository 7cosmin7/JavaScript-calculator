
function show1(){
	var x = document.getElementById("screen").value;
	var y= x+"1";
	document.getElementById("screen").value=y;
}
function show2(){
	var x = document.getElementById("screen").value;
	var y = x +"2";
	document.getElementById("screen").value=y;
}
function show3(){
	var x = document.getElementById("screen").value;
	var y = x + "3";
	document.getElementById("screen").value=y;
}
function show4(){
	var x = document.getElementById("screen").value;
	var y = x + "4";
	document.getElementById("screen").value=y;
}
function show5(){
	var x = document.getElementById("screen").value;
	var y = x + 5;
	document.getElementById("screen").value=y;
}
function show6(){
	var x = document.getElementById("screen").value;
	var y = x + 6;
	document.getElementById("screen").value=y;
}
function show7(){
	var x = document.getElementById("screen").value;
	var y = x + 7;
	document.getElementById("screen").value=y;
}
function show8(){
	var x = document.getElementById("screen").value;
	var y = x + 8;
	document.getElementById("screen").value=y;
}
function show9(){
	var x = document.getElementById("screen").value;
	var y = x + 9;
	document.getElementById("screen").value=y;
}
function show0(){
	var x = document.getElementById("screen").value;
	var y = x + 0;
	document.getElementById("screen").value=y;
}
function show00(){
	var x = document.getElementById("screen").value;
	var y = x + "00";
	document.getElementById("screen").value=y;
}
function show000(){
	var x = document.getElementById("screen").value;
	var y = x + "000";
	document.getElementById("screen").value=y;
}
function showLeftBracket(){
	var x = document.getElementById("screen").value;
	var y = x + "(";
	document.getElementById("screen").value=y;
}
function showRightBracket(){
	var x = document.getElementById("screen").value;
	var y = x + ")";
	document.getElementById("screen").value=y;
}

function showDivide(){
	var x = document.getElementById("screen").value;
	var y = x + "/";
	document.getElementById("screen").value=y;
}
function showMultiple(){
	var x = document.getElementById("screen").value;
	var y = x + "*";
	document.getElementById("screen").value=y;
}
function showMinus(){
	var x = document.getElementById("screen").value;
	var y = x + "-";
	document.getElementById("screen").value=y;
}
function showPlus(){
	var x = document.getElementById("screen").value;
	var y = x + "+";
	document.getElementById("screen").value=y;
}

function showEqual(){
	var x=document.getElementById("screen").value;
	var y = eval(x);
	document.getElementById("screen").value=y;
}
function nothing(){
	document.getElementById("myform").reset();
}

function showRootSqr(){
	var x = document.getElementById("screen").value;
	var y = Math.sqrt(x);
	document.getElementById("screen").value=y;
}
function showSquare(){
	var x = document.getElementById("screen").value;
	var y = x * x;
	document.getElementById("screen").value=y;
}

function showPlusMn(){
	var x = document.getElementById("screen").value;
	var y=x * -1;
	document.getElementById("screen").value=y;		
	}

function undo(){
	var x = document.getElementById("screen").value;
	var y= x.slice(0, x.length-1);
	document.getElementById("screen").value=y;
	}

function showDot(){
	var numara=0;
	var click=document.getElementById('btn-dot');
	click.onclick= function(){
		
		numara++;
		if(numara<=1){
	var a=document.getElementById('screen').value;
	var b=a+'.';
	document.getElementById('screen').value=b;}
	};
	

};

