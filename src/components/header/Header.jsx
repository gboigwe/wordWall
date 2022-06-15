import { createMuiTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react'
import categories from '../../data/category'

import "./Header.scss";

const Header = ({ category, setCategory, word, setWord, lightmode }) => {

  const darkTheme = createMuiTheme ({
    palette: {
      primary: {
        main: lightmode ? "#495057" : "#adb5bd",
      },
      type: lightmode ? "light" : "dark",
    },
  });

  const handleChange = (language) => {
    setCategory(language);
  }

  return (
    <div className='header'>
        <div className='title'>{word ? word :"WORD WALL"}</div>
      <div className='search-word' >
        <ThemeProvider theme={darkTheme} >
          <TextField
          className='search'
          label="Word Searcher"
          // label="Standard" 
          value={word}
          onChange={(e)=> setWord(e.target.value)}
          />
          <TextField
            className='select'
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label} >{option.value}</MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Header