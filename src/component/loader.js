import React, { Component } from 'react';
import Load from './Images/image.png';


export default class loader extends Component {
  render() {
    return (
      <>
      <div className='mx-3 p-2'>
      <div className=" w-full h-10 container flex items-center justify-center z-50">
        <div><img src={Load} alt="" className='h-10'></img></div>
      </div>
      </div>
      </>
    )
  }
}
