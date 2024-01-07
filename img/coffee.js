document.getElementById('cart').addEventListener('click', () => {
    document.getElementById('cart_bx').classList.toggle('cart_bx_active');
});

let card_count = 0;
let price_add = 0;

function addcard(imageSrc, coffeeTitle, coffeePrice) {
    let card = document.createElement('div');
    card.className = 'crd';
    card.id = `card${card_count}`;

    card.innerHTML = `
        <div class="img_title">
            <img src="${imageSrc}" alt="">
            <div class="title_price">
                <h5>${coffeeTitle}</h5>
                <h6 title="${coffeePrice}">$${coffeePrice}</h6>
            </div>
        </div>
    `;

    // Create a remove button
    let removeBtn = document.createElement('i');
    removeBtn.className = 'bi bi-x';
    removeBtn.onclick = () => {
        removeCard(card.id, parseFloat(coffeePrice)); // Parse coffeePrice to a number
    };
    card.appendChild(removeBtn);

    // Increment card_count or do any other necessary actions
    card_count++;

    // Add the card to your container
    // For example, if you have a container with the class 'coffee_cards':
    document.getElementsByClassName('coffee_cards')[0].appendChild(card);

    // Update price_add
    price_add += parseFloat(coffeePrice);
    document.getElementById('total').innerText = '$' + price_add.toFixed(2); // Display total with 2 decimal places
}

function removeCard(cardId, coffeePrice) {
    let cardToRemove = document.getElementById(cardId);
    if (cardToRemove) {
        cardToRemove.remove();
        price_add -= coffeePrice;
        document.getElementById('total').innerText = '$' + price_add.toFixed(2); // Update total with 2 decimal places
    }
}

document.getElementById('add_button').addEventListener('click', () => {
    // You should provide the appropriate arguments for addcard when calling it
    addcard(
        document.getElementsByClassName('main_img')[0].src,
        document.getElementsByClassName('coffee_title')[0].innerText,
        document.getElementsByClassName('coffee_price')[0].title
    );
});



let coffee = [
    {
        name: "Simple Coffee",
        price: "9",
        img: "./coffee_cup.png"
    },
    {
        name: "Cappuccino",
        price: "16",
        img: "./cappuccino.png"
    },
    {
        name: "Cappuccino Royal",
        price: "18",
        img: "./coffee_cup3.png"
    },
];

let next_back_count = 0;
/*
let pagi_fun = () => void = () : 
*/
document.getElementById('next').addEventListener('click', () => {
    if (next_back_count >= coffee.length - 1) {
        next_back_count = 0;
    } else {
        next_back_count++;
    }

    document.getElementsByClassName('main_img')[0].src = coffee[next_back_count].img;
    document.getElementsByClassName('coffee_title')[0].innerText = coffee[next_back_count].name;
    document.getElementsByClassName('coffee_price')[0].innerText ='$'+coffee[next_back_count].price;
    document.getElementsByClassName('coffee_price')[0].title = coffee[next_back_count].price;
});













