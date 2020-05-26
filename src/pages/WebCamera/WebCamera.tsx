// ---------------------------------------
// ionic Component
// ---------------------------------------
import React, { useState, useRef, useCallback, useEffect, } from 'react';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonFab, IonFabButton, IonIcon, IonButtons, IonButton, IonBackButton, IonLoading, IonProgressBar,IonModal, IonLabel, } from '@ionic/react';
import { camera, add, imageOutline, chevronBack } from 'ionicons/icons';

import { Plugins, CameraResultType, ActionSheetOptionStyle } from '@capacitor/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { modalController } from '@ionic/core';

import { RouteComponentProps } from 'react-router-dom';
import './WebCamera.scss'

// ---------------------------------------
// Package
// ---------------------------------------
import { encode } from 'punycode';
import axios from 'axios';
import Webcam from "react-webcam";

// ---------------------------------------
// Camera
// ---------------------------------------
const { Camera, Modals } = Plugins;

const INITIAL_STATE = {
  photo: '',
};

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user'
  //facingMode: { exact: "environment" }
};

const CAPTURE_OPTIONS = {
  audio : false,
  video : {
    faceingMode : "environment"
  },
}

  
const WebCamera : React.FC<RouteComponentProps> = (requestedMedia) => {


  return (
    <div>

    </div>
  )
  /**
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" icon={chevronBack} defaultHref="home"/>
          </IonButtons>
          <IonTitle>Ionic Camera</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        

      </IonContent>
    </IonPage>
  )
  */
}

export default WebCamera;