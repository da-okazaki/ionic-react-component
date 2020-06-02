import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import ViewMessage from './pages/ViewMessage/ViewMessage';
import ActionSheet from './pages/ActionSheet/ActionSheet'
import Alert from './pages/Alert/Alert'
import Avatar from './pages/Avatar/Avatar'
import Badge from './pages/Badge/Badge'
import Button from './pages/Button/Button'
import Card from './pages/Card/Card';
import Slides from './pages/Slides/Slides'
import Modal from './pages/Modal/Modal'
import Camera from './pages/Picture/Camera'
import WebCamera from './pages/WebCamera/WebCamera'
import Stripe from './pages/Stripe/Stripe'


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/message/:id" component={ViewMessage} exact={true} />
        <Route path="/actionsheet" component={ActionSheet} exact={true} />
        <Route path="/alert" component={Alert} exact={true} />
        <Route path="/avatar" component={Avatar} exact={true} />
        <Route path="/badge" component={Badge} exact={true} />
        <Route path="/button" component={Button} exact={true} />
        <Route path="/card" component={Card} exact={true} />
        <Route path="/slides" component={Slides} exact={true} />
        <Route path="/modal" component={Modal} exact={true} />
        <Route path="/camera" component={Camera} exact={true} />
        <Route path="/webcamera" component={WebCamera} exact={true} />
        <Route path="/stripe" component={Stripe} exact={true} />
        
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
