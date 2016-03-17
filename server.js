const bodyParser = require( 'body-parser' );
const mongoose = require( './lib/setup-mongoose' );
const Records = require('./models/record');
const express = require( 'express' );
const app = express();
const publicPath = require( 'path' ).join( __dirname, 'public' );

mongoose.Promise = global.Promise;   //todo: check on this

app.use( express.static( publicPath ) );
app.use( bodyParser.json() );   //essential!
app.use( bodyParser.urlencoded({ extended: false }) );

//var recordsArray = [
//        { id: '1', name: 'unimog1', url: 'http://www.benzworld.org/forums/attachments/unimog/299789d1270173827-military-uhn-pair-mb-unimog-u5000.jpg' },
//
//        { id: '2', name: 'unimog2', url: 'http://scnew.spacecowboys.org/wp-content/uploads/2014/01/space-cowboys-unimog-burning-man-2.jpg' },
//
//        { id: '3', name: 'unimog3', url: 'http://outofafricapark.com/assets/2008-09-01-063-orig_Giraffe-head-in-Unimog_700x467.jpg' }
//    ];;


//get all magazines in magazines
app.get('/api/records', function (req,res){
    Records.find({})
        .exec(function(err, records){
            if (err) {
                return next(err);}
            else{
                res.status(200).json(records);
            }
        });
});

app.post('/api/records', function(req, res, next){
    console.log (  req.body, ' is the record . .........' );
    new Records(req.body)
        .save()
        .then( record => res.send( record ) )
    .catch( next );
});

//NOT REQUIRED
//app.get( '/api/records/:id', ( req, res ) => {
//    var record = recordsArray.find( p => p.id == req.params.id );
//res.json( record );
//});
//


app.delete('/api/records/:id', function (req,res){

    console.log (  req.body.id, ' is the delete id request  .........' );


    Records.findOne({ id : id })
        .exec(function(err, records){
            if (err) {
                return next(err);}
            else{
                res.status(200).json(records);
            }
        });
});


app.listen( process.env.PORT || 8000, () => console.log( 'app running on 8000...' ) );