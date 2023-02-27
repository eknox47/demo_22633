import { cours } from "./data.js";
export default class Inscription{
    /**
     * nbCours max
     * Valeur initiale de la propriété
     */
    nbCours = 4;
    /**
     * Liste de cours choisis par l'utilisateur
     */
    coursChoisi = [];

    /**
     * Constructeur
     * @param {DOMElement} elementParent  Point d'insertion du DOM
     
     */
    constructor(elementParent){
        this.elementParent = elementParent;
        //this.validation();
    }
    /**
     * permet de lancer la validation du composant. Appelé par App
     * @returns boolean
     */
    validation(){
        let valide = false;

        console.log("validation")
        
        let options = document.querySelectorAll("select option:checked"); // Récupère tous les éléments choisis
        //console.log(this)
        this.coursChoisi = [];  // Vide la liste
        
        options.forEach((choix)=>{
        //    console.log(this)
            this.coursChoisi.push(choix.value);     // Ajoute la valeur pour chaque cours choisi
        });
        // Vérifie que le nombre est valide
        if(this.nbCours == options.length){
            valide = true;
        }
        //console.log(this.coursChoisi)
        return valide;
    }

    /**
     * Valeur à retourner
     * @todo - Finaliser cette méthode
     * @returns 
     */
    getData(){
        console.log(this.coursChoisi)
        return {cours : this.coursChoisi};
    }

    /**
     * Méthode appelée par App pour passer des informations au composant
     * @param {object} donnees 
     */
    setData(donnees){
        this.nbCours = 4;
        if(donnees.nbCours){
            this.nbCours = donnees.nbCours;
        }
        
    }
    
    afficher(){
        console.log(this.coursChoisi);
        
        //let choixCours = cours.map(unCours=>`<option ${(this.coursChoisi.includes(unCours.sigle) ? "selected" : "")} value="${unCours.sigle}">${unCours.nom}</option>`).join("");
        
        let choixCours = cours.map((unCours)=>{
            console.log(this)
            let select = "";
            if(this.coursChoisi.includes(unCours.sigle)){
                select = "selected";
            }
            return `<option ${select} value="${unCours.sigle}">${unCours.nom}</option>`;
        }).join("");


        let chaineHTML = `<fieldset class="inscription">
        <legend>Inscriptions</legend>
        <p>Vous pouvez choisir ${this.nbCours} cours</p>
        <p><label for="nbCours">Cours:</label>
            <div class="selectCours">
            <select multiple>
               ${choixCours}
            </select>
            </div>
        </p>
    </fieldset>`;
        
        this.elementParent.innerHTML = chaineHTML;
        

    }
}