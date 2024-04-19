"use client";
import './LandingScreen.scss'
import Image from 'next/image'
import Button from '../../components/Button/Button'
import DotDesign from '../../components/DotDesign/DotDesign'
import visa from '../../../public/icons/Visa.svg'
import paypal from '../../../public/icons/Paypal.svg'
import mastercard from '../../../public/icons/Mastercard.svg'
import stripe from '../../../public/icons/Stripe.svg'
import girl_icon from '../../../public/icons/Girlicon.svg'
import card from '../../../public/icons/Card.svg'
import BarChart from '@/components/Barchart/Barchart';
function LandingScreen(){
    return(
    <section className="homeContainer">
      <div className="homeContainer__homeScreen">
        <div className="homeContainer__homeScreen--circleContainer">
            <div className="homeContainer__homeScreen--circleContainer-1"></div>
            <div className="homeContainer__homeScreen--circleContainer-2"></div>
            <Image alt='Visa' src={visa} className="homeContainer__homeScreen--circleContainer-visa" />
            <Image alt='Visa' src={paypal} className="homeContainer__homeScreen--circleContainer-paypal" />
            <Image alt='Visa' src={mastercard} className="homeContainer__homeScreen--circleContainer-mastercard" />
            <Image alt='Visa' src={stripe} className="homeContainer__homeScreen--circleContainer-stripe" />
        </div>
        <div className="homeContainer__homeScreen--boxContent">
          <span style={{color:'#808080'}}>Making</span>
          <span> Sense</span><br/>
          <span>Of Business</span><br/>
          <div style={{display:"flex" , alignItems:"center" , gap:"1.8rem" }}>
            <span style={{color:'#808080'}}>Finance</span>
            <Image className="homeContainer__homeScreen--imageIcon" src={girl_icon} alt='Girl Icon'/>
          </div>
        </div>
        <div className='homeContainer__homeScreen--btnContainer'>
          <Button label="Get Started"/>
          <DotDesign />
        </div>

        <div className='homeContainer__homeScreen--cardContainer'>
          <BarChart />
          <Image src={card} alt='Card' className='homeContainer__homeScreen--cardContainer--card' />
        </div>
      </div>
    </section>
    )
}

export default LandingScreen;