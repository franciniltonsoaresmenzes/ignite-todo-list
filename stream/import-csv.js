import { parse } from 'csv-parse'
import fs from 'node:fs'

const csvPath = new URL('./task.csv', import.meta.url)

const stream = fs.createReadStream(csvPath)

const cvsParse = parse({
  delimiter: ',',
  skipEmptyLines: true,
  fromLine: 2
})

async function run () {
  const lineParse = stream.pipe(cvsParse)

  for await (const line of lineParse) {
    const [title, description] = line

    await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description })
    })

    await wait(100)
  }
}

async function wait(ms) {
  return await new Promise((resolve) => setTimeout(resolve, ms))
}

run()
