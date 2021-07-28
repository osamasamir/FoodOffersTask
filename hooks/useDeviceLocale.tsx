import { Platform, NativeModules } from 'react-native';

export default function useDeviceLocale(): NonNullable<LanguageName> {
    const deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
        : NativeModules.I18nManager.localeIdentifier;
        let CurrentLanguage:NonNullable<LanguageName>;
switch (deviceLanguage.substring(0,2)) {
    case 'en':
        CurrentLanguage='en'
        break;
        case 'ar':
            CurrentLanguage='ar'
            break;
    
    default:
        CurrentLanguage='en'
        break;
}
  return CurrentLanguage ;
}
