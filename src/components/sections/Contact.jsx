"use client";

import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import LeafletMap from "../ui/LeafletMap";
import { companyInfo } from "@/lib/data";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Contact = () => {
  // Function to render the correct social icon based on platform name
  const getSocialIcon = (platform) => {
    switch (platform) {
      case "facebook":
        return <Facebook size={20} />;
      case "instagram":
        return <Instagram size={20} />;
      case "twitter":
        return <Twitter size={20} />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-green-900">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Reach out to us for orders or inquiries
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-900">
              Send a Message
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                  required
                />

                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  required
                />
              </div>

              <Input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
              />

              <Input
                as="textarea"
                name="message"
                id="message"
                placeholder="Message"
                rows={6}
                required
              />

              <div>
                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Map and Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-900">Find Us</h3>

            {/* Leaflet Map */}
            <div className="mb-6">
              <LeafletMap
                lat={7.398382}
                lng={80.006091}
                zoom={15}
                height="320px"
                mapType="satellite"
              />
            </div>

            {/* Contact Info */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-green-900">
                Contact Information
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 text-amber-600">
                    <Mail size={24} />
                  </div>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-amber-700 hover:text-amber-500"
                  >
                    {companyInfo.email}
                  </a>
                </li>

                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 text-amber-600">
                    <MapPin size={24} />
                  </div>
                  <span className="text-gray-700">{companyInfo.address}</span>
                </li>

                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 text-amber-600">
                    <Phone size={24} />
                  </div>
                  <a
                    href={`tel:${companyInfo.phone.replace(/[^0-9]/g, "")}`}
                    className="text-amber-700 hover:text-amber-500"
                  >
                    {companyInfo.phone}
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-green-900">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {Object.entries(companyInfo.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-amber-300 flex items-center justify-center hover:bg-amber-400 transition-colors"
                  >
                    {getSocialIcon(platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
