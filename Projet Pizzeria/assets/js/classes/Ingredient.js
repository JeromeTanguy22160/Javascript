class Ingredient {
    
    #name;
    #file;
    
    constructor(name, file) {
        this.#name = name;
        this.#file = file;
    }
    
    get name() {
        return this.#name;
    }
    
    set name(name) {
        this.#name = name;
    }
    
    get file() {
        return this.#file;
    }
    
    set file(file) {
        this.#file = file;
    }
}

export { Ingredient };