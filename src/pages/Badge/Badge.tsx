import React from 'react';
import { 
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonButtons, IonBackButton,
} from '@ionic/react';
import { 
  chevronBack
} from 'ionicons/icons';

import './Badge.scss';

import { RouteComponentProps } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';


const Badge: React.FC<RouteComponentProps> = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" icon={chevronBack} defaultHref="home"/>
          </IonButtons>
          <IonTitle>Ionic Avatar</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>  
      </IonContent>
    </IonPage>
    )
}

export default Badge
