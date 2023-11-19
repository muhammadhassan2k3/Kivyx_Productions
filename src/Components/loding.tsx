import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Loading = () => {
    return(
        <View>
            <ActivityIndicator size={"large"} color={'red'} />
        </View>
    )
}

const styles = StyleSheet.create({
    LoadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Loading;