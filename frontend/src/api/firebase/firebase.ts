import {initializeApp} from "firebase/app";
import {getAuth, Auth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword} from "firebase/auth";
import {signInWithEmailAndPassword, sendPasswordResetEmail, User} from "firebase/auth";
import {axios} from "../axios/axios-config";

const firebaseConfig = {
  apiKey: "AIzaSyAXv1WSmcNFH9tjSp-UPZBwrY7XCe2zO-8",
  authDomain: "flowery-389008.firebaseapp.com",
  projectId: "flowery-389008",
  storageBucket: "flowery-389008.appspot.com",
  messagingSenderId: "705282793967",
  appId: "1:705282793967:web:16e5e437f4dfe042ef961a"
};

const app = initializeApp(firebaseConfig);

const auth: Auth = getAuth(app);

const getCurrentUser = () => {
  return new Promise<User | null>((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      resolve(user);
    }, reject);
  });
}

const provider = new GoogleAuthProvider();

export class AuthFirebase {
  async signInWithEmailPassword(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("uid", userCredential.user?.uid || "")
        return userCredential.user?.getIdToken()
      })
      .then((token) => localStorage.setItem("token", token))
      .then(() => console.info("Login success"))
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  verify = async (user: User): Promise<User> => {
    try {
      const isUsed = await axios.get(`/users/check-user/${user.uid}`);
      if (isUsed.data) {
        localStorage.setItem("uid", isUsed.data)
        return user;
      } else {
        axios.post("/users", {
          userGoogleId: user.uid,
          email: user.email,
          userName: user.displayName,
          userImageUrl: user.photoURL ?? "",
          gender: "UNKNOWN",
        }).then((response) => {
          localStorage.setItem("uid", response.data)
          console.info("User created")
          return user;
        })
        return user;
      }
    } catch (error) {
      throw new Error("verify user fail");
    }
  }

  async signInWithGoogle(): Promise<void> {
    await signInWithPopup(auth, provider)
      .then((userCredential) => {
        if (userCredential.user) {
          return this.verify(userCredential.user)
            .then((user) => user.getIdToken());
        } else {
          throw new Error("User not created");
        }
      })
      .then((token) => localStorage.setItem("token", token))
      .then(() => console.info("Login success"))
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  async signUp(email: string, password: string): Promise<void> {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          localStorage.setItem("uid", userCredential.user?.uid || "")
          return axios.post("/users", {
            userGoogleId: userCredential.user?.uid,
            email: userCredential.user?.email,
            userName: userCredential.user?.displayName,
            userImageUrl: userCredential.user?.photoURL ?? "",
            gender: "UNKNOWN",
          }).then(() => {
            console.info("User created")
            return userCredential.user?.getIdToken()
          })
        } else {
          throw new Error("User not created");
        }
      })
      .then((token) => localStorage.setItem("token", token))
      .then(() => console.info("Login success"))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  async currentAuthenticatedUser(): Promise<string> {
    return getCurrentUser()
      .then((user) => {
        if (!user) {
          throw new Error("User not authenticated");
        }
        user.getIdTokenResult(false)
          .then((idTokenResult) => {
            localStorage.setItem("token", idTokenResult.token)
          })
        return user.uid;
      })
  }

  async currentSession(): Promise<boolean> {
    return getCurrentUser()
      .then((user) => {
        if (user) {
          const isInSession = user.getIdTokenResult(false)
            .then((idTokenResult) => new Date(idTokenResult.expirationTime) > new Date())
          return !!isInSession;
        } else {
          throw new Error("User not authenticated");
        }
      })
  }

  async signOut(): Promise<void> {
    await auth.signOut().then(() => {
      localStorage.removeItem("token");
      console.info("Sign Out success");
    });
  }

  async resetPassword(email: string, homeUrl: string) {
    const actionCodeSettings = {
      url: homeUrl
    };
    return await sendPasswordResetEmail(auth, email, actionCodeSettings)
      .then(() => {
        console.info("Reset password email sent");
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}
