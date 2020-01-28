//index, show, store, update, destroy
const User = require('../models/User');
module.exports = {
    async store(req, res){
        //  desestruturacao voce usa o {} numa variavel que voce esta procurando em
        //  um obj que no caso é dentro do req.body
        const {email} = req.body;
        // verificaca se usuario ja existe para nao criar duplicados
        let user = await User.findOne({email});
        if(!user){
            user = await User.create({email});
        }
        return res.json(user);
    }
}