import { useState } from 'react';
import { MapPin, GraduationCap, Car, Briefcase, FileText, Building2, Heart, Wrench, Users } from 'lucide-react';

const TrackRecord = () => {
  const [activeTab, setActiveTab] = useState('infrastructure');

  const tabs = [
    { id: 'infrastructure', label: 'Infrastructure Projects' },
    { id: 'facilitated', label: 'Facilitated Projects' },
    { id: 'empowerment', label: 'Empowerment & Employment' },
    { id: 'legislative', label: 'Legislative Record' },
  ];

  const infrastructureProjects = [
    { id: 1, name: 'Completed 2 studio classrooms and offices at Ngalbi Primary School' },
    { id: 2, name: 'Constructed block of 2 classrooms and offices at GDSS Mumbol' },
    { id: 3, name: 'Constructed block of 2 classrooms and offices with furniture at Shangui Primary School' },
    { id: 4, name: 'Constructed CHB wall fence with chain link and gates of Hong Central Cemetery (Christians and Muslims)' },
    { id: 5, name: 'Constructed double drainage, 2 ring culverts and access road to Hong Central Cemetery' },
    { id: 6, name: 'Constructed and side-filled CHB wall drainage, Hong' },
    { id: 7, name: 'Rehabilitated 3 classrooms and office with furniture at Mbulinyi Primary School' },
    { id: 8, name: 'Completed concrete wells at Duldar' },
    { id: 9, name: 'Completed concrete wells at Mumbol' },
    { id: 10, name: 'Constructed solar borehole at Gudimiya' },
    { id: 11, name: 'Completed abandoned 3-classroom block and office at Fadama Reke Primary School' },
    { id: 12, name: 'Sunk 36 hand pump boreholes across six wards of Hong Constituency' },
    { id: 13, name: 'Initiated construction of examination hall and offices at GDSS Zhedinyi' },
    { id: 14, name: 'Constructed block of 3 classrooms at Kwabaktina Primary School, Hong' },
    { id: 15, name: 'Constructed Maternity Centre at Anguwan Hausawa, Hong' },
    { id: 16, name: 'Constructed bridge along Dzigayerima-Kwakwah Road' },
    { id: 17, name: 'Constructed block of classrooms at Daksiri Gari Primary School' },
    { id: 18, name: 'Constructed block of classrooms at Pella Islamiya Primary School' },
    { id: 19, name: "Renovated block of classrooms and offices at GDSS Kala'a" },
    { id: 20, name: 'Donated drugs to Dilchidama Health Clinic' },
    { id: 21, name: 'Donated medical and laboratory equipment to Dilchidama Primary Health Care' },
    { id: 22, name: 'Distributed whiteboards to selected primary schools in Hong Constituency' },
    { id: 23, name: 'Donated generators to selected churches within Hong Constituency' },
  ];

  const facilitatedProjects = [
    { id: 24, name: 'Constructed 3.7km Fadama Reke-Bangshika Road (RAMP)' },
    { id: 25, name: 'Constructed Mile Bakwai-Gudimiya Road (RAMP)' },
    { id: 26, name: 'Rehabilitated Phase 1 hostel and administrative block at GSS Hong' },
    { id: 27, name: 'Government absorption of Dagza Community Hospital' },
    { id: 28, name: 'Electrification of Kubu Bang projects' },
    { id: 29, name: 'Commissioned motorised borehole at Gudumiya, Hong Ward' },
  ];

  const empowermentPrograms = [
    {
      id: 30,
      icon: GraduationCap,
      number: '170',
      label: 'Scholarships Awarded',
      description: 'Awarded scholarships to 170 students across the six wards of Hong Constituency.',
    },
    {
      id: 31,
      icon: Car,
      number: '13',
      label: 'Cars Donated',
      description: 'Donated 13 cars of different brands to individuals and religious bodies, including CAN and the Muslim Council.',
    },
    {
      id: 32,
      icon: Heart,
      number: 'SMEs',
      label: 'Women Empowered',
      description: 'Initiated and empowered many women through a small and medium enterprises scheme.',
    },
    {
      id: 33,
      icon: Briefcase,
      number: 'N2.34M',
      label: 'Loans Offset',
      description: 'Offset agricultural loans totalling N2.34 million for people who could not afford repayment.',
    },
    {
      id: 34,
      icon: Users,
      number: '152',
      label: 'Jobs Facilitated',
      description: 'Facilitated employment across local, state, and federal ministries, departments, agencies, and parastatals.',
    },
    {
      id: 35,
      icon: Wrench,
      number: '6 Wards',
      label: 'Skills Acquisition',
      description: 'Trained and empowered women in skills acquisition across the six wards of Hong Constituency.',
    },
  ];

  const billsSponsored = [
    {
      title: 'Adamawa State Rehabilitation and Reconstruction Agency Bill',
      description: 'A Bill for a Law to Establish the Adamawa State Rehabilitation and Reconstruction Agency, to rehabilitate victims of insurgency and reconstruct the seven affected LGAs of the state.',
    },
    {
      title: 'Office of Accountant General Bill',
      description: 'A Bill for a Law to Establish the Office of Accountant General, its functions, powers and structure.',
    },
    {
      title: 'Office of Auditor General Bill',
      description: 'A Bill for a Law to Establish the Office of Auditor General, its functions, powers and structure.',
    },
  ];

  const motionsMoved = [
    { category: 'Agriculture', count: 2 },
    { category: 'Security', count: 1 },
    { category: 'Fiscal Oversight', count: 1 },
    { category: 'IDP Response', count: 1 },
    { category: 'Infrastructure', count: 2 },
    { category: 'Accountability', count: 1 },
  ];

  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white text-center">
            Track Record
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
            A proven legacy of development and service delivery across Hong/Gombi Federal Constituency
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <div className="flex space-x-1 md:space-x-4 py-4 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gold text-navy'
                      : 'text-navy/70 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Infrastructure Projects Tab */}
          {activeTab === 'infrastructure' && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="font-playfair text-3xl font-bold text-navy mb-8">
                    Direct Constituency Projects
                  </h2>
                  <div className="space-y-4">
                    {infrastructureProjects.map((project) => (
                      <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4">
                        <div className="w-10 h-10 bg-lp-red rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{project.id}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy text-lg">{project.name}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:sticky lg:top-32 self-start">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-playfair text-xl font-bold text-navy mb-4">
                      Project Locations Map
                    </h3>
                    <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="text-center text-navy/50">
                        <MapPin size={48} className="mx-auto mb-4" />
                        <p>Interactive map of project locations</p>
                        <p className="text-sm mt-2">23 projects across Hong/Gombi</p>
                      </div>
                      {/* Sample map pins */}
                      <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-lp-red rounded-full animate-pulse"></div>
                      <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-lp-red rounded-full animate-pulse"></div>
                      <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-lp-red rounded-full animate-pulse"></div>
                      <div className="absolute top-2/3 left-1/4 w-3 h-3 bg-lp-red rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Facilitated Projects Tab */}
          {activeTab === 'facilitated' && (
            <div>
              <h2 className="font-playfair text-3xl font-bold text-navy mb-8 text-center">
                State & Federal Projects Facilitated
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {facilitatedProjects.map((project) => (
                  <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-lp-red/10 text-lp-red">
                      <Building2 size={22} />
                    </div>
                    <div className="mb-3 inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-navy/70">
                      Project {project.id}
                    </div>
                    <h3 className="font-semibold text-navy text-lg">{project.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empowerment & Employment Tab */}
          {activeTab === 'empowerment' && (
            <div>
              <h2 className="font-playfair text-3xl font-bold text-navy mb-8 text-center">
                Empowerment & Employment Initiatives
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {empowermentPrograms.map((program, index) => {
                  const Icon = program.icon;
                  return (
                    <div key={program.id} className="bg-white p-8 rounded-lg shadow-sm text-center">
                      <div className="w-16 h-16 bg-lp-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="text-lp-red" size={32} />
                      </div>
                      <p className="text-3xl font-bold text-lp-red mb-2">{program.number}</p>
                      <h3 className="font-semibold text-navy text-lg mb-2">{program.label}</h3>
                      <p className="text-navy/70 text-sm">{program.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Legislative Record Tab */}
          {activeTab === 'legislative' && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Bills Sponsored */}
                <div>
                  <h2 className="font-playfair text-2xl font-bold text-navy mb-6">
                    Bills Sponsored (3 Bills)
                  </h2>
                  <div className="space-y-4">
                    {billsSponsored.map((bill, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-sm overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenAccordion(openAccordion === `bill-${index}` ? null : `bill-${index}`)}
                          className="w-full p-6 text-left flex items-center justify-between"
                        >
                          <span className="font-semibold text-navy">{bill.title}</span>
                          <FileText className="text-lp-red" size={20} />
                        </button>
                        {openAccordion === `bill-${index}` && (
                          <div className="px-6 pb-6">
                            <p className="text-navy/70">{bill.description}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Motions Moved */}
                <div>
                  <h2 className="font-playfair text-2xl font-bold text-navy mb-6">
                    Motions Moved (6 Thematic Areas)
                  </h2>
                  <div className="space-y-4">
                    {motionsMoved.map((motion, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between"
                      >
                        <span className="font-semibold text-navy">{motion.category}</span>
                        <span className="bg-lp-red text-white text-sm px-3 py-1 rounded-full">
                          {motion.count} {motion.count === 1 ? 'motion' : 'motions'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TrackRecord;
