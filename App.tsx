import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Sizes } from './src/static/Info'
import { Shadow } from 'react-native-shadow-2';


const App = () => {


  return (
    
    <LinearGradient useAngle={true} angle={100} angleCenter={{x:0.40, y:0.20}}  colors={['#F9D8DD', '#F8F6F9', '#DEEDF7', '#F0E8F4']} style={{flex: 1}}>

      <SafeAreaView style={{gap: 35, flex: 1}}>

        {/* Header */}
        <View style={{marginTop: 10, paddingHorizontal: Sizes.horizontalPadding, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>

          {/* Menu */}
          <Shadow distance={3} offset={[0, 0]}>
            <LinearGradient colors={["#EBD9E8", "#F6F1F6"]} style={[{alignItems: 'center', justifyContent: 'center', borderRadius: 10, width: 45, height: 45}]}>
              <Image 
                source={require("./src/assets/menu.png")}
                style={{width: 17, height: 17}}
              />
            </LinearGradient>
          </Shadow>

          <Image 
            source={require("./src/assets/lady1.jpeg")}
            style={{width: 47, height: 47, borderWidth: 2, borderColor: "white", borderRadius: 10}}
          />
        </View>


        {/* Welcome */}
        <View style={{gap: 20, flex: 1}}>
          
          <View style={{paddingHorizontal: Sizes.horizontalPadding, gap: 20}}>

            {/* Text */}
            <View>
              <Text style={{fontSize: 28, fontWeight: '400'}}>Welcome Back,</Text>
              <Text style={{fontSize: 28, fontWeight: '700'}}>Sophia !</Text>
            </View>


            {/* Card */}
            <Shadow distance={3} offset={[0, 0]} style={{width: "100%"}}>
              <LinearGradient useAngle={true} angleCenter={{x:0.40, y:0.20}} colors={["#FDF3F4", "#F1F2F5", "#F1F2F5"]} style={{paddingVertical: 30, paddingHorizontal: 30, borderRadius: 20, justifyContent: 'center', borderWidth: 2, borderColor: 'white', height: 180}}>
                <Text style={{color: '#A5A0A5', fontWeight: '500', fontSize: 16}}>Your Balance</Text>
                {/* Balance */}
                <View style={{marginVertical: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 38, fontWeight: '600'}}>$5,480</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', position: 'relative', marginRight: 5}}>

                      <LinearGradient useAngle={true} angleCenter={{x:0.40, y:0.20}} colors={["#CFAFFE", "#B7C7FE"]} style={{alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#CFAFFE', borderRadius: 15, width: 52, height: 52, position: 'absolute', left: -35}}>
                        <Image 
                          source={require("./src/assets/apple.png")}
                          style={{width: 25, height: 25}}
                        />
                      </LinearGradient>

                      <LinearGradient useAngle={true} angleCenter={{x:0.40, y:0.20}} colors={["#E8B2E8", "#F6D9BA"]} style={{alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#E8B2E8', borderRadius: 15, width: 52, height: 52}}>
                        <Image 
                          source={require("./src/assets/tesla.png")}
                          style={{width: 25, height: 25}}
                        />
                      </LinearGradient>

                    </View>
                    <Text style={{color: '#A5A0A5', fontWeight: '500', fontSize: 16}}>15 +</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 7}}>
                  <View style={{backgroundColor: 'white', borderRadius: 52, alignItems: 'center', justifyContent: 'center', height: 20, width: 20}}>
                    <Image
                      source={require('./src/assets/arrow-up.png')}
                      style={{width: 18, height: 18}}
                    />
                  </View>
                  <Text style={{fontWeight: '500', color: '#349986'}}>$ 61,66 (80.14%)</Text>
                </View>
              </LinearGradient>
            </Shadow>


            <View style={{gap: 10}}>
              <Text style={{fontSize: 22, fontWeight: '600'}}>Investment</Text>
              <LinearGradient useAngle={true} angle={40} angleCenter={{x:0.30, y:0.20}}  colors={['#F9D8DD', '#F8F6F9', '#DEEDF7', '#F8F6F9']} 
                style={{height: 60, width: '100%', padding: 10, justifyContent: 'center', borderRadius: 52, flexDirection: 'row', alignItems: 'center' }}
              >
                <View style={{height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 52, backgroundColor: 'white', width: '50%'}}>
                  <Text style={{fontWeight: '600'}}>My</Text>
                </View>
                <View style={{height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 52, width: '50%'}}>
                  <Text style={{fontWeight: '600'}}>Popular</Text>
                </View>
              </LinearGradient>
            </View>

          </View>


          {/* Products */}
          <LinearGradient 
            useAngle={true} 
            angle={100} 
            angleCenter={{x:0.40, y:0.20}}  
            colors={['#F0E9F7', '#EEF3FA', '#EEF3FA']} 
            style={{flex: 1, borderTopRightRadius: 50, borderTopLeftRadius: 50, paddingTop: Sizes.horizontalPadding - 5, paddingHorizontal: Sizes.horizontalPadding}}
          >

            <View style={{height: 6, marginBottom: 15, alignSelf: 'center', borderRadius: 51, width: 60, backgroundColor: "#B4B0BA"}}></View>

            <View style={{gap: 15}}>

              {/* Apple */}
              <Shadow distance={2} offset={[0, 1]} style={{width: "100%"}}>
                <View style={{padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 15, backgroundColor: "white"}}>

                  <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                    <LinearGradient useAngle={true} angleCenter={{x:0.40, y:0.20}} colors={["#CFAFFE", "#B7C7FE"]} style={{alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#CFAFFE', borderRadius: 15, width: 52, height: 52}}>
                      <Image
                        source={require("./src/assets/apple.png")}
                        style={{width: 25, height: 25}}
                      />
                    </LinearGradient>
                    <View style={{gap: 4}}>
                      <Text style={{fontSize: 16, fontWeight: '400'}}>Apple</Text>
                      <Text style={{fontSize: 14, opacity: 0.5}}>AAPL</Text>
                    </View>
                  </View>

                  <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                    <View style={{gap: 4, alignItems: 'flex-end'}}>
                      <Text style={{fontSize: 16, fontWeight: '400'}}>$ 134,36</Text>
                      <View style={{flexDirection: 'row', alignItems: 'center', gap: 7}}>
                      <View style={{backgroundColor: 'white', borderRadius: 52, alignItems: 'center', justifyContent: 'center', height: 20, width: 20}}>
                        <Image
                          source={require('./src/assets/arrow-up.png')}
                          style={{width: 18, height: 18}}
                        />
                      </View>
                      <Text style={{fontWeight: '500', color: '#349986'}}>$ 61,66 (80.14%)</Text>
                    </View>
                    </View>
                  </View>

                </View>
              </Shadow>

              {/* Tesla */}
              <Shadow distance={2} offset={[0, 1]} style={{width: "100%"}}>
                <View style={{padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 15, backgroundColor: "white"}}>

                  <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                    <LinearGradient useAngle={true} angleCenter={{x:0.40, y:0.20}} colors={["#E8B2E8", "#F6D9BA"]} style={{alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#E8B2E8', borderRadius: 15, width: 52, height: 52}}>
                        <Image
                          source={require("./src/assets/tesla.png")}
                          style={{width: 25, height: 25}}
                        />
                    </LinearGradient>
                    <View style={{gap: 4}}>
                      <Text style={{fontSize: 16, fontWeight: '400'}}>Apple</Text>
                      <Text style={{fontSize: 14, opacity: 0.5}}>AAPL</Text>
                    </View>
                  </View>

                  <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                    <View style={{gap: 4, alignItems: 'flex-end'}}>
                      <Text style={{fontSize: 16, fontWeight: '400'}}>$ 730,64</Text>
                      <View style={{flexDirection: 'row', alignItems: 'center', gap: 7}}>
                      <View style={{backgroundColor: 'white', borderRadius: 52, alignItems: 'center', justifyContent: 'center', height: 20, width: 20}}>
                        <Image
                          source={require('./src/assets/arrow-up.png')}
                          style={{width: 18, height: 18}}
                        />
                      </View>
                      <Text style={{fontWeight: '500', color: '#349986'}}>$ 579,66 (384.19%)</Text>
                    </View>
                    </View>
                  </View>

                </View>
              </Shadow>


              {/* Nike */}
              <Shadow distance={2} offset={[0, 1]} style={{width: "100%"}}>
                <View style={{padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 15, backgroundColor: "white"}}>

                  <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                    <LinearGradient useAngle={true} angleCenter={{x:0.40, y:0.20}} colors={["#F4D5C0", "#E6BBE8"]} style={{alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#E8B2E8', borderRadius: 15, width: 52, height: 52}}>
                        <Image
                          source={require("./src/assets/nike.png")}
                          style={{width: 35, height: 35}}
                        />
                    </LinearGradient>
                    <View style={{gap: 4}}>
                      <Text style={{fontSize: 16, fontWeight: '400'}}>Apple</Text>
                      <Text style={{fontSize: 14, opacity: 0.5}}>AAPL</Text>
                    </View>
                  </View>

                  <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                    <View style={{gap: 4, alignItems: 'flex-end'}}>
                      <Text style={{fontSize: 16, fontWeight: '400'}}>$ 134,31</Text>
                      <View style={{flexDirection: 'row', alignItems: 'center', gap: 7}}>
                      <View style={{backgroundColor: 'white', borderRadius: 52, alignItems: 'center', justifyContent: 'center', height: 20, width: 20}}>
                        <Image
                          source={require('./src/assets/alt-arrow-down.png')}
                          style={{width: 18, height: 18}}
                        />
                      </View>
                      <Text style={{fontWeight: '500', color: '#F37F66'}}>$ 579,66 (384.19%)</Text>
                    </View>
                    </View>
                  </View>

                </View>
              </Shadow>

            </View>

          </LinearGradient>

        </View>

      </SafeAreaView>

    </LinearGradient>

  )
}

export default App

const styles = StyleSheet.create({
  shadow: {  
    borderColor:'black', // if you need 
    borderWidth:1,
    overflow: 'hidden',
    backgroundColor: 'black',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
  }
});