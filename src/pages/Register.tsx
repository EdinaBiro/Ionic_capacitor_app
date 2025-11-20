import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { checkmark, checkmarkDoneOutline } from "ionicons/icons";
import React from "react";


const Register: React.FC = () => {

    const doRegister = (event: any) => {
        event.preventDefault();
        console.log('doRegister');
    }
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color='success'>
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doRegister}>
                            <IonInput fill="outline" labelPlacement= "floating" label="Email" type='email' placeholder="simon@gmail.com"></IonInput>
                            <IonInput className="ion-margin-top" fill="outline" labelPlacement= "floating" label="Password" type='email' placeholder="simon@gmail.com"></IonInput>
                            <IonButton type="submit" expand="block" className="ion-margin-top">
                                Create my account
                                <IonIcon icon={checkmarkDoneOutline} slot="end" /> 
                            </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
    
        </IonPage>
    );
}
export default Register;