const {Router} = require('express');
const router = Router();
const admin = require('firebase-admin');
 
var serviceAccount = require("../priv/bellaciaoadmin-firebase-adminsdk-fsnt7-a886d748cc.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://bellaciaoadmin.firebaseio.com/',
});

const db = admin.database();

router.get('/',(req,res)=>{
    console.log('💀');
    res.render('index.hbs');
});


router.get('/menu4Clients',(req,res)=>{
    console.log('💀');
    res.render('menuClients.hbs');
});

//tables

router.get('/tables', (req,res)=>{
    console.log('💀');

   db.ref('tables').orderByChild('status').equalTo('open').once('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        res.render('tables.hbs', {
            tablesOpen: data
        });
    });

 });

 router.get('/getTable/:id',(req,res)=>{
     var {id} = req.params;
      const idx = db.ref('tables/'+id).once('value',(snapshot)=>{
        console.log(snapshot)
        res.json(snapshot)
    });
       
 });

 router.post('/tableAddOrder', (req,res)=>{
    //console.log(req.body)
    const  {key,bill} = req.body;
    const updateTable = {
        bill
    }
    console.log(key,updateTable)
    db.ref('tables/'+key).update(updateTable);
    res.redirect('/tables');
 
});

router.post('/tableCanceled', (req,res)=>{
    //console.log(req.body)
    const  {key,reason} = req.body;
    var d = new Date,
    dformat = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
    const finished = dformat;
    const status = "canceled";
    const canceledTable = {
        status,finished,reason
    };
     
    console.log(key,canceledTable)
    db.ref('tables/'+key).update(canceledTable);
    res.redirect('/tables');
 
});
 
router.post('/open/table',(req,res)=>{
    const  {atwhom,people} = req.body;
    var d = new Date,
    dformat = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
    const arrived = dformat;
    const status = "open";
    const openTable = {
        atwhom,people,arrived,status
    }
    
    console.log(req.body);
    console.log(openTable);
    db.ref('tables').push(openTable)
    res.redirect('/tables');
 
 
 });


//meals

router.get('/meals',(req,res)=>{
    console.log('💀');

    db.ref('meals').once('value',(snapshot)=>{
        const data = snapshot.val();
        res.render('meals.hbs',{meals: data});
    });
});

router.get('/get/meals-list',(req,res)=>{
    db.ref('meals').once('value',(snapshot)=>{
        console.log(snapshot)
        res.json(snapshot)
    });

});

router.post('/add/meals',(req,res)=>{
   const  {name,suggestion,price,description} = req.body;
   const newPizza = {
    name,suggestion,price,description
   }
   db.ref('meals').push(newPizza)
   console.log(req.body);
   res.redirect('/meals');


});

router.get('/delete/meals/:id',(req,res)=>{
    const {id} = req.params;
    db.ref('meals/'+id).remove();
    res.redirect('/meals');
});

router.post('/update/meals',(req,res)=>{
    const  {key,name,suggestion,price,description} = req.body;
    const updateMeal = {
     name,suggestion,price,description
    }
    db.ref('meals/'+key).update(updateMeal);
      console.log(req.body);
      res.redirect('/meals');
 
 });

//drinks
router.get('/drinks',(req,res)=>{
    console.log('💀');

    db.ref('drinks').once('value',(snapshot)=>{
        const data = snapshot.val();
        res.render('drinks.hbs',{drinks: data});
    });
});

router.get('/get/drinks-list',(req,res)=>{
    db.ref('drinks').once('value',(snapshot)=>{
        console.log(snapshot)
        res.json(snapshot)
    });

});

router.post('/add/drinks',(req,res)=>{
   const  {name,suggestion,price,description} = req.body;
   const newPizza = {
    name,suggestion,price,description
   }
   db.ref('drinks').push(newPizza)
   console.log(req.body);
   res.redirect('/drinks');


});

router.get('/delete/drinks/:id',(req,res)=>{
    const {id} = req.params;
    db.ref('drinks/'+id).remove();
    res.redirect('/drinks');
});
router.post('/update/drinks',(req,res)=>{
    const  {key,name,suggestion,price,description} = req.body;
    const updatePizza = {
     name,suggestion,price,description
    }
    db.ref('drinks/'+key).update(updatePizza);
      console.log(req.body);
      res.redirect('/drinks');
 
 });


//pizzas

router.get('/pizzas',(req,res)=>{
    console.log('💀');

    db.ref('pizzas').once('value',(snapshot)=>{
        const data = snapshot.val();
        res.render('pizzas.hbs',{pizzas: data});
    });
});
router.get('/get/pizza-list',(req,res)=>{
    db.ref('pizzas').once('value',(snapshot)=>{
        console.log(snapshot)
        res.json(snapshot)
    });

});

router.post('/add/pizza',(req,res)=>{
   const  {name,suggestion,price,description} = req.body;
   const newPizza = {
    name,suggestion,price,description
   }
   db.ref('pizzas').push(newPizza)
   console.log(req.body);
   res.redirect('/pizzas')

});

router.get('/delete/pizza/:id',(req,res)=>{
    const {id} = req.params;
    db.ref('pizzas/'+id).remove();
    res.redirect('/pizzas');
});
router.post('/update/pizza',(req,res)=>{
    const  {key,name,suggestion,price,description} = req.body;
    const updatePizza = {
     name,suggestion,price,description
    }
    db.ref('pizzas/'+key).update(updatePizza);
      console.log(req.body);
      res.redirect('/pizzas');
 
 });





module.exports = router;