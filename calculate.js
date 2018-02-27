function equation() {
var a = document.getElementById('firstNumber').value;
var b = document.getElementById('secondNumber').value;
var c = document.getElementById('thirdNumber').value;
var discr = (b * b) - 4 * (a * c);
if(discr<0)
{
	alert("Roots are undefined");
}
else if(discr>=0)
{
var sqrDiscr = Math.sqrt(discr);
document.getElementById('answer').value = discr;
var y=(b/2)*(b/2);
	var x=b/2;
	var y=x*x;
	c=-c;
	c=c+y;
	var ans1=-x+Math.sqrt(c);
	var ans2=-x-Math.sqrt(c);
	document.getElementById('thirdAnswer').value="The roots are: "+ans1 +" and "+ ans2;
}
}
function cancel() {
document.getElementById('firstNumber').value = null;
document.getElementById('secondNumber').value = null;
document.getElementById('thirdNumber').value = null;
document.getElementById('answer').value = null;
document.getElementById('secondAnswer').value = null;
document.getElementById('thirdAnswer').value = null;
}