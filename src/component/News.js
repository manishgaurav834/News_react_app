import React, { Component } from 'react';
import Newsitem from './Item';
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from './loader';

export default class News extends Component {
  
    async componentDidMount(props){
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.cnt}&category=${this.props.category}&apiKey=${this.props.api}&page=1&pageSize=20`;
        let data= await fetch(url);
        let json_data=await data.json();
        this.setState({
            article:json_data.articles,
            total:json_data.totalResults,
            loading:false
            
            
        })
        console.log(url);
      
        

     }
    constructor(){
        super();
        this.state={
            article:[],
            page:1,
            total:0,
            loading:false
            

        }
    }

    loadFunc=async (props)=>{
     
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.cnt}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page+1}&pageSize=20`;
        let data= await fetch(url)
        let json_data=await data.json();
        this.setState({
            page:this.state.page+1,
            article:this.state.article.concat(json_data.articles)
           
        })
     


    }
  render() {
    
   
   

    return (
      <>
      <div className=" absolute top-16 w-full bg-indigo-300 my-5">
        <div className='my-7 container mx-auto'>
          <h1 className="font-bold text-2xl text-center my-4">Top Headlines by News-Strike</h1>
          {this.state.loading && <Loader/>}
       
        <InfiniteScroll
                dataLength={this.state.article.length}
                next={this.loadFunc}
                hasMore={this.state.article.length!==this.state.total}
                loader={<Loader/>}
            >
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 py-4">
                {this.state.article.map((element,key)=>{
                return  <div key={key}> 
                <Newsitem imgUrl={element.urlToImage} title={element.title} des={element.description} Url={element.url}/>
                </div>
               
                
            })}
            </div>
            
            </InfiniteScroll>
           
           
            
       
        {/* <div className="flex justify-between py-5 font-bold text-lg text-white">
            <button disabled={this.state.page===1} className={`h-10 w-40 border-2 border-black bg-blue-500 ${this.state.page===1?' opacity-0 ':'hover:scale-105 opacity-85'} `} onClick={prev}>Previous</button>
            <button disabled={this.state.page>=Math.ceil(this.state.total/20)} className={`${this.state.page>=Math.ceil(this.state.total/20)?'opacity-0':' hover:scale-105 opacity-85'} h-10 w-40 border-2 border-black bg-blue-500 `} onClick={nxt}>Next</button>
            
        </div> */}
        </div>
        
       </div> 
      
      </>
    )
  }
}
