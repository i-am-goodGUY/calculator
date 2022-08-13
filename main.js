window.addEventListener("keydown",my_keydown);
var x = 0;

function my_keydown(e){
    var key = e.keyCode;
    console.log(key);

    if(key == '37'){
        document.getElementById("keyl").innerHTML="Left";
    }else if(key == '38'){
        document.getElementById("keyl").innerHTML="Up";
    }else if(key == '39'){
        document.getElementById("keyl").innerHTML="Right";
    }else if(key == '40'){
        document.getElementById("keyl").innerHTML="Down";
    }else if(key == '65'){
        document.getElementById("keyl").innerHTML="a";
    }else if(key == '66'){
        document.getElementById("keyl").innerHTML="b";
    }else if(key == '67'){
        document.getElementById("keyl").innerHTML="c";
    }else if(key == '68'){
        document.getElementById("keyl").innerHTML="d";
    }else if(key == '69'){
        document.getElementById("keyl").innerHTML="e";
    }else if(key == '70'){
        document.getElementById("keyl").innerHTML="f";
    }else if(key == '71'){
        document.getElementById("keyl").innerHTML="g";
    }else if(key == '72'){
        document.getElementById("keyl").innerHTML="h";
    }else if(key == '73'){
        document.getElementById("keyl").innerHTML="i";
    }else if(key == '74'){
        document.getElementById("keyl").innerHTML="j";
    }else if(key == '75'){
        document.getElementById("keyl").innerHTML="k";
    }else if(key == '76'){
        document.getElementById("keyl").innerHTML="l";
    }else if(key == '77'){
        document.getElementById("keyl").innerHTML="m";
    }else if(key == '78'){
        document.getElementById("keyl").innerHTML="n";
    }else if(key == '79'){
        document.getElementById("keyl").innerHTML="o";
    }else if(key == '80'){
        document.getElementById("keyl").innerHTML="p";
    }else if(key == '81'){
        document.getElementById("keyl").innerHTML="q";
    }else if(key == '82'){
        document.getElementById("keyl").innerHTML="r";
    }else if(key == '83'){
        document.getElementById("keyl").innerHTML="s";
    }else if(key == '84'){
        document.getElementById("keyl").innerHTML="t";
    }else if(key == '85'){
        document.getElementById("keyl").innerHTML="u";
    }else if(key == '86'){
        document.getElementById("keyl").innerHTML="v";
    }else if(key == '87'){
        document.getElementById("keyl").innerHTML="w";
    }else if(key == '88'){
        document.getElementById("keyl").innerHTML="x";
    }else if(key == '89'){
        document.getElementById("keyl").innerHTML="y";
    }else if(key == '90'){
        document.getElementById("keyl").innerHTML="z";
    }else if(key == '17'){
        document.getElementById("keyl").innerHTML="ctrl";
    }else if(key == '18'){
        document.getElementById("keyl").innerHTML="alt";
    }else if(key == '13'){
        document.getElementById("keyl").innerHTML="enter";
    }else if(key == '48'){
        document.getElementById("keyl").innerHTML="0";
    }else if(key == '49'){
        document.getElementById("keyl").innerHTML="1";
    }else if(key == '50'){
        document.getElementById("keyl").innerHTML="2";
    }else if(key == '51'){
        document.getElementById("keyl").innerHTML="3";
    }else if(key == '52'){
        document.getElementById("keyl").innerHTML="4";
    }else if(key == '53'){
        document.getElementById("keyl").innerHTML="5";
    }else if(key == '54'){
        document.getElementById("keyl").innerHTML="6";
    }else if(key == '55'){
        document.getElementById("keyl").innerHTML="7";
    }else if(key == '56'){
        document.getElementById("keyl").innerHTML="8";
    }else if(key == '57'){
        document.getElementById("keyl").innerHTML="9";
    }
}