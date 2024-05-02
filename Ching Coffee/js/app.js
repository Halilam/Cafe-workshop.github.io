const { products, productCategories } = window;

window.addEventListener("load", onLoad);

/*Page load*/
function onLoad(){
    console.log("page loaded.");
    createProductList(productCategories);
}

/*Create product cards by category*/
function createProductList(productCategories){
    console.log("Creating product list...");
    const menuContainer=document.getElementById("menu");
    if(menuContainer){
        menuContainer.innerHTML="";

        window.productCategories.forEach((category)=>{
            const categoryButton=document.createElement("button");
            categoryButton.textContent=category.name;
            console.log("Product list created.");

            categoryButton.addEventListener("click",()=>{
                const cardsContainer=createProductCards(products, category);
                menuContainer.appendChild(cardsContainer);
            })
            menuContainer.appendChild(categoryButton);
        });
    }
}

/*Create product cards*/
function createProductCards(product, category){
    console.log("Creating product cards...");
    const cardsContainer = document.getElementById("productCards");
    cardsContainer.innerHTML = "";

    const showProducts=window.products.filter((product)=>product.category===category.name);
    showProducts.forEach((product) => {
        const productCard = createSingleProductCard(product);
        cardsContainer.appendChild(productCard);
        console.log("Product cards created.");
    });
    return cardsContainer;
}

/*Create single product card*/
function createSingleProductCard(product){
    const card=document.createElement("div");
    card.classList.add("card");

    const productImage = document.createElement("img");
    productImage.src = product.imageUrl;
    productImage.alt = product.productName;

    const productName = document.createElement("h2");
    productName.textContent = product.productName;

    const productDescription = document.createElement("p");
    productDescription.textContent = product.productDescription;

    const productValue = document.createElement("p");
    productValue.textContent = "Value: $" + product.value;

    const productAvailability = document.createElement("p");
    productAvailability.textContent = "Availability: " + (product.availability ? "In Stock" : "Out of Stock");

    card.appendChild(productImage);
    card.appendChild(productName);
    card.appendChild(productDescription);
    card.appendChild(productValue);
    card.appendChild(productAvailability);

    return card;
}

/*Add skill in Join page*/
if(document.getElementById("addSkillBox")){
    document.getElementById("addSkillBox").addEventListener("click", () => {
        const container = document.getElementById("skillsToLearnContainer");
        const input = document.createElement("input");
        input.type = "text";
        input.className = "skillsToLearn";
        input.name = "skillsToLearn[]";
        container.appendChild(input);
    });
}