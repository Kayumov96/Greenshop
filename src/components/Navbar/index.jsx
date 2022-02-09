import React, { Component } from 'react';
import { Div, Green, Icons, Img, Login, Menu, Nav, P } from './style';
import logo from '../../assets/imgs/logo.png';
import { navbar } from '../../utils/navbar';
import search from '../../assets/icons/search.svg';
import shopping from '../../assets/icons/shopping.svg';
import signout from '../../assets/icons/signout.svg';


export default class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            data: navbar,
            active: 'Home'
        }
    }
    render() {
        return (
            <div >
                <Nav>
                    <img src={logo} alt="logo" className='logo' style={{width: '30px', height: '30px', margin: '26px 0' }}/>
                    <Green>GREENSHOP</Green>
                    <Menu >
                       <Div >
                         {
                          navbar.map(({title})=>(
                              <P onClick={()=>this.setState({active: title})} className={`Links
                               ${this.state.active===title && 'active'}`}>
                                  
                                  {title}</P>
                          ))   
                         }
                       </Div>
                    </Menu>
                    <Icons>
                        <Img src={search} alt="search" />
                        <Img src={shopping} alt='Shopping card'/>
                    
                    <Login>
                        <Img src={signout} alt='Sign out'/>Login
                    </Login>
                    </Icons>
                </Nav>
            </div>
        );
    }
}


