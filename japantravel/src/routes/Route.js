import {Route, Redirect} from 'react-router-dom';
import React from 'react';

export default function RouteWrapper({
component : Component,
isPrivate,
...rest
}) {
const loading = false;
const signed = true;

if(loading){
    <div>
 
    </div>
}

if(!signed && isPrivate){
    return <Redirect to='/signin' />
}


else{
    <Route {...rest}
    render={props => (
        <Component {...props} />
    )}
    />
}

    return(
        <Route {...rest}
        render={props => (
            <Component {...props} />
        )}
        />
    )
}