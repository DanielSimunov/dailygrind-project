const hotDrinksMenu = [
    {
        title: "Coffee",
        options: "Cappucino, Flat White, Latte, Mocha, Chai Latte, Long Black",
        priceSmall: 4.00,
        priceMedium: 4.60,
        priceLarge: 5.50,
    },
    {
        title: "Hot Chocolate",
        options: "",
        priceSmall: 3.00,
        priceMedium: 3.60,
        priceLarge: 4.50,
    }, 
    {
        title: "Chai",
        options: "",
        priceSmall: 3.50,
        priceMedium: 4.50,
        priceLarge: 4.90,
    },
    {
        title: "Green Tea",
        options: "",
        priceSmall: 3.70,
        priceMedium: 4.70,
        priceLarge: 5.20,
    }
];

const coldDrinksMenu = [
    {
        title: "Fresh Juice",
        options: "Orange, Apple, Berry Juice, Mix",
        price: 4.00,
    },
    {
        title: "Milkshake",
        options: "Chocolate, Vanilla, Caramel",
        price: 3.50,
    },
    {
        title: "Soft Drinks",
        options: "Coca Cola, Pepsi, Fanta, Solo, Mountain Dew",
        price: 2.50,
    }
];

const breakfastMenu = [
    {
        title: "Bacon and Eggs",
        info: "Eggs your way on toast served with bacon",
        price: 10.00,
    },
    {
        title: "Smashed Avo",
        info: "Avocado served on toast with cheese",
        price: 15.00,
    },
    {
        title: "Waffles",
        info: "Homemade waffles with fresh berries and vanilla ice cream",
        price: 16.00,
    },
    {
        title: "Big Breakfast",
        info: "Eggs your way with bacon, mushroom, sausage, hashbrown and toast",
        price: 19.00,
    },
    {
        title: "Pancakes",
        info: "3 medium sized pancakes served with whipped butter and syrup",
        price: 10.00,
    }
];

const lunchMenu = [
    {
        title: "Steak Sandwich",
        info: "Grilled steak with lettuce, tomato, caramelised onion, aoili on turkish bread. Served with fries",
        price: 16.00,
    },
    {
        title: "Salad",
        info: "Cherry tomatoes, beans, corns, lettuce, onion and sesame seeds",
        price: 11.00,
    }, 
    {
        title: "Beef Burger",
        info: "100% natural Australian beef patty on a brioche bun with cheese, lettuce, caramelised onion, tomato and beetroot. Served with chips",
        price: 14.00,
    },
    {
        title: "Southern Fried Chicken Burger",
        info: "Buttermilk fried chicken with lettuce, tomato, caramelised onion, aoili on a toasted milk bun. Served with fries",
        price: 16.00,
    },
    {
        title: "Fish and Chips",
        info: "Fish cooked your way (battered, crumbed or pan fried) served with chips and salad",
        price: 12.00,
    }
];

// Hot Drinks Functions
const hotDrinksSection = document.querySelector('.hot-drinks');
const coldDrinksSection = document.querySelector('.cold-drinks');
const breakfastSection = document.querySelector('.breakfast-menu');
const lunchSection = document.querySelector('.lunch-menu');


window.addEventListener('DOMContentLoaded', function() {
    let displayHotDrinks = hotDrinksMenu.map(function (item) {
        return `<div class="hot-drink-item">
                    <div class="title">
                        <h3 class="name">${item.title}</h3>
                        <div class="prices">
                            <h3 class="price-sm price">S $${item.priceSmall}</h3>
                            <h3 class="price-md price">M $${item.priceMedium}</h3>
                            <h3 class="price-lg price">L $${item.priceLarge}</h3>
                        </div>
                    </div>
                    <p class="item-text">${item.options}</p>
                </div>`;
    });

    let displayColdDrinks = coldDrinksMenu.map(function (item) {
        return `<div class="cold-drink-item">
                    <div class="title">
                        <h3 class="name">${item.title}</h3>
                        <div class="prices">
                            <h3 class="price">$${item.price}</h3>
                        </div>
                    </div>
                    <p class="item-text">${item.options}</p>
                </div>`;
    });

    let displayBreakfast = breakfastMenu.map(function (item) {
        return `<div class="breakfast-item">
                    <div class="title">
                        <h3 class="name">${item.title}</h3>
                        <div class="prices">
                            <h3 class="price">$${item.price}</h3>
                        </div>
                    </div>
                    <p class="item-text">${item.info}</p>
                </div>`;
    });

    let displayLunch = lunchMenu.map(function (item) {
        return `<div class="lunch-item">
                    <div class="title">
                        <h3 class="name">${item.title}</h3>
                        <div class="prices">
                            <h3 class="price">$${item.price}</h3>
                        </div>
                    </div>
                    <p class="item-text">${item.info}</p>
                </div>`;
    });

    displayHotDrinks = displayHotDrinks.join("");
    displayColdDrinks = displayColdDrinks.join("");
    displayBreakfast = displayBreakfast.join("");
    displayLunch = displayLunch.join("");

    hotDrinksSection.innerHTML = displayHotDrinks;
    coldDrinksSection.innerHTML = displayColdDrinks;
    breakfastSection.innerHTML = displayBreakfast;
    lunchSection.innerHTML = displayLunch;
});

