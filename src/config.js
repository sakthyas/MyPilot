/**
 * Configuration module for MyPilot
 */

// Default application settings
const defaultSettings = {
    port: 3000,
    environment: 'development',
    logLevel: 'info',
    database: {
        host: 'localhost',
        port: 27017,
        name: 'mypilot'
    },
    security: {
        enableEncryption: true,
        tokenExpiryHours: 24
    }
};

// Environment-specific configurations
const environments = {
    development: {
        debug: true,
        mockServices: true
    },
    testing: {
        debug: true,
        mockServices: false
    },
    production: {
        debug: false,
        mockServices: false
    }
};

/**
 * Load configuration based on environment
 * @param {string} env - Environment name
 * @returns {Object} Combined configuration
 */
function loadConfig(env = process.env.NODE_ENV || 'development') {
    return {
        ...defaultSettings,
        ...(environments[env] || environments.development)
    };
}

module.exports = {
    defaultSettings,
    loadConfig,
    environments
};