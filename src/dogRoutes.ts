import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import { DogA } from "./Dog.ts"

const DogRouter = new Router()

DogRouter
  .get('/dogs', DogA.getDogs)
  .get('/dogs/:name', DogA.getDog)
  .post('/dogs', DogA.addDog)
  .put('/dogs/:name', DogA.updateDog)
  .delete('/dogs/:name', DogA.removeDog)

export {
    DogRouter
}