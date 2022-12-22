import React, {useState, useEffect} from "react";
import { Header } from '../Header/Header'
import { Counter } from '../Counter/Counter'
import './App.css'
import { cardsImages, shuffleCards }  from '../../utils'
import {Card} from "../Card/Card";
import {Modal} from '../modal/Modal'
import {ICard} from "../../types";

export const App = () => {
  const [won, setWon] = useState(false)
  const [cards, setCards] = useState(shuffleCards(cardsImages))
  const [foundPairs, setFoundPairs] = useState<ICard[]>([])
  const [modal, setModal] = useState(false)
  const [activeCards, setActiveCards] = useState<ICard[]>([])
  const [turn, setTurn] = useState(0)
  const [triesLeft, setTriesLeft] = useState(40)

  const resetTurn = () => {
    setActiveCards([])
    setTriesLeft(prevState => prevState - 1)
    setTurn(prevState => prevState + 1)
  }

  useEffect(() => {
    if (foundPairs.length) {
      setTurn(prevState => prevState + 1)
    }
  }, [foundPairs])

  const newGame = () => {
    setWon(false)
    setModal(false)
    setActiveCards([])
    setCards(shuffleCards(cardsImages))
    setFoundPairs([])
    setTurn(0)
    setTriesLeft(40)
  }

  useEffect(() => {
    const firstCard = activeCards[0]
    const secondCard = activeCards[1]
    if (activeCards.length === 2) {
      if (firstCard.name === secondCard.name && firstCard.id !== secondCard.id) {
        setActiveCards([])
        setFoundPairs([...foundPairs, firstCard, secondCard])
      }
    }
    if (activeCards.length > 2) {
      setTimeout(resetTurn, 50)
    }
    if (activeCards.length === 2 && firstCard.name !== secondCard.name) {
      setTimeout(resetTurn, 500)
    }
    if (triesLeft === 0) {
      setModal(true)
    }
    if (foundPairs.length === 16) {
      setWon(true)
      setModal(true)
    }
  }, [activeCards, foundPairs])

  const flipCard = (card: ICard) => {
    setActiveCards([...activeCards, card])
    const firstCard = activeCards[0]
    const secondCard = activeCards[1]
    if (activeCards.length === 2) {
      if (firstCard.name === secondCard.name && firstCard.id !== secondCard.id) {
        setActiveCards([])
        setFoundPairs([...foundPairs, firstCard, secondCard])
      }
    }
  }


  return (
    <div className="container">
      {modal && <Modal won={won} turns={turn} onClick={() => newGame()} />}
      <Header />
        <main>
          <Counter title={'сделано ходов'} score={turn}/>
          <div className={'cards__container'}>
            {cards.map((card) => {
              const flippedToFront = activeCards.indexOf(card) !== -1 || foundPairs.indexOf(card) !== -1
              return (
                <Card
                  key={card.id}
                  card={card}
                  disabled={foundPairs.indexOf(card) !== -1}
                  flipped={flippedToFront}
                  onClick={() => flipCard(card)}
                />
              )
            })}
          </div>
          <Counter title={'попыток осталось'} score={triesLeft}/>
        </main>
    </div>
  )
}