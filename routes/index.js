const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Sorry you are lost .... wrong route!');
});

module.exports = router;
