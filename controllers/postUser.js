const { User } = require('../src/DB_connection');

const postUser = async (req, res) => {
    
    const { email , password } = req.body;
    
    try {
        
        if(email && password){
            
            const [ nuevoUser ] = await User.findOrCreate({
                where: { email, password }
            }) 
            return res.status(200).json(nuevoUser);
        }
        return res.status(400).json({message:'Faltan datos'});
        
    } catch (error) {
        return res.status(500).json({message: error})
    }


}

module.exports = postUser;