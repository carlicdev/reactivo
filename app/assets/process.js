const processDetails = [
    {
        id: 1, 
        title: 'Reunión Inicial', 
        icon: 'joining',
        iconColor: 'text-orange-500',
        subtitle: 'Definimos funcionalidades, objetivos, plazos y presupuesto.',
        content: ['El cliente se reune con el equipo de desarrollo para discutir la idea del proyecto.','Se definen los requisitos del proyecto, incluyendo funcionalidades, objetivos, plazos y presupuesto.', 'Se realiza un análisis inicial de viabilidad.']
    },
    {
        id: 2, 
        title: 'Planificación', 
        icon: 'planning',
        iconColor: 'text-yellow-500',
        subtitle: 'Se define la arquitectura del sistema. El plan incluye tareas, cronogramas y recursos necesarios.',
        content: ['Se elabora un plan de proyecto que incluye tareas, cronogramas y recursos necesarios.','Se define la arquitectura general del sistema y la tecnología a utilizar.']
    },
    {
        id: 3, 
        title: 'Diseño', 
        icon: 'design',
        iconColor: 'text-red-500',
        subtitle: 'Se crea un diseño detallado del sistema, incluyendo interfaces de usuario, diagramas de flujo y estructuras de datos.',
        content: ['Se crea un diseño detallado del sistema, incluyendo interfaces de usuario, diagramas de flujo y estructuras de datos.','Se establecen las bases para el desarrollo, como la elección de frameworks y herramientas.']
    },
    {
        id: 4, 
        title: 'Desarrollo',
        icon: 'developing',
        iconColor: 'text-green-500', 
        subtitle: 'Los desarrolladores trabajan en la implementación del sistema siguiendo las especificaciones del diseño.',
        content: ['Los desarrolladores trabajan en la implementación del sistema siguiendo las especificaciones del diseño.','Se realizan pruebas unitarias para asegurar la calidad del código.']
    },
    {
        id: 5, 
        title: 'Pruebas',
        icon: 'testing',
        iconColor: 'text-blue-700', 
        subtitle: 'Se llevan a cabo pruebas de integración, de rendimiento y de seguridad para identificar y solucionar posibles problemas.',
        content: ['Se llevan a cabo pruebas de integración para verificar que los diferentes componentes del sistema funcionen correctamente juntos.','Se realizan pruebas de rendimiento y seguridad para identificar y solucionar posibles problemas.']
    },
    {
        id: 6, 
        title: 'Aprobación del Cliente', 
        icon: 'aproved',
        iconColor: 'text-pink-500',
        subtitle: 'El cliente revisa el producto y proporciona retroalimentación. Se realizan ajustes y mejoras según las sugerencias del cliente.',
        content: ['El cliente revisa el producto en desarrollo y proporciona retroalimentación.', 'Se realizan ajustes y mejoras según las sugerencias del cliente.']
    },
    {
        id: 7, 
        title: 'Entrega',
        icon: 'shiping',
        iconColor: 'text-emerald-500', 
        subtitle: 'Se realiza la entrega formal del producto. El producto se implementa en un entorno de producción.',
        content: ['Una vez que el cliente está satisfecho, se realiza la entrega formal del producto.','El producto se implementa en un entorno de producción si es una aplicación en vivo.']
    },
]

export default processDetails;