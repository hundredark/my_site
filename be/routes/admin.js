const router = require('koa-router')(),
      adminController = require('../controllers/Admin');

router.prefix('/admin');

router.post('/login_action', adminController.loginAction);
router.get('/login_check', adminController.loginCheck);
router.get('/logout_action', adminController.logoutAction);

module.exports = router;
