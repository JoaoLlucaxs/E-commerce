import React,{useState} from 'react'
import {Container,Col,Row} from 'reactstrap'
import {useParams} from 'react-router-dom'
import products from '../../data/products'
import Head from '../../components/Head/Head'
import CommonSection from '../../components/Ui/CommonSection'
import {motion} from 'framer-motion'

function ProductDetails() {
    const[tab,setTab]=useState('desc')
    const[ratin,setRatin]=useState(null)
    const {id}=useParams()
    const product=products.find(item => item.id === id)

    const {
        imgUrl,
        productName,
        price,
        avgRating,
        reviews,
        description,
        shortDesc,
        category
    }=product;

    const relateProducts=products.filter(item=> item.category === item.category)

  return (
    <>
    <Head title={productName} description='Detalhe do produto'/>
    <CommonSection/>

    <section className='pt-0'>
        <Container>
            <Row>
                <Col lg='6'>
                    <img src={imgUrl} alt=''/>
                </Col>

                <Col lg='6'>
                    <div className='product_detail'>
                        <h2>{productName}</h2>
                        <div className='product_rt d-flex align-items-center gap-5
                        mb-4'>
                        <div>
                        <span onClick={()=>setRatin(1)}>
                            <i class="ri-star-fill"></i>
                        </span>
                        <span onClick={()=>setRatin(2)}>
                            <i class="ri-star-fill"></i>
                        </span>
                        <span onClick={()=>setRatin(3)}>
                            <i class="ri-star-fill"></i>
                        </span>
                        <span onClick={()=>setRatin(4)}>
                            <i class="ri-star-fill"></i>
                        </span>
                        <span onClick={()=>setRatin(5)}>
                            <i class="ri-star-fill"></i>
                        </span>
                    </div>
                    <p>(<span>{avgRating}</span>-Avaliações)</p>
                    </div>
                    <span className='price_produ'> R$ {price}</span>
                    <p className='mt-3'>{shortDesc}</p>
                    <motion.button whileTap={{scale:1.2}} className='btn'>Adicionar ao carrinho</motion.button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <div className='tab_wrap d-flex align-items-center gap-5'>
                        <h5 className={`${tab === 'desc' ? 'active' : ''}`} onClick={()=>setTab('desc')}>Description</h5>
                        <h5 className={`${tab === 'rev' ? 'active' : ''}`} onClick={()=>setTab('rev')}>Review ({reviews.length})</h5>
                    </div>
                    {
                        tab ==='desc'? <div className='tb-content mt-5'>
                        <p>{description}</p>
                    </div>:(
                        <div className='review-product'>
                            <div className='review_wp mt-5'>
                                <ul>
                                    <h4>João</h4>
                                    {reviews.map((item,index)=>(
                                        <li key={index} className='mb-4'>
                                            <span>{item.rating}</span>
                                            <p>{item.text} (classificação)</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className='form'>
                                    <form action=''>
                                        <h4>Deixe sua experiência</h4>
                                        <div className='form-g'>
                                            <input type='text' placeholder='Insira seu nome'/>
                                        </div>
                                        <div className='form-g d-flex align-items-center gap-5'>
                                        <span>
                                        1<i class="ri-star-fill"></i>
                                        </span>
                                        <span>
                                        2<i class="ri-star-fill"></i>
                                        </span>
                                        <span>
                                        3<i class="ri-star-fill"></i>
                                        </span>
                                        <span>
                                        4<i class="ri-star-fill"></i>
                                        </span>
                                        <span>
                                        5<i class="ri-star-fill"></i>
                                        </span>
                                        </div>

                                        <div className='form-g'>
                                            <textarea rows={4} type='text' placeholder='Deixe sua mensagem'/>
                                        </div>
                                        <button className='btn_message'>Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                    }
                   
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default ProductDetails