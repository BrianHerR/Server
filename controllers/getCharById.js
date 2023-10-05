const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character"

const getCharById = async (req, res) => {
    
    try {

        const a = req.params.id

        const response = await axios.get(`${URL}/${a}`)

        if (response.data) {
            
            const { id, status, name, species, origin, image, gender } = response.data
            
            res.json({ id, status, name, species, origin, image, gender })
        
        } else {
            
            res.status(404).json({ massage: 'Not found' });
        
        }

    } catch (error) {
        
        res.status(500).json({ message: error.message })
    
    }

}

module.exports = getCharById;