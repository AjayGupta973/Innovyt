const { StyleSheet, Dimensions } = require("react-native");

const screenWidth = Dimensions.get('window').width;

const Styles = StyleSheet.create({
    mainContainer: {
        paddingBottom: 100,
        paddingTop: 5
    },
    container: {
        marginHorizontal: 28
    },
    bannerImage: {
        position: 'absolute',
        marginTop: '2%',
        width: '100%',
        display: "flex",
    },
    bannerText: {
        paddingTop: 150
    },
    summer: {
        textAlign: 'center',
        fontSize: 20,
        color: "#FFF",
        fontWeight: '800',
        letterSpacing: .2,
        lineHeight: 23.98
    },
    discount: {
        textAlign: 'center',
        fontSize: 30,
        color: "#FFF",
        fontWeight: '800',
        letterSpacing: .2,
        lineHeight: 34.92
    },
    container_70: {
        paddingTop: 10,
        alignSelf: 'center'
    },
    upto_70_text: {
        textAlign: 'center',
        fontSize: 14.29,
        color: "#FFF",
        fontWeight: '700',
        backgroundColor: '#F6A23B',
        paddingVertical: 4,
        paddingHorizontal: 13,
        lineHeight: 17.41
    },
    exciting: {
        textAlign: 'center',
        paddingTop: 10,
        fontSize: 11.85,
        color: "#FFF",
        fontWeight: '700',
        lineHeight: 14.45
    },
    container_2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    grriffins: {
        width: '40%'
    },
    grriffinsInner: {
        paddingTop: 10,
        fontSize: 24,
        color: "#000",
        fontWeight: '700',
        lineHeight: 28.2,
        paddingTop: 94,
    },
    rateContainer: {
        width: '20%'
    },
    rateContainerInner: {
        textAlign: 'left',
        paddingTop: 129,
        color: "#000"
    },
    logoContainer: {
        paddingTop: 93,
        width: '30%'
    },
    logo: {
        width: 97,
        height: 24
    },
    addressContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 18,
        borderBottomColor: 'rgba(0, 0, 0, 0.3)',
        borderBottomWidth: 1
    },
    address: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    addressIcon: {
        fontSize: 24,
        color: "#F6A23B",
        paddingRight: 5.76
    },
    phone: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 11
    },
    phoneIcon: {
        fontSize: 16,
        color: "#F6A23B",
        paddingRight: 4.32
    },
    time: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 11,
        paddingBottom: 28.49
    },
    viewOffer: {
        marginTop: 33.5,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#F6A23B',
        alignItems: 'center',
        paddingHorizontal: 17.19,
        paddingVertical: 12,
        borderRadius: 30,
        shadowColor: '#000',
        elevation: 4,
    },
    viewOfferBtn: {
        paddingLeft: 8,
        textAlign: 'center',
        fontSize: 14.29,
        color: "#FFF",
        fontWeight: '700',
        lineHeight: 17.41,
    },
    savings: {
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 21.15,
        marginTop: 34,
        color: 'rgba(96, 96, 96, 1)'
    },
    sliderContainer: {
        width: screenWidth,
        paddingLeft: 28,
        marginRight: 50,
        marginVertical: 31
    },
    card: {
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 40,
        borderRadius: 20,
        marginRight: 25,
        width: 150,
        height: 240
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#000'
    },
    cardOffer: {
        fontSize: 15,
        letterSpacing: 1,
        fontWeight: '900',
        color: '#FFF',
        lineHeight: 17.63
    },
    cardImage: {
        position: 'absolute',
        bottom: 40,
        left: 22,
        shadowColor: '#000',
        elevation: 20,
    },
    cardRate: {
        position: 'absolute',
        bottom: 12,
        left: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    dollar: {
        color: "#FFF",
        fontSize: 16.71,
        fontWeight: '700'
    },
    rate: {
        color: "#FFF",
        fontSize: 16.71,
        fontWeight: '700'
    }
});

export default Styles;