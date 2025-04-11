import {useEffect, useState} from 'react';

import DeviceInfo from 'react-native-device-info';
import {getVersionUrl} from '../API/API';

export const useUpdate = () => {
  const [isAppUpdateAvailable, setIsAppUpdateAvailable] = useState(false);

  useEffect(() => {
    const checkForUpdate = async () => {
      try {
        const currentVersion = DeviceInfo.getVersion();
        console.log('📱 Current Version:', currentVersion);

        const url = getVersionUrl();
        const response = await fetch(url);
        const data = await response.json();
        const {latestVersion} = data;
        console.log('🌐 Latest Version from server:', latestVersion);

        if (latestVersion !== currentVersion) {
          setIsAppUpdateAvailable(true);
        } else {
          setIsAppUpdateAvailable(false);
        }
      } catch (error) {
        console.log('❌ Version check failed:', error);
      }
    };

    checkForUpdate();
  }, []);

  return {
    isAppUpdateAvailable,
  };
};
