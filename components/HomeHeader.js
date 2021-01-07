import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'

const HomeHeader = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.expenseHeader}>My Expenses</Text>
                <Text style={styles.expenseSubHeader}>Summary (private)</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: SIZES.padding, alignItems: "center" }}>
                <View style={{
                    width: 50, height: 50,
                    backgroundColor: COLORS.lightGray,
                    borderRadius: 25,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image style={styles.calenderImage} source={icons.calendar} />
                </View>
                <View style={{ marginLeft: SIZES.padding }}>
                    <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>11 Nov, 2020</Text>
                    <Text style={{ color: COLORS.darkgray, ...FONTS.body3 }} > 18 % more than last month</Text>
                </View>
            </View>
        </View>
    )
}

export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white
    },
    expenseHeader: {
        ...FONTS.h2,
        color: COLORS.primary
    },
    expenseSubHeader: {
        ...FONTS.h3,
        color: COLORS.darkgray
    },
    calenderImage: {
        width: 20,
        height: 20,
        tintColor: COLORS.lightBlue
    },
});

