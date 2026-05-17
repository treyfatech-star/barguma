import { useEffect, useState } from 'react';
import { Briefcase, Building2, FileText, GraduationCap, Wrench, X } from 'lucide-react';

type SectionId = 'direct' | 'facilitated' | 'empowerment' | 'bills';

type Item = {
  id: number;
  title: string;
  images?: string[];
};

type Section = {
  id: SectionId;
  label: string;
  description: string;
  icon: typeof GraduationCap;
  items: Item[];
};

const galleryPath = (folder: string, file: string) =>
  encodeURI(`/gallery/${folder}/${file}`);

const projectSections: Section[] = [
  {
    id: 'direct',
    label: 'Direct Constituency Projects',
    description: 'Twenty-three direct constituency interventions delivered across education, water access, healthcare, roads, drainage, and community support.',
    icon: Building2,
    items: [
      {
        id: 1,
        title: 'Completed 2 studio classrooms and offices at Ngalbi Primary School',
        images: [
          galleryPath('Completed 2 studio classrooms and offices at Ngalbi Primary School', 'IMG-20260514-WA0021.jpg'),
          galleryPath('Completed 2 studio classrooms and offices at Ngalbi Primary School', 'IMG-20260514-WA0029.jpg'),
          galleryPath('Completed 2 studio classrooms and offices at Ngalbi Primary School', 'IMG-20260514-WA0034.jpg'),
        ],
      },
      {
        id: 2,
        title: 'Constructed block of 2 classrooms and offices at GDSS Mumbol',
        images: [
          galleryPath('Constructed block of 2 classrooms and offices at GDSS Mumbol', 'IMG-20260514-WA0027.jpg'),
        ],
      },
      { id: 3, title: 'Constructed block of 2 classrooms and offices with furniture at Shangui Primary School' },
      { id: 4, title: 'Constructed CHB wall fence with chain link and gates of Hong Central Cemetery (Christians and Muslims)' },
      {
        id: 5,
        title: 'Constructed double drainage, 2 ring culverts and access road to Hong Central Cemetery',
        images: [
          galleryPath('Constructed double drainage, 2 ring culverts and access road to Hong Central Cemetery', 'IMG-20260514-WA0028.jpg'),
          galleryPath('Constructed double drainage, 2 ring culverts and access road to Hong Central Cemetery', 'IMG-20260514-WA0035.jpg'),
        ],
      },
      {
        id: 6,
        title: 'Constructed and side-filled CHB wall drainage, Hong',
        images: [
          galleryPath('Constructed and side-filled CHB wall drainage, Hong', 'IMG-20260514-WA0019.jpg'),
          galleryPath('Constructed and side-filled CHB wall drainage, Hong', 'IMG-20260514-WA0042.jpg'),
          galleryPath('Constructed and side-filled CHB wall drainage, Hong', 'IMG-20260514-WA0043.jpg'),
          galleryPath('Constructed and side-filled CHB wall drainage, Hong', 'IMG-20260514-WA0046.jpg'),
        ],
      },
      {
        id: 7,
        title: 'Rehabilitated 3 classrooms and office with furniture at Mbulinyi Primary School',
        images: [
          galleryPath('Rehabilitated 3 classrooms and office with furniture at Mbulinyi Primary School', 'IMG-20260514-WA0037.jpg'),
          galleryPath('Rehabilitated 3 classrooms and office with furniture at Mbulinyi Primary School', 'IMG-20260515-WA0006.jpg'),
        ],
      },
      { id: 8, title: 'Completed concrete wells at Duldar' },
      { id: 9, title: 'Completed concrete wells at Mumbol' },
      {
        id: 10,
        title: 'Constructed solar borehole at Gudimiya',
        images: [
          galleryPath('Constructed solar borehole at Gudimiya', 'IMG-20260514-WA0024.jpg'),
          galleryPath('Constructed solar borehole at Gudimiya', 'IMG-20260514-WA0026.jpg'),
          galleryPath('Constructed solar borehole at Gudimiya', 'IMG-20260515-WA0003.jpg'),
        ],
      },
      {
        id: 11,
        title: 'Completed abandoned 3-classroom block and office at Fadama Reke Primary School',
        images: [
          galleryPath('Completed abandoned 3-classroom block and office at Fadama Reke Primary School', 'IMG-20260514-WA0032.jpg'),
          galleryPath('Completed abandoned 3-classroom block and office at Fadama Reke Primary School', 'IMG-20260514-WA0040.jpg'),
          galleryPath('Completed abandoned 3-classroom block and office at Fadama Reke Primary School', 'IMG-20260514-WA0041.jpg'),
        ],
      },
      {
        id: 12,
        title: 'Sunk 36 hand pump boreholes across six wards of Hong Constituency',
        images: [
          galleryPath('Sunk 36 hand pump boreholes across six wards of Hong Constituency', 'IMG-20260514-WA0030.jpg'),
        ],
      },
      {
        id: 13,
        title: 'Initiated construction of examination hall and offices at GDSS Zhedinyi',
        images: [
          galleryPath('Initiated construction of examination hall and offices at GDSS Zhedinyi', 'IMG-20260514-WA0018.jpg'),
          galleryPath('Initiated construction of examination hall and offices at GDSS Zhedinyi', 'IMG-20260514-WA0039.jpg'),
        ],
      },
      { id: 14, title: 'Constructed block of 3 classrooms at Kwabaktina Primary School, Hong' },
      {
        id: 15,
        title: 'Constructed Maternity Centre at Anguwan Hausawa, Hong',
        images: [
          galleryPath('Constructed Maternity Centre at Anguwan Hausawa, Hong', 'IMG-20260514-WA0022.jpg'),
        ],
      },
      { id: 16, title: 'Constructed bridge along Dzigayerima-Kwakwah Road' },
      { id: 17, title: 'Constructed block of classrooms at Daksiri Gari Primary School' },
      { id: 18, title: 'Constructed block of classrooms at Pella Islamiya Primary School' },
      { id: 19, title: "Renovated block of classrooms and offices at GDSS Kala'a" },
      { id: 20, title: 'Donated drugs to Dilchidama Health Clinic' },
      {
        id: 21,
        title: 'Donated medical and laboratory equipment to Dilchidama Primary Health Care',
        images: [
          galleryPath('Donated medical and laboratory equipment to Dilchidama Primary Health Care', 'IMG-20260514-WA0049.jpg'),
        ],
      },
      {
        id: 22,
        title: 'Distributed whiteboards to selected primary schools in Hong Constituency',
        images: [
          galleryPath('Distributed whiteboards to selected primary schools in Hong Constituency', 'IMG-20260514-WA0050.jpg'),
        ],
      },
      {
        id: 23,
        title: 'Donated generators to selected churches within Hong Constituency',
        images: [
          galleryPath('Donated generators to selected churches within Hong Constituency', '5.jpg'),
        ],
      },
    ],
  },
  {
    id: 'facilitated',
    label: 'Facilitated Projects',
    description: 'State and federal interventions facilitated through representation, advocacy, and public leadership.',
    icon: Wrench,
    items: [
      {
        id: 24,
        title: 'Constructed 3.7km Fadama Reke-Bangshika Road (RAMP)',
        images: [
          galleryPath('Constructed 3.7km Fadama Reke–Bangshika Road (RAMP)', 'IMG-20260514-WA0020.jpg'),
          galleryPath('Constructed 3.7km Fadama Reke–Bangshika Road (RAMP)', 'IMG-20260514-WA0020 - Copy.jpg'),
          galleryPath('Constructed 3.7km Fadama Reke–Bangshika Road (RAMP)', 'IMG-20260514-WA0044.jpg'),
        ],
      },
      { id: 25, title: 'Constructed Mile Bakwai-Gudimiya Road (RAMP)' },
      {
        id: 26,
        title: 'Rehabilitated Phase 1 hostel and administrative block at GSS Hong',
        images: [
          galleryPath('Renovations', 'IMG-20260514-WA0023.jpg'),
        ],
      },
      { id: 27, title: 'Government absorption of Dagza Community Hospital' },
      { id: 28, title: 'Electrification of Kubu Bang projects' },
      { id: 29, title: 'Commissioned motorised borehole at Gudumiya, Hong Ward' },
    ],
  },
  {
    id: 'empowerment',
    label: 'Empowerment Scheme & Employment',
    description: 'Scholarship support, livelihoods, employment facilitation, women-focused empowerment, and direct welfare interventions.',
    icon: Briefcase,
    items: [
      { id: 30, title: 'Awarded scholarships to 170 students across the six wards of Hong Constituency' },
      {
        id: 31,
        title: 'Donated 13 cars of different brands to individuals and religious bodies, including one each to CAN and the Muslim Council',
        images: [
          galleryPath('Donated 13 cars of different brands to individuals and religious bodies (including one each to CAN and the Muslim Council)', 'IMG-20260515-WA0008.jpg'),
          galleryPath('Donated 13 cars of different brands to individuals and religious bodies (including one each to CAN and the Muslim Council)', 'IMG-20260515-WA0009.jpg'),
          galleryPath('Donated 13 cars of different brands to individuals and religious bodies (including one each to CAN and the Muslim Council)', 'IMG-20260515-WA0010.jpg'),
          galleryPath('Donated 13 cars of different brands to individuals and religious bodies (including one each to CAN and the Muslim Council)', 'IMG-20260515-WA0011.jpg'),
          galleryPath('Donated 13 cars of different brands to individuals and religious bodies (including one each to CAN and the Muslim Council)', 'IMG-20260515-WA0012.jpg'),
          galleryPath('Donated 13 cars of different brands to individuals and religious bodies (including one each to CAN and the Muslim Council)', 'IMG-20260515-WA0013.jpg'),
        ],
      },
      { id: 32, title: 'Initiated and empowered many women in his constituency through a small and medium enterprises (SMEs) scheme' },
      { id: 33, title: 'Offset agricultural loans totalling N2.34 million for people who could not afford to pay' },
      { id: 34, title: 'Facilitated employment of 152 individuals in ministries, departments, agencies, and parastatals across local, state, and federal government' },
      {
        id: 35,
        title: 'Trained and empowered women in skills acquisition across six wards of Hong Constituency',
        images: [
          galleryPath('Trained and empowered women in skills acquisition across six wards of Hong Constituency', 'IMG-20260514-WA0017.jpg'),
          galleryPath('Trained and empowered women in skills acquisition across six wards of Hong Constituency', 'IMG-20260514-WA0045.jpg'),
          galleryPath('Trained and empowered women in skills acquisition across six wards of Hong Constituency', 'IMG-20260515-WA0004.jpg'),
        ],
      },
    ],
  },
  {
    id: 'bills',
    label: 'Bills Sponsored',
    description: 'Key legislative contributions focused on reconstruction, fiscal governance, and institutional accountability.',
    icon: FileText,
    items: [
      { id: 36, title: 'A Bill for a Law to Establish the Adamawa State Rehabilitation and Reconstruction Agency, to rehabilitate victims of insurgency and reconstruct the seven affected LGAs of the state' },
      { id: 37, title: 'A Bill for a Law to Establish the Office of Accountant General, its functions, powers and structure' },
      { id: 38, title: 'A Bill for a Law to Establish the Office of Auditor General, its functions, powers and structure' },
    ],
  },
];

