import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect,useState} from 'react';

import  {
  MaxAdContentRating,
  InterstitialAd,
  AdEventType,
  RewardedAd,
  BannerAd,
  TestIds,
  BannerAdSize,

} from '@react-native-firebase/admob';


// const adUnitId = TestIds.INTERSTITIAL;

// console.log(adUnitId);



const App = () => {
  const [loaded, setLoaded] = useState(false);

 
  // useEffect(()=>{

  //   let interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL,{
  //     requestNonPersonalizedAdsOnly: true,
  //     keywords: ['fashion', 'clothing'],
  //   });
    
  //   let interstitialListener=interstitial.onAdEvent(type=>{
  //     if(type===AdEventType.LOADED){
  //       interstitial.show()
  //     }
  //   })
  //   interstitial.load()

  //   return ()=>{
  //     interstitialListener=null
  //   }
  // },[])

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0,
          marginTop: 1,
          backgroundColor: 'transparent',
          height: 70,
          borderWidth: 1,
        }}>
        <BannerAd
          size={BannerAdSize.SMART_BANNER}
          unitId={TestIds.BANNER}//heleki testId istifade edirem

          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
          onAdLoaded={() => {
            console.log('Advert loaded');
          }}
          onAdFailedToLoad={error => {
            console.error('Advert failed to load: ', error);
          }}
        />
      </View>

      <View>
        <TouchableOpacity>
          <Text>Show InterstialAds</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
