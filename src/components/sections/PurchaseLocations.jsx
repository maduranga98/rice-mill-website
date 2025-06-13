"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapPin, Store, Navigation, Phone } from "lucide-react";

const PurchaseLocations = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Enhanced purchase locations data with SEO information
  const purchaseLocations = [
    {
      id: 1,
      name: "Marandagahamula",
      lat: 7.228984614373777,
      lng: 79.99061828300118,
      district: "Gampaha",
      province: "Western Province",
      sinhalaName: "මරන්දගහමුල",
      keywords: "marandagahamula rice, මරන්දගහමුල සහල්, gampaha rice supplier",
    },
    {
      id: 2,
      name: "Giriulla",
      lat: 7.331629742907531,
      lng: 80.12329103042379,
      district: "Kurunegala",
      province: "North Western Province",
      sinhalaName: "ගිරිඋල්ල",
      keywords: "giriulla rice, ගිරිඋල්ල සහල්, kurunegala rice supplier",
    },
    {
      id: 3,
      name: "Horampalla",
      lat: 7.1831079400317845,
      lng: 79.9684959441143,
      district: "Gampaha",
      province: "Western Province",
      sinhalaName: "හොරම්පල්ල",
      keywords: "horampalla rice, හොරම්පල්ල සහල්, gampaha district rice",
    },
    {
      id: 4,
      name: "Minuwangoda",
      lat: 7.169045063757896,
      lng: 79.94681794675952,
      district: "Gampaha",
      province: "Western Province",
      sinhalaName: "මිනුවන්ගොඩ",
      keywords: "minuwangoda rice, මිනුවන්ගොඩ සහල්, gampaha rice delivery",
    },
    {
      id: 5,
      name: "Kotugoda",
      lat: 7.123202073723328,
      lng: 79.92419335427755,
      district: "Gampaha",
      province: "Western Province",
      sinhalaName: "කොටුගොඩ",
      keywords: "kotugoda rice, කොටුගොඩ සහල්, western province rice",
    },
    {
      id: 6,
      name: "Ekala",
      lat: 7.102312298227099,
      lng: 79.90943135546831,
      district: "Gampaha",
      province: "Western Province",
      sinhalaName: "ඒකල",
      keywords: "ekala rice, ඒකල සහල්, colombo suburb rice",
    },
    {
      id: 7,
      name: "Katunayake",
      lat: 7.162951152916174,
      lng: 79.89658227560437,
      district: "Gampaha",
      province: "Western Province",
      sinhalaName: "කටුනායක",
      keywords: "katunayake rice, කටුනායක සහල්, airport area rice",
    },
    {
      id: 8,
      name: "Negombo",
      lat: 7.206131343144183,
      lng: 79.84794992551991,
      district: "Gampaha",
      province: "Western Province",
      sinhalaName: "නීගම්බො",
      keywords: "negombo rice, නීගම්බො සහල්, coastal area rice",
    },
    {
      id: 9,
      name: "Economic Centre",
      lat: 7.014626356228503,
      lng: 79.89966855231553,
      district: "Colombo",
      province: "Western Province",
      sinhalaName: "ආර්ථික මධ්‍යස්ථානය",
      keywords: "economic centre rice, colombo rice, wholesale rice center",
    },
    {
      id: 10,
      name: "Kelaniya",
      lat: 6.994862488943285,
      lng: 79.92167944067509,
      district: "Gampaha",
      province: "Western Province",
      sinhalaName: "කැලණිය",
      keywords: "kelaniya rice, කැලණිය සහල්, temple city rice",
    },
    {
      id: 11,
      name: "Ruwanwella",
      lat: 7.045785970577424,
      lng: 80.25362520112952,
      district: "Kegalle",
      province: "Sabaragamuwa Province",
      sinhalaName: "රුවන්වැල්ල",
      keywords: "ruwanwella rice, රුවන්වැල්ල සහල්, kegalle rice supplier",
    },
    {
      id: 12,
      name: "Yatiyanthota",
      lat: 7.029448861848681,
      lng: 80.2958857808862,
      district: "Kegalle",
      province: "Sabaragamuwa Province",
      sinhalaName: "යටියන්තොට",
      keywords: "yatiyanthota rice, යටියන්තොට සහල්, sabaragamuwa rice",
    },
    {
      id: 13,
      name: "Talduwa",
      lat: 6.967079871709444,
      lng: 80.22926717979004,
      district: "Kalutara",
      province: "Western Province",
      sinhalaName: "තල්දූව",
      keywords: "talduwa rice, තල්දූව සහල්, kalutara rice supplier",
    },
    {
      id: 14,
      name: "Eheliyagoda",
      lat: 6.848243422046789,
      lng: 80.26057237445839,
      district: "Ratnapura",
      province: "Sabaragamuwa Province",
      sinhalaName: "ඇහැලියගොඩ",
      keywords: "eheliyagoda rice, ඇහැලියගොඩ සහල්, ratnapura rice",
    },
  ];

  const sriLankaCenter = {
    lat: 7.1,
    lng: 80.1,
    zoom: 10,
  };

  // Add structured data for service areas
  useEffect(() => {
    const serviceAreaSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Rice Delivery Service - සහල් බෙදාහැරීම් සේවය",
      description:
        "Premium rice delivery service across Western Province, North Western Province, and Sabaragamuwa Province in Sri Lanka",
      provider: {
        "@type": "Organization",
        name: "Sajith Rice Mill",
        "@id": `${
          process.env.NEXT_PUBLIC_SITE_URL || "https://sajithricemill.com"
        }/#organization`,
      },
      areaServed: purchaseLocations.map((location) => ({
        "@type": "Place",
        name: location.name,
        alternateName: location.sinhalaName,
        geo: {
          "@type": "GeoCoordinates",
          latitude: location.lat,
          longitude: location.lng,
        },
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: location.district,
        },
      })),
      serviceType: "Food Delivery",
      offers: {
        "@type": "Offer",
        description:
          "Premium rice varieties delivery including සුදු කකුළු, සම්බා කකුළු, and bulk orders",
        availability: "InStock",
      },
      keywords:
        "rice delivery, සහල් බෙදාහැරීම්, bulk rice, wholesale rice, premium rice Sri Lanka",
    };

    const placeSchema = {
      "@context": "https://schema.org",
      "@type": "Place",
      name: "Sajith Rice Mill Service Areas",
      description:
        "Premium rice available across multiple locations in Sri Lanka",
      containsPlace: purchaseLocations.map((location) => ({
        "@type": "Place",
        name: location.name,
        alternateName: location.sinhalaName,
        geo: {
          "@type": "GeoCoordinates",
          latitude: location.lat,
          longitude: location.lng,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: location.name,
          addressRegion: location.province,
          addressCountry: "LK",
        },
      })),
    };

    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.textContent = JSON.stringify(serviceAreaSchema);
    script1.id = "service-area-schema";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.textContent = JSON.stringify(placeSchema);
    script2.id = "places-schema";
    document.head.appendChild(script2);

    return () => {
      const existingScript1 = document.getElementById("service-area-schema");
      const existingScript2 = document.getElementById("places-schema");
      if (existingScript1) existingScript1.remove();
      if (existingScript2) existingScript2.remove();
    };
  }, []);

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

      // Add custom CSS to fix z-index issues
      if (!document.getElementById("leaflet-fix-css")) {
        const style = document.createElement("style");
        style.id = "leaflet-fix-css";
        style.textContent = `
          .leaflet-map-pane { z-index: 2 !important; }
          .leaflet-tile-pane { z-index: 1 !important; }
          .leaflet-overlay-pane { z-index: 4 !important; }
          .leaflet-marker-pane { z-index: 6 !important; }
          .leaflet-popup-pane { z-index: 7 !important; }
          .leaflet-marker-icon { z-index: 1000 !important; }
          
          .custom-marker {
            width: 20px; height: 20px; background-color: #f59e0b; border-radius: 50%;
            border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            position: relative; z-index: 1000 !important;
          }
          
          .custom-marker::after {
            content: ''; position: absolute; top: 50%; left: 50%; width: 6px; height: 6px;
            background-color: white; border-radius: 50%; transform: translate(-50%, -50%);
          }
          
          .custom-div-icon { background: transparent !important; border: none !important; }
          .custom-popup .leaflet-popup-content-wrapper { border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); border: 1px solid #e5e7eb; }
          .custom-popup .leaflet-popup-tip { box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); }
          .leaflet-container { border-radius: 16px; }
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

        const tileLayer = L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }
        );

        tileLayer.addTo(map);

        tileLayer.on("load", () => {
          addMarkersToMap(map);
        });

        setTimeout(() => {
          addMarkersToMap(map);
          setIsMapLoaded(true);
        }, 1000);

        setTimeout(() => {
          map.invalidateSize();
        }, 100);
      };

      const addMarkersToMap = (map) => {
        const L = window.L;

        markersRef.current.forEach((marker) => {
          if (map.hasLayer(marker)) {
            map.removeLayer(marker);
          }
        });
        markersRef.current = [];

        purchaseLocations.forEach((location, index) => {
          const icon = L.divIcon({
            html: '<div class="custom-marker"></div>',
            className: "custom-div-icon",
            iconSize: [24, 24],
            iconAnchor: [12, 12],
          });

          const marker = L.marker([location.lat, location.lng], {
            icon: icon,
            zIndexOffset: 1000 + index,
            riseOnHover: true,
          });

          const popup = L.popup({
            className: "custom-popup",
            closeButton: true,
            autoClose: false,
            closeOnEscapeKey: true,
          }).setContent(`
            <div style="padding: 12px; max-width: 220px;">
              <h3 style="margin: 0 0 8px; font-weight: bold; color: #1b5e20; font-size: 14px;">
                ${location.name} - ${location.sinhalaName}
              </h3>
              <p style="margin: 4px 0; font-size: 12px; color: #666;">
                District: ${location.district}
              </p>
              <p style="margin: 4px 0; font-size: 12px; color: #666;">
                Province: ${location.province}
              </p>
              <p style="margin: 8px 0 0; font-size: 10px; color: #999;">
                Coordinates: ${location.lat.toFixed(4)}, ${location.lng.toFixed(
            4
          )}
              </p>
            </div>
          `);

          marker.bindPopup(popup);

          marker.on("click", () => {
            setSelectedLocation(location);
          });

          marker.addTo(map);
          markersRef.current.push(marker);
        });

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
    <>
      {/* Hidden SEO content with comprehensive location keywords */}
      <div className="sr-only">
        <h2>Sajith Rice Mill Service Areas - සජිත් සහල් මෝල සේවා ප්‍රදේශ</h2>
        <p>
          Premium rice delivery available across Western Province (බස්නාහිර
          පළාත), North Western Province (වයඹ පළාත), and Sabaragamuwa Province
          (සබරගමුව පළාත). Rice delivery service, සහල් බෙදාහැරීම්, bulk rice
          orders, wholesale rice supply.
        </p>

        <h3>Western Province Service Areas - බස්නාහිර පළාත් සේවා ප්‍රදේශ</h3>
        <p>
          Gampaha District: Marandagahamula (මරන්දගහමුල), Horampalla
          (හොරම්පල්ල), Minuwangoda (මිනුවන්ගොඩ), Kotugoda (කොටුගොඩ), Ekala
          (ඒකල), Katunayake (කටුනායක), Negombo (නීගම්බො), Kelaniya (කැලණිය).
          Colombo District: Economic Centre (ආර්ථික මධ්‍යස්ථානය). Kalutara
          District: Talduwa (තල්දූව).
        </p>

        <h3>North Western Province - වයඹ පළාත්</h3>
        <p>
          Kurunegala District: Giriulla (ගිරිඋල්ල). Premium rice supplier, bulk
          orders, wholesale rates, restaurant supply.
        </p>

        <h3>Sabaragamuwa Province - සබරගමුව පළාත්</h3>
        <p>
          Kegalle District: Ruwanwella (රුවන්වැල්ල), Yatiyanthota (යටියන්තොට).
          Ratnapura District: Eheliyagoda (ඇහැලියගොඩ). Premium rice varieties,
          chemical-free rice, traditional rice.
        </p>

        <h3>Available Products - ලබා ගත හැකි නිෂ්පාදන</h3>
        <p>
          සුදු කකුළු (Sudu Kakulu), සම්බා කකුළු (Samba Kakulu), රතු කකුළු (Ratu
          Kakulu). Package sizes: 5kg, 10kg, 25kg. Home delivery (ගෙදර
          බෙදාහැරීම), bulk orders (තොග ඇණවුම්), wholesale prices (තොග මිල),
          restaurant supply (අවන්හල් සැපයුම්).
        </p>

        <h3>Contact for Delivery - බෙදාහැරීම සඳහා සම්බන්ධ වන්න</h3>
        <p>
          Phone: (077) 92-58293. Email: sajithricemill@gmail.com. Fast delivery,
          best prices, quality guaranteed. වේගවත් බෙදාහැරීම, හොඳම මිල, තත්ත්වය
          සහතික.
        </p>
      </div>

      <section
        className="py-12 bg-gradient-to-br from-green-50 via-white to-amber-50 mt-20"
        role="region"
        aria-labelledby="locations-heading"
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
              <Store className="w-4 h-4 mr-2" />
              Island-wide Availability
            </div>
            <h2
              id="locations-heading"
              className="text-3xl md:text-4xl font-bold mb-6 text-green-900"
              itemProp="name"
            >
              Where Our Products
              <span className="text-amber-600 block">Are Available</span>
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              itemProp="description"
            >
              Find Sajith Rice Mill's premium rice varieties at these locations
              across Sri Lanka with reliable delivery service
            </p>
          </div>

          {/* Map and Towns */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            {/* All Locations Grid */}
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
                    aria-label={`View ${location.name} on map`}
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
                aria-label="Interactive map showing Sajith Rice Mill service areas across Sri Lanka"
                itemProp="serviceArea"
              />

              {/* Loading Indicator */}
              {!isMapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-50">
                  <div className="text-center">
                    <div className="inline-block w-6 h-6 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                    <p className="text-gray-600 text-sm">
                      Loading service areas...
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Selected Location Info */}
            {selectedLocation && (
              <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">
                  Selected Location: {selectedLocation.name} -{" "}
                  {selectedLocation.sinhalaName}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-amber-700">
                  <div>District: {selectedLocation.district}</div>
                  <div>Province: {selectedLocation.province}</div>
                  <div>Rice Delivery: Available</div>
                </div>
              </div>
            )}
          </div>

          {/* Service Information */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                14+ Locations
              </h3>
              <p className="text-sm text-gray-600">
                Available across Western, North Western, and Sabaragamuwa
                provinces
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Fast Delivery
              </h3>
              <p className="text-sm text-gray-600">
                Quick delivery service to all listed locations with bulk order
                options
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Easy Ordering
              </h3>
              <p className="text-sm text-gray-600">
                Call (077) 92-58293 for orders and delivery arrangements
              </p>
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
                opportunities and custom delivery arrangements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+94779258293"
                  className="inline-flex items-center justify-center px-4 py-2 bg-white text-green-600 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
                  aria-label="Call Sajith Rice Mill"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (077) 92-58293
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-4 py-2 border-2 border-white text-white rounded-lg text-sm font-semibold hover:bg-white hover:text-green-600 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Contact Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PurchaseLocations;
