import React from 'react';
import './signup.css';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import axios from 'axios';

class SignUp extends React.Component {

  state = {
    name:'',
    email: '',
    password: '',
    errorMsg: null
  }
  
  cadastrar = async () => {
      await axios
      .post('http://localhost:8080/api/user', {
       name: this.state.name,
       email:  this.state.email,
       password: this.state.password 
      }).then(response => {
     toast.success('Usuário cadastrado! Faça o Login')
     this.props.history.push('/signin')
   }).catch(error => {
   toast.error(error.response.data)
   })
  
  }

  render(){
 return (
    <div className="container-center">
    <Header/>
    <div className='pg-login'>
  <div className="login">
    <div className="login-area">
    <h3> 走</h3>
    </div>
    <form>
      <h1>Cadastro</h1>
      <input type="text" placeholder="Seu nome" required value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
      <input type="text" placeholder="email@email.com" required value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
      <input type="password" placeholder="*******" required  value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
      <button type="button" onClick={this.cadastrar} >Enviar</button>
    </form>  
   <Link to='/signin'>Já tem conta? Faça o LogIn</Link>
   
  </div>
</div>
</div>
 );
  }
}
export default SignUp;