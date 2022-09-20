let Koa = require('koa');
let Router = require('koa-router');

let app = new Koa();
let router = new Router();

router
    .post('/payload', (ctx, next) => {
        console.log(ctx);

        // response json
        ctx.body = { 'code': 'SUCCESS'}
    })

router.get('/', (ctx, next) => {
    console.log('Hello, koa works.')
})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(4567);
console.log('App is listening to 4567 port......')
