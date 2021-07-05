/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/search';
import Dropdown from './components/dropdown';
import Translate from './components/translate';
import Route from './components/route';
import Header from './components/Header';


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

const terms = [
  {
      title: 'Red',
      content: 'red is the color of love'
  },
  {
      title: 'Blue',
      content: 'blue represents calmness'
  },
  {
      title: 'Green',
      content: 'green is nature'
  }
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
    return (
      <div>
      <Header/>
        <div className = " ui container">
         <Route path = '/'>
           <Accordion items = {terms}/>
         </Route>
         <Route path = '/list'>
           <Search/>
         </Route>
         <Route path = '/dropdown'>
           <Dropdown 
              label = "Select a color"
              options = {options}
              selected = {selected}
              onSelectedChange = {setSelected}
           />
         </Route>
         <Route path = '/translate'>
           <Translate/>
         </Route>
        </div>
      </div>
    );
  };
  export default App;