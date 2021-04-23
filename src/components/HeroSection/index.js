import React, {useState} from 'react'
import Video from '../../video/video.mp4'
import {Button} from '../ButtonElements';
import {HeroContainer,HeroBg,VideoBg, HeroContent,
HeroH1,
HeroP,
HeroBtnWrapper,
ArrowForward,
ArrowRight} from './HeroElements.js'

const HeroSection = () => {

const [hover, setHover]= useState(false);
    const onHover = ()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src= {Video} type='video/mp4'></VideoBg>

            </HeroBg>
            <HeroContent>
                <HeroH1>Envia de Panama a Colombia</HeroH1>
                <HeroP>Recibe tu mercancia de manera express en Bogota o Medellin </HeroP>
                   <HeroBtnWrapper>
                       <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Envia ya {hover ? <ArrowForward/> :<ArrowRight/>}

                           </Button></HeroBtnWrapper> 
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
