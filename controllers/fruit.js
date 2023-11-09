var fruit = require('../models/fruit');
// List of all fruits
exports.fruit_list = function(req, res) {
   res.send('NOT IMPLEMENTED: fruit list');
};
// for a specific fruit.
exports.fruit_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: fruit detail: ' + req.params.id);
};
// Handle fruits create on POST.
exports.fruit_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: fruit create POST');
};
// Handle fruits delete form on DELETE.
exports.fruit_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: fruit delete DELETE ' + req.params.id);
};
// Handle fruits update form on PUT.
exports.fruit_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: fruit update PUT' + req.params.id);
};