const Funko = require("../models/funko.model");

class FunkoController {
    async index(req, res) {
        const funkos = await Funko.find({});

        return res.json(funkos);
    }

    async create(req, res) {
        const funko = await Funko.create(req.body);

        return res.json(funko);
    }

    async update(req, res) {
        const funko = await Funko.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' }, (err, doc) => doc);

        return res.json(funko);
    }

    async delete(req, res) {
        await Funko.findByIdAndDelete(req.params.id, { useFindAndModify: true });

        return res.end();
    }
}

module.exports = new FunkoController();