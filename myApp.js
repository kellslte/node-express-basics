let express = require( 'express' );
require('dotenv').config();
let app = express();

app.use("/public", express.static(`${__dirname}/public`));

app.get( '/', function ( req, res )
{
    res.sendFile(`${__dirname}/views/index.html`);
} );

app.get( '/json', function ( req, res )
{
    let response = {
      message: "Hello json",
    };

    response.message =
      process.env.MESSAGE_STYLE === "uppercase"
        ? response.message.toUpperCase()
        : response.message;

    res.json( response );
})
































 module.exports = app;
