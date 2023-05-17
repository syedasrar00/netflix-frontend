import React from 'react'
import JumboItem from '../jumboItem/JumboItem'

export default function JumboComponent() {
    const data =[
        {
            id : 1,
            title: 'Enjoy on your TV',
            subTitle: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
            imageSrc: 'images/home/enjoyOnTv.png',
            imageAlt: 'Enjoy on your TV'
        },
        {   
            id : 2,
            title: 'Watch everywhere',
            subTitle: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
            imageSrc: 'images/home/watchEverywhere.png',
            imageAlt: 'Watch everywhere'
        },
        {
            id : 3,
            title: 'Download your shows to watch offline',
            subTitle: 'Save your favourites easily and always have something to watch.',
            imageSrc: 'images/home/downloadYourShow.png',
            imageAlt: 'Download your shows to watch offline'
        },
        {
            id : 4,
            title: 'Create profiles for kids',
            subTitle: 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
            imageSrc: 'images/home/children.png',
            imageAlt: 'Create profiles for kids'
        }
    ] 
    return (
        <div className='jumbo-component'>
            {data.map((item, index) => {
               return <JumboItem key={item.id} alignment={index%2===0} title={item.title} subTitle={item.subTitle} imageSrc={item.imageSrc} />
            })}
        </div>
    )
}
