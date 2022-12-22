import React, {FC} from "react";
import './Counter.css'

interface Props {
    title: string;
    score: number;
}

export const Counter: FC<Props> = ({title, score}) => {
  return (
    <div className="score">
      <h1>{title}</h1>
      <p>{score}</p>
    </div>
  )
}