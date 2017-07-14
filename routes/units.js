'use strict';

const Router = require('koa-router');
const router = new Router();

const ctrl = require('../controllers').units;

const auth = require('../middleware/auth-required-middleware');
const {AUTHORIZATION} = require('../lib/constants');

router.get('/units', auth({authorization: AUTHORIZATION.PUBLIC}), ctrl.get);
router.post('/units', auth({authorization: AUTHORIZATION.PRIVATE}), ctrl.post);

module.exports = router.routes();