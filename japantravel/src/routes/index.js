import React from 'react';
import { Switch}  from 'react-router-dom';
import  Route  from './Route';
import Home from '../pages/Home';
import Destinations from '../pages/Destinations';
import Promotions from '../pages/Promotions';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Carrinho from '../pages/Carrinho';
import AddTicket from '../pages/Promotions/AddTicket';
import cadastro from '../pages/Promotions/cadastro';


export default function Routes() {
 return (
   <div>
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/destinations' component={Destinations}/>
        <Route path='/promotions' component={Promotions}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/carrinho' component={Carrinho}/>
        <Route path='/cadastro' isPrivate component={cadastro}/>
        <Route path='/add-tickets/:id' isPrivate component={AddTicket}/>
    </Switch>
   </div>
 );
}