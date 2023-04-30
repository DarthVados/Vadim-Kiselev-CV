import React, { useState } from "react";
import Heading from "./Heading";
import "./App.css"
import Skills from "./Skills";
import Modal from "./Modal";
import text from "./Text";
import rec from "./images/rec.jpg"






function App() {

const [modalActive, setModalActive] = useState(false);

// translation section
setTimeout(()=>{
let langEl = document.querySelector(".langs");
let link = document.querySelectorAll(".btn-toggle");
let nameEl = document.querySelector(".name");
let titleEl = document.querySelector(".title");
let addressEl = document.querySelector(".address");
let traitsEl = document.querySelector(".traits");
let languagesEl = document.querySelector(".languages");
let engEl = document.querySelector(".eng");
let rusEl = document.querySelector(".rus");
let hobbiesEl = document.querySelector(".hobbies");
let guitarEl = document.querySelector(".guitar");
let compEl = document.querySelector(".comp");
let vidEl = document.querySelector(".vid");
let summaryEl = document.querySelector(".summary");
let infoEl = document.querySelector(".info");
let educationEl = document.querySelector(".education");
let masterEl = document.querySelector(".master");
let bachelorEl = document.querySelector(".bachelor");
let schoolEl = document.querySelector(".school");
let employmentEl = document.querySelector(".employment");
let jobEl = document.querySelector(".job");
let jobinfoEl = document.querySelector(".jobinfo");
let portfolioEl = document.querySelector(".portfolio");
let recommendationEl = document.querySelector(".recommendation");

link.forEach(el =>{
  el.addEventListener("click",()=> {
    langEl.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    const attr = el.getAttribute("language");

    nameEl.textContent = text[attr].name;
    titleEl.textContent = text[attr].title;
    addressEl.textContent = text[attr].address;
    traitsEl.textContent = text[attr].traits;
    languagesEl.textContent = text[attr].languages;
    engEl.textContent = text[attr].eng;
    rusEl.textContent = text[attr].rus;
    hobbiesEl.textContent = text[attr].hobbies;
    guitarEl.textContent = text[attr].guitar;
    compEl.textContent = text[attr].comp;
    vidEl.textContent = text[attr].vid;
    summaryEl.textContent = text[attr].summary;
    infoEl.textContent = text[attr].info;
    educationEl.textContent = text[attr].education;
    masterEl.textContent = text[attr].master;
    bachelorEl.textContent = text[attr].bachelor;
    schoolEl.textContent = text[attr].school;
    employmentEl.textContent = text[attr].employment;
    jobEl.textContent = text[attr].job;
    jobinfoEl.textContent = text[attr].jobinfo;
    portfolioEl.textContent = text[attr].portfolio;
    recommendationEl.textContent = text[attr].recommendation;

});
});}, "0")





return (
    <div>
    <div className="langs">
      <button className="btn-toggle active" language="english">English</button>
      <button className="btn-toggle" language="russian">Русский</button>
    </div>
      <Heading /> 
      <Skills /> 
      <Modal active={modalActive} setActive={setModalActive}> 
        <div className="mod_content">
          <img src={rec} className="reclet" alt="recommendation letter"></img>
        </div>
      </Modal>

      <div className="portfolioBTN">
        <a href="https://github.com/DarthVados?tab=repositories" target="_blank" rel="noopener">
            <button className="btn-grad portfolio">Vadim's Portfolio</button>
              </a>
            <button className="btn-grad recommendation" onClick={() => setModalActive(true)}>Recommendation letter</button>
        </div> 
      </div>
)

}

export default App;