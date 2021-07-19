import {MissionStatus} from "./mission-status";

export class Tail {
  constructor(public id: number, public description: string, public squadId: number,
              public missionStatus: MissionStatus) {
  }
}

