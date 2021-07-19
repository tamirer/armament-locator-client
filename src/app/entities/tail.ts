import {TailStatus} from "./tail-status";

export class Tail {
  constructor(public id: number, public description: string, public squadId: number, public status: TailStatus) {
  }
}
