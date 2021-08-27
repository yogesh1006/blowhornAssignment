import "./team.css";

const UserProfile = () => {
  return (
    <div className="user-card">
      <div className="img-div">
        <img
          className="profile-img"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHJhbmRvbSUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="user"
        />
      </div>
      <div className="profile-info">
        <p style={{fontSize:"1rem",fontWeight:"350"}}>Susan Peterson</p>
        <span style={{ color: "blue", fontSize: "1.3rem",fontWeight:"400" }}>
          CEO and Co-founder
        </span>
        <div className="social-icons">
          <i className="fab fa-twitter mg-2 fa-2x"></i>
          <i className="fab fa-github mg-2 fa-2x"></i>
        </div>
      </div>
    </div>
  );
};

 const Team = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <div className="team-heading">
        <span style={{ fontSize: "small", color: "blue" }}>OUR TEAM</span>
        <h2>
          An incredible team of <br />
          amazing individuals{" "}
        </h2>
      </div>
      <div className="cards">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <UserProfile key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Team;
