function handleGetSoftDrink(req, res) {
    console.log("getting details for a soft drink");
    var id = req.params.id;
    var result = {id: id, name: "Dr. Pepper"};
    res.json(result);
}


function handlePostSoftDrink(req, res) {
    console.log("Handling a new soft drink");
    console.log("Wanting to add: " + req.body.name);
    console.log("With description: " + req.body.description);
    var result = {status:"success",
                  entitiy: {id: 6, name: "Dr. Pepper"}
    };
    res.json(result);
}

module.exports = {
    handleGetSoftDrink: handleGetSoftDrink,
    handlePostSoftDrink: handlePostSoftDrink
};