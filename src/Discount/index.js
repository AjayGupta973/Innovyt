import React from 'react'
import { Image, Text, View, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather'
import { SafeAreaView } from 'react-native-safe-area-context';
import { OFFER_DATA } from '../services/const';
import Styles from './styles';

const Discount = () => {
    return (
        <ScrollView style={Styles.mainContainer}>
            <SafeAreaView>
                <View style={Styles.container}>
                    <Image style={Styles.bannerImage}
                        source={require('../Assets/Images/banner.png')} />
                    <View style={Styles.bannerText}>
                        <Text style={Styles.summer}>Super Summer</Text>
                        <Text style={Styles.discount}>Discount</Text>
                        <View style={Styles.container_70}>
                            <Text style={Styles.upto_70_text}>Upto 70% OFF</Text>
                        </View>
                        <Text style={Styles.exciting}>& Many {'\n'}Exciting Offers</Text>
                    </View>
                    <View style={Styles.container_2}>
                        <View style={Styles.grriffins}>
                            <Text style={Styles.grriffinsInner}>Grriffins {'\n'}Restaurant</Text >
                        </View>
                        <View style={Styles.rateContainer}>
                            <Text style={Styles.rateContainerInner}>
                                <Icon name="star" style={{ fontSize: 16, color: '#F6A23B' }} />4.9</Text>
                        </View>
                        <View style={Styles.logoContainer}>
                            <Image
                                source={require('../Assets/Images/GrriffinLogo.png')}
                                style={Styles.logo}></Image>
                        </View>
                    </View>
                    <View style={Styles.addressContainer}>
                        <View style={Styles.address}>
                            <Icon name="map-marker" style={Styles.addressIcon} />
                            <Text style={{ color: "#000" }}>
                                Washington, D.C., DC,USA
                            </Text>
                        </View>
                        <View style={Styles.phone}>
                            <FeatherIcon name="phone-call" style={Styles.phoneIcon} />
                            <Text style={{ color: "#000" }}>
                                +0123 456 7891
                            </Text>
                        </View>
                        <View style={Styles.time}>
                            <FeatherIcon name="clock" style={Styles.phoneIcon} />
                            <Text style={{ fontWeight: 'bold', color: "#000" }}>
                                Opened Now:
                                <Text style={{ fontWeight: '400' }}>10:00 am - 10:00 pm</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={Styles.viewOffer}>
                        <Image source={require('../Assets/Images/Vector.png')} />
                        <Text style={Styles.viewOfferBtn}>View Offer</Text>
                    </View>
                    <View >
                        <Text style={Styles.savings}>Super Savings</Text>
                    </View>
                </View>
                <ScrollView horizontal={true} style={Styles.sliderContainer}>
                    {OFFER_DATA?.map((item, index) => {
                        return (
                            <View style={[Styles.card, { backgroundColor: `${item.background}` }]}
                                key={index}
                            >
                                <Text style={Styles.cardTitle}>{item.title}</Text>
                                <Text style={Styles.cardOffer}>{item.offer}</Text>
                                <View style={Styles.cardImage}>
                                    <Image source={item.image}></Image>
                                </View>
                                <View style={Styles.cardRate}>
                                    <Icon name="dollar" style={Styles.dollar} />
                                    <Text style={Styles.rate}> {item.rate}
                                    </Text>
                                </View>
                            </View>
                        )
                    })
                    }
                </ScrollView>
            </SafeAreaView >
        </ScrollView >
    )
}

export default Discount;