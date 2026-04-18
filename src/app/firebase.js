import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdYakG8deY-oPlWZnEYOz-l_TtAVxaASo",
  authDomain: "ieeeaiubsb.firebaseapp.com",
  projectId: "ieeeaiubsb",
  storageBucket: "ieeeaiubsb.appspot.com",
  messagingSenderId: "394576998440",
  appId: "1:394576998440:web:ffc63e96cceb9ce7b7851d",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
