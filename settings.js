module.exports = {
    // Usa el puerto que Render asigna (10000)
    uiPort: process.env.PORT || 1880,
    
    // Editor en la ruta raíz (esencial para que cargue)
    httpAdminRoot: '/', 

    // Endpoint para tus datos del ESP32
    httpNodeRoot: '/api',

    // Permite CORS para que el navegador y el ESP32 puedan acceder
    httpNodeCors: {
        origin: "*",
        methods: "GET,PUT,POST,DELETE"
    },

    // Deshabilita la autenticación para acceso inmediato (luego puedes añadir seguridad)
    adminAuth: null,

    // Directorio de almacenamiento
    userDir: '/home/.node-red',
    
    // Otras configuraciones
    disableNodeRedInUseCheck: true,
    credentialSecret: process.env.CREDENTIAL_SECRET
};
