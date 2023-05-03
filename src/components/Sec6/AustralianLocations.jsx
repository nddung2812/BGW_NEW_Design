import './AustralianLocations.css';

import { useState, useCallback } from 'react';
import CnwLocations from "../../JSONData/CnwData";
import SherriffLocations from "../../JSONData/SherriffData";
import SamiosLocations from '../../JSONData/SamiosData';
import MapStyles from '../../JSONData/MapStyles';

import {
    GoogleMap,
    useLoadScript,
    MarkerF,
    InfoWindowF,
} from "@react-google-maps/api";


  const center = {
    lat: -28.44210,
    lng: 134.60103
  }

  const bgwLogo = "https://firebasestorage.googleapis.com/v0/b/bgwgroupwebapp.appspot.com/o/BusinessLogos%2FbgwGroupLogo.png?alt=media&token=b4abf9c6-025a-4144-ab5c-e2d3d27cc7b0"
  const bgwGroupData = 
    {
      name: "BGW Head Office",
      address: "675 Macarcathur Ave",
      icon: bgwLogo,
      phone: "+61 7 3890 0927",
      email: "enquiries@bgwgroup.com.au",
      position: {
        lat: -27.43260,
        lng: 153.04473
      }
    }

  const libraries = ["places"]
  const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
  }

export const AustralianLocations = () => {
  const [bgwMarker, setBgwMarkers] = useState(true);
  const [selected, setSelected] = useState(null);
  const [selectCompany, setSelectCompany] = useState("all")


  const pageWidth = window.innerWidth;
  
  const mapContainerStyle = {
    width: "100%",
    height: "inherit"
  }
  

  const onMapClick = useCallback(() => {
    setBgwMarkers(!bgwMarker)
  },[]);

  const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries: libraries
    });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  let zoomLevel = 3;
  (pageWidth > 678 && pageWidth < 1024) ? zoomLevel = 3.2 : zoomLevel;
  pageWidth > 1024 ? zoomLevel = 4.3 : zoomLevel;


  return (
    <div id="google-map-ctn">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={zoomLevel}
          center={center}
          options={options}
          className="google-map"
          >
          <div className="select-company">
            <select onChange={e => setSelectCompany(e?.target.value)}>  
              <option value="all">All</option>
              <option value="cnw">CNW</option>
              <option value="samios">Samios</option>
              <option value="sherriff">Sherriff</option>
            </select>
          </div>
          <MarkerF
            icon={{
              url: bgwGroupData.icon,
              scaledSize: new window.google.maps.Size(25,25),
              zIndex: 3
            }}
            position={bgwGroupData.position}
            onClick={onMapClick}
          >
            {!bgwMarker && 
              <InfoWindowF 
                position={bgwGroupData.position}
                onCloseClick={() => setBgwMarkers(!bgwMarker)}
              >
                <div className='infowindow-ctn'>
                  <h1>{bgwGroupData.name}</h1>
                  <h2>{bgwGroupData.address}</h2>
                  <h2><span>Phone:</span> {bgwGroupData.phone}</h2>
                  <h2><span>Email:</span> {bgwGroupData.email}</h2>
                </div>
              </InfoWindowF>}
          </MarkerF> 

          {selectCompany === "all" &&
            SamiosLocations.map((samios, index) => {
              return (
                <MarkerF
                  key={index}
                  icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    fillColor: "#f6f6f9",
                    fillOpacity: 0.8,
                    scale: 3.5,
                    strokeColor: "#a80824",
                    strokeWeight: 2,
                  }}
                  onClick={() => setSelected(samios)}
                  position={samios.position}
                >
                </MarkerF>
              )})
          }

          
          {selectCompany === "all" &&
            CnwLocations.map((cnw, index) => {
              return (
                <MarkerF
                  key={index}
                  icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    fillColor: "#1d1d1f",
                    fillOpacity: 0.9,
                    scale: 3.5,
                    strokeColor: "#d13939",
                    strokeWeight: 2,
                  }}
                  position={cnw.position}
                  onClick={() => setSelected(cnw)}
                >
                </MarkerF>
                )
              })
          }

          {selectCompany === "all" &&
            SherriffLocations?.map((sherriff, index) => {
              return (
              <MarkerF
                key={index}
                icon={{
                  path: google.maps.SymbolPath.CIRCLE,
                  fillColor: "#1d1d1f",
                  fillOpacity: 0.8,
                  scale: 3.5,
                  strokeColor: "gold",
                  strokeWeight: 2,
                }}
                position={sherriff.position}
                onClick={() => setSelected(sherriff)}
              >
              </MarkerF>
              )
              })
          }



          {selectCompany === "samios" && SamiosLocations.map((samios, index) => {
              return (
                <MarkerF
                  key={index}
                  icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    fillColor: "#f6f6f9",
                    fillOpacity: 0.8,
                    scale: 3.5,
                    strokeColor: "#a80824",
                    strokeWeight: 2,
                  }}
                  onClick={() => setSelected(samios)}
                  position={samios.position}
                >
                </MarkerF>
              )
            })}
          
          {selectCompany === "cnw" && CnwLocations.map((cnw, index) => {
              return (
                <MarkerF
                  key={index}
                  icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    fillColor: "#1d1d1f",
                    fillOpacity: 0.9,
                    scale: 3.5,
                    strokeColor: "#d13939",
                    strokeWeight: 2,
                  }}
                  position={cnw.position}
                  onClick={() => setSelected(cnw)}
                >
                </MarkerF>
                )
              })}

          {selectCompany === "sherriff" && SherriffLocations?.map((sherriff, index) => {
            return (
            <MarkerF
              key={index}
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: "#1d1d1f",
                fillOpacity: 0.8,
                scale: 3.5,
                strokeColor: "gold",
                strokeWeight: 2,
              }}
              position={sherriff.position}
              onClick={() => setSelected(sherriff)}
            >
            </MarkerF>
            )
            })}
            {selected ? 
              (<InfoWindowF
                position={selected.position}
                onCloseClick={() => setSelected(null)}
              >
                <div className='infowindow-ctn'>
                  <h1>{selected.name}</h1>
                  <h2>{selected.address}</h2>
                  <h2><span>Phone:</span> {selected.phone}</h2>
                  <h2><span>Email:</span> {selected.email}</h2>
                </div>
              </InfoWindowF>)
              : null}

        </GoogleMap>
    </div>
  )
}
