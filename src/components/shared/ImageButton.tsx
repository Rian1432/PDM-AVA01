import { Text, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native'
import React from 'react'

type ImageButtonProps = {
    title?: string
    source?: string
    handlePress: any
    customStyle?: object
}

export default function ImageButton({ title, source, handlePress, customStyle }: ImageButtonProps) {
    return (
        <TouchableOpacity onPress={handlePress} style={[styles.button, customStyle]}>
            <Image source={{uri: source}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'relative',
        borderRadius: 6,
        backgroundColor: '#ccc',
        minHeight: 35,
        minWidth: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 35,
        borderRadius: 6,
    },
    title: {
        color: 'black',
        textAlign: 'center',
        position: 'absolute',
    },
});