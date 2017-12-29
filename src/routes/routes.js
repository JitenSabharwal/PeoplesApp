import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import Home from '../components/home'
import People from '../components/people'

const Router =  StackNavigator({
  Home: {screen: Home},
  People: {screen: People}
})

export default Router