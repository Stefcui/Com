import React, {} from 'react';
import data from '../allData/Data';
import './Covid.css';


const CovidPage = () => {
  return (
    <div className='product'>
      <div className="catagory-name" id="three-container" >

        <h2 className='annimation'> {data[8].category} </h2>
      </div>
      <div className='container video2' >
        <h3 className="round2">Andygirl</h3>
        <iframe className='round' width="100%" height="500" src={`https://www.youtube.com/embed/Am1-Hg7dfuQ`} title="YouTube video player"
          frameBorder="0"
          allowFullScreen></iframe>
      </div>

      <div className="container-fluid sec2 py-5">
        <div className="container py-3">
          <div className="row mb-5">
            <div className="col-md-6">
              <h2>{data[5].robots[0].name}</h2>
              <h4>{data[5].robots[0].shortDis} </h4>
            </div>
            <div className="col-md-6">
              <div className="rate">
                <img src={require("./../../assets/icon/RatingStars.png")} alt="rating" />
                <p id="rating">5</p>
              </div>
              <h3>Price: <span> {data[5].robots[0].price} </span></h3>
            </div>
          </div>
          <div className="row justify-content-center buy-botton button-deck">
            <div className="col-md-4">
              <button className="cart">Add to Cart</button>
            </div>
            <div className="col-md-4">
              <a href="/" className="buy">Buy Now</a>
            </div>
          </div>
        </div>

      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="samller-video ">
              <h3 className='round2'>AndyGirl - Demonstration of Features</h3>
              <iframe className='' width="100%" height="300" src={`https://www.youtube.com/embed/8HskdmTvsqQ`} title="YouTube video player"
                frameBorder="0"
                allowFullScreen>

              </iframe>
              <p className='bg-dark'>
              AndyGirl belongs to Shenzhen All Intelligent Robot Technology Co. LTD (abbreviated as AI-Tech) in the “Andy” family of intelligent service robots. AndyGirl is an epidemic prevention, disinfection, sterilisation, purification unit. AndyGirl can kill and decompose bacteria spores, viruses and formaldehyde indiscriminately. AndyGirl is useful for homes, cars, shops, medical centres and hospitals.
                
                            </p>


            </div>
            <div className="samller-video ">
              <h3 className='round2'>Hydroxyl Radicals Kill Covid-19</h3>
              <iframe className='rond' width="100%" height="300" src={`https://www.youtube.com/embed/i2OZJx6DAi0`} title="YouTube video player"
                frameBorder="0"
                allowFullScreen></iframe>
              <p>
              In South Korea, Professor Lee Seung-seob and his team said that a new technology that produces microscopic droplets contain particles called hydroxyl radicals. They kill germs and viruses. The process is called 'electrostatic atomization.' The particles are contained in water droplets, they last longer in the air, making them a good sterilization.    

                </p>
            </div>
            <div className="samller-video ">
              <h3 className='round2'>Hydroxyl Radicals In Our Atmosphere</h3>
              <iframe className='' width="100%" height="300" src={`https://www.youtube.com/embed/ANqTEsQ4Q14`} title="YouTube video player"
                frameBorder="0"
                allowFullScreen></iframe>
              <p>
              This is a simple yet effective video explaining hydroxyl creation in the Earth's atmosphere, what they do as "nature's broom" and the benefit of their existence. As hydroxyls have been in our atmosphere for millions of years, humans, animals, and plants have evolved over millennia to co-exist with hydroxyl radicals.

              </p>

            </div>


          </div>
          <div className="col-md-6">
            <div className="textbox">
              <h5>AndyGirl makes Hydroxyl radicals (OH)</h5>
              <p>
                Hydroxyl radicals are produced 13 miles above the earth, in the lower atmosphere of earth. Hydroxyls have also been observed since 1963, by the UK ministry of Defence, in interstellar clouds throughout the universe.<sup>1</sup>  A sum of these hydroxyl’s reaches the surface of the earth and keeps the outside air fresh and clean. <br /> <br />
                Hydroxyl radicals are formed in the atmosphere by chemical reactions; when the sun’s ultraviolet light strikes ozone in the presence of water vapour (H2O), it separates hydrogen and oxygen from their molecular bond.<sup>2</sup> In the lower atmosphere, 13 miles above the earth, the released oxygen (O) and hydrogen (H) atoms are freed to bond together, forming Hydroxyl radicals (OH). This new unstable molecule of oxygen and hydrogen seeks equilibrium by searching for and stealing atoms from other molecules, destroying them in the process. Hydroxyl radicals steal atoms in the atmosphere from natures pollution; methane (CH4).<sup>3</sup> <br /> <br />
                As hydroxyls have been in our atmosphere for millions of years, humans, animals, and plants have evolved over millennia to co-exist with hydroxyl radicals. Atmospheric hydroxyls cannot enter the blood stream or tissues within the body, because skin and mucosal membranes have evolved to provide a protective barrier.<sup>4</sup> And yet, hydroxyls are produced within our immune system to kill invading viruses, bacteria, and microorganisms by oxidation.<sup>5</sup> Hydroxyl radicals protect the earth against contaminants such as viruses, bacteria, allergens, irritants, and pollution. <br /> <br />

                Ordinary water, also, sprayed as microdroplets, when it strikes a solid surface, a phenomenon known as contact electrification takes place, and produces hydroxyl radicals and hydrogen peroxide. When microdroplets of water strike a solid bench, an electric charge jumps between the two materials, liquid and solid, producing hydroxyl radicals, which is one atom of hydrogen and one atom of oxygen (OH). These then recombine to form hydrogen peroxide, H2O2, which is a powerful destroyer of bacteria, viruses, and importantly; Covid-19.<sup>6</sup> <br /> <br />

                Hydroxyl radicals can destroy methane, benzene, nitric oxide, vinyl chloride, and pesticides. Hydroxyl radicals kill 99.99% of viruses and bacteria’s, coccus, candida albicans, enterobacter, salmonella, shigella, e-coli, even anthrax! Hydroxyl radicals react with up to 5,000 different compounds.<sup>7</sup>
                <hr />
                <small className='foot-note'>
                  <p> 
                    1. Robinson, B J; McGee, R X (1967). "OH Molecules in the Interstellar Medium". Annual Review of Astronomy and Astrophysics.<sup>5</sup>
                  </p>
                  <p>
                    2. https://niwa.co.nz/publications/water-and-atmosphere/vol16-no1-march-2008/detergent-of-the-atmosphere
                  </p>
                  <p>
                  3.  https://earthobservatory.nasa.gov/images/144358/detergent-like-molecule-recycles-itself-in-atmosphere

                  </p>
                  <p>
                  4. Custodio Sánchez JD, Mtz Vimbert R, Garcia Raurich J. Review and safety criteria in advanced oxida:on processes in vegetables, mediated by hydroxyl radical. ESEIAAT – UPC Campus de Terrassa – Barcelona- Spain, 2020. (https://rightair.com.au/safety-of-long-term-exposure-to-hydroxyl-radicals/)

                  </p>
                  <p>
                  5. Microbicidal Activity of Artificially Generated Hydroxyl Radicals (https://link.springer.com/chapter/10.1007/978-4-431-55192-8_17)

                  </p>
                  <p>
                  6. New Stanford research reveals the chemical underpinnings of how benign water can transform into harsh hydrogen peroxide (https://news.stanford.edu/press-releases/2022/08/01/benign-water-traydrogen-peroxide/)

                  </p>
                  <p>
                  7. Hydroxyl Generators: The New Tool for Deodorization (https://www.randrmagonline.com/articles/85842-hydroxyl-generators-the-new-tool-for-deodorization)

                  </p>

                </small>
              </p>
            </div>
            <div className="pdf">
            <div className="row certificate">
            <div className="col-md-6">
                  <img src={require("../../assets/pdf/3rd pdf.png")} alt="pdf" width="110px"/>
                  <div>
                  <a href={require('../../assets/pdf/AI-SRT301 - Certificate of Compliance.pdf')}>Certificate of Compliance</a>

                  </div>
                </div>

            <div className="col-md-6">
                  <img src={require("../../assets/pdf/4 pdf.png")} alt="pdf" width="110px"/>
                  <div>
                  <a href={require("../../assets/pdf/AI-SRT301 - Certificate of Compliance.pdf")}>Declaration of Conformity Certificate</a>

                  </div>

                </div>

              <div className="col-md-6">

                  <img src={require("./../../assets/svg/Bacillus_subtilis.jpg")} alt="subtilis"  width="140px"/>
                  <div>
                  <a href={require("../../assets/pdf/Microbiology Detection Centre Results - Staphylococcus.pdf")}>Test of Killing Bacillus Subtilis Var Niger</a>

                  </div>

                </div>
                <div className="col-md-6">
                  <img src={require("./../../assets/svg/Staph.jpg")} alt="staph" width="110px"/>
                  <div>
                  <a href={require("../../assets/pdf/Microbiology Detection Centre Results - Staphylococcus.pdf")}>Test of Killing Bacillus Staphylococcus</a>

                  </div>


                </div>
              </div>

            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default CovidPage;