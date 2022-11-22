import { FC } from 'react';
import { Platform, View } from 'react-native';
// import { AdMobBanner } from 'expo-ads-admob';
import { BannerAd } from 'react-native-google-mobile-ads';

/**
 * Google AdMob child component.
 * 
 * adMob.json is untracked for security purposes, the json requires:
 * @AD_MOB_IOS_ID - AdMob ID imported from adMob.json for ios
 * @AD_MOB_ANDROID_ID - AdMob ID imported from adMob.json for android
 * 
 * @ad_ID - Platform selects which device you are currently on. Object
 * takes the ios or android ad unit ID.
 * 
 * PLEASE NOTE:
 * Ensure you NEVER load a real production ad in an Android Emulator or iOS Simulator. 
 * Failure to do this can result in a ban from the AdMob program. See readme for more
 * instructions. All test ads have a test ad label.
 */

const AdBanner:FC = () => {

    /**
     * NOTE:
     * On line 44, 45, and 52:
     * Keep ads for ios disabled for now.
     * Remove this truthy if ads are
     * ever decided to be implemented for
     * ios in the future.
     */

    const { 
        AD_MOB_IOS_ID,
        AD_MOB_ANDROID_ID
    } = require("../../clientSecret/adMob.json");

    const ad_ID: string = Platform.select({

        ios: AD_MOB_IOS_ID, //add a AD_MOB_IOS_ID to adMob.json if ever released for ios
        android: AD_MOB_ANDROID_ID,

    });

    return (
        <>
            { Platform.OS === "android" ? 
            (
                <View className="px-1 pt-1 pb-8">
                    <BannerAd 
                        unitId={ad_ID}
                        size="mediumRectangle"
                        // servePersonalizedAds={true} //???
                    />
                </View>
            ) : null }
        </>
    );

};

export default AdBanner;