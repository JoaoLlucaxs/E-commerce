import React,{useState} from 'react'
import CommonSection from '../../components/Ui/CommonSection'
import Head from '../../components/Head/Head'
import {Row,Col, Container} from 'reactstrap';
import products from '../../data/products';
import ProductList from '../../components/Ui/ProductsLis'

function Shop() {
  const[productsDat,setProducts]=useState(products)

  const filterSearch=(e)=>{
    const filterValue=e.target.value;

    if(filterValue === "sofa"){
      const filterProducts=products.filter(item => item.category === 'sofa')
      
      setProducts(filterProducts)

    }else if(filterValue === 'mobile'){
      const filterProducts=products.filter(item => item.category === 'mobile')
      setProducts(filterProducts)
    }else if(filterValue === 'chair'){
      const filterProducts=products.filter(item => item.category === 'chair')
      setProducts(filterProducts)
    }else if(filterValue === 'watch'){
      const filterProducts=products.filter(item => item.category === 'watch')
      setProducts(filterProducts)
    }else if(filterValue === 'wireless'){
      const filterProducts=products.filter(item => item.category === 'wireless')
      setProducts(filterProducts)
    }
  }

  const handleSearch=(e)=>{
    const searchDigit=e.target.value;

    const searchProduct=products.filter(item=>item.productName.toLowerCase()
    .includes(searchDigit.toLowerCase()));

    setProducts(searchProduct)
  }

  return (
   <>
   <Head title='Carrinho' description='Finalização de compra'/>
   <CommonSection title='Produtos'/>

   <section>
    <Container>
      <Row>
        <Col lg='3' md='6'>
          <div className='filter_widget'>
            <select onChange={filterSearch}>
            <option>Categorias</option>
              <option value='sofa'>Sofás</option>
              <option value='mobile'>Celulares</option>
              <option value='chair'>Poltronas</option>
              <option value='watch'>Relógios</option>
              <option value='wireless'>Fones sem fio</option>
            </select>
          </div>
        </Col>
        <Col lg='3' md='12' className='text-end'>
        <div className='filter_widget'>
            <select name='' id=''>
            <option>Ordenar Por:</option>
              <option value='ascending'>Ascendentes</option>
              <option value='descending'>Descendentes</option>
            </select>
          </div>
        </Col>
        <Col lg='6' md='6'>
          <div className='search_bx'>
            <input type='text' placeholder='Busque...' onChange={handleSearch}/>
            <span><i class="ri-search-line"></i></span>
          </div>
        </Col>
      </Row>
    </Container>
   </section>

   <section>
    <Container>
      <Row>
        {productsDat.length === 0?<h1 className='text-center fs-4'>Nenhum produto encontrado</h1>
          :<ProductList data={productsDat}/>
       }
      </Row>
    </Container>
   </section>
   </>
  )
}

export default Shop