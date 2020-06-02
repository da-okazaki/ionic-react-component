import React, { Fragment, useState } from "react";
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
} from '@ionic/react';
import { 
  chevronBack,
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
              onCapture={(blob:any) => setCardImage(blob)}
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