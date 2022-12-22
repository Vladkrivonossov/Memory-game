import React, {FC} from "react";
import './Card.css'
import karpov from '../../Assets/karpov.png'

interface Props {
    card: {
        name: string,
        id?: number
    };
    onClick: () => void;
    flipped: boolean;
    disabled: boolean
}

export const Card: FC<Props> = ({  card, onClick, flipped, disabled }) => {

  return (
      <div className={`card-outer ${flipped ? 'flipped' : ''} ${disabled ? 'disabled' : ''}`}   onClick={onClick}>
        <div className='card' >
          <div className='card__front'>
            <img  src={karpov} draggable={false}/>
          </div>
          <div className='card__back'>
            <img src={card.name} alt=''/>
          </div>
        </div>
      </div>
  )
}