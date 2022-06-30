const User = require("../models/user.model");

class UserController {
    async authenticate(req, res) {
        const user = await User.findOne({ email: req.body.email, password: req.body.password });

        if (!user) {
            return res.status(401).send('User not found');
        }

        return res.json({ autenticated: true, user: user });
    }

    async find(req, res) {
        const user = await User.findById(req.params.id);

        return res.json(user);
    }

    async create(req, res) {
        const user = await User.create(req.body);

        return res.json(user);
    }

    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' }, (err, doc) => doc);

        return res.json(user);
    }

    async delete(req, res) {
        await User.findByIdAndDelete(req.params.id, { useFindAndModify: true });

        return res.end();
    }
}

module.exports = new UserController();