const moongose = require('mongoose')

const Product = moongose.model('Product')

module.exports = {
    async index(req, res) {

        const { page = 1 } = req.query;

        const products = await Product.paginate({}, {page, limit: 10});

        return res.json(products);
    },
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.send(product);
    },
    async delete(req, res) {
     await Product.findByIdAndRemove(req.params.id);

        return res.send();
    },
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new : true });

        return res.json(product);
    },
    async store(req, res) {
        const product = await Product.create(req.body)

        return res.json(product);
    }
}