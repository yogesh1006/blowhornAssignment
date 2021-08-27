import React from 'react'
import "./head.css"

const Head = () => {
    return (
        <section className="section-one">
          <h1>Start Crafting Your</h1>
          <h1 className="sub_heading">Next Great Idea</h1>
          <p>
            Simplifying the creation of landing pages, blog pages,<br></br>{" "}
            application pages and so much more!{" "}
          </p>
          <button className="btn">
            Purchase Now <span>only $15/mo</span>
          </button>
          <p>Learn More</p>
        </section>
    )
}

export default Head
