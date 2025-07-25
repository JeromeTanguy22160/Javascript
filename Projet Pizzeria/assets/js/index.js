import {Ingredient} from "./classes/Ingredient.js";
import {Pizza} from "./classes/Pizza.js";


document.addEventListener("DOMContentLoaded", function() {
    let pizza = new Pizza();
    
    let availableIngredients = [];
    
    let bacon = new Ingredient("Bacon", "assets/img/bacon.png");
    let carrot = new Ingredient("Carotte", "assets/img/carrots.png");
    let cheese = new Ingredient("Fromage", "assets/img/cheese.png");
    let egg = new Ingredient("Oeuf", "assets/img/egg.png");
    let eggplant = new Ingredient("Aubergine", "assets/img/eggplant.png");
    let goatCheese = new Ingredient("Fromage de chèvre", "assets/img/goat-cheese.png");
    let honey = new Ingredient("Miel", "assets/img/honey.png");
    let mushroom = new Ingredient("Champignon", "assets/img/mushroom.png");
    let olive = new Ingredient("Olive", "assets/img/olive.png");
    let pepper = new Ingredient("Piment", "assets/img/pepper.png");
    let potato = new Ingredient("Pomme de terre", "assets/img/potato.png");
    let tomato = new Ingredient("Tomate", "assets/img/tomato.png");
    
    availableIngredients.push(bacon);
    availableIngredients.push(carrot);
    availableIngredients.push(cheese);
    availableIngredients.push(egg);
    availableIngredients.push(eggplant);
    availableIngredients.push(goatCheese);
    availableIngredients.push(honey);
    availableIngredients.push(mushroom);
    availableIngredients.push(olive);
    availableIngredients.push(pepper);
    availableIngredients.push(potato);
    availableIngredients.push(tomato);
    
    for(let i = 0; i < availableIngredients.length; i++)
    {
        let li = document.createElement("li");
        li.setAttribute("data-ingredient", availableIngredients[i].name);
        
        let article = document.createElement("article");
        
        let header = document.createElement("header");
        
        let figure = document.createElement("figure");
        
        let img = document.createElement("img");
        img.src = availableIngredients[i].file;
        img.alt = availableIngredients[i].name;
        
        let h3 = document.createElement("h3");
        let title = document.createTextNode(availableIngredients[i].name);
        h3.appendChild(title);
        
        // let title = availableIngredients[i].name;
        // h3.innerText = title;
        
        figure.appendChild(img);
        
        header.appendChild(figure);
        header.appendChild(h3);
        
        article.appendChild(header);
        
        li.appendChild(article);
        
        let ul = document.querySelector("section#stage ul");
        
        ul.appendChild(li);
        
    }
    
    
    let stageIngredients = document.querySelectorAll("section#stage ul li");
    
    for (let i = 0; i < stageIngredients.length; i++){
        // stageIngredients[i].onclick = function(){
            
        // };
        
        stageIngredients[i].addEventListener("click", function(event){
            let name = this.getAttribute("data-ingredient");
            let ingredient = null;
            
            for(let i = 0; i < availableIngredients.length; i++) 
            {
                if (availableIngredients[i].name === name) 
                {
                    ingredient = availableIngredients[i];
                }
            }
            
            if (this.firstChild.classList.contains("selected")) {
                // retire l'ingrédient de la pizza
                pizza.removeIngredient(ingredient);
            } else {
                // ajoute l'ingrédient dans la pizza
                pizza.addIngredient(ingredient);
            }
            
            pizza.display();
            
            this.firstChild.classList.toggle("selected");
        })
    }
    
    let orderButton = document.getElementById("order");
    orderButton.addEventListener("click", function() {
        pizza.cook();
    })
    
    // console.log(availableIngredients);
});