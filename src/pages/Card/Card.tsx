import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonAvatar, 
  IonImg, IonCard, IonCardHeader, IonCardContent, IonProgressBar, IonButton, IonIcon, IonButtons, IonBackButton, 
  IonCardSubtitle, IonCardTitle, IonGrid, IonCol, IonRow, IonThumbnail,
} from '@ionic/react';
import { 
  heart, heartSharp, chevronBack, playBack, playForward, caretForwardOutline, repeatOutline, heartOutline,
  share, shareSharp, call, mail, 
} from 'ionicons/icons';
import './Card.scss';
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

class Card extends React.Component<RouteComponentProps> {

  constructor (props: any, private youtube: YoutubeVideoPlayer) {
    super(props)
  }

  render () {

    return (
        <IonPage>
          {/*-- Back button with no text and custom icon --*/}
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton text="" icon={chevronBack} defaultHref="home"/>
              </IonButtons>
              <IonTitle>Ionic Card</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>

            {/* Action Card */}
            <IonCard className="action-card">
              <IonImg className="header-img" src={CardTopImg} />
              <IonCardHeader>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                <IonCardTitle>Card Title</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Here's a small text description for the card content. Nothing more, nothing less.
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonButton size="small">Action</IonButton>
                    </IonCol>
                    <IonButton fill="clear">
                      <IonIcon slot="icon-only" ios={heart} md={heartSharp}/>
                    </IonButton>
                    <IonButton fill="clear">
                      <IonIcon slot="icon-only" ios={share} md={shareSharp}/>
                    </IonButton>
                  </IonRow>
                </IonGrid>              
              </IonCardContent>
            </IonCard>

            {/* Apps Card */}
            <IonCard className="apps-card">
              <IonCardHeader>
                <IonCardSubtitle>Your Daily List</IonCardSubtitle>
                <IonCardTitle>Ionic Apps We Think You'll Love.</IonCardTitle>                
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonThumbnail slot="start">
                      <IonImg src={LogoSworkit} />
                    </IonThumbnail>
                    <IonLabel>
                      <h3>Sworkit</h3>
                      <p>The number one fitness app</p>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonThumbnail slot="start">
                      <IonImg src={LogoUntappd} />
                    </IonThumbnail>
                    <IonLabel>
                      <h3>Untappd</h3>
                      <p>Discover and share beer</p>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonThumbnail slot="start">
                      <IonImg src={LogoShipt} />
                    </IonThumbnail>
                    <IonLabel>
                      <h3>Shipt</h3>
                      <p>Bring the store to your door</p>
                    </IonLabel>
                  </IonItem>
                  <IonItem lines="none">
                    <IonThumbnail slot="start">
                      <IonImg src={LogoAmtrak} />
                    </IonThumbnail>
                    <IonLabel>
                      <h3>Amtrak</h3>
                      <p>Book a trip today</p>
                    </IonLabel>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>

            {/* Coworker Card */}
            
            <IonCard class="coworker-card">
              <IonImg className="header-img" src={CardCoworkerHeader} />
              
              <IonCardContent>
                <IonList lines="none">
                  <IonItem>
                    <IonAvatar slot="start">
                      <IonImg src={CardCoworkerAvatar} />
                    </IonAvatar>
                    <IonLabel>
                      <h1>John Parks</h1>
                      <p>Co-worker</p>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonIcon icon={call} slot="start" />                    
                    <IonLabel>
                      <h2>(555) 418-5602</h2>
                      <p>Mobile phone</p>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonIcon icon={heart} slot="start" />                    
                    <IonLabel>
                      <h2>jparks@workmail.com</h2>
                      <p>Work email</p>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonIcon icon={mail} slot="start" />                    
                    <IonLabel>
                      <h2>john.parks92@email.com</h2>
                      <p>Personal email</p>
                    </IonLabel>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>

            {/* Music Card */}
            <IonCard className="music-card">
              <IonCardHeader>
                <IonImg src={Album} />
              </IonCardHeader>
              <IonCardContent>
                <h2>Fancy</h2>
                <p>Twice</p>
                <IonProgressBar value={.25}></IonProgressBar>
                <IonButton color="dark" fill="clear" size="small">
                  <IonIcon slot="icon-only" icon={repeatOutline}></IonIcon>
                </IonButton>
                <IonButton color="dark" fill="clear" size="small">
                  <IonIcon slot="icon-only" icon={playBack}></IonIcon>
                </IonButton>
                <IonButton color="dark" fill="clear" size="large">
                  <IonIcon slot="icon-only" icon={caretForwardOutline}></IonIcon>
                </IonButton>
                <IonButton color="dark" fill="clear" size="small">
                  <IonIcon slot="icon-only" icon={playForward}></IonIcon>
                </IonButton>
                <IonButton color="dark" fill="clear" size="small">
                  <IonIcon slot="icon-only" icon={heartOutline}></IonIcon>
                </IonButton>
              </IonCardContent>
            </IonCard>

            {/* Madison */}
            <IonCard>
              <IonCardHeader>
                <IonImg src={Madison} />
              </IonCardHeader>
              <IonCardHeader>
                <IonCardSubtitle>Destination</IonCardSubtitle>
                <IonCardTitle>Madison, WI</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
              </IonCardContent>
            </IonCard>

            {/* Youtube */}
            <IonCard>
              <IonCardContent>    
              </IonCardContent>
            </IonCard>

            {/* Google Maps */}
            <IonCard>
              <IonCardContent>    
              </IonCardContent>
            </IonCard>            

          </IonContent>
        </IonPage>
     )
  }
}

export default Card;