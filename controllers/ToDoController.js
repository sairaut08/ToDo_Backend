const ToDoModel = require("../models/ToDoModel");

exports.getToDos = async (req, res) => {
  const toDos = await ToDoModel.find();
  res.send(toDos);
};

exports.saveToDo = (req, res) => {
  const { toDo } = req.body;

  ToDoModel.create({ toDo }).then((data) => {
    console.log("ToDo created successfully...");
    res.status(201).send(data);
  });
};

exports.updateToDo = (req, res) => {
  const { id } = req.params;
  const { toDo } = req.body;

  ToDoModel.findByIdAndUpdate(id, { toDo }).then(() => {
    console.log("ToDo updated successfully...");
  });
};

exports.deleteToDo = (req, res) => {
  const { id } = req.params;

  ToDoModel.findByIdAndDelete(id).then(() => {
    console.log("ToDo deleted successfully...");
  });
};
