import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS, icons, SIZES } from '../constants'

const HomeNavBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    source={icons.back_arrow}
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.primary
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={{ alignItems: "flex-end" }}
            >
                <Image
                    source={icons.more}
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.primary
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default HomeNavBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 60,
        alignItems: "flex-end",
        paddingHorizontal: SIZES.padding,
        // paddingBottom: SIZES.padding,
        backgroundColor: COLORS.white
    }
})

