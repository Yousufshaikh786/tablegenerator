function generatetable(){
    var getdata = document.getElementById("number").value;
    var putdata = document.getElementById("display");
        for (let  i= 1 ;  i<=10 ; i++) {
                putdata.innerHTML+=getdata+" x"+" "+i+" ="+getdata*i+"<br>";
            
        }
}