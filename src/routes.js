import { Task } from "./entities/taks.js";
import { Database } from './external/repositories/database.js'
import { buildRoutePath } from "./utils/build-route-path.js";

const task = new Task()
const database = new Database()

export const routes = [
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { title, description } = req.body

      const newTask = task.create({ title, description })
      database.create(newTask)

      return res.writeHead(201).end()
    }
  },
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {

      const { search } = req.query


     const query = search ? decodeURIComponent(search) : null

      const task = database.select(query ? { title: query, description: query } : null)

      return res.end(JSON.stringify(task))
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params
      const { title, description } = req.body

      if (!title || !description) {
        return res.writeHead(404).end(JSON.stringify({ message: 'titulo ou a decrição são campos obrigatorios' }))
      }
      
      const [taks] = database.select({ id })

      if (!taks) {
        return res.writeHead(404).end(JSON.stringify({ message: 'Task não encontrada' }))
      }

      database.update({ title, description }, id)

      return res.writeHead(201).end()
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params

      const [taks] = database.select({ id })

      if (!taks) {
        return res.writeHead(404).end(JSON.stringify({ message: 'Task não encontrada' }))
      }


      database.delete(id)

      return res.writeHead(201).end()
    }
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: (req, res) => {
      const { id } = req.params

      const [taks] = database.select({ id })

      if (!taks) {
        return res.writeHead(404).end(JSON.stringify({ message: 'Task não encontrada' }))
      }


      database.doneTask(id)

      return res.writeHead(201).end()
    }
  }
]
