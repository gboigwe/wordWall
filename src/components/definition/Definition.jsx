import React from 'react'

import "./Definition.scss"

const Definition = ({ word, meanings, category, lightmode }) => {

  const defineStyle = {
    backgroundColor: lightmode ? "#3b5360" : "white", 
    color: lightmode ? "white" : "black" 
  }

  return (
    <div >
      <div  >
        { meanings[0] && word && category === "en" && (
          <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio } style={{ backgroundColor: lightmode ? "#000" : "#fff", borderRadius: "10px", color: "red" }} controls>Your browser does not suport audio</audio>
        )} 
          {meanings.map((psound) => (
            psound.phonetics.map((tsound) => (
              <div>
                { tsound.text && (
                  <b className='search-meaning' style={defineStyle} > Phonetic: { tsound.text }</b>
                )}
              </div>
            ))
          ))} 
          
        

      </div>
      {word === "" ? (
        <span className='search-action'>Type to search the meaning of a word</span>
      ) : (
        meanings.map((mean) => (
          mean.meanings.map((item) => (
            item.definitions.map((def) => (
              <div className='search-meaning' style={defineStyle} > <strong><b>{def.definition}</b></strong>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                { def.example && (
                  <span><b>Example: {def.example}</b></span>
                ) }
                {def.synonyms && (
                  <span>
                    <b>Synonyms: {def.synonyms.map((syn) => `${syn}, `)}
                    </b>
                  </span>
                )}
              </div>
            ))
          ))
        ))
      )}
    </div>
  )
}

export default Definition