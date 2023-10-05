import React from 'react'

const About = ({mode}) => {
const myStyle = { 
 backgroundColor: mode === "dark"? "#7fa1bb": "white", 
 color: mode === "dark"? "white": "black"
}

  return (
    <div className="container mt-5">
        <h1 className="my-3" style= {{color: mode === "dark"? "white": "black"}}>About Us</h1>
        <div className="accordion" id="accordionExample" >
  <div className="accordion-item" style= {myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style= {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
      <strong>User Experience</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Enhance Your Text Manipulation Experience with TextPlus Discover an intuitive and user-friendly web application that revolutionizes the way you manipulate text. TextPlus provides a seamless and enjoyable user experience, making it effortless for you to perform a wide range of advanced text operations.
      </div>    
    </div>
  </div>
  <div className="accordion-item" style= {myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style= {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Features</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Unleash the Power of Text Manipulation with TextPlus Explore an extensive array of advanced features tailored to meet all your text manipulation needs. Whether you want to sort, filter, concatenate, or transform your text data, TextPlus offers a diverse set of tools and functionalities that empower you to efficiently process and analyze large volumes of text.
      </div>
    </div>
  </div>
  <div className="accordion-item" style= {myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed"  style= {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Easy to Use</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Simplify Text Manipulation with TextPlus' Intuitive Interface Experience the convenience of a web app that is designed for everyone. TextPlus boasts a user-friendly interface, allowing even the least tech-savvy individuals to effortlessly navigate and utilize its powerful text manipulation capabilities. With TextPlus, achieving complex text operations has never been easier.
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default About
