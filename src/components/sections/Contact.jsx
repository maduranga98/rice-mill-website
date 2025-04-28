"use client";

import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
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

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-16">
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

            <div className="text-center">
              <Button type="submit" size="lg">
                Send Message
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-amber-200 pt-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-900">
              Get in Touch
            </h3>

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

          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-900">
              Follow Us
            </h3>

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
    </section>
  );
};

export default Contact;
