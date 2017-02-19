function printSum255() {
    var sum = 0;
    for(i=0;i <= 255; i++){
        console.log("New Number: "+i,"Sum :"+(sum += i));
    }
}

printSum255();