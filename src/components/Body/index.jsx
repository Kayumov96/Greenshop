import React, { Component } from 'react';
import { H, Info, Plants, Range, R, Pr, Btn, Sz, Sale } from './style';
import { categories, prices } from '../../utils/navbar';
import Off from '../../assets/imgs/Off.png';
import Supersale from '../../assets/imgs/Supersale.png'

export default class Body extends Component {
    constructor(props){
        super(props)
        this.state={
           data: categories, active: '', 
           dat: prices, activ:''
        }
    }
    render() {
        return (
            <div>
                <Info>
                   <H>Categories</H> 
                  <div className='plan'> {
                       categories.map((value)=>(
                           <Plants key={value.id}>
                               <p onClick={()=>this.setState({active: value.id})}
                               className={`${this.state.active === value.id && 'active'}`}>{value.title}</p>
                               <p onClick={()=>this.setState({active: value.id})}
                               className={`${this.state.active === value.id && 'active'}`}>({value.amount})</p>
                           </Plants>
                       ))
                   }</div>
                   <Range>
                       <H>Price Range</H>
                       <R type='range'></R>
                       <Pr>Price: <span className='activ'>$39 - $1230</span></Pr>
                       <Btn>Filter</Btn>
                   </Range>
                   <Sz>
                       <H>Size</H>
                       <div className='plant'>
                           {
                               prices.map((v)=>(
                                 <Plants key={v.id}>
                                     <p onClick={()=>this.setState({activ: v.id})}
                                     className={`${this.state.activ === v.id && 'active'}`}>{v.size}</p>
                                     <p onClick={()=>this.setState({activ: v.id})}
                                     className={`${this.state.activ === v.id && 'active'}`}>({v.amount})</p>
                                 </Plants> 
                               ))
                           }
                       </div>
                    </Sz>
                    <Sale>
                        <img className='ssale' src={Supersale} alt='supersale' />  
                        <h3 className='h3'>UP TO 75% OFF</h3>      
                        <img className='Offer' src={Off} alt='Supper Sale'/>

                    </Sale>
                </Info>
            </div>
        );
    }
}

 