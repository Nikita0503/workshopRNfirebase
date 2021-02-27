import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';

export function onStartBackgroundHandler(){
    //receiving messages in the background
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
}

export function unsubscribe() {
    //receiving messages in the foreground
    return messaging().onMessage(async remoteMessage => {
      console.log('Message handled in the app!', remoteMessage);
    });
  }


export async function checkPermission() {
    //checking permission to receive notifications
    const enabled = await messaging().hasPermission();
      if (enabled === messaging.AuthorizationStatus.AUTHORIZED) {
        console.log('Permission is enabled!', enabled);
        await getToken();
      } else {
        console.log('Permission is disabled!', enabled);
        await requestPermission();
      }
  }
  
  export async function getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        await AsyncStorage.setItem('fcmToken', fcmToken);   
      }
    }
    console.log("TOKEN => ", fcmToken)
    return fcmToken;
  }
  
  async function requestPermission() {
    //request permission to receive notifications
    try {
      await messaging().requestPermission();
      await getToken();
    } catch (error) {
      console.log('Permission rejected');
    }
  }
  