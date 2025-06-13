// src/components/sections/Contact.jsx
"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Input from "../ui/Input";
import Button from "../ui/Button";
import LeafletMap from "../ui/LeafletMap";
import { companyInfo } from "@/lib/data";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

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
    <section className="py-12 sm:py-16 bg-amber-50 relative z-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 text-green-900">
            Contact Us
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
            Reach out to us for orders or inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-8 sm:mb-12 lg:mb-16">
          {/* Contact Form */}
          <div className="relative z-20 order-2 lg:order-1 flex flex-col">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-green-900">
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
                    We've received your inquiry and will get back to you within
                    24 hours.
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
                    Please try again or contact us directly via phone or email.
                  </div>
                </div>
              </div>
            )}

            <form className="space-y-4 flex-grow" onSubmit={handleSubmit}>
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
                />

                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
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
              />

              {/* Message Textarea */}
              <Input
                as="textarea"
                name="message"
                id="message"
                placeholder="Tell us about your rice requirements..."
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full flex items-center justify-center gap-2 mt-6"
                disabled={isSubmitting || !isEmailJSReady}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Email...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            {/* Info Badge */}
            <div className="mt-6 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-center gap-2 text-amber-700">
                <Mail className="w-4 h-4" />
                <span className="text-xs">
                  Messages are sent directly to our email inbox
                </span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <h5 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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
          <div className="relative z-20 order-1 lg:order-2 flex flex-col">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-green-900">
              Find Us
            </h3>

            {/* Map */}
            <div className="mb-6 relative z-0 flex-shrink-0">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <LeafletMap
                  lat={7.398382}
                  lng={80.006091}
                  zoom={15}
                  height="320px"
                  mapType="satellite"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex-grow">
              <h4 className="text-lg font-semibold text-green-900 mb-4">
                Contact Information
              </h4>

              <div className="space-y-4">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-amber-200 hover:border-amber-300 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-amber-700 text-sm">
                      {companyInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${companyInfo.phone.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-amber-200 hover:border-amber-300 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-amber-700 text-sm">
                      {companyInfo.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-gray-700 text-sm leading-relaxed">
                      {companyInfo.address}
                    </div>
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
              Get in touch with us today for bulk orders and wholesale inquiries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Now
              </a>
              <a
                href={`tel:${companyInfo.phone.replace(/[^0-9]/g, "")}`}
                className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for map */}
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
