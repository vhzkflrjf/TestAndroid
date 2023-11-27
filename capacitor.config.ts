import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'TestAndroid',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LiveUpdates: {
      appId: '280A9CED',
      channel: 'TestAndroid',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
