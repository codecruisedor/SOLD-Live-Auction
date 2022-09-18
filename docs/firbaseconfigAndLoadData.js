 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import { getDownloadURL, getStorage , ref } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-storage.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js"



 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAY_tEvw1MCGqx0YiM25zy9BvRBku2U4hU",
   authDomain: "sold-10623.firebaseapp.com",
   projectId: "sold-10623",
   storageBucket: "sold-10623.appspot.com",
   messagingSenderId: "194831262313",
   appId: "1:194831262313:web:89c80ba78316f9833878f8",
   measurementId: "G-JDNWHMP0G0"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 const storage = getStorage();
 const db = getFirestore(app);
 const storageRef = ref(storage);
 const imagesRef = ref(storage , 'images');
 let arryOfCars = new Array(12);
 let arrayOfImageElements = new Array();
 let productsArray = new Array();
 loadImages();
 loadData();


async function loadData(){
  const querySnapshot = await getDocs(collection(db, "products"));
  
    querySnapshot.forEach((doc) => {
      productsArray.push(doc.data());
    });

    for(let i=0;i<productsArray.length;i++){
      document.getElementById(productsArray[i].Id+"_title").innerHTML = productsArray[i].Title
      document.getElementById(productsArray[i].Id+"_desc").innerHTML = productsArray[i].Desc
      document.getElementById(productsArray[i].Id+"_hbid").innerHTML = document.getElementById(productsArray[i].Id+"_hbid").innerHTML.concat(productsArray[i].Hbid) 
      document.getElementById(productsArray[i].Id+"_hbidder").innerHTML = document.getElementById(productsArray[i].Id+"_hbidder").innerHTML.concat(productsArray[i].Hbidder) 
      document.getElementById(productsArray[i].Id+"_modal_body").innerHTML = productsArray[i].Info
      document.getElementById(productsArray[i].Id+"_modal_title").innerHTML = productsArray[i].Title
    }
    
 
}
 

 function loadImages(){
      const carRef1 = ref(storageRef, 'images/campbell-3ZUsNJhi_Ik-unsplash.jpg');
      arryOfCars.push(carRef1);
    const carRef2 = ref(storage, 'images/aston martin 2.jpg');
      arryOfCars.push(carRef2);
    const carRef3 = ref(storage, 'images/aston martin.jpg');
      arryOfCars.push(carRef3);
    const carRef4 = ref(storage, 'images/vintage 2.jpg');
      arryOfCars.push(carRef4);
    const carRef5 = ref(storage, 'images/audi white.jpg');
      arryOfCars.push(carRef5);
    const carRef6 = ref(storage, 'images/cheap blue.jpg');
      arryOfCars.push(carRef6);
    const carRef7 = ref(storage, 'images/cheap blue2.jpg');
      arryOfCars.push(carRef7);
    const carRef8 = ref(storage, 'images/mercedes yellow.jpg');
      arryOfCars.push(carRef8);
    const carRef9 = ref(storage, 'images/orange van.jpg');
      arryOfCars.push(carRef9);
    const carRef10 = ref(storage, 'images/vintage1.jpg');
      arryOfCars.push(carRef10);
    const carRef11 = ref(storage, 'images/vintage4.jpg');
      arryOfCars.push(carRef11);
    const carRef12 = ref(storage, 'images/vintage3.jpg');
      arryOfCars.push(carRef12);
 
    for(let i=0;i<12;i++){
      arrayOfImageElements[i] = document.getElementById('pr'+(i+1)+'_Image');
     // arrayOfTitleElements[i] = document.getElementById('pr'+(i+1)+'_title');

    }

        getDownloadURL(carRef1).then((url) =>
        {
        arrayOfImageElements[0].setAttribute('src' , url)
        }).catch((error)=>
        {
        console.log("ERORR");
        });
        getDownloadURL(carRef2).then((url) =>
        {
        arrayOfImageElements[1].setAttribute('src' , url)
        }).catch((error)=>
        {
        console.log("ERORR");
        });
        getDownloadURL(carRef3).then((url) =>
        {
        arrayOfImageElements[2].setAttribute('src' , url)
        }).catch((error)=>
        {
        console.log("ERORR");
        });
        getDownloadURL(carRef4).then((url) =>
        {
        arrayOfImageElements[3].setAttribute('src' , url)
        }).catch((error)=>
        {
        console.log("ERORR");
        });
        getDownloadURL(carRef5).then((url) =>
        {
        arrayOfImageElements[4].setAttribute('src' , url)
        }).catch((error)=>
        {
        console.log("ERORR");
        });
        getDownloadURL(carRef6).then((url) =>
        {
        arrayOfImageElements[5].setAttribute('src' , url)
        }).catch((error)=>
        {
        console.log("ERORR");
        });
        getDownloadURL(carRef7).then((url) =>
        {
        arrayOfImageElements[6].setAttribute('src' , url)
        }).catch((error)=>
        {
        console.log("ERORR");
        });
        getDownloadURL(carRef8).then((url) =>
        {
        arrayOfImageElements[7].setAttribute('src' , url)
        }).catch((error)=>
        {
        console.log("ERORR");
        });
        getDownloadURL(carRef9).then((url) =>
        {
        arrayOfImageElements[8].setAttribute('src' , url)
        }).catch((error)=>
        {
        console.log("ERORR");
        });
        getDownloadURL(carRef10).then((url) =>
        {
        arrayOfImageElements[9].setAttribute('src' , url)
        }).catch((error)=>
        {
        console.log("ERORR");
        });
        getDownloadURL(carRef11).then((url) =>
        {
        arrayOfImageElements[10].setAttribute('src' , url)
        }).catch((error)=>
        {
        console.log("ERORR");
        });
        getDownloadURL(carRef12).then((url) =>
        {
        arrayOfImageElements[11].setAttribute('src' , url)
        }).catch((error)=>
        {
        console.log("ERORR");
        });
      
    

 }
 