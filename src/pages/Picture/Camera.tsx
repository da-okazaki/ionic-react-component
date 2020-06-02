// ---------------------------------------
// ionic Component
// ---------------------------------------
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonButtons, IonButton,IonBackButton,
} from '@ionic/react';
import {
  camera, imageOutline
} from 'ionicons/icons';
import './Camera.scss'
import { Plugins, CameraResultType } from '@capacitor/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { modalController } from '@ionic/core';

// ---------------------------------------
// Package
// ---------------------------------------
import axios from 'axios';

// ---------------------------------------
// Camera
// ---------------------------------------
const { Camera } = Plugins;

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
  }

  render() {
    
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