import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Categories from "./pages/Categories";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import ProjectCategory from "./pages/projectCategory";
import Project from "./pages/Project";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./FIREBASE_CONFIG";
import { useEffect, useState } from "react";
// import Dashboard from "./pages/Dashboard";

function App() {
  const [projects, setProjects] = useState([]);

  // const userToken = localStorage.getItem("token");
  // console.log(userToken);

  const getProjects = async () => {
    try {
      const docRef = query(collection(db, "posts"));
      const docSnap = await getDocs(docRef);
      // console.log(docSnap);

      if (!docSnap.empty) {
        let d = docSnap.docs.map(
          (dc) => dc._document.data.value.mapValue.fields
        );
        // console.log("Document data:", d);
        setProjects(d);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home getProjects={getProjects} projects={projects} />}
        />
        <Route
          path="/projects"
          element={<Projects getProjects={getProjects} projects={projects} />}
        />
        <Route
          path="/categories"
          element={<Categories getProjects={getProjects} projects={projects} />}
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/checkout/:projectName/"
          element={<Checkout getProjects={getProjects} projects={projects} />}
        />
        <Route
          path="/project-category/:catName/"
          element={
            <ProjectCategory getProjects={getProjects} projects={projects} />
          }
        />
        <Route
          path="/project/:projectName/"
          element={<Project getProjects={getProjects} projects={projects} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </>
  );
}

export default App;
