import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import certificate images
import Hptech from '../assets/certificates/1.jpg';
import ISHackathon from '../assets/certificates/2.jpg';
import Noskode from '../assets/certificates/3.jpg';
import Orbit from '../assets/certificates/4.jpg';
import LOCUS from '../assets/certificates/5.jpg';
import Noskathon from '../assets/certificates/6.jpg';
import PythonBootcamp from '../assets/certificates/7.jpg';
import AWSWorkshop from '../assets/certificates/8.jpg';
import HackForNepal from '../assets/certificates/9.jpg';
import IEEE from '../assets/certificates/10.jpg';

interface Certificate {
  title: string;
  description: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    title: 'Hp Tech Web Development Bootcamp',
    description: 'Participated in a 3-day web development bootcamp organized by Hp Tech (June 7–9, 2024).',
    image: Hptech,
  },
  {
    title: 'IS Hackathon 2024',
    description: 'Recognized for participation in a 36-hour hackathon on “Effective and Efficient Business Economy” organized by KUSOM Information System Club.',
    image: ISHackathon,
  },
  {
    title: 'Noskode 5.0 / Software Freedom Day 2024',
    description: 'Participated in Noskode 5.0 event organized by Nepal Open Source Club on September 21, 2024.',
    image: Noskode,
  },
  {
    title: 'Orbit Engineering Hacks 2.0',
    description: 'Participated in a 48-hour hackathon organized by Engineers Vlogs on November 28–30, 2024.',
    image: Orbit,
  },
  {
    title: 'LOCUS 2025 Hardware Fellowship',
    description: 'Participated in an 8-day hardware fellowship during the 21st National Technological Festival at IOE, Pulchowk Campus.',
    image: LOCUS,
  },
  {
    title: 'Noskathon Lite 2025',
    description: 'Participated in the open-source event “Noskathon Lite” organized by Nepal Open Source Klub (January 12–13, 2025).',
    image: Noskathon,
  },
  {
    title: 'Python BootCamp 3.0',
    description: 'Participated in a Python BootCamp 3.0 webinar organized by Rotaract Club of Chandragiri in collaboration with multiple Rotaract and academic organizations (February 18–22, 2025).',
    image: PythonBootcamp,
  },
  {
    title: 'AWS Fundamentals Workshop',
    description: 'Successfully participated in an AWS cloud fundamentals workshop organized by Nepal Tek Community in collaboration with AWS Cloud Club Nepal and NCIT (June 21, 2025).',
    image: AWSWorkshop,
  },
  {
    title: 'Hack for Nepal 2082',
    description: 'Actively participated in a 48-hour residential hackathon organized by Nepal Student IT Club, demonstrating innovation, collaboration, and dedication to impactful solutions (Jestha 30–Ashar 1, 2082 BS / 2025 AD).',
    image: HackForNepal,
  },
  {
    title: 'IEEE Membership',
    description: 'Recognized as a student member of IEEE Nepal Section, gaining access to technical competitions, professional networks, learning resources, and career development opportunities for one year.',
    image: IEEE,
  },
];

const Certificates: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 px-4 py-2 rounded-lg mb-12 mt-6 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </button>

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          My Certificates
        </h2>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-contain rounded-lg mb-4 select-none cursor-default"
                draggable={false}
              />
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                {cert.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
