// import shopData from './shopData.js';

// // Assuming you have the shopData.js file with the data
// // Import the data from shopData.js

// // Get the first item of each type
// const firstItems = shopData.reduce((acc, item) => {
//     if (!acc[item.type]) {
//         acc[item.type] = item;
//     }
//     return acc;
// }, {});

// // Create a section for each type and display the first item
// for (const type in firstItems) {
//     const section = document.createElement('section');
//     section.innerHTML = `<h2>${type}</h2><p>${firstItems[type].name}</p>`;
//     document.body.appendChild(section);
// }

// Getting the first item of each type in a section
function getFirstItemByType(section) {
    const itemsMap = {};
    shopItemsData.forEach(item => {
        if (item.section === section) {
            if (!itemsMap[item.type]) {
                itemsMap[item.type] = item;
            }
        }
    });
    return Object.values(itemsMap);
}

// Function to pluralize a word based on count
// function pluralize(word, count) {
//     const irregularPlurals = {
//         'pastry': 'pastries',
//     }

//     if (irregularPlurals[word]) {
//         return count === 1 ? word: irregularPlurals[word];
//     }

//     return count === 1 ? word : word + 's';
// }

// Generation HTML for items
function generateItemHTML(item) {
    // const typeName = pluralize(item.type, shopItemsData.filter(i => i.type === item.type).length);
    return `
        <div class="item">
            <h3>${item.type}</h3>
            <img src="${item.img}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>R ${item.price}.00</p>
        </div>
       
    `;
}

// Displaying bakery items in HTML
const bakeryItemsContainer = document.getElementById('bakeryItems');
const bakeryItems = getFirstItemByType('bakery');
bakeryItems.forEach(item => {
    const itemHTML = generateItemHTML(item);
    bakeryItemsContainer.innerHTML += itemHTML;
});

// Displaying butchery items in HTML
const butcheryItemsContainer = document.getElementById('butcheryItems');
const butcheryItems = getFirstItemByType('butchery');
butcheryItems.forEach(item => {
    const itemHTML = generateItemHTML(item);
    butcheryItemsContainer.innerHTML += itemHTML;
});

// Displaying dairy items in HTML
const dairyItemsContainer = document.getElementById('dairyItems');
const dairyItems = getFirstItemByType('dairy');
dairyItems.forEach(item => {
    const itemHTML = generateItemHTML(item);
    dairyItemsContainer.innerHTML += itemHTML;
});