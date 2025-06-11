"use client";

import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import LeafletMap from "../ui/LeafletMap";
import { companyInfo } from "@/lib/data";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section className="py-12 sm:py-16 bg-amber-50 relative z-10">
      <div className="container mx-auto px-4">
        {/* Header - Responsive */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 text-green-900">
            Contact Us
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
            Reach out to us for orders or inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-8 sm:mb-12 lg:mb-16">
          {/* Contact Form - Responsive */}
          <div className="relative z-20 order-2 lg:order-1">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-green-900">
              Send a Message
            </h3>
            <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
              {/* Name and Email Row - Responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                  className="text-sm sm:text-base"
                  required
                />

                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="text-sm sm:text-base"
                  required
                />
              </div>

              {/* Phone Input */}
              <Input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                className="text-sm sm:text-base"
              />

              {/* Message Textarea - Responsive Rows */}
              <Input
                as="textarea"
                name="message"
                id="message"
                placeholder="Your message here..."
                rows={4}
                className="text-sm sm:text-base resize-none"
                required
              />

              {/* Submit Button - Responsive */}
              <div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </div>
            </form>

            {/* Contact Methods - Mobile Only */}
            <div className="mt-6 lg:hidden bg-white rounded-lg p-4 border border-amber-200">
              <h4 className="text-sm font-semibold mb-3 text-green-900">
                Or contact us directly:
              </h4>
              <div className="space-y-2">
                <a
                  href={`tel:${companyInfo.phone.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-2 text-amber-700 hover:text-amber-600 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {companyInfo.phone}
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-2 text-amber-700 hover:text-amber-600 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Map and Contact Info - Responsive */}
          <div className="relative z-20 order-1 lg:order-2">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-green-900">
              Find Us
            </h3>

            {/* Leaflet Map Container - Responsive Height */}
            <div className="mb-4 sm:mb-6 relative z-0 isolation-auto">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <LeafletMap
                  lat={7.398382}
                  lng={80.006091}
                  zoom={15}
                  height="250px"
                  mapType="satellite"
                />
              </div>
            </div>

            {/* Contact Info - Desktop Only */}
            <div className="mt-6 sm:mt-8 relative z-20 hidden lg:block">
              <h4 className="text-lg lg:text-xl font-semibold mb-3 sm:mb-4 text-green-900">
                Contact Information
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center group">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-amber-600 group-hover:text-amber-500 transition-colors flex-shrink-0">
                    <Mail size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-amber-700 hover:text-amber-500 transition-colors text-sm sm:text-base"
                  >
                    {companyInfo.email}
                  </a>
                </li>

                <li className="flex items-start group">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 mt-0.5 sm:mt-1 text-amber-600 group-hover:text-amber-500 transition-colors flex-shrink-0">
                    <MapPin size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {companyInfo.address}
                  </span>
                </li>

                <li className="flex items-center group">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-amber-600 group-hover:text-amber-500 transition-colors flex-shrink-0">
                    <Phone size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <a
                    href={`tel:${companyInfo.phone.replace(/[^0-9]/g, "")}`}
                    className="text-amber-700 hover:text-amber-500 transition-colors text-sm sm:text-base"
                  >
                    {companyInfo.phone}
                  </a>
                </li>
              </ul>
            </div>

            {/* Business Hours - Desktop Only */}
            <div className="mt-6 hidden lg:block bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="text-lg font-semibold mb-2 text-green-900">
                Business Hours
              </h4>
              <div className="space-y-1 text-sm text-green-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA - Mobile Enhanced */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-amber-600 rounded-lg sm:rounded-xl p-4 sm:p-6 text-white">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              Ready to Order Premium Rice?
            </h3>
            <p className="text-green-100 mb-3 sm:mb-4 text-sm sm:text-base">
              Get in touch with us today for bulk orders and wholesale inquiries
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
              <a
                href={`tel:${companyInfo.phone.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles to ensure map doesn't interfere with navbar */}
      <style jsx>{`
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

export default Contact;
