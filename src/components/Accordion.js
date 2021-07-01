import React, {useState} from 'react'; // use state func is a hook

/* hooks state system will help us to determine which one of the components should expand
in class method we can easily define states and use them but with hooks, we can use the state also with functional components
*/ 
const Accordion = ({items}) => {
    
    // this is not array, this is giving reference to elements. First element is like state, second is a function that updates the state
    //useState takes one argument, the default value
    // names are not special
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = index => {
        setActiveIndex(index);
    };
    const renderedItems = items.map((item, index) => {
        return (<React.Fragment key = {item.title}>
            <div 
            className = "title active"
            onClick = {() => onTitleClick(index)}>
                <i className = "dropdown icon"></i>
                {item.title}
            </div>
            <div className = "content active">
                <p>{item.content}</p>
            </div>
        </React.Fragment>)
    })
    return(
       <div className = "ui styled accordion">
           {renderedItems}
           <h1>{activeIndex}</h1>
       </div>
    );
};
export default Accordion;