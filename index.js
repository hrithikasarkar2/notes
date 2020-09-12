var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cons = require('consolidate'),
  dust = require('dustjs-helpers'),
  pg = require('pg'),
  Pool = require('pg-pool')
  app = express();

// Assign Dust Engine To .dust Files
app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use("/public", express.static('public')); 

// Set Public Folder

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const config = {
    user: 'postgres',
    database: 'subjectsdb',
    password: 'your_password',
    port: 5432 ,  
};

const pool = new pg.Pool(config);

app.get('/acc', (req, res, next) => {
   pool.connect(function(err, client, done) {
       if (err) {
 
           console.log("Can not connect to the DB" + err);
       }
       client.query('SELECT * FROM acc', function (err, result) {
        
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.render('acc', {acc: result.rows});
       })
   })
});

app.post('/add1',function(req,res){
 pool.connect(function (err, client, done) {
       if (err) {
           console.log("Can not connect to the DB" + err);
       }
       client.query("INSERT INTO acc(topic_name,google_drive_link,your_name) VALUES($1,$2,$3)",
        [req.body.topic_name,req.body.google_drive_link,req.body.your_name]); 
        
        done();
        res.redirect('/acc');
   });
});

app.get('/bio', (req, res, next) => {   //here
   pool.connect(function(err, client, done) {
       if (err) {
 
           console.log("Can not connect to the DB" + err);
       }
       client.query('SELECT * FROM bio', function (err, result) {   //here
        
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.render('bio', {bio: result.rows});  //here
       })
   })
});

app.post('/add2',function(req,res){  //here
 pool.connect(function (err, client, done) {
       if (err) {
           console.log("Can not connect to the DB" + err);
       }
       client.query("INSERT INTO bio(topic_name,google_drive_link,your_name) VALUES($1,$2,$3)",  //here
        [req.body.topic_name,req.body.google_drive_link,req.body.your_name]); 
          
        done();
        res.redirect('/bio'); //here
   });
});


app.get('/chem', (req, res, next) => {   //here
   pool.connect(function(err, client, done) {
       if (err) {
 
           console.log("Can not connect to the DB" + err);
       }
       client.query('SELECT * FROM chem', function (err, result) {   //here
        
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.render('chem', {chem: result.rows});  //here
       })
   })
});

app.post('/add3',function(req,res){  //here
 pool.connect(function (err, client, done) {
       if (err) {
           console.log("Can not connect to the DB" + err);
       }
       client.query("INSERT INTO chem(topic_name,google_drive_link,your_name) VALUES($1,$2,$3)",  //here
        [req.body.topic_name,req.body.google_drive_link,req.body.your_name]); 
          
        done();
        res.redirect('/chem'); //here
   });
});


app.get('/com', (req, res, next) => {   //here
   pool.connect(function(err, client, done) {
       if (err) {
 
           console.log("Can not connect to the DB" + err);
       }
       client.query('SELECT * FROM com', function (err, result) {   //here
        
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.render('com', {com: result.rows});  //here
       })
   })
});

app.post('/add4',function(req,res){  //here
 pool.connect(function (err, client, done) {
       if (err) {
           console.log("Can not connect to the DB" + err);
       }
       client.query("INSERT INTO com(topic_name,google_drive_link,your_name) VALUES($1,$2,$3)",  //here
        [req.body.topic_name,req.body.google_drive_link,req.body.your_name]); 
        
        done();
        res.redirect('/com'); //here
   });
});


app.get('/comp', (req, res, next) => {   //here
   pool.connect(function(err, client, done) {
       if (err) {
 
           console.log("Can not connect to the DB" + err);
       }
       client.query('SELECT * FROM comp', function (err, result) {   //here
        
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.render('comp', {comp: result.rows});  //here
       })
   })
});

app.post('/add5',function(req,res){  //here
 pool.connect(function (err, client, done) {
       if (err) {
           console.log("Can not connect to the DB" + err);
       }
       client.query("INSERT INTO comp(topic_name,google_drive_link,your_name) VALUES($1,$2,$3)",  //here
        [req.body.topic_name,req.body.google_drive_link,req.body.your_name]); 
        
        done();
        res.redirect('/comp'); //here
   });
});


app.get('/eco', (req, res, next) => {   //here
   pool.connect(function(err, client, done) {
       if (err) {
 
           console.log("Can not connect to the DB" + err);
       }
       client.query('SELECT * FROM eco', function (err, result) {   //here
       
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.render('eco', {eco: result.rows});  //here
       })
   })
});

app.post('/add6',function(req,res){  //here
 pool.connect(function (err, client, done) {
       if (err) {
           console.log("Can not connect to the DB" + err);
       }
       client.query("INSERT INTO eco(topic_name,google_drive_link,your_name) VALUES($1,$2,$3)",  //here
        [req.body.topic_name,req.body.google_drive_link,req.body.your_name]); 
         
        done();
        res.redirect('/eco'); //here
   });
});


app.get('/maths', (req, res, next) => {   //here
   pool.connect(function(err, client, done) {
       if (err) {
 
           console.log("Can not connect to the DB" + err);
       }
       client.query('SELECT * FROM maths', function (err, result) {   //here
        
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.render('maths', {maths: result.rows});  //here
       })
   })
});

app.post('/add7',function(req,res){  //here
 pool.connect(function (err, client, done) {
       if (err) {
           console.log("Can not connect to the DB" + err);
       }
       client.query("INSERT INTO maths(topic_name,google_drive_link,your_name) VALUES($1,$2,$3)",  //here
        [req.body.topic_name,req.body.google_drive_link,req.body.your_name]); 
         
        done();
        res.redirect('/maths'); //here
   });
});


app.get('/phy', (req, res, next) => {   //here
   pool.connect(function(err, client, done) {
       if (err) {
 
           console.log("Can not connect to the DB" + err);
       }
       client.query('SELECT * FROM phy', function (err, result) {   //here
        
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.render('phy', {phy: result.rows});  //here
       })
   })
});

app.post('/add8',function(req,res){  //here
 pool.connect(function (err, client, done) {
       if (err) {
           console.log("Can not connect to the DB" + err);
       }
       client.query("INSERT INTO phy(topic_name,google_drive_link,your_name) VALUES($1,$2,$3)",  //here
        [req.body.topic_name,req.body.google_drive_link,req.body.your_name]); 
         
        done();
        res.redirect('/phy'); //here
   });
});


//console.log('log file ')
app.get('/',function(req,resp){

  resp.render('index')
});

app.listen('96',()=>console.log('Server running at port 96'));