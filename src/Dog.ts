interface Dog {
    getDogs: Object,
    getDog: Object,
    addDog: Object,
    updateDog: Object,
    removeDog: Object
}

let dogs: Array<Object> = [
    {
        name: "Yay",
        age: 8,
        pet: () => { console.log(`${self.name} has been petted`) }
    },
    {
        name: "Beh",
        age: 8,
        pet: () => { console.log(`${self.name} has been petted`) }
    }
]

class DogA implements Dog {
    public getDogs : any =  ({ response }: { response: any }) => {
        response.body = dogs
    }

    /**
     * name
     */
    public getDog : any = ({
        params,
        response,
    }: {
        params: {
            name: string
        }
        response: any
    }) => {
        const dog = dogs.filter((dog) => dog.name === params.name)
        if (dog.length) {
            response.status = 200
            response.body = dog[0]
            return
        }

        response.status = 400
        response.body = { msg: `Cannot find dog ${params.name}` }
    }

    /**
     * name
     */
    public addDog : any = async ({
        request,
        response,
    }: {
        request: any
        response: any
    }) => {
        const body = await request.body()
        const dog: Dog = body.value
        dogs.push(dog)

        response.body = { msg: 'OK' }
        response.status = 200
    }

    public updateDog: any  = async ({
        params,
        request,
        response,
    }: {
        params: {
            name: string
        }
        request: any
        response: any
    }) => {
        const temp = dogs.filter((existingDog) => existingDog.name === params.name)
        const body = await request.body()
        const { age }: { age: number } = body.value

        if (temp.length) {
            temp[0].age = age
            response.status = 200
            response.body = { msg: 'OK' }
            return
        }

        response.status = 400
        response.body = { msg: `Cannot find dog ${params.name}` }
    }

    public removeDog: any  = ({
        params,
        response,
      }: {
        params: {
          name: string
        }
        response: any
      }) => {
        const lengthBefore = dogs.length
        dogs = dogs.filter((dog) => dog.name !== params.name)
      
        if (dogs.length === lengthBefore) {
          response.status = 400
          response.body = { msg: `Cannot find dog ${params.name}` }
          return
        }
      
        response.body = { msg: 'OK' }
        response.status = 200
      }
}

export {
    DogA
}