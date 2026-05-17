const About = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white text-center">
            About Hon. Barguma
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
            The story of a leader dedicated to serving his people and transforming communities
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Biography */}
            <div className="lg:col-span-2 space-y-12">
              {/* Early Life & Education */}
              <div>
                <h2 className="font-playfair text-3xl font-bold text-navy mb-6 pb-2 border-b-2 border-lp-red inline-block">
                  Early Life & Education
                </h2>
                <p className="text-lg text-navy/80 leading-relaxed mb-4">
                  Born on the 12th of July 1969 in Hong Metropolitan, Adamawa State, Hon. Hassan Mamman Barguma's journey began in the heart of the community he would later dedicate his life to serving.
                </p>
                <p className="text-lg text-navy/80 leading-relaxed">
                  His educational journey took him through Hong Central Primary School, Kwabaktina Primary Schools, before attending Government Secondary School Mubi. He pursued higher education at Kaduna Polytechnic and later at Federal Polytechnic Nasarawa, where he specialised in Environmental Sciences and Town Planning.
                </p>
              </div>

              {/* Professional Background */}
              <div>
                <h2 className="font-playfair text-3xl font-bold text-navy mb-6 pb-2 border-b-2 border-lp-red inline-block">
                  Professional Background
                </h2>
                <p className="text-lg text-navy/80 leading-relaxed mb-4">
                  Hon. Barguma began his professional career with the Adamawa State Environmental Protection Agency, where he gained valuable experience in environmental management and sustainable development.
                </p>
                <p className="text-lg text-navy/80 leading-relaxed">
                  He later transitioned into entrepreneurship, founding Build Point Engineering Services, a company that would go on to execute numerous infrastructure projects across Adamawa State, bringing development to underserved communities.
                </p>
              </div>

              {/* Political Journey */}
              <div>
                <h2 className="font-playfair text-3xl font-bold text-navy mb-6 pb-2 border-b-2 border-lp-red inline-block">
                  Political Journey
                </h2>
                <p className="text-lg text-navy/80 leading-relaxed mb-4">
                  His political career began in 2011 when he contested on the platform of the Peoples Democratic Party (PDP). Following the formation of the Labour Party (LP), he aligned with the new party, which better reflected his vision for progressive development.
                </p>
                <p className="text-lg text-navy/80 leading-relaxed">
                  In the 7th Adamawa State House of Assembly, he was elected to represent Hong Constituency, marking the beginning of his formal legislative service to the people of Adamawa State.
                </p>
              </div>

              {/* Legislative Career Highlights */}
              <div>
                <h2 className="font-playfair text-3xl font-bold text-navy mb-6 pb-2 border-b-2 border-lp-red inline-block">
                  Legislative Career Highlights
                </h2>
                <p className="text-lg text-navy/80 leading-relaxed mb-4">
                  During his tenure in the Adamawa State House of Assembly, Hon. Barguma distinguished himself as a capable leader. He first served as Chief Whip, demonstrating his ability to manage legislative proceedings and maintain party discipline.
                </p>
                <p className="text-lg text-navy/80 leading-relaxed mb-4">
                  He was subsequently elevated to the position of Majority Leader, where he played a pivotal role in the emergence of Rt. Hon. Kabiru Mijinyawa as Speaker. His leadership was instrumental in driving the legislative agenda of the House.
                </p>
                <p className="text-lg text-navy/80 leading-relaxed">
                  Throughout his legislative career, he chaired and served on several key committees, influencing policies that impacted education, infrastructure, and economic development across the state.
                </p>
              </div>

              {/* Post-Legislative Work */}
              <div>
                <h2 className="font-playfair text-3xl font-bold text-navy mb-6 pb-2 border-b-2 border-lp-red inline-block">
                  Post-Legislative Work
                </h2>
                <p className="text-lg text-navy/80 leading-relaxed">
                  After his tenure in the state House of Assembly, Hon. Barguma continued his commitment to community development through Build Point Engineering Services. His business ventures have created employment opportunities and executed critical infrastructure projects, while his humanitarian efforts have touched thousands of lives across Hong and Gombi local governments.
                </p>
              </div>
            </div>

            {/* Sidebar - Personal Philosophy */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8 rounded-lg sticky top-24">
                <h3 className="font-playfair text-2xl font-bold text-navy mb-6">
                  Personal Philosophy
                </h3>
                <div className="bg-lp-red/10 p-6 rounded-lg mb-6">
                  <p className="font-playfair text-xl text-navy italic mb-4">
                    "Wu Suma ati mbulmbulinyi jo zindi"
                  </p>
                  <p className="text-navy/80 text-sm">
                    — "The tree that bears good fruits will be known earlier by its bloom."
                  </p>
                </div>
                <p className="text-navy/80 leading-relaxed mb-6">
                  This ancient Kilba adage encapsulates Hon. Barguma's approach to leadership and life. His track record of achievements speaks for itself, and his contributions to community development have become evident to all, much like a tree that announces its fruits through its early bloom.
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-navy mb-4">Quick Facts</h4>
                  <ul className="space-y-3 text-sm text-navy/70">
                    <li><span className="font-medium text-navy">Born:</span> 12th July 1969</li>
                    <li><span className="font-medium text-navy">Origin:</span> Hong, Adamawa State</li>
                    <li><span className="font-medium text-navy">Party:</span> LP (Labour Party)</li>
                    <li><span className="font-medium text-navy">Profession:</span> Town Planner</li>
                    <li><span className="font-medium text-navy">Previous Role:</span> Majority Leader, Adamawa State House of Assembly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;