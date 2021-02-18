var weights = [];
var inputs = [];
var produsInW = [];
var maximFunctiaIntrare;
var minimFunctiaIntrare;
var sumaFunctiaIntrare = 0;
var produsFunctiaIntrare = 1;
var funtiaActivareLiniara;
const e =2.71;

function functiiActivare()
{
    var functiaDeActivareSelect = document.getElementById("functiaDeActivareSelect").value;
    if(functiaDeActivareSelect == 1)
    {
        calculareFunctiaActivareLiniara();
    }
    else
    if(functiaDeActivareSelect == 2)
    {
        calculareFunctiaActivareSigmoidala();
    }
    else
    if(functiaDeActivareSelect == 3)
    {
        calculareFunctiaActivareTangentaHiperbolica();
    }
    else
    if(functiaDeActivareSelect == 4)
    {
        calculareFunctiaActivareTreapta();
    }
    else
    if(functiaDeActivareSelect == 5)
    {
        calculareFunctiaActivareSemn();
    }
}
function functiaDeIesire()
{
    var checkBox = document.getElementById("myonoffswitch");
    var valoareFunctiaDeActivare = document.getElementById("functiaDeActivareInput").value;
    var verificareCheckBoxActivare = document.getElementById("functiaDeActivareSelect").value;
    var valoareFunctiaDeIesire
    if(verificareCheckBoxActivare == 2 || verificareCheckBoxActivare == 4)
    {
        if(checkBox.checked == true)
        {
            if(valoareFunctiaDeActivare >= 0.5)
            {
                valoareFunctiaDeIesire = 1;
            }
            else
            {
                valoareFunctiaDeIesire = 0;
            }
        }
        else
        {
            valoareFunctiaDeIesire = valoareFunctiaDeActivare;
            //console.log(valoareFunctiaDeIesire);
        }
        document.getElementById("functiaDeIesireInput").value = valoareFunctiaDeIesire;
    }
    else
    if(verificareCheckBoxActivare == 1 || verificareCheckBoxActivare == 3)
    {
        if(checkBox.checked == true)
        {
            if(valoareFunctiaDeActivare >= 0)
            {
                valoareFunctiaDeIesire = 1;
            }
            else
            {
                valoareFunctiaDeIesire = -1;
            }
        }
        else
        {
            valoareFunctiaDeIesire = valoareFunctiaDeActivare;
            //console.log(valoareFunctiaDeIesire);
        }
        document.getElementById("functiaDeIesireInput").value = valoareFunctiaDeIesire;
    }
    else
        {
            valoareFunctiaDeIesire = valoareFunctiaDeActivare;
            //console.log(valoareFunctiaDeIesire);
        }
        document.getElementById("functiaDeIesireInput").value = valoareFunctiaDeIesire;
}

