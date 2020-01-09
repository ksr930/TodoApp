var express = require('express')
var router = express.Router();
var todo = require('../modules/todomodule')
var cors = require('cors')

var corsoptions={
    origin:"http://localhost:3000",
    optionSuccessStatus:200
}

router.get('/display',(req,res)=>{
  res.render('todo.ejs')
})

router.get('/',(req,res)=>{
    
  todo.find()
  .then(data=>{
      res.json(data)
  })  

})
    
router.get('/show/:id',(req,res)=>{
    todo.findById(req.params.id,(err,data)=>{
           
        res.json(data)
        
    })
})


router.post('/',(req,res)=>{
   
    todo.create(req.body)
   
    .then(data=>{
      console.log(data)   
   res.send(data)

    })

})

router.delete('/:id',(req,res)=>{
    
    todo.findByIdAndRemove(req.params.id,(err,d)=>{
        if(err)
        res.send(err)
        else{
          res.json({message:'we delete'})  
        }
    })

})

router.put('/:id',(req,res)=>{
    
    todo.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    .then(todo=>{
       
        res.json(todo)
        
    }
        )
    .catch(err=>
        
        {    
            res.send(err)
            
            
        })
    

})

module.exports = router