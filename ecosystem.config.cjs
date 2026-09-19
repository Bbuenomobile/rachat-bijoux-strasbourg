module.exports = {
  apps: [
    {
      name: 'site-strasbourg-rachat-bijoux',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3820',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '350M',
      env: {
        NODE_ENV: 'production',
        PORT: 3820,
      },
    },
  ],
};
