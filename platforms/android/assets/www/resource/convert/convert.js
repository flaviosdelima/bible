
var express = require('express');
var bible = require('./bible').bible;

var app = express();


var port = process.env.PORT || 8080;



var fs = require('fs');
var path = './bible';



fs.readdir(path, function (err, files) {
    if (err) {
        throw err;
    }


    var totalLength = files.length;


    files.forEach(function(file, i){
    	


    	var data = fs.readFileSync(path+'/'+file, "utf8");
    	var bufferString = data.toString(); 
	    var bufferStringSplit = bufferString.split('\r\n'); 
	    // console.log(bufferStringSplit);
	    
	    
	    
	    var verses = [];
	    bufferStringSplit.forEach(function(line, index){

	    	var rgExp = /\d+/;

			var verse = line.replace(rgExp, '').replace(/^\s*|$\s*/g, '');
			if(verse){
				verses.push({
					index : index+1,
					verse : verse
				});
			}

	    });

	    var rgExp = /\d+/;
	    var bookName = file.replace(rgExp, '').replace('.txt', '').replace('개역개정_', '');

	    var bookInfo = {name : 'test' , abbr : '2'};


	    console.log(escape(bookName).charCodeAt())
	    console.log(escape("창"))
	    console.log(String.fromCharCode(escape(bookName).charCodeAt()))

	    if(bible[bookName]){
	    	console.log(bible[bookName])
	    	bookInfo = bible[bookName];
	    }

	    var context = {
	    	book : bookInfo.name,
	    	abbr  : bookInfo.abbr,
	    	chapter : file.replace(/[^0-9]/g,''),
	    	verses : verses
	    };

	    
	    var bookPath = './result/' + bookName;

	    // context.book = bookName;

	    var fileName = file.replace('개역개정_', '').replace(bookName, '').replace('.txt', '.json');


	    var result = JSON.stringify(context, null, 4);

	    if(file != '.DS_Store'){
	    	fs.mkdir(bookPath, function(e){
			    if(!e || (e && e.code === 'EEXIST')){
			        //do something with contents
			        fs.writeFileSync(bookPath+'/'+fileName, result);


	    			console.log(Math.ceil((i/totalLength)*100) + '%');
			        

			    } else {
			        //debug
			        console.log(e);
			    }
			});
	    }
	    
   
    });

});

//start app
app.listen(port);
console.log('Convert Application Start on Port ' + port);
exports = module.exports = app;
