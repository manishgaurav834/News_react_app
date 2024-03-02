import React, { Component } from 'react';
import Not_f from './Images/not_f.webp';

export default class newsitem extends Component {
   
    render() {
    let {imgUrl,title,des,Url}=this.props;

   
    return (
        <>
        <div>
        <div className="flex flex-col container mx-auto gap-2 border-2 border-black p-4 hover:scale-105">
       <div><img className=" object-contain"src={(imgUrl)?imgUrl:Not_f} alt=""/></div>     
       <div><p className="font-bold">{`${(title)?title:""}...`}</p></div>
       <div className="hidden sm:block"><p>{`${(des)?(des.length<50)?des:des.slice(0,50):""}...`}</p></div>
       <div><a href={Url} target="_blank" rel="noreferrer"><button   className="bg-blue-500 text-white font-bold border-2 border-black rounded-full h-10 w-24 sm:w-36 hover:opacity-80 ">Read More</button></a></div>
       </div>
       </div>
       </>
    )
  }
}
