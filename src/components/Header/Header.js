import React,{useRef,useEffect} from 'react'
import {Link,NavLink,useNavigate} from 'react-router-dom'
import {Container,Row} from 'reactstrap'
import {motion} from 'framer-motion' //motion effect in user
import Logo from '../../image/Varejo_logo.png'
import User from '../../image/user-icon.png'
import {useSelector} from 'react-redux'
import Custom_hook from '../../custom-hooks/Custom_hook'
import {signOut} from 'firebase/auth'
import {auth} from '../../firebase/firebase.config'
import { toast } from 'react-toastify'

const nav_link=[
  {
    path:'home',
    display:'Home'
  },{
    path:'shop',
    display:'Shop'
  },{
    path:'cart',
    display:'Cart'
  }
]

function Header() {

  const headerRef=useRef(null)
  const totalQuantity=useSelector(state=>state.cart.totalQuantity)
  const menuRef=useRef(null)
  const navigate=useNavigate();
  const {currentUser}=Custom_hook()
  const profileActionRef=useRef(null)

  const stickHeader=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('stick_head')
      }else{
        headerRef.current.classList.remove('stick_head')
      } 
    })
  }

  useEffect(()=>{
    stickHeader()

    return(()=>{
      window.removeEventListener('scrol',stickHeader)
    })
  })

  const mobileToggle=()=>{
    menuRef.current.classList.toggle('menu_mobile')
  }

  const navigateToCart=()=>{
    navigate('/cart')
  }

  const toggleProfileAction=()=>profileActionRef.current.classList.toggle('show_profileAction')

  const logout=()=>{
    signOut(auth).then(()=>{
      toast.success('Usuário deslogado')
    }).catch((err)=>{

    })
  }

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav_wrap'>
            <div className='logo_commerce'>
              <img src={Logo} alt=''/>
              <div>
                <h1>ATACADOS / VAREJO</h1>
              </div>
            </div>
            <div className='navigation' ref={menuRef} onClick={mobileToggle}>
              <ul className='menu_shop'>
                {
                  nav_link.map(item=>(
                    <li className='nav_link'>
                      <NavLink to={item.path}>{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
              
            <div className='nav_icons'>
              <span className='cart'onClick={navigateToCart}>
              <i class="ri-shopping-basket-2-line">
              <span className='badge'>{totalQuantity}</span>
              </i>
                </span>
                
                
              <motion.img whileTap={{scale:1.2}} src={currentUser? currentUser.photoURL:
               User} alt='User identifier' onClick={toggleProfileAction}/> 
            </div>
            <div className='profile_acts'>
                {
                  currentUser && <span className='act' onClick={logout}>Sair</span> 
                  
                }
            </div>

            <div className='menu_mobile'>
              <span onClick={mobileToggle}><i class="ri-menu-3-line"></i></span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header