//Feet converter
function feetConverter(value){
    document.getElementById("outputMeters").innerHTML = value/3.2808;
    document.getElementById("outputInches").innerHTML = value*12;
    document.getElementById("outputCentimeters").innerHTML = value/0.032808;
    document.getElementById("outputYards").innerHTML = value*0.33333;
    document.getElementById("outputKilometers").innerHTML = value/3280.8;
    document.getElementById("outputMiles").innerHTML = value*0.00018939;

}

//Meters Converter
function meterConverter(mvalue){
    document.getElementById("mtof").innerHTML = mvalue*3.2808;
    document.getElementById("mtoi").innerHTML = mvalue*39.370;
    document.getElementById("mtoc").innerHTML = mvalue/0.01;
    document.getElementById("mtoy").innerHTML = mvalue*1.0936;
    document.getElementById("mtok").innerHTML = mvalue/1000;
    document.getElementById("mtom").innerHTML = mvalue*0.00062137;
}

//Inches Converter
function incheConverter(ivalue){
    document.getElementById("itof").innerHTML = ivalue*0.083333;
    document.getElementById("itom").innerHTML = ivalue/39.370
    document.getElementById("itoc").innerHTML = ivalue/0.39370;
    document.getElementById("itoy").innerHTML = ivalue*0.027778;
    document.getElementById("itok").innerHTML = ivalue/39370;
    document.getElementById("itomi").innerHTML = ivalue*0.000015783;
}

//Centimeter Converter
function centimeterConverter(cvalue){
    document.getElementById("ctof").innerHTML = cvalue*0.032808;
    document.getElementById("ctom").innerHTML = cvalue/100;
    document.getElementById("ctoi").innerHTML = cvalue*0.39370;
    document.getElementById("ctoy").innerHTML = cvalue*0.010936;
    document.getElementById("ctok").innerHTML = cvalue/100000;
    document.getElementById("ctomi").innerHTML = cvalue*0.0000062137;
}

//Yard Conventer
function yardConverter(yvalue){
    document.getElementById("ytof").innerHTML = yvalue*3;
    document.getElementById("ytom").innerHTML = yvalue/1.0936;
    document.getElementById("ytoi").innerHTML = yvalue*36;
    document.getElementById("ytoc").innerHTML = yvalue/0.010936;
    document.getElementById("ytok").innerHTML = yvalue/1093.6;
    document.getElementById("ytomi").innerHTML = yvalue*0.00056818;
}

//Kilometer Converter
function kilometerConverter(kvalue){
    document.getElementById("ktof").innerHTML = kvalue*3280.8;
    document.getElementById("ktom").innerHTML = kvalue*1000;
    document.getElementById("ktoi").innerHTML = kvalue*39370;
    document.getElementById("ktoc").innerHTML = kvalue*100000;
    document.getElementById("ktoy").innerHTML = kvalue*1093.6;
    document.getElementById("ktomi").innerHTML = kvalue*0.62137;
}

//Mile Converter
function mileConverter(mivalue){
    document.getElementById("mitof").innerHTML = mivalue*5280;
    document.getElementById("mitom").innerHTML = mivalue/0.00062137;
    document.getElementById("mitoi").innerHTML = mivalue*63360;
    document.getElementById("mitoc").innerHTML = mivalue/0.0000062137;
    document.getElementById("mitoy").innerHTML = mivalue*1760;
    document.getElementById("mitok").innerHTML = mivalue/0.62137;
}