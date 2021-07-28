const Comment = require('../models/comment.model');
const Coin = require('../models/coin.model');

exports.getAll = async (req, res) => { //ok
  try {
    res.json(await Comment.find());
  } catch (err) {
    res.status(500).json({ message : err.message });
  }
};

exports.getById = async (req, res) => { //ok
  try {    
    const result = await Comment.findById(req.params.id);
    if(!result) res.status(404).json({message: 'Not found'});
    else res.json(result);
  } catch (err) {
    res.status(500).json({message: err});
  }  
}

exports.getByCoinId = async (req, res) => { //ok
  try {
    const coinId = req.params.id;
    res.json(await Comment.find({coinId : coinId}));
  } catch (err) {
    res.status(500).json({ message : err.message });
  }
};


exports.postOne = async (req, res) => { //ok
  const { name, lastName, email, comment, coinId } = req.query;  
  //console.log(name, lastName, email, comment, coinId);
  try{
    const newDoc = new Comment({ name, lastName, email, comment, coinId });
    await newDoc.save();
    res.json(newDoc);   
  }catch(err) {
    res.status(500).json({ message: err });
  }

  /*
  try { 
    //check if coin exists
    const result = await Coin.find({ _id : coinId });    
    if(result._id){
      const newDoc = new Comment({ name, lastName, email, comment, coinId });
      await newDoc.save();
      res.json(newDoc);   
    }else{
      res.status(404).json({ message: `Coin: ${coinId} not found` });        
    }
  } catch(err) {
    res.status(500).json({ message: err });
  }  
  */
};

exports.deteleById = async (req, res) => {  //ok
  try {
    const result = await Comment.findById(req.params.id);
    if(result){
      await Comment.deleteOne({_id: req.params.id});
      res.json(result);
    }
    else res.status(404).json({message: 'Comment Not found'});
  } catch (err) {
    res.status(500).json({message: err});
  }  
};




