import { createTheme, MenuItem, TextField, ThemeProvider } from '@mui/material';
import React from 'react'
import categories from '../../data/category'

import "./Header.scss";

const Header = ({ category, setCategory, word, setWord, lightmode }) => {

  const darkTheme = createTheme ({
    palette: {
      primary: {
        main: lightmode ? "#495057" : "#c5d0db",
      },
      type: lightmode ? "light" : "dark",
    },
  });

  const handleChange = (language) => {
    setCategory(language);
  }

  return (
    <div  className='header'>
        <div className='title'>{word ? word :"WORD WALL"}</div>
      <div className='search-word' >
        <ThemeProvider theme={darkTheme} >
          <TextField
          className='search'
          label="Word Searcher"
          // label="Standard" 
          value={word}
          onChange={(e)=> setWord(e.target.value)}
          style={{ backgroundColor: "white" }}
          />
          <TextField
            className='select'
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            style={{ backgroundColor: "white" }}
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