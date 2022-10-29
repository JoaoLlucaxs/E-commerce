import Head from '../../components/Head/Head';
import Common from '../../components/Ui/CommonSection';
import {Container,Row,Col} from 'reactstrap'
import {motion} from 'framer-motion'
import {cartActions} from '../../redux/slices/cartSlice'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';

function Cart() {

  const cartItems=useSelector(state=>state.cart.cartItems)
  const totalAmount=useSelector(state=>state.cart.totalAmount)
  return (
    <div>
      <Head title='Carrinho' description='Carrinho de compra'/>
      <Common title='Finalizar Compra'/>
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {cartItems.length ===0 ? <h2 className='fs-4 text-center'>Não há item no Carrinho</h2>:(
                 <table className='table border'>
                 <thead>
                   <tr>
                     <th>Image</th>
                     <th>Titulo</th>
                     <th>Preço</th>
                     <th>Qtd</th>
                     <th>Delete</th>
                   </tr>
                 </thead>
                 <tbody>
                   {cartItems.map((item,index)=>(
                    <Tr item={item} key={index}/>
                   ))}
                 </tbody>
               </table>
              )}
           
            </Col>
            <Col lg='3'>
             <div>
              <h5 className='d-flex align-items-center justify-content-between'>
                Subtotal
                </h5>
                <span className='fs-4 fw-bold'>R$ {totalAmount}</span>
              
            </div>
            <p>Impostos e frete serão calculados no checkout</p>
            <div>
              <button className='btn_cart'><Link to='/shop'>Continue Comprando</Link></button>
              <button className='btn_cart'><Link to='/checkout'>Finalizar</Link></button>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

const Tr=({item})=>{
  const dispatch=useDispatch()

  const deleteProduct=()=>{
    dispatch(cartActions.deleteItemCart(item.id))
  }

  return  <tr>
  <td><img src={item.imgUrl} alt=''/></td>
  <td>{item.productName}</td>
  <td>R$ {item.price}</td>
  <td>{item.quantity}</td>
  <td><motion.i whileTap={{scale:1.2}} class="ri-delete-bin-fill"
  onClick={deleteProduct}></motion.i></td>
</tr>
}

export default Cart