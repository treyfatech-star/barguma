import { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    ward: '',
    message: '',
  });

  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    phone: '',
    ward: '',
  });
  const [isSubmittingVolunteer, setIsSubmittingVolunteer] = useState(false);
  const joinMovementWebhookUrl = import.meta.env.VITE_JOIN_MOVEMENT_WEBHOOK_URL;

  const wardsByLga = {
    Hong: [
      'Bangshika',
      'Daksiri',
      'Garaha',
      'Gaya',
      'Hildi',
      'Hong',
      'Hushere Zum',
      'Kwarhi',
      'Mayo Lope',
      'Shangui',
      'Thilbang',
      'Uba',
    ],
    Gombi: [
      'Boga/Dingai',
      'Duwa',
      'Ga\'anda',
      'Gabun',
      'Garkida',
      'Gombi North',
      'Gombi South',
      'Guyaku',
      'Tawa',
      'Yang',
    ],
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - would integrate with backend
    console.log('Contact form submitted:', contactForm);
    alert('Thank you for your message! Our campaign team will get back to you soon.');
    setContactForm({ name: '', phone: '', email: '', ward: '', message: '' });
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!joinMovementWebhookUrl) {
      alert('Join the Movement email integration is not configured yet. Add VITE_JOIN_MOVEMENT_WEBHOOK_URL to enable Google Sheets and email delivery.');
      return;
    }

    setIsSubmittingVolunteer(true);

    try {
      await fetch(joinMovementWebhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          formType: 'join-movement',
          submittedAt: new Date().toISOString(),
          ...volunteerForm,
        }),
      });

      alert('Thank you for volunteering! Your response has been recorded and sent to the campaign team.');
      setVolunteerForm({ name: '', phone: '', ward: '' });
    } catch (error) {
      console.error('Volunteer form submission failed:', error);
      alert('We could not submit your response right now. Please try again.');
    } finally {
      setIsSubmittingVolunteer(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white text-center">
            Contact & Get Involved
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
            Reach out to our campaign team, send us a message, or sign up to volunteer in your community
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="font-playfair text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
              <form onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lp-red"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-navy mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-apc-green"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-navy mb-2">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-apc-green"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-ward" className="block text-sm font-medium text-navy mb-2">
                      Ward *
                    </label>
                    <input
                      type="text"
                      id="contact-ward"
                      required
                      value={contactForm.ward}
                      onChange={(e) => setContactForm({ ...contactForm, ward: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-apc-green"
                      placeholder="Your ward"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="contact-message" className="block text-sm font-medium text-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-apc-green"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-lp-red text-white py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Volunteer Sign-Up */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="font-playfair text-2xl font-bold text-navy mb-6">Volunteer to Join the Movement</h2>
              <form onSubmit={handleVolunteerSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="volunteer-name" className="block text-sm font-medium text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="volunteer-name"
                      required
                      value={volunteerForm.name}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-apc-green"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="volunteer-phone" className="block text-sm font-medium text-navy mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="volunteer-phone"
                      required
                      value={volunteerForm.phone}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-apc-green"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <div>
                    <label htmlFor="volunteer-ward" className="block text-sm font-medium text-navy mb-2">
                      Ward *
                    </label>
                    <select
                      id="volunteer-ward"
                      required
                      value={volunteerForm.ward}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, ward: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lp-red bg-white"
                    >
                      <option value="">Select your ward</option>
                      {Object.entries(wardsByLga).map(([lga, wards]) => (
                        <optgroup key={lga} label={lga}>
                          {wards.map((ward) => (
                            <option key={`${lga}-${ward}`} value={`${ward} (${lga})`}>
                              {ward}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmittingVolunteer}
                  className="w-full bg-gold text-navy py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors mt-2"
                >
                  {isSubmittingVolunteer ? 'Submitting...' : 'Register as Volunteer'}
                </button>
                <p className="mt-3 text-sm text-navy/60">
                  Once configured, responses are saved to Google Sheets and emailed to `mbarguma@outlook.com`.
                </p>
              </form>

              {/* Campaign Office Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-playfair text-xl font-bold text-navy mb-4">Campaign Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-apc-green mr-3 mt-1" size={18} />
                    <span className="text-navy/70 text-sm">
                      No. 123 Campaign Headquarters, Hong LGA, Adamawa State, Nigeria
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-apc-green mr-3" size={18} />
                    <span className="text-navy/70 text-sm">+234 800 000 0000</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-apc-green mr-3" size={18} />
                    <span className="text-navy/70 text-sm">contact@hassanbarguma.com</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-playfair text-xl font-bold text-navy mb-4">Connect With Us</h3>
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-lp-red transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-lp-red transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-lp-red transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-lp-red transition-colors">
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
