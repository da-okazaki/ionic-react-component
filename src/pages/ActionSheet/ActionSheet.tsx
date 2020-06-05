import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { 
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonButtons, IonBackButton,
    IonActionSheet, IonButton,
} from '@ionic/react';
import { 
  chevronBack, trash, share, caretForwardCircle, heart, close
} from 'ionicons/icons';
import './ActionSheet.scss';

const ActionSheet: React.FC<RouteComponentProps> = () => {

  const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" icon={chevronBack} defaultHref="home"/>
          </IonButtons>
          <IonTitle>Ionic ActhonSheet</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonButton onClick={() => setShowActionSheet(true)} expand="block">
          Show Action Sheet
        </IonButton>
        <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        cssClass='my-custom-class'
        buttons={[{
          text: 'Delete',
          role: 'destructive',
          icon: trash,
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Share',
          icon: share,
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Play (open modal)',
          icon: caretForwardCircle,
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Favorite',
          icon: heart,
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: close,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]}
      >
      </IonActionSheet>
      </IonContent>
    </IonPage>
    )
}

export default ActionSheet
