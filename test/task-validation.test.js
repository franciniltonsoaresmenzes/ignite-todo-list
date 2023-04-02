import { describe, it } from 'node:test'
import { deepStrictEqual } from 'node:assert'
import { Task } from '../src/entities/taks.js'

const newTask =  new Task()

describe('Task validation', () => {
  it('should create on task', () => {
    const task = { title: 'Task 10', description: 'Descrição da Task 01' }

    const createNewTask = newTask.create(task)
    deepStrictEqual(createNewTask, task)
  })
})
