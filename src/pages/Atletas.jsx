import { useState } from 'react';
import { FaTrophy, FaMedal, FaStar, FaQuoteLeft } from 'react-icons/fa';

const Atletas = () => {
  const [selectedSport, setSelectedSport] = useState('todos');

  const athletes = [
    {
      name: 'María González Ramírez',
      sport: 'natacion',
      emoji: '🏊‍♀️',
      achievements: [
        'Medalla de Oro - Campeonato Nacional 2024',
        'Récord Estatal 100m Libre',
        'Beca Deportiva Universidad de Guadalajara'
      ],
      quote: 'CODE Jalisco me dio las herramientas para ser una mejor atleta y estudiante. Aquí aprendí que la disciplina en el deporte se refleja en todos los aspectos de la vida.',
      stats: {
        medals: 12,
        years: 4,
        gpa: 9.5
      }
    },
    {
      name: 'Carlos Ramírez López',
      sport: 'futbol',
      emoji: '⚽',
      achievements: [
        'Capitán Selección Jalisco Sub-17',
        'Goleador del Torneo Estatal 2024',
        'Convocado a Selección Nacional'
      ],
      quote: 'El apoyo de mis entrenadores y maestros ha sido fundamental. Aquí no solo me formé como futbolista, sino como persona.',
      stats: {
        medals: 8,
        years: 5,
        gpa: 9.2
      }
    },
    {
      name: 'Ana Martínez Silva',
      sport: 'atletismo',
      emoji: '🏃‍♀️',
      achievements: [
        'Campeona Nacional 400m Planos',
        'Participación en Juegos Panamericanos Juveniles',
        'Récord Nacional Juvenil'
      ],
      quote: 'La combinación de entrenamiento de alto nivel y educación de calidad me preparó para competir internacionalmente sin descuidar mis estudios.',
      stats: {
        medals: 15,
        years: 3,
        gpa: 9.8
      }
    },
    {
      name: 'Diego Hernández Cruz',
      sport: 'basquetbol',
      emoji: '🏀',
      achievements: [
        'MVP Torneo Regional 2024',
        'Selección Estatal 3 años consecutivos',
        'Beca Deportiva ITESM'
      ],
      quote: 'CODE Jalisco es más que una escuela, es una familia. Aquí encontré el equilibrio perfecto entre mi pasión por el básquetbol y mi futuro académico.',
      stats: {
        medals: 10,
        years: 4,
        gpa: 9.3
      }
    },
    {
      name: 'Sofía Torres Mendoza',
      sport: 'voleibol',
      emoji: '🏐',
      achievements: [
        'Capitana Selección Jalisco',
        'Mejor Jugadora Torneo Nacional 2024',
        'Convocada a Selección Nacional Sub-19'
      ],
      quote: 'Gracias al programa integral del CODE, pude desarrollar mis habilidades deportivas mientras mantenía excelentes calificaciones.',
      stats: {
        medals: 9,
        years: 3,
        gpa: 9.6
      }
    },
    {
      name: 'Roberto Sánchez Flores',
      sport: 'natacion',
      emoji: '🏊‍♂️',
      achievements: [
        'Medalla de Plata - Campeonato Nacional',
        'Récord Estatal 200m Mariposa',
        'Clasificado a Juegos Nacionales CONADE'
      ],
      quote: 'El apoyo nutricional y psicológico que recibí en CODE fue clave para alcanzar mis metas deportivas y académicas.',
      stats: {
        medals: 11,
        years: 4,
        gpa: 9.4
      }
    }
  ];

  const sports = [
    { id: 'todos', name: 'Todos los deportes' },
    { id: 'futbol', name: 'Fútbol' },
    { id: 'basquetbol', name: 'Básquetbol' },
    { id: 'natacion', name: 'Natación' },
    { id: 'atletismo', name: 'Atletismo' },
    { id: 'voleibol', name: 'Voleibol' }
  ];

  const filteredAthletes = selectedSport === 'todos' 
    ? athletes 
    : athletes.filter(athlete => athlete.sport === selectedSport);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <FaTrophy className="text-6xl mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Atletas destacados
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Conoce a los campeones que han pasado por CODE Jalisco
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-600 mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">Atletas formados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-600 mb-2">
                150+
              </div>
              <div className="text-gray-600 font-medium">Medallas ganadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-600 mb-2">
                85%
              </div>
              <div className="text-gray-600 font-medium">Becas universitarias</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-600 mb-2">
                20+
              </div>
              <div className="text-gray-600 font-medium">Seleccionados nacionales</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {sports.map((sport) => (
              <button
                key={sport.id}
                onClick={() => setSelectedSport(sport.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedSport === sport.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {sport.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Athletes Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAthletes.map((athlete, index) => (
              <div key={index} className="card overflow-hidden hover:scale-105 transition-transform duration-300">
                {/* Header */}
                <div className="bg-gradient-primary p-6 text-white text-center">
                  <div className="text-6xl mb-3">{athlete.emoji}</div>
                  <h3 className="text-2xl font-display font-bold mb-2">
                    {athlete.name}
                  </h3>
                  <div className="inline-block bg-white bg-opacity-20 px-4 py-1 rounded-full text-sm font-medium">
                    {sports.find(s => s.id === athlete.sport)?.name || athlete.sport}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 border-b border-gray-200">
                  <div className="text-center">
                    <FaMedal className="text-2xl text-accent-500 mx-auto mb-1" />
                    <div className="text-2xl font-bold text-gray-900">{athlete.stats.medals}</div>
                    <div className="text-xs text-gray-600">Medallas</div>
                  </div>
                  <div className="text-center">
                    <FaTrophy className="text-2xl text-primary-500 mx-auto mb-1" />
                    <div className="text-2xl font-bold text-gray-900">{athlete.stats.years}</div>
                    <div className="text-xs text-gray-600">Años</div>
                  </div>
                  <div className="text-center">
                    <FaStar className="text-2xl text-secondary-500 mx-auto mb-1" />
                    <div className="text-2xl font-bold text-gray-900">{athlete.stats.gpa}</div>
                    <div className="text-xs text-gray-600">Promedio</div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="p-6">
                  <h4 className="font-display font-semibold text-gray-900 mb-3">
                    Logros destacados
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {athlete.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-primary-600 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Quote */}
                  <div className="bg-gray-50 p-4 rounded-lg relative">
                    <FaQuoteLeft className="text-primary-200 text-2xl absolute top-2 left-2" />
                    <p className="text-sm text-gray-700 italic pl-6">
                      {athlete.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAthletes.length === 0 && (
            <div className="text-center py-12">
              <FaTrophy className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-500">
                No se encontraron atletas en esta categoría
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            ¿Quieres ser el próximo campeón?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a CODE Jalisco y comienza tu camino hacia el éxito deportivo y académico
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admisiones" className="bg-accent-500 hover:bg-accent-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Proceso de admisión
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

export default Atletas;

