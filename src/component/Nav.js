import React, { Component } from 'react';
import lightning from './Images/lightning.png';

import { Squash as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';


export default class Nav extends Component {
    constructor(){
      super();
      this.state={
        sidebar:false,
        cnt:'in',
        cntbar:false
      }
    }

    hide=()=>{
      this.setState({
        sidebar:false
      })
    }

    chnge1=()=>{
     
        this.setState({cnt:'in',
      cntbar:false})
    
    }
    chnge2=()=>{
     
      this.setState({cnt:'us',
    cntbar:false})

  
  }
    toggle=()=>{
      this.setState({
        cntbar:!this.state.cntbar
      })
    }


    upd=()=>{
     this.setState({
      sidebar:!this.state.sidebar,
     })
    }
    render(props) {
   

    
    return (
      <>
        <div className="fixed top-0 bg-gradient-to-r from-indigo-200 to-white text-black w-full z-30 flex items-center justify-between ">
          <div className="mx-3" onClick={this.upd}>
            <Hamburger size={40} toggled={this.state.sidebar?true:false}></Hamburger>
          </div>
          <div className="container mx-auto ">
            <nav className="flex justify-between items-center mx-4 py-2 h-24 ">
              <div className="flex items-center justify-between gap-4">
                <div className="flex  items-center justify-between">
                  <img className=" h-4/5 w-10" src={lightning} alt=""></img>
                  <p className="font-bold text-xl">News-Strike </p>
                </div>
              </div>

             
            </nav>
          </div>
          <div >
                  <button className='bg-indigo-500 border-2 border-black rounded-full h-10 w-32 text-center text-white text-lg  mx-2 hover:opacity-80' onClick={this.toggle}>Country:{this.state.cnt}</button>
                </div>
        </div>
        <div
          className={`${
            this.state.sidebar ? "flex" : "hidden"
          } flex-col bg-gradient-to-tr from-indigo-500 to-white z-20  left-0 h-full w-44 fixed border-r-black border-r-2 top-24 font-bold text-xl gap-4 p-4`}
        >
          <div className=" border-b-2 border-b-black my-2 ">
            <Link to={`/${this.state.cnt}/business`} onClick={this.hide}>Business</Link>
          </div>
          <div className="border-b-2 border-b-black my-2 ">
            <Link to={`/${this.state.cnt}/entertainment`} onClick={this.hide}>Entertainment</Link>
          </div>
          <div className="border-b-2 border-b-black my-2 ">
            <Link to={`/${this.state.cnt}/general`}onClick={this.hide}>General</Link>
          </div>
          <div className="border-b-2 border-b-black my-2 ">
            <Link to={`/${this.state.cnt}/health`} onClick={this.hide}>Health</Link>
          </div>
          <div className="border-b-2 border-b-black my-2 ">
            <Link to={`/${this.state.cnt}/science`} onClick={this.hide}>Science</Link>
          </div>
          <div className="border-b-2 border-b-black my-2 ">
            <Link to={`/${this.state.cnt}/sports`} onClick={this.hide}>Sports</Link>
          </div>
          <div className="border-b-2 border-b-black my-2 ">
            <Link to={`/${this.state.cnt}/technology`} onClick={this.hide}>Technology</Link>
          </div>
        </div>
        <div className={`${this.state.cntbar?'flex':'hidden'} flex-col fixed top-20 p-2 items-center justify-center z-50 right-3 w-28 bg-indigo-500 gap-2 rounded-md text-lg font-bold text-white`}>
          <div onClick={this.chnge1}  className="border-b-2 border-b-white "><Link to="/in">India</Link></div>
          <div onClick={this.chnge2} className="border-b-2 border-b-white "><Link to="/us">USA</Link></div>
        </div>
      </>
    );
  }
}
