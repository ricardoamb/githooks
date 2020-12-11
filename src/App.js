import React, { useState, useEffect } from 'react'

export default function App() {
  const [ location, setLocation ] = useState({});
  
  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived);
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