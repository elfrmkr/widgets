/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/search';
import Dropdown from './components/dropdown';
import Translate from './components/translate';


const options = [
    {
        label: 'Red',
        color: 'red'
    },
    {
        label: 'Blue',
        color: 'blue'
    },
    {
        label: 'Green',
        color: 'green'
    }
];
const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setshowDropdown] = useState(true);

    return (
      <div>
      <button 
      onClick={() => setshowDropdown(!showDropdown)}
      style = {{color: `${selected.color}`}}>
      Toggle Dropdown</button>
        { showDropdown ? 
          <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
          style = {{color: `${selected.color}`}}
        /> : null
        }
        <div className = " ui container"><Translate/></div>
      </div>
    );
  };
  export default App;