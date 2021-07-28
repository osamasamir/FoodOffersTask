import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View,TouchableOpacity,BackHandler } from 'react-native'
import { ScreenContext } from '../../contexts/screeContext';
import { useLocale } from '../../hooks/useLocale';
import { FontAwesome } from '@expo/vector-icons';
import {Image,ScrollView,FlatList } from 'react-native';
import Swiper from 'react-native-swiper'

  type props=StackNavigationProp<AuthParamList>;

  export default class signInScreen extends React.Component {
    horizontailList=[{id:1,Image:require("../../assets/images/1.jpg")},{id:2,Image:require("../../assets/images/2.jpg")},{id:3,Image:require("../../assets/images/3.jpg")},{id:4,Image:require("../../assets/images/4.jpg")},{id:5,Image:require("../../assets/images/5.jpg")},{id:6,Image:require("../../assets/images/6.jpg")},{id:7,Image:require("../../assets/images/8.jpg")},{id:8,Image:require("../../assets/images/9.jpg")},{id:9,Image:require("../../assets/images/10.jpg")}]
    vertialList=[{id:1,state:'open',star:5,name:"Mcdonald's",fontawos:require("../../assets/images/mac.jpg"),Image:require("../../assets/images/10.jpg")},{id:2,state:'close',star:3,name:"Kfc",fontawos:require("../../assets/images/kfc.png"),Image:require("../../assets/images/9.jpg")},{id:3,state:'open',star:4,name:"L'gerraa",fontawos:require("../../assets/images/mac.jpg"),Image:require("../../assets/images/8.jpg")},{id:4,state:'close',star:5,name:"C'la",fontawos:require("../../assets/images/kfc.png"),Image:require("../../assets/images/6.jpg")},{id:5,state:'open',star:4,name:"Live",fontawos:require("../../assets/images/mac.jpg"),Image:require("../../assets/images/5.jpg")},{id:6,state:'open',star:5,name:"Mcdonald's",fontawos:require("../../assets/images/mac.jpg"),Image:require("../../assets/images/4.jpg")},{id:7,state:'open',star:5,name:"Mcdonald's",fontawos:require("../../assets/images/kfc.png"),Image:require("../../assets/images/3.jpg")},{id:8,state:'open',star:5,name:"Mcdonald's",fontawos:require("../../assets/images/mac.jpg"),Image:require("../../assets/images/2.jpg")},{id:9,state:'open',star:5,name:"Kfc",fontawos:require("../../assets/images/kfc.png"),Image:require("../../assets/images/1.jpg")}]

    navigatin :any;
    language='English'
            backtimer=1
            isroute=false
            state = {
              confirmationAlert:false,
              noMoreTasks:false,
              stop:true
                  };   
          
  static  contextType=ScreenContext;
  
 async UNSAFE_componentWillMount(){
    this.isroute=false
   BackHandler.addEventListener('hardwareBackPress',this.handleBackButtonClick)
  }

  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress',this.handleBackButtonClick)

  }

 dat=new Date().toDateString();
    constructor(props:props) {
        super(props);
        this.navigatin= this.props;
            console.log(this.dat)
            setTimeout(() => {
              this.setState({stop:false})
            },200);
        }
        handleBackButtonClick=()=>{
            this.backtimer++
            if(this.isroute == false){
              if(this.backtimer == 3 ){
                this.setState({confirmationAlert:true})
                this.backtimer=1
              }
            }
            else{
              if(this.backtimer == 3 ){
                this.setState({confirmationAlert:true})
                this.backtimer=1
                this.isroute=false
              }    
            }  

            return true  
        }
        
        confirmationLogout(){
          this.setState({confirmationAlert:false})
          this.isroute=false
          BackHandler.exitApp()
        }
        confirmationCancel(){
          this.setState({confirmationAlert:false})
          this.isroute=false
        }
        
        render() {  
            if(this.state.stop == true){
             return(
 //#region codeOf waiting for 2 secode until all resources loaded
              <View style={{flexDirection: 'column',flex:1}}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image  style={styles.avatarwitingApp}
                          source={require('../../assets/images/appicon.png')}/>
                <ActivityIndicator  
            color="#2F80ED" size="large">
            </ActivityIndicator>
            </View>
     </View>
                 //#endregion
             )
            }
            else{
    return (
             <View style={{flex: 1,flexDirection:'column',backgroundColor:'#FFFFFF'}}>
                                  
   {/* #region codeOf header */}
             <View>
     <View style={{flexDirection: 'row',flex:1,backgroundColor:'#FFFFFF',paddingTop:20,paddingBottom:15}}>
            <View style={{flex: 1,alignItems:'flex-start',paddingLeft:10,alignSelf:'center'}}>
             <Text style={{color:'black',fontSize:22,fontWeight:'bold'}}>Discover</Text>
       </View>

       </View>
       </View>
       {/* //#endregion */}


{/* //#region code of Slider */}
   <View style={{paddingTop:10,paddingLeft:10,paddingRight:10,flexDirection:'row',maxHeight:'30%'}}>

       <Swiper>
           <Image style={{width:'100%',height:'100%',borderBottomLeftRadius:15,borderBottomRightRadius:15,borderTopLeftRadius:15,borderTopRightRadius:15}}
                          source={require('../../assets/images/4.jpg')}/>
           <Image style={{width:'100%',height:'100%',borderBottomLeftRadius:15,borderBottomRightRadius:15,borderTopLeftRadius:15,borderTopRightRadius:15}}
                          source={require('../../assets/images/2.jpg')}/>
                 
                 <Image style={{width:'100%',height:'100%',borderBottomLeftRadius:15,borderBottomRightRadius:15,borderTopLeftRadius:15,borderTopRightRadius:15}}
                          source={require('../../assets/images/3.jpg')}/>
           <Image style={{width:'100%',height:'100%',borderBottomLeftRadius:15,borderBottomRightRadius:15,borderTopLeftRadius:15,borderTopRightRadius:15}}
                          source={require('../../assets/images/1.jpg')}/>
           <Image style={{width:'100%',height:'100%',borderBottomLeftRadius:15,borderBottomRightRadius:15,borderTopLeftRadius:15,borderTopRightRadius:15}}
                          source={require('../../assets/images/5.jpg')}/>
           <Image style={{width:'100%',height:'100%',borderBottomLeftRadius:15,borderBottomRightRadius:15,borderTopLeftRadius:15,borderTopRightRadius:15}}
                          source={require('../../assets/images/6.jpg')}/>
           <Image style={{width:'100%',height:'100%',borderBottomLeftRadius:15,borderBottomRightRadius:15,borderTopLeftRadius:15,borderTopRightRadius:15}}
                          source={require('../../assets/images/8.jpg')}/>
           <Image style={{width:'100%',height:'100%',borderBottomLeftRadius:15,borderBottomRightRadius:15,borderTopLeftRadius:15,borderTopRightRadius:15}}
                          source={require('../../assets/images/9.jpg')}/>
           <Image style={{width:'100%',height:'100%',borderBottomLeftRadius:15,borderBottomRightRadius:15,borderTopLeftRadius:15,borderTopRightRadius:15}}
                          source={require('../../assets/images/10.jpg')}/>


        </Swiper>
        </View>
{/* //#endregion */}

        <View style={styles.notificationLists}>
       <Text style={{color:'#434445',fontSize:22,fontWeight:'bold'}}>Categories</Text>
          </View>

          {/* //#region codeOf Categories */}
          <View style={{flexDirection:'column',paddingLeft:10,paddingRight:10,}}>
          <View style={{flexDirection:'row',width:'100%'}}>
          <View style={{width:'25%'}}>
          <TouchableOpacity >
          <Image style={{width:30,height:30,alignSelf:'center',borderBottomLeftRadius:5,borderBottomRightRadius:5,borderTopLeftRadius:5,borderTopRightRadius:5}} source={require('../../assets/images/10.jpg')}></Image>
          <Text style={{fontSize:10,alignSelf:'center'}}>Reservation</Text>
          </TouchableOpacity>
          </View>
          <View style={{width:'25%'}}>
          <TouchableOpacity >
          <Image style={{width:30,height:30,alignSelf:'center',borderBottomLeftRadius:5,borderBottomRightRadius:5,borderTopLeftRadius:5,borderTopRightRadius:5}} source={require('../../assets/images/9.jpg')}></Image>
          <Text style={{fontSize:10,alignSelf:'center'}}>Join Table</Text>
          </TouchableOpacity>
          </View>
          <View style={{width:'25%'}}>
          <TouchableOpacity >
          <Image style={{width:30,height:30,alignSelf:'center',borderBottomLeftRadius:5,borderBottomRightRadius:5,borderTopLeftRadius:5,borderTopRightRadius:5}} source={require('../../assets/images/8.jpg')}></Image>
          <Text style={{fontSize:10,alignSelf:'center',textAlign:'center'}}>Reservation & Pre Order</Text>
          </TouchableOpacity>
          </View>
          <View style={{width:'25%'}}>
          <TouchableOpacity >
          <Image style={{width:30,height:30,alignSelf:'center',borderBottomLeftRadius:5,borderBottomRightRadius:5,borderTopLeftRadius:5,borderTopRightRadius:5}} source={require('../../assets/images/6.jpg')}></Image>
          <Text style={{fontSize:10,alignSelf:'center'}}>Pickup</Text>
          </TouchableOpacity>
          </View>
          </View>



          <View style={{flexDirection:'row',width:'100%'}}>
          <View style={{width:'25%'}}>
          <TouchableOpacity >
          <Image style={{width:30,height:30,alignSelf:'center',borderBottomLeftRadius:5,borderBottomRightRadius:5,borderTopLeftRadius:5,borderTopRightRadius:5}} source={require('../../assets/images/3.jpg')}></Image>
          <Text style={{fontSize:10,alignSelf:'center'}}>Delivery</Text>
          </TouchableOpacity>
          </View>
          <View style={{width:'25%'}}>
          <TouchableOpacity >
          <Image style={{width:30,height:30,alignSelf:'center',borderBottomLeftRadius:5,borderBottomRightRadius:5,borderTopLeftRadius:5,borderTopRightRadius:5}} source={require('../../assets/images/2.jpg')}></Image>
          <Text style={{fontSize:10,alignSelf:'center'}}>Catering</Text>
          </TouchableOpacity>
          </View>
          <View style={{width:'25%'}}>
          <TouchableOpacity >
          <Image style={{width:30,height:30,alignSelf:'center',borderBottomLeftRadius:5,borderBottomRightRadius:5,borderTopLeftRadius:5,borderTopRightRadius:5}} source={require('../../assets/images/1.jpg')}></Image>
          <Text style={{fontSize:10,alignSelf:'center',textAlign:'center'}}>Coupons</Text>
          </TouchableOpacity>
          </View>
          <View style={{width:'25%'}}>
          <TouchableOpacity >
          <Image style={{width:30,height:30,alignSelf:'center',borderBottomLeftRadius:5,borderBottomRightRadius:5,borderTopLeftRadius:5,borderTopRightRadius:5}} source={require('../../assets/images/4.jpg')}></Image>
          <Text style={{fontSize:10,alignSelf:'center'}}>Offers</Text>
          </TouchableOpacity>
          </View>
          </View>

          </View>
{/* //#endregion */}

          <View style={[styles.notificationLists,{marginBottom:30}]}>
       <Text style={{color:'#434445',fontSize:22,fontWeight:'bold'}}>Featured Restaurant</Text>
          </View>

       <View style={{flex:1}}>
{/* //#region codeOf Featured Restaurant */}
            <FlatList 
          style={styles.notificationList} 
          data={this.vertialList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item,index}) => {
            return (
              <View style={styles.notificationBoxcol}>
               <View   style={styles.AllpriceoftaskleftSide}>
                    <Image style={styles.avatarNew} 
                      source={item.Image}/>
                 </View>
                 <View   style={{flexDirection:'row',width:'100%'}}>
                 <View   style={{flexDirection:'column',justifyContent:'flex-start',paddingLeft:10,width:'50%'}}>
                 <Image style={{width:30,height:30,marginTop:-25,marginLeft:20,borderBottomLeftRadius: 5,borderBottomRightRadius: 5,borderTopLeftRadius: 5,borderTopRightRadius: 5}}
                      source={item.fontawos}/>
                                     <Text style={styles.createdBy}>{item.name}</Text>
                                     </View>
                                     <View   style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end',paddingRight:10,width:'50%'}}>
                                     <FontAwesome size={15} style={{ color:'yellow',textAlignVertical:'center' }} name="star" />
                                     <Text style={styles.star}> </Text>
                                     <Text style={styles.star}>{item.star}</Text>
                                     <Text style={styles.star}>     </Text>
                                     {item.state == 'open'  &&
                                     <Text style={styles.state}>{item.state}</Text>}
                                     {item.state == 'close'  &&
                                     <Text style={styles.states}>{item.state}</Text>}

                                     </View>

                                     </View>
                 </View>

            )}}/>
            {/* //#endregion */}
            {/* //#region codeOf MainBar */}
                      <View style={[styles.bottom,{position:'absolute'}]}>
     <TouchableOpacity   style={[styles.bottomfirst ]} >
     <FontAwesome size={25} style={{textAlignVertical:'center',color:'red' }} name="home" />
            <Text style={[styles.bottomText,{color:'red',fontWeight:'bold'}]}>{useLocale({ar:this.language},'MainPage')}</Text>
          </TouchableOpacity>

          <TouchableOpacity   style={[styles.bottomsecond ]}  >
          <FontAwesome size={20} style={{textAlignVertical:'center' }} name="search" />
            <Text style={styles.bottomText}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity   style={[styles.bottomthird ]} >
          <FontAwesome size={20} style={{textAlignVertical:'center' }} name="first-order" />
            <Text style={styles.bottomText}>Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity   style={[styles.bottomtFour ]} >
          <FontAwesome size={20} style={{textAlignVertical:'center' }} name="object-group" />
            <Text style={styles.bottomText}>Rewards</Text>
          </TouchableOpacity>

     </View>
{/* //#endregion */}
</View>
            
 {/* //#region  codeOf CloseApp when back twice */}
  {this.state.confirmationAlert == true  &&
     <View style={{backgroundColor:'#E2E4E3',position:'absolute',left:'5%',right:'5%',top:'25%',zIndex:1,
    width:'90%',height:'40%',flexDirection: 'column'}}>
                  <ScrollView>
              <View style={{flexDirection: 'row'}}>
              <Image style={styles.avatar} source={require("../../assets/images/appicon.png")}  />
            <Text style={{color:'black',textAlignVertical:'center',paddingLeft:10,paddingTop:10,fontSize:18,fontWeight:'bold',textAlign:'left',paddingBottom:30}}>{useLocale({ar:this.language},'FoodOffers')}</Text>
            </View>
            <Text style={{color:'#140BC3',fontSize:16,textAlign:'center'}}>{useLocale({ar:this.language},'Sureclose')}</Text>
            </ScrollView>
        <View style={{flexDirection: 'row',justifyContent:'space-between'}}>   

        <TouchableOpacity   style={{width:'50%',alignItems:'center',justifyContent:'center'}} onPress={() => this.confirmationCancel()}>
            <Text style={{color: '#00b5ec',fontWeight:'bold',fontSize:20,}}>{useLocale({ar:this.language},'cancel')}</Text>
          </TouchableOpacity>
          <TouchableOpacity   style={{width:'50%',alignItems:'center',justifyContent:'center'}} onPress={() => this.confirmationLogout()}>
            <Text style={{color: 'red',fontWeight:'bold',fontSize:20,}}>{useLocale({ar:this.language},'ok')}</Text>
          </TouchableOpacity>
        </View>
    </View>}
    {/* //#endregion */}

          </View>
    )
    }
    }
}
//#region all Style
const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 43,
    borderWidth: 2,
    borderColor: "#EBEBEB",
  },
  avatarNew: {
    width: '100%',
    height: 130,
    borderWidth: 1,
    borderBottomLeftRadius:15,borderBottomRightRadius:15,borderTopLeftRadius:15,borderTopRightRadius:15
  },
    notificationList:{
      marginBottom:5,
      paddingLeft:10,
      paddingTop:0,
      paddingRight:10,
     marginTop:-30
    },
    notificationLists:{
      marginTop:5,
      paddingLeft:10,
    },
    notificationBoxcol: {
      paddingLeft:0,
      marginBottom:5,
      flexDirection: 'column',
    },
    imagerow:{
      flexDirection: 'row',
      justifyContent:'flex-start',
      alignItems:'flex-start'

    },
    bottom:{
      flexDirection: 'row',
      backgroundColor:'#f5cb42',
      paddingBottom:0,
      paddingTop:5,
    },
    bottomfirst:{
      width:'25%',
      flexDirection: 'column',
      alignItems:'center',
      justifyContent:'center'
    },
    bottomsecond:{
      width:'25%',
      flexDirection: 'column',
      alignItems:'center',
      justifyContent:'center'
    },
    bottomthird:{
      width:'25%',
      flexDirection: 'column',
      alignItems:'center',
      justifyContent:'center'
    },
    bottomtFour:{
      width:'25%',
      flexDirection: 'column',
      alignItems:'center',
      justifyContent:'center'
    },
    AllpriceoftaskleftSide:{
      flexDirection: 'column',
      marginTop:5,
      marginBottom:5,
    },
    avatarwitingApp: {
      width: 80,
      height: 80,
      borderRadius: 43,
      borderWidth: 1,
    },
    createdBy:{
      fontWeight:'bold',
      textAlign:'left',
      fontSize:16,
      color: "black",
    },
    star:{
     color:'yellow',
     fontWeight:'bold'
    },
    state:{
      color:'green',
      fontSize:14,
     },
     states:{
      color:'red',
      fontSize:14,
     },
    rate:{
      fontSize:18,
      color: "gray",
      marginLeft:5,
    },
    bottomText:{
      color: 'gray',
      fontSize:12,
    },
  });
  //#endregion