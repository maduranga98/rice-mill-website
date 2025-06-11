"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapPin, Store, Navigation, Phone } from "lucide-react";

const PurchaseLocations = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

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

  // Get icon color - simplified to single color
  const getMarkerColor = () => {
    return "#f59e0b"; // amber-500
  };

  // Get center point of Sri Lanka
  const sriLankaCenter = {
    lat: 7.1,
    lng: 80.1,
    zoom: 10,
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
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
          zIndex: 1,
        });

        mapInstanceRef.current = map;

        // Add tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Add markers for each location
        purchaseLocations.forEach((location) => {
          const color = getMarkerColor();

          const icon = L.divIcon({
            html: `
              <div style="display: flex; align-items: center; justify-content: center; position: relative;">
                <div style="
                  width: 20px; 
                  height: 20px; 
                  background-color: ${color}; 
                  border-radius: 50%; 
                  border: 2px solid white; 
                  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
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
              </div>
            `,
            className: "custom-div-icon",
            iconSize: [24, 24],
            iconAnchor: [12, 12],
          });

          const marker = L.marker([location.lat, location.lng], { icon }).addTo(
            map
          );

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

          // Add click event to update selected location
          marker.on("click", () => {
            setSelectedLocation(location);
          });
        });

        // Add custom CSS for popup
        if (!document.getElementById("leaflet-custom-css")) {
          const style = document.createElement("style");
          style.id = "leaflet-custom-css";
          style.textContent = `
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

        setTimeout(() => {
          map.invalidateSize();
        }, 100);
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

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-green-50 via-white to-amber-50 relative z-10">
      <div className="container mx-auto px-4">
        {/* Header - Responsive */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-100 text-amber-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Store className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Product Availability
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-green-900">
            Where Our Products
            <span className="text-amber-600 block">Are Available</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl lg:max-w-2xl mx-auto">
            Find Sajith Rice Mill's premium Sudu Kakulu at these locations
            across Sri Lanka
          </p>
        </div>

        {/* Map and Towns - Responsive Container */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-3 sm:p-4 md:p-6 border border-gray-100 relative z-20">
          {/* Towns Grid - Responsive */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
              <span className="hidden sm:inline">
                Click on any location to view on map:
              </span>
              <span className="sm:hidden">Tap a location:</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-1.5 sm:gap-2">
              {purchaseLocations.map((location) => (
                <button
                  key={location.id}
                  className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all hover:shadow-md touch-manipulation ${
                    selectedLocation?.id === location.id
                      ? "bg-amber-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-amber-100 active:bg-amber-200"
                  }`}
                  onClick={() => {
                    setSelectedLocation(location);
                    if (mapInstanceRef.current) {
                      mapInstanceRef.current.setView(
                        [location.lat, location.lng],
                        12,
                        {
                          animate: true,
                          duration: 1,
                        }
                      );
                    }
                  }}
                >
                  <span className="block truncate">{location.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Map Container - Responsive Height and Z-Index Control */}
          <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 relative z-0 isolation-auto">
            <div
              ref={mapRef}
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative"
              style={{ zIndex: 1 }}
              role="application"
              aria-label="Map showing locations where Sajith Rice Mill products are available"
            />

            {/* Map Loading Indicator - Responsive */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 map-loading z-10">
              <div className="text-center">
                <div className="inline-block w-5 h-5 sm:w-6 sm:h-6 border-3 sm:border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Loading map...
                </p>
              </div>
            </div>
          </div>

          {/* Selected Location Info - Mobile Only */}
          {selectedLocation && (
            <div className="mt-3 sm:hidden bg-amber-50 rounded-lg p-3 border border-amber-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-amber-800 text-sm">
                    {selectedLocation.name}
                  </p>
                  <p className="text-xs text-amber-600">
                    {selectedLocation.lat.toFixed(4)},{" "}
                    {selectedLocation.lng.toFixed(4)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contact for More Info - Responsive */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center relative z-20">
          <div className="bg-gradient-to-r from-green-600 to-amber-600 rounded-lg sm:rounded-xl p-4 sm:p-6 text-white">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              Can't Find a Location Near You?
            </h3>
            <p className="text-green-100 mb-3 sm:mb-4 max-w-lg lg:max-w-xl mx-auto text-xs sm:text-sm">
              Contact us to find the nearest retailer or discuss wholesale
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
              <a
                href="tel:+94779258293"
                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-white text-green-600 rounded-md sm:rounded-lg text-xs sm:text-sm font-semibold hover:bg-gray-50 active:bg-gray-100 transition-colors touch-manipulation"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                (077) 92-58293
              </a>
              <button
                onClick={() => scrollToSection("#contact")}
                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 border-2 border-white text-white rounded-md sm:rounded-lg text-xs sm:text-sm font-semibold hover:bg-white hover:text-green-600 active:bg-gray-100 active:text-green-700 transition-colors touch-manipulation"
              >
                Contact Form
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles - Z-Index Control */}
      <style jsx>{`
        .map-loading {
          transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
        }
        .leaflet-container:not(:empty) ~ .map-loading {
          opacity: 0;
          visibility: hidden;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #f59e0b #f3f4f6;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f59e0b;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d97706;
        }

        /* Ensure map stays below navbar */
        :global(.leaflet-container) {
          position: relative !important;
          z-index: 1 !important;
        }

        :global(.leaflet-control-container) {
          z-index: 2 !important;
        }

        :global(.leaflet-popup-pane) {
          z-index: 3 !important;
        }

        :global(.leaflet-marker-pane) {
          z-index: 2 !important;
        }

        :global(.leaflet-overlay-pane) {
          z-index: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default PurchaseLocations;
