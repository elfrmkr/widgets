import React , {useState, useEffect} from 'react';
import axios from 'axios';

/* functional components don't have an access to lifecycle components 
useEffect hooks will provide something similar to lifecycle methods
 */
const Search = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
  
    console.log(results);
  // first argument always a function, second argument controls when the code is executed: array with arguments, empty array or nothing

  /*
  [] -> run at initial render,
  ...nothing _> run at initial render -> run after every rerender
  [data] run at initial render -> run after every rerender if data has changed since the last rerender
  */
 // we cannot mark the function that we pass in useEffect as async function
 //    (async () => {
//         await axios.get('r434');
//     })(); // this defines a function and then immidiately invokes it or just a const async func
    useEffect(() => {
      const search = async () => {
        const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: term,
          },
        });
  
        setResults(data.query.search);
      };

    setTimeout(() => {
        if(term){ search();}
    }, 500);

    }, [term]);

    const renderedResults = results.map((result) => {

        return (
            <div key = {result.pageid} className = "item">
              <div className = "right floated content">
                  <a 
                  className = "ui button"
                  href = {`https://en.wikipedia.org?curid=${result.pageid}`}
                  >
                  Go
                  </a>
              </div>
                <div className = "content">
                    <div className = "header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML = {{__html:result.snippet}}/>
                </div>
            </div>
        )
    });

    return ( 
    <div className = "ui form">
        <div className = "field">
            <label> Enter Search Term </label>
            <input 
            className = "input"
            value = {term}
            onChange = { e=> setTerm(e.target.value)}    
            />
        </div>
     <div className = "ui celled list">
        {renderedResults}
     </div>
    </div>
    
        );
};

export default  Search;