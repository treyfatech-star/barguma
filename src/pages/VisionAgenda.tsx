import { Download, BookOpen, Heart, Map, Leaf, Users, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const VisionAgenda = () => {
  const agendaPillars = [
    {
      icon: BookOpen,
      title: 'Education',
      description: 'Securing federal funding for schools, tertiary institutions, and scholarship programmes across Hong and Gombi. We will work to ensure every child in our constituency has access to quality education.',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Upgrading primary health care infrastructure, improving maternal health outcomes, and expanding rural health access. Our goal is to bring quality healthcare closer to every community.',
    },
    {
      icon: Map,
      title: 'Infrastructure',
      description: 'Championing federal road projects, expanding rural electrification, and delivering sustainable water supply solutions throughout the constituency to connect our communities.',
    },
    {
      icon: Leaf,
      title: 'Agriculture',
      description: 'Leveraging federal programmes including Anchor Borrowers and FADAMA to boost food security and increase farmer incomes across our agricultural communities.',
    },
    {
      icon: Users,
      title: 'Youth & Women Empowerment',
      description: 'Expanding skills acquisition programmes, supporting SME development, and creating sustainable employment opportunities for our youth and women.',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Working closely with the National Assembly to address the security challenges facing Adamawa State and protect our communities.',
    },
    {
      icon: CheckCircle,
      title: 'Accountability',
      description: 'Ensuring transparent appropriation and effective oversight of all constituency-based federal projects to maximise impact.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white text-center">
            Vision & Agenda
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
            A comprehensive legislative agenda to transform Hong/Gombi Federal Constituency
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-8">
              Our Vision for Hong/Gombi
            </h2>
            <p className="text-xl text-navy/80 leading-relaxed mb-8">
              To build a prosperous, united, and developed Hong/Gombi Federal Constituency where every citizen has access to quality education, healthcare, infrastructure, and economic opportunities. We will work tirelessly to attract federal presence to our communities and ensure that our people benefit from Nigeria's democracy.
            </p>
            <div className="inline-block">
              <a
                href="/Hassan%20Barguma%20Manifesto.pdf"
                download
                target="_blank"
                rel="noreferrer"
                className="bg-gold text-navy px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center"
              >
                <Download size={20} className="mr-2" />
                Download Full Manifesto (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-navy mb-12 text-center">
            Legislative Agenda Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {agendaPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-lp-red/10 rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-lp-red" size={28} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-navy mb-4">{pillar.title}</h3>
                  <p className="text-navy/70 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-lp-red py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
              Join Us in Building a Better Future
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Together, we can bring federal presence, development, and dignity to the people of Hong/Gombi Federal Constituency. Join our movement today.
            </p>
            <Link
              to="/contact"
              className="bg-gold text-navy px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors inline-block"
            >
              Join the Movement
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionAgenda;