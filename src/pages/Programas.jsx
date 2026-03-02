import { useState } from 'react';
import {
  FaFutbol,
  FaBasketballBall,
  FaRunning,
  FaSwimmer,
  FaVolleyballBall,
  FaTableTennis,
  FaBook,
  FaFlask,
  FaCalculator,
  FaGlobe,
  FaCheckCircle,
  FaGraduationCap
} from 'react-icons/fa';

const Programas = () => {
  const [activeTab, setActiveTab] = useState('deportivos');

  const sportsPrograms = [
    {
      icon: <FaFutbol className="text-5xl text-primary-600" />,
      name: 'Fútbol',
      description: 'Programa de desarrollo técnico-táctico con metodología europea.',
      features: [
        'Entrenamiento 5 días a la semana',
        'Competencias en ligas estatales y nacionales',
        'Análisis de video y estadísticas',
        'Preparación física especializada'
      ]
    },
    {
      icon: <FaBasketballBall className="text-5xl text-primary-600" />,
      name: 'Básquetbol',
      description: 'Formación integral en fundamentos y estrategia de juego.',
      features: [
        'Entrenamiento técnico individualizado',
        'Participación en torneos regionales',
        'Desarrollo de habilidades de liderazgo',
        'Preparación física y mental'
      ]
    },
    {
      icon: <FaRunning className="text-5xl text-primary-600" />,
      name: 'Atletismo',
      description: 'Desarrollo de velocidad, resistencia y técnica en pista y campo.',
      features: [
        'Entrenamiento personalizado por disciplina',
        'Competencias estatales y nacionales',
        'Análisis biomecánico',
        'Nutrición deportiva especializada'
      ]
    },
    {
      icon: <FaSwimmer className="text-5xl text-primary-600" />,
      name: 'Natación',
      description: 'Programa de alto rendimiento en alberca olímpica.',
      features: [
        'Entrenamiento matutino y vespertino',
        'Técnica de los 4 estilos',
        'Preparación para competencias nacionales',
        'Monitoreo de tiempos y progreso'
      ]
    },
    {
      icon: <FaVolleyballBall className="text-5xl text-primary-600" />,
      name: 'Voleibol',
      description: 'Formación en técnica, táctica y trabajo en equipo.',
      features: [
        'Entrenamiento de fundamentos',
        'Participación en ligas escolares',
        'Desarrollo de juego en equipo',
        'Preparación física específica'
      ]
    },
    {
      icon: <FaTableTennis className="text-5xl text-primary-600" />,
      name: 'Tenis de mesa',
      description: 'Desarrollo de reflejos, coordinación y estrategia.',
      features: [
        'Entrenamiento técnico avanzado',
        'Competencias regionales',
        'Desarrollo de concentración',
        'Análisis táctico de juego'
      ]
    }
  ];

  const academicPrograms = [
    {
      icon: <FaBook className="text-5xl text-secondary-600" />,
      name: 'Educación secundaria',
      description: 'Programa académico completo con enfoque en atletas estudiantes.',
      features: [
        'Horarios flexibles adaptados al entrenamiento',
        'Tutorías personalizadas',
        'Programa SEP acreditado',
        'Apoyo en tareas y proyectos'
      ]
    },
    {
      icon: <FaGraduationCap className="text-5xl text-secondary-600" />,
      name: 'Educación preparatoria',
      description: 'Bachillerato general con preparación universitaria.',
      features: [
        'Orientación vocacional',
        'Preparación para exámenes de admisión',
        'Convenios con universidades',
        'Becas deportivas universitarias'
      ]
    },
    {
      icon: <FaFlask className="text-5xl text-secondary-600" />,
      name: 'Ciencias',
      description: 'Programa robusto en ciencias naturales y experimentales.',
      features: [
        'Laboratorios equipados',
        'Proyectos de investigación',
        'Participación en olimpiadas científicas',
        'Metodología práctica'
      ]
    },
    {
      icon: <FaCalculator className="text-5xl text-secondary-600" />,
      name: 'Matemáticas',
      description: 'Desarrollo del pensamiento lógico-matemático.',
      features: [
        'Clases dinámicas e interactivas',
        'Resolución de problemas aplicados',
        'Preparación para competencias',
        'Apoyo individualizado'
      ]
    },
    {
      icon: <FaGlobe className="text-5xl text-secondary-600" />,
      name: 'Idiomas',
      description: 'Programa de inglés intensivo y otros idiomas.',
      features: [
        'Inglés como segunda lengua',
        'Certificaciones internacionales',
        'Conversación con nativos',
        'Preparación TOEFL'
      ]
    }
  ];

  const supportPrograms = [
    {
      title: 'Nutrición deportiva',
      description: 'Planes alimenticios personalizados para optimizar el rendimiento.',
      icon: '🥗'
    },
    {
      title: 'Psicología deportiva',
      description: 'Apoyo mental y emocional para atletas de alto rendimiento.',
      icon: '🧠'
    },
    {
      title: 'Fisioterapia',
      description: 'Prevención y tratamiento de lesiones deportivas.',
      icon: '💪'
    },
    {
      title: 'Medicina deportiva',
      description: 'Evaluaciones médicas y seguimiento de salud integral.',
      icon: '⚕️'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Nuestros programas
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Excelencia deportiva y académica en un solo lugar
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('deportivos')}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'deportivos'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Programas deportivos
            </button>
            <button
              onClick={() => setActiveTab('academicos')}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'academicos'
                  ? 'bg-secondary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Programas académicos
            </button>
            <button
              onClick={() => setActiveTab('apoyo')}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'apoyo'
                  ? 'bg-accent-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Programas de apoyo
            </button>
          </div>

          {/* Tab Content - Deportivos */}
          {activeTab === 'deportivos' && (
            <div className="animate-fadeIn">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                  Programas deportivos
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Entrenamiento de alto rendimiento en diversas disciplinas deportivas
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sportsPrograms.map((program, index) => (
                  <div key={index} className="card p-8 hover:scale-105 transition-transform">
                    <div className="mb-4">{program.icon}</div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                      {program.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content - Académicos */}
          {activeTab === 'academicos' && (
            <div className="animate-fadeIn">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                  Programas académicos
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Educación de calidad adaptada a las necesidades de nuestros atletas
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {academicPrograms.map((program, index) => (
                  <div key={index} className="card p-8 hover:scale-105 transition-transform">
                    <div className="mb-4">{program.icon}</div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                      {program.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <FaCheckCircle className="text-secondary-600 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content - Apoyo */}
          {activeTab === 'apoyo' && (
            <div className="animate-fadeIn">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                  Programas de apoyo
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Servicios complementarios para el desarrollo integral de nuestros atletas
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {supportPrograms.map((program, index) => (
                  <div key={index} className="card p-10 text-center hover:scale-105 transition-transform">
                    <div className="text-6xl mb-4">{program.icon}</div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{program.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            ¿Interesado en nuestros programas?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos para más información sobre inscripciones y requisitos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admisiones" className="bg-accent-500 hover:bg-accent-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Ver proceso de admisión
            </a>
            <a href="/contacto" className="bg-white hover:bg-gray-100 text-primary-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Contactar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programas;

