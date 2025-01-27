const express = require("express");
const app = express();
const PORT = 3000


// middleware
app.use(express.json());
 /* thsi middleware parses json body of 
 imcoming request so it can be accessed by 
 req.body*/

// root route
app.get("/", (req, res) => {
    res.send("welcome to task manager api");
});
/* home url at http://localhost:PORT 
// can be accessed @ "/" */ 



// in-memory array
let tasks = [];

// get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});
/* sends back the current tasks array as json. 
*/

//add new task
app.post("/tasks", (req, res) => {
    const {task} = req.body;
    if(!tasks) {
        return res.status(400).json({error: "task is needed"});

    }

    const newTask = { id: tasks.length + 1, task };
    tasks.push(newTask);
    res.status(201).json(newTask);

});
/* takes input as input from req.body
    if task is missing, sends error(400) else
    creates a new task with id, task
    adds this new task in the array
    resposnds new task. success(201)

*/ 

//delete a task
app.delete("/tasks/:id", (req, res) => {
    const {id} = req.params;
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    res.json({ message: "task deleted."});
});
/** reads input id req.params.id
 * removes the task with the id. eg /tasks/1
 * responds success with a message task deleted.
 */

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);

});
