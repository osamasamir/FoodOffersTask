import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
    return (
<FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
    )
}

const styles = StyleSheet.create({})
