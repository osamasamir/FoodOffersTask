
import * as React from 'react';
import Locale from '../constants/Locale';
import useDeviceLocale from './useDeviceLocale';

export function useLocale(
  props: { en?: string; ar?: string },
  stringName: keyof typeof Locale.en & keyof typeof Locale.ar
) {
  if(props.ar == 'Arabic'){
    const locale ='ar';
    const stringFromLocale = props[locale];  
    // if (stringFromLocale) {
    //   return stringFromLocale;
    // }
    //  else {
      return Locale[locale][stringName];
    //}    
  }
  else if(props.ar == 'English'){
    const locale ='en';
    const stringFromLocale = props[locale]; 
    // if (stringFromLocale) {
    //   return stringFromLocale;
    // }
    //  else {
      return Locale[locale][stringName];
    //}     
  }
  else{
    const locale =useDeviceLocale();
    const stringFromLocale = props[locale];  
    // if (stringFromLocale) {
    //   return stringFromLocale;
    // }
    //  else {
      return Locale[locale][stringName];
   // }  
  
  }
//   const locale =props.ar=='arabic'?'ar':useDeviceLocale();
// const stringFromLocale = props[locale];
  
  
}
