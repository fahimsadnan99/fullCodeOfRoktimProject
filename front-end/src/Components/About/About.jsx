import React from 'react'
import Layout from '../Layout/Layout';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import "./About.css"

import AboutCard from './AboutCard';
import CustomarQuto from './CustomarQuto';
import Heading from './Heading';

const About = () => {


  const topBuyer = [
    {
      img: "./img/buyer1.jpeg",
      Name: " Ali Usman",
      Number: "01725976133",
    },
    {
      img: "./img/buyer2.jpeg",
      Name: " Mehedi Hasan Juwel",
      Number: "01887702535",
    },
    {
      img: "./img/buyer3.jpeg",
      Name: "Titu Ahmed",
      Number: "01780736333",
    },
    {
      img: "./img/buyer4.jpeg",
      Name: "Sayem Raj",
      Number: "01817918520",
    },
  ];

    return (
      <Layout title="About Page">
        <Navbar></Navbar>
        <div className="container">
          <div className="row mt-5">
            <div className="col-10 offset-1">
              <img
                src="./img/office.jpeg"
                alt="aboutUs"
                className="img-fluid"
                style={{ height: "400px", width: "100%", borderRadius : "15px" }}
              ></img>
            </div>
          </div>

          <div className="row aboutText">
            <div className="col-10 offset-1 text-center">
              <h3 className="aboutTitle my-2">Apon Basic Need Food Ltd</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                natus nobis ratione nesciunt maiores officia consectetur id
                amet, repellendus dolor eligendi suscipit officiis cupiditate
                temporibus culpa recusandae libero accusantium pariatur tempore
                voluptate aliquam rem debitis labore eos. Quae eaque,
                consequuntur corrupti fugiat nobis facilis. Similique alias
                exercitationem possimus nemo magnam eum, labore necessitatibus
                consequatur eligendi nulla et pariatur voluptatibus eos eveniet
                illo ipsam, harum voluptas sit repellendus obcaecati! Officia,
                dicta iste. In totam nobis assumenda perspiciatis repellat iure
                amet rem, quos inventore, recusandae expedita ipsam obcaecati
                blanditiis incidunt officiis corporis perferendis enim
                architecto! Aliquid, repudiandae magni natus inventore eligendi
                eveniet omnis temporibus ipsam minus? Ipsam explicabo nam nulla
                dolorem illum corporis autem ea! Porro at explicabo nemo
                possimus consequuntur mollitia? Quaerat eius enim aperiam
                nostrum aliquam at eligendi ducimus, possimus aliquid
                praesentium impedit nam id quod corrupti error deleniti unde
                suscipit consectetur saepe dignissimos. Error ducimus nostrum
                quisquam alias minima vero omnis vitae, laudantium, quas commodi
                odit ea incidunt eaque sint quasi laborum sit? Molestiae tenetur
                illo voluptates! Quisquam quae animi atque molestias sequi unde,
                amet cupiditate minus esse eos possimus modi officiis veniam rem
                optio, quam sunt nihil inventore tempora dolorum. Cum, tenetur
                nemo sed deserunt earum fugit! Explicabo, reiciendis animi.
                Error odit dolorum, alias consequatur possimus, libero, eveniet
                delectus blanditiis recusandae dolorem optio nemo beatae dicta.
                Officia doloremque neque soluta perferendis deserunt asperiores,
                maiores porro odit eum magni eius aliquam sequi voluptates
                possimus harum ipsum? Doloremque facilis eveniet dignissimos
                cumque quas eius minus? Deleniti blanditiis voluptatibus nostrum
                nulla minus magnam temporibus! Optio numquam esse laboriosam
                iusto exercitationem magnam magni, neque omnis doloribus
                officiis odit aspernatur vero minus, molestias ipsam debitis.
                Sunt perferendis voluptatum voluptates eligendi quasi magnam
                aliquid minima exercitationem est, accusamus quos! Veniam nulla
                laudantium adipisci aspernatur, blanditiis eius, ex molestiae
                reprehenderit expedita accusantium unde esse, nisi ab non quod
                qui eligendi omnis! Aliquid vero itaque quod in autem enim,
                veniam dolores natus facere, et dolore. Voluptas nam hic, ipsam
                odit voluptates laborum consectetur consequuntur magnam facilis
                sint explicabo cum temporibus eos? Nostrum similique excepturi
                accusamus atque, repellendus fugiat ut non ipsum enim tenetur
                nesciunt odit corrupti dolore cumque quas aspernatur! Dolorum
                illo eius amet doloremque velit expedita nemo laboriosam vero
                aperiam, veritatis nobis sapiente mollitia exercitationem nisi
                voluptate ipsum consequatur adipisci in omnis eos dicta! Ex id
                blanditiis deleniti voluptatibus eum vero aut ad a sequi animi
                sapiente qui iste incidunt maiores, ab accusamus aliquid minus
                quam deserunt temporibus voluptatum eveniet velit? Neque
                architecto, rem pariatur tempora id nesciunt dicta maiores
                doloremque itaque debitis praesentium molestias. Facilis sint
                eveniet, molestiae explicabo atque reprehenderit in. Tenetur
                autem, nulla earum voluptatibus reiciendis eveniet! Saepe nobis
                quo accusamus adipisci molestiae error aperiam itaque recusandae
                dolorem porro temporibus placeat, officiis nulla veniam commodi
                ex enim pariatur sed consequuntur vero. Eum voluptatem nemo
                nostrum ea iure? Vero ad tempora enim nesciunt voluptate nemo ut
                excepturi eius incidunt quia at tenetur, omnis culpa accusamus
                aperiam eos animi perspiciatis deleniti tempore soluta ipsum?
                Ipsa dolor, a odio expedita tempora facilis harum voluptate
                voluptatem?
              </p>
            </div>
          </div>

          <div className="my-4 text-center">
            <Heading text="Top Management"></Heading>
            <AboutCard></AboutCard>
            <br />
            <br />
            <Heading text="Top Buyer"></Heading>
            <div className="row">
              {topBuyer.map((person) => {
                return (
                  <div className="col-md-6 col-lg-3">
                    <div className="card aboutPerson">
                      <img
                        src={person.img}
                        className="card-img-top"
                        alt="img"
                      />
                      <div className="card-body">
                        <p>{person.Name}</p>
                        <p> {person.Number}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="container">
          <h2
            className="text-center my-5"
            style={{
              borderBottom: "2px solid black",
              width: "300px",
              margin: "0 auto",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Customer Reviews
          </h2>
          <CustomarQuto></CustomarQuto>
        </div>

        <Footer></Footer>
      </Layout>
    );
}

export default About
