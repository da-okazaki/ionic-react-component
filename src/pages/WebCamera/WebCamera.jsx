import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { 
  IonApp, IonRouterOutlet, IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonListHeader, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox,
  IonItemSliding, IonItemOptions, IonItemOption, IonAvatar, IonImg, IonCard, IonCardHeader, IonCardContent,
  IonProgressBar, IonButton, IonIcon, IonButtons, IonBackButton, IonMenuButton, IonCardSubtitle, IonCardTitle,
  IonGrid, IonCol, IonRow, IonThumbnail, IonInfiniteScroll, IonInfiniteScrollContent, 
} from '@ionic/react';
import { 
  heart, heartSharp, chevronBack, playBack, playForward, caretForwardOutline, repeatOutline, heartOutline,
  share, shareSharp, call, mail, 
} from 'ionicons/icons';

import { Camera } from "../../camera/index";
import { Root, Preview, Footer, GlobalStyle } from "./styles";

const WebCamera = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();

  return (
    <IonPage>
      {/*-- Back button with no text and custom icon --*/}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" icon={chevronBack} defaultHref="home"/>
          </IonButtons>
          <IonTitle>Ionic Web Camera</IonTitle>
        </IonToolbar>
      </IonHeader>

      <Fragment>
        <Root>
          {isCameraOpen && (
            <Camera
              onCapture={blob => setCardImage(blob)}
              onClear={() => setCardImage(undefined)}
            />
          )}

          {cardImage && (
            <div>
              <h2>Preview</h2>
              <Preview src={cardImage && URL.createObjectURL(cardImage)} />
            </div>
          )}

          <Footer>
            <button onClick={() => setIsCameraOpen(true)}>Open Camera</button>
            <button
              onClick={() => {
                setIsCameraOpen(false);
                setCardImage(undefined);
              }}
            >
              Close Camera
            </button>
          </Footer>
        </Root>
        <GlobalStyle />
      </Fragment>
    </IonPage>
  );
}

export default WebCamera