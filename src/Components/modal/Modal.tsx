import React, {FC} from "react";
import './Modal.css'

interface Props {
    onClick: () => void;
    won: boolean;
    turns: number;
}

export const Modal: FC<Props> = ({onClick, won, turns}) => {


  return (
    <>
      <div className='modal'>
        <div className='modal__text'>{`${won ? `ура, вы победили это заняло ${turns} ходов` : 'увы, вы проиграли у вас кончились ходы'}`}</div>
        <div className='modal__button' onClick={onClick}><span className='button__text'>Сыграть еще</span></div>
      </div>
    </>
  )
}