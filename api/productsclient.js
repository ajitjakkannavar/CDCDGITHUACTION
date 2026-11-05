
const Apiclient = require('../api/Baseapiclient');
const productsEndpoints = require('../endpoints/products');

class ProductClient extends Apiclient {

    // Get all products with optional query parameters
    async getAllProducts(params = {}, option = {}) {
        return this.get(
            `${productsEndpoints.products.Get_all_products}?${new URLSearchParams(params)}`,
            option
        );
    }

    // Search products
    async search(params = {}, option = {}) {
        return this.get(
            `${productsEndpoints.products.search}?${new URLSearchParams(params)}`,
            option
        );
    }

    // Get single product by ID
    async getProductById(id, option = {}) {
        return this.get(
            `${productsEndpoints.products.Get_all_products}/${id}`,
            option
        );
    }

    // Add product
    async add(data, option = {}) {
        return this.post(productsEndpoints.products.add, data, option);
    }

    // Update product
    async update(id, data, option = {}) {
        return this.put(
            `${productsEndpoints.products.Get_all_products}/${id}`,
            data,
            option
        );
    }

    // Partial update product
    async patch(id, data, option = {}) {
        return this.patchRequest(
            `${productsEndpoints.products.Get_all_products}/${id}`,
            data,
            option
        );
    }

    // Delete product
    async deleteProduct(id, option = {}) {
        return this.delete(
            `${productsEndpoints.products.Get_all_products}/${id}`,
            option
        );
    }

    // Get all categories
    async categories(option = {}) {
        return this.get(productsEndpoints.products.categories, option);
    }

    // Get category list
    async categoryList(option = {}) {
        return this.get(productsEndpoints.products.category_list, option);
    }

    // Get products by category
    async getProductsByCategory(category, option = {}) {
        return this.get(
            `${productsEndpoints.products.category}/${encodeURIComponent(category)}`,
            option
        );
    }
}

module.exports = ProductClient;