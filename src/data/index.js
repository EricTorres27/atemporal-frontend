
export const data = {
  homePage: {
    home: {
      title: '',
      categories: [
        {
          id: 1,
          name: 'Danza',
          selected: true
        },
        {
          id: 2,
          name: 'Cultura',
          selected: false
        },
        {
          id: 3,
          name: 'Música',
          selected: false
        }
      ],
      backgrounds: [
        {
          id: 1,
          title: 'Música',
          path: 'assets/img/home/bg1.jpg'
        },
        {
          id: 2,
          title: 'Danza',
          path: 'assets/img/home/bg2.jpg'
        },
        {
          id: 3,
          title: 'Arte',
          path: 'assets/img/home/bg3.jpg'
        }
      ]
    },
    howItWorks: {
      title: '¿Cómo funciona?',
      description: '',
      sections: [
        {
          id: 1,
          title: 'Busca tu evento',
          description: 'Tenemos eventos para todo el público en general, ingresa el nombre, selecciona la categoría o simplemente lista todos los eventos.',
          picture: ''
        },
        {
          id: 2,
          title: 'Reserva tu entrada',
          description: 'Aparta el lugar y registra tu entrada.',
          picture: ''
        },
        {
          id: 3,
          title: 'Asiste al evento',
          description: 'Disfruta del evento en la fecha y hora acordada.',
          picture: ''
        },
        {
          id: 4,
          title: 'Comparte tu experiencia',
          description: 'Nuesta misión es brindarte la mejor experiencia.',
          picture: ''
        }
      ]
    }
  },
  menuEvent: {
    title: 'Crear evento',
    subtitle: 'Publica tu evento gratis',
    steps: [
      {
        id: 1,
        title: 'Datos del organizador',
        pathname: '/crear-evento',
        link: '',
        icon: 'bx bxs-user-circle'
      },
      {
        id: 2,
        title: 'Datos del evento',
        pathname: '/crear-evento/informacion-evento',
        link: 'informacion-evento',
        icon: 'bx bx-calendar-event'
      },
      {
        id: 3,
        title: 'Boletos del evento',
        pathname: '/crear-evento/informacion-boletos',
        link: 'informacion-boletos',
        icon: 'bx bxs-credit-card'
      },
      {
        id: 4,
        title: 'Resumen',
        pathname: '/crear-evento/resumen',
        link: 'resumen',
        icon: 'bx bx-check'
      }
    ]
  },
  menuAccount: {
    general: {
      title: 'Información de cuenta',
      subtitle: 'Detalles',
      options: [
        {
          id: 1,
          title: 'Datos de cuenta',
          pathname: '/mi-cuenta',
          link: '',
          icon: 'bx bxs-user-detail'
        },
        {
          id: 2,
          title: 'Seguridad',
          pathname: 'cambiar-password',
          link: 'cambiar-password',
          icon: 'bx bx-key'
        },
        {
          id: 3,
          title: 'Mis eventos',
          pathname: 'eventos',
          link: 'eventos',
          icon: 'bx bx-party'
        },
        {
          id: 4,
          title: 'Métodos de pago',
          pathname: 'metodos-pago',
          link: 'eventos',
          icon: 'bx bx-credit-card-alt'
        }
      ]
    },
    admin: {
      title: 'Información de cuenta',
      subtitle: 'Detalles',
      options: [
        {
          id: 1,
          title: 'Datos de cuenta',
          pathname: '',
          link: '',
          icon: 'bx bxs-user-detail'
        },
        {
          id: 2,
          title: 'Seguridad',
          pathname: 'cambiar-password',
          link: 'cambiar-password',
          icon: 'bx bx-key'
        },
        {
          id: 3,
          title: 'Mis eventos',
          pathname: 'eventos',
          link: 'eventos',
          icon: 'bx bx-party'
        }
      ]
    }
  },
  menuDashboard: {
    title: 'Administrador',
    subtitle: 'Detalles',
    options: [
      {
        id: 1,
        title: 'Home',
        pathname: '/dashboard',
        link: '',
        icon: 'bx bxs-home'
      },
      {
        id: 2,
        title: 'Aprobar eventos',
        pathname: 'aprobar',
        link: '',
        icon: 'bx bxs-check-circle'
      },
      {
        id: 3,
        title: 'Eventos aprobados',
        pathname: 'eventos',
        link: 'eventos',
        icon: 'bx bx-list-check'
      },
      {
        id: 4,
        title: 'Categorias',
        pathname: 'categorias',
        link: 'categorias',
        icon: 'bx bx-category'
      },
      {
        id: 5,
        title: 'Usuarios',
        pathname: 'usuarios',
        link: 'usuarios',
        icon: 'bx bx-user-plus'
      }
    ]
  }
}
