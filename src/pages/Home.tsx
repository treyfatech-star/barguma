import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Heart, Map, Droplets, Users } from 'lucide-react';
import { useInView, useCounter } from '@/hooks/useInView';

const Home = () => {
  const { ref: statsRef, isInView: statsInView } = useInView(0.3);
  const [supporterForm, setSupporterForm] = useState({
    name: '',
    phone: '',
    ward: '',
    email: '',
  });
  const [isSubmittingSupporter, setIsSubmittingSupporter] = useState(false);
  const [supporterSuccessMessage, setSupporterSuccessMessage] = useState('');
  const joinMovementWebhookUrl = import.meta.env.VITE_JOIN_MOVEMENT_WEBHOOK_URL;
  
  const boreholes = useCounter(36, 2000, statsInView);
  const scholarships = useCounter(170, 2000, statsInView);
  const jobs = useCounter(152, 2000, statsInView);
  const projects = useCounter(23, 2000, statsInView);

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
      "Ga'anda",
      'Gabun',
      'Garkida',
      'Gombi North',
      'Gombi South',
      'Guyaku',
      'Tawa',
      'Yang',
    ],
  };

  const handleSupporterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!joinMovementWebhookUrl) {
      alert('Supporter registration is not configured yet. Add VITE_JOIN_MOVEMENT_WEBHOOK_URL to enable submissions.');
      return;
    }

    setIsSubmittingSupporter(true);

    try {
      await fetch(joinMovementWebhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          formType: 'supporter-registration',
          submittedAt: new Date().toISOString(),
          ...supporterForm,
        }),
      });

      setSupporterSuccessMessage('Thank you for registering as a supporter! Your response has been submitted successfully.');
      setSupporterForm({ name: '', phone: '', ward: '', email: '' });
    } catch (error) {
      console.error('Supporter registration failed:', error);
      alert('We could not submit your registration right now. Please try again.');
    } finally {
      setIsSubmittingSupporter(false);
    }
  };

  const featuredProjects = [
    {
      icon: BookOpen,
      title: 'Education',
      description: 'Providing quality education infrastructure across the constituency',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Improving access to primary healthcare facilities for all communities',
    },
    {
      icon: Map,
      title: 'Infrastructure',
      description: 'Building and rehabilitating roads to connect our people',
    },
    {
      icon: Droplets,
      title: 'Water Supply',
      description: '36 hand pump boreholes providing clean water across six wards',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-navy flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{ backgroundImage: "url('/barguma.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-navy/45 md:hidden" aria-hidden="true" />
        <div
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
          style={{ backgroundImage: "url('/photo.png')" }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-lp-red text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
              Labour Party (LP)
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              A Proven Leader. A Trusted Voice.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Hong/Gombi's Representative in Abuja.
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Bringing Federal Presence, Development, and Dignity to Our People.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="bg-gold text-navy px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
              >
                Meet Hon. Barguma
              </Link>
              <Link
                to="/track-record"
                className="bg-white/10 backdrop-blur text-white border border-white/30 px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition-colors"
              >
                Track Record
              </Link>
              <Link
                to="/vision-agenda"
                className="bg-white/10 backdrop-blur text-white border border-white/30 px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition-colors"
              >
                Our Agenda
              </Link>
              <Link
                to="/gallery"
                className="bg-white/10 backdrop-blur text-white border border-white/30 px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition-colors"
              >
                Our Project
              </Link>
              <Link
                to="/contact"
                className="bg-lp-red text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
              >
                Join the Movement
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section ref={statsRef} className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-3xl md:text-4xl font-bold text-lp-red mb-2">{boreholes}</p>
              <p className="text-sm text-navy/70">Hand Pump Boreholes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-3xl md:text-4xl font-bold text-lp-red mb-2">{scholarships}</p>
              <p className="text-sm text-navy/70">Scholarships Awarded</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-3xl md:text-4xl font-bold text-lp-red mb-2">{jobs}</p>
              <p className="text-sm text-navy/70">Jobs Facilitated</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-3xl md:text-4xl font-bold text-lp-red mb-2">{projects}+</p>
              <p className="text-sm text-navy/70">Infrastructure Projects</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm col-span-2 md:col-span-1">
              <p className="text-3xl md:text-4xl font-bold text-lp-red mb-2">₦2.34M</p>
              <p className="text-sm text-navy/70">Agricultural Loans Offset</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-8">
              Hon. Hassan Mamman Barguma
            </h2>
            <p className="text-lg text-navy/80 mb-4 leading-relaxed">
              Born in Hong Metropolitan, Adamawa State, Hon. Barguma is a distinguished leader with a proven track record of service to his people. With a background in Environmental Sciences and Town Planning, he has dedicated his life to transforming communities through sustainable development.
            </p>
            <p className="text-lg text-navy/80 mb-4 leading-relaxed">
              A former Member of the Adamawa State House of Assembly where he served as Chief Whip and later Majority Leader, he brings invaluable legislative experience to his bid for the Federal House of Representatives.
            </p>
            <p className="text-lg text-navy/80 mb-8 leading-relaxed">
              Through Build Point Engineering Services, he has continued to drive development initiatives, impacting thousands of lives across Hong/Gombi Federal Constituency.
            </p>
            <Link
              to="/about"
              className="inline-block bg-navy text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
            >
              Learn More About His Story
            </Link>
          </div>
        </div>
      </section>

      {/* Leader Spotlight Section */}
      <section className="bg-stone-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <p className="mb-5 font-playfair text-lg font-bold uppercase tracking-wide text-sky-600 md:text-2xl">
                Meet Hon. Hassan Mamman Barguma
              </p>
              <h2 className="mb-6 font-playfair text-4xl font-bold leading-tight text-navy md:text-5xl lg:text-6xl">
                A Leader for Every Family in Hong and Gombi
              </h2>
              <p className="mb-4 max-w-xl text-lg leading-8 text-navy/75">
                No matter where you live in Hong or Gombi, Hon. Hassan Mamman Barguma
                has been steadfast in service, working to ensure your family,
                your ward, and your community feel the impact of purposeful
                leadership.
              </p>
              <p className="mb-8 max-w-xl text-lg leading-8 text-navy/75">
                From legislative experience to community-driven development, his
                mission remains clear: bring representation, opportunity, and
                dignity closer to the people.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 font-playfair text-lg font-bold text-sky-500 transition-colors hover:text-sky-700"
              >
                Learn More About Hon. Hassan Mamman Barguma
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute right-8 top-4 hidden h-12 w-12 bg-gold md:block" aria-hidden="true" />
              <div className="absolute bottom-6 left-8 hidden h-20 w-20 bg-gold md:block" aria-hidden="true" />

              <div className="relative ml-auto w-[86%] overflow-hidden bg-white shadow-xl">
                <img
                  src="/1.jpg"
                  alt="Community project commissioning led by Hon. Hassan Mamman Barguma"
                  className="h-[430px] w-full object-cover md:h-[520px]"
                  loading="lazy"
                />
              </div>

              <div className="absolute -right-2 top-0 w-[38%] overflow-hidden border-4 border-stone-100 bg-white shadow-lg md:-right-6">
                <img
                  src="/2.jpg"
                  alt="Empowerment support presentation by Hon. Hassan Mamman Barguma"
                  className="h-[150px] w-full object-cover md:h-[180px]"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-8 right-6 w-[42%] overflow-hidden border-4 border-stone-100 bg-white shadow-lg md:right-10">
                <img
                  src="/3.jpg"
                  alt="Medical and laboratory equipment donation by Hon. Hassan Mamman Barguma"
                  className="h-[140px] w-full object-cover md:h-[170px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Feature Section */}
      <section className="bg-stone-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -bottom-8 left-1/2 h-28 w-28 -translate-x-1/2 bg-gold md:h-36 md:w-36" aria-hidden="true" />
              <div className="relative overflow-hidden bg-white shadow-xl">
                <img
                  src="/barguma.jpg"
                  alt="Hon. Hassan Mamman Barguma engaging with the public"
                  className="h-[360px] w-full object-cover md:h-[500px]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="max-w-2xl">
              <h2 className="mb-6 font-playfair text-4xl font-bold uppercase leading-[0.95] text-navy md:text-5xl lg:text-6xl">
                Hong/Gombi Is Heading In The Right Direction
              </h2>
              <p className="mb-4 max-w-xl text-lg leading-8 text-navy/75">
                Through experience, service, and a clear legislative agenda,
                Hon. Hassan Mamman Barguma has shown the leadership needed to
                move our constituency forward with dignity and purpose.
              </p>
              <p className="mb-8 max-w-xl text-lg leading-8 text-navy/75">
                His vision focuses on education, healthcare, infrastructure,
                youth empowerment, and accountable representation that brings
                real results closer to every family in Hong and Gombi.
              </p>
              <Link
                to="/vision-agenda"
                className="inline-flex items-center gap-3 font-playfair text-lg font-bold text-sky-500 transition-colors hover:text-sky-700"
              >
                Learn More About Hon. Barguma&apos;s Vision
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">
              Key Achievements
            </h2>
            <p className="text-lg text-navy/70 max-w-2xl mx-auto">
              A legacy of transformative development that has touched every corner of our constituency
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-lp-red/10 rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-lp-red" size={28} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-navy mb-3">{project.title}</h3>
                  <p className="text-navy/70 text-sm leading-relaxed">{project.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/track-record"
              className="inline-block bg-lp-red text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
            >
              View Full Track Record
            </Link>
          </div>
        </div>
      </section>

      {/* Quote/Vision Block */}
      <section className="bg-navy py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="font-playfair text-2xl md:text-4xl text-white leading-relaxed mb-8">
              "To God be the glory — the business magnate who became a builder of communities, a ladder for the transformation of the common man."
            </blockquote>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Endorsements Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">
              Endorsements & Support
            </h2>
            <p className="text-lg text-navy/70">Supported by community leaders across Hong/Gombi Constituency</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-navy/50" size={32} />
              </div>
              <h4 className="font-semibold text-navy">Community Leaders</h4>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-navy/50" size={32} />
              </div>
              <h4 className="font-semibold text-navy">Youth Groups</h4>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-navy/50" size={32} />
              </div>
              <h4 className="font-semibold text-navy">Women's Groups</h4>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-navy/50" size={32} />
              </div>
              <h4 className="font-semibold text-navy">Religious Bodies</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter/Supporter Sign-Up */}
      <section className="bg-lp-red py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
                Join the Movement
              </h2>
              <p className="text-white/80 text-lg">
                Register as a supporter and stay updated on the campaign's progress
              </p>
            </div>
            <form onSubmit={handleSupporterSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              {supporterSuccessMessage && (
                <div className="mb-4 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  {supporterSuccessMessage}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={supporterForm.name}
                    onChange={(e) => setSupporterForm({ ...supporterForm, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lp-red"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={supporterForm.phone}
                    onChange={(e) => setSupporterForm({ ...supporterForm, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lp-red"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="ward" className="block text-sm font-medium text-navy mb-2">Ward *</label>
                    <select
                      id="ward"
                      required
                      value={supporterForm.ward}
                      onChange={(e) => setSupporterForm({ ...supporterForm, ward: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lp-red"
                    >
                      <option value="">Select your ward</option>
                      {Object.entries(wardsByLga).map(([lga, wards]) => (
                        <optgroup key={`supporter-${lga}`} label={lga}>
                          {wards.map((ward) => (
                            <option key={`supporter-${lga}-${ward}`} value={`${ward} (${lga})`}>
                              {ward}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">Email (Optional)</label>
                    <input
                      type="email"
                      id="email"
                      value={supporterForm.email}
                      onChange={(e) => setSupporterForm({ ...supporterForm, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lp-red"
                      placeholder="your@email.com"
                    />
                  </div>
              </div>
              <button
                type="submit"
                disabled={isSubmittingSupporter}
                className="w-full bg-gold text-navy py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
              >
                {isSubmittingSupporter ? 'Submitting...' : 'Register as a Supporter'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
