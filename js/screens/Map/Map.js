import React, {Component} from 'react';
import {Image, Dimensions} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapStyles from './MapStyle.json';

// Setting the scale of GoogleMap
let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 49.2633483;
const LONGITUDE = -123.1381264;
const LATITUDE_DELTA = 0.008;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      marker: {
        region: {
          latitude: LATITUDE,
          longitude: LONGITUDE,
        },
      },
    };
  }

  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        customMapStyle={MapStyles}
        region={this.state.region}>
        <Marker coordinate={this.state.marker.region}>
          <Image source={require('../../assets/images/map_pin.png')} />
        </Marker>
      </MapView>
    );
  }
}

export default Map;
