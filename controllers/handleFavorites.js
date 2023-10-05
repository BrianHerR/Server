let myFavorites = [];

const postFav = (req, res) => {

    try {

    const character = req.body
    
    myFavorites.push(character)
    
    res.json(myFavorites);

}catch(error){
    res.status(500).json({message: error.message});
}    
}

const deleteFav = (req, res) => {
    try{

        const { id } = req.params;

        myFavorites = myFavorites.filter(fav => fav.id !== +id);

        res.json(myFavorites)

    }catch(error){

        res.status(500).json({message: error.message})

    }
}

module.exports = {
    postFav,
    deleteFav
}