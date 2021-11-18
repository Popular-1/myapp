import React from "react";
import { View, Text, Image, TouchableOpacity,ScrollView } from "react-native";
import { Ionicons, FontAwesome, AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";

export default function Home() {
    return (
        <View style={{
            backgroundColor: 'white', 
            flex: 1,
            marginRight: 5, 
            paddingTop: 30, 
            paddingHorizontal: 10,
            marginLeft: -8,
            }}>
                <ScrollView>
            <View style={{
                flexDirection: 'row', 
                justifyContent:'space-between', 
                alignItems:'center',
                }}>
                <Ionicons name="ios-menu-outline" size={24} color="black" />
                <FontAwesome name="motorcycle" size={24} color="black" />
                <View style={{flexDirection: 'row'}}>
                   <AntDesign name="search1" size={24} color="black" />
                   <Ionicons name="notifications-outline" size={22} color="black" />
                </View>
             </View>
             <Text style={{ color:'black', fontSize: 24, marginTop: 15,}}>The World's,  <Text style={{ color: 'rgb(256,100,10)', fontSize: 30, fontWeight: '500'}}>Best Bike</Text>
            </Text>
            <Text style={{color:'black', fontSize: 22, fontWeight:'700', marginTop:10}}>Categories</Text>
            <View style={{flexDirection: 'row', marginTop: 15}}>
                <View style={{
                    alignItems: 'center',
                    backgroundColor: '#e3e3e3', 
                    padding:10, 
                    borderRadius: 15,  
                    marginRight: 20,
                    width: 60,
                    height: 40 }}>
                        <TouchableOpacity><Text style={{color:'rgb(256,100,10)', fontSize:22,}}>All</Text></TouchableOpacity>
                </View>
                <View style={{ 
                    alignItems: 'center',
                    justifyContent:'space-between', 
                    backgroundColor: '#e3e3e3', 
                    padding:10, 
                    borderRadius: 15, 
                    marginRight: 20, 
                    width: 90,
                    height: 40 }}>
                        <TouchableOpacity><Text style={{fontWeight: '300', fontSize: 15}}>Roadbike</Text></TouchableOpacity>
                </View>
                <View style={{
                    alignItems: 'center', 
                    justifyContent:'space-between', 
                    backgroundColor: '#e3e3e3', 
                    padding:10, 
                    borderRadius: 15,
                    marginRight:20, 
                    width: 90,
                    height: 40 }}>
                        <TouchableOpacity><Text style={{fontWeight: '300', fontSize: 15}}>Mountain</Text></TouchableOpacity>
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyContent:'space-between', 
                    backgroundColor: '#e3e3e3', 
                    padding:10, 
                    borderRadius: 15,
                    marginRight: 20, 
                    width: 60,
                    height: 40 }}>
                        <TouchableOpacity><Text style={{fontWeight: '300', fontSize: 15}}>Urban</Text></TouchableOpacity>
                </View>
            </View>
            
            
            <View style ={{flexDirection: 'row', marginTop: 10 }}>
            <TouchableOpacity>
            <View style={{alignItems: 'center', marginTop: 10, backgroundColor: 'orange', padding: 10, borderRadius: 15, width: 185, height: 270 }}>
                <Image
                    style ={{
                        width: 170,
                        height: 210,
                        borderRadius: 20,
                        marginBottom: 5,
                    }} 
                    source ={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCT2MEt1R5x1fZfNsE_3WDWciV_1WqWOpHQ&usqp=CAU"
                    }}/>
                <Text style = {{ color: 'black', fontSize: 20, fontWeight: '100'}}>BMX Bike</Text>
                <Text style = {{ color: 'black', fontSize: 20, fontWeight: '700'}}>₵790.00</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{alignItems:'center', marginTop: 10, backgroundColor: 'orange', padding: 10, borderRadius: 15, width: 180, height: 270, marginLeft: 20}}>
                <Image
                    style ={{
                        marginLeft: 1,
                        width: 170,
                        height: 210,
                        borderRadius: 20,
                        marginBottom: 5,
                    }} 
                    source ={{
                        uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQangtONVm0QLYXAiN0qhRNpUBq-TskhNgKFA&usqp=CAU"
                    }}/>
                <Text style = {{ color: 'black', fontSize: 20, fontWeight: '100'}}>Pinorello Bike</Text>
                <Text style = {{ color: 'black', fontSize: 20, fontWeight: '700'}}>₵1,000.00</Text>
            </View>
            </TouchableOpacity>
            </View>
            <View style ={{flexDirection: 'row', marginTop: 10 }}>
            <TouchableOpacity>
            <View style={{alignItems: 'center', marginTop: 10, backgroundColor: 'orange', padding: 10, borderRadius: 15, width: 185, height: 270 }}>
                <Image
                    style ={{
                        width: 170,
                        height: 210,
                        borderRadius: 20,
                        marginBottom: 5,
                    }} 
                    source ={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ySIp9d2E-dDkK6MqOIvGAk6bdQPuzoV1rA&usqp=CAU"
                    }}/>
                    <Text style = {{ color: 'black', fontSize: 20, fontWeight: '100'}}>Schinn Bike</Text>
                    <Text style = {{ color: 'black', fontSize: 20, fontWeight: '700'}}>₵880.00</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{alignItems:'center', marginTop: 10, backgroundColor: 'orange', padding: 10, borderRadius: 15, width: 180, height: 270, marginLeft: 20}}>
                <Image
                    style ={{
                        marginLeft: 1,
                        width: 170,
                        height: 210,
                        borderRadius: 10,
                        marginBottom: 5,
                    }} 
                    source ={{
                        uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSok0lTKaGrd4Rs9f9iXtRp9EwxWbqHlVAw&usqp=CAU"
                    }}/>
                <Text style = {{ color: 'black', fontSize: 20, fontWeight: '100'}}>Norco Bike</Text>
                <Text style = {{ color: 'black', fontSize: 20, fontWeight: '700'}}>₵950.00</Text>
            </View>
            </TouchableOpacity>
            </View>
            <View style ={{flexDirection: 'row', marginTop: 10 }}>
            <TouchableOpacity>
            <View style={{alignItems: 'center', marginTop: 10, backgroundColor: 'orange', padding: 10, borderRadius: 15, width: 185, height: 270 }}>
                <Image
                    style ={{
                        width: 170,
                        height: 210,
                        borderRadius: 20,
                        marginBottom: 5,
                    }} 
                    source ={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATMf4e1ot9PH71ECw-k9Nzfyf4M_gx5nUr7I1ZBJ6tjhzRTD8eaM35sDSTIZZZTegojU&usqp=CAU"
                    }}/>
                    <Text style = {{ color: 'black', fontSize: 20, fontWeight: '100'}}>Upright Bike</Text>
                    <Text style = {{ color: 'black', fontSize: 20, fontWeight: '700'}}>₵990.00</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{alignItems:'center', marginTop: 10, backgroundColor: 'orange', padding: 10, borderRadius: 15, width: 180, height: 270, marginLeft: 20}}>
                <Image
                    style ={{
                        marginLeft: 1,
                        width: 170,
                        height: 210,
                        borderRadius: 10,
                        marginBottom: 5,
                    }} 
                    source ={{
                        uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9A_gQLGXb4I21QKwHU1qAfiDbLYHOHulCSIBA9en75Qt5CR49NZvt8BsYj7NgU8p7Bfc&usqp=CAU"
                    }}/>
                <Text style = {{ color: 'black', fontSize: 20, fontWeight: '100'}}>Bianchi Bike</Text>
                <Text style = {{ color: 'black', fontSize: 20, fontWeight: '700'}}>₵1,600.00</Text>
            </View>
            </TouchableOpacity>
            </View>

            <View style={{
                    flexDirection: "row",
                    backgroundColor: "#e3e3e3", 
                    justifyContent: "space-evenly", 
                    padding: 5,
                    width: 500,
                    marginLeft: -60,
                    
                    
                    }}
                    >
                    <View style={{ padding: 10, borderRadius: 40}}>
                    <AntDesign name="home" size={24} color="black" />
                    </View>

                    <View style={{padding: 10}}>
                    <MaterialIcons name="favorite-border" size={24} color="black" />
                    </View>
                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Cart")
                      }}
                      activeOpacity={0.15}
                    style={{ padding: 10}}>
                    <Feather name="shopping-bag" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                </ScrollView>
         </View>
    );
}   

