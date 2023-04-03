import { Task } from "./entities/taks.js";
import { Database } from './external/repositories/database.js'
import { buildRoutePath } from "./utils/build-route-path.js";
import { extractqueryparams } from "./utils/extract-query-params.js";

const task = new Task()
const database = new Database()

export const routes = [
  {
    method: 'POST',
    path: buildRoutePath('/task'),
    handler: (req, res) => {
      const { title, description } = req.body

      const newTask = task.create({ title, description })
      database.create(newTask)

      return res.writeHead(201).end()
    }
  },
  {
    method: 'GET',
    path: buildRoutePath('/task'),
    handler: (req, res) => {

      const { search } = req.query

      console.log(search)

      const task = database.select(search ? { title: search, description: search } : null)

      return res.end(JSON.stringify(task))
    }
  }
]
