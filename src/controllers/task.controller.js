const createTask = async (reg, res) => {
  return res.status(200).json({ message: "created a task" });
};
const getTask = async (reg, res) => {
  return res.status(200).json({ message: "all tasks" });
};
const deleteTask = async (reg, res) => {
  return res.status(200).json({ message: "deleted task" });
};
const updateTask = async (reg, res) => {
  return res.status(200).json({ message: "updated task" });
};

export { createTask, getTask, deleteTask, updateTask };
