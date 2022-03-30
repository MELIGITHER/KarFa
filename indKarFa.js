
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

var iso88592 = require('iso-8859-2');
//__dirname : project folder.
console.log(__dirname);
//Store all JS and CSS in Scripts folder.In css/images- all images
app.use(express.static(path.join(__dirname,'Scripts')));

//Store all HTML files in Pages folder.
app.use(express.static(path.join(__dirname,'Pages')));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'Pages/indKarFa.html'));
});

app.use('/', router);
const port=process.env.PORT || 3000;
app.listen(port ,function(){
    console.log('Up and running on port:'+port);
});