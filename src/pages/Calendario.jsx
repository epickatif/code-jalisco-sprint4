import { useState } from 'react';
import { FaCalendarAlt, FaTrophy, FaBook, FaUsers, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Calendario = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear] = useState(new Date().getFullYear());
  const [filterType, setFilterType] = useState('todos');

  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const events = [
    {
      id: 1,
      title: 'Torneo estatal de fútbol',
      type: 'deportivo',
      date: '2025-11-15',
      time: '09:00 AM',
      location: 'Estadio CODE Jalisco',
      description: 'Competencia estatal de fútbol categoría juvenil',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 2,
      title: 'Exámenes parciales',
      type: 'academico',
      date: '2025-11-20',
      time: '08:00 AM',
      location: 'Instalaciones CODE',
      description: 'Evaluaciones del segundo parcial',
      icon: <FaBook className="text-secondary-600" />
    },
    {
      id: 3,
      title: 'Campeonato de natación',
      type: 'deportivo',
      date: '2025-11-22',
      time: '10:00 AM',
      location: 'Alberca Olímpica',
      description: 'Competencia regional de natación',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 4,
      title: 'Reunión de padres',
      type: 'institucional',
      date: '2025-11-25',
      time: '06:00 PM',
      location: 'Auditorio Principal',
      description: 'Junta informativa con padres de familia',
      icon: <FaUsers className="text-accent-600" />
    },
    {
      id: 5,
      title: 'Torneo de básquetbol',
      type: 'deportivo',
      date: '2025-12-05',
      time: '03:00 PM',
      location: 'Gimnasio CODE',
      description: 'Torneo interno de básquetbol',
      icon: <FaTrophy className="text-primary-600" />
    },
    {
      id: 6,
      title: 'Presentación de proyectos',
      type: 'academico',
      date: '2025-12-10',
      time: '09:00 AM',
      location: 'Aulas CODE',
      description: 'Exposición de proyectos finales',
      icon: <FaBook className="text-secondary-600" />
    },
    {
      id: 7,
      title: 'Ceremonia de graduación',
      type: 'institucional',
      date: '2025-12-15',
      time: '05:00 PM',
      location: 'Auditorio Principal',
      description: 'Graduación de generación 2025',
      icon: <FaUsers className="text-accent-600" />
    },
    {
      id: 8,
      title: 'Competencia de atletismo',
      type: 'deportivo',
      date: '2025-12-18',
      time: '08:00 AM',
      location: 'Pista de Atletismo',
      description: 'Campeonato estatal de atletismo',
      icon: <FaTrophy className="text-primary-600" />
    }
  ];

  const filteredEvents = events.filter(event => {
    if (filterType === 'todos') return true;
    return event.type === filterType;
  });

  const getEventsByMonth = (month) => {
    return filteredEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() === month;
    });
  };

  const upcomingEvents = filteredEvents
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5);

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'deportivo':
        return 'bg-primary-100 text-primary-700 border-primary-300';
      case 'academico':
        return 'bg-secondary-100 text-secondary-700 border-secondary-300';
      case 'institucional':
        return 'bg-accent-100 text-accent-700 border-accent-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getEventTypeBadge = (type) => {
    switch (type) {
      case 'deportivo':
        return 'Deportivo';
      case 'academico':
        return 'Académico';
      case 'institucional':
        return 'Institucional';
      default:
        return type;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <FaCalendarAlt className="text-6xl mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Calendario de eventos
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Mantente al día con todas las actividades académicas y deportivas
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilterType('todos')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filterType === 'todos'
                  ? 'bg-gray-800 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Todos los eventos
            </button>
            <button
              onClick={() => setFilterType('deportivo')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filterType === 'deportivo'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Eventos deportivos
            </button>
            <button
              onClick={() => setFilterType('academico')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filterType === 'academico'
                  ? 'bg-secondary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Eventos académicos
            </button>
            <button
              onClick={() => setFilterType('institucional')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filterType === 'institucional'
                  ? 'bg-accent-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Eventos institucionales
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar Navigation */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Próximos eventos
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className={`p-4 rounded-lg border-2 ${getEventTypeColor(event.type)} hover:shadow-md transition-shadow cursor-pointer`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{event.icon}</div>
                        <div className="flex-grow">
                          <h4 className="font-semibold mb-1">{event.title}</h4>
                          <p className="text-sm opacity-75">
                            {new Date(event.date).toLocaleDateString('es-MX', {
                              day: 'numeric',
                              month: 'long'
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Events List */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Todos los eventos
                </h2>
                
                {/* Month Selector */}
                <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
                  {months.map((month, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedMonth(index)}
                      className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                        selectedMonth === index
                          ? 'bg-primary-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {month}
                    </button>
                  ))}
                </div>
              </div>

              {/* Events Grid */}
              <div className="space-y-6">
                {getEventsByMonth(selectedMonth).length > 0 ? (
                  getEventsByMonth(selectedMonth).map((event) => (
                    <div key={event.id} className="card p-6 hover:shadow-xl transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-primary rounded-lg flex flex-col items-center justify-center text-white">
                            <span className="text-2xl font-bold">
                              {new Date(event.date).getDate()}
                            </span>
                            <span className="text-xs uppercase">
                              {months[new Date(event.date).getMonth()].slice(0, 3)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="text-xl font-display font-bold text-gray-900">
                              {event.title}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getEventTypeColor(event.type)}`}>
                              {getEventTypeBadge(event.type)}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{event.description}</p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <FaClock className="text-primary-600" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaMapMarkerAlt className="text-primary-600" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <FaCalendarAlt className="text-6xl text-gray-300 mx-auto mb-4" />
                    <p className="text-xl text-gray-500">
                      No hay eventos programados para {months[selectedMonth]}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calendario;

