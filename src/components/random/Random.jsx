import React from 'react';
import "./Random.scss";

const Random = ({rand, lightmode}) => {

  const defineStyle = {
    backgroundColor: lightmode ? "#3b5360" : "white", 
    color: lightmode ? "white" : "black" 
  }

  return (
    <div>
      {rand.map((mew, index) => (
        
        <div key={index} className='search-meaning' style={defineStyle}>
          { mew.word && (
            <b> New Word: { mew.word }</b> 
          )}
            <br />
          { mew.definition && (
            <b> Definition: { mew.definition }</b> 
          )}
            <br />
          { mew.pronunciation && (
            <b> Pronunciation: { mew.pronunciation }</b> 
          )}
            <br />
        </div>
      ))}
      {/* {console.log(rand)} */}
    </div>
  )
}

export default Random