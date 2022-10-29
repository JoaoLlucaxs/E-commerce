import React,{useState} from 'react'
import Head from '../../components/Head/Head';
import {Container,Row,Col,Form,FormGroup} from 'reactstrap'
import {Link,useNavigate} from 'react-router-dom'
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'
import {setDoc,doc} from 'firebase/firestore'
import {auth,storage,db} from '../../firebase/firebase.config';
import {toast} from 'react-toastify'


function Logout() {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')
  const[file,setFile]=useState(null)
  const[loading,setLoading]=useState(false)
  const navigate=useNavigate()

  const signup=async(e)=>{
    setLoading(true)
    e.preventDefault();

    try{
      const userCredential= await createUserWithEmailAndPassword(auth,
        email,
        password);

      const user=userCredential.user

      const storageRef=ref(storage,`images/${Date.now() + name}`)
      const uploadTask=uploadBytesResumable(storageRef,file)
     uploadTask.on((error)=>{
      toast.error(error.message)
     },()=>{
      getDownloadURL(uploadTask.snapshot.ref)
      .then(async(downloadURL)=>{
        await updateProfile(user,{
          displayName:name,
          photoURL:downloadURL
        });

        await setDoc(doc(db,'users',user.uid),{
          uid:user.uid,
          displayName:name,
          email,
          photoURL:downloadURL

        })
      })
     })
     setLoading(false)
     toast.success('Conta criada com sucesso!')
     navigate('/login')
    }catch(err){
      setLoading(false)
      toast.error('Ocorreu um erro verifique');
      console.error(err);
    }
  }

  return (
    <div>
      <Head title='Cadastre-se'/>
      <Container>
        <Row>
          {loading ? <Col lg='12' className='text-center'>
            <h6 className='fw-bold'>Carregando...</h6>
          </Col>:<Col lg='6' className='m-auto text-center'>
            <h3 className='text fw-bold mb-4'>Registre-se</h3>
            <Form className='auth_form' onSubmit={signup}>
            <FormGroup className='form_group'>
                <input type='text' name='' placeholder='Insira seu nome'
                value={name} onChange={(e)=>setName(e.target.value)}/>
              </FormGroup>
              <FormGroup className='form_group'>
                <input type='email' name='' placeholder='Digite seu email'
                value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </FormGroup>
              <FormGroup className='form_group'>
                <input type='password' name='' placeholder='Informe sua senha'
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </FormGroup>
              <FormGroup className='form_group'>
                <input type='file' onChange={(e)=>setFile(e.target.files[0])}/>
              </FormGroup>
              <button type='submit' className='buy_btn auth_btn'>Entrar</button>
              <p>Já possui conta? <Link to='/login'>Entrar</Link></p>
            </Form>
          </Col>}
          
        </Row>
      </Container>
    </div>
  )
}

export default Logout;