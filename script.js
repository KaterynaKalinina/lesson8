const magicBook = {
    boomSpell: 'Asda masasda',
    soupSpell: 'Dase feads',
};

const kettle = {
    material: 'metal',
    result: null,
    ingridients: {
        ingridient1: 'nails',
        ingridient2: 'bat heads',
    },
    shuffle() {
        console.log('Shuffling...');
    },
    addIng(key, value) {
        console.log('Adding...', key, value);
        this.ingridients[name] = value;
        this.shuffle();
    },
};

kettle.spellTheCast = function() {
    console.log(this.material);
    this.shuffle();
};

kettle.spellTheCast();
kettle.addIng('ing3', 'hand');
console.log(kettle);

function pick(obj, key) {
    return obj[key];
}

console.log(pick(kettle, 'material'));

kettle.addIng('ing4', 'bananas');


magicBook.spellTheCast = kettle.spellTheCast;

const kettle = {
    material: 'abc',
    spellTheCast() {
        const self = this;
        const fnc = function() {
            return self.material;
        };
            alert(fnc());
        
    },
}

kettle.spellTheCast();