const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Game = require('../Model/game');




//----save game details
router.post('/',(req,res)=>{
console.log("cam");
    const game = new Game({

        gName :req.body.gName,
        gCategory:req.body.gCategory,
        ageRange:req.body.ageRange,
        image:req.body.image,
        description:req.body.description

    });

    game.save()
        .then(data =>{
            res.json(data);
        })
});


//get all game details
router.get('/',async(req,res)=>{

     try{
        const game = await Game .find();
        res.json(game);
    }catch(err){
        res.json({message:err})
    }

});
//get game details for specific game
router.get('/:id',async(req,res)=>{

    try {
        let ItemList = [];
        const game = await Game.find({"_id": req.params.id});

        ItemList = game;
        console.log(ItemList);
        await res.json(ItemList);

    }catch(err){
        await res.json({message: err});
    }

});


//get game details for specific category
router.get('/:gCategory',async(req,res)=>{

    try {
        let ItemList = [];
        const game = await Game.find({"gCategory": req.params.gcategory});

        ItemList = game;
        await res.json(ItemList);

    }catch(err){
        await res.json({message: err});
    }

});

//update game details
router.patch('/:id',async (req,res)=>{
    console.log(req.params.id);
    const updated = await Game.updateOne({_id:req.params.id},
        {$set:{
                gName :req.body.gName,
                gCategory:req.body.gCategory,
                ageRange:req.body.ageRange,
                description:req.body.description
            }});

    await res.json(updated);

});

//delete games

router.delete('/:id',async (req,res)=>{
    console.log(req.params.id);
    try {
        const rPost = await Game.remove({_id: req.params.id});
    }catch(err){
        await res.json({messgae: err});
    }

});
module.exports = router;