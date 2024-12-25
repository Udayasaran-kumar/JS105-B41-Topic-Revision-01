function createProduct(name,price,category){
    return{
        name:name,
        price:price,
        category:category,
        applyDiscount:function(discount){
            // let discount=prompt();
            let  discountAmount = (this.price * discount) / 100;
            console.log(`The price of ${this.name} is ${this.price} comes in ${this.category}`);
            console.log(`The updated price is ${this.discountAmount}`);

        }
    }
}

function createCategoryManager() {
    const products = [];

    return {
        addProduct: function(product) {
            products.push(product);
            console.log(`${product.name} has been added to the category.`);
        },

        removeProduct: function(productName) {
            let index = products.findIndex(p => p.name === productName);
            if (index !== -1) {
                let removedProduct = products.splice(index, 1);
                console.log(`${removedProduct[0].name} has been removed from the category.`);
            } else {
                console.log(`Product ${productName} not found.`);
            }
        },

        listProducts: function() {
            console.log("Listing all products:");
            products.forEach(product => {
                console.log(`- ${product.name}: $${product.price} (${product.category})`);
            });
        },

        applyCategoryDiscount: function(discountPercentage) {
            console.log(`Applying ${discountPercentage}% discount to all products in the category.`);
            products.forEach(product => {
                product.applyDiscount(discountPercentage);
            });
        }
    };
}

let trimmer = createProduct("Trimmer", 200, "Usables");
let razor = createProduct("Razor", 50, "Usables");

let categoryManager = createCategoryManager();

categoryManager.addProduct(trimmer);
categoryManager.addProduct(razor);
categoryManager.listProducts();


categoryManager.applyCategoryDiscount(10);

categoryManager.listProducts();

categoryManager.removeProduct("Trimmer");
categoryManager.listProducts();
