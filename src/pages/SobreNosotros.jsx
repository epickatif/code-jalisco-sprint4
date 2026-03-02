import { FaEye, FaBullseye, FaHeart, FaTrophy, FaUsers, FaGraduationCap } from 'react-icons/fa';

const SobreNosotros = () => {
  const values = [
    {
      icon: <FaTrophy className="text-4xl text-primary-600" />,
      title: 'Excelencia',
      description: 'Buscamos la mejora continua en cada aspecto de nuestro trabajo, tanto en el ámbito deportivo como académico.'
    },
    {
      icon: <FaHeart className="text-4xl text-primary-600" />,
      title: 'Pasión',
      description: 'Amamos lo que hacemos y transmitimos ese entusiasmo a nuestros atletas para que alcancen sus sueños.'
    },
    {
      icon: <FaUsers className="text-4xl text-primary-600" />,
      title: 'Trabajo en equipo',
      description: 'Fomentamos la colaboración y el apoyo mutuo entre atletas, entrenadores y personal académico.'
    },
    {
      icon: <FaGraduationCap className="text-4xl text-primary-600" />,
      title: 'Integridad',
      description: 'Actuamos con honestidad, respeto y responsabilidad en todas nuestras acciones y decisiones.'
    }
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Fundación del CODE Jalisco',
      description: 'Inicio de operaciones con 50 atletas en 3 disciplinas deportivas.'
    },
    {
      year: '2013',
      title: 'Expansión de instalaciones',
      description: 'Inauguración de nuevas instalaciones deportivas de clase mundial.'
    },
    {
      year: '2016',
      title: 'Reconocimiento nacional',
      description: 'Obtención de acreditación SEP y primeras medallas en competencias nacionales.'
    },
    {
      year: '2019',
      title: 'Programa de becas',
      description: 'Lanzamiento del programa de becas deportivas para atletas destacados.'
    },
    {
      year: '2022',
      title: 'Transformación digital',
      description: 'Implementación de plataforma digital para seguimiento académico y deportivo.'
    },
    {
      year: '2025',
      title: 'Presente',
      description: 'Más de 500 atletas activos y 15 disciplinas deportivas disponibles.'
    }
  ];

  const team = [
    {
      name: 'Dr. Roberto Sánchez',
      role: 'Director general',
      emoji: '👨‍💼',
      description: 'PhD en Ciencias del Deporte, 20 años de experiencia en formación deportiva.'
    },
    {
      name: 'Lic. María Fernández',
      role: 'Directora académica',
      emoji: '👩‍🏫',
      description: 'Especialista en educación integral, enfoque en desarrollo de atletas estudiantes.'
    },
    {
      name: 'Mtro. Carlos López',
      role: 'Coordinador deportivo',
      emoji: '👨‍🏫',
      description: 'Ex atleta olímpico, certificado por la Federación Internacional de Atletismo.'
    },
    {
      name: 'Dra. Ana Martínez',
      role: 'Jefa de nutrición',
      emoji: '👩‍⚕️',
      description: 'Nutrióloga deportiva certificada, especialista en alto rendimiento.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Sobre CODE Jalisco
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Más de una década formando atletas de alto rendimiento con excelencia académica
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaBullseye className="text-3xl text-primary-600" />
                </div>
                <h2 className="text-3xl font-display font-bold text-gray-900">Misión</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Formar atletas de alto rendimiento que destaquen tanto en el ámbito deportivo como 
                académico, proporcionando una educación integral que desarrolle sus capacidades físicas, 
                intelectuales y valores humanos, preparándolos para ser líderes y ciudadanos ejemplares 
                en la sociedad.
              </p>
            </div>

            <div className="card p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center">
                  <FaEye className="text-3xl text-secondary-600" />
                </div>
                <h2 className="text-3xl font-display font-bold text-gray-900">Visión</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ser la institución líder en México en la formación de atletas estudiantes, reconocida 
                por su excelencia académica y deportiva, sus instalaciones de clase mundial y su 
                compromiso con el desarrollo integral de jóvenes talentos que representen con orgullo 
                a nuestro estado y país en competencias nacionales e internacionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nuestros valores</h2>
            <p className="section-subtitle">
              Los principios que guían nuestro trabajo diario y definen nuestra cultura institucional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nuestra historia</h2>
            <p className="section-subtitle">
              Un recorrido por los momentos más importantes de CODE Jalisco
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.year}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-1 flex-grow bg-primary-200 mt-4"></div>
                  )}
                </div>
                <div className="flex-grow pb-12">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nuestro equipo directivo</h2>
            <p className="section-subtitle">
              Profesionales comprometidos con la excelencia y el desarrollo de nuestros atletas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-8 text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              CODE Jalisco en Números
            </h2>
            <p className="text-xl text-gray-100">
              Resultados que hablan por sí mismos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-display font-bold mb-2">500+</div>
              <div className="text-lg">Atletas activos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-display font-bold mb-2">15+</div>
              <div className="text-lg">Disciplinas deportivas</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-display font-bold mb-2">95%</div>
              <div className="text-lg">Tasa de graduación</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-display font-bold mb-2">50+</div>
              <div className="text-lg">Medallas nacionales</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;

