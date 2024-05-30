/* bugününü tari */



document.getElementById("trhm").innerHTML=new Date();





function gitt(){
    document.getElementById("fyt").style.display="block"
   
   
}

function golgg(){
var ürün=document.getElementById("kgürn").value;
 

    const googleutl= `https://www.google.com/search?q=${encodeURIComponent(ürün)}`; 

    window.location.href=googleutl;


}
 /* AMAZON */
function amz(){
    const ürüna= document.getElementById("kgürn").value;
    if(ürüna){
        const amzurl= `https://www.amazon.com/s?k=${encodeURIComponent(ürüna)}`; // Amazon arama URL'si   `https://www.amazon.com/search?q=${encodeURIComponent(ürüna)}`; 
        window.location.href=amzurl ;
     

    }else{
        console.log("tekrar deneyiniz  bu steye uğrayarak ");
    }



}


/* trndtol */
function trenyl(){

    const ryl=document.getElementById("kgürn").value;
    if(ryl){
        const ürüna = `https://www.trendyol.com/sr?q=${encodeURIComponent(ryl)}`;
        window.location.href=ürüna;
    }else{
        console.log("tekrar deneyiniz  bu steye uğrayarak ");

    }


}


/* n11 */

function gelonbr(){
    const bıron=document.getElementById("kgürn").value;
    if(bıron){
        const ürünnn = `https://www.n11.com/arama?q=${encodeURIComponent(bıron)}`;
        window.location.href=ürünnn

    }else{
        console.log("tekrar deneyiniz  bu steye uğrayarak ");

    }
}

function bbalı(){
 const ıla=document.getElementById("kgürn").value;
 if(ıla){
    const nırr =`https://www.alibaba.com/trade/search?SearchText=${encodeURIComponent(ıla)}`
    window.location.href=nırr
 }else{
    console.log("tekrar deneyiniz  bu steye uğrayarak ");
 }

}