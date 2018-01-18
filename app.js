const static = require('koa-static');
const router = require('koa-router')();
const send = require('koa-send');
const logger = require('koa-logger');
const convert = require('koa-convert');
const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const session = require('koa-session2');
const bodyParser = require('koa-bodyparser');
let app = new Koa();

app.use(session({
  key: 'koa:sess'
}, app))
app.use(convert(logger()));
app.use(bodyParser());

//Static file
app.use(static('views'));
app.use(static('views/dist'));

//Frontpage route
router.get('/', async function(ctx, next){
  await send(ctx, __dirname + 'views/index.html');
})

app.use(router.routes());
//Auto load routes;
(function loadRoute(){
  var files = fs.readdirSync('routes');
  files.forEach(function (e) {
    if (e.match(/\.js$/i)){
      let prefix = path.basename(e, path.extname(e));
      app.use(require(__dirname + `/routes/${prefix}`).routes());
    }
  })
})();

const userModule = require('./modules/user');
userModule.init();

console.log('Listening at port 4000');
app.listen(4000);