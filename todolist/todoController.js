const Todo = require("../todolist/todoModel")

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// exports.getTodoById = async (req, res) => {
//   try {
//     const todo = await Todo.findById(req.params.id);
//     if (!todo) return res.json({ message: "Todo not found" });
//     res.json(todo);
//   } catch (err) {
//     res.json({ message: err.message });
//   }
// };

exports.addTodo = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTodo)
      return res.json({ message: "Todo not found" });
    res.json(updatedTodo);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo)
      return res.json({ message: "Todo not found" });
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
