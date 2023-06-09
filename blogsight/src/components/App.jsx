import React from "react";
import Home from "./Home";
import BlogHome from "./BlogHome";
import Blogs from "./Blogs";
import NewBlogPost from "./NewBlogPost";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import PatientMonitoring from "./PatientMonitoring";

function App(){
    return (
    <div>
    <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/blog-home" element={<BlogHome />} /> */}
        <Route path="/" element={<BlogHome />} />
        {/* <Route path="/Login" element={<Login />}></Route> */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/newblogpost" element={<NewBlogPost />} />
        {/* <Route path="/patient-monitoring" element={<PatientMonitoring />} /> */}
    </Routes>
    <Footer />
    </div>
);}

export default App;