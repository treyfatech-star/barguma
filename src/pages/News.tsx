import { Calendar, User } from 'lucide-react';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Hon. Barguma Receives Endorsement from Traditional Council of Hong',
      excerpt: 'The paramount rulers and traditional leaders of Hong local government have unanimously endorsed Hon. Hassan Mamman Barguma as their preferred candidate for the House of Representatives seat.',
      date: 'May 10, 2026',
      author: 'Campaign Press Office',
      category: 'Campaign News',
      image: 'https://images.unsplash.com/photo-1591036237361-5631e2cc09c7?auto=format&fit=crop&q=80&w=800&h=500',
    },
    {
      id: 2,
      title: 'Empowerment Program Trains 500 Youth Across Constituency',
      excerpt: 'The campaign skills acquisition program has successfully trained 500 young men and women in various vocational skills to boost economic independence.',
      date: 'April 28, 2026',
      author: 'Media Team',
      category: 'Constituency Updates',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=500',
    },
    {
      id: 3,
      title: "LP Stakeholders' Meeting Holds in Gombi",
      excerpt: 'Labour Party stakeholders from Gombi local government convened to strategize for the forthcoming elections and reaffirm their support.',
      date: 'April 15, 2026',
      author: 'Campaign Press Office',
      category: 'Campaign News',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=800&h=500',
    },
    {
      id: 4,
      title: 'Solar Electrification Project Reaches Three Remote Communities',
      excerpt: 'Solar power installations have been completed in three underserved communities, bringing electricity to hundreds of households for the first time.',
      date: 'March 30, 2026',
      author: 'Development Team',
      category: 'Project Updates',
      image: 'https://images.unsplash.com/photo-1509391366314-4e570f18b927?auto=format&fit=crop&q=80&w=800&h=500',
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Women's Wing Rally",
      date: 'May 25, 2026',
      location: 'Gombi Town Hall',
    },
    {
      id: 2,
      title: 'Youth Mobilization Summit',
      date: 'June 2, 2026',
      location: 'Hong Civic Centre',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white text-center">
            News & Updates
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
            Stay updated with the latest campaign news, press releases, and constituency development updates
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main News Feed */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {newsArticles.map((article) => (
                  <article key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 md:h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6 md:w-3/5">
                        <span className="inline-block bg-lp-red/10 text-lp-red text-xs font-semibold px-3 py-1 rounded-full mb-3">
                          {article.category}
                        </span>
                        <h2 className="font-playfair text-xl font-bold text-navy mb-3 hover:text-apc-green transition-colors cursor-pointer">
                          {article.title}
                        </h2>
                        <p className="text-navy/70 text-sm mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center text-xs text-navy/50 space-x-4">
                          <span className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {article.date}
                          </span>
                          <span className="flex items-center">
                            <User size={14} className="mr-1" />
                            {article.author}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Upcoming Events */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-playfair text-xl font-bold text-navy mb-6">Upcoming Events</h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-navy mb-1">{event.title}</h4>
                      <p className="text-sm text-navy/60">{event.date}</p>
                      <p className="text-sm text-navy/60">{event.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