function calculareFunctiaActivareLiniara()
{
    var valoareFunctieIntrare = document.getElementById("functiaDeIntrareInput").value;
    var alfaInput = document.getElementById("functiaDeActivareAlfaInput").value;
    var functiaDeActivareInput ;
    if(valoareFunctieIntrare < (-1)/alfaInput)
    {
        functiaDeActivareInput = -1;
    }
    else
    if(valoareFunctieIntrare > 1/alfaInput)
    {
         functiaDeActivareInput = 1;
    }
    else
    {
        functiaDeActivareInput = valoareFunctieIntrare*alfaInput;
    }
    document.getElementById("functiaDeActivareInput").value = functiaDeActivareInput;
    functiaDeIesire();
    

}
function calculareFunctiaActivareSemn()
{
    var valoareFunctieIntrare = document.getElementById("functiaDeIntrareInput").value;
    var omegaInput = document.getElementById("functiaDeActivareOmegaInput").value;
    var functiaDeActivareInput;
    if(valoareFunctieIntrare >= omegaInput)
    {
        functiaDeActivareInput = 1;
    }
    else
    {
        functiaDeActivareInput = -1;
    }

    document.getElementById("functiaDeActivareInput").value = functiaDeActivareInput;
    functiaDeIesire();
}
function calculareFunctiaActivareSigmoidala()
{  
    var valoareFunctieIntrare = document.getElementById("functiaDeIntrareInput").value;
    var alfaInput = document.getElementById("functiaDeActivareAlfaInput").value;
    var omegaInput = document.getElementById("functiaDeActivareOmegaInput").value;
    var functiaDeActivareInput;
    functiaDeActivareInput = 1 / (1 + Math.pow(e, alfaInput * (-1) * (valoareFunctieIntrare - omegaInput)));
    document.getElementById("functiaDeActivareInput").value = functiaDeActivareInput.toFixed(8);
    functiaDeIesire();
}
function calculareFunctiaActivareTreapta()
{
    var valoareFunctieIntrare = document.getElementById("functiaDeIntrareInput").value;
    var omegaInput = document.getElementById("functiaDeActivareOmegaInput").value;
    var functiaDeActivareInput;
    if(valoareFunctieIntrare >= omegaInput)
    {
         functiaDeActivareInput = 1; 
    }
    else
    {
         functiaDeActivareInput = 0;
    }
    document.getElementById("functiaDeActivareInput").value = functiaDeActivareInput;
    functiaDeIesire();

}
function calculareFunctiaActivareTangentaHiperbolica()
{
    var valoareFunctieIntrare = document.getElementById("functiaDeIntrareInput").value;
    var omegaInput = document.getElementById("functiaDeActivareOmegaInput").value;
    var alfaInput = document.getElementById("functiaDeActivareAlfaInput").value;
    var functiaDeActivareInput;
    functiaDeActivareInput = ((Math.pow(e, alfaInput * (valoareFunctieIntrare - omegaInput)) 
    - Math.pow(e, -alfaInput * (valoareFunctieIntrare - omegaInput)))) / 
    ((Math.pow(e, alfaInput * (valoareFunctieIntrare - omegaInput)) +
     Math.pow(e, -alfaInput* (valoareFunctieIntrare-omegaInput))));
    document.getElementById("functiaDeActivareInput").value = functiaDeActivareInput.toFixed(8);
    functiaDeIesire();
}
function calculareMaxMin()
{

    minimFunctiaIntrare = Math.min.apply(null, produsInW.filter(function(n) { return !isNaN(n); }));
    maximFunctiaIntrare = Math.max.apply(null, produsInW.filter(function(n) { return !isNaN(n); }));
    
}
function calculareProdusSuma()
{
    sumaFunctiaIntrare = 0;
    produsFunctiaIntrare = 1;
   
    for(var i=1;i<produsInW.length;i++)
    {
        sumaFunctiaIntrare = sumaFunctiaIntrare + produsInW[i];
        produsFunctiaIntrare = produsFunctiaIntrare * produsInW[i];
        
    }
    

}
function afisareFunctiaIntrare()
{
    var elementSelectat = document.getElementById("functiaDeIntrareSelect").value;
    var omegaInput = document.getElementById("functiaDeActivareOmegaInput").value;
    if(elementSelectat == 1)
    {
        document.getElementById("functiaDeIntrareInput").value = maximFunctiaIntrare;
    }
    else
    if(elementSelectat == 2)
    {
        document.getElementById("functiaDeIntrareInput").value = minimFunctiaIntrare ;
    }
    else
    if(elementSelectat == 3)
    {
        document.getElementById("functiaDeIntrareInput").value =  sumaFunctiaIntrare;
    }
    else
    if(elementSelectat == 4)
    {
        document.getElementById("functiaDeIntrareInput").value = produsFunctiaIntrare ;
    }
}
function atasareValoareArrayWheight(x,y)
{
    weights[x] = y;
    produsInW[x] = weights[x]*inputs[x];
    
    
}
function atasareValoareArrayInput(x,y)
{
    inputs[x] = y;
    produsInW[x] = weights[x]*inputs[x];
    
}

