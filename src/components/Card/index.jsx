import React, { Component } from 'react';
import { Conta, SortInfo, Page  } from './style';
import { types } from '../../utils/navbar';
import { P } from '../Navbar/style';

export default class Card extends Component {
    constructor(props){
        super(props)
            this.state={
                data: types,
                active: ''
            }
    }
    render() {
        return (
            <div>
               <Conta>
                   <SortInfo>
                    <Page>  {
                          types.map((value)=>(
                            <P onClick={()=>this.setState({active: value.id})}
                            className={`${this.state.active === value.id && 'active'}`}>{value.title}</P>
                          ))
                      }
                      </Page>
                   </SortInfo>


                </Conta> 
                
            </div>
        );
    }
}

