import {Tail} from "../app/entities/tail";
import {TailStatus} from "../app/entities/tail-status";

export const TAILS: Tail[] = [
  {
    id: 10,
    description: '456',
    squadId: 1,
    tailStatus: TailStatus.Preflight
  },
  {
    id: 11,
    description: '401',
    squadId: 1,
    tailStatus: TailStatus.Preflight
  },
  {
    id: 12,
    description: '438',
    squadId: 1,
    tailStatus: TailStatus.Preflight
  },
  {
    id: 13,
    description: '451',
    squadId: 2,
    tailStatus: TailStatus.Preflight
  },
  {
    id: 14,
    description: '433',
    squadId: 3,
    tailStatus: TailStatus.Preflight
  },
  {
    id: 15,
    description: '345',
    squadId: 3,
    tailStatus: TailStatus.Preflight
  }
]
