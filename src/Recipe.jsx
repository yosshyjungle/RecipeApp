import React from 'react'

const Recipe = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <ul>
            {props.ingredients.map(ingredients => (
                <li>{ingredients.text}</li>
            ))}
        </ul>
        <p>{props.calories} cal</p>
        <img src={props.image} alt="" />
    </div>
  )
}

export default Recipe