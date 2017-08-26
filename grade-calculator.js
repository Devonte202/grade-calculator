function calcGrade(h,x,y,z){

  var Grade = (0.10*h)+(0.25*x)+(0.25*y)+(0.40*z)
  return Grade ;
}
console.log("Calculus " + calcGrade(84.72,77,55,82).toFixed(4));
//New Class
function physGrade(h,x,y,z){

  var Grade = (0.10*h)+(0.20*x)+(0.20*y)+(0.50*z)
  return Grade ;
};
console.log("Physics " + physGrade(100,90,45,100).toFixed(4));
//New Class
function civGrade(m,p,f,t){

  var Grade = (0.30*m)+(0.10*p)+(0.40*f)+(0.20*t)
  return Grade ;
};
console.log("World Civ " + civGrade(80,80,70,84).toFixed(4));
