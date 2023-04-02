import { describe, it } from 'node:test'
import { deepStrictEqual } from 'node:assert'
import { InMemoryTaskRepository } from '../../../src/usecase/repository/in-memory-task-repository.js'
import { Task } from '../../../src/entities/taks.js'


 const newTask = new Task()

describe('In memory taks repository', () => {
  it('should add task', () => {
    const title = 'Task 01'
    const description = 'Descrição da Task 01'

    const task = newTask.create({ title, description })
    const repo = new InMemoryTaskRepository()
    repo.create(task)


    deepStrictEqual(repo.select({ title }).length, 1)
  })

  it('should update task', () => {
    const title = 'Task 01'
    const description = 'Descrição da Task 01'

    const task = newTask.create({ title, description })
    const repo = new InMemoryTaskRepository()
    repo.create(task, '123')
    repo.update({ title: 'Task 02', description }, '123')

    deepStrictEqual(repo.select()[0].title, 'Task 02')
  })

  it('should delete task', () => {
    const title = 'Task 01'
    const description = 'Descrição da Task 01'

    const task = newTask.create({ title, description })
    const repo = new InMemoryTaskRepository()
    repo.create(task, '123')
    repo.delete('123')

    deepStrictEqual(repo.select().length, 0)
  })
})
