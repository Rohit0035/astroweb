import PropTypes from "prop-types";
import React from "react";
import blogFeaturedData from "../../data/blog-featured/blog-featured.json";
import BlogFeaturedSingle from "../../components/blog-featured/BlogFeaturedSingle";
// import SectionTitle from "../../components/section-title/SectionTitle";
import textbottom from "../../assets/img/textbottom.png";

const BlogFeatured = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`blog-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        {/* <SectionTitle
          titleText="OUR BLOG"
          positionClass="text-center"
          spaceClass="mb-55"
        /> */}
         <div className="heading mt-70">
              <h2>Blogs </h2>
              <img src={textbottom} alt=""/>
          </div>
         <div className="row">
          {blogFeaturedData.map(singlePost => {
            return (
              <BlogFeaturedSingle singlePost={singlePost} key={singlePost.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

BlogFeatured.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BlogFeatured;
