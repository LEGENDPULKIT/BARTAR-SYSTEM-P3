import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Alert,Modal,ScrollView,KeyboardAvoidingView } from 'react-native';
import db from '../config'
import firebase from 'firebase'
import MyHeader from '../components/MyHeader'

export default class HomeScreen extends React.Component
{
    constructor()
    {
        super()
        this.state={
            allExchanges:[],
        }
        this.requestRef=null
    }

    getAllRequests=()=>
    {
        this.requestRef=db.collection('exchanges').
        onSnapshot((snapshot)=>
        {
            var allRequests=snapshot.docs.map(document=>document.data());
            this.setState({
                allExchanges:allRequests
            })
        })
    }

    render()
    {
        return(
            <View>
                <Text>HOME SCREEN</Text>
            </View>
        )
    }
}