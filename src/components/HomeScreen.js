import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from './Product';
import {listProducts} from '../actions/productActions'
import { Loader } from './Loader';
import Message from './Message';


export default function HomeSrceen() {


 const dispatch= useDispatch()

 const productList= useSelector(state => state.productList)
 
 const {loading, error,product} = productList  



    useEffect(() => {

dispatch(listProducts())
       
    }, [dispatch]);

    return (
        <div>
                        <h1 className='text-center'>Welcome to ProShop</h1>

            <h2 className="text-center">Latest Products</h2>
           
           {
               loading ? (<Loader/>) : error ? (<Message>{error}</Message>) :
(
               <Row>
                {product?.map(item => (
                    <Col sm={12} md={6} lg={4}>
                        <Product product={item}/>
                    </Col>
                )
                
                )}

                
            </Row>
            )
           }
            

               
            
        
        </div>
    )
}
