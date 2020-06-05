import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonAvatar, 
  IonImg, IonCard, IonCardHeader, IonCardContent, IonProgressBar, IonButton, IonIcon, IonButtons, IonBackButton, 
  IonCardSubtitle, IonCardTitle, IonGrid, IonCol, IonRow, IonThumbnail, IonSlides, IonSlide,
  IonFab, IonFabButton, 
} from '@ionic/react';
import { 
  heart, heartSharp, chevronBack, playBack, playForward, caretForwardOutline, repeatOutline, heartOutline,
  share, shareSharp, call, mail, camera, add, leafOutline, imageOutline, imagesOutline
} from 'ionicons/icons';
import './CardSlides.scss';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

/* asset */
import Album from               '../../asset/card/card-album.png'
import CardTopImg from          '../../asset/card/card-top-img.png'
import LogoAmtrak from          '../../asset/card/logo-amtrak.png'
import LogoShipt from           '../../asset/card/logo-shipt.png'
import LogoSworkit from         '../../asset/card/logo-sworkit.png'
import LogoUntappd from         '../../asset/card/logo-untappd.png'
import CardCoworkerHeader from  '../../asset/card/card-coworker-header.png'
import CardCoworkerAvatar from  '../../asset/card/card-coworker-avatar.png'
import Madison from             '../../asset/card/madison.jpg'


const slideOpts = {
  initialSlide: 0, // 初期スライド
  speed: 300,
  pager: false,
  width: 75
};

//Tranisition effect. Could be "slide", "fade", "cube", "coverflow" or "flip"


const CardSlides: React.FC<RouteComponentProps> = () => {

  return (
    <IonPage>
      {/*-- Back button with no text and custom icon --*/}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" icon={chevronBack} defaultHref="home"/>
          </IonButtons>
          <IonTitle>Ionic Card Slides</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/*
        <IonCard>
          <IonLabel>
            <IonImg src={Madison} />
          </IonLabel>
          <IonCardHeader>
            <IonCardTitle>Madison</IonCardTitle>
          </IonCardHeader>
        </IonCard>
         */}
         {/*
         1. slide.length == 3スライド目の時にボタンを活性
         2. slide 1, 2 はロックして移動できないようにする
         3. 3スライド目以外は以下を適用
         　　・ボタンサイズを小さく
         　　・カラーを「Gray」にする
         4. 3スライド目の中央に白い枠を設ける ※ どれが選択されているかわかりやすく
         5. 3スライド目が選択されたらデバイスをバイブレーションさせる

         */}
         
        <IonSlides options={slideOpts}>
          <IonSlide>
          </IonSlide>
          <IonSlide>
          </IonSlide>
          <IonSlide className="ion-text-senter">
            <IonFab color="primary" vertical="bottom" horizontal="center" slot="fixed">
              <IonFabButton color="primary" onClick={() => {}}>
                <IonIcon icon={imageOutline} />
              </IonFabButton>
            </IonFab>
          </IonSlide>
          <IonSlide>
            <IonFab color="primary" vertical="bottom" horizontal="center" slot="fixed">
              <IonFabButton color="primary" onClick={() => {}}>
                <IonIcon icon={imagesOutline} />
              </IonFabButton>
            </IonFab>
          </IonSlide>
          <IonSlide>
            <IonFab color="primary" vertical="bottom" horizontal="center" slot="fixed">
              <IonFabButton color="primary" onClick={() => {}}>
                <IonIcon icon={leafOutline} />
              </IonFabButton>
            </IonFab>
          </IonSlide>
          <IonSlide>
            <IonFab color="primary" vertical="bottom" horizontal="center" slot="fixed">
              <IonFabButton color="primary" onClick={() => {}}>
                <IonIcon icon={heartSharp} />
              </IonFabButton>
            </IonFab>
          </IonSlide>
          <IonSlide>
            <IonFab color="primary" vertical="bottom" horizontal="center" slot="fixed">
              <IonFabButton color="primary" onClick={() => {}}>
                <IonIcon icon={heartOutline} />
              </IonFabButton>
            </IonFab>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  )
}

export default CardSlides;