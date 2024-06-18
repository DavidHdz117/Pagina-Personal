var val1,val2,res, h3

h3=document.getElementById("res")

function sumar(){
    val1= parseFloat(document.getElementById("v1").value)
    val2= parseFloat(document.getElementById("v2").value)

    if(isNaN(val1) || isNaN(val2))
    {
        if(isNaN(val1)){
            h3.innerHTML="N/V caja 1"
            document.getElementById("v1").focus()
            return
        }else{
            h3.innerHTML="N/V caja 2"
            document.getElementById("v2").focus()
            return
        }
    }
    res=val1+val2
    h3.innerHTML=res
}

function restar(){
    val1= parseFloat(document.getElementById("v1").value)
    val2= parseFloat(document.getElementById("v2").value)

    if(isNaN(val1) || isNaN(val2))
    {
        if(isNaN(val1)){
            h3.innerHTML="N/V caja 1"
            document.getElementById("v1").focus()
            return
        }else{
            h3.innerHTML="N/V caja 2"
            document.getElementById("v2").focus()
            return
        }
    }
    res=val1-val2
    h3.innerHTML=res
}

function multiplicar(){
    val1= parseFloat(document.getElementById("v1").value)
    val2= parseFloat(document.getElementById("v2").value)

    if(isNaN(val1) || isNaN(val2))
    {
        if(isNaN(val1)){
            h3.innerHTML="N/V caja 1"
            document.getElementById("v1").focus()
            return
        }else{
            h3.innerHTML="N/V caja 2"
            document.getElementById("v2").focus()
            return
        }
    }
    res=val1*val2
    h3.innerHTML=res
}

function dividir(){
    val1= parseFloat(document.getElementById("v1").value)
    val2= parseFloat(document.getElementById("v2").value)

    if(isNaN(val1) || isNaN(val2))
    {
        if(isNaN(val1)){
            h3.innerHTML="N/V caja 1"
            document.getElementById("v1").focus()
            return
        }else{
            h3.innerHTML="N/V caja 2"
            document.getElementById("v2").focus()
            return
        }
    }
    res=val1/val2
    h3.innerHTML=res
}