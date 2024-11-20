import { Text, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native'
import React from 'react'

type ImageButtonProps = {
    title?: string
    source?: string
    handlePress: any
    customStyle?: object
}

export default function ImageButton({ title, source, handlePress, customStyle }: ImageButtonProps) {
    const renderButtonContent = () => {
        if(source) {
            return <Image source={{uri: source}} style={styles.image} />
        }
        return <Text>{title}</Text>
    }

    return (
        <TouchableOpacity onPress={handlePress} style={[styles.button, customStyle]}>
            {renderButtonContent()}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 6,
        backgroundColor: '#ccc',
        minHeight: 30,
        minWidth: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 30,
        borderRadius: 6,
    },
    title: {
        color: 'black',
        textAlign: 'center'
    },
});