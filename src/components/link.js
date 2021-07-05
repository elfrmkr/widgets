import React from 'react';

const Link = ({className, href, children}) => {

const onClick = (event) => {
if(event.metaKey || event.ctrlKey){
    return
};
 event.preventDefault();
 // updating url without changing the page
 window.history.pushState({}, ',',href);
// communicate with routo components tat url just changed
 const navEvent = new PopStateEvent('popstate');
 window.dispatchEvent(navEvent);
};
    return(
        <a onClick = {onClick}
        className = {className}
        href = {href}
        >{children}</a>
    );
};

export default Link;