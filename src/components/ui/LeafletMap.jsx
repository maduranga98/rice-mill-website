"use client";

import React, { useEffect, useRef } from "react";

const LeafletMap = ({
  lat = 7.398382,
  lng = 80.006091,
  zoom = 15,
  height = "320px",
  mapType = "satellite", // Options: "streets", "satellite"
}) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Load Leaflet CSS
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
        link.crossOrigin = "";
        document.head.appendChild(link);
      }

      // Function to initialize the map
      const initMap = async () => {
        // Check if Leaflet is already loaded
        if (!window.L) {
          // Load Leaflet script
          const script = document.createElement("script");
          script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
          script.integrity =
            "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
          script.crossOrigin = "";
          script.async = true;

          // Return a promise that resolves when the script is loaded
          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        // Create the map
        renderMap();
      };

      // Function to render the map
      const renderMap = () => {
        const L = window.L;

        // If map already exists, remove it to avoid duplicates
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
        }

        // Create the map
        const map = L.map(mapRef.current, {
          center: [lat, lng],
          zoom: zoom,
          zoomControl: true,
          attributionControl: true,
        });

        mapInstanceRef.current = map;

        // Set the base map layer based on mapType
        let tileLayer;

        if (mapType === "satellite") {
          // Satellite view (using ESRI World Imagery)
          tileLayer = L.tileLayer(
            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            {
              attribution:
                "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
            }
          );
        } else {
          // Street view (using OpenStreetMap)
          tileLayer = L.tileLayer(
            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }
          );
        }

        tileLayer.addTo(map);

        // Add marker
        const riceMillIcon = L.divIcon({
          html: `
            <div style="display: flex; align-items: center; justify-content: center;">
              <div style="width: 16px; height: 16px; background-color: #f59e0b; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 5px rgba(0,0,0,0.3);"></div>
            </div>
          `,
          className: "custom-div-icon",
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        });

        const marker = L.marker([lat, lng], { icon: riceMillIcon }).addTo(map);

        // Add popup
        const popup = L.popup({
          className: "custom-popup",
          closeButton: true,
          autoClose: false,
          closeOnEscapeKey: false,
        }).setContent(`
          <div style="padding: 8px; max-width: 200px;">
            <h3 style="margin: 0 0 8px; font-weight: bold; color: #1b5e20;">Sajith Rice Mill.</h3>
            <p style="margin: 0; font-size: 12px; color: #333;">
              Premium quality rice directly from our fields to your table.
            </p>
            <p style="margin: 4px 0 0; font-size: 11px; color: #666;">
              Coordinates: ${lat}, ${lng}
            </p>
          </div>
        `);

        marker.bindPopup(popup).openPopup();

        // Add custom CSS for popup
        if (!document.getElementById("leaflet-custom-css")) {
          const style = document.createElement("style");
          style.id = "leaflet-custom-css";
          style.textContent = `
            .custom-popup .leaflet-popup-content-wrapper {
              border-radius: 8px;
              box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            }
            .custom-popup .leaflet-popup-tip {
              box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            }
          `;
          document.head.appendChild(style);
        }

        // Adjust map after container is fully visible
        setTimeout(() => {
          map.invalidateSize();
        }, 100);
      };

      // Initialize the map
      initMap();
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [lat, lng, zoom, mapType]);

  return (
    <div className="map-container relative rounded-lg overflow-hidden shadow-md">
      <div
        ref={mapRef}
        className="w-full"
        style={{ height }}
        role="application"
        aria-label="Map showing location of Sajith Rice Mill."
      ></div>

      {/* Fallback content while map loads */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 map-loading z-10">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-2"></div>
          <p className="text-gray-600 text-sm">Loading map...</p>
        </div>
      </div>

      <style jsx>{`
        .map-loading {
          transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
        }
        .leaflet-container:not(:empty) ~ .map-loading {
          opacity: 0;
          visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default LeafletMap;
