import React, {Component} from 'react';
// import '../Product/Product.css';

class CardProduct extends Component {
   state = {
      order: 3
   }

   handleCounterChange = (newValue) => {
      this.props.onCounterChange(newValue);
   }

   handlePlus = () => {
      this.setState ({ 
         order: this.state.order + 1
      },
      () => {
         this.handleCounterChange(this.state.order)
      }
      )
   }

   handleMinus = () => {
      // console.log('minus', this)
      if(this.state.order > 0) {
         this.setState ( {
            order: this.state.order - 1
         },
         () => {
            this.handleCounterChange(this.state.order)
         }
         )
      }
   }

   render () {
      return (
         
            <div className='card'>
               <div className='img-thumb-prod'>
                  <img src='https://etanee.id/img/content/img_ikan.jpg' width='300px' alt='gambar 3'/>
               </div>
               <p className='product-title'>Daging Ayam berbumbu original plus tepung crispy [1 karton - 10 pak]</p>
               <p className='product-price'>Rp. 410,000</p>
               <div className='counter'>
                  <button className='minus' onClick={this.handleMinus}>-</button>
                  <input type='text' value={this.state.order} />
                  <button className='plus' onClick={this.handlePlus}>+</button>
               </div>
            </div>
         
      )
   }
}

export default CardProduct;