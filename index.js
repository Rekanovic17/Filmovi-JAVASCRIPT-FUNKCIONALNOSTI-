let AllTotal=0;
function Uzmi(element){
    let meinEl=element.closest(".kolona");
    let image=meinEl.querySelector("img").src;
    let name=meinEl.querySelector("h1").innerText;
    let price=meinEl.querySelector(".price span").innerText;
    let quantity=meinEl.querySelector("input").value;    
   if (parseInt(quantity)>0) {
    let racun=document.querySelector(".racun");
    let total=document.querySelector(".Total");
    let Total=price*quantity;
    AllTotal+=Total
    total.innerText=`Total: ` +AllTotal;
    racun.innerHTML+= `
                        <div class="kartica">
                        <img src="${image}">
                        <h1>${name}</h1>
                        <h4>Total: €<span>${parseInt(price)*quantity}</span></h4>
                        <button onclick="Obrisi(this)" class="btn">Delete</button>
                    </div> `
    element.setAttribute("disabled","true");
    element.innerHTML="Finish";
    element.style.backgroundColor="black";
}else{
    alert("Odaberi kolicinu");
   }
};
function Obrisi(dugme){
    let kartica=dugme.closest(".kartica");
    let naziv=kartica.querySelector("h1").innerText;
    let Naslov=document.querySelectorAll(".kolona");
    let total=kartica.querySelector("h4 span").innerText;
    let AllPrice=document.querySelector(".Total");
    
    Naslov.forEach(n => {
        let title=n.querySelector("h1").innerText;
        if(naziv===title){
           let input=n.querySelector("input").value=0;
         let btn=n.querySelector("button").removeAttribute("disabled","true");
           let name=n.querySelector("button").innerText="Buy";
           let color=n.querySelector("button").style.backgroundColor="Blue";
        }

    });
    AllTotal=AllTotal-parseInt(total);
    
    AllPrice.innerText=`Total: ` +AllTotal;
    kartica.remove();
}