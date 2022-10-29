import React from 'react'
import {Container,Row,Col,Form,FormGroup} from 'reactstrap'
import Head from '../../components/Head/Head';
import CommonSection from '../../components/Ui/CommonSection';
import {useSelector} from 'react-redux'

function Checkout() {
  const totalQtd=useSelector(state=>state.cart.totalQuantity)
  const totalAmount=useSelector(state=>state.cart.totalAmount)

  return (
    <div>
      <Head title='Confira'/>
      <CommonSection title='Confira'/>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h5 className='mb-4 fw-bold'>Informações de pagamento</h5>
              <Form className='form_container'>
                <FormGroup className='form_group'>
                  <input type='text' placeholder='Insira seu nome'/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='email' placeholder='Insira seu E-mail'/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='number' placeholder='Informe seu telefone'/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='number' placeholder='Informe seu endereço'/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='number' placeholder='Informe sua cidade'/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='number' placeholder='Informe seu código postal'/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='number' placeholder='País'/>
                </FormGroup>
              </Form>
            </Col>

            <Col lg='4'>
              <div className='checkout_cart'>
                <h5>Total Qty :<span>$ {totalQtd} items</span></h5>
                <h5>Subtotal :<span>$ {totalAmount}</span></h5>
                  <span>Envio : <br/> Grátis</span><span>$30</span>
                <h4>Custo Total <span>$ {totalAmount}</span></h4>
                <button className='buy_btn auth_btn w-100'>Encomende</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Checkout