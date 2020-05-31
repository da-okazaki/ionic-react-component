import React from 'react';
import { 
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonButtons, IonBackButton,
    IonButton,IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle,
    IonLabel, IonImg
} from '@ionic/react';
import { 
  chevronBack
} from 'ionicons/icons';

import './Stripe.scss';
import { Stripe } from '@ionic-native/stripe/ngx'

import { RouteComponentProps } from 'react-router-dom'
import { IonReactRouter } from '@ionic/react-router'

import StripeCheckoutButton from '../../components/stripe-button'

import StripeImage from '../../asset/stripe.png'

const totalPrice = 58;

const StripeView: React.FC<RouteComponentProps> = () => {
//class StripeView extends React.Component<RouteComponentProps> {  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" icon={chevronBack} defaultHref="home"/>
          </IonButtons>
          <IonTitle>Ionic Stripe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonCard>
          <IonLabel>
            <IonImg src={StripeImage} />
          </IonLabel>

          <IonCardHeader>
            <IonCardSubtitle>GET STARTED</IonCardSubtitle>
            <IonCardTitle>Stripe Sample</IonCardTitle>
            <p>Pay Total of $ {totalPrice}</p>
          </IonCardHeader>

          <IonCardContent>
            <p>
              <StripeCheckoutButton price={totalPrice} />
            </p>

          </IonCardContent>
        </IonCard>

        

      </IonContent>
    </IonPage>
  )
}

export default StripeView
