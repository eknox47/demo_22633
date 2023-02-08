const listeItem = [
    {
        id:1,
        item : "Mon item 1",
        barre : true,
    },
    {
        id:2,
        item : "Mon item 2",
        barre : false,
    },
    {
        id:3,
        item : "Mon item 3",
        barre : true,
    },
    {
        id:4,
        item : "Mon item 4",
        barre : false,
    },
    {
        id:5,
        item : "Mon item 5",
        barre : false,
    },
    {
        id:6,
        item : "Mon item 6",
        barre : false,
    }
];  


window.addEventListener("load", function(){
   let domListeItem = document.querySelector(".liste-item");
   let chaineHTML = "";
   let mesItems = document.querySelector(".liste-item");
    mesItems.addEventListener("click", function(e){
        let cible = e.target;
        console.log(cible)
        if(cible.type=="checkbox"){
            if(cible.parentElement.classList.contains("barre"))
            {
                cible.parentElement.classList.remove("barre");
            }
            else{
                cible.parentElement.classList.add("barre");
            }
        }
    })



   for(const item of listeItem){
    let check = (item.barre ? "checked" : "" );
    let barre = (item.barre ? "barre" : "" );

    chaineHTML += `<div class="item ${barre}" data-id="${item.id}">
                        <input type="checkbox" ${check}>
                        <span class="nom">${item.item}</span>
                        <span class="btn fleche-haut"></span>
                        <span class="btn fleche-bas"></span>
                    </div>`;
   }
   domListeItem.innerHTML = chaineHTML;

   
    console.log(mesItems)
   /*let tableauItem = listeItem.map(function(item){
    console.log(item)
    let chaineHTML = `<div class="item barre" data-id="${item.id}">
                        <input type="checkbox" checked>
                        <span class="nom">${item.item}</span>
                        <span class="btn fleche-haut"></span>
                        <span class="btn fleche-bas"></span>
                    </div>`;
    return chaineHTML
   })
   console.log(tableauItem.join(""))
  
   domListeItem.innerHTML = tableauItem.join("");*/



});