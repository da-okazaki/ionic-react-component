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
import './PicturePreview.scss'

//import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx'


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

// camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
/** 
const cameraPreviewOpts: CameraPreviewOptions = {
  x: 80,
  y: 450,
  width: 250,
  height: 300,
  //width: window.screen.width,
  //height: window.screen.height,
  camera: 'rear',
  tapPhoto: true,
  previewDrag: true,
  toBack: true,
  alpha: 1
};
*/

// picture options
const pictureOpts: CameraPreviewPictureOptions = {
  width: 1280,
  height: 1280,
  quality: 85
}


class PicturePreview extends React.Component<RouteComponentProps> {

  constructor(props: any, private cameraPreview: CameraPreview) {
    super(props);
    this.state = { ...INITIAL_STATE };
    defineCustomElements(window);
  }

  cameraPreviewOpts: CameraPreviewOptions = {
    x: 80,
    y: 450,
    width: 250,
    height: 300,
    //width: window.screen.width,
    //height: window.screen.height,
    camera: 'rear',
    tapPhoto: true,
    previewDrag: true,
    toBack: false,
    //alpha: 1
  };  

  async handleToStartCamera() {
    try {
      const res = await this.cameraPreview.startCamera(this.cameraPreviewOpts)
      console.log(res);
    } catch (err) {
      console.log('失敗')
      console.log('Error', err)
    }
  }

  // start camera
  /*
  handleToStartCamera = () => {
    //this.cameraPreview.startCamera(cameraPreviewOpts).then(
      this.cameraPreview.startCamera({ 
        x: 80, 
        y: 450, 
        width: 250, 
        height: 300, 
        toBack: false, 
        previewDrag: true, 
        tapPhoto: true 
      }).then(
      
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    );
  }
  */

  // take a picture
  //handleToTakePicture = () => {    
  handleToTakePicture () {     
    this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
      console.log('撮影成功')
      //var picture = 'data:image/jpeg;base64,' + imageData;
      //console.log('picture', picture)
    }, (err) => {
      console.log('撮影失敗')
      console.log(err);
      //this.picture = 'assets/img/test.jpg';
    });
  }

  render() {

    /*
    // Set the handler to run every time we take a picture
    //this.cameraPreview.setOnPictureTakenHandler().subscribe((result) => {
    this.cameraPreview.takePicture().subscribe((result) => {
      console.log(result);
      // do something with the result
    });

    // Switch camera
    this.cameraPreview.switchCamera();

    // set color effect to negative
    this.cameraPreview.setColorEffect('negative');

    // Stop the camera preview
    this.cameraPreview.stopCamera();    

    */

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
            <IonTitle>Ionic Preview</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonContent className="ion-padding">
          <div className="ion-fab">
          <IonFab color="primary" vertical="bottom" horizontal="center" slot="fixed">
            <IonFabButton color="primary" onClick={() => this.handleToStartCamera()}>
              <IonIcon icon={camera} />
            </IonFabButton>
          </IonFab>
          </div>
        </IonContent>
      </IonPage>
    );
  }
};

export default PicturePreview;


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