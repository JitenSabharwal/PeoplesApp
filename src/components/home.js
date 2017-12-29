import React, { Component } from 'react'
import { Platform, Text, Linking } from 'react-native'
import PropTypes from 'prop-types'

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }
  //Linking Listener
  componentDidMount = () => {
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then((url) => {
        this.navigate(url)
      })
    } else {
      Linking.addEventListener('url', this.handleOpenUrl)
    }
  }
  //Unlinking Listener
  componentWillUnmount = () => {
    Linking.removeEventListener('url', this.handleOpenUrl)
  }

  //Handling the event 
  handleOpenUrl = ({event}) => {
    this.navigate(event.url)
  }

  //Navigation
  navigate = (url) => {
    const { navigate } = this.props.navigation
    const route = url.replace(/.*?:\/\//g, '')
    const id = route.match(/\/([^\/]+)\/?$/)[1]
    const routeName = route.split('/')[0]
    if(routeName === 'people') {
      navigate('People', { id, name: 'chris' })
    }
  }
  render() {
    return (
      <Text>Hello from Home!</Text>
    )
  }
}

export default Home
