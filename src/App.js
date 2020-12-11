import React, { useState, useEffect } from 'react'

export default function App() {
  const [ location, setLocation ] = useState({});
  
  useEffect(() => {
    const watchID = navigator.geolocation.watchPosition(handlePositionReceived);
    return () => navigator.geolocation.clearWatch(watchID);
  }, []);

  const handlePositionReceived = ({ coords }) => {
    const { latitude, longitude, accuracy } = coords;
    setLocation({ latitude, longitude, accuracy })
  }

  return (
    <>
      Accuracy: {location.accuracy}m<br />
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
  )
}