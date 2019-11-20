import AsyncStorage from '@react-native-community/async-storage';

export const addFave = async faveID => {
  try {
    return await AsyncStorage.setItem(
      `${faveID}`,
      JSON.stringify({
        id: faveID,
        faved_on: new Date(),
      }),
    );
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const removeFave = async faveID => {
  try {
    return await AsyncStorage.removeItem(`${faveID}`);
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getAllFaves = async () => {
  const keys = await AsyncStorage.getAllKeys();
  try {
    const values = await AsyncStorage.multiGet(keys);
    return values.filter(value => value[1].includes('faved_on'));
  } catch (e) {
    console.log(e);
    return false;
  }
};
