import shipping from '@/public/assets/icons/shipping.svg';
import dollar from '@/public/assets/icons/dollar.svg';
import support from '@/public/assets/icons/support.svg';
import payment from '@/public/assets/icons/payment.svg';
import Image from 'next/image';

function Features() {
    return (
        <div className="w-full h-96 flex flex-col justify-center  space-y-10">
            <div className="flex w-full space-x-10 justify-evenly">
                <div className="flex flex-col">
                    <Image src={shipping} alt='shipping'></Image>
                    <h1>Free Shipping</h1>
                    <p>Free shipping for order above $150</p>
                </div>
                <div className="flex flex-col">
                    <Image src={dollar} alt='money guarantee'></Image>
                    <h1>Money guarantee</h1>
                    <p>Within 30 days for an exchange</p>
                </div>
            </div>
            <div className="flex space-x-10 justify-evenly">
                <div className="flex flex-col">
                    <Image src={support} alt='online support'></Image>
                    <h1>Online support</h1>
                    <p>24 hours a day, 7 days a week</p>
                </div>
                <div className="flex flex-col">
                    <Image src={payment} alt='flexible payment'></Image>
                    <h1>Flexible Payment</h1>
                    <p>Pay with multiple credit cards</p>
                </div>
            </div>
            <div className="flex"></div>
        </div>
    )
}

export default Features;