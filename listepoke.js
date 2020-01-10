var numero = 0;

var clique= document.getElementById("bouton");
clique.addEventListener("click", function() {liste(0)});



function liste(numDep){
    fetch('https://pokeapi.co/api/v2/pokemon/?offset='+numDep+'&limit=20')
    .then
    (
        function(response) 
            {
                return response.json();        
            }    
    )  
    .then (
        function(rep)
            {
                for(i=0;i<20;i++){ 
                var liste=document.getElementById("liste");
                var element = document.createElement("p");
                element.innerHTML=rep.results[i].name;
                var bouton = document.createElement("button");
                bouton.setAttribute("onclick","affDetails('"+(rep.results[i].name)+"')");
                bouton.innerText="Details";
                element.appendChild(bouton);
                // create bouton via create element
                //bouton.setAttribute("id","3") --> <bouton id="3"></bouton>
                //bouton.appendchild(p)
                liste.appendChild(element); //MODIFIER POUR QUE A LA CREATION de l enfant ON AIT aussi un bouton avec un onclick qui appel la fonction affDetails
                

                
                
              
            }
            }
    )
}



function affDetails (nb) // Fonction qui se déclanche quand on clique sur le bouton details.
{
    
    fetch("https://pokeapi.co/api/v2/pokemon/"+nb) // il faut récup les donnes de cette requete, et les afficher dams un nouvel enfant dans la colonne de droite
    .then 
    
        (
            function (reponse)
            {
                return reponse.json();
            }
        )

    .then 
        (
            function (rep)
            {
                {
                    var details = document.getElementById("details");
                    details.innerHTML="";
                    var element = document.createElement("p")
                    element.innerHTML=rep.name+" "+rep.height;
                    var image = document.createElement("img");
                    image.setAttribute("src",rep.sprites.front_default);
                    element.appendChild(image);
                    details.appendChild(element);
                }
            }
        )

}


function suivant() 
{
numero = numero+20;
liste (numero);
}
 var bsuivant=document.getElementById("suivant");
bsuivant.addEventListener("click", function(){suivant()});