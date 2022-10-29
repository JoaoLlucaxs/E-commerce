import React,{useState} from 'react'
import Head from '../../components/Head/Head';
import {Container,Row,Col,Form,FormGroup} from 'reactstrap'
import {Link} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase/firebase.config'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'

function Login() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')
  const[loading,setLoading]=useState(false)
  const navigate=useNavigate();


  const sigIn=async (e)=>{
    e.preventDefault()
    setLoading(true);

    try{

      const credential= await signInWithEmailAndPassword(auth,
        email,
        password);
      const user=credential.user
      console.log(user)
      setLoading(false);
      toast.success('Você está logado!')
      navigate('/checkout');

    }catch(err){
      setLoading(false);
      toast.error(err.message)
    }
  }

  return (
    <div>
      <Head title='Faça login'/>
      <Container>
        <Row>
          {loading ? <Col lg='12'><h4>Carregando..</h4></Col>:(
             <Col lg='6' className='m-auto text-center'>
             <h3 className='text fw-bold mb-4'>Login</h3>
             <Form className='auth_form' onSubmit={sigIn}>
               <FormGroup className='form_group'>
                 <input type='email' name='' placeholder='Digite seu email'
                 value={email} onChange={(e)=>setEmail(e.target.value)}/>
               </FormGroup>
               <FormGroup className='form_group'>
                 <input type='password' name='' placeholder='Informe sua senha'
                 value={password} onChange={(e)=>setPassword(e.target.value)}/>
               </FormGroup>
               <button type='submit' className='buy_btn auth_btn'>Entrar</button>
               <p>Não possui conta? <Link to='/logout'>Crie agora</Link></p>
             </Form>
           </Col>
          )}
         
        </Row>
      </Container>
    </div>
  )
}

export default Login