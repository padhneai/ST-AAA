"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { services } from "@/lib/data";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactnumber: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !formData.name ||
      !formData.email ||
      !formData.contactnumber ||
      !formData.service ||
      !formData.message
    ) {
      toast.error("Please fill in all fields!");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/messages/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          contactnumber: "",
          service: "",
          message: "",
        });
      } else {
        toast.error("Message not sent successfully!");
      }
    } catch (error) {
      toast.error("Message not sent successfully!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Contact Us Today
        </h1>
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Reach out for a consultation or to learn more about our services
        </p>
      </div>

      {/* Info + Form Grid */}
      <div className="grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 shadow-xl rounded-2xl overflow-hidden">
        {/* Left - Info */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 p-12 text-white">
          <h2 className="text-2xl font-semibold mb-6">Our Information</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-400 mt-1" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p>Garland, Texas</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-orange-400 mt-1" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p>(214) 733-1561</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-orange-400 mt-1" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p>staaa2023@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-orange-400 mt-1" />
              <div>
                <h3 className="font-medium">Business Hours</h3>
                <p>Mon-Fri: 9am - 6pm</p>
                <p>Sat: 10am - 2pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-sm text-gray-200 leading-relaxed">
            Whether you're starting a new business, expanding an existing one,
            or need financial services, our team is ready to assist you with
            personalized solutions. We offer free initial consultations to
            understand your needs and recommend the best approach.
          </div>
        </div>

        {/* Right - Form */}
        <div className="p-8 bg-white">
          <h2 className="text-2xl text-center font-semibold mb-6">
            Send Us a Message
          </h2>

          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium">Full Name</label>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-gray-300"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Email Address</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-gray-300"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input
                    name="contactnumber"
                    placeholder="Your Phone"
                    value={formData.contactnumber}
                    onChange={handleChange}
                    className="border-gray-300"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Service Interested In
                  </label>
                  <Select
                    onValueChange={handleServiceChange}
                    value={formData.service}
                  >
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Select a Service" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {services.map((data) => (
                        <SelectItem key={data.id} value={data.title}>
                          {data.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium">Your Message</label>
                  <Textarea
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    className="border-gray-300 min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700"
                >
                  {isSubmitting ? "Sending..." : "SEND MESSAGE"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-16 w-full md:w-[70%] mx-auto rounded-xl overflow-hidden shadow-lg h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.6000507332!2d-96.87193949218752!3d32.91006099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21da13c59513%3A0xded775f1c5b2b7a5!2sGarland%2C%20TX!5e0!3m2!1sen!2sus!4v1689781876458!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
