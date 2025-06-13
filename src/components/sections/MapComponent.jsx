// src/components/sections/MapComponent.jsx
"use client";

import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// Import Leaflet CSS
import "leaflet/dist/leaflet.css";

// Fix for default markers in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom marker icon
const createCustomIcon = () => {
  return L.divIcon({
    html: `
      <div style="
        width: 20px; 
        height: 20px; 
        background-color: #f59e0b; 
        border-radius: 50%; 
        border: 3px solid white; 
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          width: 6px; 
          height: 6px; 
          background-color: white; 
          border-radius: 50%;
        "></div>
      </div>
    `,
    className: "custom-marker-icon",
    iconSize: [26, 26],
    iconAnchor: [13, 13],
  });
};

// Component to handle map interactions
const MapController = ({ selectedLocation }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedLocation) {
      map.setView([selectedLocation.lat, selectedLocation.lng], 12, {
        animate: true,
        duration: 1,
      });
    }
  }, [selectedLocation, map]);

  return null;
};

// Custom styles component
const MapStyles = () => {
  useEffect(() => {
    // Add custom styles for the map
    if (
      typeof window !== "undefined" &&
      !document.getElementById("map-custom-styles")
    ) {
      const style = document.createElement("style");
      style.id = "map-custom-styles";
      style.textContent = `
        .leaflet-container {
          border-radius: 16px;
          z-index: 1;
        }
        
        .custom-marker-icon {
          background: transparent !important;
          border: none !important;
        }
        
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          border: 1px solid #e5e7eb;
        }
        
        .leaflet-popup-tip {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        
        .leaflet-popup-content {
          margin: 8px 12px;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return null;
};

const MapComponent = ({ locations, selectedLocation, onLocationSelect }) => {
  const sriLankaCenter = [7.1, 80.1];

  return (
    <>
      <MapStyles />
      <MapContainer
        center={sriLankaCenter}
        zoom={10}
        style={{ height: "400px", width: "100%" }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Map Controller for handling location changes */}
        <MapController selectedLocation={selectedLocation} />

        {/* Markers */}
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={createCustomIcon()}
            eventHandlers={{
              click: () => onLocationSelect(location),
            }}
          >
            <Popup>
              <div className="text-center py-2">
                <h3 className="font-bold text-green-800 mb-1">
                  {location.name}
                </h3>
                <p className="text-xs text-gray-600">Premium Rice Available</p>
                <p className="text-xs text-gray-400 mt-1">
                  {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default MapComponent;
