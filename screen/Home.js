import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CategoryHeader from '../components/CategoryHeader'
import HomeHeader from '../components/HomeHeader'
import HomeNavBar from '../components/HomeNavBar'
import { COLORS } from '../constants'
import { categoriesData } from '../initialData'

const Home = () => {
    const [viewMode, setViewMode] = useState("chart");
    const [categories, setCategories] = useState(categoriesData);
    return (
        <View style={styles.container}>
            <HomeNavBar />
            <HomeHeader />
            <CategoryHeader data={categories} mode={viewMode} setMode={setViewMode} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: COLORS.lightGray
    }
});

