import React from 'react';
import './signin.css';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';
class SignIn extends React.Component {
 
  state = {
    email: '',
    password: '',
    errorMsg: null
  }
  entrar = async () => {
   await axios
   .post('http://localhost:8080/api/user/auth', {
    email:  this.state.email,
    password: this.state.password 
   }).then(response => {
     localStorage.setItem('user_log', JSON.stringify(response.data))
     toast.success('Bem vindo!')
     this.props.history.push('/cadastro')
   }).catch(error =>{
     this.setState({errorMsg: error.response.data})
     toast.error('Ops! Usuário não encontrado')
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
          <h1>Entrar</h1>
          <input type="text" placeholder="email@email.com" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
          <input type="password" value={this.state.password} onChange={e => this.setState({password: e.target.value})} placeholder="*******" />
         <button type='button' onClick={this.entrar}>Enter</button>
        </form>  
       <Link to='/signup'>Cadastre-se</Link>
       
      </div>
    </div>
    </div>
  );
}
}
export default SignIn;