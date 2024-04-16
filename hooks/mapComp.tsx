"use client"

import React, { useState, useCallback } from "react"
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api"
import { FaDirections } from "react-icons/fa"
import useWindowWidth from "./useWidth"

interface MapsProps {
  center: {
    lat: number
    lng: number
  }
  title?: string
}

const MapComp = ({ center, title }: MapsProps) => {
  const [map, setMap] = useState(null)
  const [infoWindow, setInfoWindow] = useState<any>(null)

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBPq8l_d9x4C8jmw6TL_KYjtQv3lyBbRRU",
  })

  const onLoad = useCallback(function callback(map: any) {
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  const handleMarkerClick = () => {
    setInfoWindow((prev: any) => ({
      ...prev,
      isOpen: true,
    }))
  }

  const handleInfoWindowClose = () => {
    setInfoWindow((prev: any) => ({
      ...prev,
      isOpen: false,
    }))
  }

  const generateNavigationLink = () => {
    const latLng = `${center.lat},${center.lng}`
    return `https://www.google.com/maps/dir/?api=1&destination=${latLng}`
  }

  const windowWidth = useWindowWidth()

  const containerStyle = {
    width: "100%",
    height: windowWidth > 800 ? "450px" : "360px",
    borderRadius: "10px",
    marginTop: "40px",
  }

  return isLoaded ? (
    <GoogleMap
      id="google-map-script"
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onUnmount={onUnmount}
      onLoad={onLoad}
    >
      <Marker
        title={title}
        icon={"/images/Sereneus-pin.png"}
        position={center}
        onClick={handleMarkerClick}
      />
      {infoWindow && infoWindow.isOpen && (
        <InfoWindow position={center} onCloseClick={handleInfoWindowClose}>
          <div className="p-4 bg-white rounded-lg shadow-lg">
            {/* Info window content */}
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            {/* Dynamic navigation link */}
            <a
              href={generateNavigationLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-primary text-white px-3 py-2 rounded-lg hover:bg-primary-dark transition duration-300"
            >
              <FaDirections className="mr-2" /> Navigate
            </a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  )
}

export default MapComp
