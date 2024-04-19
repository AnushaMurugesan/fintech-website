import './GrowingCompanies.scss';
import Image from 'next/image';

import visa from '../../../public/icons/Visa.svg'
import paypal from '../../../public/icons/Paypal.svg'
import mastercard from '../../../public/icons/Mastercard.svg'
import stripe from '../../../public/icons/Stripe.svg'
import applepay from '../../../public/icons/Applepay.svg'
import gpay from '../../../public/icons/Gpay.svg'


function GrowingCompanies(){
    return(
       <section className='companiesContainer'>
            <h2 className='companiesContainer--companiesTitle'>Trusted by fastest growing companies</h2>
            <div className='companiesContainer--iconContainer'>
                <Image className='companiesContainer--iconContainer--imageIcon-visa' src={visa} alt='visa' />
                <Image className='companiesContainer--iconContainer--imageIcon-mastercard' src={mastercard} alt='mastercard' />
                <Image className='companiesContainer--iconContainer--imageIcon-applepay' src={applepay} alt='applepay' />
                <Image className='companiesContainer--iconContainer--imageIcon-gpay' src={gpay} alt='gpay' />
                <Image className='companiesContainer--iconContainer--imageIcon-paypal' src={paypal} alt='paypal' />
                <Image className='companiesContainer--iconContainer--imageIcon-stripe' src={stripe} alt='stripe' />
            </div>
       </section>
    )
}
export default GrowingCompanies;