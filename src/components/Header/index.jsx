import React, { Component } from 'react';
import { Cont, Little, Big, Tag, Shop, Limg, Sp, Im, Img, Ellips } from './style';
import Gl from '../../assets/imgs/Gl.png';
import Ellipse1 from '../../assets/icons/Ellipse1.svg';
import Ellipse2 from '../../assets/icons/Ellipse2.svg';

 export default class Header extends Component {
    render() {
        return (
            <div>
                <Cont>
                    <Little>Welcome to GreenShop</Little>
                    <Big>
                    Let’s Make a Better <Sp>Planet</Sp> 
                    </Big>
                    <Tag>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</Tag>
                    <Shop>SHOP NOW</Shop>
                    <Ellips> 
                        <img className='elp' src={Ellipse2} alt='ellipse'/>
                        <img className='elp'  src={Ellipse1} alt='ellipse'/>
                        <img className='elp' src={Ellipse2} alt='ellipse'/>
                    </Ellips>
                    <Limg>
                        <Img src={Gl} alt="img" />
                        <Im src={Gl} alt="img" />
                    </Limg>
                </Cont>
            </div>
        );
    }
}
