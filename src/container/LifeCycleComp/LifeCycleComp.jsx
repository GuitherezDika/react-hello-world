import React, { Component } from 'react'
import './LifeCycleComp.scss';

class LifeCycleComp extends Component {
   constructor(props) {
      super(props)
      this.state = {
         count: 1
      }
      console.log(constructor);
   }
   
   static getDerivedStateFromProps(props, state){
      console.log('getDerivedStateFromProps');
      return null;
   }

   componentDidMount() {
      console.log('componentDidMount');
      // setTimeout( () => {
      //       this.setState({
      //          count: 2
      //       })
      //    },5000
      // )
   }

   shouldComponentUpdate(nextProps, nextState){
      console.group('shouldComponentUpdate');
      console.log('nextState', nextState);
      console.log('this state', this.state);
      console.groupEnd();
      if(nextState.count >= 5){
         return false;
      }
      return true;
   }

   getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('getSnapshotBeforeUpdate')
      return null;
   }

   componentDidUpdate(prevProps, prevState, snapshot){
      console.log('componentDidUpdate')
   }

   componentWillUnmount() {
      console.log('componentWillUnmount')
   }

   changeCount = () => {
      this.setState({
         count: this.state.count+1
      })
   }

   render() {
      return (
         <div>
            <div>
               <button className='btn' onClick={this.changeCount}>Component Button {this.state.count}</button>
            </div>
         </div>
      )
   }
}

export default LifeCycleComp
