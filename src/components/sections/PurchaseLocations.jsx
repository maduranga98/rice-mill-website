"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapPin, Store, Navigation, Phone } from "lucide-react";

const PurchaseLocations = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Purchase locations data
  const purchaseLocations = [
    {
      id: 1,
      name: "Marandagahamula",
      lat: 7.228984614373777,
      lng: 79.99061828300118,
    },
    {
      id: 2,
      name: "Giriulla",
      lat: 7.331629742907531,
      lng: 80.12329103042379,
    },
    {
      id: 3,
      name: "Horampalla",
      lat: 7.1831079400317845,
      lng: 79.9684959441143,
    },
    {
      id: 4,
      name: "Minuwangoda",
      lat: 7.169045063757896,
      lng: 79.94681794675952,
    },
    {
      id: 5,
      name: "Kotugoda",
      lat: 7.123202073723328,
      lng: 79.92419335427755,
    },
    {
      id: 6,
      name: "Ekala",
      lat: 7.102312298227099,
      lng: 79.90943135546831,
    },
    {
      id: 7,
      name: "Katunayake",
      lat: 7.162951152916174,
      lng: 79.89658227560437,
    },
    {
      id: 8,
      name: "Negombo",
      lat: 7.206131343144183,
      lng: 79.84794992551991,
    },
    {
      id: 9,
      name: "Economic Centre",
      lat: 7.014626356228503,
      lng: 79.89966855231553,
    },
    {
      id: 10,
      name: "Kelaniya",
      lat: 6.994862488943285,
      lng: 79.92167944067509,
    },
    {
      id: 11,
      name: "Ruwanwella",
      lat: 7.045785970577424,
      lng: 80.25362520112952,
    },
    {
      id: 12,
      name: "Yatiyanthota",
      lat: 7.029448861848681,
      lng: 80.2958857808862,
    },
    {
      id: 13,
      name: "Talduwa",
      lat: 6.967079871709444,
      lng: 80.22926717979004,
    },
    {
      id: 14,
      name: "Eheliyagoda",
      lat: 6.848243422046789,
      lng: 80.26057237445839,
    },
  ];

  const sriLankaCenter = {
    lat: 7.1,
    lng: 80.1,
    zoom: 10,
  };

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

      // Add custom CSS to fix z-index issues (Stack Overflow solution)
      if (!document.getElementById("leaflet-fix-css")) {
        const style = document.createElement("style");
        style.id = "leaflet-fix-css";
        style.textContent = `
          /* Fix for marker disappearing issue - from Stack Overflow */
          .leaflet-map-pane {
            z-index: 2 !important;
          }
          
          .leaflet-tile-pane {
            z-index: 1 !important;
          }
          
          .leaflet-overlay-pane {
            z-index: 4 !important;
          }
          
          .leaflet-marker-pane {
            z-index: 6 !important;
          }
          
          .leaflet-popup-pane {
            z-index: 7 !important;
          }
          
          .leaflet-marker-icon {
            z-index: 1000 !important;
          }
          
          /* Custom marker styles */
          .custom-marker {
            width: 20px;
            height: 20px;
            background-color: #f59e0b;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            position: relative;
            z-index: 1000 !important;
          }
          
          .custom-marker::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 6px;
            height: 6px;
            background-color: white;
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }
          
          .custom-div-icon {
            background: transparent !important;
            border: none !important;
          }
          
          .custom-popup .leaflet-popup-content-wrapper {
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            border: 1px solid #e5e7eb;
          }
          
          .custom-popup .leaflet-popup-tip {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          }
          
          .leaflet-container {
            border-radius: 16px;
          }
        `;
        document.head.appendChild(style);
      }

      const initMap = async () => {
        if (!window.L) {
          const script = document.createElement("script");
          script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
          script.integrity =
            "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
          script.crossOrigin = "";
          script.async = true;

          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        renderMap();
      };

      const renderMap = () => {
        const L = window.L;

        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
        }

        const map = L.map(mapRef.current, {
          center: [sriLankaCenter.lat, sriLankaCenter.lng],
          zoom: sriLankaCenter.zoom,
          zoomControl: true,
          attributionControl: true,
        });

        mapInstanceRef.current = map;

        // Add tile layer with proper z-index
        const tileLayer = L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }
        );

        tileLayer.addTo(map);

        // Wait for tiles to load, then add markers (Stack Overflow solution)
        tileLayer.on("load", () => {
          addMarkersToMap(map);
        });

        // Fallback: Add markers after a delay
        setTimeout(() => {
          addMarkersToMap(map);
          setIsMapLoaded(true);
        }, 1000);

        // Ensure map size is correct
        setTimeout(() => {
          map.invalidateSize();
        }, 100);
      };

      const addMarkersToMap = (map) => {
        const L = window.L;

        // Clear existing markers
        markersRef.current.forEach((marker) => {
          if (map.hasLayer(marker)) {
            map.removeLayer(marker);
          }
        });
        markersRef.current = [];

        purchaseLocations.forEach((location, index) => {
          // Create custom HTML icon (more reliable than divIcon)
          const icon = L.divIcon({
            html: '<div class="custom-marker"></div>',
            className: "custom-div-icon",
            iconSize: [24, 24],
            iconAnchor: [12, 12],
          });

          const marker = L.marker([location.lat, location.lng], {
            icon: icon,
            // Use high zIndexOffset to ensure markers stay on top
            zIndexOffset: 1000 + index,
            riseOnHover: true,
          });

          const popup = L.popup({
            className: "custom-popup",
            closeButton: true,
            autoClose: false,
            closeOnEscapeKey: true,
          }).setContent(`
            <div style="padding: 10px; max-width: 200px;">
              <h3 style="margin: 0 0 6px; font-weight: bold; color: #1b5e20; font-size: 14px;">
                ${location.name}
              </h3>
              <p style="margin: 6px 0 0; font-size: 10px; color: #999;">
                ${location.lat.toFixed(6)}, ${location.lng.toFixed(6)}
              </p>
            </div>
          `);

          marker.bindPopup(popup);

          marker.on("click", () => {
            setSelectedLocation(location);
          });

          // Add marker to map and store reference
          marker.addTo(map);
          markersRef.current.push(marker);
        });

        // Force marker pane to front (additional fix from Stack Overflow)
        if (map.getPane("markerPane")) {
          map.getPane("markerPane").style.zIndex = 650;
        }
      };

      initMap();
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([location.lat, location.lng], 12, {
        animate: true,
        duration: 1,
      });
    }
  };

  return (
    <section className="py-12 bg-gradient-to-br from-green-50 via-white to-amber-50 mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
            <Store className="w-4 h-4 mr-2" />
            Product Availability
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-900">
            Where Our Products
            <span className="text-amber-600 block">Are Available</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find Sajith Rice Mill's premium Sudu Kakulu at these locations
            across Sri Lanka
          </p>
        </div>

        {/* Map and Towns */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          {/* Towns Grid */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Click on any location to view on map:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
              {purchaseLocations.map((location) => (
                <button
                  key={location.id}
                  className={`p-2 rounded-lg text-xs font-medium transition-all hover:shadow-md ${
                    selectedLocation?.id === location.id
                      ? "bg-amber-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-amber-100"
                  }`}
                  onClick={() => handleLocationClick(location)}
                >
                  {location.name}
                </button>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="relative rounded-lg overflow-hidden border border-gray-200">
            <div
              ref={mapRef}
              className="w-full h-[400px]"
              role="application"
              aria-label="Map showing locations where Sajith Rice Mill products are available"
            />

            {/* Loading Indicator */}
            {!isMapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-50">
                <div className="text-center">
                  <div className="inline-block w-6 h-6 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                  <p className="text-gray-600 text-sm">Loading map...</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact for More Info */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-600 to-amber-600 rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-3">
              Can't Find a Location Near You?
            </h3>
            <p className="text-green-100 mb-4 max-w-xl mx-auto text-sm">
              Contact us to find the nearest retailer or discuss wholesale
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+94372212345"
                className="inline-flex items-center justify-center px-4 py-2 bg-white text-green-600 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                (037) 22-12345
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 border-2 border-white text-white rounded-lg text-sm font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseLocations;
