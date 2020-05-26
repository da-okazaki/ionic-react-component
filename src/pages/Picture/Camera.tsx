// ---------------------------------------
// ionic Component
// ---------------------------------------
import React, { useState, useRef } from 'react';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonFab, IonFabButton, IonIcon, IonButtons, IonButton, IonBackButton, IonLoading, IonProgressBar,IonModal, } from '@ionic/react';
import { camera, add, imageOutline } from 'ionicons/icons';

import { Plugins, CameraResultType, ActionSheetOptionStyle } from '@capacitor/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { modalController } from '@ionic/core';

import { RouteComponentProps } from 'react-router-dom';
import './Camera.scss'

// ---------------------------------------
// Package
// ---------------------------------------
import { encode } from 'punycode';
import axios from 'axios';

// ---------------------------------------
// Environment Variables
// ---------------------------------------
const { REACT_APP_HTTP_ENDPOINT } = process.env

// ---------------------------------------
// Camera
// ---------------------------------------
const { Camera, Modals } = Plugins;

const INITIAL_STATE = {
  photo: '',
};

class Picture extends React.Component<RouteComponentProps> {

  dismiss = () => {
    modalController.dismiss();
  }  

  state: any = {};
  props: any = {};
  constructor(props: any) {
    super(props);
    this.state = { ...INITIAL_STATE };
    defineCustomElements(window);

  }

  handleToCategoryPage = () => {
    this.props.history.push('/category')
  }

  handleToJanCodePage = () => {
    this.props.history.push('/jancode')
  }

  handleToModalPage = () => {
    this.props.history.push('/modal')
  }  


  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });
    var base64String = image.base64String;
    console.log("## base64String")
    console.log(base64String)

    var fileName = "test.jpeg"
    //var response = await sendPostRequest(base64String, fileName)
  }

  render() {
    
    //const [showFilterModal, setShowFilterModal] = useState(false);
    //const pageRef = useRef<HTMLElement>(null);

    
    const { photo } = this.state;

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            {/* left */}
            <IonButtons slot="start">
              <IonBackButton defaultHref="/home" />    
            </IonButtons>

            {/* light */}
            <IonButtons slot="end">
            <IonButton onClick={() => {}}>
                <IonIcon slot="icon-only" icon={imageOutline} />
              </IonButton>
            </IonButtons>

            <IonTitle>Picture</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonContent className="ion-padding">

        {/**
        <IonModal isOpen={showModal}>
          <p>This is modal content</p>
          <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
        </IonModal>
        <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
         */}

          <div className="ion-fab">
          <IonFab color="primary" vertical="bottom" horizontal="center" slot="fixed">
            <IonFabButton color="primary" onClick={() => this.takePicture()}>
              <IonIcon icon={camera} />
            </IonFabButton>
          </IonFab>
          </div>
        </IonContent>
      </IonPage>

    );
  }
};

/**
const videoConstraints = {
  width: 1280,
  height: 720,
  //facingMode
  facingMode: 'user'
  //facingMode: { exact: "environment" }
};

const Camera : React.FC<RouteComponentProps> = () => {

  const webcamRef = React.useRef(null);
 
  const capture = React.useCallback(
    () => {
      console.log('getScreenshot()')
      //const imageSrc = webcamRef.current.getScreenshot();
      //const imageSrc = webcamRef.current.getScreenshot();

    },
    [webcamRef]
  );

  return (
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
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />

        <IonButton onClick={capture}>Capture photo</IonButton>
        
      </IonContent>
    </IonPage>
  )
}
*/

export default Picture;


/**
 * AWSに画像をアップロード
 * @param dataUri 
 * @param fileName 
 */
const sendPostRequest = async (dataUri:any, fileName:String) => {

  // url
  const uploadUrl = "https://rf0rxcgjvd.execute-api.ap-northeast-1.amazonaws.com/dev/events"

  // body
  var params = {
    data_uri:dataUri,
    file_name:fileName,
  }

  // request post
  var { response, count, items } = await axios.post(uploadUrl, params).then(response => { 
    var count = response.data.Count
    var items = response.data.Items
    return { response, count, items }
  })

  console.log("## response");
  console.log(response)
  console.log(count)
  console.log(items)

  return response;
}