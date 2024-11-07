let w;
let x;
let y;
let z;

image_array = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg'
]


document.getElementById("rollButton").onclick = function(){

    w= Math.floor(Math.random() * 4);
    x= Math.floor(Math.random() * 4);
    y= Math.floor(Math.random() * 4);
    z= Math.floor(Math.random() * 4);

    selected_imagew = image_array[w]
    selected_imagex = image_array[x]
    selected_imagey = image_array[y]
    selected_imagez = image_array[z]


    document.getElementById("oc1").src=`/pictures/${selected_imagew}`
    document.getElementById("oc2").src=`/pictures/${selected_imagex}`
    document.getElementById("oc3").src=`/pictures/${selected_imagey}`
    document.getElementById("oc4").src=`/pictures/${selected_imagez}`
}
