
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'dash.js test Page' });
  
};