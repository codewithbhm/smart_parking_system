import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { FirebaseContext } from '../../provider/FirebaseProvider'
import { Button } from 'react-native'

import {
  Card,
  CardText,
  DateTimeCard,
  DateTimeText,
  CardHeader
} from './style'

import {
  View
} from 'react-native'


const TicketDetail = ({ route }) => {
  const {
    parkId,
    checkInDate,
    checkInTime,
    checkOutTime,
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta,
    parkSlot,
    docId } = route.params;

  const FirebaseProvider = useContext(FirebaseContext);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        initialRegion={{ latitude, longitude, latitudeDelta, longitudeDelta }}
        rotateEnabled={false}
        scrollEnabled={false}
      >
        <Marker
          coordinate={{ latitude, longitude, latitudeDelta, longitudeDelta }}
          anchor={{ x: 0, y: 0 }} >
        </Marker>
      </MapView>

      <Card>
        <CardHeader>
          <CardText>{parkId}</CardText>
        </CardHeader>
        <DateTimeCard>
          <View>
            <DateTimeText>Date</DateTimeText>
            <CardText>{checkInDate}</CardText>
          </View>
          <View>
            <DateTimeText>Time</DateTimeText>
            <CardText>{checkInTime + " - " + checkOutTime}</CardText>
          </View>
        </DateTimeCard>
        <Button title={"delete"} onPress={() => {
          FirebaseProvider.userUnbook(
            parkId,
            checkInDate,
            checkInTime,
            checkOutTime,
            parkSlot,
            docId
          )
        }} />
      </Card >
    </View>
  );
};

export default TicketDetail;