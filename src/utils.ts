import js  from './Assets/js.png'
import fb  from './Assets/fb.png'
import ng  from './Assets/ng.png'
import rc  from './Assets/rc.png'
import ts  from './Assets/ts.png'
import wp  from './Assets/wp.png'
import ws  from './Assets/ws.png'
import rd  from './Assets/rd.png'
import {ICard} from "./types";

export const cardsImages: ICard[] = [
  {name: js},
  {name: fb},
  {name: ng},
  {name: rc},
  {name: ts},
  {name: wp},
  {name: ws},
  {name: rd},
]

export const shuffleCards = (arr: ICard[]) => {
  const shuffledCards = [...arr, ...arr]
    .sort(() => Math.floor(Math.random() - 0.5))
    .map((card) => ({...card, id: Math.random()}))
  return shuffledCards
}
