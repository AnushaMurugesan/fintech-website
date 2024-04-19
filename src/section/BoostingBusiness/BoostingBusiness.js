import Button from '@/components/Button/Button';
import './BoostingBusiness.scss';
import Linechart from '@/components/LineChart/Linechart';
import Image from 'next/image';
import threedot from '../../../public/icons/Threedot.svg'

function BoostingBusiness(){
    return(
       <section className='businessContainer'>
            <div className='businessContainer--header'>
                <Button label='Features' withoutPadding className='businessContainer--header--featuresBtn' 
                    style={{color:"black", backgroundColor : "#81f3d7" , border : "1px solid #81f3d7" , padding:"0.8rem 2.8rem"}}/>
                <div className='businessContainer--header--businessHeader'>
                    <span>Boosting businesses.Today</span>
                    <span>and tomorrow</span>
                </div>
            </div>

            <div className='businessContainer--contentBox1'>
                <div className='businessContainer--contentBox1-leftsection'>
                    <div className='businessContainer--contentBox1-leftsection-balContainer'>
                       <div className='businessContainer--contentBox1-leftsection-balContainer-1'>
                            <span>Total Balance</span>
                            <Image src={threedot} alt='threedot'/>
                       </div>
                       <span className='businessContainer--contentBox1-leftsection-balContainer-2'>
                            $9876,28.00
                       </span>
                    </div>
                    <div className='businessContainer--contentBox1-leftsection-linechart'>
                        <Linechart />
                    </div>
                </div>
                <div className='businessContainer--contentBox1-rightsection'>
                    right
                </div>
            </div>
       </section>
    )
}
export default BoostingBusiness;