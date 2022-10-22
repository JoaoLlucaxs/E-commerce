import React from 'react'
import {Link} from 'react-router-dom'
import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap'
import Logo from '../../image/Varejo_logo.png'

function Footer() {

  const copy=new Date().getFullYear();

  return (
    <footer className='foot'>
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
            <div className='logo_commerce'>
              <img src={Logo} alt=''/>
              <div>
                <h1>Varejos</h1>
            </div>
            </div>
            <p className='mt-3'>Compre com total custo beneficios, sem sair de casa
              frete grátis e segurança total
            </p>
          </Col>
          <Col lg='3' md='3' className='mb-4'>
            <div className='link'>
              <h3 className='link_text'>Categorias</h3>
              <ListGroup className='mb-0'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/'>Celulares</Link>
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/'>Sofás</Link>
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/'>Poltronas</Link>
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/'>Watch</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2' md='3' className='mb-4'>
            <div className='link'>
              <h3 className='link_text'>Acesse</h3>
              <ListGroup className='mb-0'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Loja</Link>
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Carrinho</Link>
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Politica de Privacidade</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='4'>
          <div className='link'>
          <h3 className='link_text'>Contato</h3>
              <ListGroup className='mb-0 contact'>
                <ListGroupItem className='ps-0 border-0 d-flex
                align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>Botafogo,45</p>
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0 d-flex
                align-items-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>+55 219438434</p>
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0 d-flex
                align-items-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  <p>varejo12@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
              </div>
          </Col>

          <Col lg='12'>
            <p className='copy_write'>Copyright {copy} - João Queiroz</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer