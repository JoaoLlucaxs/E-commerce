import React,{useState,useEffect} from 'react';
import Head from '../../components/Head/Head';
import {Container,Row,Col} from 'reactstrap'
import Chair from '../../image/itemhome.png'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import Services from '../../Services/services';
import ProductsLis from '../../components/Ui/ProductsLis';
import products from '../../data/products';
import Counter from '../../image/counter-timer-img.png'
import Clock from '../../components/Ui/Clock'

function Home() {
  const[featuredProducts,setFeautureP]=useState([])
  const[biggestSale,setBiggeSale]=useState([])
  const[mobileProducts,setMobileProducts]=useState([])
  const[wirellesProducts,setWirellesP]=useState([])
  const[popularProducts,setPopularP]=useState([])
  const year=new Date().getFullYear()

  useEffect(()=>{
    const filterProduct=products.filter(item=>item.category === 'chair') //chair-filter caterogry in data/products
    const filterBiggest=products.filter(item=>item.category === 'sofa') 
    const mobileProduct=products.filter(item =>item.category === 'mobile')
    const wireless=products.filter(item =>item.category === 'wireless')
    const popular=products.filter(item =>item.category === 'watch')

    setFeautureP(filterProduct)
    setBiggeSale(filterBiggest)
    setMobileProducts(mobileProduct)
    setWirellesP(wireless)
    setPopularP(popular)
  },[])

  return (
    <>
    <Head title='Home | Shooping' description='Home do e-commerce'/>
    <section className='section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='her_content'>
              <p className='her_subtitle'>Produto de tendência em {year}</p>
              <h2>Torne seu interior mais sofisticado & moderno</h2>
              <p>Produto a base 100% de certeza que irá dar certo, experimente já</p>
              <motion.button whileTap={{scale:1.2}} className='btn'><Link to='shop'>Compre Agora</Link></motion.button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className='her_img'>
              <img src={Chair} alt='Chair minimalist'/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services/>

    <section className='products'>
      <Container>
        <Row>
          <Col lg='12' className='txt_center'>
            <h2 className='section_title'>Produtos em Alta</h2>
          </Col>
          <ProductsLis data={featuredProducts}/>
        </Row>
      </Container>
    </section>

    <section className='best_sales'>
    <Container>
        <Row>
          <Col lg='12' className='txt_center'>
            <h2 className='section_title'>Melhores Vendas</h2>
          </Col>
          <ProductsLis data={biggestSale}/>
        </Row>
      </Container>
    </section>

    <section className='count_temp'>
      <Container>
        <Row>
          <Col lg="6" md="12" className='countD-col'>
            <div className='limit_clock'>
              <h3 className='fs-6 mb-2'>Oferta Limitada!</h3>
              <h4 className='mb-3'>Alta Qualidade</h4>
            </div>
            <Clock/>
            <motion.button whileTap={{scale:1.2}} className='btn_buy'><Link to='/shop'>Veja Agora</Link></motion.button>
          </Col>

          <Col lg="6" md="12" className='text counter_img'>
            <img src={Counter} alt='counter'/>
          </Col>
        </Row>
      </Container>
    </section>

    <section className='new'>
    <Container>
        <Row>
          <Col lg='12' className='txt_center mb-5'>
            <h2 className='section_title'>Novos Produtos</h2>
          </Col>
          <ProductsLis data={mobileProducts}/>
          <ProductsLis data={wirellesProducts}/>
        </Row>
      </Container>
    </section>

    <section className='popular'>
    <Container>
        <Row>
          <Col lg='12' className='txt_center mb-5'>
            <h2 className='section_title'>Populares no Varejo</h2>
          </Col>
          <ProductsLis data={popularProducts}/>
        </Row>
      </Container>
    </section>
   </>
    
  )
}

export default Home