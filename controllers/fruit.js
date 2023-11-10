var fruit = require('../models/fruit');
// List of all fruits
exports.fruit_list = async function(req, res) {
    try{
    thefruit = await fruit.find();
    res.send(thefruit);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   
// for a specific fruit.
exports.fruit_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await fruit.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
 
// Handle fruit create on POST.
exports.fruit_create_post = async function(req, res) {
    console.log(req.body)
    let document = new fruit();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"name":"goat", "age":12, "bread":"large"}
    document.name = req.body.name;
    document.color = req.body.color;
    document.quantity = req.body.quantity;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   }
// Handle fruit delete form on DELETE.
exports.fruit_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: fruit delete DELETE ' + req.params.id);
};

// Handle fruit update form on PUT.
exports.fruit_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await fruit.findById( req.params.id)
 // Do updates of properties
 if(req.body.name)
 toUpdate.name = req.body.name;
 if(req.body.color) toUpdate.color = req.body.color;
 if(req.body.quantity) toUpdate.quantity = req.body.quantity;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// VIEWS
// Handle a show all view
exports.fruit_view_all_Page = async function(req, res) {
    try{
    thefruit = await fruit.find();
    res.render('fruit', { title: 'fruit Search Results', results: thefruit });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };