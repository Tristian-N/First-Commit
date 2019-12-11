


function recursion(){
let p1 = prompt("Enterside #1:");
let p2 = prompt("Enterside #2:");

    function myFunction(p1, p2){
    return Math.sqrt(Math.pow(p1, 2)+Math.pow(p2, 2));
    }
    
        
    alert("The Hypotenuse is: " +myFunction(p1, p2));

}