const filters = [
  { id: 'all', label: 'Complete Record' },
  ...projectSections.map((section) => ({
    id: section.id,
    label: section.label,
  })),
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | SectionId>('all');
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const visibleSections =
    activeFilter === 'all'
      ? projectSections
      : projectSections.filter((section) => section.id === activeFilter);

  const totalProjects = projectSections.reduce((sum, section) => sum + section.items.length, 0);

  const sortItemsByImages = (items: Item[]) =>
    [...items].sort((a, b) => {
      const aHasImages = (a.images?.length ?? 0) > 0;
      const bHasImages = (b.images?.length ?? 0) > 0;

      if (aHasImages === bHasImages) {
        return a.id - b.id;
      }

      return aHasImages ? -1 : 1;
    });

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white text-center">
            Projects
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
            A complete record of {totalProjects} projects, interventions, empowerment programmes, and sponsored bills tied to Hon. Hassan Mamman Barguma's public service.
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto py-4">
            <div className="flex space-x-2 min-w-max justify-center">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id as 'all' | SectionId)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                    activeFilter === filter.id
                      ? 'bg-lp-red text-white'
                      : 'text-navy/70 hover:bg-gray-100'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-10">
            {visibleSections.map((section) => {
              const Icon = section.icon;

              return (
                <div key={section.id} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex flex-col gap-4 border-b border-gray-100 pb-5 md:flex-row md:items-start md:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lp-red/10 text-lp-red">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h2 className="font-playfair text-2xl font-bold text-navy">{section.label}</h2>
                        <p className="mt-2 max-w-2xl text-sm leading-7 text-navy/70">{section.description}</p>
                      </div>
                    </div>
                    <div className="inline-flex w-fit items-center rounded-full bg-gold/20 px-4 py-2 text-sm font-semibold text-navy">
                      {section.items.length} Items
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {sortItemsByImages(section.items).map((project, index) => {
                      const featuredImage = project.images?.[0];
                      const supportingImages = project.images?.slice(1, 4) ?? [];

                      return (
                        <article
                          key={project.id}
                          className="portfolio-card rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-lp-red/25 hover:shadow-xl"
                          style={{ animationDelay: `${index * 80}ms` }}
                        >
                          {featuredImage && (
                            <div className="portfolio-media group relative mb-5 overflow-hidden rounded-2xl">
                              <img
                                src={featuredImage}
                                alt={`${project.title} featured`}
                                className="h-56 w-full cursor-zoom-in object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                                onClick={() =>
                                  setSelectedImage({
                                    src: featuredImage,
                                    title: project.title,
                                  })
                                }
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                              <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-navy shadow-sm backdrop-blur">
                                Project Portfolio
                              </div>
                              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-lp-red text-sm font-bold text-white shadow-lg">
                                  {project.id}
                                </div>
                                <div className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy shadow-sm backdrop-blur">
                                  {project.images?.length} {project.images?.length === 1 ? 'Image' : 'Images'}
                                </div>
                              </div>
                            </div>
                          )}

                          {!featuredImage && (
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-lp-red text-sm font-bold text-white shadow-sm">
                              {project.id}
                            </div>
                          )}

                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-base font-semibold leading-7 text-navy">{project.title}</h3>
                            {featuredImage && (
                              <div className="shrink-0 rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-navy">
                                Visual Record
                              </div>
                            )}
                          </div>

                          <p className="mt-2 text-sm leading-6 text-navy/65">
                            {featuredImage
                              ? 'Documented with portfolio images from project delivery and field evidence.'
                              : 'Official project record currently listed without attached portfolio images.'}
                          </p>

                          {supportingImages.length > 0 && (
                            <div className="mt-5 grid grid-cols-3 gap-3">
                              {supportingImages.map((image, imageIndex) => (
                                <div
                                  key={`${project.id}-${imageIndex}`}
                                  className="portfolio-thumb group/thumb relative overflow-hidden rounded-xl bg-gray-100"
                                >
                                  <img
                                    src={image}
                                    alt={`${project.title} ${imageIndex + 2}`}
                                    className="aspect-[4/3] w-full cursor-zoom-in object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                                    loading="lazy"
                                    onClick={() =>
                                      setSelectedImage({
                                        src: image,
                                        title: project.title,
                                      })
                                    }
                                  />
                                  <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover/thumb:bg-navy/10" />
                                </div>
                              ))}
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {visibleSections.length === 0 && (
            <div className="text-center py-16">
              <p className="text-navy/60 text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            <X size={22} />
          </button>

          <div
            className="max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[78vh] w-full bg-black object-contain"
            />
            <div className="border-t border-gray-200 bg-white px-5 py-4">
              <p className="text-sm font-semibold text-navy">{selectedImage.title}</p>
              <p className="mt-1 text-xs text-navy/60">Press `Esc` or tap outside to close.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
