import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from 'axios'

const useAxios = () => {

    const [data, setData] = React.useState()


    const getRequest = React.useCallback((url, header, payload={}) => {
        axios({
            method: 'GET',
            url: url,
            headers: header
        }).then(res => {
            console.log(res, 'response')
            setData(res.data)
        }).catch(err => console.log(err))
    }, [])

    
    return {data, getRequest}
  
}

export default useAxios

