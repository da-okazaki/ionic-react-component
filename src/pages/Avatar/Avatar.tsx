import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { 
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonButtons, IonBackButton,
    IonAvatar, IonChip, IonLabel, IonItem
} from '@ionic/react';
import { 
  chevronBack
} from 'ionicons/icons';
import './Avatar.scss';

const Avatar: React.FC<RouteComponentProps> = () => {
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
        <IonAvatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>

        <IonChip>
          <IonAvatar>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
          <IonLabel>Chip Avatar</IonLabel>
        </IonChip>

        <IonItem>
          <IonAvatar slot="start">
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
          <IonLabel>Item Avatar</IonLabel>
        </IonItem>        
      </IonContent>
    </IonPage>
    )
}

export default Avatar
