import React, {useState} from 'react';
import Dropdown from './dropdown';
import Convert from './convert';
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM


const options = [
    {
      label: 'Afrikaans',
      value: 'af'   
    },
    {
      label: 'Arabic',
      value: 'ar'
    },
    {
      label: 'Hindi',
      value: 'hi' 
    },
    {
      label: 'Dutch',
      value: 'nl'
    },
    {
      label: 'Russian',
      value: 'ru'
    },
    {
      label: 'Turkish',
      value: 'tr'
    }
];
const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div style = {{marginTop: '20px'}} className = "ui form">
        <div className = "field">
            <label>Enter Text:</label>
            <input 
            type = "text"
            value = {text}
            onChange = {(e) => setText(e.target.value)}    
            />
        </div>
            <Dropdown
                label = "Select a language"
                options = {options}
                selected = {language}
                onSelectedChange = {setLanguage}
            />
          <br/>  
          <hr/>
         
           <h3 className= "ui header">Output</h3>
          <Convert 
            text = {text}
            language = {language}
          />
        </div>
    );
};

export default Translate;