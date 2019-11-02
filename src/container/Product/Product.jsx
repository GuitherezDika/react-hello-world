import React, {Component, Fragment} from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
   state = {
      order: 3
   }

   handleCounterChange = (newValue) => {
      this.setState ({
         order: newValue
      })
   }

   render () {
      return (
         <Fragment>
            <div className='header'>
               <div className='logo'>
                  {/* <img src='https://etanee.id/img/content/img_ayam.jpg' alt='gambar 1'/> */}
               </div>
               <div className='troley'>
                  {/* <img src='https://etanee.id/img/content/img_sapi.jpg' alt='gambar 2'/> */}
                  <div className='count'>{this.state.order}</div>
               </div>
            </div>
            <CardProduct onCounterChange = {(value) => this.handleCounterChange(value)}/>
         </Fragment>
      )
   }
}

export default Product;