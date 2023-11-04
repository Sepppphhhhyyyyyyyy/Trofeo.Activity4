function promt(){

    var a = prompt("Enter the 1st side of the triangle:");
    isNaN(a);
    

    var b = prompt("Enter the 2nd side of the triangle:");
    isNaN(b);
    

    var c = prompt("Enter the 3rd side of the triangle:");
    isNaN(c);
    
    determineTriangle(a,b,c);
}

function determineTriangle(a,b,c){
    if (a === b && b === c) { 
        window.alert("The triangle is EQUILATERAL");
    } else if (a === b || a === c || b === c) { 
        window.alert("The triangle is ISOSCELES");
    } else {
        window.alert("The triangle is SCALENE"); 
    }
}


