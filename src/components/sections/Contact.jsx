"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { companyInfo } from "@/lib/data";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react";

// Fixed LeafletMap component with proper z-index handling
const FixedLeafletMap = ({
  lat = 7.398382,
  lng = 80.006091,
  zoom = 15,
  height = "320px",
  mapType = "satellite",
}) => {
  const mapRef = React.useRef(null);
  const mapInstanceRef = React.useRef(null);

  React.useEffect(() => {
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
      if (!document.getElementById("leaflet-contact-fix-css")) {
        const style = document.createElement("style");
        style.id = "leaflet-contact-fix-css";
        style.textContent = `
          /* Contact page map specific fixes */
          .contact-leaflet-container {
            z-index: 1 !important;
            border-radius: 8px;
          }
          
          .contact-leaflet-container .leaflet-control-zoom {
            z-index: 10 !important;
          }
          
          .contact-leaflet-container .leaflet-control-zoom a {
            z-index: 10 !important;
          }
          
          .contact-leaflet-container .leaflet-control-attribution {
            z-index: 5 !important;
          }
          
          .contact-leaflet-container .leaflet-map-pane { 
            z-index: 2 !important; 
          }
          
          .contact-leaflet-container .leaflet-tile-pane { 
            z-index: 1 !important; 
          }
          
          .contact-leaflet-container .leaflet-overlay-pane { 
            z-index: 4 !important; 
          }
          
          .contact-leaflet-container .leaflet-marker-pane { 
            z-index: 6 !important; 
          }
          
          .contact-leaflet-container .leaflet-popup-pane { 
            z-index: 7 !important; 
          }
          
          .contact-leaflet-container .leaflet-marker-icon { 
            z-index: 1000 !important; 
          }

          .contact-custom-popup .leaflet-popup-content-wrapper {
            border-radius: 12px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
          }
          
          .contact-custom-popup .leaflet-popup-tip {
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
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
          center: [lat, lng],
          zoom: zoom,
          zoomControl: true,
          attributionControl: true,
        });

        mapInstanceRef.current = map;

        let tileLayer;
        if (mapType === "satellite") {
          tileLayer = L.tileLayer(
            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            {
              attribution:
                "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
            }
          );
        } else {
          tileLayer = L.tileLayer(
            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }
          );
        }

        tileLayer.addTo(map);

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

        const popup = L.popup({
          className: "contact-custom-popup",
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
  }, [lat, lng, zoom, mapType]);

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md isolate">
      <div
        ref={mapRef}
        className="contact-leaflet-container w-full relative z-0"
        style={{ height }}
        role="application"
        aria-label="Map showing location of Sajith Rice Mill."
      ></div>

      {/* Fallback content while map loads */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 map-loading z-20">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-2"></div>
          <p className="text-gray-600 text-sm">Loading map...</p>
        </div>
      </div>

      <style jsx>{`
        .map-loading {
          transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
        }
        .contact-leaflet-container:not(:empty) ~ .map-loading {
          opacity: 0;
          visibility: hidden;
        }
      `}</style>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isEmailJSReady, setIsEmailJSReady] = useState(false);

  // Add structured data for contact page and business
  useEffect(() => {
    const contactPageSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Sajith Rice Mill - Rice Orders & Inquiries",
      description:
        "Contact Sajith Rice Mill for premium rice orders, bulk purchases, wholesale inquiries. Phone: (077) 92-58293, Email: sajithricemill@gmail.com",
      url: `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/"
      }/#contact`,
      mainEntity: {
        "@type": "LocalBusiness",
        "@id": `${
          process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/"
        }/#organization`,
        name: "Sajith Rice Mill",
        description:
          "Premium Sri Lankan rice supplier specializing in Sudu Kakulu, Samba Kakulu, and bulk rice orders",
        telephone: "+94-77-925-8293",
        email: "sajithricemill@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Nadalagamuwa, Wadumunnegedara",
          addressLocality: "Wadumunnegedara",
          addressRegion: "North Western Province",
          addressCountry: "LK",
          postalCode: "60170",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 7.398382,
          longitude: 80.006091,
        },
        openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-16:00"],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+94-77-925-8293",
            contactType: "customer service",
            availableLanguage: ["English", "Sinhala", "Tamil"],
            areaServed: "LK",
            serviceType: "Rice Orders and Inquiries",
          },
          {
            "@type": "ContactPoint",
            email: "sajithricemill@gmail.com",
            contactType: "sales",
            availableLanguage: ["English", "Sinhala"],
            serviceType: "Bulk Orders and Wholesale Inquiries",
          },
        ],
        paymentAccepted: ["Cash", "Bank Transfer", "Mobile Payment"],
        priceRange: "$$",
        keywords:
          "rice supplier contact, bulk rice orders, wholesale rice, සම්බා කැකුළු ඇණවුම්, සුදු කැකුළු ඇණවුම්",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(contactPageSchema);
    script.id = "contact-page-schema";
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("contact-page-schema");
      if (existingScript) existingScript.remove();
    };
  }, []);

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
      setIsEmailJSReady(true);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const autoReplyTemplateId =
        process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error("EmailJS configuration incomplete");
      }

      // Send email to business owner
      await emailjs.send(serviceId, templateId, {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        message: formData.message,
        to_email: "sajithricemill@gmail.com",
        reply_to: formData.email,
      });

      // Send auto-reply to customer (if template exists)
      if (autoReplyTemplateId) {
        await emailjs.send(serviceId, autoReplyTemplateId, {
          to_name: formData.fullName,
          to_email: formData.email,
          business_name: "Sajith Rice Mill",
          business_phone: companyInfo.phone,
          business_email: companyInfo.email,
        });
      }

      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });

      setSubmitStatus("success");
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Auto-hide status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <>
      {/* Hidden SEO content with comprehensive contact keywords */}
      <div className="sr-only">
        <h2>Contact Sajith Rice Mill - සජිත් සහල් මෝල සම්බන්ධ වන්න</h2>
        <p>
          Contact Sajith Rice Mill for premium rice orders, bulk purchases,
          wholesale inquiries. Phone: (077) 92-58293, Email:
          sajithricemill@gmail.com. සහල් ඇණවුම් සඳහා සම්බන්ධ වන්න, තොග ගැනීම්,
          හොල්සේල් විමසීම්.
        </p>
      </div>

      <section
        className="py-16 md:py-20 lg:py-24 bg-amber-50 mt-16"
        role="region"
        aria-labelledby="contact-heading"
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            {/* Main Heading - Consistent Typography */}
            <div className="mb-8">
              <h2
                id="contact-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 leading-tight mb-4"
                itemProp="name"
              >
                Contact Us
              </h2>

              {/* Subtitle */}
              <p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                itemProp="description"
              >
                Reach out to us for rice orders, bulk purchases, and wholesale
                inquiries
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 lg:mb-16">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <h3 className="text-xl font-bold mb-6 text-green-900">
                Send a Message
              </h3>

              {/* Configuration Warning */}
              {!isEmailJSReady && (
                <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3 text-yellow-700">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">
                      EmailJS Not Configured
                    </div>
                    <div className="text-xs mt-1">
                      Please set up your EmailJS environment variables.
                    </div>
                  </div>
                </div>
              )}

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 text-green-700">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">
                      Message Sent Successfully! 📧
                    </div>
                    <div className="text-xs mt-1">
                      We've received your rice inquiry and will get back to you
                      within 24 hours.
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-red-700">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">
                      Failed to Send Message
                    </div>
                    <div className="text-xs mt-1">
                      Please try again or contact us directly via phone: (077)
                      92-58293
                    </div>
                  </div>
                </div>
              )}

              <form
                className="space-y-4 mb-6"
                onSubmit={handleSubmit}
                itemScope
                itemType="https://schema.org/ContactAction"
              >
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    aria-label="Full name for rice order inquiry"
                  />

                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-label="Email address for rice order confirmation"
                  />
                </div>

                {/* Phone Number Input */}
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number (e.g., 077 925 8293)"
                  value={formData.phone}
                  onChange={handleInputChange}
                  aria-label="Phone number for direct rice order contact"
                />

                {/* Message Textarea */}
                <Input
                  as="textarea"
                  name="message"
                  id="message"
                  placeholder="Tell us about your rice requirements: quantity needed, preferred varieties (Sudu Kakulu, Samba Kakulu), delivery location..."
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  aria-label="Describe your rice order requirements"
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting || !isEmailJSReady}
                  aria-label="Send rice order inquiry"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              {/* Business Hours */}
              <div
                className="p-4 bg-green-50 rounded-lg border border-green-200"
                itemScope
                itemType="https://schema.org/OpeningHoursSpecification"
              >
                <h5 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Business Hours
                </h5>
                <div className="space-y-2 text-sm text-green-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium text-amber-600">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map and Contact Info */}
            <div className="order-1 lg:order-2">
              <h3 className="text-xl font-bold mb-6 text-green-900">Find Us</h3>

              {/* Map with fixed z-index */}
              <div className="mb-6">
                <FixedLeafletMap
                  lat={7.398382}
                  lng={80.006091}
                  zoom={15}
                  height="320px"
                  mapType="satellite"
                />
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-amber-200 hover:border-amber-300 hover:shadow-md transition-all group"
                  itemScope
                  itemType="https://schema.org/ContactPoint"
                  aria-label="Send email for rice orders"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Email Orders
                    </div>
                    <div className="text-amber-700 text-sm" itemProp="email">
                      {companyInfo.email}
                    </div>
                  </div>
                </a>

                <div className="bg-white rounded-lg border border-amber-200 p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Call for Orders
                      </div>
                      <div className="text-gray-600 text-xs">
                        Multiple lines available
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 ml-16">
                    <a
                      href={`tel:${companyInfo.phone.replace(/[^0-9]/g, "")}`}
                      className="block text-amber-700 text-sm hover:text-amber-800 transition-colors"
                      itemScope
                      itemType="https://schema.org/ContactPoint"
                      aria-label="Call primary phone number for rice orders"
                    >
                      <span itemProp="telephone">{companyInfo.phone}</span>{" "}
                      (Primary)
                    </a>

                    <a
                      href={`tel:${companyInfo.phone1.replace(/[^0-9]/g, "")}`}
                      className="block text-amber-700 text-sm hover:text-amber-800 transition-colors"
                      itemScope
                      itemType="https://schema.org/ContactPoint"
                      aria-label="Call secondary phone number for rice orders"
                    >
                      <span itemProp="telephone">{companyInfo.phone1}</span>{" "}
                      (Secondary)
                    </a>

                    <a
                      href={`tel:${companyInfo.phone2.replace(/[^0-9]/g, "")}`}
                      className="block text-amber-700 text-sm hover:text-amber-800 transition-colors"
                      itemScope
                      itemType="https://schema.org/ContactPoint"
                      aria-label="Call third phone number for rice orders"
                    >
                      <span itemProp="telephone">{companyInfo.phone2}</span>{" "}
                      (Alternative)
                    </a>
                  </div>
                </div>

                <div
                  className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div
                      className="text-gray-700 text-sm leading-relaxed"
                      itemProp="address"
                    >
                      {companyInfo.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-amber-600 rounded-xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Order Premium Rice?
              </h3>
              <p className="text-green-100 mb-6 text-lg max-w-2xl mx-auto">
                Get in touch with us today for bulk rice orders, wholesale
                pricing, and fast delivery across Sri Lanka
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <a
                  href={`mailto:${companyInfo.email}?subject=Rice Order Inquiry&body=Hello, I would like to inquire about rice orders. Please provide pricing and availability for:`}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
                  aria-label="Send email inquiry for rice orders"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Order
                </a>

                <div className="flex-1 flex flex-col gap-2 sm:flex-row sm:gap-2">
                  <a
                    href={`tel:${companyInfo.phone.replace(/[^0-9]/g, "")}`}
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-sm"
                    aria-label="Call primary number for immediate rice orders"
                    title="Primary Phone"
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
