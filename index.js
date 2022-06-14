var container = document.getElementById('drinks')
async function get_data() {
    var response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    var data = await response.json();
    var drink_list = data.drinks;

    for(let i=0; i<drink_list.length; i++) {
        var div = document.createElement('div');
        div.className = 'item'

        

        var img = document.createElement('img');
        img.setAttribute('src',drink_list[i].strDrinkThumb);
        img.setAttribute('alt','cocktail');
        img.className ='image'

        var title = document.createElement('h3')
        title.innerHTML = drink_list[i].strDrink;

        var instruction = document.createElement('p');
        instruction.innerHTML = drink_list[i].strInstructions;

        
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(instruction);
        container.appendChild(div);
    }
}

get_data()



// Read more on the following:
// promoise
// async await
