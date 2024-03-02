import './App.css';
import Nav from './component/Nav';
import React, { Component } from 'react'
import News from './component/News';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';




export default class App extends Component {
   

  api_key = process.env.REACT_APP_API;
  

  constructor(){
    super();
    this.state={
      country:'in',
      category:'general'
    
    }
    console.log(this.api_key)
  }

 
  
  router = createBrowserRouter([
    {path:'/',element:<><Nav cnt='in' /><News key='/' cnt='in' category='general' api={this.api_key}/></>},
    {path:'/in',element:<><Nav cnt='in' /><News key='in' cnt='in' category='general' api={this.api_key}/></>},
    {path:'/us',element:<><Nav cnt='us'/><div ><News key='us' cnt='us'category='general' api={this.api_key}/></div></>},
    {path:'/in/business',element:<><Nav cnt='in'/><News key='in/bis' cnt='in' category='business' api={this.api_key}/></>},
    {path:'/in/sports',element:<><Nav cnt='in'/><News key='in/sports' cnt='in' category='sports' api={this.api_key}/></>},
    {path:'/in/entertainment',element:<><Nav cnt='in'/><News key='in/entertainment' cnt='in' category='entertainment' api={this.api_key}/></>},
    {path:'/in/science',element:<><Nav cnt='in'/><News key='in/science' cnt='in' category='science' api={this.api_key}/></>},
    {path:'/in/general',element:<><Nav cnt='in'/><News key='in/general' cnt='in' category='general' api={this.api_key}/></>},
    {path:'/in/health',element:<><Nav cnt='in'/><News key='in/health' cnt='in' category='health'/></>},
    {path:'/in/technology',element:<><Nav cnt='us'/><News key='us/technology' cnt='us' category='technology' api={this.api_key}/></>},
    {path:'/us/business',element:<><Nav cnt='us'/><News key='us/bis' cnt='us' category='business' api={this.api_key}/></>},
    {path:'/us/sports',element:<><Nav cnt='us'/><News key='us/sports' cnt='us' category='sports' api={this.api_key}/></>},
    {path:'/us/entertainment',element:<><Nav cnt='us'/><News key='us/entertainment' cnt='us' category='entertainment' api={this.api_key}/></>},
    {path:'/us/science',element:<><Nav cnt='us'/><News key='us/science' cnt='us' category='science' api={this.api_key}/></>},
    {path:'/us/general',element:<><Nav cnt='us'/><News key='us/general' cnt='us' category='general' api={this.api_key}/></>},
    {path:'/us/health',element:<><Nav cnt='us'/><News key='us/health' cnt='us' category='health' api={this.api_key}/></>},
    {path:'/us/technology',element:<><Nav cnt='us'/><News key='us/technology' cnt='us' category='technology' api={this.api_key}/></>}
  ])
  render() {
    return (
       
        <>
        
        <RouterProvider router={this.router}/>
        </>

        
        
    )
  }
}

