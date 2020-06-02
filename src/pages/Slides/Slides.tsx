import React from 'react';
import { 
    IonPage, IonContent, IonSlides, IonSlide, IonButton, IonIcon
} from '@ionic/react';
import { 
  arrowForward
} from 'ionicons/icons';
import './Slides.scss';
import { RouteComponentProps } from 'react-router-dom';

/* asset */
import Slide1 from '../../asset/slides/slide-1.png'
import Slide2 from '../../asset/slides/slide-2.png'
import Slide3 from '../../asset/slides/slide-3.png'
import Slide4 from '../../asset/slides/slide-4.png'

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const Slides: React.FC<RouteComponentProps> = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <div className="slide">
              <img src={Slide1} alt="slide1"/>
              <h2>Welcome</h2>
              <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>
            </div>          
          </IonSlide>
          <IonSlide>
            <img src={Slide2} alt="slide2"/>
            <h2>What is Ionic?</h2>
            <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>   
          </IonSlide>
          <IonSlide>
            <img src={Slide3} alt="slide3"/>
            <h2>What is Ionic Appflow?</h2>
            <p><b>Ionic Appflow</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>   
          </IonSlide>
          <IonSlide>
            <img src={Slide4} alt="slide4"/>
            <h2>Ready to Play?</h2>
            <IonButton fill="clear" routerLink="/home">Continue<IonIcon slot="end" name={arrowForward}></IonIcon></IonButton>
          </IonSlide>
        </IonSlides>                    
      </IonContent>
    </IonPage>
    )
}

export default Slides
