import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'photo-gallery',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LiveUpdates: {
      appId: '66f26a10',
      channel: 'Photo Gallery',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
