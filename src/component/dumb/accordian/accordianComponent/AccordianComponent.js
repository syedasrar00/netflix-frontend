import React, { useState } from 'react'
import './accordianComponent.css'
import AccordianTitle from '../accordianTitle/AccordianTitle'
import AccordianText from '../accordianText/AccordianText'
import AccordianItem from '../accordianItem/AccordianItem'
import Seperator from '../../seperator/Seperator'
import SubscribeButton from '../../form/subscribe/subscribebutton/SubscribeButton'
import SubscribeEmail from '../../form/subscribe/subscribeemail/SubscribeEmail'
import SubscribeTitle from '../../form/subscribe/subscribeTitle/SubscribeTitle'
import SubscribeWrapper from '../../form/subscribe/subscribewrapper/SubscribeWrapper'

export default function AccordianComponent({ children, ...restProps}) {
    const data = [
        {
            title : "What is Netflix?",
            text : "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
        },
        {
            title : "How much does Netflix cost?",
            text : "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
        },
        {
            title : "Where can I watch?",
            text : "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
        },
        {
            title : "How do I cancel?",
            text : "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees  start or stop your account anytime."
        },
        {
            title : "What can I watch on Netflix?",
            text : "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        },
        {
            title : "Is Netflix good for kids?",
            text : "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space."+"\n"+"Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        }
    ]
    const [accordianState, setAccordianState] = useState(data.map(() => false))
    return (
    <>
        <Seperator />
        <div className='accordian-component'>
            <h1 className='accordian-heading'>Frequently Asked Questions</h1>
            <div className='accordian-item-container'>{data.map((item ,index) => 
                <AccordianItem key={index}>
                    <AccordianTitle 
                        isOpen = {accordianState[index]}
                        handleClick = {() => {
                            let currentValue = accordianState[index];
                            let newValue = !currentValue;
                            let newAccordianState = [...accordianState];
                            for(let i=0;i<accordianState.length; i++){
                                newAccordianState[i]=false;
                            }
                            newAccordianState[index]=newValue;
                            setAccordianState(newAccordianState); 
                        }}>
                            {item.title}</AccordianTitle>
                    <AccordianText isOpen={accordianState[index]}>{item.text}</AccordianText>
                </AccordianItem>)}
            </div>
            <SubscribeTitle>Ready to watch? Enter your email to create or restart your membership.</SubscribeTitle>
            <SubscribeWrapper className='subscribe-wrapper-home'>
                <SubscribeEmail type='email' placeholder='Email Address'/>
                <SubscribeButton >Get Started</SubscribeButton>
            </SubscribeWrapper>
        </div>
        <Seperator />
    </>
  )
}
