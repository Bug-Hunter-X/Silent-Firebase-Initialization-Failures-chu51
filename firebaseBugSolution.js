//Improved Firebase initialization with error handling
firebase.initializeApp(firebaseConfig).catch(error => {
  // Handle initialization errors
  console.error("Firebase initialization error:", error);
  // Display an error message to the user or take other appropriate action
});

// Check for successful initialization before using Firebase services
firebase.auth().onAuthStateChanged(user => {
  if (firebase.apps.length > 0) { //Check if firebase is initialized
    // Proceed with Firebase operations only if initialization was successful
    // ...
  } else {
    console.error("Firebase not initialized!");
  }
});