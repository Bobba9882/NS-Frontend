import {Trip} from "./trip";

export class User {
  id : number
  firstName : string
  lastName : string
  email : string
  password : string

  userId:number
  savedTrips: Trip[]
}
