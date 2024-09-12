import React from "react";
import Navbar from "./Navbar";
import BlogDetail from "../Pages/BlogDetail";
import Footer from "../Components/Footer"
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <div className=" container blogsHeading">
      <h3 >Blogs</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <BlogDetail
            imgaeHeading="SMS Marketing Service India: Reach Millions Boost Sales"
              head="SMS Marketing Service India: Reach Millions Boost Sales"
              detail="SMS Marketing Service India..."
            />
          </div>

          <div className="col-md-3">
            <BlogDetail
            imgaeHeading="TextGuru - The Next-Gen SMS Platform: Transform Communication"
            head="TextGuru - The Next-Gen SMS Platform: Transform Communication"
            detail="Fast & Reliable SMS Portal..."
            />
          </div>

          <div className="col-md-3">
            <BlogDetail
            imgaeHeading="Messages for Web on Your Computer: Enhance Your SMS Experience"
            head="Messages for Web on Your Computer: Enhance Your SMS Experience"
            detail="SMS Platform..."
            />
          </div>

          <div className="col-md-3">
            <BlogDetail
            imgaeHeading="TextGuru - The SMS Portal: Your Gateway to Effortless Communication"
            head="TextGuru - The SMS Portal: Your Gateway to Effortless Communication"
            detail="Fast & Reliable SMS Portal..."
            />
          </div>

        </div>
        <div className="row">
          <div className="col-md-3">
            <BlogDetail
            imgaeHeading="Why Bulk SMS Service Remains a Crucial Tool for Businesses in the Digital Age"
              head="Why Bulk SMS Service Remains a Crucial Tool for Businesses in the Digital Age"
              detail="Discover how Bulk SMS services India..."
            />
          </div>

          <div className="col-md-3">
            <BlogDetail
            imgaeHeading="Unlock Business Growth: The Game-Changing Bulk SMS Strategy"
            head="Unlock Business Growth: The Game-Changing Bulk SMS Strategy"
            detail="Discover how Bulk SMS services India..."
            />
          </div>

          <div className="col-md-3">
            <BlogDetail
            imgaeHeading="7 Proven Benefits Of Bulk SMS Service For Your Business"
            head="7 Proven Benefits Of Bulk SMS Service For Your Business"
            detail="Today, More than 60% of consumers think ..."
            />
          </div>

          <div className="col-md-3">
            <BlogDetail
            imgaeHeading="5 Proven Benefits Of Bulk SMS API For Your Business"
            head="5 Proven Benefits Of Bulk SMS API For Your Business"
            detail="With more than 5 Billion SMS users, Bulk..."
            />
          </div>

        </div>
      </div>

      <div className="blogPage">
        <ul>
            <li>
            <FaAnglesLeft/>
            </li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>
                <FaAnglesRight/>
            </li>
        </ul>
      </div>
      <Footer/>
    </div>
  );
};

export default Blogs;
