const mongoose = require('mongoose');

const Product = mongoose.model("Product");

module.exports = {
    async index(request, response) {
        const {page = 1} = request.query;
        const product = await Product.paginate({}, {page, limit: 10});
        return response.json(product);
    },

    async show(request, response){
        const product = await Product.findById(request.params.id);
        return response.json(product);
    },
    
    async store(request, response){
        const product = Product.create(request.body);
        return response.json(product);
    },

    async update(request, response){
        const product = await Product.findByIdAndUpdate(request.params.id, request.body, {new:true});
        return response.json(product);
    },
    async destroy(request, response){
        await Product.findByIdAndRemove(request.params.id);
        return response.send();
    }
}
