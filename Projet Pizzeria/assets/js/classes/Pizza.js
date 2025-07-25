class Pizza {
    
    #ingredients;
    
    constructor() {
        this.#ingredients = [];
    }
    
    get ingredients(){
        return this.#ingredients;
    }
    
    addIngredient(ingredient) {
        this.#ingredients.push(ingredient);
    }
    
    removeIngredient(ingredient) {
        let list = [];
        
        for (let i = 0; i < this.#ingredients.length; i++) {
            if (this.#ingredients[i].name !== ingredient.name) {
                list.push(this.#ingredients[i]);
            }
        }
        
        this.#ingredients = list;
    }
    
    display() {
        let last = document.querySelector("main > aside > ul li:last-child");
        let ul = document.querySelector("main > aside > ul");
        ul.innerHTML = "";
        ul.appendChild(last);
        
        for (let i = 0; i < this.#ingredients.length; i++) {
            let li = document.createElement("li");
            li.setAttribute("data-ingredient", this.#ingredients[i].name);
        
            let article = document.createElement("article");
        
            let header = document.createElement("header");
        
            let figure = document.createElement("figure");
        
            let img = document.createElement("img");
            img.src = this.#ingredients[i].file;
            img.alt = this.#ingredients[i].name;
        
            let h3 = document.createElement("h3");
            let title = document.createTextNode(this.#ingredients[i].name);
            h3.appendChild(title);
        
            figure.appendChild(img);
    
            header.appendChild(figure);
            header.appendChild(h3);
        
            article.appendChild(header);
            
            li.appendChild(article);
            
            ul.insertBefore(li, last);
        }
    }
    
    cooked() {
        let section = document.querySelector("main aside section");
        section.innerHTML = "";
        
        let h3 = document.createElement("h3");
        h3.classList.add("sr-only");
        let title = document.createTextNode("Statut de la commande");
        h3.appendChild(title);
        
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        img.src = "assets/img/pizza.png";
        img.alt = "Pizza";
        
        figure.appendChild(img);
        
        let h4 = document.createElement("h4");
        title = document.createTextNode("Pizza prête !");
        h4.appendChild(title);
        
        section.appendChild(h3);
        section.appendChild(figure);
        section.appendChild(h4);
        
        setTimeout(function() {
            section.innerHTML = "";
        }, 5000);
    }
    
    cook() {
        let time = this.#ingredients.length * 1000;
        let articlesSelected = document.querySelectorAll("section#stage ul li article.selected");
        
        for (let i = 0; i < articlesSelected.length; i++) {
            articlesSelected[i].classList.remove('selected');
        }
        
        this.#ingredients = [];
        this.display();
        
        let that = this;
        
        setTimeout(function(){
           that.cooked();
        }, time);
        
    }
}

export { Pizza };