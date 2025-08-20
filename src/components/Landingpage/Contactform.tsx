'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { services } from '@/lib/data';

export default function ContactUs() {
   const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactnumber: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };



const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.contactnumber || !formData.service || !formData.message) {
      toast.error("Please fill in all fields!");
      return;
    }
    

    try {
      const response = await fetch('/api/messages/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Show success toast
  
        toast.success("Message sent successfully!")
        // Reset form
        setFormData({
          name: '',
          email: '',
          contactnumber: '',
          service: '',
          message: ''
        });
      } else {
        // Show error toast
       toast.error("Message not sent successfully!")
      }
    } catch (error) {
      // Show error toast
           toast.error("Message not sent successfully!")

    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div id='contact' className=" mx-auto p-8 font-sans bg-gray-200 text-gray-800">
     


           {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Contact Us Today
                </h1>
                <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Reach out for a consultation or to learn more about our services
                </p>
              </div>
      
      <div className="w-full m-auto h-px  mb-8"></div>
      
      <div className="grid max-w-5xl m-auto grid-cols-1 md:grid-cols-2 overflow-hidden shadow rounded-2xl">
        <div className='bg-gradient-to-r p-12 text-white  from-blue-950 via-blue-900 to-blue-950 '>
          <h2 className="text-xl md:text-3xl font-semibold mb-4">Our Information</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Location</h3>
              <p>Garland, Texas</p>
            </div>
            
            <div>
              <h3 className="font-medium">Phone</h3>
              <p>(214) 733-1561</p>
            </div>
            
            <div>
              <h3 className="font-medium">Email</h3>
              <p>staaa2023@gmail.com</p>
            </div>
            
            <div>
              <h3 className="font-medium">Business Hours</h3>
              <p>Monday-Friday: 9am - 6pm</p>
              <p>Saturday: 10am - 2pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Why Contact Us?</h2>
            <p className="text-sm">
              Whether you're starting a new business, expanding an existing one, or need financial services, 
              our team is ready to assist you with personalized solutions. We offer free initial consultations 
              to understand your needs and recommend the best approach.
            </p>
          </div>
        </div>
        
        <div className='p-4 bg-white shadow-xl '>
          <h2 className="text-2xl text-center font-semibold mb-4">Send Us a Message</h2>
          
          <Card className='border-none shadow-none '>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="border-gray-300"
                  />
                </div>
                
                <div className="space-y-4">
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
                
                <div className="space-y-4">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input 
                    name="contactnumber"
                    placeholder="Your Phone" 
                    value={formData.contactnumber}
                    onChange={handleChange}
                    className="border-gray-300"
                  />
                </div>
                
                <div className="space-y-4">
                  <label className="text-sm font-medium">Service Interested In</label>
                  <Select onValueChange={handleServiceChange} value={formData.service}>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Select a Service" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                    {services.map((data)=>(
                      <SelectItem key={data.id} value={data.title}>{data.title}</SelectItem>

                    ))}
                      
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-4">
                  <label className="text-sm font-medium">Your Message</label>
                  <Textarea 
                    name="message"
                    placeholder="How can we help you?" 
                    value={formData.message}
                    onChange={handleChange}
                    className="border-gray-300 min-h-[100px]"
                  />
                </div>
                
                <Button type="submit" className="text-white w-full bg-blue-600 hover:bg-blue-700">
                  {isSubmitting ? "..........." : "SEND MESSAGE"}
                  
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

          
              <div className=' overflow-hidden mt-16  w-full md:w-[70%] rounded-xl m-auto h-[440px]' >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.6000507332!2d-96.87193949218752!3d32.91006099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21da13c59513%3A0xded775f1c5b2b7a5!2sGarland%2C%20TX!5e0!3m2!1sen!2sus!4v1689781876458!5m2!1sen!2sus" width="100%" height="100%" style={{border:0}} className='w-full h-full' loading="lazy"></iframe>
            </div>
    </div>
  );
}