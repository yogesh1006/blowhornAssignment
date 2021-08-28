import "./blog.css";

const blogImages = [
  "https://images.unsplash.com/photo-1497296805880-3b37686c87ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGNvbXB1dGVyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1564683214965-3619addd900d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGVhbHRoeSUyMGRpc2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1513001900722-370f803f498d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2tzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];

const Blog = () => {
  return (
    <div className="blog-final">
      <div className="blog-title">
        <h1 className="blog-heading">The project Blog</h1>
        <h4>
          Design and layout to help you with your app.
        </h4>
      </div>
      <section className="blog-section">
        <div className="blogs">
          <div className="blog blog1">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
            />
            <div className="blog-content">
              <span className="blog-badge" style={{ color: "violet",padding:"0.3rem 0.5rem"}}>
                RESOURCES
              </span>
              <h2>Refreshing Designs</h2>
              <p style={{ fontSize: "small",textAlign:"justify" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                officiis veritatis aute.
              </p>
            </div>
          </div>
          <div className="blog blog2">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
            />
            <div className="blog-content">
              <span className="blog-badge" style={{ color: "skyblue",padding:"0.3rem 0.5rem" }}>
                LIFESTYLE
              </span>
              <h2>Refreshing Designs</h2>
              <p style={{ fontSize: "small",textAlign:"justify"}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                officiis veritatis.
              </p>
            </div>
          </div>
          <div className="blog blog3">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            />
            <div className="blog-content">
              <span className="blog-badge" style={{ color: "yellow",padding:"0.3rem 0.5rem" }}>
                ENTERTAINMENT
              </span>
              <h2>Healthier Lifestyle</h2>
              <p style={{ fontSize: "small",textAlign:"justify" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                officiis veritatis autem.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="blog-cards">
        {blogImages.map((item, index) => (
          <BlogCard url={item} key={index} />
        ))}
      </div>
    </div>
  );
};

const BlogCard = ({ url }) => {
  return (
    <div className="blog-card">
      <img alt="" src={url} />
      <div className="blog-content-card">
        <span className="blog-badge bg-purple">FOOD</span>
        <h5 >Refreshing Designs</h5>
        <p style={{ fontSize: "0.8rem" ,letterSpacing:"2px",fontWeight:"300",textAlign:"start"}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
          officiis veritatis autem.
        </p>
      </div>
    </div>
  );
};

export default Blog;
