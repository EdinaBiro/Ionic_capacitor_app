import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import {logInOutline} from 'ionicons/icons';
import {personCircleOutline} from 'ionicons/icons';
import Logo from '../assets/logo_app.png';

const doLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Login pressed!");
  };

const Login: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color='success'>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <div className="ion-text-center ion-padding">
                <img src={Logo} alt="logo" width={'50%'}/>
                </div>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doLogin}>
                            <IonInput fill="outline" labelPlacement= "floating" label="Email" type='email' placeholder="simon@gmail.com"></IonInput>
                            <IonInput className="ion-margin-top" fill="outline" labelPlacement= "floating" label="Password" type='email' placeholder="simon@gmail.com"></IonInput>
                            <IonButton type="submit" expand="block" className="ion-margin-top">
                                Login
                                <IonIcon icon={logInOutline} slot="end" /> 
                            </IonButton>

                             <IonButton routerLink="/register" color={'secondary'} type="submit" expand="block" className="ion-margin-top">
                                Register
                                 <IonIcon icon={personCircleOutline} slot="end" />
                            </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
    
        </IonPage>
    );
}
export default Login;