import React from 'react'
import './Car.scss'
import {withRouter} from 'react-router-dom'

//withRouter это компонент высшего порядка который позволяет 
//получить данные (history, location и тд.) в функциональном компоненте

const Car = props => {
  return (
    <div className={'Car'} onClick={() => props.history.push('/cars/' + props.name.toLowerCase())}>
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
    </div>
  )
}

export default withRouter(Car)