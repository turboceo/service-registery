/**
 * 初始化 Consul 客户端
 */
const Consul = require('consul');

const consul = new Consul({
    host: '127.0.0.1',
    port: 8500,
    promisify: true,
});

consul.agent.service.register({
    name: serviceName,
    address: '127.0.0.1',
    port: 3000,
    check: {
        http: 'http://127.0.0.1:3000/health',
        interval: '10s',
        timeout: '5s',
    }
}, function(err, result) {
    if (err) {
        console.error(err);
        throw err;
    }
    console.log(serviceName + ' 注册成功！');
})