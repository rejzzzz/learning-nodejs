#### 1. Clone the repo
```git clone https://github.com/rejzzzz/learning-nodejs.git```

#### 2. go to the task-manager-api directory
```cd task-manager-api```


#### 3. install dependencies
```npm install```

#### 4. run the api on node
```node index.js```

#### 5. server running on:
```http://localhost:3000```

#### 6. to see all tasks, send a GET request to:
```http://localhost:3000/tasks```

#### 7. to add task, send POST request to 
```http://localhost:3000/tasks``` with body 
```
{
  "task": "task-name"
}
```
#### 8. to delete a task, send DELETE request to the url with the task number in the url
```http://localhost:3000/tasks/1```

