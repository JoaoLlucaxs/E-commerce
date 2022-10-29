import React,{useState,useRef,useEffect} from 'react'
import {Container,Col,Row} from 'reactstrap'
import {useParams} from 'react-router-dom'
import products from '../../data/products'
import Head from '../../components/Head/Head'
import CommonSection from '../../components/Ui/CommonSection'
import {motion} from 'framer-motion'
import ProductsLis from '../../components/Ui/ProductsLis'
import {useDispatch} from 'react-redux'
import {cartActions} from '../../redux/slices/cartSlice'
import {toast} from 'react-toastify'

function ProductDetails() {
    const[tab,setTab]=useState('desc')
    const[ratin,setRatin]=useState(null)
    const revieUser=useRef('')
    const reviewMsg=useRef('')
    const dispatch=useDispatch();
    const {id}=useParams()
    const product=products.find(item => item.id === id)

    useEffect(()=>{
        window.scrollTo(0,0)
    },[product])

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

    const submitHand=(e)=>{
        e.preventDefault();
        const reviewUserName=revieUser.current.value;
        const reviewUserMsg=reviewMsg.current.value;

       const reviewObj={
        userName:reviewUserName,
        text:reviewUserMsg,
        ratin
       };
       console.log(reviewObj)
       toast.success('Comentário realizado')
    }
    
    const addToCart=()=>{
        dispatch(cartActions.addItem({
            id,
            image:imgUrl,
            productName,
            price,

        }))
        toast.success('Adicionado com sucesso!')
    }

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
                        <motion.span whileTap={{scale:1.2}} onClick={()=>setRatin(1)}>
                            <i class="ri-star-fill"></i>
                        </motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=>setRatin(2)}>
                            <i class="ri-star-fill"></i>
                        </motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=>setRatin(3)}>
                            <i class="ri-star-fill"></i>
                        </motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=>setRatin(4)}>
                            <i class="ri-star-fill"></i>
                        </motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=>setRatin(5)}>
                            <i class="ri-star-fill"></i>
                        </motion.span>
                    </div>
                    <p>(<span>{avgRating}</span>-Avaliações)</p>
                    </div>

                    <div className='d-flex align-items-center gap-5'>
                    <span className='price_produ'> R$ {price}</span>
                    <span>Categoria : {category}</span>
                    </div>
                    <p className='mt-3'>{shortDesc}</p>
                    <motion.button whileTap={{scale:1.2}} className='btn'onClick={addToCart}>
                        Adicionar ao carrinho
                    </motion.button>
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
                                            <input type='text' placeholder='Insira seu nome'
                                            ref={revieUser}
                                            required/>
                                        </div>
                                        <div className='form-g d-flex align-items-center gap-5 rating_g'>
                                        <span>
                                        <i class="ri-star-fill"></i>
                                        </span>
                                        <span>
                                        <i class="ri-star-fill"></i>
                                        </span>
                                        <span>
                                        <i class="ri-star-fill"></i>
                                        </span>
                                        <span>
                                        <i class="ri-star-fill"></i>
                                        </span>
                                        <span>
                                        <i class="ri-star-fill"></i>
                                        </span>
                                        </div>

                                        <div className='form-g'>
                                            <textarea rows={4} type='text' placeholder='Deixe sua mensagem'
                                            ref={reviewMsg} required/>
                                        </div>
                                        <button className='btn_message' onClick={submitHand}>Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                    }
                   
                </Col>
                <Col lg='12 mt-5'>
                    <h2 className='related'>Você também pode gostar</h2>
                </Col>
                <ProductsLis data={relateProducts}/>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default ProductDetails