function addItem(x){

  atasareValoareArrayInput(x,0);
  atasareValoareArrayWheight(x,0);
  

  var ul = document.getElementById("listaDinamica");
  var li = document.createElement("li");

  var paragrafIn = document.createElement("p");
  paragrafIn.setAttribute('class', 'textInputIntrare')
  paragrafIn.appendChild(document.createTextNode("Ini" + x +":"));

  var inputIn = document.createElement("input");
  inputIn.setAttribute('type', 'number');
  inputIn.setAttribute('class', 'inputNrIntrare');
  inputIn.step = 0.01;
  inputIn.defaultValue = 0.00;
  inputIn.oninput = function()
  {
    atasareValoareArrayInput(x,this.value);
    calculareMaxMin();
    calculareProdusSuma();
    afisareFunctiaIntrare();
    functiiActivare()
      
  };

  var paragrafW = document.createElement("p");
  paragrafW.setAttribute('class', 'textInputIntrare');
  paragrafW.appendChild(document.createTextNode("Wi" + x +':'));

  var inputW = document.createElement("input");
  inputW.setAttribute('type', 'number');
  inputW.setAttribute('class', 'inputNrIntrareW');
  inputW.step = 0.01;
  inputW.defaultValue = 0.00;
  inputW.min = 0;
  
  inputW.oninput = function(){  
      
      atasareValoareArrayWheight(x,this.value);
      calculareMaxMin();
      calculareProdusSuma();
      afisareFunctiaIntrare();
      functiiActivare()
      
    };

  li.setAttribute('id',x);
  
  li.appendChild(paragrafIn);
  li.appendChild(inputIn);
  li.appendChild(paragrafW);
  li.appendChild(inputW);
  
  ul.appendChild(li);
}
function removeItem(x){

    var ul = document.getElementById("listaDinamica");
    var item = document.getElementById(x);
    ul.removeChild(item);
}

window.onload = function() {
    
    var omegaInput = document.getElementById("functiaDeActivareOmegaInput");
    var alfaInput = document.getElementById("functiaDeActivareAlfaInput");
    var numarIntrari = document.getElementById("NumarIntrari");

    
    numarIntrari.defaultValue = "1";
    numarIntrari.Value  = "1";
    alfaInput.defaultValue = "0";
    omegaInput.defaultValue = "0";
   
    
    for(var i=1;i<=numarIntrari.Value;i++)
        {
            addItem(i);
        }
        

};
document.getElementById("functiaDeActivareOmegaInput").oninput  = function(){

    afisareFunctiaIntrare();
    functiiActivare();
    

}
document.getElementById("functiaDeActivareAlfaInput").oninput  = function(){

    functiiActivare();

}

document.getElementById("functiaDeIntrareSelect").onchange = function(){

    calculareMaxMin();
    calculareProdusSuma();
    afisareFunctiaIntrare();
    functiiActivare();

}
document.getElementById("functiaDeActivareSelect").onchange = function(){

    calculareMaxMin();
    calculareProdusSuma();
    afisareFunctiaIntrare();
    functiiActivare();

}
document.getElementById("myonoffswitch").onchange = function(){
    
    functiaDeIesire();
    console.log("merge");

}

document.getElementById("NumarIntrari").oninput = function() {

    number = $('ul#listaDinamica > li').length;
    var numarIntrari = document.getElementById("NumarIntrari");
    var numarIntrodus = numarIntrari.value;
    
    
    
    
    if(numarIntrodus > number)
    {
        
        for(var i=number+1;i<=numarIntrodus;i++)
        {
            addItem(i);
        }
    }
    
    if(numarIntrodus < number)
    {
        for(var j=number;j > numarIntrodus;j--)
        {
            removeItem(j);
        }
    }
    
    
};



