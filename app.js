var id = 1;

function Cat(name, picture,) {
    this.id = id
    this.name = name;
    this.picture = picture;
    this.status = ["Happy", "Bite-y"];
    this. petCount = 0

    id++
}

var catLady = {
    cats: []
}

var cat1 = new Cat("Mr Snibly", "http://cutecatsinhats.com/wp-content/uploads/2016/01/monocle-top-hat-cat.jpg");
var cat2 = new Cat("Sniffly", "https://s-media-cache-ak0.pinimg.com/originals/9a/a2/c6/9aa2c6c97ec9bf1851f63db2058e8053.jpg");
var cat3 = new Cat("Mittens", "http://orig14.deviantart.net/dd6f/f/2015/066/f/5/top_hat_cat_by_yelsa_girl-d3hdgrj.jpg");

catLady.cats.push(cat1, cat2, cat3);

console.log(catLady);

///highly discourage having free-floating stuff. put it in a function so that it is re-usable. 

function draw(cats) { //cats as parameter is just a word, it is really an array, word doesn't matter
//draw all my cats to the screen in a given html format
//This is called template screening
    var template = ''  
    for (var i = 0; i < cats.length; i++) {
        var element = cats[i]; //accesses the values you pushed into the catLady array under cats
        //check number of pets here, to determine status 
        var statusIndex = 0; 
        if(element.petCount > 5) {
            statusIndex = 1
        }
        template += `
           <div class="cat">
            <img src="${element.picture}" alt="cat">
            <h3> ${element.name}</h3>
            <p>Status: ${element.status[statusIndex]}</p>
            <p>Number of Pets: ${element.petCount} </p>
            <button type="button" onclick="pet(${element.id})">PET ME!</button>
           </div>
        `
        
    }
    document.getElementById("cats").innerHTML = template
}



function pet(catId) {
    debugger
    var catToPet = findCatById(catLady.cats, catId)  //find by id
    catToPet.petCount++  //increment petCount
    draw(catLady.cats)
}

function findCatById(catArray, catId) {
    for(var i = 0; i < catArray.length; i++) {
        var cat = catArray[i];
        if(catId === cat.id) {
            return cat
        }
    }
    console.error
}


draw(catLady.cats);