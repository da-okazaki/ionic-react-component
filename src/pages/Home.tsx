import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { 
    IonApp, IonRouterOutlet, IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonListHeader, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox,
    IonItemSliding, IonItemOptions, IonItemOption, IonAvatar, IonImg, IonButtons, IonBackButton,
    IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton
} from '@ionic/react';
import './Home.scss';

import { logoIonic, } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router-dom';

import { IonReactRouter } from '@ionic/react-router';

/* asset */
import iconActionSheeet from '../asset/feature-component-actionsheet-icon.png'
import iconAlert from '../asset/component-alert-icon.png'
import iconBadge from '../asset/component-badge-icon.png'

//class Home extends React.Component<RouteComponentProps> {
const Home: React.FC<RouteComponentProps> = () => {

  /*
  constructor (props: any) {
    super(props)
  }
  */

  const handleToCardPage = () => {
    //props.history.push('/card')
  }      

  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Ionic Framework</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">
                Ionic Framework
              </IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonListHeader>
            <IonLabel>UI Component</IonLabel>
          </IonListHeader>
          <IonList className="ion-avatar-color">
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel>Action Sheet</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel>Alert</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel>Avatar</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel>Badge</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>                                
              <IonLabel>Button</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>Card</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>Modal</IonLabel>
            </IonItem>
          </IonList>

          <IonListHeader>
            <IonLabel>Native Component</IonLabel>
          </IonListHeader>
          <IonList className="ion-avatar-color">
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>Camera</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>Camera Preview</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>Web Camera</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>OCR</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>QR Scanner</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>Geo Location</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>3D Touch</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>Apple Pay</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>PayPal</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>Stripe</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>Push Notifications</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>NFC</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>Social Sharing</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>Speech Recognition</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>Touch ID</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>Face ID</IonLabel>
            </IonItem>

          </IonList>

          <IonListHeader>
            <IonLabel>Sample Apps</IonLabel>
          </IonListHeader>
          <IonList className="ion-avatar-color">
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>Chat App</IonLabel>
            </IonItem>

            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>E-Commerce</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                  <IonImg src={logoIonic}/>
              </IonAvatar>
              <IonLabel onClick={() => {}}>AI Camera</IonLabel>
            </IonItem>
          </IonList>


          {/* Glid Card */}
          {/**
          <IonGrid className="card-component">
            <IonRow>
                <IonCol size="6">
                  <IonCard onClick={() => {handleToCardPage()}}>
                    <IonLabel>
                      <IonImg src={iconActionSheeet} />
                    </IonLabel>
                    <IonCardHeader>
                      <IonCardTitle>Action Sheet</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p>Action Sheetは、一連のオプションを表示して、アクションを確認または取り消すことができます。</p>
                    </IonCardContent>
                  </IonCard>
                </IonCol>

                <IonCol size="6">
                  <IonCard>
                    <IonItem lines="none">
                      <IonAvatar>
                        <IonImg src={iconAlert} />
                      </IonAvatar>
                    </IonItem>
                    <IonCardHeader>
                      <IonCardTitle>Alert</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p>Alertは、特定のアクションまたはアクションのリストを選択する機能を、ユーザーに提供するための優れた方法です。</p>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="6">
                  <IonCard>
                    <IonItem lines="none">
                      <IonAvatar>
                        <IonImg src={iconBadge} />
                      </IonAvatar>
                    </IonItem>
                    <IonCardHeader>
                      <IonCardTitle>Badge</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p>Buttonを使ってユーザーが行動を起こすことができます。、これはアプリと対話したり、移動したりするのに不可欠な方法です。</p>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
            </IonRow>
          </IonGrid>
           */}
          
        </IonContent>
      </IonPage>
  )
}

export default Home;