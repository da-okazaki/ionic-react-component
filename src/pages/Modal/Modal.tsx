import React, { useState, useRef } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { 
  IonApp, IonRouterOutlet, IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonListHeader, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox,
  IonItemSliding, IonItemOptions, IonItemOption, IonAvatar, IonImg, IonCard, IonCardHeader, IonCardContent,
  IonProgressBar, IonButton, IonIcon, IonButtons, IonBackButton, IonMenuButton, IonCardSubtitle, IonCardTitle,
  IonGrid, IonCol, IonRow, IonThumbnail, IonInfiniteScroll, IonInfiniteScrollContent, IonModal
} from '@ionic/react';
import './Modal.scss';
import { 
  heart, heartSharp, chevronBack, playBack, playForward, caretForwardOutline, repeatOutline, heartOutline,
  share, shareSharp, call, mail, closeOutline, 
} from 'ionicons/icons';
import { RouteComponentProps } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';

const Modal : React.FC<RouteComponentProps> = () => {

  /**
  openModal = async () => {
      const modal = await modalController.create({
        component: 'component-modal-content',
        swipeToClose: true,
        presentingElement: this.el
      })
      modal.present()
      this.currentModal = modal
    }
  */

 const [showFilterModal, setShowFilterModal] = useState(false)
 const pageRef = useRef<HTMLElement>(null)
    
  return (
    <IonPage ref={pageRef} id="schedule-page">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" icon={chevronBack} defaultHref="home"/>
          </IonButtons>
          <IonTitle>Modal</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonButton onClick={() => setShowFilterModal(true)} >Open Modal</IonButton>
          <IonModal
            isOpen={showFilterModal}
            onDidDismiss={() => setShowFilterModal(false)}
            swipeToClose={true}
            presentingElement={pageRef.current!}
            cssClass="session-list-filter"
            //animated={false}
            keyboardClose={false}
            showBackdrop={false}
          >

            <IonHeader translucent={true} className="modal-jancode">
              <IonToolbar>
                <IonButtons slot="end" >
                  <IonButton fill="clear" onClick={() => setShowFilterModal(false)}>
                      <IonIcon slot="icon-only" icon={closeOutline}/>
                  </IonButton>
                </IonButtons>
                <IonTitle>JAN CODE</IonTitle>
              </IonToolbar>
            </IonHeader>
          </IonModal>            
      </IonContent>
    </IonPage>
  )
}

export default Modal;