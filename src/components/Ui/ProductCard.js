import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion';
import {Col} from 'reactstrap'
import {useDispatch} from 'react-redux'
import {cartActions} from '../../redux/slices/cartSlice'
import {toast } from 'react-toastify';


function ProductCard({item}) {
    const dispatch=useDispatch()

    const addinCart=()=>{
        dispatch(cartActions.addItem({
            id:item.id,
            productName:item.productName,
            price:item.price,
            imgUrl:item.imgUrl,

        }))
        toast.success('Item adicionado ao Carrinho')
    }
   
  return (
    <Col lg='3' md='4'>
    <div className='product_items mb-2'>
        <div className='producut_img'>
        <Link to={`/shop/${item.id}`}>
            <motion.img whileHover={{scale:0.9}} src={item.imgUrl} alt='Armchair'/>
            <div className='p-2 product_information'>
            <h3 className='name_product'>
                {item.productName}
            </h3>
            <span className='center_txt d-block'>
            </span>
            </div>
            </Link>
            <div className='card_btn d-flex align-items-center
            justify-content-between'>
                <span className='price'>R$ {item.price}</span>
                <motion.span whileTap={{scale:1.1}} onClick={addinCart}>
                    <i class="ri-heart-add-line"></i>
                </motion.span>
            </div>
        </div>
    </div>
    </Col>
  )
}

export default ProductCard