import "./footer.css";

 const Footer = () => {
  return (
    <footer className="footer">
      <div className="navigation">
          <ul className="social-links">
            <li className="inline">About</li>
            <li className="inline">Blog</li>
            <li className="inline">Team</li>
            <li className="inline">Pricing</li>
            <li className="inline">Contact</li>
            <li className="inline">Terms</li>
          </ul>
      </div>
      <ul style={{ paddingLeft: "0" }} className="social-links">
        <li className="inline">
          {" "}
          <i className="fab fa-twitter mg-2"></i>
        </li>
        <li className="inline">
          {" "}
          <i className="fab fa-facebook mg-2"></i>
        </li>
        <li className="inline">
          {" "}
          <i className="fab fa-instagram mg-2"></i>
        </li>
        <li className="inline">
          {" "}
          <i className="fab fa-dribbble mg-2"></i>
        </li>
        <li className="inline">
          {" "}
          <i className="fab fa-github mg-2"></i>
        </li>
      </ul>
      <div className="reserved"> &copy; 2021 Designed By Yogesh. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;