import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants';

const CategoryHeader = ({ setMode, mode, data }) => {

    return (
        <View style={{
            flexDirection: "row",
            padding: SIZES.padding,
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            {/* Title */}
            <View>
                <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>CATEGORIES</Text>
                <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>{data.length} Total</Text>
            </View>
            {/* Buttons */}
            <View style={{
                flexDirection: "row"
            }}>
                <TouchableOpacity
                    onPress={() => setMode("chart")}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 50,
                        width: 50,
                        backgroundColor: mode === "chart" ? COLORS.secondary : null,
                        borderRadius: 25
                    }}
                >
                    <Image resizeMode="contain" style={{
                        width: 20, height: 20,
                        tintColor: mode === "chart" ? COLORS.white : COLORS.darkgray
                    }} source={icons.chart} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setMode("list")}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 50,
                        width: 50,
                        backgroundColor: mode === "list" ? COLORS.secondary : null,
                        borderRadius: 25
                    }}
                >
                    <Image resizeMode="contain" style={{
                        width: 20, height: 20,
                        tintColor: mode === "list" ? COLORS.white : COLORS.darkgray
                    }} source={icons.menu} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CategoryHeader
