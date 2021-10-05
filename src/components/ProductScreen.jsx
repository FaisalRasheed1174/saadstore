import React from 'react';
import { Link } from 'react-router-dom';
import { Row,Col, Image, ListGroup, Card, Button, ListGroupItem, FormControl } from 'react-bootstrap';
import Ratings from './Ratings';
import { match } from 'assert';
import { useDispatch,useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions.js';
import {useState,useEffect} from 'react'
import Message from './Message';
import { Loader } from './Loader';

const ProductScreen = ({history,match}) =>  {
  

   const [qty, Setqty] = useState(1);

   const dispatch = useDispatch()

   const productDetails= useSelector(state => state.productDetails)

   const {loading,error,products} = productDetails

   
   useEffect(()=>{

    dispatch(listProductDetails(match.params.id))

   },[match])
   

const addToCartHandler=()=>{
    history.push(`/cart/${match.params.id}?qty=${qty}`)
}

    return (
        
        <>
            <Link className='btn btn-dark my-3' to='/'>
                Go Back
            </Link>

{ loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message>  : 
     
     products &&
          ( 
            <Row>
                <Col md={6}>
                    <Image src={products.image} alt={products.name} fluid></Image>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{ products.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>

                            <Ratings value={products.rating} text={`${products.numReviews} reviews`}>

                            </Ratings>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price : {products.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description : {products.description}
                        </ListGroup.Item>
</ListGroup>
                </Col>

                <Col md={3} >
                    <Card>
                        <ListGroupItem variant='flush'>
                            <Row>
                                <Col>
                                    Price :
                                </Col>
                                <Col>
                                    <strong>${ products.price}</strong>
                                </Col>
                            </Row>
                            
</ListGroupItem>
                        <ListGroupItem variant='flush'>
                            <Row>
                                <Col>
                                    Status :
                                </Col>
                                <Col>
{products.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>
                            </Row>
                            
{products.countInStock > 0 && (
    <ListGroupItem>
        <Row>
            <Col>
                Qty
            </Col>
            <Col>
                <FormControl as='select' value={qty} onChange={(e)=>
                Setqty(e.target.value)}>
    

   { [...Array(products.countInStock).keys()].map(x=>(
       <option key={x+1} value={x+1}>{x+1}</option>
   ))}

                </FormControl>
            </Col>
        </Row>
    </ListGroupItem>
)}



                        </ListGroupItem>
                        <ListGroupItem>
                            <Button
                            onClick={addToCartHandler}
                             className='btn-block' type='button' disabled={products.countInStock === 0 } >
                                Add To Card
                            </Button>
                        </ListGroupItem>
                    </Card>
                </Col>
            </Row>
            )}
            </>
    )
}

export default ProductScreen
