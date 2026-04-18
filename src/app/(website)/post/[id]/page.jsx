import { notFound } from "next/navigation";
// 'use client'
const posts = [
  {
    id: 1,
    title: `AIUBians On Erasmus`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Erasmus-01.png"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On <strong>Saturday, December 10<sup>th</sup>, 2022</strong>, The IEEE AIUB Student Branch organized a webinar on “<strong>AIUBians on Erasmus.</strong>” This webinar’s objective was to
            offer variety of useful insights and recommendations on the <strong>Erasmus Mundus</strong> scholarship from AIUB alumni on various Erasmus programs.
          </p>
          <p>
            <strong>Dr. Mohammad Hasan Imam Sir,</strong> <em>Counselor, IEEE AIUB Student Branch, Advisor, IEEE EMBS AIUB SB Chapter; Associate Professor, Faculty of Engineering, AIUB,</em>
            inaugurated the seminar. He briefly talked about the Erasmus Mundus scholarship and the conveniences and opportunities of studying abroad. He also encouraged the attendees to join IEEE,
            as the membership drive of the <strong>IEEE AIUB Student Branch</strong> was going on. After the inauguration speech, <strong>Mashrur Sakib Choyon,</strong> <em>Erasmus scholar, EMJMD in
            Smart Systems Integrated Solutions (SSIs)</em> took the floor. He commenced his presentation by discussing the significance of the webinar for the attendees. Later, he concentrated on
            what EMJMD is, cost coverages, IELTS, recommendation letter and other important topics. Next, <strong>S M Ragib Shahriar,</strong> <em>Erasmus Scholar, EMJMD in Medical Imaging and
            Applications (MAIA)</em> held his presentation. He talked about his master’s program in Medical Imaging and Applications. His discussions also covered the eligibilities, migration,
            choosing universities for the degree and important documents. Next, <strong>Mohammad Irfan Yousuf,</strong> <em>Erasmus Scholar, EMJMD in Sustainable Transportation and Electrical Power
            System (STEPS)</em> discussed his master’s program in sustainable transportation and electrical power system. His discussions also included scholarship opportunities after graduation and
            possible internship companies. Then <strong>Kazi Rony,</strong> <em>Erasmus scholar, Master in Renewable Energy in the Marine Environment (REM+)</em> presented details on his master’s
            program. He also talked about specialization of renewable energy, evaluation criteria, evidence, and weight in score, mobility and so on. After his presentation, <strong>Dewan Mahnaz
            Mahmud</strong>, <em>Erasmus scholar, EMJMD in Dynamic of Renewables-based Power Systems (DREAM)</em> was invited. He briefly talked about the application process of EMJMD and Career
            opportunities. Following his presentation, <strong>Jannatul Mawa Akanto,</strong> <em>Erasmus scholar, EMJMD Smart Cities & Communities (SMACCs)</em> took the floor. She talked about
            her master’s program on in smart cities and communities, the mobility in EMJMD and eligibility to apply for Erasmus. Then <strong>Mashrur Sakib Choyon</strong> added some important
            information. Which contained SECCLO, Erasmus + Master’s program in security and cloud computing, Innovation and R&D for focused curriculum and industry and research collaboration.
            <strong>Eyasin Rahman,</strong> <em>Erasmus scholar, EMJMD in Embedded Computing Systems (EMECS)</em> then talked about his master’s program, top ranked institutes, core, and elective
            programs. Next, <strong>M. Mukit,</strong> <em>Erasmus scholar, EMJMD in Photonic Integrated Circuits, Sensors and NETworks-PIXNET</em> discussed about his program in details, its
            applications, integrated circuits, sensors, and networks. The final speaker, <strong>Mohammad Jaber Hossain,</strong> <em>Erasmus scholar, EMJMD in Computational Color and Spectral
            Imaging (CoSI)</em> talked about computational color and spectral imagining, thesis, and internship. Following the end of speaker session, <strong>Chowdhury Akram Hossain,</strong>
            <em>Advisor, IEEE AIUB Student Branch, Associate Professor, Faculty of Engineering, Special Assistant, Office of Student Affairs (OSA)</em> delivered the ending speech of the webinar. He
            talked about foreign scholarships for higher education. He also talked about the roles of <strong>IEEE</strong> in these fields of study. At the end, he presented virtual tokens of
            appreciations to all the speakers.
          </p>
          <p>
            The webinar began on ZOOM meeting platform at 6PM and was attended by 150+ attendees
          </p>
        </div>
        <div>
          <div>
            <div>
              <a href="/images/ieee/2022/12/Screenshot-2022-12-17-at-12.00.35-AM.png" rel="noreferrer" data-rel="iLightbox[gallery_image_1]" target="_self"><img src=
              "/images/ieee/2022/12/Screenshot-2022-12-17-at-12.00.35-AM.png" width="2190" height="1332" alt="" title="Screenshot 2022-12-17 at 12.00.35 AM" aria-label=
              "Screenshot 2022-12-17 at 12.00.35 AM" srcset=
              "/images/ieee/2022/12/Screenshot-2022-12-17-at-12.00.35-AM-200x122.png 200w, /images/ieee/2022/12/Screenshot-2022-12-17-at-12.00.35-AM-400x243.png 400w, /images/ieee/2022/12/Screenshot-2022-12-17-at-12.00.35-AM-600x365.png 600w, /images/ieee/2022/12/Screenshot-2022-12-17-at-12.00.35-AM-800x487.png 800w, /images/ieee/2022/12/Screenshot-2022-12-17-at-12.00.35-AM-1200x730.png 1200w, /images/ieee/2022/12/Screenshot-2022-12-17-at-12.00.35-AM.png 2190w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/12/Screenshot-2022-12-16-at-11.57.13-PM.png" rel="noreferrer" data-rel="iLightbox[gallery_image_1]" target="_self"><img src=
              "/images/ieee/2022/12/Screenshot-2022-12-16-at-11.57.13-PM.png" width="2188" height="1338" alt="" title="Screenshot 2022-12-16 at 11.57.13 PM" aria-label=
              "Screenshot 2022-12-16 at 11.57.13 PM" srcset=
              "/images/ieee/2022/12/Screenshot-2022-12-16-at-11.57.13-PM-200x122.png 200w, /images/ieee/2022/12/Screenshot-2022-12-16-at-11.57.13-PM-400x245.png 400w, /images/ieee/2022/12/Screenshot-2022-12-16-at-11.57.13-PM-600x367.png 600w, /images/ieee/2022/12/Screenshot-2022-12-16-at-11.57.13-PM-800x489.png 800w, /images/ieee/2022/12/Screenshot-2022-12-16-at-11.57.13-PM-1200x734.png 1200w, /images/ieee/2022/12/Screenshot-2022-12-16-at-11.57.13-PM.png 2188w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/12/Screenshot-2022-12-16-at-11.56.37-PM.png" rel="noreferrer" data-rel="iLightbox[gallery_image_1]" target="_self"><img src=
              "/images/ieee/2022/12/Screenshot-2022-12-16-at-11.56.37-PM.png" width="2194" height="1336" alt="" title="Screenshot 2022-12-16 at 11.56.37 PM" aria-label=
              "Screenshot 2022-12-16 at 11.56.37 PM" srcset=
              "/images/ieee/2022/12/Screenshot-2022-12-16-at-11.56.37-PM-200x122.png 200w, /images/ieee/2022/12/Screenshot-2022-12-16-at-11.56.37-PM-400x244.png 400w, /images/ieee/2022/12/Screenshot-2022-12-16-at-11.56.37-PM-600x365.png 600w, /images/ieee/2022/12/Screenshot-2022-12-16-at-11.56.37-PM-800x487.png 800w, /images/ieee/2022/12/Screenshot-2022-12-16-at-11.56.37-PM-1200x731.png 1200w, /images/ieee/2022/12/Screenshot-2022-12-16-at-11.56.37-PM.png 2194w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/12/Screenshot-2022-12-16-at-11.55.59-PM.png" rel="noreferrer" data-rel="iLightbox[gallery_image_1]" target="_self"><img src=
              "/images/ieee/2022/12/Screenshot-2022-12-16-at-11.55.59-PM.png" width="2190" height="1330" alt="" title="Screenshot 2022-12-16 at 11.55.59 PM" aria-label=
              "Screenshot 2022-12-16 at 11.55.59 PM" srcset=
              "/images/ieee/2022/12/Screenshot-2022-12-16-at-11.55.59-PM-200x121.png 200w, /images/ieee/2022/12/Screenshot-2022-12-16-at-11.55.59-PM-400x243.png 400w, /images/ieee/2022/12/Screenshot-2022-12-16-at-11.55.59-PM-600x364.png 600w, /images/ieee/2022/12/Screenshot-2022-12-16-at-11.55.59-PM-800x486.png 800w, /images/ieee/2022/12/Screenshot-2022-12-16-at-11.55.59-PM-1200x729.png 1200w, /images/ieee/2022/12/Screenshot-2022-12-16-at-11.55.59-PM.png 2190w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2020/09/Screenshot-2022-12-10-at-7.00.13-PM.png" rel="noreferrer" data-rel="iLightbox[gallery_image_1]" target="_self"><img src=
              "/images/ieee/2020/09/Screenshot-2022-12-10-at-7.00.13-PM.png" width="2880" height="1800" alt="" title="Screenshot 2022-12-10 at 7.00.13 PM" aria-label=
              "Screenshot 2022-12-10 at 7.00.13 PM" srcset=
              "/images/ieee/2020/09/Screenshot-2022-12-10-at-7.00.13-PM-200x125.png 200w, /images/ieee/2020/09/Screenshot-2022-12-10-at-7.00.13-PM-400x250.png 400w, /images/ieee/2020/09/Screenshot-2022-12-10-at-7.00.13-PM-600x375.png 600w, /images/ieee/2020/09/Screenshot-2022-12-10-at-7.00.13-PM-800x500.png 800w, /images/ieee/2020/09/Screenshot-2022-12-10-at-7.00.13-PM-1200x750.png 1200w, /images/ieee/2020/09/Screenshot-2022-12-10-at-7.00.13-PM.png 2880w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/12/Group-photo-on-erasmus.png" rel="noreferrer" data-rel="iLightbox[gallery_image_1]" target="_self"><img src=
              "/images/ieee/2022/12/Group-photo-on-erasmus.png" width="2426" height="1322" alt="" title="Group photo on erasmus" aria-label="Group photo on erasmus"
              srcset=
              "/images/ieee/2022/12/Group-photo-on-erasmus-200x109.png 200w, /images/ieee/2022/12/Group-photo-on-erasmus-400x218.png 400w, /images/ieee/2022/12/Group-photo-on-erasmus-600x327.png 600w, /images/ieee/2022/12/Group-photo-on-erasmus-800x436.png 800w, /images/ieee/2022/12/Group-photo-on-erasmus-1200x654.png 1200w, /images/ieee/2022/12/Group-photo-on-erasmus.png 2426w"
               /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Webinar`,
  },

  {
    id: 2,
    title: `Seminar on International Day of Medical Physics & World Radiography Day`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/International-Day-of-Medical-Physics-World-Radiography-Day.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><p>
  On <strong>Tuesday, November 8th, 2022</strong>, the <strong>Center for Biomedical Research (CBR)</strong>, a section of <strong>Dr. Anawarul Abedin Innovation Institute</strong>, in
  collaboration with the<strong> IEEE Engineering in Medicine and Biology Society AIUB SB Chapter</strong>, successfully organized a seminar session titled ” <strong>International Day of
  Medical Physics & World Radiography Day</strong>.” The event commemorated <strong>the International Day of Medical Physics </strong>and<strong> World Radiography
  Day. </strong>The purpose was to increase public understanding of the significance of physics in the healthcare system and promote public awareness of radiographic imaging and therapy.
</p>
<p>
  The program was inaugurated by <strong>Prof. Dr. Md. Abdur Rahman</strong>, <em>Advisor, IEEE AIUB Student Branch; Associate Dean, Faculty of Engineering, AIUB</em>. He talked about the
  importance of medical physics and instrumentations, and Radiation. He also spoke about the fields of Biomedical & Physics being related. After the inauguration, <strong>Dr. Humayra
  Fredous, </strong><em>Deputy Director, Center for Biomedical Research, AIUB: Head-in-charge & Associate Professor, Department of Physics, AIUB, </em>gave her remarks about the
  session. She mentioned that World Radiation Day and the International Day of Medical Physics are being observed for the first time in AIUB. Then she talked about Marie Curie and her inventions,
  usage of radiation & radiotherapy, cancer treatment and fatalities, etcetera. Then the speaker, <strong>Dr. S.M. Hasan Mahmud</strong>, <em>Assistant Professor, Department of Computer
  Science, AIUB, </em>took the stage. He greeted and thanked everyone for joining the session. He started the discussion with a machine learning-based approach<em> </em>to computational
  drug discovery. He also talked about feature extraction, balancing & model training phase. Before that, he described the bioinformatics & drug target data processing phase. There was a
  detailed discussion on using bioinformatics and machine learning algorithms and their real-life applications. The session ended with <strong>Prof. Dr. Mohammad Abdul
  Mannan,</strong> <em>Advisor, IEEE AIUB Student Branch, Director, Faculty of Engineering, AIUB, </em>presenting the token of appreciation to the honorable speakers.
</p>
<p>
  The seminar started at <strong>03:30 PM</strong> and finished at <strong>5:00 PM</strong>. A total of 50+ participants attended the event.
</p>`,
    },
    category: `seminar`,
  },

  {
    id: 3,
    title: `Seminar on A Journey of Unknowns in the Femto-Nano World`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/A-Journey-of-Unknowns-in-the-Femto-Nano-World.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><p>
  On <strong>Tuesday, October 18th, 2022</strong>, The <strong>Centre for Nanotechnology Research(CNR)</strong>, a section of <strong>Dr. Anawarul Abedin Innovation Institute</strong>,
  in collaboration with the <strong>IEEE AIUB Student Branch</strong>, successfully organised a seminar session on Nano and Femto Technology titled “<strong>A Journey of Unknowns in the Femto-Nano
  World</strong>.” The event was held to commemorate <strong>Nanotechnology Day</strong>, and this seminar aimed to deliver an informative and inspiring discussion regarding nano and Femto
  technologies.
</p>
<p>
  The distinguished speaker and faculty members launched the program with a cake-cutting ceremony to celebrate <strong>Nanotechnology Day</strong>. Following the ceremony, <strong>Prof. Dr.
  A.B.M Siddique Hossain</strong><em>, Advisor, IEEE AIUB Student Branch, Dean, Faculty of Engineering, AIUB; </em>delivered the inaugural speech. He spoke briefly on nanotechnology and the
  definitions of nano and Femto. After the inaugural address, <strong>Dr. Mohammad Mahbub Rabbani, </strong><em>Associate professor, and In-Charge, CNR, AIUB</em>, delivered his remarks for
  the seminar session. He stated that this was the first time <strong>AIUB</strong> had celebrated <strong>Nanotechnology Day</strong>. His discussion topics included the relevance of
  nanotechnology, what it is, and the significance of Nanotechnology Day. He also stated that this event might be an example for other institutes to observe <strong>Nanotechnology Day</strong>.
  He acknowledged the honoured speaker for the session at the end of his remarks. He thanked the speaker for giving his valuable time and welcomed him to the <strong>AIUB</strong> campus.
</p>
<p>
  <strong>Dr. Md Tofazzal Islam, </strong><em>Professor, and Founding Director, Institute of Biotechnology and Genetic Engineering (IBGE); Bangabandhu Sheikh Mujibur Rahman Agricultural
  University; Fellow of The Fulbright, Commonwealth, JSPS, And Alexander Von Humboldt Foundation; </em>began the seminar session by greeting everyone. He said he was happy to meet everyone and
  to be invited to the seminar. He introduced himself and talked about his struggles from childhood and how he reached where he is today. Then he described the seminar’s title, <strong>A Journey
  of Unknowns in the Femto-Nano World</strong>. There was an in-depth discussion regarding nanoparticles found in nature, nanotechnology, and the hypothetical Femto technology. He then briefly
  covered DNA structure, the Covid 19 vaccine, plant colonisation, and the quote, “<strong>Plant health is earth wealth</strong>.” He shared how he discovered the genetic identity and origin of the
  deadly wheat blast in Bangladesh. He also discussed about the establishment of <strong>the Institute of Biotechnology and Genetic Engineering (IBGE)</strong> at <strong>Bangabandhu Sheikh
  Mujibur Rahman Agricultural University</strong>. He mentioned some research works such as High-valued nano carbons from jute and bone charcoal, Novel nanomaterials as magnoliopsids, Novel
  nanomaterials as catalytic converters, and novel pathways for the conversion of biomass to high-valued biochemicals. He also talked about his research on SARS CoV-2 Infection, which reduces the
  Human Nasopharyngeal Commensal Microbiome by including Pathobionts. In the end, he answered some questions from the participants and concluded the seminar.
</p>
<p>
  The seminar started at <strong>03:30 PM</strong> and finished at <strong>05:30 PM</strong>. A total of 120+ participants attended the event.
</p>`,
    },
    category: `seminar`,
  },

  {
    id: 4,
    title: `THE IEEE AIUB Student branch celebrated “IEEE Day 2022”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/ieee_day_2022.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On <strong>Tuesday, 11th October 2022</strong>, The <strong>IEEE AIUB Student Branch</strong> organized an all-day long event celebrating “<strong>IEEE Day 2022</strong>”. This event
            consisted of a workshop titled “<strong>A Medium Voltage Substation Design Maintaining Proper Standard</strong>,” organized by <strong>IEEE IAS Student Branch Chapter</strong> in
            collaboration with <strong>IEEE AIUB Student Branch</strong>, followed by a seminar on “<strong>Protection in High Voltage Engineering</strong>,” an informative speech from dedicated
            personnel, a cultural event performed by <strong>AIUB Performing Arts Club (APAC)</strong>, and fun activities. This event aimed to bring all <strong>IEEE AIUB Student Branch</strong>
            members and supporters together to demonstrate how IEEE members in local communities collaborate on ideas that affect technology for a better tomorrow and contribute to making a
            difference.
          </p>
          <p>
            <strong>Al Amin Hossain,</strong> <em>Assistant Manager, Engineering and Design (Electrical), Reverie Power & Automation Engineering LTD</em>, was the instructor of the workshop
            session on “<strong>A Medium Voltage Substation Design Maintaining Proper Standard</strong>.” There were detailed discussions about power systems, the working process of substations,
            outdoor and indoor components of a substation and their purpose, power triangle and load flow, load distribution, cost management, and so on. There was also a discussion on frequently
            asked questions at job interviews for Electrical Engineers. <strong>MD. Saniat Rahman Zishan,</strong> <em>Advisor, IEEE AIUB Student Branch, Associate Professor, Head (Undergraduate
            Program), Department of COE, Faculty of Engineering, AIUB</em>, delivered the ending speech of the workshop session. He thanked the instructor and talked about internship opportunities.
            The workshop session ended with <strong>MD. Saniat Rahman Zishan</strong> delivering the token of appreciation to the honourable instructor <strong>Al Amin Hossain</strong>.
          </p>
          <p>
            The seminar phase of the IEEE Day celebration began with the cake cutting ceremony. <strong>Prof. Dr. A.B.M Siddique Hossain,</strong> <em>Advisor, IEEE AIUB Student Branch, Dean, Faculty
            of Engineering, American International University – Bangladesh,</em> inaugurated the seminar session. He briefly discussed about IEEE, and <strong>IEEE AIUB SB</strong><em>.</em> He
            talked about IEEE publications and research activity, IEEE builds communication, energy storage, renewable energy, climate change, global warming, nuclear power station, grid condition,
            and AI. He also congratulated <strong>IEEE AIUB SB</strong> on receiving the <strong>“IEEE Regional Exemplary Student Branch Award 2022”</strong> in <strong>Region 10.</strong>
            Afterwards, he thanked <strong>IEEE AIUB SB</strong> and the participants for joining the event. <strong>Dr. Md. Raju Ahmed,</strong> <em>Professor,</em> <em>Department of Electrical and
            Electronic Engineering: Director, Institutional Quality Assurance Celt (IQAC); Former Dean, Faculty of Electrical and Electronic Engineering; Former head, Dhaka University of Engineering
            & Technology (DUET); Treasurer, IEEE Bangladesh Section; Life Fellow IEB, Member IEEE;</em> thanked the faculties and <strong>IEEE AIUB SB</strong> for inviting him to the session and
            congratulated <strong>IEEE AIUB SB</strong> for receiving the award. He discussed the importance of protection in high-voltage engineering, lightning in Japan and China, the Franklin Kite
            Experiment, lightning current waveform, lightning current parameters, and projection level. He also discussed lightning conductors with meshed cages, lightning projection rods, lightning
            on wind turbines, faults in wind turbines, and protection of transmission lines. Afterwards, he discussed about the Tokyo tower, the lightning protection of Tokyo tower, Tokyo Sky Tower,
            CN Tower, the harvest of lightning energy, grounding resistance, lightning projection of ground objects, and analysis of a long grounding conductor. Finally, he did a Q&A session and
            ended his session by thanking everyone. <strong>Dr. Mohammad Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch, Advisor, IEEE EMBS AIUB SB Chapter, Associate Professor, Faculty
            of Engineering, American International University – Bangladesh,</em> presented the token of appreciation to the honourable speaker<em>.</em> Afterwards, a cultural program was performed
            by the <strong>AIUB Performing Arts Club (APAC).</strong> After that, <strong>Prof. Dr. Md. Abdur Rahman,</strong> <em>Advisor, IEEE AIUB Student Branch, Associate Dean, Faculty of
            Engineering, American International University – Bangladesh,</em> and <strong>Prof. Dr. Mohammad Abdul Mannan,</strong> <em>Advisor, IEEE AIUB Student Branch, Director, Faculty of
            Engineering, American International University – Bangladesh;</em> with <strong>IEEE AIUB SB</strong> executives declared the winner of the photo contest. Afterwards, <strong>Prof. Dr. Md.
            Abdur Rahman</strong> & <strong>Prof. Dr. Mohammad Abdul Mannan,</strong> with the <strong>Chairperson, Vice-Chairperson</strong>, and <strong>Secretary</strong> of <strong>IEEE AIUB
            SB,</strong> presented a token of appreciation to the <strong>General Secretary</strong> of <strong>AIUB Performing Arts Club (APAC)</strong> and thanked <strong>APAC</strong> for their
            cultural program. <strong>Prof. Dr. Md. Abdur Rahman</strong> gave the closing remarks for the session by discussing IEEE, IEEE members, platform & technology, and IEEE professional
            body. He discussed the significant achievements of the <strong>IEEE AIUB SB</strong> and ended his speech by thanking everyone. After the closing remarks, a photo session was arranged,
            and food, kits, and certificates were presented, which concluded the session.
          </p>
          <p>
            The event was attended by 150+ attendees, including 100+ IEEE members and 50+ non-members.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div>
  <div>
    <div>
      <div>
        <div>
          <div>
            <iframe title="YouTube video player" src="https://www.youtube.com/embed/NQZpDQd5afU?wmode=transparent&autoplay=0" width="600" height="360" allowfullscreen="" allow=
            "autoplay; fullscreen"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div>
  <div>
    <div>
      <div>
        <div>
          <div>
            <div>
              <a href="/images/ieee/2022/10/ieee_day_2022.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_2]" target="_self"><img src=
              "/images/ieee/2022/10/ieee_day_2022.jpg" width="1350" height="900" alt="" title="ieee_day_2022" aria-label="ieee_day_2022" srcset=
              "/images/ieee/2022/10/ieee_day_2022-200x133.jpg 200w, /images/ieee/2022/10/ieee_day_2022-400x267.jpg 400w, /images/ieee/2022/10/ieee_day_2022-600x400.jpg 600w, /images/ieee/2022/10/ieee_day_2022-800x533.jpg 800w, /images/ieee/2022/10/ieee_day_2022-1200x800.jpg 1200w, /images/ieee/2022/10/ieee_day_2022.jpg 1350w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/10/ieee_day_2022_1.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_2]" target="_self"><img src=
              "/images/ieee/2022/10/ieee_day_2022_1.jpg" width="1200" height="800" alt="" title="ieee_day_2022_1" aria-label="ieee_day_2022_1" srcset=
              "/images/ieee/2022/10/ieee_day_2022_1-200x133.jpg 200w, /images/ieee/2022/10/ieee_day_2022_1-400x267.jpg 400w, /images/ieee/2022/10/ieee_day_2022_1-600x400.jpg 600w, /images/ieee/2022/10/ieee_day_2022_1-800x533.jpg 800w, /images/ieee/2022/10/ieee_day_2022_1.jpg 1200w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/10/ieee_day_2022_2.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_2]" target="_self"><img src=
              "/images/ieee/2022/10/ieee_day_2022_2.jpg" width="900" height="600" alt="" title="ieee_day_2022_2" aria-label="ieee_day_2022_2" srcset=
              "/images/ieee/2022/10/ieee_day_2022_2-200x133.jpg 200w, /images/ieee/2022/10/ieee_day_2022_2-400x267.jpg 400w, /images/ieee/2022/10/ieee_day_2022_2-600x400.jpg 600w, /images/ieee/2022/10/ieee_day_2022_2-800x533.jpg 800w, /images/ieee/2022/10/ieee_day_2022_2.jpg 900w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/10/ieee_day_2022_3.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_2]" target="_self"><img src=
              "/images/ieee/2022/10/ieee_day_2022_3.jpg" width="900" height="600" alt="" title="ieee_day_2022_3" aria-label="ieee_day_2022_3" srcset=
              "/images/ieee/2022/10/ieee_day_2022_3-200x133.jpg 200w, /images/ieee/2022/10/ieee_day_2022_3-400x267.jpg 400w, /images/ieee/2022/10/ieee_day_2022_3-600x400.jpg 600w, /images/ieee/2022/10/ieee_day_2022_3-800x533.jpg 800w, /images/ieee/2022/10/ieee_day_2022_3.jpg 900w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/10/ieee_day_2022_4-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_2]" target="_self"><img src=
              "/images/ieee/2022/10/ieee_day_2022_4-scaled.jpg" width="2000" height="1333" alt="" title="ieee_day_2022_4" aria-label="ieee_day_2022_4" srcset=
              "/images/ieee/2022/10/ieee_day_2022_4-200x133.jpg 200w, /images/ieee/2022/10/ieee_day_2022_4-400x267.jpg 400w, /images/ieee/2022/10/ieee_day_2022_4-600x400.jpg 600w, /images/ieee/2022/10/ieee_day_2022_4-800x533.jpg 800w, /images/ieee/2022/10/ieee_day_2022_4-1200x800.jpg 1200w, /images/ieee/2022/10/ieee_day_2022_4-scaled.jpg 2000w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/10/ieee_day_2022_5.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_2]" target="_self"><img src=
              "/images/ieee/2022/10/ieee_day_2022_5.jpg" width="900" height="600" alt="" title="ieee_day_2022_5" aria-label="ieee_day_2022_5" srcset=
              "/images/ieee/2022/10/ieee_day_2022_5-200x133.jpg 200w, /images/ieee/2022/10/ieee_day_2022_5-400x267.jpg 400w, /images/ieee/2022/10/ieee_day_2022_5-600x400.jpg 600w, /images/ieee/2022/10/ieee_day_2022_5-800x533.jpg 800w, /images/ieee/2022/10/ieee_day_2022_5.jpg 900w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/10/ieee_day_2022_5.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_2]" target="_self"><img src=
              "/images/ieee/2022/10/ieee_day_2022_5.jpg" width="900" height="600" alt="" title="ieee_day_2022_5" aria-label="ieee_day_2022_5" srcset=
              "/images/ieee/2022/10/ieee_day_2022_5-200x133.jpg 200w, /images/ieee/2022/10/ieee_day_2022_5-400x267.jpg 400w, /images/ieee/2022/10/ieee_day_2022_5-600x400.jpg 600w, /images/ieee/2022/10/ieee_day_2022_5-800x533.jpg 800w, /images/ieee/2022/10/ieee_day_2022_5.jpg 900w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/10/ieee_day_2022_6.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_2]" target="_self"><img src=
              "/images/ieee/2022/10/ieee_day_2022_6.jpg" width="900" height="600" alt="" title="ieee_day_2022_6" aria-label="ieee_day_2022_6" srcset=
              "/images/ieee/2022/10/ieee_day_2022_6-200x133.jpg 200w, /images/ieee/2022/10/ieee_day_2022_6-400x267.jpg 400w, /images/ieee/2022/10/ieee_day_2022_6-600x400.jpg 600w, /images/ieee/2022/10/ieee_day_2022_6-800x533.jpg 800w, /images/ieee/2022/10/ieee_day_2022_6.jpg 900w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/10/ieee_day_2022_7.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_2]" target="_self"><img src=
              "/images/ieee/2022/10/ieee_day_2022_7.jpg" width="900" height="600" alt="" title="ieee_day_2022_7" aria-label="ieee_day_2022_7" srcset=
              "/images/ieee/2022/10/ieee_day_2022_7-200x133.jpg 200w, /images/ieee/2022/10/ieee_day_2022_7-400x267.jpg 400w, /images/ieee/2022/10/ieee_day_2022_7-600x400.jpg 600w, /images/ieee/2022/10/ieee_day_2022_7-800x533.jpg 800w, /images/ieee/2022/10/ieee_day_2022_7.jpg 900w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/10/ieee_day_2022_8.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_2]" target="_self"><img src=
              "/images/ieee/2022/10/ieee_day_2022_8.jpg" width="900" height="600" alt="" title="ieee_day_2022_8" aria-label="ieee_day_2022_8" srcset=
              "/images/ieee/2022/10/ieee_day_2022_8-200x133.jpg 200w, /images/ieee/2022/10/ieee_day_2022_8-400x267.jpg 400w, /images/ieee/2022/10/ieee_day_2022_8-600x400.jpg 600w, /images/ieee/2022/10/ieee_day_2022_8-800x533.jpg 800w, /images/ieee/2022/10/ieee_day_2022_8.jpg 900w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/10/ieee_day_2022_9.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_2]" target="_self"><img src=
              "/images/ieee/2022/10/ieee_day_2022_9.jpg" width="900" height="600" alt="" title="ieee_day_2022_9" aria-label="ieee_day_2022_9" srcset=
              "/images/ieee/2022/10/ieee_day_2022_9-200x133.jpg 200w, /images/ieee/2022/10/ieee_day_2022_9-400x267.jpg 400w, /images/ieee/2022/10/ieee_day_2022_9-600x400.jpg 600w, /images/ieee/2022/10/ieee_day_2022_9-800x533.jpg 800w, /images/ieee/2022/10/ieee_day_2022_9.jpg 900w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/10/ieee_day_2022_10.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_2]" target="_self"><img src=
              "/images/ieee/2022/10/ieee_day_2022_10.jpg" width="900" height="600" alt="" title="ieee_day_2022_10" aria-label="ieee_day_2022_10" srcset=
              "/images/ieee/2022/10/ieee_day_2022_10-200x133.jpg 200w, /images/ieee/2022/10/ieee_day_2022_10-400x267.jpg 400w, /images/ieee/2022/10/ieee_day_2022_10-600x400.jpg 600w, /images/ieee/2022/10/ieee_day_2022_10-800x533.jpg 800w, /images/ieee/2022/10/ieee_day_2022_10.jpg 900w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/10/ieee_day_2022_15.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_2]" target="_self"><img src=
              "/images/ieee/2022/10/ieee_day_2022_15.jpg" width="900" height="600" alt="" title="ieee_day_2022_15" aria-label="ieee_day_2022_15" srcset=
              "/images/ieee/2022/10/ieee_day_2022_15-200x133.jpg 200w, /images/ieee/2022/10/ieee_day_2022_15-400x267.jpg 400w, /images/ieee/2022/10/ieee_day_2022_15-600x400.jpg 600w, /images/ieee/2022/10/ieee_day_2022_15-800x533.jpg 800w, /images/ieee/2022/10/ieee_day_2022_15.jpg 900w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/10/ieee_day_2022_16-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_2]" target="_self"><img src=
              "/images/ieee/2022/10/ieee_day_2022_16-scaled.jpg" width="2000" height="1333" alt="" title="ieee_day_2022_16" aria-label="ieee_day_2022_16" srcset=
              "/images/ieee/2022/10/ieee_day_2022_16-200x133.jpg 200w, /images/ieee/2022/10/ieee_day_2022_16-400x267.jpg 400w, /images/ieee/2022/10/ieee_day_2022_16-600x400.jpg 600w, /images/ieee/2022/10/ieee_day_2022_16-800x533.jpg 800w, /images/ieee/2022/10/ieee_day_2022_16-1200x800.jpg 1200w, /images/ieee/2022/10/ieee_day_2022_16-scaled.jpg 2000w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/10/ieee_day_2022_11.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_2]" target="_self"><img src=
              "/images/ieee/2022/10/ieee_day_2022_11.jpg" width="900" height="600" alt="" title="ieee_day_2022_11" aria-label="ieee_day_2022_11" srcset=
              "/images/ieee/2022/10/ieee_day_2022_11-200x133.jpg 200w, /images/ieee/2022/10/ieee_day_2022_11-400x267.jpg 400w, /images/ieee/2022/10/ieee_day_2022_11-600x400.jpg 600w, /images/ieee/2022/10/ieee_day_2022_11-800x533.jpg 800w, /images/ieee/2022/10/ieee_day_2022_11.jpg 900w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/10/ieee_day_2022_12.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_2]" target="_self"><img src=
              "/images/ieee/2022/10/ieee_day_2022_12.jpg" width="900" height="600" alt="" title="ieee_day_2022_12" aria-label="ieee_day_2022_12" srcset=
              "/images/ieee/2022/10/ieee_day_2022_12-200x133.jpg 200w, /images/ieee/2022/10/ieee_day_2022_12-400x267.jpg 400w, /images/ieee/2022/10/ieee_day_2022_12-600x400.jpg 600w, /images/ieee/2022/10/ieee_day_2022_12-800x533.jpg 800w, /images/ieee/2022/10/ieee_day_2022_12.jpg 900w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/10/ieee_day_2022_13.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_2]" target="_self"><img src=
              "/images/ieee/2022/10/ieee_day_2022_13.jpg" width="900" height="600" alt="" title="ieee_day_2022_13" aria-label="ieee_day_2022_13" srcset=
              "/images/ieee/2022/10/ieee_day_2022_13-200x133.jpg 200w, /images/ieee/2022/10/ieee_day_2022_13-400x267.jpg 400w, /images/ieee/2022/10/ieee_day_2022_13-600x400.jpg 600w, /images/ieee/2022/10/ieee_day_2022_13-800x533.jpg 800w, /images/ieee/2022/10/ieee_day_2022_13.jpg 900w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/10/ieee_day_2022_14.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_2]" target="_self"><img src=
              "/images/ieee/2022/10/ieee_day_2022_14.jpg" width="900" height="600" alt="" title="ieee_day_2022_14" aria-label="ieee_day_2022_14" srcset=
              "/images/ieee/2022/10/ieee_day_2022_14-200x133.jpg 200w, /images/ieee/2022/10/ieee_day_2022_14-400x267.jpg 400w, /images/ieee/2022/10/ieee_day_2022_14-600x400.jpg 600w, /images/ieee/2022/10/ieee_day_2022_14-800x533.jpg 800w, /images/ieee/2022/10/ieee_day_2022_14.jpg 900w"
               /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `IEEE DAY`,
  },

  {
    id: 5,
    title: `Seminar on “Bangladesh at Space and James Webb Space Telescope.”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Bangladesh_at_Space_and_James_Webb_space_telescope-01.png"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><p>
  On <strong>Wednesday, September 28th, 2022</strong>, the <strong>IEEE AIUB Student Branch</strong> successfully organized a seminar session titled <strong>“Bangladesh at Space and James Webb Space
  Telescope.”</strong> The session focused on the current state of Bangladesh in the space industry, a brief discussion about the <strong>“Bangabandhu Satellite-1”,</strong> and the noteworthy
  <strong>James Webb Space Telescope</strong>.
</p>
<p>
  <strong>Nafiz Ahmed Chisty</strong>, <em>Advisor, IEEE AIUB Student Branch; Associate Professor; Head (Undergraduate Program), Department of EEE, Faculty of Engineering, AIUB</em>, inaugurated the
  session. He greeted everyone and thanked the IEEE AIUB Student Branch for organizing the event. He briefly talked about satellites and their importance. He also mentioned that he was pleased to see
  the speaker as he was an alumnus of <strong>AIUB</strong>. The speaker <strong>Md Al Imran Sarkar,</strong> <em>Assistant Manager (Satellite Control Engineer), Bangladesh Satellite Company Limited
  (BSCL),</em> greeted and thanked everyone for joining the session. Then he introduced Himself and shared some stories from his experience working with <strong>Thales Alenia Space</strong> in France
  for the training of <strong>Bangabandhu Satellite – 1</strong>. After the introduction, he discussed the <strong>Bangabandhu satellite – 1</strong>. There was a discussion about types of
  satellites, satellite architecture, design, types of equipment, purpose, and the working principles of <strong>Bangabandhu Satellite – 1</strong>. Then he took some queries from the audience for
  the BS1 discussion. After the Q&A, he began his presentation on the <strong>James Webb space telescope (JWST)</strong>. He talked about electromagnetic spectrums, infrared waves, and how
  <strong>JWST</strong> uses its hexagonal mirrors and infrared cameras to capture breathtaking pictures of interstellar space. In the end, he did another Q&A session on the <strong>JWST</strong>
  and ended his speech.
</p>
<p>
  <strong>Prof. Dr. Mohammad Abdul Mannan</strong>, <em>Advisor, IEEE AIUB Student Branch; Director, Faculty of Engineering, AIUB,</em> to deliver the ending speech. He explained that satellite
  communication is a promising sector of Communication Engineering, and he also mentioned that it is a good job sector. After he finished his speech, he gave the speaker a token of appreciation. In
  the end, a photo session was arranged, which concluded the session.
</p>
<p>
  The event was attended by 50+ attendees, including students, faculty, executives, and volunteers.
</p>`,
    },
    category: `seminar`,
  },

  {
    id: 6,
    title: `Members’ Orientation 2022 – IEEE AIUB Student Branch`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/event/Member-orientation-2022.png"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><p>
  The <strong>IEEE AIUB Student Branch</strong> has successfully organized the orientation ceremony for the new members of the <strong>IEEE</strong>. The event took place from <strong>4:30
  pm</strong> to <strong>6:30 pm</strong> at the <strong>Multipurpose Hall, D building, AIUB Campus</strong>. The objective of this event was to welcome the new members, volunteers, and the new
  executive committee for the year 2022 of the <strong>IEEE AIUB Student Branch.</strong>
</p>
<p>
  <strong>Prof. Dr. A.B.M Siddique Hossain</strong>, <em>Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB SB;</em> gave the inaugural speech. He spoke about the <strong>IEEE</strong>, the
  history of the <strong>IEEE AIUB Student Branch</strong>, and its members there. He also discussed his experiences and aspirations for the <strong>IEEE AIUB Student Branch</strong>, as well as how
  a strong network can be developed and shared. Following his remarks, He received a token of appreciation from <strong>Dr. Mohammad Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch;
  Associate Professor, Faculty of Engineering, AIUB;</em> and <strong>Dr. Abdul Mannan</strong>, <em>Director, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch.</em>
</p>
<p>
  After which, <strong>Dr. Mohammad Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch; Associate Professor, Faculty of Engineering, AIUB</em>; welcomed everyone and discussed about the
  <strong>IEEE AIUB Student Branch</strong>. Additionally, he explained how In contrast to a club, <strong>IEEE AIUB Student Branch</strong> offers opportunities and is a global organization.
  Afterward, he gave advice on how to conduct research and how to apply for scholarships. Then he welcomed to the stage <strong>Dr. M. Tanseer Ali</strong>, <em>Associate Professor; Special
  Assistant, Capstone Project, Faculty of Engineering, American International University – Bangladesh; Chairperson, IEEE Young Professionals Bangladesh 2022.</em>
</p>
<p>
  <strong>Dr. M. Tanseer Ali</strong>, <em>Associate Professor, AIUB;</em> emphasized communication skills development, the <strong>IEEE</strong> network, the professional network, and
  <strong>IEEE</strong> accomplishments. He discussed the advantages of <strong>IEEE</strong> membership and the professional world, as well as his expectations and suggestions for strengthening the
  <strong>IEEE AIUB Student Branch</strong>. Then, He received a token of appreciation from <strong>Dr. Mohammad Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch.</em>
</p>
<p>
  The next speaker was <strong>Dr. Abdul Mannan</strong>, <em>Director, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch.</em> He extended a warm greeting to everyone there, spoke
  about the <strong> IEEE AIUB Student Branch</strong>, <strong>IEEE</strong> leadership, and the value of forging relationships with one another, and shared his aspirations for the
  <strong> IEEE AIUB Student Branch</strong>. Following that, a token of appreciation was presented to him by  <strong>Dr. Mohammad Hasan Imam</strong> and <strong>Dr. M. Tanseer
  Ali</strong>.
</p>
<p>
   
</p>
<p>
  In order to share his experiences with <strong>IEEE AIUB SB</strong>, <strong>Moin Uddin</strong>, <em>Former chairperson, IEEE AIUB SB 2018;</em> was then invited to the stage. He talked about
  <strong>IEEE</strong> outings, meetings, tours, and activities as well as his experience with <strong>IEEE</strong> from 2014 to 2018.
</p>
<p>
  Following that, <strong>Kawshik Shikder</strong>, <em>Motivator (2021), IEEE AIUB Student Branch; Assistant Professor, Faculty of Engineering, AIUB;</em> was welcomed. He shared that he is
  departing to pursue higher education and he also discussed the advantages of the IEEE membership and its local organizations. Having followed that, <strong>Dr. Mohammad Hasan Imam</strong> and
  <strong>Chowdhury Akram Hossain</strong>, <em>Advisor, IEEE AIUB Student Branch; Associate Professor, Faculty of Engineering; Special Assistant, Office of Student Affairs (OSA), AIUB;</em> spoke
  about <strong>Kawshik Shikder</strong> and invited all present faculty members of <strong>Faculty of Engineering, AIUB</strong> on stage, and gave him a token of appreciation from <strong>IEEE AIUB
  Student Branch</strong> and from <strong>Faculty of Engineering, AIUB</strong> as well.
</p>
<p>
  Next, <strong>Md. Tauhid Rahman</strong>, <em>Former Chairperson, IEEE AIUB SB 2019;</em> shared his experience with <strong>IEEE AIUB SB</strong> and explained the importance of communication. He
  then asked everyone to visit the website of the <strong>IEEE AIUB Student Branch.</strong>
</p>
<p>
  After that, the Executive Committee members of the I<strong>EEE AIUB Student Branch</strong> of <strong>2021,</strong> were given the certificate of appreciation by <strong>Dr. Mohammad Hasan
  Imam</strong>, <em>Counselor, IEEE AIUB Student Branch; and</em> then he invited <strong>MD. Saniat Rahman Zishan</strong>, <em>Advisor, IEEE AIUB Student Branch; Associate Professor, Head
  (Undergraduate Program), Department of COE, Faculty of Engineering, AIUB; and</em> <strong>Chowdhury Akram Hossain</strong>, <em>Advisor, IEEE AIUB Student Branch; Associate Professor, Faculty of
  Engineering; Special Assistant, Office of Student Affairs (OSA), AIUB;</em> to announce the new executive committee of <strong>IEEE AIUB Student Branch</strong> for the year of
  <strong>2022</strong>. After that, <strong>Dr. Mohammad Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch;</em> presented the token of appreciation to <strong>MD. Saniat Rahman
  Zishan</strong> and <strong>Chowdhury Akram Hossain.</strong>
</p>
<p>
  Then, <strong>MD. Saniat Rahman Zishan</strong>, <strong>Chowdhury Akram Hossain,</strong> and <strong>Dr. M. Tanseer Ali</strong> presented the token of appreciation to <strong>Dr. Mohammad Hasan
  Imam.</strong>
</p>
<p>
  After that, <strong>MD. Saniat Rahman Zishan</strong>, <em>Advisor, IEEE AIUB Student Branch;</em> introduced the new <strong>IEEE AIUB Student Branch</strong> volunteers for the year 2022. A
  fantastic cultural event and photo session followed that. Lastly. The participants were then provided kits and meals.
</p>
<p>
  The event was attended by 150+ attendees, including members as well as faculties, executives, and volunteers of the <strong>IEEE AIUB Student Branch</strong>.
</p>`,
    },
    category: `Orientation`,
  },

  {
    id: 7,
    title: `Seminar on “Biomedical Research for Sustainable Development.” organized by CBR & IEEE EMBS AIUB Chapter`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Biomedical-Research4-01.png"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On <strong>Wednesday, 27, July 2022</strong>, the <strong>Center for Biomedical Research (CBR)</strong> under <strong>Dr. Anwarul Abedin Research Institute, AIUB</strong> in collaboration
            with the <strong>IEEE Engineering in Medicine and Biology Society AIUB Chapter</strong> successfully hosted a Seminar session titled – <strong>“Biomedical Research for Sustainable
            Development”</strong>. The objective of this seminar was to offer a series of useful opinions involving the opportunities and obstacles of researching and developing methods to increase
            sustainability in the biomedical field.
          </p>
          <p>
            <strong>Dr. Md. Abdul Mannan</strong><em>, Director, Faculty of Engineering, AIUB;</em> inaugurated the seminar. At first, he welcomed everyone and introduced himself. Then he talked
            briefly about the field of Biomedical Engineering and the importance of sustainability. Afterward, he thanked the <strong>Center for Biomedical Research (CBR)</strong> under <strong>Dr.
            Anwarul Abedin Research Institute, AIUB</strong>, and <strong>IEEE EMBS AIUB Chapter</strong> for organizing the seminar and thanked the people who participated in the event.
          </p>
          <p>
            The first speaker of the event was <strong>Dr. Mohammad Hasan Imam</strong><em>,</em> <em>Associate Professor, Faculty of Engineering, AIUB</em>. First, He welcomed the audience. The
            honorable speaker then briefly explained the focus of his session and explained <strong>EMBS</strong> to everyone. The speaker then discussed the sustainability goals published by United
            Nations (3 and 9). He reviewed the Bangladeshi perspective of biomedical engineering and explained various technics of Biomedical imaging, rehabilitation engineering, pacemakers, and
            sensor-based early disease detection systems. Afterward, he discussed publishers named <strong>BMES, IFMBE</strong>, and <strong>Nature</strong>. Lastly, he showed activities and awards
            achieved by the <strong>IEEE EMBS AIUB Chapter</strong>. He concluded his speech by thanking everyone.
          </p>
          <p>
            Later, The second speaker of the session<strong>, Humayra Fredous,</strong> <em>Deputy Director,</em> <em>Center for Biomedical Research (CBR), Dr. Anwarul Abedin Research Institute,
            AIUB</em><em>;</em> <em>Head-in-Charge and Associate Professor in the Department of Physics, AIUB;</em> welcomed everyone and specially thanked <strong>Dr. Mohammad Hasan Imam</strong>
            for his session<em>.</em> The speaker then discussed the current scenario of the biomedical field and showed some illustrations of how medical technology works now. She explained the
            areas of the biomedical field such as Medical Physics, Radiation therapy, Dosimetry, and Cancer treatment. Thereafter, she briefly discussed Neural Fields Theory, Brain dynamics, Linear
            Accelerator, Nuclear Medicine Biophysics, and methodologies regarding the Biomedical sector. Subsequently, she discussed sustainable development goals No. 3, 4, and 17 and showed how
            these goals can help to improve the effectiveness of Biomedical technology. Lastly, she opened the Q&A session and answered the questions from the audience properly, and ended her
            session by thanking everyone.
          </p>
          <p>
            Afterward<strong>, Dr. Md. Abdur Rahman</strong>, <em>Associate Dean, Faculty of Engineering, AIUB,</em> and <strong>Dr. Md. Abdul Mannan,</strong> <em>Director, Faculty of Engineering,
            AIUB; d</em>elivered the tokens of appreciation to the honorable speakers, <strong>Dr. Humayra Fredous,</strong> and <strong>Dr. Mohammad Hasan Imam</strong><em>.</em>
          </p>
          <p>
            At the end of the seminar, the concluding speech was given by <strong>Dr. Md. Abdur Rahman</strong>, <em>Associate Dean, Faculty of Engineering, AIUB;</em> where he addressed the ethical
            aspects of the engineering field. He pointed out the misconceptions of people regarding the connection between doctors and engineers and explained how we can work in harmony to solve such
            problems. Later, he concluded his speech by thanking the honorable speaker and thanking the initiatives taken by the <strong>Center for Biomedical Research (CBR)</strong> under
            <strong>Dr. Anwarul Abedin Research Institute, AIUB</strong>, and <strong>IEEE EMBS AIUB Chapter.</strong>
          </p>
          <p>
            The event was attended by 50+ attendees, including students as well as faculties, executives, and volunteers.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `seminar`,
  },

  {
    id: 8,
    title: `IEEE AIUB Student Branch organized “IEEE Student Professional Awareness Venture (SPAVe 5.0)”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/spave.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            The <strong>IEEE AIUB Student Branch</strong> successfully organized <strong>IEEE Student Professional Awareness Venture (SPAVe 5.0)</strong> through the virtual
            platform of ZOOM Meeting App on 18<sup>th</sup> December 2021. This IEEE USA branded venture was supported by IEEE USA, IEEE Region 10, IEEE Bangladesh Section, IEEE Young
            Professionals Bangladesh, and IEEE Region-10 Student Activities Committee. The major focus of the event was a series of professional and career-focused sessions centering on
            professional development. The daylong venture was inaugurated with an opening remark by <strong>Dr. Mohammad Hasan Imam</strong>, <em>Associate Professor, Faculty of
            Engineering, AIUB; Counselor, IEEE AIUB Student Branch (SB); Advisor, IEEE EMBS AIUB SB Chapter; Secretary, IEEE EMBS Bangladesh Chapter</em> who emphasized the issue of these
            professional developmental activities and how engagement in them can allows learners grow and thrive. The first session of the venture titled <strong>“Leadership Practice for
            Engineers”</strong> was led by <strong>Almeer Ahsan Asif</strong>, <em>Project Lead, Senior Manager, and Head of Skills Development and Training, BYLC.</em> He
            conversed about how engineers are getting involved in entrepreneurship and how they can branch out into other fields. He also addressed the distinction between leader and leadership, as
            well as how everyone may exert leadership. Another session titled <strong>“Upskilling and Reskilling for Career Growth”</strong> was conducted by <strong>Dr. Saaveethya
            Sivakumar</strong>, <em>Lecturer, Curtin University Malaysia; Committee Chair, IEEE Region 10 (Asia Pacific) Young Professionals</em>. She discussed the necessities of establishing
            hard skills in addition to soft skills. She highlighted the significance of mapping skilling in order to be long-term effective. Later, the delegate of IEEE Bangladesh Young
            Professionals<strong>, </strong><strong>S M Robiul Islam</strong><em>, Industry Activity Coordinator, IEEE Bangladesh</em> <em>Section</em> presented the significance of
            data science, mobile communication technologies, and data science’s implications in our country. After that another session titled <strong>“The Art of Becoming a
            Professional”</strong> was conducted by <strong>Mashrur H. Shurid</strong>, <em>Co-founder & CEO, iPAGE BANGLADESH LIMITED</em>. He demonstrated how to function
            adequately that is authentic, high-quality, confidential and also highlighted about professionalism’s features.
          </p>
          <p>
            After lunch break, the next session of the venture, <strong>“The Role of a Strong Mind for Getting Success in Engineering”</strong> was conducted by <strong>Shams Shad
            Rafi,</strong> <em>Project Lead, Enosis Solutions.</em> The session was about the significance of problem-solving capabilities by engineers and addressed the need of
            establishing a goal for graduates. Later, <strong>Anamika Bhakta,</strong> <em>Executive Vice President, Robi Axiata Ltd; Senior Member, IEEE</em> presented a keynote
            speech as the delegate of IEEE Bangladesh Women in Engineering (WIE) Affinity Group<strong>.</strong> She exemplified some of the difficulties and opportunities faced by women along
            with fundamental employee engagement and employment rights. After that, the first Bangladeshi ever<strong>, Dr. Celia Shahnaz</strong>, <em>IEEE WIE Chair-Elect 2022; SMIEEE, Fellow
            IEB; Professor, Department of EEE, BUET</em> presented her magnificent speech for this grand venture as the delegate of IEEE Bangladesh Section. She addressed about membership
            expansion and renewable & sustainable empowerment. She encouraged WIE along with other IEEE members, to be more engaged in career-related pursuits at the conclusion of her talk, and
            also remarked that she would be willing to assist if expected. At the end sessions, virtual token of appreciation was presented to the speakers. The day-long venture was concluded with a
            closing speech from <strong>Dr. M. Moshiul Hoque,</strong> <em>Professor, CSE, CUET; Dean, Faculty of Electrical & Computer Engineering, CUET; Chair, IEEE Bangladesh
            Section; Senior Member, IEEE,</em> who acknowledged the involvement of attendees in such a courageous venture of IEEE. He then remarked about the significance of IEEE membership and
            how it can improve one’s professional career. The <strong>IEEE SPAVe 5.0</strong> came to an end with a group photo session of the speakers, guests, faculty members,
            organizing team, and participants. The magnificent venture was graced by the presence of <strong>Mr. Kawshik Shikder,</strong> <em>Motivator, IEEE AIUB Student Branch; Assistant
            Professor, Faculty of Engineering, AIUB</em> along with other faculty members of AIUB. The event drew more than 70 registered attendees from several universities, as well as
            Executive members and Volunteers from the branch.
          </p>
        </div>
        <div>
          <div>
            <div>
              <a href="/images/ieee/2020/09/spav01.png" rel="noreferrer" data-rel="iLightbox[gallery_image_3]" target="_self"><img src=
              "/images/ieee/2020/09/spav01.png" width="800" height="450" alt="" title="spav01" aria-label="spav01" srcset=
              "/images/ieee/2020/09/spav01-200x113.png 200w, /images/ieee/2020/09/spav01-400x225.png 400w, /images/ieee/2020/09/spav01-600x338.png 600w, /images/ieee/2020/09/spav01.png 800w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2020/09/spav02.png" rel="noreferrer" data-rel="iLightbox[gallery_image_3]" target="_self"><img src=
              "/images/ieee/2020/09/spav02.png" width="800" height="450" alt="" title="spav02" aria-label="spav02" srcset=
              "/images/ieee/2020/09/spav02-200x113.png 200w, /images/ieee/2020/09/spav02-400x225.png 400w, /images/ieee/2020/09/spav02-600x338.png 600w, /images/ieee/2020/09/spav02.png 800w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2020/09/spav03.png" rel="noreferrer" data-rel="iLightbox[gallery_image_3]" target="_self"><img src=
              "/images/ieee/2020/09/spav03.png" width="800" height="449" alt="" title="spav03" aria-label="spav03" srcset=
              "/images/ieee/2020/09/spav03-200x112.png 200w, /images/ieee/2020/09/spav03-400x225.png 400w, /images/ieee/2020/09/spav03-600x337.png 600w, /images/ieee/2020/09/spav03.png 800w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2020/09/spav04.png" rel="noreferrer" data-rel="iLightbox[gallery_image_3]" target="_self"><img src=
              "/images/ieee/2020/09/spav04.png" width="800" height="450" alt="" title="spav04" aria-label="spav04" srcset=
              "/images/ieee/2020/09/spav04-200x113.png 200w, /images/ieee/2020/09/spav04-400x225.png 400w, /images/ieee/2020/09/spav04-600x338.png 600w, /images/ieee/2020/09/spav04.png 800w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2020/09/spav05.png" rel="noreferrer" data-rel="iLightbox[gallery_image_3]" target="_self"><img src=
              "/images/ieee/2020/09/spav05.png" width="800" height="449" alt="" title="spav05" aria-label="spav05" srcset=
              "/images/ieee/2020/09/spav05-200x112.png 200w, /images/ieee/2020/09/spav05-400x225.png 400w, /images/ieee/2020/09/spav05-600x337.png 600w, /images/ieee/2020/09/spav05.png 800w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2020/09/spav06.png" rel="noreferrer" data-rel="iLightbox[gallery_image_3]" target="_self"><img src=
              "/images/ieee/2020/09/spav06.png" width="800" height="449" alt="" title="spav06" aria-label="spav06" srcset=
              "/images/ieee/2020/09/spav06-200x112.png 200w, /images/ieee/2020/09/spav06-400x225.png 400w, /images/ieee/2020/09/spav06-600x337.png 600w, /images/ieee/2020/09/spav06.png 800w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2020/09/spav07.png" rel="noreferrer" data-rel="iLightbox[gallery_image_3]" target="_self"><img src=
              "/images/ieee/2020/09/spav07.png" width="800" height="450" alt="" title="spav07" aria-label="spav07" srcset=
              "/images/ieee/2020/09/spav07-200x113.png 200w, /images/ieee/2020/09/spav07-400x225.png 400w, /images/ieee/2020/09/spav07-600x338.png 600w, /images/ieee/2020/09/spav07.png 800w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2020/09/spav08.png" rel="noreferrer" data-rel="iLightbox[gallery_image_3]" target="_self"><img src=
              "/images/ieee/2020/09/spav08.png" width="800" height="450" alt="" title="spav08" aria-label="spav08" srcset=
              "/images/ieee/2020/09/spav08-200x113.png 200w, /images/ieee/2020/09/spav08-400x225.png 400w, /images/ieee/2020/09/spav08-600x338.png 600w, /images/ieee/2020/09/spav08.png 800w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2020/09/spav09.png" rel="noreferrer" data-rel="iLightbox[gallery_image_3]" target="_self"><img src=
              "/images/ieee/2020/09/spav09.png" width="800" height="449" alt="" title="spav09" aria-label="spav09" srcset=
              "/images/ieee/2020/09/spav09-200x112.png 200w, /images/ieee/2020/09/spav09-400x225.png 400w, /images/ieee/2020/09/spav09-600x337.png 600w, /images/ieee/2020/09/spav09.png 800w"
               /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `flagship event`,
  },

  {
    id: 9,
    title: `AIUBians on ERASMUS`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/erasmus.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 21<sup>st</sup> November 2021, the <strong>IEEE AIUB Student Branch</strong> successfully organized a webinar titled <strong>“AIUBians on ERASMUS</strong>” through
            the virtual platform of the ZOOM Meeting App. The webinar was conducted by AIUB alumni who achieved the <strong>Erasmus Mundus Scholarship</strong> for their post-graduate
            studies over the years. The aim of the event was to concentrate on the opportunities of obtaining the prestigious scholarship for higher education.
          </p>
          <p>
            The first session was conducted by <strong>Mr. Akib Jayed Islam,</strong> <em>COSI 2020-22. </em>He proceeded by introducing himself and sharing his expertise in the field
            with the Erasmus+ program in Computational Color and Spectral Imaging (COSI). He discussed the enrollment process and how applicants can focus on ensuring that they are better candidates
            for the recruitment process. Following that, <strong>Ms. Tulsi Chowdhury, </strong><em>SSI+ 2018-20 Graduate,</em> took the platform and described the Erasmus+ program on
            Smart Systems Integration (SSI+). She gave an overview of the program as well as the application procedures.
          </p>
          <p>
            After that, <strong>Mr.</strong> <strong>M. Mukit,</strong> <em>PIXNET 2018-20 Graduate</em>, <strong>Mr.</strong> <strong>Kazi Shoffiuddin
            Roni,</strong> <em>REM 2021-2023, </em><strong>Mr. S. M. Masum Ahmed,</strong> <em>SMACCs 2019-2021 Graduate, </em>and <strong>Mr. M. Ragib Shahriar
            Islam,</strong> <em>MAIA 2020-2022,</em> took turns on the platform, one after the other, and discussed in detail their respective study programs. They discussed other
            photonic programs in Erasmus, EMJMD Europhotonics, PSRS, SmartNet, Specializations A-Renewable offshore energy systems engineering, Associated partners and SMACCs Alumni, countries,
            semesters, and universities in MAIA, as well as their personal observations.
          </p>
          <p>
            Later, <strong>Mr. Mohammad Irfan Yousuf, </strong><em>STEPS 2018-2020 Graduate,</em> <strong>Mr. Siam Hasan Khan,</strong> <em>STEPS 2018-2020
            Graduate,</em> <strong>Mr. Fakrul Islam Tushar,</strong> <em>MAIA 2017-19 Graduate</em>, <strong>Mr. Kazi Ahmed Asif Fuad,</strong> <em>IPCV 2018-2020 Graduate;
            Assistant Professor (on study leave), Faculty of Engineering, AIUB; </em>discussed the value of a good “Motivation Letter” and good writing skills. They encouraged the participants
            to apply for the programs by emphasizing some of the significant advantages they had received and by highlighting the achievement of many AIUB alumni who have accomplished the
            Erasmus Mundus Joint Master’s Degree. The session was graced by the presence of 100+ registered participants of AIUB along with the branch’s Executive members and volunteers.
          </p>
          <div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/aiubonerasmus01.png" rel="noreferrer" data-rel="iLightbox[gallery_image_4]" target="_self"><img src=
                "/images/ieee/2020/09/aiubonerasmus01.png" width="800" height="395" alt="" title="aiubonerasmus01" aria-label="aiubonerasmus01" srcset=
                "/images/ieee/2020/09/aiubonerasmus01-200x99.png 200w, /images/ieee/2020/09/aiubonerasmus01-400x198.png 400w, /images/ieee/2020/09/aiubonerasmus01-600x296.png 600w, /images/ieee/2020/09/aiubonerasmus01.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/aiubonerasmus02.png" rel="noreferrer" data-rel="iLightbox[gallery_image_4]" target="_self"><img src=
                "/images/ieee/2020/09/aiubonerasmus02.png" width="800" height="395" alt="" title="aiubonerasmus02" aria-label="aiubonerasmus02" srcset=
                "/images/ieee/2020/09/aiubonerasmus02-200x99.png 200w, /images/ieee/2020/09/aiubonerasmus02-400x198.png 400w, /images/ieee/2020/09/aiubonerasmus02-600x296.png 600w, /images/ieee/2020/09/aiubonerasmus02.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/aiubonerasmus03.png" rel="noreferrer" data-rel="iLightbox[gallery_image_4]" target="_self"><img src=
                "/images/ieee/2020/09/aiubonerasmus03.png" width="800" height="398" alt="" title="aiubonerasmus03" aria-label="aiubonerasmus03" srcset=
                "/images/ieee/2020/09/aiubonerasmus03-200x100.png 200w, /images/ieee/2020/09/aiubonerasmus03-400x199.png 400w, /images/ieee/2020/09/aiubonerasmus03-600x299.png 600w, /images/ieee/2020/09/aiubonerasmus03.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/aiubonerasmus04.png" rel="noreferrer" data-rel="iLightbox[gallery_image_4]" target="_self"><img src=
                "/images/ieee/2020/09/aiubonerasmus04.png" width="800" height="450" alt="" title="aiubonerasmus04" aria-label="aiubonerasmus04" srcset=
                "/images/ieee/2020/09/aiubonerasmus04-200x113.png 200w, /images/ieee/2020/09/aiubonerasmus04-400x225.png 400w, /images/ieee/2020/09/aiubonerasmus04-600x338.png 600w, /images/ieee/2020/09/aiubonerasmus04.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/aiubonerasmus05.png" rel="noreferrer" data-rel="iLightbox[gallery_image_4]" target="_self"><img src=
                "/images/ieee/2020/09/aiubonerasmus05.png" width="800" height="404" alt="" title="aiubonerasmus05" aria-label="aiubonerasmus05" srcset=
                "/images/ieee/2020/09/aiubonerasmus05-200x101.png 200w, /images/ieee/2020/09/aiubonerasmus05-400x202.png 400w, /images/ieee/2020/09/aiubonerasmus05-600x303.png 600w, /images/ieee/2020/09/aiubonerasmus05.png 800w"
                 /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Webinar`,
  },

  {
    id: 10,
    title: `Webinar on “Insights into the Single Line Diagram, Layout & Panel Design of MVLV Substations”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Cover.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 17<sup>th</sup> November 2021, the <strong>IEEE AIUB Student Branch</strong> in collaboration with the <strong>IEEE IAS AIUB Student
            Branch</strong> <strong>Chapter</strong> successfully organized a webinar session titled <strong>“Insights into the Single Line Diagram, Layout and Panel Design of MV/LV
            Substations”</strong> through the virtual platform of GOOGLE MEET. The major objectives of this webinar were to provide a basic understanding of single line diagrams in the
            power generating sector as well as constructive feedback on the challenges and opportunities that this profession offers.
          </p>
          <p>
            The event was inaugurated by the enriching remarks from <strong>Prof. Dr. ABM Siddique Hossain,</strong> <em>Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student
            Branch;</em> who gave a brief synopsis of the power generation industry as well as the appraisal of power generation sites and the available potential in this area.
            Thereafter, the honorable speaker <strong>Mr. Al Amin Hossain</strong>, <em>Assistant Manager, Engineering & Design (Electrical), Reverie Power & Automation Engineering
            Ltd. </em>started the session by thanking the organizers for taking such a gamble in organizing this informative event. He then went over the various components of electricity
            generation, briefly describing the IoT technologies, why it is essential, and the doctrines of IoT. He went into great detail in his talks about the usage of DC in substations,
            switchgear, a single line schematic of a substation, power triangle, load flow, PFI section, and load distribution. Finally, <strong>Mr. Al Amin Hossain</strong> wrapped up the
            discussion by showcasing a project that his organization performed at AIUB and expressing his gratitude towards everyone. Following that, the speaker engaged in an interactive
            question-and-answer session in which he addressed all of the audience’s major concerns.
          </p>
          <p>
            Later, <strong>Dr. Mohammad Hasan Imam,</strong> <em>Counselor, IEEE AIUB Student Branch; Advisor, IEEE AIUB Student Branch EMBS Chapter; Secretary, IEEE Bangladesh Section EMBS
            Chapter; Associate Professor, Faculty of Engineering, AIUB</em> took the platform and presented the Token of Appreciation to the honorable speaker. And then he gave the concluding
            remarks where he appreciated the initiative taken by the <strong>IEEE AIUB Student Branch</strong> for organizing this webinar session and thanked the honorable speaker. The
            event was graced by the presence of <strong>Mr. Kawshik Shikder</strong>, <em>Motivator, IEEE AIUB Student Branch, Assistant. Professor, Faculty of Engineering, AIUB</em>. More
            than 85 registered participants, including students from several universities, as well as Executive members and Volunteers from the branch. were present in the event.
          </p>
          <p>
             
          </p>
          <div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/eeebe001.png" rel="noreferrer" data-rel="iLightbox[gallery_image_5]" target="_self"><img src=
                "/images/ieee/2020/09/eeebe001.png" width="800" height="378" alt="" title="eeebe001" aria-label="eeebe001" srcset=
                "/images/ieee/2020/09/eeebe001-200x95.png 200w, /images/ieee/2020/09/eeebe001-400x189.png 400w, /images/ieee/2020/09/eeebe001-600x284.png 600w, /images/ieee/2020/09/eeebe001.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/eeebe002.png" rel="noreferrer" data-rel="iLightbox[gallery_image_5]" target="_self"><img src=
                "/images/ieee/2020/09/eeebe002.png" width="800" height="378" alt="" title="eeebe002" aria-label="eeebe002" srcset=
                "/images/ieee/2020/09/eeebe002-200x95.png 200w, /images/ieee/2020/09/eeebe002-400x189.png 400w, /images/ieee/2020/09/eeebe002-600x284.png 600w, /images/ieee/2020/09/eeebe002.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/eeebe003.png" rel="noreferrer" data-rel="iLightbox[gallery_image_5]" target="_self"><img src=
                "/images/ieee/2020/09/eeebe003.png" width="800" height="378" alt="" title="eeebe003" aria-label="eeebe003" srcset=
                "/images/ieee/2020/09/eeebe003-200x95.png 200w, /images/ieee/2020/09/eeebe003-400x189.png 400w, /images/ieee/2020/09/eeebe003-600x284.png 600w, /images/ieee/2020/09/eeebe003.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/eeebe004.png" rel="noreferrer" data-rel="iLightbox[gallery_image_5]" target="_self"><img src=
                "/images/ieee/2020/09/eeebe004.png" width="800" height="378" alt="" title="eeebe004" aria-label="eeebe004" srcset=
                "/images/ieee/2020/09/eeebe004-200x95.png 200w, /images/ieee/2020/09/eeebe004-400x189.png 400w, /images/ieee/2020/09/eeebe004-600x284.png 600w, /images/ieee/2020/09/eeebe004.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/eeebe005.png" rel="noreferrer" data-rel="iLightbox[gallery_image_5]" target="_self"><img src=
                "/images/ieee/2020/09/eeebe005.png" width="800" height="378" alt="" title="eeebe005" aria-label="eeebe005" srcset=
                "/images/ieee/2020/09/eeebe005-200x95.png 200w, /images/ieee/2020/09/eeebe005-400x189.png 400w, /images/ieee/2020/09/eeebe005-600x284.png 600w, /images/ieee/2020/09/eeebe005.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/eeebe004.png" rel="noreferrer" data-rel="iLightbox[gallery_image_5]" target="_self"><img src=
                "/images/ieee/2020/09/eeebe004.png" width="800" height="378" alt="" title="eeebe004" aria-label="eeebe004" srcset=
                "/images/ieee/2020/09/eeebe004-200x95.png 200w, /images/ieee/2020/09/eeebe004-400x189.png 400w, /images/ieee/2020/09/eeebe004-600x284.png 600w, /images/ieee/2020/09/eeebe004.png 800w"
                 /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `ias`,
  },

  {
    id: 11,
    title: `IEEE AIUB Student Branch organized a Webinar on “Scope of Research on Biomedical Engineering”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/cover.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 11<sup>th</sup> November 2021, the <strong>IEEE AIUB Student Branch </strong>in collaboration with the<strong> IEEE EMBS AIUB Student Branch
            Chapter </strong>successfully organized a webinar session titled <strong>“Scope of Research on Biomedical Engineering”</strong> through the virtual platform of
            the <strong>GOOGLE MEET</strong>. The major focus of this webinar was to enlighten the participants about the current research opportunities and advanced technologies of Biomedical
            Engineering for the benefit of humanity in medical science. The event began with the illuminating inaugural speech by <strong>Prof. Dr. ABM Siddique
            Hossain</strong>, <em>Advisor, IEEE AIUB Student Branch; Dean, Faculty of Engineering, AIUB,</em> who delivered a brief overview of the benefits of medical research to humanity
            before moving on to a discussion of sophisticated biomedical engineering technology.
          </p>
          <p>
            Later on, the host of the session then made a formal introduction and gave the floor to the esteemed speaker <strong>Dr. Muhammad Tarik Arafat,</strong> <em>Assistant Professor,
            Department of Biomedical Engineering, BUET, </em>to emphasize his enlightening presentation. The speaker initiated the session by reintroducing himself to the audience. He next
            reviewed the various areas of biomedical engineering, briefly explaining biomechanics and demonstrating the benefits. The speaker also addressed sports mechanics, walking patterns, cell
            mechanics, 3D printing, and biosensors momentarily. Dr. Arafat then moved on to discuss Tissue Engineering and Regenerative Medicine, Organ Printing, and Neural Engineering. After that he
            proceeded to talk about medication research, BME Laboratory Facilities, Smart nanofiber applications, and a few famous capstone project examples. Finally, Dr. Arafat closed his
            presentation by discussing potential Gait Assistive Technology and thanked everyone. Following that, there was an interactive Question-Answer session in which the speaker answered all of
            the audience’s major concerns.
          </p>
          <p>
            Later on, <strong>Dr. Mohammad Hasan Imam, </strong><em>Counselor, IEEE AIUB Student Branch; Advisor, IEEE AIUB Student Branch EMBS Chapter; Secretary, IEEE Bangladesh Section
            EMBS Chapter; Associate Professor, Faculty of Engineering, AIUB </em>took the platform and presented the virtual token of appreciation to the honorable speaker. And then he gave the
            concluding speech where he appreciated the initiative taken by the student branch to organize this webinar session and thanked the honorable speaker. The session was graced by the
            presence of <strong>Mr. Kawshik Shikder, </strong><em>Motivator, IEEE AIUB Student Branch, Assistant. Professor, Faculty of Engineering, AIUB</em> along with other faculty
            members of AIUB. 100 participants from different universities along with Executive members and Volunteers of the branch were present in the event.
          </p>
          <div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/eeebe001.png" rel="noreferrer" data-rel="iLightbox[gallery_image_6]" target="_self"><img src=
                "/images/ieee/2020/09/eeebe001.png" width="800" height="378" alt="" title="eeebe001" aria-label="eeebe001" srcset=
                "/images/ieee/2020/09/eeebe001-200x95.png 200w, /images/ieee/2020/09/eeebe001-400x189.png 400w, /images/ieee/2020/09/eeebe001-600x284.png 600w, /images/ieee/2020/09/eeebe001.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/eeebe002.png" rel="noreferrer" data-rel="iLightbox[gallery_image_6]" target="_self"><img src=
                "/images/ieee/2020/09/eeebe002.png" width="800" height="378" alt="" title="eeebe002" aria-label="eeebe002" srcset=
                "/images/ieee/2020/09/eeebe002-200x95.png 200w, /images/ieee/2020/09/eeebe002-400x189.png 400w, /images/ieee/2020/09/eeebe002-600x284.png 600w, /images/ieee/2020/09/eeebe002.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/eeebe003.png" rel="noreferrer" data-rel="iLightbox[gallery_image_6]" target="_self"><img src=
                "/images/ieee/2020/09/eeebe003.png" width="800" height="378" alt="" title="eeebe003" aria-label="eeebe003" srcset=
                "/images/ieee/2020/09/eeebe003-200x95.png 200w, /images/ieee/2020/09/eeebe003-400x189.png 400w, /images/ieee/2020/09/eeebe003-600x284.png 600w, /images/ieee/2020/09/eeebe003.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/eeebe004.png" rel="noreferrer" data-rel="iLightbox[gallery_image_6]" target="_self"><img src=
                "/images/ieee/2020/09/eeebe004.png" width="800" height="378" alt="" title="eeebe004" aria-label="eeebe004" srcset=
                "/images/ieee/2020/09/eeebe004-200x95.png 200w, /images/ieee/2020/09/eeebe004-400x189.png 400w, /images/ieee/2020/09/eeebe004-600x284.png 600w, /images/ieee/2020/09/eeebe004.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/eeebe005.png" rel="noreferrer" data-rel="iLightbox[gallery_image_6]" target="_self"><img src=
                "/images/ieee/2020/09/eeebe005.png" width="800" height="378" alt="" title="eeebe005" aria-label="eeebe005" srcset=
                "/images/ieee/2020/09/eeebe005-200x95.png 200w, /images/ieee/2020/09/eeebe005-400x189.png 400w, /images/ieee/2020/09/eeebe005-600x284.png 600w, /images/ieee/2020/09/eeebe005.png 800w"
                 /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `embs`,
  },

  {
    id: 12,
    title: `New Era of Data Science`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/249774690_4545653268814803_382015203504928536_n.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 6<sup>th</sup> November 2021, the <strong>IEEE AIUB Student Branch</strong> in collaboration with the <strong>IEEE Women in Engineering (WIE) Affinity Group AIUB
            Student Branch Chapter </strong>successfully organized a webinar session titled “<strong>New Era of Data Science</strong>” through the virtual platform of <strong>Google
            Meet</strong>. The prime objective of this session was to conduct an elucidative discussion on the huge potential and advanced technologies of quantum computing and data science in the
            modern world for enlightening the young enthusiasts to grasp the right track of their future career in this sector.
          </p>
          <p>
            The inauguration of the event took place with an informative and welcoming speech of <strong>Prof. Dr. ABM Siddique Hossain</strong>,<em> Advisor, IEEE AIUB Student
            Branch;</em> <em>Dean, Faculty of Engineering, AIUB, </em>who had encouraged the participants to learn from the esteemed speaker mentioning the recent job opportunities in this
            field. After the welcome speech, the host introduced and gave the floor to the speaker <strong>Mr.</strong> <strong>Nurul Akter Towhid, </strong><em>Lead data Scientist,
            COEL Inc. </em>for initiating his session. He started the talk with his professional introduction along with the opportunities at COEL Inc. Then, he covered all the basic information
            of data science including the core points to remember from the very beginning of this learning session. The current job opportunities, prevailing misconceptions and the industrial
            requirements to develop a better future in this sector were also portrayed in his informative discussion. Later, an interactive Question-Answer session took place after his presentation
            where the speaker enthusiastically responded to all the queries of the fellow participants and illuminated their minds with his professional knowledge.
          </p>
          <p>
            In the end, <strong>Prof. Hossain</strong> shared the concluding remarks of the session by appreciating the resourceful presentation of the speaker and also presented a token of
            appreciation for conducting the enlightening session. Along with Executive members and volunteers of the branch, more than 95 participants from different universities were present in the
            event. The session was also graced with the presence of <strong>Mr. Kawshik Shikder</strong>, <em>Motivator, IEEE AIUB Student Branch; Asst. Professor, Faculty of Engineering,
            AIUB</em>, <strong>Mr.</strong> <strong>Abu Hena Md Shatil</strong>, <em>Assistant Professor, Faculty of Engineering, AIUB, </em><strong>Mr. Md. Ali
            Noor</strong>, <em>Lecturer, Faculty of Engineering, AIUB</em> and other respected faculty members of AIUB.
          </p>
          <div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/wieieee01.png" rel="noreferrer" data-rel="iLightbox[gallery_image_7]" target="_self"><img src=
                "/images/ieee/2020/09/wieieee01.png" width="800" height="380" alt="" title="wieieee01" aria-label="wieieee01" srcset=
                "/images/ieee/2020/09/wieieee01-200x95.png 200w, /images/ieee/2020/09/wieieee01-400x190.png 400w, /images/ieee/2020/09/wieieee01-600x285.png 600w, /images/ieee/2020/09/wieieee01.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/wieieee02.png" rel="noreferrer" data-rel="iLightbox[gallery_image_7]" target="_self"><img src=
                "/images/ieee/2020/09/wieieee02.png" width="800" height="380" alt="" title="wieieee02" aria-label="wieieee02" srcset=
                "/images/ieee/2020/09/wieieee02-200x95.png 200w, /images/ieee/2020/09/wieieee02-400x190.png 400w, /images/ieee/2020/09/wieieee02-600x285.png 600w, /images/ieee/2020/09/wieieee02.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/wieieee03.png" rel="noreferrer" data-rel="iLightbox[gallery_image_7]" target="_self"><img src=
                "/images/ieee/2020/09/wieieee03.png" width="800" height="380" alt="" title="wieieee03" aria-label="wieieee03" srcset=
                "/images/ieee/2020/09/wieieee03-200x95.png 200w, /images/ieee/2020/09/wieieee03-400x190.png 400w, /images/ieee/2020/09/wieieee03-600x285.png 600w, /images/ieee/2020/09/wieieee03.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/wieieee04.png" rel="noreferrer" data-rel="iLightbox[gallery_image_7]" target="_self"><img src=
                "/images/ieee/2020/09/wieieee04.png" width="800" height="380" alt="" title="wieieee04" aria-label="wieieee04" srcset=
                "/images/ieee/2020/09/wieieee04-200x95.png 200w, /images/ieee/2020/09/wieieee04-400x190.png 400w, /images/ieee/2020/09/wieieee04-600x285.png 600w, /images/ieee/2020/09/wieieee04.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/wieieee05.png" rel="noreferrer" data-rel="iLightbox[gallery_image_7]" target="_self"><img src=
                "/images/ieee/2020/09/wieieee05.png" width="800" height="380" alt="" title="wieieee05" aria-label="wieieee05" srcset=
                "/images/ieee/2020/09/wieieee05-200x95.png 200w, /images/ieee/2020/09/wieieee05-400x190.png 400w, /images/ieee/2020/09/wieieee05-600x285.png 600w, /images/ieee/2020/09/wieieee05.png 800w"
                 /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Webinar`,
  },

  {
    id: 13,
    title: `Webinar session on “Towards Flexible Radio Access Networks for Massive Connectivity in 5G and Beyond” organized by IEEE AIUB Student Branch on the celebration of IEEE Day 2021`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/FB_IMG_1636039759078.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p data-fusion-font="true">
            On 14th October 2021, the IEEE AIUB Student Branch in collaboration with the IEEE Microwave Theory & Techniques Society (MTT-S) AIUB SB Chapter, successfully organized a webinar
            session on the celebration of the grand IEEE Day 2021 titled “Towards Flexible Radio Access Networks for Massive Connectivity in 5G and Beyond” through the virtual platform of Zoom
            Meeting. The core objective of the session was to enlighten the participants with the advanced technology of 5G radio connectivity covering the topics of Network Slicing, Open RAN, and
            Advanced Multiple Access of NOMA principles.
          </p>
          <p data-fusion-font="true">
            The event started with the elucidative inaugurating words of Prof. Dr. ABM Siddique Hossain, Advisor, IEEE AIUB Student Branch; Dean, Faculty of Engineering, AIUB, who thanked the
            organizer for arranging the event on an emerging topic of 5G technology. He gave a short insight into the network generation of Bangladesh and continued with the further discussion on 5G
            deployment, Radio Access and Terminals. Then, an official introduction was given to the esteemed speaker, S. M. Riazul Islam, Postdoctoral Fellow, Memorial University of Newfoundland and
            Inha University; Assistant Professor, Department of Computer Science and Engineering and Department of Artificial Intelligence, School of Software Convergence, Sejong University, South
            Korea by the host of the session and also requested him to take the floor for demonstrating his enlightening presentation kindly.
          </p>
          <p data-fusion-font="true">
            Mr. Islam started by thanking the Student Branch for inviting him to this grand session and portrayed a concise introduction of his affiliations along with the contents of the entire
            discussion. He then started with the ITU-R References of 5G recommendations and respective performance targets. Moving into the part of Network slicing, he discussed Network Slicing
            realization, its categories with examples, current enabling technologies, and continued with the 5G Network building blocks. After giving an insight into the Virtualized (vRAN) and Open
            RAN in 5G, he presented the Advance Multiple Access Technologies covering FDMA, TDMA and CDMA. In the end, the speaker focused ponderously on NOMA principles portraying the advantages,
            IRS-NOMA and also the Research directions on it. He concluded his speech by giving the touch of Flexible RAN for 5G and beyond, showing the Service Based Architecture (SBA).
          </p>
          <p data-fusion-font="true">
            After that, an interactive Question-Answer session took place where the speaker enthusiastically responded to all the queries of the fellow participants and illuminated their minds with
            further explanation. In the end, Dr. M. Tanseer Ali, Associate Professor, Dept. of EEE, Faculty of Engineering, AIUB; Former Advisor, IEEE MTT-S AIUB Student Branch Chapter shared his
            concluding remarks regarding the session and also presented the token of appreciation to the honorable speaker. He also invited the speaker to the charming campus of American
            International University-Bangladesh (AIUB) once the period of pandemic terminated all over the globe and thanked him warmly for conducting the informative webinar session. Along with
            Executive members and volunteers of the branch, more than 70+ participants from different universities were present in this session. The session was graced with the presence of Mr.
            Kawshik Shikder, Motivator, IEEE AIUB SB, Asst. Professor, Faculty of Engineering, AIUB, Dr. Mohammad Mahbub Rabbani, Associate Professor, Department of Chemistry, AIUB, and other faculty
            members of AIUB.
          </p>
          <div>
            <div>
              <div>
                <a href="/images/ieee/2021/11/1.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_8]" target="_self"><img src=
                "/images/ieee/2021/11/1.jpg" width="800" height="426" alt="" title="1" aria-label="1" srcset=
                "/images/ieee/2021/11/1-200x107.jpg 200w, /images/ieee/2021/11/1-400x213.jpg 400w, /images/ieee/2021/11/1-600x320.jpg 600w, /images/ieee/2021/11/1.jpg 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2021/11/2.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_8]" target="_self"><img src=
                "/images/ieee/2021/11/2.jpg" width="800" height="415" alt="" title="2" aria-label="2" srcset=
                "/images/ieee/2021/11/2-200x104.jpg 200w, /images/ieee/2021/11/2-400x208.jpg 400w, /images/ieee/2021/11/2-600x311.jpg 600w, /images/ieee/2021/11/2.jpg 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2021/11/3.png" rel="noreferrer" data-rel="iLightbox[gallery_image_8]" target="_self"><img src=
                "/images/ieee/2021/11/3.png" width="800" height="429" alt="" title="3" aria-label="3" srcset=
                "/images/ieee/2021/11/3-200x107.png 200w, /images/ieee/2021/11/3-400x215.png 400w, /images/ieee/2021/11/3-600x322.png 600w, /images/ieee/2021/11/3.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2021/11/4.png" rel="noreferrer" data-rel="iLightbox[gallery_image_8]" target="_self"><img src=
                "/images/ieee/2021/11/4.png" width="800" height="450" alt="" title="4" aria-label="4" srcset=
                "/images/ieee/2021/11/4-200x113.png 200w, /images/ieee/2021/11/4-400x225.png 400w, /images/ieee/2021/11/4-600x338.png 600w, /images/ieee/2021/11/4.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2021/11/5.png" rel="noreferrer" data-rel="iLightbox[gallery_image_8]" target="_self"><img src=
                "/images/ieee/2021/11/5.png" width="800" height="500" alt="" title="5" aria-label="5" srcset=
                "/images/ieee/2021/11/5-200x125.png 200w, /images/ieee/2021/11/5-400x250.png 400w, /images/ieee/2021/11/5-600x375.png 600w, /images/ieee/2021/11/5.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a rel="noreferrer" data-rel="iLightbox[gallery_image_8]" target="_self"><img src="" width="" height="" alt="" title="" aria-label="" /></a>
              </div>
            </div>
          </div>
          <p data-fusion-font="true">
             
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `mtts`,
  },

  {
    id: 14,
    title: `IEEE AIUB Student Branch organized a Distinguished Lecture Session on “Crowdsourcing IoT Wireless Energy Services in Smart Cities”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/FB_IMG_1636039776191.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            <span data-fusion-font="true">On 7</span><sup><span data-fusion-font="true">th</span></sup> <span data-fusion-font="true">October 2021, the</span> <strong data-fusion-font="true">IEEE
            AIUB Student Branch</strong> <span data-fusion-font="true">in collaboration with the</span> <strong data-fusion-font="true">IEEE Computer Society AIUB Student Branch Chapter</strong>
            <span data-fusion-font="true">successfully organized the Distinguished Lecture Session titled “</span><strong data-fusion-font="true">Crowdsourcing IoT Wireless Energy Services in Smart
            Cities</strong><span data-fusion-font="true">” through the virtual platform of the</span> <strong data-fusion-font="true">ZOOM Meeting</strong><span data-fusion-font="true">. The prime
            objective of this session was to enlighten the participants about the primary and brief concepts of Crowdsourcing IoT Wireless Energy, aspects of IoT, and the importance of wireless
            energy.</span>
          </p>
          <p>
            <span data-fusion-font="true">The event was inaugurated with a warm welcoming elocution of</span> <strong data-fusion-font="true">Dr. Mohammad Hasan Imam</strong><span data-fusion-font=
            "true">,</span> <em><span data-fusion-font="true">Counselor, IEEE AIUB Student Branch; Advisor, IEEE EMBS AIUB SB Chapter; Associate Professor, Faculty of Engineering, AIUB.</span></em>
            <span data-fusion-font="true">Dr. Imam introduced the speaker after welcoming him in the event of the IEEE AIUB SB and finally requested to start his session. Then, the floor was taken by
            the esteemed speaker of the session</span> <strong data-fusion-font="true">Athman Bouguettaya</strong><span data-fusion-font="true">,</span> <em><span data-fusion-font="true">IEEE fellow,
            ACM Distinguished Scientist; IEEE Computer Society Distinguished Visitor; ACM Distinguished Speaker, WISE Fellow; PhD, Computer Science, University of Colorado; Professor and former Head,
            School of Computer Science, University of Sydney, Australia</span></em><span data-fusion-font="true">. The speaker started the session by showing his gratitude towards the host,
            organizing committee and the participants to invite him in the event. After portraying a short introduction about himself, he started the profound discussion on IoT Energy Service along
            with its importance, functional and non-functional attributes. The concepts of IoT capabilities, services of IoT and secured internet connection were also included in the further talk.
            Later he briefly talked about energy services, leveraging IoT devices and wearables to Harvest. Furthermore, he added his ideas on EaaS (Energy as service), covering the concept of
            Crowdsourced and Crowdshared EaaS.</span> <strong data-fusion-font="true">Bouguettaya</strong> <span data-fusion-font="true">also covered the essential concepts of green energy, SOA, and
            non-functional attributes-Energy capacity. He ended his speech by talking about the Incentive Model and their enriched Website, Published Books, for the further knowledge of the
            enthusiasts.</span>
          </p>
          <p>
            <a name="_Hlk85143749" data-fusion-font="true"></a><span data-fusion-font="true">An interactive Question-Answer session took place after his presentation where the speaker
            enthusiastically responded to all the queries of the fellow participants and illuminated their minds with his vast knowledge. Following the Q/A session,</span> <strong data-fusion-font=
            "true">Prof. Dr. ABM Siddique Hossain</strong><span data-fusion-font="true">,</span> <em><span data-fusion-font="true">Advisor, IEEE AIUB Student Branch; Dean, Faculty of Engineering,
            AIUB;</span></em> <span data-fusion-font="true">took the floor to share his ideas as the remarks of the session. He started by thanking the speaker and then shortly shared his thoughts
            about IoT Wireless Energy and also described the importance of the implementation of IoT in smart cities.</span> <a name="_Hlk85143916" data-fusion-font="true"></a><span data-fusion-font=
            "true">Later on,</span> <strong data-fusion-font="true">Prof. Dr. Md. Abdur Rahman,</strong> <em><span data-fusion-font="true">Advisor, IEEE AIUB Student Branch; Associate Dean, Faculty
            of Engineering, AIUB;</span></em> <span data-fusion-font="true">took the platform and presented the token of appreciation to the honorable speaker. And then, he conveyed the concluding
            remarks of the session where he appreciated the initiative taken by the student Branch to organize the event on an emerging topic of IoT.</span>
          </p>
          <p>
            <a name="_Hlk85144184" data-fusion-font="true"></a><span data-fusion-font="true">More than 100+ participants from different universities were present in this session. The session was
            graced with the presence of</span> <a name="_Hlk85144203" data-fusion-font="true"></a><strong data-fusion-font="true">Mr. Kawshik Shikder</strong><span data-fusion-font="true">,</span>
            <em><span data-fusion-font="true">Motivator, IEEE AIUB SB, Asst. Professor, Faculty of Engineering, AIUB</span></em><strong data-fusion-font="true">, Md Ashif Islam
            Oni</strong><span data-fusion-font="true">,</span> <em><span data-fusion-font="true">Lecturer, Faculty of Engineering, AIUB,</span></em> <strong data-fusion-font="true">Dr. Md.
            Kabiruzzaman</strong><span data-fusion-font="true">,</span> <em><span data-fusion-font="true">Asst. Professor, Faculty of Engineering, AIUB</span></em><span data-fusion-font=
            "true">,</span> <strong data-fusion-font="true">Nowshin Alam</strong><em><span data-fusion-font="true">, Asst. Professor, Faculty of Engineering, AIUB</span></em><strong data-fusion-font=
            "true">,</strong> <a name="_Hlk85144599" data-fusion-font="true"></a><span data-fusion-font="true">and other faculty members and students from different universities along with Executive
            members and volunteers of the Student Branch.</span>
          </p>
          <div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/1-8.png" rel="noreferrer" data-rel="iLightbox[gallery_image_9]" target="_self"><img src=
                "/images/ieee/2020/09/1-8.png" width="800" height="450" alt="" title="1" aria-label="1" srcset=
                "/images/ieee/2020/09/1-8-200x113.png 200w, /images/ieee/2020/09/1-8-400x225.png 400w, /images/ieee/2020/09/1-8-600x338.png 600w, /images/ieee/2020/09/1-8.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/2-8.png" rel="noreferrer" data-rel="iLightbox[gallery_image_9]" target="_self"><img src=
                "/images/ieee/2020/09/2-8.png" width="800" height="450" alt="" title="2" aria-label="2" srcset=
                "/images/ieee/2020/09/2-8-200x113.png 200w, /images/ieee/2020/09/2-8-400x225.png 400w, /images/ieee/2020/09/2-8-600x338.png 600w, /images/ieee/2020/09/2-8.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/3-6.png" rel="noreferrer" data-rel="iLightbox[gallery_image_9]" target="_self"><img src=
                "/images/ieee/2020/09/3-6.png" width="800" height="450" alt="" title="3" aria-label="3" srcset=
                "/images/ieee/2020/09/3-6-200x113.png 200w, /images/ieee/2020/09/3-6-400x225.png 400w, /images/ieee/2020/09/3-6-600x338.png 600w, /images/ieee/2020/09/3-6.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/4-4.png" rel="noreferrer" data-rel="iLightbox[gallery_image_9]" target="_self"><img src=
                "/images/ieee/2020/09/4-4.png" width="800" height="450" alt="" title="4" aria-label="4" srcset=
                "/images/ieee/2020/09/4-4-200x113.png 200w, /images/ieee/2020/09/4-4-400x225.png 400w, /images/ieee/2020/09/4-4-600x338.png 600w, /images/ieee/2020/09/4-4.png 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/5-3.png" rel="noreferrer" data-rel="iLightbox[gallery_image_9]" target="_self"><img src=
                "/images/ieee/2020/09/5-3.png" width="829" height="481" alt="" title="5" aria-label="5" srcset=
                "/images/ieee/2020/09/5-3-200x116.png 200w, /images/ieee/2020/09/5-3-400x232.png 400w, /images/ieee/2020/09/5-3-600x348.png 600w, /images/ieee/2020/09/5-3-800x464.png 800w, /images/ieee/2020/09/5-3.png 829w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/6-1.png" rel="noreferrer" data-rel="iLightbox[gallery_image_9]" target="_self"><img src=
                "/images/ieee/2020/09/6-1.png" width="828" height="476" alt="" title="6" aria-label="6" srcset=
                "/images/ieee/2020/09/6-1-200x115.png 200w, /images/ieee/2020/09/6-1-400x230.png 400w, /images/ieee/2020/09/6-1-600x345.png 600w, /images/ieee/2020/09/6-1-800x460.png 800w, /images/ieee/2020/09/6-1.png 828w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/7.png" rel="noreferrer" data-rel="iLightbox[gallery_image_9]" target="_self"><img src=
                "/images/ieee/2020/09/7.png" width="829" height="452" alt="" title="7" aria-label="7" srcset=
                "/images/ieee/2020/09/7-200x109.png 200w, /images/ieee/2020/09/7-400x218.png 400w, /images/ieee/2020/09/7-600x327.png 600w, /images/ieee/2020/09/7-800x436.png 800w, /images/ieee/2020/09/7.png 829w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a rel="noreferrer" data-rel="iLightbox[gallery_image_9]" target="_self"><img src="" width="" height="" alt="" title="" aria-label="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `cs`,
  },

  {
    id: 15,
    title: `IEEE AIUB Student Branch in collaboration with the IEEE IAS AIUB SB Chapter & CADD Core Training Institute Successfully Organized a Workshop Series on “Workshop on SOLIDWORKS”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/baner.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On <strong>6th, 7th, and 8th September 2021</strong>, the <strong>IEEE AIUB Student Branch</strong> in collaboration with the <strong>IEEE IAS AIUB SB
            Chapter</strong> & <strong>CADD Core Training Institute</strong> has successfully organized a three-day-long workshop series titled <strong>“Workshop on
            SOLIDWORKS”</strong>. In the midst of the continuing COVID-19 issue, while everyone is locked up at home, the <strong>IEEE AIUB Student Branch</strong> organized this workshop
            session through the virtual platform <strong>Google Meet</strong>. The main aim of this session was to provide fundamental and brief notions about SolidWorks and some software
            drawings.
          </p>
          <p>
            The session was inaugurated by <strong>Prof. Dr. ABM Siddique Hossain;</strong> <em>Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch,</em> who
            addressed the attendees the relevance of SolidWorks in the fields of engineering, mechanical engineering, software engineering, and 3D MODEL in the contemporary times’ industry. He then
            thanked the honorable speakers for their time and the participants for their enthusiastic participation in the SolidWorks workshop series.
          </p>
          <p>
            The very 1st day of the workshop series was successfully led by<strong> Md. Shamsee Tabrizee</strong>, <em>Mechanical CAD Designer; CADD CORE Training Institute; SolidWorks
            Certified Professional. </em>The main agenda for the first day of the workshop was to provide the attendees a quick overview of <strong>“Basics of
            SolidWorks.”</strong> <strong>Mr. Tabrizee</strong> began the session by going through Models, Features, the distinctions between Auto-Cad and SolidWorks, and a comprehensive
            explanation of sketching and drawing. He also spoke about Dimension, Relations, CSWA, CSWP, and SolidWorks grammar. Following that, the speaker went into detail on basic thinking and why
            it is crucial for engineers. The first day of the workshop finished with an interactive question-and-answer session in which <strong>Mr. Tabrizee</strong> answered all of the
            participants’ questions and administered a quiz to assess the participants’ learning process.
          </p>
          <p>
            The second day of the workshop series was conducted successfully by <strong>Md Deloar Hossain;</strong> <em>CADD CORE Training Institute’s Certified CAD Designer and Trainer;
            Microsoft Certified Trainer</em>. The key objective of the second day was to introduce <strong>“SolidWorks Features.”</strong> He began the presentation by discussing
            SolidWorks’ popularity and applications. He also discussed various capabilities such as Extrude and Extruded cut, Metallic part, Tangent Propagation, Many Edges, Section View, Hexagon,
            Sweep, Revolve, and how to generate multiple versions in a single file. After that, there was an interactive Question/Answer session and quiz that marked the finish.
          </p>
          <p>
            On the third and last day of the series, <strong>Md. Shamsee Tabrizee</strong> conducted the workshop effectively once more. He started the session by demonstrating terminal
            support assembly and part modeling. Then, 3D applications, vice law setup, multiple projects, color changes, certification center, and Associate Mechanical section were displayed. Later
            in the session, an interactive Question-and-Answer session and the final exam session took place, signaling the completion of the workshop series.
          </p>
          <p>
            The three-day-long workshops were brought to an end by <strong>Dr. Mohammad Hasan Imam,</strong> <em>Counselor, IEEE AIUB Student Branch; Advisor, IEEE EMBS AIUB SB Chapter;
            Associate Professor, Faculty of Engineering, AIUB</em> who conveyed the Token of Appreciation to the honorable speakers as well as delivered the concluding speech where he expressed
            his heartfelt gratitude towards the honorable speakers and all participants for their valuable participation in the workshop series. The session was blessed by the presence
            of <strong>Mr. Kawshik Shikder,</strong> <em>Motivator, IEEE AIUB SB, Asst. Professor, Faculty of Engineering, AIUB,</em> as well as 50+ registered participants, executive
            branch members, and volunteers.
          </p>
          <p>
            <img src="/images/ieee/2020/09/1-7.png" alt="" width="910" height="526" srcset=
            "/images/ieee/2020/09/1-7-200x116.png 200w, /images/ieee/2020/09/1-7-300x173.png 300w, /images/ieee/2020/09/1-7-400x231.png 400w, /images/ieee/2020/09/1-7-600x347.png 600w, /images/ieee/2020/09/1-7-768x444.png 768w, /images/ieee/2020/09/1-7-800x462.png 800w, /images/ieee/2020/09/1-7.png 910w"
             /> <img src="/images/ieee/2020/09/2-7.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2020/09/2-7-200x112.png 200w, /images/ieee/2020/09/2-7-300x169.png 300w, /images/ieee/2020/09/2-7-400x225.png 400w, /images/ieee/2020/09/2-7-600x337.png 600w, /images/ieee/2020/09/2-7-768x432.png 768w, /images/ieee/2020/09/2-7-800x450.png 800w, /images/ieee/2020/09/2-7-1024x576.png 1024w, /images/ieee/2020/09/2-7.png 1366w"
             /> <img src="/images/ieee/2020/09/3-5.png" alt="" width="1650" height="928" srcset=
            "/images/ieee/2020/09/3-5-300x169.png 300w, /images/ieee/2020/09/3-5-768x432.png 768w, /images/ieee/2020/09/3-5-1024x576.png 1024w, /images/ieee/2020/09/3-5.png 1650w"
             /> <img src="/images/ieee/2020/09/4-3.png" alt="" width="1650" height="928" srcset=
            "/images/ieee/2020/09/4-3-300x169.png 300w, /images/ieee/2020/09/4-3-768x432.png 768w, /images/ieee/2020/09/4-3-1024x576.png 1024w, /images/ieee/2020/09/4-3.png 1650w"
             /> <img src="/images/ieee/2020/09/5-2.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2020/09/5-2-200x112.png 200w, /images/ieee/2020/09/5-2-300x169.png 300w, /images/ieee/2020/09/5-2-400x225.png 400w, /images/ieee/2020/09/5-2-600x337.png 600w, /images/ieee/2020/09/5-2-768x432.png 768w, /images/ieee/2020/09/5-2-800x450.png 800w, /images/ieee/2020/09/5-2-1024x576.png 1024w, /images/ieee/2020/09/5-2.png 1366w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `ias`,
  },

  {
    id: 16,
    title: `Erasmus Mundus Association Bangladesh’s Symposium Series 2021- “One Scholarship Preparation, Thousands of Opportunities; Erasmus+ Mundus, Marie Curie and Hundred other European Scholarships`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/erasmus_banner.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On <strong>5th September 2021</strong>, the <strong>IEEE AIUB Student Branch</strong> successfully organized the webinar session titled <strong>“Erasmus Mundus
            Association Bangladesh’s Symposium Series 2021-“One Scholarship Preparation, Thousands of Opportunities Erasmus+Mundus, Marie Curie and Hundred other European
            Scholarships” </strong>in collaboration with the   <strong>Erasmus Mundus Association. </strong>The <strong>IEEE AIUB Student Branch</strong> organized this webinar
            session using the <strong>ZOOM Meeting platform</strong> amid the ongoing COVID-19 crisis, while everyone is caged up in their houses. The major focus of this webinar was to give a brief
            idea about the procedure of applying for Masters’ or PhD degrees at Erasmus and other European universities including the all the trifles of this cosmopolitan opportunity to attain a
            worldwide transcription of post-graduate degrees.
          </p>
          <p>
            The session was inaugurated by <strong>Prof. Dr. ABM Siddique Hossain</strong>; <em>Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch; </em>who welcomed
            the honorable Speakers<em> </em><strong>Md. Ashiqur Rahman</strong> and <strong>Sayed Muhammad Baker</strong> and also<em> </em>the participants. <strong>Mr.
            Hossain</strong> talked about importance of scholarship and also discussed about the Erasmus Mundus Association and their scholarship opportunities opening international doors for
            Bangladeshi students. Then <strong>Prof. Dr. ABM Siddique Hossain</strong> thanked the honorable speakers for joining this event and also thanked <strong>IEEE AIUB Student
            Branch</strong> for taking this bold initiative of organizing such an informative session.
          </p>
          <p>
            The session started with the opening remarks from the speaker<strong> Md. Ashiqur Rahman; </strong><em>Vice President; Erasmus Mundus Association; Research Fellow; Spanish
            National Research Council (Spain); H2020 project of ED-ARCHMAT PhD</em>. The honorable speaker started the session by showing his gratitude towards<strong> IEEE AIUB Student
            Branch</strong>, and the participants. The speaker started his presentation by introducing himself and then discussed the scholarships preparation, the secret of becoming successful, and
            why higher study in abroad is important.
          </p>
          <p>
            Later, <strong>Md. Ashiqur Rahman </strong>talked about HSA statistics Information for Bangladesh, Erasmus Mundus Joint Master Degrees, EMJMD Funding scholarship and showed
            EMJMD Scholarships in International level. He then added their success rate around the world, how and why to apply to the EMJMD program as well as talked about the period of application.
            After that he discussed about the Marie Sklodowaska-Curie Actions (MSCA) and scholarship opportunities in countries like France, Switzerland, Netherlands and Italy.
          </p>
          <p>
            Finally, <strong>Md. Ashiqur Rahman</strong> concluded his speech by discussing how the participants can ensure to be a better candidate for the selection process.
          </p>
          <p>
            Afterward,<strong> Sayed Muhammad Baker; </strong><em>Country Representative for Bangladesh, Erasmus Mundus Association (EMA AISBL); PhD Candidate (H2020 MSCA); Technical
            University of Kaiserslautern (Germany); Project Engineer, COHERENT-DILAS Diodenlaser GmbH (Germany); Lecturer at American international university-Bangladesh (AIUB) (on study
            leave) </em>took the floor. Firstly he introduced himself and thanked everyone for arranging such an informative session. Then he discussed about the selection criteria for the
            master’s program<em>, </em>and the importance of a quality CV.
          </p>
          <p>
            The speaker concluded his speech by suggesting everyone to focus on IELTS and thanking everyone for joining the event.
          </p>
          <p>
            Therefore, an interactive Question-and-Answer session took place where the speakers effectively answered the questions from the participants.
          </p>
          <p>
            Later<strong>, Dr. Mohammad Hasan Imam, </strong><em>Counselor, IEEE AIUB Student Branch; Education Activity Coordinator, IEEE Bangladesh Section; Computer Society Chapter Advisor;
            Associate Professor, Faculty of Engineering, AIUB </em>took the platform and presented the token of appreciation to the honorable speakers. And then he gave the concluding speech
            where he appreciated the initiative taken by the student branch to organize this webinar session and thanked the honorable speakers<strong>.</strong>
          </p>
          <p>
            The session graced by the presence of <strong>Mr. Kawshik Shikder</strong>, <em>Motivator, IEEE AIUB SB, Asst. Professor, Faculty of Engineering, AIUB</em> along with other
            faculty members and students as well as 380+ registered participants from different universities along with executive branch members and volunteers.<em> </em>
          </p>
          <p>
            <img src="/images/ieee/2021/09/1.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2021/09/1-200x112.png 200w, /images/ieee/2021/09/1-300x169.png 300w, /images/ieee/2021/09/1-400x225.png 400w, /images/ieee/2021/09/1-600x337.png 600w, /images/ieee/2021/09/1-768x432.png 768w, /images/ieee/2021/09/1-800x450.png 800w, /images/ieee/2021/09/1-1024x576.png 1024w, /images/ieee/2021/09/1.png 1366w"
             /> <img src="/images/ieee/2021/09/2.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2021/09/2-200x112.png 200w, /images/ieee/2021/09/2-300x169.png 300w, /images/ieee/2021/09/2-400x225.png 400w, /images/ieee/2021/09/2-600x337.png 600w, /images/ieee/2021/09/2-768x432.png 768w, /images/ieee/2021/09/2-800x450.png 800w, /images/ieee/2021/09/2-1024x576.png 1024w, /images/ieee/2021/09/2.png 1366w"
             /> <img src="/images/ieee/2021/09/3.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2021/09/3-200x112.png 200w, /images/ieee/2021/09/3-300x169.png 300w, /images/ieee/2021/09/3-400x225.png 400w, /images/ieee/2021/09/3-600x337.png 600w, /images/ieee/2021/09/3-768x432.png 768w, /images/ieee/2021/09/3-800x450.png 800w, /images/ieee/2021/09/3-1024x576.png 1024w, /images/ieee/2021/09/3.png 1366w"
             /> <img src="/images/ieee/2021/09/4.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2021/09/4-200x112.png 200w, /images/ieee/2021/09/4-300x169.png 300w, /images/ieee/2021/09/4-400x225.png 400w, /images/ieee/2021/09/4-600x337.png 600w, /images/ieee/2021/09/4-768x432.png 768w, /images/ieee/2021/09/4-800x450.png 800w, /images/ieee/2021/09/4-1024x576.png 1024w, /images/ieee/2021/09/4.png 1366w"
             /> <img src="/images/ieee/2021/09/5.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2021/09/5-200x112.png 200w, /images/ieee/2021/09/5-300x169.png 300w, /images/ieee/2021/09/5-400x225.png 400w, /images/ieee/2021/09/5-600x337.png 600w, /images/ieee/2021/09/5-768x432.png 768w, /images/ieee/2021/09/5-800x450.png 800w, /images/ieee/2021/09/5-1024x576.png 1024w, /images/ieee/2021/09/5.png 1366w"
             /> <img src="/images/ieee/2021/09/6.jpg" alt="" width="1644" height="925" srcset=
            "/images/ieee/2021/09/6-300x169.jpg 300w, /images/ieee/2021/09/6-768x432.jpg 768w, /images/ieee/2021/09/6-1024x576.jpg 1024w, /images/ieee/2021/09/6.jpg 1644w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Webinar`,
  },

  {
    id: 17,
    title: `IEEE AIUB Student Branch Women In Engineering (WIE) Affinity Group successfully organized a webinar on  “Personal Branding and Industrial Influence”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/banner-5.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On <strong>28th August 2021</strong>, the <strong>IEEE AIUB Student Branch Women in Engineering (WIE) Affinity Group</strong> successfully organized the webinar session titled
            <strong>“Personal Branding and Industrial Influence”</strong> in collaboration with the <strong>IEEE AIUB Student Branch</strong> through the <strong>ZOOM Meeting</strong> platform. The
            major focus of this webinar was on the key and concise ideas of corporate cultures, personal skill development, and leadership development. The webinar session was inaugurated by
            <strong>Prof. Dr. ABM Siddique Hossain;</strong> <em>Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch;</em> who welcomed the honorable Speaker <strong>Afrina
            Nazneen</strong> and also the participants. <strong>Prof. Hossain</strong> talked about personal branding and influences in short. He also discussed how personal branding can be useful to
            represent individuals in any new work environment. Then <strong>he</strong> thanked the honorable speaker for joining this event and also thanked <strong>the organizing team</strong> for
            taking this bold initiative of organizing such an informative session.
          </p>
          <p>
             
          </p>
          <p>
            The session was started with the opening remarks from the speaker <strong>Afrina Nazneen;</strong> <em>Officer Culture and Employer Branding; Berger Paints Bangladesh Ltd.</em> The
            honorable speaker started the session by showing her gratitude towards <strong>Prof. Hossain,</strong> the organizing team, and the participants. The speaker started her presentation by
            introducing herself and Berger Paint Bangladesh Limited and some of their products. With examples, she discussed personal branding and why it is important based on her personal
            experience. She also added how personal branding is done and how to brand oneself in a new environment or in a job interview. Later, she discussed self-development, different types of
            communication and demonstrated the important things to incorporate to build a good resume. She shared some of her experience with verbal and non-verbal communication too and discussed how
            a proper LinkedIn Profile can enhance one’s job opportunity. Finally, <strong>Afrina Nazneen</strong> concluded her speech by providing some job interview tips and a universal competency
            framework. Afterward, there was an interactive question-and-answer session, during which the speaker effectively addressed all the questions asked by the participants.
          </p>
          <p>
             
          </p>
          <p>
            <span>Later, <strong>Prof. Dr. Md. Abdur Rahman,</strong> <em>Associate Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch;</em> took the platform and presented the
            token of appreciation to the honorable speaker. And then he gave the concluding speech where he appreciated the initiative taken by the student branch to organize this webinar session and
            thanked the honorable speaker. The webinar session was graced by the presence of honorable <strong>Dr. Mohammad Nasir Uddin, P.Eng.,</strong> <em>Head of EEE Dept. (Graduate Program)</em>
            and <em>Sr. Associate Professor;</em> <strong>Mr. Kawshik Shikder,</strong> <em>Assistant Professor;</em> <strong>Mr. Mohammad Khurshed Alam,</strong> <em>Assistant Professor;</em>
            <strong>Mr. Md Ashif Islam Oni,</strong> <em>Lecturer;</em> <strong>Md. Shahariar Parvez<em>,</em></strong> <em>Lecturer, Faculty of Engineering, AIUB</em> along with executives and
            volunteers of <strong>IEEE AIUB Student Branch</strong>, and other registered participants of AIUB and other universities.</span>
          </p>
          <p>
            <img src="/images/ieee/2020/09/1-6.png" alt="" width="1920" height="1080" srcset=
            "/images/ieee/2020/09/1-6-300x169.png 300w, /images/ieee/2020/09/1-6-768x432.png 768w, /images/ieee/2020/09/1-6-1024x576.png 1024w, /images/ieee/2020/09/1-6.png 1920w"
             /> <img src="/images/ieee/2021/08/pb3-300x162.png" alt="" width="827" height="447" srcset=
            "/images/ieee/2021/08/pb3-200x108.png 200w, /images/ieee/2021/08/pb3-300x162.png 300w, /images/ieee/2021/08/pb3-400x217.png 400w, /images/ieee/2021/08/pb3-600x325.png 600w, /images/ieee/2021/08/pb3.png 748w"
             /><img src="/images/ieee/2020/09/4.jpg" alt="" width="1646" height="855" srcset=
            "/images/ieee/2020/09/4-300x156.jpg 300w, /images/ieee/2020/09/4-768x399.jpg 768w, /images/ieee/2020/09/4-1024x532.jpg 1024w, /images/ieee/2020/09/4.jpg 1646w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Webinar`,
  },

  {
    id: 18,
    title: `Distinguished Lecture Session on “New Energy Technologies: Research and Innovation in Power and Energy”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Research_and_Innovation-in-Power-and-Energy_Report.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            In the midst of the continuing COVID-19 situation, while everyone is locked down in their houses the <strong>IEEE AIUB Student Branch</strong> successfully organized the
            extremely enlightening distinguished lecture session titled <strong><em>“New Energy Technologies: Research and Innovation in Power and Energy”</em> </strong>using
            the <strong>ZOOM Meeting</strong> platform on <strong>29th July 2021</strong>. The focus of this lecture session was on the intersection of technological innovations,
            developmental objectives, and rising environmental concerns.
          </p>
          <p>
            The session was inaugurated by <strong>Prof. Dr. ABM Siddique Hossain</strong>; <em>Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch; </em>who welcomed
            the respected Speaker of the session <strong>Prof. Syed Islam</strong> to the event. Prof. Hossain talked about the rapid technological changes in recent years and discussed the
            bad effects of coal in the atmosphere. He said that all the Engineers and Engineering students have a big role in this sector and as IEEE gives all the engineering students a platform for
            technological innovation and research, they have a big role to serve. The event was hosted by <strong>Dr. Mohammad Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch;
            Advisor, IEEE EMBS AIUB SB Chapter; Senior Assistant Professor, Faculty of Engineering, AIUB. Dr. Imam </em> introduced the prestigious <strong>IEEE AIUB Student
            branch</strong> in short to the honorable speaker <strong>Prof. Syed Islam, </strong><em>Ph.D.; FIEEE, FIET, FIEAust, Eng Exec, CPEng, NPER, APEC Engineer, IEEE PES
            Distinguished Lecturer, Dean, School of Science, Engineering and Information Technology, Federation University Australia.</em>
          </p>
          <p>
            The session was started with the opening remarks from <strong>Prof. Syed Islam. </strong>The honorable speaker started the session by showing his gratitude towards
            the <strong>IEEE AIUB Student Branch</strong> and the participants. The speaker started his presentation by showing the changes in the power grid. With examples, he briefly
            outlined the transition to the smart grid. Later, <strong>Prof. Islam</strong> talked about new energy, changing consumer preferences, policy, and regulatory forces, as well as
            data. Next, the speaker demonstrated smart homes, solar rooftops, control communication, and an advanced smart meter experiment to regulate transformer usage and assist with smart
            tariffs. He also mentioned Tesla’s 100 days initiative, which includes a 100 MWh battery system. He also discussed the influence on ADMD and the efficiency of vehicle-to-grid (V2G).
            Finally, Prof. Islam concluded his speech by showing the IEC68150- communication in the digital substation.
          </p>
          <p>
            Afterward, there was an interactive question-and-answer session, during which the speaker effectively addressed all of the questions. Later<strong>, Prof. Dr. Md. Abdur
            Rahman</strong>, <em>Associate Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch; </em>took the platform and presented the token of appreciation to the
            honorable speaker. And then he gave the concluding speech where he appreciated the initiative taken by the student branch to organize this distinguished lecture session and thanked the
            honorable speaker<strong>.</strong>
          </p>
          <p>
            The session was graced by the presence of <strong>Prof. Dr. Mohammad Abdul Mannan</strong>, <em>Advisor, IEEE AIUB SB, Director, Faculty of Engineering,
            AIUB,</em> <strong>Mr. Nafiz Ahmed Chisy</strong>, <em>Associate Professor and Head-in-Charge (EEE), Faculty of Engineering, AIUB, </em><strong>Mr. Md. Saniat Rahman
            Zishan, </strong><em>Advisor, IEEE AIUB Student Branch, Associate Professor and Head (CoE), Faculty of Engineering, AIUB,</em><strong> Mr. Chowdhury Akram
            Hossain</strong>, <em>Advisor, IEEE AIUB SB, Sr. Asst. Professor, Faculty of Engineering, AIUB</em>, <strong>Mr Kawshik Shikder</strong>, <em>Motivator, IEEE AIUB SB, Asst.
            Professor, Faculty of Engineering, AIUB</em>, and other faculty members and students from different universities along with executive branch members and volunteers.
          </p>
          <p>
            <img src="/images/ieee/2020/09/1-5.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2020/09/1-5-200x112.png 200w, /images/ieee/2020/09/1-5-300x169.png 300w, /images/ieee/2020/09/1-5-400x225.png 400w, /images/ieee/2020/09/1-5-600x337.png 600w, /images/ieee/2020/09/1-5-768x432.png 768w, /images/ieee/2020/09/1-5-800x450.png 800w, /images/ieee/2020/09/1-5-1024x576.png 1024w, /images/ieee/2020/09/1-5.png 1366w"
             /> <img src="/images/ieee/2020/09/2-5.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2020/09/2-5-200x112.png 200w, /images/ieee/2020/09/2-5-300x169.png 300w, /images/ieee/2020/09/2-5-400x225.png 400w, /images/ieee/2020/09/2-5-600x337.png 600w, /images/ieee/2020/09/2-5-768x432.png 768w, /images/ieee/2020/09/2-5-800x450.png 800w, /images/ieee/2020/09/2-5-1024x576.png 1024w, /images/ieee/2020/09/2-5.png 1366w"
             /> <img src="/images/ieee/2020/09/3-3.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2020/09/3-3-200x112.png 200w, /images/ieee/2020/09/3-3-300x169.png 300w, /images/ieee/2020/09/3-3-400x225.png 400w, /images/ieee/2020/09/3-3-600x337.png 600w, /images/ieee/2020/09/3-3-768x432.png 768w, /images/ieee/2020/09/3-3-800x450.png 800w, /images/ieee/2020/09/3-3-1024x576.png 1024w, /images/ieee/2020/09/3-3.png 1366w"
             /> <img src="/images/ieee/2020/09/4-2.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2020/09/4-2-200x112.png 200w, /images/ieee/2020/09/4-2-300x169.png 300w, /images/ieee/2020/09/4-2-400x225.png 400w, /images/ieee/2020/09/4-2-600x337.png 600w, /images/ieee/2020/09/4-2-768x432.png 768w, /images/ieee/2020/09/4-2-800x450.png 800w, /images/ieee/2020/09/4-2-1024x576.png 1024w, /images/ieee/2020/09/4-2.png 1366w"
             /> <img src="/images/ieee/2020/09/5-1.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2020/09/5-1-200x112.png 200w, /images/ieee/2020/09/5-1-300x169.png 300w, /images/ieee/2020/09/5-1-400x225.png 400w, /images/ieee/2020/09/5-1-600x337.png 600w, /images/ieee/2020/09/5-1-768x432.png 768w, /images/ieee/2020/09/5-1-800x450.png 800w, /images/ieee/2020/09/5-1-1024x576.png 1024w, /images/ieee/2020/09/5-1.png 1366w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `distinguished-lecture`,
  },

  {
    id: 19,
    title: `Save Your Planet Using the Power of Science: IOT Automation and Environmental Engineering`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/up_01.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On <strong>8th July 2021</strong>, the <strong>IEEE AIUB Student Branch</strong> successfully organized the webinar session titled “<strong>Save Your Planet using the Power
            of Science: IOT Automation and Environmental Engineering” hosted by IEEE Computer Society AIUB Student Branch Chapter </strong>in collaboration with <strong>STATA IT
            Limited</strong> and <strong>GREENBUD. </strong>Amid the ongoing <strong>COVID-19</strong> crisis, when everyone is locked down in their homes,
            the <strong>IEEE AIUB Student Branch </strong>organized this webinar session through the <strong>ZOOM Meeting</strong> platform. This webinar mainly focused on the
            basic and brief concepts of IoT Automation and Environmental Engineering.
          </p>
          <p>
            The session was inaugurated by honorable <strong>Prof. Dr. ABM Siddique Hossain</strong>, <em>Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch </em>who
            welcomed the respected speakers<em> </em><strong>Mr. Alve Rahman Akash</strong> and <strong>Engr. Syed Tasnem Mahmood</strong> to the event. <strong>Prof.
            Hossain</strong> talked about the importance of IoT and discussed the impacts and greenhouse effect due to rapid industrialization.
          </p>
          <p>
            The 1st session was started<em> </em>with the opening remarks from <strong>Mr. Alve Rahman Akash,</strong> <em>Public Relations Manager; Electrical Project Engineer; STATA
            IT Ltd.</em> The speaker<em> </em>started the session by<em> </em>showing his gratitude towards the participants along with the <strong>IEEE AIUB Student
            Branch</strong> and introducing STATA IT Ltd and its’ functions and objectives. He discussed in brief how home automation can control items around the house and make our life easier.
            After that, the speaker showed some references to Machine Machine (M2M) communication technology and showcased various smart devices from their automation industry.
          </p>
          <p>
            The 2nd session began<em> </em>with the opening remarks from <strong>Engr. Syed Tasnem Mahmood, </strong><em>Environmental Engineer; Chief Executive Officer,
            GREENBUD. </em>The speaker<em> also<strong> </strong></em>started the session by<em> </em>showing his gratitude towards the <strong>IEEE AIUB Student
            Branch</strong> and the participants. He discussed the impacts and global pollution and climate change. Next, <strong>Mr. Mahmood</strong> showed some examples of Elon
            Mask’s Tesla ft green entrepreneurship. He talked about the vertical wind turbines & the road made of waste plastic as an example of creative environmental entrepreneurship. He
            discussed the impacts of energy management, supply chain management, and the functions of GREENBUD in brief.
          </p>
          <p>
            Mr. <strong>Mahmood</strong> concluded his presentation by showcasing a platform for a young entrepreneur named <strong>“GREENOVATIVE”</strong> to work for Green &
            sustainable industries. He encouraged members to approach them if they are interested in working in this field. The session was concluded and graced by the presence of <strong>Mr.
            Kawshik Shikder</strong>, <em>Motivator, IEEE AIUB SB, Asst. Professor, Faculty of Engineering, AIUB</em> along with 75+ registered participants and executive branch members and
            volunteers.
          </p>
          <p>
            <img src="/images/ieee/2021/07/up_01.jpg" alt="" width="2048" height="1072" srcset=
            "/images/ieee/2021/07/up_01-300x157.jpg 300w, /images/ieee/2021/07/up_01-768x402.jpg 768w, /images/ieee/2021/07/up_01-1024x536.jpg 1024w, /images/ieee/2021/07/up_01.jpg 2048w"
             /><img src="/images/ieee/2021/07/1.png" alt="" width="1650" height="928" srcset=
            "/images/ieee/2021/07/1-300x169.png 300w, /images/ieee/2021/07/1-768x432.png 768w, /images/ieee/2021/07/1-1024x576.png 1024w, /images/ieee/2021/07/1.png 1650w"
             /><img src="/images/ieee/2021/07/2.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2021/07/2-200x112.png 200w, /images/ieee/2021/07/2-300x169.png 300w, /images/ieee/2021/07/2-400x225.png 400w, /images/ieee/2021/07/2-600x337.png 600w, /images/ieee/2021/07/2-768x432.png 768w, /images/ieee/2021/07/2-800x450.png 800w, /images/ieee/2021/07/2-1024x576.png 1024w, /images/ieee/2021/07/2.png 1366w"
             /><img src="/images/ieee/2021/07/3.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2021/07/3-200x112.png 200w, /images/ieee/2021/07/3-300x169.png 300w, /images/ieee/2021/07/3-400x225.png 400w, /images/ieee/2021/07/3-600x337.png 600w, /images/ieee/2021/07/3-768x432.png 768w, /images/ieee/2021/07/3-800x450.png 800w, /images/ieee/2021/07/3-1024x576.png 1024w, /images/ieee/2021/07/3.png 1366w"
             /><img src="/images/ieee/2021/07/4.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2021/07/4-200x112.png 200w, /images/ieee/2021/07/4-300x169.png 300w, /images/ieee/2021/07/4-400x225.png 400w, /images/ieee/2021/07/4-600x337.png 600w, /images/ieee/2021/07/4-768x432.png 768w, /images/ieee/2021/07/4-800x450.png 800w, /images/ieee/2021/07/4-1024x576.png 1024w, /images/ieee/2021/07/4.png 1366w"
             /><img src="/images/ieee/2021/07/5.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2021/07/5-200x112.png 200w, /images/ieee/2021/07/5-300x169.png 300w, /images/ieee/2021/07/5-400x225.png 400w, /images/ieee/2021/07/5-600x337.png 600w, /images/ieee/2021/07/5-768x432.png 768w, /images/ieee/2021/07/5-800x450.png 800w, /images/ieee/2021/07/5-1024x576.png 1024w, /images/ieee/2021/07/5.png 1366w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `cs`,
  },

  {
    id: 20,
    title: `Webinar on “Banglalink- Learn from Startups”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/1.png"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 20th June 2021, Banglalink organized a great event titled “Banglalink- Learn from Startups” in collaboration with the IEEE AIUB Student Branch, ANTT Robotics Ltd, AUW Entrepreneurship
            Club, MIST Career Club.
          </p>
          <p>
            This auspicious event provided the participants the opportunity to create an educational platform for individuals, transforming high-potential students into leaders of the next
            generation. The growth of entrepreneurs and innovation seekers passionate about their dormancy is a wonderful opportunity. This is why the IEEE AIUB Student Branch offered individuals the
            potential, through the study and training of specialists and fresh spirits, to develop an educational platform for individuals with innovation capability, to turn students with high
            capacity into leaders of the future generation. This has been an enormous chance for growth and development towards leading roles in the startup industry.
          </p>
          <p>
            ANTT Robotics Ltd is a technology startup working on robotics and IoT solutions for transforming industries and STEM education to lead the shift towards the fourth industrial revolution.
            The speaker of the event Thajid Ibna Rouf, Uday completed his BSc in Electrical and Electronic Engineering from United International University, Bangladesh. He is the Founder and Director
            of ANTT Robotics, responsible for product development and planning business operations of the company. This year, Banglalink has decided to develop a learning module for students with
            ANTT Robotics. Thajid Ibne Rouf (Uday); Founder and director of ANTT Robotics LTD; has comprised 2 sessions that covered design thinking,prototype building, investor pitch, client
            management, idea generation, and many more.
          </p>
          <p>
            The students attending both sessions have also been awarded an e-certificate.<img src="/images/ieee/2021/08/1.png" alt="" width="1200" height="628" srcset=
            "/images/ieee/2021/08/1-200x105.png 200w, /images/ieee/2021/08/1-300x157.png 300w, /images/ieee/2021/08/1-400x209.png 400w, /images/ieee/2021/08/1-600x314.png 600w, /images/ieee/2021/08/1-768x402.png 768w, /images/ieee/2021/08/1-800x419.png 800w, /images/ieee/2021/08/1-1024x536.png 1024w, /images/ieee/2021/08/1.png 1200w"
             /> <img src="/images/ieee/2021/08/2.png" alt="" width="1200" height="628" srcset=
            "/images/ieee/2021/08/2-200x105.png 200w, /images/ieee/2021/08/2-300x157.png 300w, /images/ieee/2021/08/2-400x209.png 400w, /images/ieee/2021/08/2-600x314.png 600w, /images/ieee/2021/08/2-768x402.png 768w, /images/ieee/2021/08/2-800x419.png 800w, /images/ieee/2021/08/2-1024x536.png 1024w, /images/ieee/2021/08/2.png 1200w"
             /> <img src="/images/ieee/2021/08/3.jpg" alt="" width="1200" height="628" srcset=
            "/images/ieee/2021/08/3-200x105.jpg 200w, /images/ieee/2021/08/3-300x157.jpg 300w, /images/ieee/2021/08/3-400x209.jpg 400w, /images/ieee/2021/08/3-600x314.jpg 600w, /images/ieee/2021/08/3-768x402.jpg 768w, /images/ieee/2021/08/3-800x419.jpg 800w, /images/ieee/2021/08/3-1024x536.jpg 1024w, /images/ieee/2021/08/3.jpg 1200w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Webinar`,
  },

  {
    id: 21,
    title: `IEEE AIUB Student Branch Members’ Orientation 2021`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/197216919_4551266718224863_2116159990468868599_n.png"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 12<sup>th</sup> June 2021, the IEEE AIUB Student Branch organized the <strong>IEEE Members’ Orientation 2021</strong> through the virtual platform of <strong>Zoom
            Meeting</strong> at 3 PM (GMT+6 hrs). The objective of this orientation program is to introduce and welcome the new members of the current year to the foundation and organogram of
            the IEEE AIUB Student Branch along with the acknowledgment of the invaluable hard work and commitment put in by the faculty members and students who fulfill the governing body’s role in
            the previous year. IEEE Members’ Orientation is usually held at the beginning of each year with interactive media, presentations, talks, and an award ceremony held by the Executive Body
            of the branch and the distinguished faculty members governing the branch but due to the pandemic of COVID-19, this year it has been organized during the mid-year.
          </p>
          <p>
            The grand event was inaugurated by <strong>Prof. Dr. ABM Siddique Hossain</strong>, <em>Advisor, IEEE AIUB Student Branch; Dean, Faculty of Engineering, AIUB </em>with the
            recounting of IEEE’s long history and enlightening the members on the organization’s principal objective and vision. He discussed the real-life example of Maxwell to portrait a
            relationship of the importance of getting acquainted with the roots of one’s affiliated organization. Later, the first segment of the event was conducted by <strong>Dr. Mohammad
            Hasan Imam</strong>, <em>Counselor, IEEE AIUB</em> <em>Student Branch; Senior Assistant Professor, Faculty of Engineering, AIUB </em>who presented the mesmerizing history
            of the IEEE AIUB Student Branch from the beginning till date. In his presentation, the multifarious achievements of the Student Branch, the recognition from the IEEE Region 10 as well as
            from the IEEE Bangladesh Section, and the brief introduction to the activities of the Student Branch along with the Chapters and Affinity Group of the student branch were highlighted
            prominently. After his presentation, a documentary video was displayed that comprises a short history, some notable moments, and achievements of the IEEE AIUB Student Branch along with
            its journey from the very beginning till this moment.
          </p>
          <p>
            After portraying the video, the floor was taken by <strong>Chowdhury Akram Hossain</strong>, <em>Former Counselor, IEEE AIUB SB; IEEE MGA Training Committee, Member, Student
            Awards & Recognition Committee, IEEE MGA SAC; Senior Assistant Professor, Faculty of Engineering, AIUB. </em>He started his presentation by encouraging the members for
            volunteering with the IEEE due to its noble significance. The benefits of IEEE Membership and the opportunity of strong networking & collaboration were the key points of his
            discussion towards the members. At the end of his motivational words, he had presented the virtual token of appreciation to all the outgoing Executives of the IEEE AIUB Student Branch for
            their enormous effort, dedication, and commitment towards the branch throughout the whole period.
          </p>
          <p>
            After the farewell of the former Executives, <strong>Md. Saniat Rahman Zishan</strong>, <em>Advisor, IEEE AIUB Student Branch; Associate Professor and Head (CoE), Faculty of
            Engineering, AIUB </em>took the floor. After sharing his invaluable remarks to the new members of the Branch, he had declared the new Executive Committee of the <strong>IEEE
            AIUB Student Branch</strong> along with the Executives of the Chapters and Affinity Group for the year 2021. After conveying a warm congratulation to the newly elected Executive
            members, he wished them luck for taking the glory of the branch to the peak altitude of the Section as well as in the entire IEEE Region 10.
          </p>
          <p>
            Shortly after the announcement of the new executive committee, a short speech from the newly elected <em>Chairperson</em> of the IEEE AIUB Student Branch; <strong>Md.</strong>
            <strong>Yeasib Bin Hassan</strong>, and the <em>Vice-Chairperson;</em> <strong>Shartaz khan Akash </strong>was made. Also, the former <em>Chairperson</em> <strong>Md.
            Asaf-Ud-Doulah </strong>delivered a virtuous speech for the newly elected Executive members.
          </p>
          <p>
            <strong>Finally, Prof. Dr. Md. Abdur Rahman</strong>; <em>Advisor, IEEE AIUB Student Branch; Associate Dean, Faculty of Engineering, AIUB;</em> conveyed his wonderful words to the new
            Governing body of the Student Branch for the year 2021 and also delivered the concluding speech of this auspicious program. At the end of the program, the upcoming events of the IEEE AIUB
            Student Branch were elaborately discussed, and a group photo session was then taken, which marked the end of the event. The event was graced by the presence of Distinguished Faculty
            members of AIUB and 150+ registered IEEE Student Members.
          </p>
          <p>
            <img src="/images/ieee/2021/06/1.png" alt="" width="1920" height="1080" srcset=
            "/images/ieee/2021/06/1-300x169.png 300w, /images/ieee/2021/06/1-768x432.png 768w, /images/ieee/2021/06/1-1024x576.png 1024w, /images/ieee/2021/06/1.png 1920w"
             /> <img src="/images/ieee/2021/06/2.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2021/06/2-200x112.png 200w, /images/ieee/2021/06/2-300x169.png 300w, /images/ieee/2021/06/2-400x225.png 400w, /images/ieee/2021/06/2-600x337.png 600w, /images/ieee/2021/06/2-768x432.png 768w, /images/ieee/2021/06/2-800x450.png 800w, /images/ieee/2021/06/2-1024x576.png 1024w, /images/ieee/2021/06/2.png 1366w"
             /> <img src="/images/ieee/2021/06/3.png" alt="" width="1920" height="1080" srcset=
            "/images/ieee/2021/06/3-300x169.png 300w, /images/ieee/2021/06/3-768x432.png 768w, /images/ieee/2021/06/3-1024x576.png 1024w, /images/ieee/2021/06/3.png 1920w"
             /> <img src="/images/ieee/2021/06/4.png" alt="" width="1920" height="1080" srcset=
            "/images/ieee/2021/06/4-300x169.png 300w, /images/ieee/2021/06/4-768x432.png 768w, /images/ieee/2021/06/4-1024x576.png 1024w, /images/ieee/2021/06/4.png 1920w"
             /><img src="/images/ieee/2021/06/9.png" alt="" width="862" height="488" srcset=
            "/images/ieee/2021/06/9-200x113.png 200w, /images/ieee/2021/06/9-300x170.png 300w, /images/ieee/2021/06/9-400x226.png 400w, /images/ieee/2021/06/9-600x340.png 600w, /images/ieee/2021/06/9-768x435.png 768w, /images/ieee/2021/06/9-800x453.png 800w, /images/ieee/2021/06/9.png 862w"
             />
          </p>
          <p>
            <img src="/images/ieee/2021/06/8.png" alt="" width="1920" height="1080" srcset=
            "/images/ieee/2021/06/8-300x169.png 300w, /images/ieee/2021/06/8-768x432.png 768w, /images/ieee/2021/06/8-1024x576.png 1024w, /images/ieee/2021/06/8.png 1920w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Orientation`,
  },

  {
    id: 22,
    title: `IEEE AIUB Student Branch Organized a Webinar on  ‘Cyber Crime’`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/143676036_4171728829511989_1807606762368142406_n.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 11th February 2021, <strong>IEEE AIUB Student Branch</strong> successfully organized a webinar titled <strong>“Cyber Crime”</strong> in collaboration with <strong>Dhaka Round Table,
            Dhaka Metro Round Table</strong> and supported by the <strong>Criminal Investigation Department (CID)</strong> of <strong>Bangladesh Police</strong><strong>.</strong> The webinar was
            hosted on the online platform <strong>Zoom Meetings.</strong> The event mainly focused on the young juveniles to aware the possible harassments through cybercrime by any kinds of spam or
            other means, the necessary steps they can take if once facing any kind of harassment. The webinar was inaugurated by <strong>Dr. Md. Abdul Mannan</strong><em>, Director, Faculty of
            Engineering, American International University-Bangladesh (AIUB).</em> He expressed his gratitude towards the speaker, the participants, and the organizing committee.
          </p>
          <p>
            After the inauguration, <strong>Siddhant Gupta</strong><strong> </strong>took the floor and thanked the entire organizing committee for organizing a very informative and impactful
            webinar session. He also appreciated the workflow management of <strong>CID</strong> for the rapid action against the malpractice of cybercrime. Next, the speaker of the webinar session,
            <strong>Mahmudul Islam Talukdar</strong>  took the platform. He described the concept of cybercrime along with the most common approaches of cyber related crime and threats.  He
            narrated different real-life scenarios regarding cybercrime which includes blackmail and cyberbullying, hacking, rumor, phishing, cyber terrorism, fake ID and many more in Bangladesh.
             He also pointed out the accelerating rates of child pornography in our country as well as advised to report immediately at the verified police Facebook Page at <strong>“Cyber Police
            Center”.</strong> He shared different ant cybercrime institutions and NGOs for taking necessary steps to prevent cybercrime and aid the victims to recover. He then encouraged everyone to
            gather more knowledge and stay aware regarding the pros and cons of the cyber related crime for the betterment of yourselves and our family members. Afterwards, <strong>Md. Rezaul
            Masud</strong><em>, Special Superintendent of Police, Cyber Police Centre, CID, Bangladesh Police</em> initiated the session with the impacts of the cybercrimes in Bangladesh. He then
            explained the importance of a strong password and 2 factor authentications. Near the end of his speech, the speaker mentioned other categories of hacking like antivirus, malware, and
            unreliable employees.  After that, there was a question-answer session where the speaker answered the questions asked by the participants.
          </p>
          <p>
            Afterwards, <strong>Ejaj Mahmood Rony</strong><em>, Commissioner Officer, Dhaka Metro Round Table</em> took the platform and shared his remarks. He thanked the participants for attending
            the webinar session and also suggested to pave their career towards cybersecurity and contribute themselves for the noble deed of humanity.  The closing speech was delivered by
            <strong>Dr. Mohammad Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch; Advisor, IEEE EMBS AIUB SB Chapter; Senior Assistant Professor, Faculty of Engineering, AIUB,</em> who
            thanked the speaker for his valuable time and the participants for their participation in this webinar. He also thanked the organizing committee for organizing this successful event.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Webinar`,
  },

  {
    id: 23,
    title: `‘Functional Safety on Advanced Driver Assistance System Webinar’`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/functional.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            <span>On 22<sup>nd</sup> December 2020, the <b>IEEE AIUB Student Branch,</b> in collaboration with the <b>Faculty of Engineering, AIUB,</b> organized a webinar session on Advanced Driver
            Assistance System <b>(ADAS)</b> titled ‘<b>Functional Safety on Advanced Driver Assistance System’</b> on the virtual platform <b>Google Meet</b>. The webinar mainly focused on the
            Advanced Driver Assistance System with the allocation of its functional safety in the digitalized frame of reference and to point out the gaps and missing topics that have to be recorded
            in specifications to provide a safe operation of tomorrow’s vehicles. The session was conducted by one of the esteemed professionals of this sector, <b>Marzana Khatun</b>, <i>Engineering
            Researcher, Kempten University of Applied Science.</i></span>
          </p>
          <p>
            <span>The session’s opening remarks were delivered by <b>DR. A.B.M. Siddique Hossain,</b> <i>Advisor, IEEE AIUB Student Branch; Dean, Faculty of Engineering, AIUB,</i> where he discussed
            the frequent road accidents occurring in Bangladesh and emphasized the session’s topic. Afterward, he talked about the necessity of ADAS in Bangladesh while also encouraging the students
            to learn such technologies for adopting the challenge of advanced technology.</span>
          </p>
          <p>
            <b><span>Ms. Marzana Khatun</span></b> <span>started her presentation by talking about her research work. Then she presented a video on ADAS and portrayed the ideas of functional safety.
            Afterward, she briefly discussed the Advance Driver Assistance System concept and highlighted different levels of ADAS. She then discussed her work experience in Germany on this emerging
            sector and shared her experience as a mentor on Functional Safety. Afterward, she emphasized the importance of ADAS as a professional career. Near the end of her presentation, Ms. Khatun
            discussed the design of safety models for customers and their verification and validation. After the session, she had clarified all the participants’ queries through an interactive
            Question-Answer session on this relevant topic.</span>
          </p>
          <p>
            <span>Finally, the session was terminated with the concluding remarks from <b>Tasnuva Tasneem,</b> <i>Motivator & WIE Coordinator, IEEE AIUB Student Branch</i>; <i>Assistant
            Professor, Faculty of Engineering, AIUB.</i> In her speech, she appreciated the way of enlightening the Speaker and her well-delivered informative presentation. She ended the session by
            thanking the IEEE AIUB Student Branch organizing committee for arranging such a delightful event. The session was graced by the presence of <b>Kawshik Shikder</b>, <i>Motivator, IEEE AIUB
            Student Branch; Assistant Professor, Faculty of Engineering, AIUB,</i> and 65 registered participants.</span>
          </p>
          <p>
             
          </p>
          <p>
            <img src="/images/ieee/2021/03/2-1-1024x555.png" alt="" width="1024" height="555" srcset=
            "/images/ieee/2021/03/2-1-300x163.png 300w, /images/ieee/2021/03/2-1-768x416.png 768w, /images/ieee/2021/03/2-1-1024x555.png 1024w, /images/ieee/2021/03/2-1.png 1841w"
             /> <img src="/images/ieee/2021/03/3-1-1024x554.png" alt="" width="1024" height="554" srcset=
            "/images/ieee/2021/03/3-1-300x162.png 300w, /images/ieee/2021/03/3-1-768x415.png 768w, /images/ieee/2021/03/3-1-1024x554.png 1024w, /images/ieee/2021/03/3-1.png 1842w"
             /> <img src="/images/ieee/2021/03/4-1-1024x550.png" alt="" width="1024" height="550" srcset=
            "/images/ieee/2021/03/4-1-300x161.png 300w, /images/ieee/2021/03/4-1-768x413.png 768w, /images/ieee/2021/03/4-1-1024x550.png 1024w, /images/ieee/2021/03/4-1.png 1848w"
             /> <img src="/images/ieee/2021/03/5-1024x555.png" alt="" width="1024" height="555" srcset=
            "/images/ieee/2021/03/5-300x163.png 300w, /images/ieee/2021/03/5-768x416.png 768w, /images/ieee/2021/03/5-1024x555.png 1024w, /images/ieee/2021/03/5.png 1839w"
             /> <img src="/images/ieee/2021/03/6-1024x552.png" alt="" width="1024" height="552" srcset=
            "/images/ieee/2021/03/6-300x162.png 300w, /images/ieee/2021/03/6-768x414.png 768w, /images/ieee/2021/03/6-1024x552.png 1024w, /images/ieee/2021/03/6.png 1841w"
             /> <img src="/images/ieee/2021/03/7-1024x551.png" alt="" width="1024" height="551" srcset=
            "/images/ieee/2021/03/7-300x161.png 300w, /images/ieee/2021/03/7-768x413.png 768w, /images/ieee/2021/03/7-1024x551.png 1024w, /images/ieee/2021/03/7.png 1648w"
             /> <img src="/images/ieee/2021/03/1-1-1024x546.png" alt="" width="1024" height="546" srcset=
            "/images/ieee/2021/03/1-1-300x160.png 300w, /images/ieee/2021/03/1-1-768x409.png 768w, /images/ieee/2021/03/1-1-1024x546.png 1024w, /images/ieee/2021/03/1-1.png 1841w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Webinar`,
  },

  {
    id: 24,
    title: `Mastering Professional Etiquette: Strategies and Tips for the Workplace`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/127034411_3988237737861100_5134762277965125483_o.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            <span>On 05<sup>th</sup> December 2020, <b>IEEE AIUB Student</b> organized the webinar session titled “<b>Mastering Professional Etiquette: Strategies and Tips for the Workplace”</b>
            using the virtual platform ‘<b>Google Meets.’</b> The session was conducted by <b>Dr. Uzma Akhand Hossain</b>, <i>Ph.D. in English Education, Teachers College, Columbia University; Vice
            President, Human Resources & Training, C&T Home Care</i> and <b>Moin Uddin</b>, <i>Clinical Services Team Manager, C&T Home Care; Former Chairperson, IEEE AIUB Student
            Branch.</i></span>
          </p>
          <p>
            <span>The session focusing on the elucidative discussion on the corporate business life’s performance and collaboration was inaugurated by <b>DR. A.B.M. Siddique Hossain,</b> Advisor,
            IEEE AIUB Student Branch; <i>Dean, Faculty of Engineering, AIUB.</i> In his brief speech, he acknowledged the importance of the webinar’s topic while sharing his views on professionalism
            and code of ethics. He also emphasized the necessity of professional etiquettes in the job field.</span>
          </p>
          <p>
            <b><span>Dr. Uzma Akhand Hossain</span></b> <span>started her session by defining professional etiquettes, portrayed the ideas of grooming, self-awareness, personal hygiene, and body
            language. After that, she discussed professional appearance and the importance of maintaining clean and well-pressed clothing. She then portrayed the difference between business and
            business casual days with examples. Afterward, she emphasized the first impression and termed laziness as an impression killer. In his speech, <b>Dr. Hossain</b> gave examples about
            different social skills, verbal, nonverbal communications while also possessing common respect and consideration for others. She included a variety of small but essential details
            regarding professionalism and proper workplace etiquette. Near the end of her presentation, she encouraged the participants to be responsible for their actions and keep their goals
            set.</span>
          </p>
          <p>
            <span>Then, <b>Mr. Moin Uddin</b> took the platform and discussed engineers’ management role and showed few steps for maintaining professionalism in engineering while also sharing his
            journey with IEEE. <b>Mr. Moin</b> ended his speech by encouraging the participants to deliver using their work rather than talking about it. Near the end of the session, an interactive
            question-answer session took place where <b>Dr. Uzma Akhand Hossain</b> answered different queries and suggestions from the participants regarding professionalism and career tips. </span>
          </p>
          <p>
            <b><span>Dr. Hasan Imam,</span></b> <span><i>Senior Assistant Professor, Department of EEE, AIUB,</i> delivered the concluding speech where he appreciated the speakers for their
            continuous guidance and participation in <b>IEEE AIUB SB’s</b> activities. In his concluding remarks, Dr. Imam shared the importance of the webinar topic in professional life and
            concluded the event. The session was graced by the presence of 79 registered participants.</span>
          </p>
          <p>
            <img src="/images/ieee/2020/09/1-1-1024x511.png" alt="" width="1024" height="511" srcset=
            "/images/ieee/2020/09/1-1-200x100.png 200w, /images/ieee/2020/09/1-1-300x150.png 300w, /images/ieee/2020/09/1-1-400x200.png 400w, /images/ieee/2020/09/1-1-600x300.png 600w, /images/ieee/2020/09/1-1-768x383.png 768w, /images/ieee/2020/09/1-1-800x399.png 800w, /images/ieee/2020/09/1-1-1024x511.png 1024w, /images/ieee/2020/09/1-1.png 1432w"
             /> <img src="/images/ieee/2020/09/2-1-1024x443.png" alt="" width="1024" height="443" srcset=
            "/images/ieee/2020/09/2-1-200x87.png 200w, /images/ieee/2020/09/2-1-300x130.png 300w, /images/ieee/2020/09/2-1-400x173.png 400w, /images/ieee/2020/09/2-1-600x260.png 600w, /images/ieee/2020/09/2-1-768x333.png 768w, /images/ieee/2020/09/2-1-800x346.png 800w, /images/ieee/2020/09/2-1-1024x443.png 1024w, /images/ieee/2020/09/2-1.png 1432w"
             /> <img src="/images/ieee/2020/09/3-1-1024x481.png" alt="" width="1024" height="481" srcset=
            "/images/ieee/2020/09/3-1-200x94.png 200w, /images/ieee/2020/09/3-1-300x141.png 300w, /images/ieee/2020/09/3-1-400x188.png 400w, /images/ieee/2020/09/3-1-600x282.png 600w, /images/ieee/2020/09/3-1-768x361.png 768w, /images/ieee/2020/09/3-1-800x376.png 800w, /images/ieee/2020/09/3-1-1024x481.png 1024w, /images/ieee/2020/09/3-1.png 1432w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Webinar`,
  },

  {
    id: 25,
    title: `IEEE AIUB Student Branch successfully organized the First Session of the Virtual Distinguished Lecture Series titled ‘Wonders of Electromagnets’`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/banner-4.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 04th December 2020, <strong>IEEE AIUB Student Branch,</strong> in collaboration with the <strong>IEEE Microwave Theory and Techniques Society (MTT-S)</strong> <strong>AIUB Student
            Branch Chapter</strong> successfully organized the first Distinguished lecture session titled <strong>‘Analog photonic systems: features & techniques to optimize performance’</strong>
            of the Lecture Series <strong><em>Wonders of Electromagnets</em></strong> using the virtual platform <strong>ZOOM Meeting</strong>. The lecture session focused on the advantages and other
            analog photonic features and explained multiple techniques for optimizing their performance.
          </p>
          <p>
            The session was inaugurated by <strong>DR. A.B.M. Siddique Hossain,</strong> <em>Honorable Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch</em> where he appreciated
            the speaker for his graceful participation in the session and gave a brief introduction on <strong>Analog photonic system</strong> and also highlighted the ways Electromagnetic sector has
            developed compared to the past through the means of research and innovation. The session was hosted by <strong>Md. Ashif Islam Oni,</strong> <em>Lecturer, Faculty of Engineering,
            AIUB,</em> and was conducted by <strong>Edward I. Ackerman</strong>, <em>Vice President, R & D for Photonic Systems, Inc. of Billerica, Massachusetts.</em>
          </p>
          <p>
            <strong>Mr. Ackerman</strong> initiated his lecture by showing his gratitude towards the <strong>IEEE AIUB Student Branch</strong> as well as the session participants and introduced the
            contents of the sessions. He then discussed the working principle and details about broadband antenna systems and showed diagrams of receivers for broadband antennas. <strong>Mr.
            Ackerman</strong> then talked about <strong><em>Atacama Large Millimeter Array & US Navy Destroyer</em></strong> with antennas atop masts operating at 50MHz. He then described the
            photonic links for antenna remoting and typical attenuation for silica-based optical fiber while also talking about the digital and analog photonic links. In his speech, Mr. Ackerman gave
            different examples of Microwave Photonic techniques for high-power interferers’ Suppression. He described how the transmit-isolating photonic receive link works and talked about analog
            photonic down conversion.
          </p>
          <p>
            Afterward, he explained how the amplifier fewer microwave photonic link gains and conventional external modulation links. Among many things, <strong>Mr. Ackerman</strong> shared details
            about the inherently broadband linearized modulator, preliminary measurement to verify frequency invariance of v(pie) ratio, and discussed how the performance of analog photonic links
            could be improved while telling how antenna remoting is an interesting and challenging work. <strong>Mr. Ackerman</strong> concluded his speech by talking about the MTT-S Co-sponsored
            Conference: MWP that takes place every year. He concluded with an interactive Question-Answer session where he cleared the doubts of the fellow participants.
          </p>
          <p>
            The concluding speech was delivered by <strong>Dr. Mohammad Hasan Imam,</strong> <em>Counselor, IEEE AIUB Student Branch</em>; <em>Senior Assistant Professor, Faculty of Engineering,
            AIUB,</em> where he appreciated the speaker and his well-delivered lecture. He ended the session by thanking the speaker for his participation and the executive committee for arranging
            such a delightful event. The session was graced by the presence of <strong>Kawshik Shikder</strong>, <em>Motivator, IEEE AIUB Student Branch; Assistant Professor, Faculty of Engineering,
            AIUB</em> and 85 registered participants.
          </p>
          <p>
             
          </p>
          <p>
            <img src="/images/ieee/2020/09/1-4-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2020/09/1-4-200x112.png 200w, /images/ieee/2020/09/1-4-300x169.png 300w, /images/ieee/2020/09/1-4-400x225.png 400w, /images/ieee/2020/09/1-4-600x337.png 600w, /images/ieee/2020/09/1-4-768x432.png 768w, /images/ieee/2020/09/1-4-800x450.png 800w, /images/ieee/2020/09/1-4-1024x576.png 1024w, /images/ieee/2020/09/1-4.png 1366w"
             /> <img src="/images/ieee/2020/09/4-1-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2020/09/4-1-200x112.png 200w, /images/ieee/2020/09/4-1-300x169.png 300w, /images/ieee/2020/09/4-1-400x225.png 400w, /images/ieee/2020/09/4-1-600x337.png 600w, /images/ieee/2020/09/4-1-768x432.png 768w, /images/ieee/2020/09/4-1-800x450.png 800w, /images/ieee/2020/09/4-1-1024x576.png 1024w, /images/ieee/2020/09/4-1.png 1366w"
             /> <img src="/images/ieee/2020/09/3-2-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2020/09/3-2-200x112.png 200w, /images/ieee/2020/09/3-2-300x169.png 300w, /images/ieee/2020/09/3-2-400x225.png 400w, /images/ieee/2020/09/3-2-600x337.png 600w, /images/ieee/2020/09/3-2-768x432.png 768w, /images/ieee/2020/09/3-2-800x450.png 800w, /images/ieee/2020/09/3-2-1024x576.png 1024w, /images/ieee/2020/09/3-2.png 1366w"
             /> <img src="/images/ieee/2020/09/2-4-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2020/09/2-4-200x112.png 200w, /images/ieee/2020/09/2-4-300x169.png 300w, /images/ieee/2020/09/2-4-400x225.png 400w, /images/ieee/2020/09/2-4-600x337.png 600w, /images/ieee/2020/09/2-4-768x432.png 768w, /images/ieee/2020/09/2-4-800x450.png 800w, /images/ieee/2020/09/2-4-1024x576.png 1024w, /images/ieee/2020/09/2-4.png 1366w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `mtts`,
  },

  {
    id: 26,
    title: `IEEE AIUB Student Branch successfully organized a webinar titled ‘Machine Learning for Human Gait Estimations’`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/banner.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 8<sup>th</sup> November 2020, the <strong>IEEE AIUB Student Branch,</strong> in collaboration with the <strong>IEEE EMBS AIUB SB Chapter,</strong> successfully organized a webinar
            titled <strong>‘Machine Learning for Human Gait Estimations’</strong> through the online platform <strong>Google Meet</strong>. The webinar was conducted by <strong>Dr. Saaveethya
            Sivakumar,</strong> <em>Student Representative, IEEE Region 10 (Asia Pacific Region),</em> who mainly focused on the performance and collaboration of machine learning in the resolution of
            Human Gait.
          </p>
          <p>
            The session was inaugurated by the opening remarks from <strong>Prof. Dr. A.B.M. Siddique Hossain</strong>, <em>Advisor, IEEE AIUB Student Branch; Dean, Faculty of Engineering, AIUB,</em>
            who talked about how technologies have developed from time to time and the ways they are easing off human efforts to a significant extent. He also highlighted the importance of artificial
            intelligence, machine learning, and python language in a wide range of Biomedical Engineering applications. He concluded by encouraging the participants to focus on developing their
            skills instead of running after grades only to compete in the current job market.
          </p>
          <p>
             
          </p>
          <p>
            After that, <strong>Dr. Saaveethya Sivakumar</strong> started her session by briefly introducing herself and sharing her educational and professional background. She gave an elaborate
            explanation on gait and gait analysis along with the areas of its use and explained the different gait parameters and gait analysis methodologies using both laboratory and wearable
            systems. Then, she explained the working procedures of laboratory systems for gait measurement including its limitations and displayed a representation of the wearable model system
            showing how the data is collected and used from it. Besides, she also described different machine learning parts that are used in wearable systems for gait analysis.
          </p>
          <p>
            Following that, Dr. Sivakumar talked about the significance of Artificial Neural Networks (ANN), including its basic functionality and the working process of the Artificial Neural
            Networks (ANN) training algorithm. Afterward, she talked about the ANN-based gait estimations, its current trends, and the potential future direction for the ANN-based gait estimations.
            She concluded by highlighting some limitations and challenges of these research works, including limited data, generalization, and change management. Then, an interactive question-answer
            session took place where the speaker answered the questions asked by the participants.
          </p>
          <p>
            Then, <strong>Dr. Md. Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch; Advisor, IEEE EMBS AIUB SB Chapter; Senior Assistant Professor, Faculty of Engineering, AIUB</em>
            delivered the concluding speech emphasized the importance of machine learning in current times due to its wide range of applications. He motivated the participants to focus on different
            languages like Machine Language and Python. <em>The session was graced by the presence of <strong>110</strong> registered participants. </em>
          </p>
          <p>
            <img src="/images/ieee/2020/09/5-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2020/09/5-200x112.png 200w, /images/ieee/2020/09/5-300x169.png 300w, /images/ieee/2020/09/5-400x225.png 400w, /images/ieee/2020/09/5-600x337.png 600w, /images/ieee/2020/09/5-768x432.png 768w, /images/ieee/2020/09/5-800x450.png 800w, /images/ieee/2020/09/5-1024x576.png 1024w, /images/ieee/2020/09/5.png 1366w"
             /> <img src="/images/ieee/2020/09/6-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2020/09/6-200x112.png 200w, /images/ieee/2020/09/6-300x169.png 300w, /images/ieee/2020/09/6-400x225.png 400w, /images/ieee/2020/09/6-600x337.png 600w, /images/ieee/2020/09/6-768x432.png 768w, /images/ieee/2020/09/6-800x450.png 800w, /images/ieee/2020/09/6-1024x576.png 1024w, /images/ieee/2020/09/6.png 1366w"
             /> <img src="/images/ieee/2020/09/3-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2020/09/3-200x112.png 200w, /images/ieee/2020/09/3-300x169.png 300w, /images/ieee/2020/09/3-400x225.png 400w, /images/ieee/2020/09/3-600x337.png 600w, /images/ieee/2020/09/3-768x432.png 768w, /images/ieee/2020/09/3-800x450.png 800w, /images/ieee/2020/09/3-1024x576.png 1024w, /images/ieee/2020/09/3.png 1366w"
             /> <img src="/images/ieee/2020/09/4-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2020/09/4-200x112.png 200w, /images/ieee/2020/09/4-300x169.png 300w, /images/ieee/2020/09/4-400x225.png 400w, /images/ieee/2020/09/4-600x337.png 600w, /images/ieee/2020/09/4-768x432.png 768w, /images/ieee/2020/09/4-800x450.png 800w, /images/ieee/2020/09/4-1024x576.png 1024w, /images/ieee/2020/09/4.png 1366w"
             /> <img src="/images/ieee/2020/09/2-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2020/09/2-200x112.png 200w, /images/ieee/2020/09/2-300x169.png 300w, /images/ieee/2020/09/2-400x225.png 400w, /images/ieee/2020/09/2-600x337.png 600w, /images/ieee/2020/09/2-768x432.png 768w, /images/ieee/2020/09/2-800x450.png 800w, /images/ieee/2020/09/2-1024x576.png 1024w, /images/ieee/2020/09/2.png 1366w"
             /> <img src="/images/ieee/2020/09/1-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2020/09/1-200x112.png 200w, /images/ieee/2020/09/1-300x169.png 300w, /images/ieee/2020/09/1-400x225.png 400w, /images/ieee/2020/09/1-600x337.png 600w, /images/ieee/2020/09/1-768x432.png 768w, /images/ieee/2020/09/1-800x450.png 800w, /images/ieee/2020/09/1-1024x576.png 1024w, /images/ieee/2020/09/1.png 1366w"
             />
          </p>
          <p>
             
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Webinar`,
  },

  {
    id: 27,
    title: `IEEE AIUB Student Branch successfully organized a Distinguished Lecture Session titled  ‘Epilepsy, Algorithms, and AI: Personalized Seizure Forecasting’`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/4.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On <strong>5<sup>th</sup> November 2020</strong>, the <strong>IEEE AIUB Student Branch,</strong> in collaboration with the <strong>IEEE EMBS AIUB Student Branch
            Chapter,</strong> successfully organized a Distinguished Lecture session titled <strong>“Epilepsy, Algorithms, and AI: Personalized Seizure Forecasting”</strong> through the
            virtual platform, <strong>Google Meet</strong>. The session was conducted by <strong>Prof.</strong> <strong>David B. Grayden,</strong> <em>Clifford Chair, Neural Engineering;</em>
            <em>Director, MSE Medical Technologies Research Platform</em><em>, Department of Biomedical Engineering, University of Melbourne,</em> who mainly focused on the disorder epilepsy and
            significant impacts of AI-based computational studies on it.
          </p>
          <p>
             
          </p>
          <p>
            The event was hosted by <strong>Dr. Mohammad Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch; Advisor, IEEE EMBS AIUB SB Chapter; Senior Assistant Professor,
            Faculty of Engineering, AIUB</em> and was inaugurated by <strong>Prof. Dr. A.B.M Siddique Hossain</strong>; <em>Advisor, IEEE AIUB Student Branch; Dean, Faculty of Engineering,
            AIUB</em> who briefly gave an idea of the disorder epilepsy along with the technologies that biomedical engineers have developed till date. He also highlighted some critical reasons for
            this kind of disorder and the ways of reducing the probability of such an occurrence in the next generation.
          </p>
          <p>
            After that, <strong>Prof. David B. Grayden</strong> started his session by explaining the epileptic seizures and talked about how big data and deep learning can be used to predict them.
            He also explained how deep learning neural networks could be used for understanding the input-output relationships of epileptic seizures. He talked about the Kaggle competition that took
            place in the past, where 478 teams participated and submitted 10082 algorithms on Crowd-Sourcing Reproducible Seizures Prediction concepts. He also displayed some of the selected works
            from the competition. Then, he talked about different types of seizure cycles, taking other environmental conditions into account.
          </p>
          <p>
            He portrayed graphical representations of the seizure cycles from the previous research works for enriching his explanations. Later, Prof. Grayden gave an overview of the current research
            works which are going on as a part of the treatment of epileptic seizures. He also gave an overview of how patients can predict their seizures using a minimally invasive seizure
            forecasting app from their smartphones. Besides, he talked about the ongoing research works where biomedical engineers are working for the efficient determination of seizure forecasting
            through machine learning and long-term EEG. Then, an interactive question-answer session took place where the speaker answered all the questions from the participants.
          </p>
          <p>
            Later<strong>, Prof. Dr. Shaikh Anwarul Fattah,</strong> <em>Vice-Chair, IEEE EMBS Bangladesh Chapter;</em> <em>Nominations & Appointment Chair, IEEE Bangladesh Section;
            Professor, Department of EEE, BUET</em><em> </em>and <strong>Prof. Dr. Celia Shahnaz, </strong><em>Chair, IEEE Bangladesh Section; Chair, IEEE EMBS Bangladesh Chapter;
            Professor, Department of EEE, BUET</em> respectively shared their experience on working with seizure prediction. They also talked about its healthy prospects in the ongoing research.
          </p>
          <p>
            After that, <strong>Prof. Dr. Md. Abdur Rahman</strong>, <em>Advisor, IEEE AIUB SB; Vice-Chairperson (Activity), IEEE Bangladesh Section; Associate Dean, Faculty of Engineering,
            AIUB delivered the concluding speech where he highlighted the development of AI in the modern world along with its involvement in Biomedical sectors. He also shared his research work
            experience. He expressed his gratitude towards the speaker for providing his valuable time and the student branch for successfully organizing the event. The event was graced by the
            presence of <strong>191</strong> registered participants from different parts of the world, including numerous researchers in the sector of Biomedical Engineering.</em>
          </p>
          <p>
            <img src="/images/ieee/2021/03/1-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2021/03/1-200x112.png 200w, /images/ieee/2021/03/1-300x169.png 300w, /images/ieee/2021/03/1-400x225.png 400w, /images/ieee/2021/03/1-600x337.png 600w, /images/ieee/2021/03/1-768x432.png 768w, /images/ieee/2021/03/1-800x450.png 800w, /images/ieee/2021/03/1-1024x576.png 1024w, /images/ieee/2021/03/1.png 1366w"
             /> <img src="/images/ieee/2021/03/2-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2021/03/2-200x112.png 200w, /images/ieee/2021/03/2-300x169.png 300w, /images/ieee/2021/03/2-400x225.png 400w, /images/ieee/2021/03/2-600x337.png 600w, /images/ieee/2021/03/2-768x432.png 768w, /images/ieee/2021/03/2-800x450.png 800w, /images/ieee/2021/03/2-1024x576.png 1024w, /images/ieee/2021/03/2.png 1366w"
             /> <img src="/images/ieee/2021/03/3-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2021/03/3-200x112.png 200w, /images/ieee/2021/03/3-300x169.png 300w, /images/ieee/2021/03/3-400x225.png 400w, /images/ieee/2021/03/3-600x337.png 600w, /images/ieee/2021/03/3-768x432.png 768w, /images/ieee/2021/03/3-800x450.png 800w, /images/ieee/2021/03/3-1024x576.png 1024w, /images/ieee/2021/03/3.png 1366w"
             /> <img src="/images/ieee/2021/03/4-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2021/03/4-200x112.png 200w, /images/ieee/2021/03/4-300x169.png 300w, /images/ieee/2021/03/4-400x225.png 400w, /images/ieee/2021/03/4-600x337.png 600w, /images/ieee/2021/03/4-768x432.png 768w, /images/ieee/2021/03/4-800x450.png 800w, /images/ieee/2021/03/4-1024x576.png 1024w, /images/ieee/2021/03/4.png 1366w"
             />
          </p>
          <p>
             
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Web Show`,
  },

  {
    id: 28,
    title: `“AIUBIANS ON ERASMUS” in Celebration of the EMA DAY 2020`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/22.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 31<sup>st</sup> October 2020, the <strong>IEEE AIUB Student Branch</strong> in association with the <strong>Erasmus Mundus Association</strong> successfully organized a webinar titled
            <strong>‘AIUBIANS ON ERASMUS’</strong> in celebration of the <strong>EMA DAY 2020.</strong> The webinar was conducted by the alumni of AIUB who achieved the Erasmus Mundus Scholarship for
            their post-graduation. The speakers focused on the scopes of achieving the esteemed scholarship for higher education.
          </p>
          <p>
             
          </p>
          <p>
            The first session was conducted by <strong>Mr. Nafis Kamal,</strong> <em>Postgraduate Student, Erasmus+ Joint Master’s degree (EMJMD) in Security and Cloud Computing,</em> who started by
            introducing himself and sharing his experience with Erasmus+ program on security and cloud computing. He talked about the application procedure and discussed how the participants can
            ensure to be a better candidate for the selection process. After that, the second speaker, <strong>Ms. Tulsi Chowdhury</strong>, <em>Hardware Subproject Leader, Bosch Magyarország;
            Postgraduate Student, Erasmus+ Joint Master’s degree in Smart Systems Integration, </em>took the platform and introduced the Erasmus+ program on Smart Systems Integration (SSI+). She
            described the program along with the application process.
          </p>
          <p>
             
          </p>
          <p>
            After that, <strong>Mr. S. M. Mukit</strong>, <em>EMJMD, Photonic Integrated Circuits, Sensors, and Networks</em>; <strong>Mr. Mrinmoy Roy,</strong> <em>EMJMD, Photonic Integrated
            Circuits, Sensors and Networks</em>; <strong>Mr. Siam Hasan Khan, </strong><em>EMJMD, Sustainable Transportation and Electrical Power System (STEPS);</em> <strong>Mr. Irfan
            Yousuf,</strong> <em>EMJMD, Sustainable Transportation and Electrical Power System (STEPS)</em> and <strong>Mr. Miftah Mahmood,</strong> <em>EMJMD, Europhotonics,</em> took the
            platform one after another and elaborately described their respective study programs. They shared details about the application procedures along with their own experiences.
          </p>
          <p>
             
          </p>
          <p>
            Later, <strong>Mr. Akib Jayed Islam,</strong> <em>EMJMD</em><strong>,</strong> <em>Color in Science and Industry;</em> <strong>Mr. Masum Ahmed,</strong> <em>Smart Cities &
            Communities;</em> <strong>Mr. Tajwar Abrar Aleef,</strong> <em>EMJMD</em><strong>,</strong> <em>Medical Imaging and Applications;</em> <strong>Mr. Anindo Saha,</strong> <em>EMJMD</em>,
            <em>MAIA</em> and <strong>Mr. Kazi Ahmed Asif Fuad,</strong> <em>EMJMD</em><strong>,</strong> <em>IPCV; Lecturer, Faculty of Engineering, AIUB</em> took the platform and discussed the
            application processes of their respective programs and shared their experiences regarding the programs with Erasmus+. They encouraged the participants to apply for the program by pointing
            out some key benefits they have experienced.
          </p>
          <p>
             
          </p>
          <p>
            Lastly, an interactive Q/A session took place where the speakers answered the questions from the participants. The concluding speech was delivered by <strong>Mr. Rajon Bhuiyan</strong>
            and <strong>Mr. Sayed Muhammad Baker,</strong> <em>EMJMD</em><strong>,</strong> <em>Molecular Nano and Bio-Photonics for Telecommunications and
            Biotechnologies</em><strong>,</strong><em> </em>who thanked the speakers for conducting the session and encouraged the participants to apply by pointing out about the success of many
            alumni from AIUB with the Erasmus Mundus Joint Master’s Degree. The session was graced by the presence of 172 registered participants.
          </p>
          <p>
             
          </p>
          <p>
            <img src="/images/ieee/2020/10/11.jpg" alt="" width="1161" height="1622" srcset=
            "/images/ieee/2020/10/11-215x300.jpg 215w, /images/ieee/2020/10/11-733x1024.jpg 733w, /images/ieee/2020/10/11.jpg 1161w"
             /> <img src="/images/ieee/2020/10/22.png" alt="" width="1430" height="851" srcset=
            "/images/ieee/2020/10/22-200x119.png 200w, /images/ieee/2020/10/22-300x179.png 300w, /images/ieee/2020/10/22-400x238.png 400w, /images/ieee/2020/10/22-600x357.png 600w, /images/ieee/2020/10/22-768x457.png 768w, /images/ieee/2020/10/22-800x476.png 800w, /images/ieee/2020/10/22-1024x609.png 1024w, /images/ieee/2020/10/22.png 1430w"
             /> <img src="/images/ieee/2020/10/33.png" alt="" width="1430" height="866" srcset=
            "/images/ieee/2020/10/33-200x121.png 200w, /images/ieee/2020/10/33-300x182.png 300w, /images/ieee/2020/10/33-400x242.png 400w, /images/ieee/2020/10/33-600x363.png 600w, /images/ieee/2020/10/33-768x465.png 768w, /images/ieee/2020/10/33-800x484.png 800w, /images/ieee/2020/10/33-1024x620.png 1024w, /images/ieee/2020/10/33.png 1430w"
             /> <img src="/images/ieee/2020/10/44.png" alt="" width="1430" height="846" srcset=
            "/images/ieee/2020/10/44-200x118.png 200w, /images/ieee/2020/10/44-300x177.png 300w, /images/ieee/2020/10/44-400x237.png 400w, /images/ieee/2020/10/44-600x355.png 600w, /images/ieee/2020/10/44-768x454.png 768w, /images/ieee/2020/10/44-800x473.png 800w, /images/ieee/2020/10/44-1024x606.png 1024w, /images/ieee/2020/10/44.png 1430w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Webinar`,
  },

  {
    id: 29,
    title: `IEEE AIUB Student Branch WIE Affinity Group successfully organized a workshop series on “Web Design from Scratch: HTML, CSS & Bootstrap”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/banner-3.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 16<sup>th</sup> & 17<sup>th</sup> October 2020, <strong>IEEE AIUB Student Branch WIE Affinity Group</strong> in collaboration with the <strong>IEEE AIUB Student Branch</strong> has
            successfully organized a two-day long workshop series, titled <strong>“Web Design from Scratch: ‘HTML, CSS & Bootstrap”.</strong> Amid the ongoing COVID-19 crisis, the workshops were
            cordially organized through a virtual platform of <strong>CISCO WEBEX MEETING</strong>. Both of the workshops were inaugurated by <strong>Tasnuva Tasneem</strong>, <em>Motivator & WIE
            Coordinator, IEEE AIUB Student Branch; Assistant Professor, Faculty of Engineering, AIUB</em> who notified the participants regarding the importance of web design in modern times. She
            also expressed her gratitude towards the participants for their tremendous response in the web design workshop series.
          </p>
          <p>
            The first day of the workshop series titled, <strong>“Workshop Day 01: Learning HTML”</strong> was successfully conducted by <strong>Victor Stany Rozario</strong>, <em>Assistant
            Professor, Faculty of Science & Information Technology, AIUB</em>. He started the session by discussing the different parts and types of the website and how web development has turned
            over into a high-end job sector in the current technology. He then gave a detailed theoretical idea regarding the basic building blocks of a website i.e. HTML along with its importance in
            web development. Afterward, he elaborately discussed the career guidelines for the enthusiasts to get started with front-end web development. The workshop was concluded with an
            interactive question-answer session where Mr. Stany cleared all of the queries from the participants.
          </p>
          <p>
            The second day of the workshop series titled, <strong>“Workshop Day 02: CSS & Bootstrap”</strong> was successfully conducted by <strong>Md. Tariqul Islam Manon</strong>, <em>RWD
            (Responsive Web Design) Mentor & Career Advisor, CodesTrust Bangladesh.</em> He started his session about the theoretical concepts of CSS (Cascading Styling Sheets) and various
            taglines of CSS including its most popular icon set and toolkit. He also spoke briefly about the usage and properties of each tag and classes of CSS along with their importance. Mr. Tariq
            also emphasized the wide range of web applications of Front-End Web Development in today’s technology. Following that, an interactive Question-Answer session took place which marked the
            end of the session.
          </p>
          <p>
            The two-day long workshops were put to an end by <strong>Dr. Mohammad Hasan Imam</strong>, Counselor, IEEE AIUB Student Branch; Advisor, IEEE EMBS AIUB SB Chapter; Senior Assistant
            Professor, Faculty of Engineering, AIUB who delivered the concluding speech where he expressed his wholehearted gratitude towards the honorable speaker and all participants for their
            valuable participation in the workshop series. The event was graced by the presence of a total of 93 participants.
          </p>
          <p>
            Following that, a <strong>Front-End Web Design Competition</strong> was also organized where participants were given a sample task by the means of their creativity and designing skills.
            The competition started from <strong>19th October 2020</strong> and ended till <strong>21<sup>th</sup> October 2020</strong> with the aim of preparing the participants for a highly paid
            job sector of Web Designing and User Experience during this worldwide crisis. A total of <strong>55+ individuals participated</strong> from all over Bangladesh and also from three other
            Asian countries. The judgments of the web design competition were made by some highly qualified and expert judges based on criteria which include- Creativity, Usability, User
            Experience/User Interface, Navigations, Formats, Styling, and many more. Based on these criteria, the top 3 Web Designs provided by the participants achieved the <strong>“Best Web
            Designer”</strong> award along with a <strong>Certificate of Appreciation</strong>. The top 3 achievers along with their position are mentioned below-
          </p>
          <ul>
            <li>
              <strong>Samira Sobhan</strong> (Winner)
            </li>
            <li>
              <strong>Hasibul Hasan Shovo</strong> (1<sup>st</sup> Runner Up)
            </li>
            <li>
              <strong>M. Khalid Mahmud</strong> (2<sup>nd</sup> Runner Up)
            </li>
          </ul>
          <p>
            The top 3 Web Designs were published on the official website of the <strong>IEEE AIUB Student Branch</strong>. Moreover, all other participants were also provided with a
            <strong>Certificate of Participation</strong> for their enthusiastic engagement in the competition.
          </p>
          <p>
            <img src="/images/ieee/2020/09/1-3-1024x565.png" alt="" width="1024" height="565" srcset=
            "/images/ieee/2020/09/1-3-200x110.png 200w, /images/ieee/2020/09/1-3-300x166.png 300w, /images/ieee/2020/09/1-3-400x221.png 400w, /images/ieee/2020/09/1-3-600x331.png 600w, /images/ieee/2020/09/1-3-768x424.png 768w, /images/ieee/2020/09/1-3-800x442.png 800w, /images/ieee/2020/09/1-3-1024x565.png 1024w, /images/ieee/2020/09/1-3.png 1230w"
             /> <img src="/images/ieee/2020/09/2-3-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2020/09/2-3-200x112.png 200w, /images/ieee/2020/09/2-3-300x169.png 300w, /images/ieee/2020/09/2-3-400x225.png 400w, /images/ieee/2020/09/2-3-600x337.png 600w, /images/ieee/2020/09/2-3-768x432.png 768w, /images/ieee/2020/09/2-3-800x450.png 800w, /images/ieee/2020/09/2-3-1024x576.png 1024w, /images/ieee/2020/09/2-3.png 1306w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `wie`,
  },

  {
    id: 30,
    title: `IEEE AIUB STUDENT BRANCH successfully organized a webinar Session on  Application of Wireless Sensor Network (WSN) in Precision Agriculture: Issues and Challenges`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Banner-2.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On <strong>9<sup>th</sup> October 2020</strong>, the <strong>IEEE AIUB Student Branch</strong> in collaboration with the <strong>IEEE Computer Society AIUB Student
            Branch Chapter</strong> successfully organized a webinar session titled <strong>Application of Wireless Sensor Networks (WSN) in Precision Agriculture: Issues and
            Challenges</strong> through the <strong>CISCO WEBEX MEETING</strong> platform. This webinar mainly focused on the primary and brief ideas on <strong>Wireless Sensor Networks
            (WSN)</strong> in the field of Precision Agriculture along with the ways of implementing these technologies in this promising field. The session was conducted by <strong>Mohamed Rawidean
            Mohd Kassim</strong> <em>Asia-Pacific (Region 10) Regional Coordinator,</em> <em>IEEE Computer Society; Research & Development Manager, Technology Deployment Department,
            Malaysian Institute of Microelectronic Systems, Ministry of Science, Technology and Innovation Malaysia; Distinguished Speaker, IEEE Computer Society.</em>
          </p>
          <p>
            The seminar was inaugurated by the opening remarks from <strong>Prof. Dr A.B.M Siddique Hossain</strong>, <em>Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch</em>
            who talked about the importance of modern technologies including the importance of IoT in agriculture and how we need to adapt to technology along with WSN for developing the agricultural
            sector even further for better production.  He also added by highlighting the fact that how the food demand has increased in the whole world due to the increased in the world’s
            population compared to the past few decades. He concluded by emphasizing the research and development sectors of monitoring sensors and controlling networks and also encouraged the
            participants regarding its tentative prospects.
          </p>
          <p>
            After that, <strong>Mohamed Rawidean Mohd Kassim</strong><em> </em>started the session by talking about his profession and gave a brief history on the topic of Wireless Sensor
            Networks and IoT along with the way these technologies have evolved compared to the past. He also elaborately explained the importance of IoT in the genre of Agriculture and also
            highlighted the evolution of the agricultural technologies from manual to the mode of automation. He also portrayed numerous figures to the audience that represents how farms will look in
            the future by means of advanced technologies considering the current World Food Supply and Demand. <strong>Mr Kassim</strong> then elaborately explained the architecture of the Wireless
            Sensor Networks and IoT sensors, including its working procedures along with its numerous advantages like higher yield. As a part of the instance, the speaker highlighted the examples of
            numerous oil palm breeding and smart mushroom cultivation systems where WSN and IoT sensors can be used for controlling and monitoring the entire process. Also, he also emphasized the
            disadvantages of avoiding these sensors by displaying some data that solidifies his statements.
          </p>
          <p>
            Besides, <strong>Mr Kassim</strong> gave an overview of the steps that farmers should follow for implanting these smart cultivation systems to obtain the maximum possible productivity and
            also emphasized the disadvantages of avoiding these sensors by displaying some data that solidifies all his statements. Then, he elaborately talked about the issues and challenges that
            farmers generally faced for maintaining these smart cultivation farms to its fullest and also shared some required knowledge & awareness with the help of which farmers can deploy
            these systems in the rural areas. He concluded by talking about how agriculture production needs to be increased by the year 2050 to meet world food demands and explained how WSN, AI, Big
            Data, Robotics, Drones, Machine vision, and Cognitive technologies could play their respective role to achieve that. Following that, a Question-Answer Session took place
            where <strong>Mr Kassim</strong> effectively answered all the questions asked by the participant.
          </p>
          <p>
            After that, <strong>Dr Mohammad Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch; Senior Assistant Professor, Faculty of Engineering, AIUB</em> took the platform and
            gave the concluding speech where he appreciated the initiatives taken by the student branch to organize this webinar and showed gratitude to the speaker for conducting the session. He
            also talked about the ongoing research works of Wireless Sensor Networks along with its current demand and healthy prospects. He also suggested the students adapt various technology along
            with WSNs for developing the agricultural sector for better yield considering the food demand of the country in the near future. Following that, a group photo session took place
            consisting of all the 75+ registered participants, which marked the end of the session.
          </p>
          <p>
            <img src="/images/ieee/2021/03/SS1-1024x547.jpg" alt="" width="1024" height="547" srcset=
            "/images/ieee/2021/03/SS1-200x107.jpg 200w, /images/ieee/2021/03/SS1-300x160.jpg 300w, /images/ieee/2021/03/SS1-400x214.jpg 400w, /images/ieee/2021/03/SS1-600x321.jpg 600w, /images/ieee/2021/03/SS1-768x410.jpg 768w, /images/ieee/2021/03/SS1-800x428.jpg 800w, /images/ieee/2021/03/SS1-1024x547.jpg 1024w, /images/ieee/2021/03/SS1.jpg 1366w"
             />
          </p>
          <p>
            <img src="/images/ieee/2020/10/SS2-1024x576.jpg" alt="" width="1024" height="576" srcset=
            "/images/ieee/2020/10/SS2-200x112.jpg 200w, /images/ieee/2020/10/SS2-300x169.jpg 300w, /images/ieee/2020/10/SS2-400x225.jpg 400w, /images/ieee/2020/10/SS2-600x337.jpg 600w, /images/ieee/2020/10/SS2-768x432.jpg 768w, /images/ieee/2020/10/SS2-800x450.jpg 800w, /images/ieee/2020/10/SS2-1024x576.jpg 1024w, /images/ieee/2020/10/SS2.jpg 1366w"
             /> <img src="/images/ieee/2020/10/SS3-1024x576.jpg" alt="" width="1024" height="576" srcset=
            "/images/ieee/2020/10/SS3-200x112.jpg 200w, /images/ieee/2020/10/SS3-300x169.jpg 300w, /images/ieee/2020/10/SS3-400x225.jpg 400w, /images/ieee/2020/10/SS3-600x337.jpg 600w, /images/ieee/2020/10/SS3-768x432.jpg 768w, /images/ieee/2020/10/SS3-800x450.jpg 800w, /images/ieee/2020/10/SS3-1024x576.jpg 1024w, /images/ieee/2020/10/SS3.jpg 1366w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `cs`,
  },

  {
    id: 31,
    title: `IEEE Young Professionals Bangladesh and IEEE Bangladesh Section jointly presents the year’s flagship event, “IEEE Student Transition and Elevation Partnership (STEP) 2020: Transition to a Sustainable Future.”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/FB-event-banner-1536x743-1.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 5<sup>th</sup> September 2020, IEEE Young Professionals Bangladesh has successfully organized the year’s flagship event, <strong>“IEEE Student Transition and Elevation Partnership
            (STEP) 2020: Transition to a Sustainable Future”</strong> for the very first time, on a virtual platform. The event was committed to providing a dynamic program for facilitating the
            transition from Student member to young professional by introducing the opportunities and benefits of IEEE membership during the onset of a STEM career. The event was jointly organized by
            <strong>IEEE Young Professionals Bangladesh</strong> and <strong>IEEE Bangladesh Section</strong> in collaboration with <strong>IEEE BUET Student Branch</strong>, <strong>IEEE NSU Student
            Branch,</strong> and <strong>IEEE AIUB Student Branch</strong>.
          </p>
          <p>
            The event was inaugurated with the kind words by <strong>Dr. M Tanseer Ali</strong>, <em>Vice-Chair (Technical), IEEE YP Bangladesh Section.</em> He thanked the entire management team and
            committee members and volunteers, and executives for working hard to make the event successful. He also provided an overview of the whole event design and introduced all the event’s
            respected speakers. He then explained the significance and benefits of IEEE Membership and joining IEEE YP Affinity Group. Later, <strong>Prof. Celia Shahnaz</strong>, <em>Ph.D. SMIEEE,
            FIEB; Chair, IEEE Bangladesh Section, Chair, Women in SIGHT Working Group</em> took the screen. The speaker highlighted the mission and vision of the prestigious flagship event, IEEE STEP
            2020. She also thanked the organizers for organizing such a big event by collaborating among the student branches and arranging such an informative event for enthusiastic students.
          </p>
          <p>
            The first session was introduced as <strong>“Prospects of E-Learning Environment: Bridge Between Knowledge-based Education and Skill-based Profession,”</strong> initiated by
            <strong>Muhammad Qasim Pasta,</strong> <em>Assistant Professor, Usama Institute of Technology, Member, IEEE YP Karachi Section.</em> The session was solely focused on explaining the
            advantages of e-learning along with all of the bright sides of e-learning and education. He portrayed the key points of knowledge-based education through E-Learning and
            hands-on-skills-based learning in online platforms. He also encouraged the students to come forward with fresh and innovative ideas for sustainable development through e-learning.
          </p>
          <p>
            The second session was named “<strong>Problem Solving Approaches in POST COVID Scenarios by Technologists,”</strong> initiated by <strong>Sabyasachi Mukhopadhyay</strong>, <em>Assistant
            Professor, Faculty of Analytics in PG Management Studies, BIMS Kolkata (Affiliated to MAKAUT), IEEE Kolkata Section.</em> He talked about the organizing lists, user beneficiaries,
            breakthroughs, benefits, and risks of today’s technologies. The speaker also explained different prospectuses like problem canvases, solution canvases, grant charts, and many more.
            Lastly, he explained the organizing lists, user beneficiaries, breakthroughs, benefits, and risks of today’s technologies, and the research projects’ cost-effectiveness.
          </p>
          <p>
            The third session was entitled <strong>“An insight into the prospects of E-Learning Environment: “Bridge between knowledge-based Education and skills-based Profession”</strong> initiated
            by <strong>Dr. M A Jabber</strong>, <em>Professor, Vardhaman College of Engineering, Vice Chair, IEEE Hyderabad CS Chapter.</em> He explained the classical approach of education on
            knowledge transmission, development of learning theories and mentioned the four revolutions, i.e., the invention of reading and writing, the emergence of the profession, development of
            technology, and finally, the development of electronic technology. He provided the types of E-Learning such as Web-based training, Supported online learnings, Informal E-learning, etc. He
            also emphasized the benefits of E-Learning that included, uniformity of delivery of training, achieving cost reductions, and log or track learning activities.
          </p>
          <p>
            The fourth session was entitled <strong>“Sustainable Energy Development application of Artificial Intelligence in Hydropower Plant and role of IoT to avoid spreading of
            COVID-19,”</strong> which was initiated by <strong>Krishna Kumar</strong>, <em>Research and Development Engineer, UJVN Ltd., Uttarakhand Research Scholar, IIT Roorkee.</em> He portrayed
            the typical
          </p>
          <p>
            structure of a hydroelectric power plant and talked about the barriers of hydropower development and the issues of operating a hydropower plant. He then proposed an IoT architectural
            model to avoid COVID-19 in hydropower plants and the benefits and economic impact of Hydroelectric power plants.
          </p>
          <p>
            The fifth session was described as <strong>“Sustainable Future: Coping with Post-Pandemic World,”</strong> which was initiated by <strong>Zafir Shafiee Chowdhury,</strong> <em>Co-founder,
            Bondstein Technologies, Co-founder, Singularity Limited, IEEE Bangladesh Section.</em> He provided a brief idea regarding the sectors that mostly sensor industries will be highly
            impactful and be revolutionary. He mentioned a narrowband IoT Technology named Lorawan, a NB-IoT, which will create massive impacts soon.
          </p>
          <p>
            The sixth session was entitled “IoT Prospects of E-Learning in Education and Skills Enhancement Trainings,” initiated by <strong>Dr. Md. Tausif Ahmad,</strong> <em>Head</em> <em>of</em>
            <em>Electrical and Electronics Engineering, Motihari College of Engineering, Motihari, IEEE Kolkata Section.</em> He emphasized the International Telecommunication Unit and the
            technologies that influence Education, Training, and Learning and the digital collaboration that includes the synchronous and asynchronous system. Also, he highlighted the impact of new
            technology on the learning environment that has allowed learning to become a more dynamic approach.
          </p>
          <p>
            The seventh session was about <strong>“Importance of STEM Education and its Impact,</strong>” which <strong>Raamish Khan,</strong> <em>SAC Ambassador, IEEE Islamabad Section, Electrical
            Engineer, Business Excellence PVT Ltd.</em> He portrayed what STEM signifies, along with the importance of STEM Education. Later, he suggested the steps that will help implement STEM
            Education and highlighted the challenges and barriers to implement STEM Education. The speaker concluded by describing the benefits of STEM Education.
          </p>
          <p>
            The eighth session was entitled <strong>“Importance of Research for Sustainable Growth to survive and grow in Post-Pandemic Era: A Journey,”</strong> initiated by <strong>Dr. Ashish
            Khanna</strong>, <em>Associate Professor, Maharaja Agrasen Institute of Technology, IEEE Delhi Section.</em> He talked about different research approaches and methodologies. The speaker
            discussed how one should handle data and work with data visualization and analysis. Moreover, he suggested the participants concentrate on publishing papers and publication houses and
            work with startups, clinical data, sustainability, and prototypic research approaches.
          </p>
          <p>
            The ninth session was entitled <strong>“Necessity of Community Engagement for Sustainable Project Design in the post-pandemic world”</strong> initiated by <strong>Dr. Shaikh
            Fattah</strong>, <em>Chair, IEEE HAC Educational Chair, Advisor, IEEE YP Bangladesh Section.</em> He explained the main motive of sustainable development goals and their area of
            application. He then signified the principles of effective Community Engagements along with its key factors. He also introduced sustainable project designing models and participatory
            project designs. Lastly, he highlighted the multidisciplinary involvement as well as the planning and implementation of the projects.
          </p>
          <p>
            The day-long event was concluded with a closing speech from <strong>Dr. Sajid Muhaimin Chowdhury,</strong> <em>Chair, IEEE YP Bangladesh Section.</em> He introduced the IEEE YP Bangladesh
            Section and the essential responsibilities and advised the student members to join IEEE YP Affinity Group soon. He concluded the event with warm thanks and good regards to the entire
            organizing committee and management team of IEEE STEP 2020 and IEEE YP Bangladesh Section. The grand event witnessed the participation of 304 registered participants from all across the
            world.
          </p>
          <p>
            <img src="/images/ieee/2021/03/1-2-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2021/03/1-2-300x169.png 300w, /images/ieee/2021/03/1-2-768x432.png 768w, /images/ieee/2021/03/1-2-1024x576.png 1024w, /images/ieee/2021/03/1-2.png 1920w"
             /> <img src="/images/ieee/2021/03/2-2-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2021/03/2-2-300x169.png 300w, /images/ieee/2021/03/2-2-768x432.png 768w, /images/ieee/2021/03/2-2-1024x576.png 1024w, /images/ieee/2021/03/2-2.png 1650w"
             /> <img src="/images/ieee/2021/03/3-2-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2021/03/3-2-300x169.png 300w, /images/ieee/2021/03/3-2-768x432.png 768w, /images/ieee/2021/03/3-2-1024x576.png 1024w, /images/ieee/2021/03/3-2.png 1919w"
             /> <img src="/images/ieee/2021/03/4-2-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2021/03/4-2-300x169.png 300w, /images/ieee/2021/03/4-2-768x432.png 768w, /images/ieee/2021/03/4-2-1024x576.png 1024w, /images/ieee/2021/03/4-2.png 1919w"
             /> <img src="/images/ieee/2021/03/5-1-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2021/03/5-1-300x169.png 300w, /images/ieee/2021/03/5-1-768x432.png 768w, /images/ieee/2021/03/5-1-1024x576.png 1024w, /images/ieee/2021/03/5-1.png 1919w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `flagship event`,
  },

  {
    id: 32,
    title: `IEEE AIUB Student Branch in collaboration with the Faculty of Engineering successfully organized a webinar on “Scopes and Challenges in Higher Education During COVID-19 Pandemic”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/banner-1.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 16th August 2020, the <strong>IEEE AIUB Student Branch</strong> in collaboration with the Faculty of Engineering, AIUB and the <strong>Erasmus Mundus Association (EMA)</strong>
            successfully organized a webinar on <strong>‘Scopes and challenges in higher education during COVID-19 pandemic’</strong>. The webinar mainly focused on the application procedures of
            <strong>Erasmus+ and Marie Curie scholarship</strong> for those who are looking forward to accomplishing their goals to pursue higher education in Europe amid this COVID-19 crisis.
          </p>
          <p>
            The webinar was inaugurated by the opening remarks from <strong>Prof. Dr. ABM Siddique Hossain</strong><em>, Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch;</em>
            who discussed the importance of postgraduate degrees for an Engineer. He gave a brief idea about the demand of Erasmus+ scholarships in recent times due to its enormous networks, its
            requirements, and the facilities it provides to its holders. He shared his thoughts regarding the necessity of productive candidates of the current job sector along with the skills that
            engineers should develop for serving the world.
          </p>
          <p>
            The first speaker of the webinar, <strong>Md. Ashiqur Rahman</strong>, <em>Research Fellow, Spanish National Research Council; Country Representative Network Manager, Former Country
            Ambassador, Bangladesh; Vice-President, South Asian Chapter, Erasmus Mundus Association</em>; started his presentation by giving an elaborate overview of Erasmus<strong>+</strong>
            Association including the programs, opportunities it provides to its fellow achievers and also gave a detailed overview of its funding & scholarship policies. Afterwards, he talked
            about the necessity and benefits of pursuing higher studies in abroad and portrayed a brief comparison between an Erasmus Scholar and a Non-Erasmus Scholar. Following that, <strong>Mr.
            Rahman</strong> explained the entire application procedure of <strong>Erasmus+ scholarship</strong> in the joint masters and PhD programs. He concluded by highlighting the importance and
            ways of writing proper CV, Motivational Letters and Statement of Purpose for achieving the scholarship.
          </p>
          <p>
            Afterwards, one of the guest speakers, <strong>Sayed Muhammad Baker</strong>, <em>PhD Candidate, University of Kaiserslautern; Project Engineer, COHERENT-DILAS Diodenlaser; Erasmus
            Scholar MONABIPHOT (2017-2019); Lecturer (On study leave), AIUB;</em> took the platform and answered some frequently asked questions from the scholarship seekers. <strong>Mr.
            Baker</strong> emphasized on the importance of thesis topic and thesis internship in applying for the scholarship process. He also motivated the participants to be optimistic and
            concluded his presentation by sharing his own experience that he had while applying for this scholarship.
          </p>
          <p>
            Later on, the next guest speaker, <strong>Fakrul Islam Tushar</strong>, <em>Post-Graduate Research Associate, Carl E. Ravin Advanced Imaging Laboratories, Duke University Medical Center,
            USA; Erasmus Scholar MAIA (2017-2019);</em> took the platform and suggested the participants to choose a program based on the field of study that they had during their undergraduate
            thesis. He concluded his presentation by enlightening the participants with the importance of proper CV along with the necessity of updating it from time to time. The session was
            concluded with an interactive Question-Answer session where all the speakers answered different questions from the participants.
          </p>
          <p>
            Later<strong>, Prof. Dr. Md. Abdur Rahman</strong>, <em>Associate Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch; Vice-Chairperson (Activity), IEEE Bangladesh
            Section;</em> took the platform and gave the concluding speech where he appreciated the initiative taken by the student branch to organize this webinar and suggested the students to take
            help from their seniors who had experience in their interested topics. He also asked the students to use necessary resources provided by their respective universities to the fullest. He
            concluded his speech by motivating the participants to have self-belief and also suggested to stay focused on their respective goals. The session was graced by the presence of 285+
            registered participants which includes <strong>Dr. Md. Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch; Advisor, IEEE EMBS AIUB SB Chapter; Senior Assisstant Professor,
            Faculty of Engineering, AIUB;</em> <strong>Kawshik Shikder</strong>, <em>Motivator, IEEE AIUB Student Branch; Assistant Professor, Faculty of Engineering, AIUB;</em> and <strong>Tasnuva
            Tasneem</strong>, <em>Motivator & WIE Coordinator, IEEE AIUB Student Branch; Assistant Professor, Faculty of Engineering, AIUB.</em>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Webinar`,
  },

  {
    id: 33,
    title: `IEEE AIUB Student Branch organized the Third Episode of the online live show  “An Hour with The Volunteers”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Ep-3_Speaker_Banner.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            To engage IEEE members all across the world during this global pandemic of COVID-19, the <strong>IEEE AIUB Student Branch</strong> took the bold initiative of organizing a weekly live
            show titled <strong>“An Hour with The Volunteers</strong>”; which is set to be held on every <strong>Friday</strong> at <strong>10 PM</strong> (GMT +06). The third episode of this weekly
            live show was held on 5<sup>th</sup> June 2020. The Live show was broadcasted on the official Facebook page of the <strong>IEEE AIUB Student Branch</strong> and was powered by the
            <strong>StreamYard</strong> online streaming platform. The live show was arranged for everyone to enjoy at the comfort of their homes, during this inevitable situation of Home Quarantine.
            The live show was hosted by <strong>Fardeen Mahbub</strong>, <em>Publication Coordinator, IEEE AIUB Student Branch; Secretary, IEEE EMBS AIUB SB Chapter</em> and the guest speaker was
            <strong>Almeer Ahsan Asif</strong>, <em>Manager and Lead Faculty, Leadership Development and Teaching Team, Bangladesh Youth Leadership Center (BYLC); Online Instructor, BYLCx; Former
            Chairperson (2012-2013), IEEE AIUB Student Branch.</em> The live show started with the greetings from the host who informed the fellow viewers about the bold initiatives and purpose of
            organizing the show, for the first time in the history of <strong>IEEE AIUB Student Branch.</strong> Consecutively, the host introduced the speaker to everyone. At the end of the
            introductory talk, the guest joined the Live Show and thanked the student branch wholeheartedly; for inviting him.
          </p>
          <p>
            Firstly, the guest started to talk about his student life and described the kind of nature he used to possess as a student. He also shared the reason for choosing engineering as a field
            of study; which was due to his expertise in mathematics and physics, along with the positive feedback from his parents. He talked about his nostalgic moments in the old campus of AIUB
            with his friends, faculties and the members of the IEEE AIUB Student Branch. He also shared the great experience of his Executive Education on Art and Practice of Leadership Development
            at <strong>Harvard Kennedy School Executive Education;</strong> where he got the opportunity of meeting people from all around the globe and learned a lot about leadership training on
            practical scenarios.
          </p>
          <p>
            After that, the speaker talked about his professional life. He shared his experiences of teaching students while he used to work as a fellow, in the <strong>Teach for Bangladesh</strong>
            program. While sharing his thoughts regarding leadership, he stated that leadership itself has a dynamic definition that encourages the ability to communicate and solve problems. He
            discussed his beliefs in diversity and eagerness to keep himself updated with the technological advancement of the world. He talked about the privilege of learning from different peers
            and developing new skills, while he was involved with BYLC. He advised to point out the strengths and weaknesses of an individual at first and then try to eradicate the obstacles which
            lead to development towards the goal. Mr. Almeer Ahsan Asif shared his challenging experiences of arranging many innovative and creative events to gather more student members for the IEEE
            AIUB Student Branch, as the Chairperson from 2012 to 2013. He also talked about the ample benefits of volunteering works while pursuing a professional life. He ended the session by
            conveying his motivation towards the current volunteers of IEEE from different student branches. He also suggested the members to get engaged with different kinds of tasks through
            self-motivation.
          </p>
          <p>
            Later, the speaker took part in a Rapid-Fire session where the host asked him a series of questions in a quick manner. To make the live show more interactive, questions had been taken
            from the viewers throughout the show and the guest replied to all the questions while clearing the doubts of the audience. Lastly, the guest conveyed his concluding speech by thanking
            everyone for attending his session. In the end, the host concluded the show by thanking the viewers for watching the show and also informed them about the upcoming episode of the Live
            Show next week. The show was a successful one with a huge response of over 3500 views.
          </p>
          <p>
             
          </p>
          <p>
            <img src="/images/ieee/2021/03/anvol-1-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2021/03/anvol-1-200x112.png 200w, /images/ieee/2021/03/anvol-1-300x169.png 300w, /images/ieee/2021/03/anvol-1-400x225.png 400w, /images/ieee/2021/03/anvol-1-600x337.png 600w, /images/ieee/2021/03/anvol-1-768x432.png 768w, /images/ieee/2021/03/anvol-1-800x450.png 800w, /images/ieee/2021/03/anvol-1-1024x576.png 1024w, /images/ieee/2021/03/anvol-1.png 1366w"
             /> <img src="/images/ieee/2021/03/anvol-2-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2021/03/anvol-2-200x112.png 200w, /images/ieee/2021/03/anvol-2-300x169.png 300w, /images/ieee/2021/03/anvol-2-400x225.png 400w, /images/ieee/2021/03/anvol-2-600x337.png 600w, /images/ieee/2021/03/anvol-2-768x432.png 768w, /images/ieee/2021/03/anvol-2-800x450.png 800w, /images/ieee/2021/03/anvol-2-1024x576.png 1024w, /images/ieee/2021/03/anvol-2.png 1366w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Web Show`,
  },

  {
    id: 34,
    title: `Women in Nuclear Power Engineering`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/y.png"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            IEEE AIUB Student Branch successfully organized a webinar on <strong>WOMEN IN NUCLEAR POWER ENGINEERING</strong>
          </p>
          <p>
            On 23rd June 2020, in celebration of the <strong>‘International WIE Day 2020’,</strong> the <strong>IEEE AIUB Student Branch</strong> in collaboration with the <strong>IEEE AIUB Student
            Branch WIE Affinity Group</strong> successfully organized a webinar titled <strong>‘Women in Nuclear Power Engineering’</strong>. Amid the ongoing <strong>COVID-19</strong> crisis, when
            everyone is locked down in their homes, the <strong>IEEE AIUB Student Branch WIE Affinity Group</strong> organized the webinar through the <strong>CISCO WEBEX MEETING</strong> platform.
            The webinar was conducted by <strong>Shafiul Wara Tasmia</strong><em>, Executive Trainee (Nuclear Engineer), Nuclear Power Plant Company Bangladesh Ltd.</em> who mainly focused on Nuclear
            energy and career opportunities for women in Engineering Sectors.
          </p>
          <p>
            <strong>Ms. Tasmia</strong> started the session by introducing herself and sharing her educational and professional background. She, then discussed the history of Nuclear Energy &
            Nuclear Electricity production with a diagramatic presentation and talked about the way nuclear power system works.  She then gave a detailed theoretical idea about the
            functionality of a Nuclear power plant and portrayed the goals of her present workplace, <strong>Nuclear Power Plant Company Bangladesh Ltd.</strong> Apart from these, she also talked
            about the benefits and some key drawbacks of nuclear power by highlighting few significant accidents in the Nuclear industry.
          </p>
          <p>
            Then she talked about how women have currently contributed to the diverse fields of engineering with their dedication and hard work. As a part of motivation, she also notified the
            participants that 30% of the professionals as well as 2 out of the 6 deputy director generals are women who are currently designated in the <strong>International Atomic Energy
            Agency</strong> <strong>(IAEA)</strong>. She further informed the female participants by notifying them about three essential factors to start their career in the nuclear field, which are
            Awareness, Network Initiative and Mentoring. Afterwards, she shared her academic experience and also spoke briefly about the scholarship opportunities in Russia along with the Job
            opportunities in numerous Bangladeshi Companies like <strong>NPCBL, BAEC, BAERA</strong> and <strong>BINA</strong>. After her presentation, <strong>Ms Tasmia</strong> took part in an
            interactive <strong>Question-Answer</strong> session where she efficiently answered to the questions from participants.
          </p>
          <p>
            Later, the concluding speech was delivered by the host, where she expressed her wholehearted gratitude towards the honourable speaker and all the participants for their valuable
            participation in the webinar. She concluded the webinar by creating awareness among the audience to maintain physical distance along with the social compassion among each other during
            this pandemic. The event was graced by the presence of 66 female participants who joined the session from different institutions of the country. The session was graced by the presence of
            60 registered women participants.
          </p>
          <p>
            <img src="/images/ieee/2020/06/1-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2020/06/1-200x112.png 200w, /images/ieee/2020/06/1-300x169.png 300w, /images/ieee/2020/06/1-400x225.png 400w, /images/ieee/2020/06/1-600x337.png 600w, /images/ieee/2020/06/1-768x432.png 768w, /images/ieee/2020/06/1-800x450.png 800w, /images/ieee/2020/06/1-1024x576.png 1024w, /images/ieee/2020/06/1.png 1432w"
             /> <img src="/images/ieee/2020/06/2-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2020/06/2-200x112.png 200w, /images/ieee/2020/06/2-300x169.png 300w, /images/ieee/2020/06/2-400x225.png 400w, /images/ieee/2020/06/2-600x337.png 600w, /images/ieee/2020/06/2-768x432.png 768w, /images/ieee/2020/06/2-800x450.png 800w, /images/ieee/2020/06/2-1024x576.png 1024w, /images/ieee/2020/06/2.png 1432w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Webinar`,
  },

  {
    id: 35,
    title: `IEEE AIUB Student Branch organized the Fourth Episode of the online live show`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/102404042_3501523579865854_107512186718691185_o.png"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            <strong>“An Hour with The Volunteers</strong>”
          </p>
          <p>
             
          </p>
          <p>
            Amidst the global pandemic of COVID-19, the <strong>IEEE AIUB Student Branch</strong> took the undaunted initiative of organizing a weekly live show titled <strong>“An Hour with The
            Volunteers”;</strong> for the IEEE members to enjoy at the comfort of their residence. The live show is set to be held on every Friday at 10 PM (GMT+6), broadcasting on the official
            Facebook page of the <strong>IEEE AIUB Student Branch</strong> & powered by <strong>StreamYard</strong> online streaming platform. After getting a huge response in the past three
            episodes, on 12<sup>th</sup> June 2020 the fourth episode of the live show was streamed. The live show was hosted by <strong>Yea Laila Hossain Onti</strong>, <em>Volunteer, IEEE AIUB
            Student Branch</em> and the guest speaker of the show was <strong>Fakrul Islam Tushar</strong>, <em>Post-Graduate Research Associate, Duke University School of Medicine; Former Research
            Intern, Duke University; Former Chapters & Affinity Groups Development Chair, IEEE AIUB Student Branch</em>. The show started with the greeting and a welcoming speech from the host.
            She informed the fellow viewers about the purpose of organizing the live show. Additionally she mentioned how everyone will be benefitted by gathering knowledge about the professional and
            volunteering experiences of the guest. After that, the host introduced the honorable guest to everyone and consequently the guest thanked the student branch for inviting him in the show.
            He started the session by conveying his sympathy towards the devastating situation of his current residence in USA and also shared his opinion with the hope of everything getting back to
            normal.
          </p>
          <p>
            In the beginning, the speaker started to talk about his student life before his undergraduate admission and university life. He talked about the reason for his choosing engineering at
            AIUB because of its well-known reputation for the department of EEE. He shared about the nostalgic moments of his academic years at the old campus of AIUB. He also conveyed his gratitude
            towards the faculty members and mentioned some of their names; whom he still admires. After that, the guest described the feeling of being able to achieve the <strong>“Dean’s
            Award”</strong> due to their devotion, hardworking, and a fixed determination for their Capstone project. He emphasized on the proper distribution of work and good communication among the
            team members, as an important factor for achieving such a landmark. He also talked about the turning point where he found an interest in machine learning, deep learning and neural
            networks related to medical imaging during his Master’s in Medical Imaging and Applications. He descriptively informed the audience about the requirements and procedures in order to
            obtain the Erasmus Mundus scholarship, as he is one of the recipients of this prestigious scholarship. He asked everyone to follow their passion and contribute to the society. Then, he
            talked about his responsibilities in helping the doctors to identify multiple diseases and creating real-life medical data as a Post-Graduate Research Associate at the Carl E. Ravin
            Advanced Imaging Laboratories (RAI Labs) of Duke University Medical Center, USA. He described his experience of the joint master’s program at three different universities and shared the
            story of getting an offer to join as a Research Associate in the Duke University Medical Center, USA. Mr. Fakrul Islam Tushar mentioned <strong>IEEE AIUB Student Branch</strong> as a big
            part of his university life; where he had learned about multi-tasking and interacting with people in the professional sector. He also shared his memories of campaigning with innovative
            ideas as the Chapters and Affinity Groups Development Chair of the <strong>IEEE AIUB Student Branch</strong> in order to gather more members in the newly opened <strong>IEEE Computer
            Society, AIUB Student Branch Chapter</strong>
          </p>
          <p>
            The guest finally responded to a series of fast sequenced questions asked by the host, which was the most fascinating part of the show for all of the participants. To make the session
            more interactive, several questions had been taken from the audiences throughout the show, which the guest answered professionally. After that, the guest advised everyone for developing
            new skills and gather knowledge in order to improve leadership qualities. In the end, the host thanked all the viewers for watching the show and concluded by informing them regarding the
            upcoming episode of the live show in the next week. The show was a successful one with a huge response and the support of 6.9K views in total; which marked the highest in all four
            episodes.
          </p>
          <p>
            <img src="/images/ieee/2021/03/anvol-4.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2021/03/anvol-4-200x112.png 200w, /images/ieee/2021/03/anvol-4-300x169.png 300w, /images/ieee/2021/03/anvol-4-400x225.png 400w, /images/ieee/2021/03/anvol-4-600x337.png 600w, /images/ieee/2021/03/anvol-4-768x432.png 768w, /images/ieee/2021/03/anvol-4-800x450.png 800w, /images/ieee/2021/03/anvol-4-1024x576.png 1024w, /images/ieee/2021/03/anvol-4.png 1366w"
             /> <img src="/images/ieee/2021/03/anvol-3.png" alt="" width="1366" height="768" srcset=
            "/images/ieee/2021/03/anvol-3-200x112.png 200w, /images/ieee/2021/03/anvol-3-300x169.png 300w, /images/ieee/2021/03/anvol-3-400x225.png 400w, /images/ieee/2021/03/anvol-3-600x337.png 600w, /images/ieee/2021/03/anvol-3-768x432.png 768w, /images/ieee/2021/03/anvol-3-800x450.png 800w, /images/ieee/2021/03/anvol-3-1024x576.png 1024w, /images/ieee/2021/03/anvol-3.png 1366w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Web Show`,
  },

  {
    id: 36,
    title: `IEEE AIUB Student Branch organized the First Episode of the online live show  “An Hour with The Volunteers”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/1st-show.png"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            To engage IEEE members all across the globe during this global crisis, the <strong>IEEE AIUB Student Branch</strong> took the bold initiative of organizing weekly live shows titled
            <strong>“An Hour with The Volunteers</strong>” that is set to be held on every Friday at 10 PM (GMT +06). On 22<sup>nd</sup> May 2020, the inaugurating episode of the weekly live show was
            broadcasted on the official Facebook page of the IEEE AIUB Student Branch and was powered by the <strong>StreamYard</strong> platform. The live show was arranged to enjoy at the comfort
            of everyone’s home during this unavoidable lockdown situation for the global pandemic of COVID-19. The live show was hosted by <strong>Mashrur Sakib Choyon</strong>, <em>Vice-Chairperson
            (Technical), IEEE AIUB Student Branch</em> and the guest speaker for the very first episode was <strong>Nasim Al Islam</strong>, <em>Ph.D. Student, Electromagnetic System and Physics Lab,
            University of Ulsan, South Korea; Lecturer (on study leave), Dept. of EEE, AIUB; IEEE Volunteer, and VOLT Graduate(2018).</em>
          </p>
          <p>
            The live show started with the greeting and welcome speech from the host who informed the viewers about the initiatives of organizing this live show for the first time in the history of
            the <strong>IEEE AIUB Student Branch.</strong> Later, he informed all the viewers about the purpose and nature of the show and how the fellow viewers will get benefitted from this hourly
            talk. After that, the host introduced the guest to everyone. Consequently, the guest thanked the student branch for inviting him to the live show. He also conveyed his sympathy towards
            the recent disastrous situation of COVID-19 pandemic all around the world.
          </p>
          <p>
            Firstly, the guest started the talk by sharing his childhood memories when he used to spend the days in his hometown. He also talked about his interest to study Engineering after getting
            rejected from the ISSB of Bangladesh Army with a red card and also shared his story of joining American International University-Bangladesh as a student. Then he portrayed his activities
            during his university life along with the kind of hard work a particular student should display for achieving their respective goals. He also shared his story of getting an opportunity
            for his Ph.D. program in South Korea. and also guided the viewers about how they should carry the proceedings along with the kind of preparations they should take into account before
            applying to a Ph.D. program.
          </p>
          <p>
            Then he discussed the importance of getting involved with volunteering for the students and how volunteering would help someone to build up new skills, opportunities to meet new people,
            including the extra advantage it provides to the professional life. He also mentioned that IEEE is a big platform to work professionally and for building skills with excellence which
            would take someone to the next level for achieving their success. He also notified the audience that how participating in extra-curricular activities helped him a lot and how all the IEEE
            achievements made it easier for him to get the opportunity of studying abroad. He also shared that prioritizing was an important matter to manage time between studies and co-curricular
            activities. Mr. Nasim also shared his experience as a Chairperson of the <strong>IEEE AIUB Student Branch</strong> and as the Advisor of <strong>IEEE Microwave Theory & Techniques
            Society AIUB SB Chapter</strong> along with the multiple awards that were achieved during that period. He emphasized the necessity of teamwork and the effort of the whole team which had
            brought all the successes during his time. He also motivated the current volunteers not to think about the awards but to carry on with some unique ideas for achieving something big in the
            future.
          </p>
          <p>
            After that, Mr. Nasim participated in a quick game of rapid-fire where the host asked him a series of questions in a quick manner. To make the show more interactive, questions had been
            taken from the audience throughout the show and the guest also answered those professionally. After that, he expressed his gratitude towards his well-wishers for their support and
            guidance which brought him to his current position. In the end, the host concluded the show by thanking the viewers for watching the show and also informed them regarding the upcoming
            episode of the live show. The show was a successful one with a huge response of 3800+ live views and 8500+ views in total.
          </p>
          <p>
            <img src="/images/ieee/2021/03/vshow1-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2021/03/vshow1-200x112.png 200w, /images/ieee/2021/03/vshow1-300x169.png 300w, /images/ieee/2021/03/vshow1-400x225.png 400w, /images/ieee/2021/03/vshow1-600x337.png 600w, /images/ieee/2021/03/vshow1-768x432.png 768w, /images/ieee/2021/03/vshow1-800x450.png 800w, /images/ieee/2021/03/vshow1-1024x576.png 1024w, /images/ieee/2021/03/vshow1.png 1366w"
             /> <img src="/images/ieee/2021/03/vshow-1024x576.png" alt="" width="1024" height="576" srcset=
            "/images/ieee/2021/03/vshow-200x112.png 200w, /images/ieee/2021/03/vshow-300x169.png 300w, /images/ieee/2021/03/vshow-400x225.png 400w, /images/ieee/2021/03/vshow-600x337.png 600w, /images/ieee/2021/03/vshow-768x432.png 768w, /images/ieee/2021/03/vshow-800x450.png 800w, /images/ieee/2021/03/vshow-1024x576.png 1024w, /images/ieee/2021/03/vshow.png 1366w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Web Show`,
  },

  {
    id: 37,
    title: `IEEE AIUB Student Branch successfully organizes a webinar on Getting Started with Image Processing using Python`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/banner.png"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            <span data-fusion-font="true">On 24</span><sup><span data-fusion-font="true">th</span></sup> <span data-fusion-font="true">April 2020, the</span> <strong data-fusion-font="true">IEEE AIUB
            Student Branch,</strong> <span data-fusion-font="true">in collaboration with the</span> <strong data-fusion-font="true">IEEE Computer Society AIUB Student Branch Chapter</strong>
            <span data-fusion-font="true">and</span> <strong data-fusion-font="true">Pandit,</strong> <span data-fusion-font="true">successfully organized a webinar titled</span>
            <strong data-fusion-font="true">‘Getting Started with Image Processing using Python.’</strong> <span data-fusion-font="true">Amid the ongoing</span> <strong data-fusion-font=
            "true">COVID-19</strong> <span data-fusion-font="true">crisis, when everyone is locked down in their homes, the IEEE AIUB Student Branch, in celebration of
            ‘</span><strong data-fusion-font="true">PES Day 2020</strong><span data-fusion-font="true">’, organized the webinar through the</span> <strong data-fusion-font="true">CISCO WEBEX
            MEETING</strong> <span data-fusion-font="true">platform. The seminar was conducted by</span> <strong data-fusion-font="true">Mr. Saddam Hossain,</strong> <span data-fusion-font=
            "true">C</span><em><span data-fusion-font="true">EO, Centureon IT; Co-Founder Edwin</span></em> <span data-fusion-font="true">mainly focused on the importance of digital image processing
            and how Python Language can be used to achieve it. The webinar was inaugurated by</span> <strong data-fusion-font="true">Mashrur Sakib Choyon,</strong> <em><span data-fusion-font=
            "true">Vice-Chairperson (Technical), IEEE AIUB SB,</span></em> <span data-fusion-font="true">who mainly talked about the rules and regulations and the etiquettes that must be followed by
            the participants throughout the webinar.</span>
          </p>
          <p>
            <span data-fusion-font="true">Consequently, he talked about various levels of Image Processing, including their input and output levels. He also spoke briefly about Computer Vision Tasks
            and Machine Learning classification, along with their importance.</span> <strong data-fusion-font="true">Mr. Hossain</strong> <span data-fusion-font="true">then emphasized the wide range
            of Image Processing Techniques applications in Biotechnology sectors, Traffic Monitoring systems, and many more, including their operations. Later, he motivated the audience to consider
            this sector as a career due to its gradual advancements from time to time.</span> <strong data-fusion-font="true">Mr. Saddam Hassan</strong> <span data-fusion-font="true">concluded his
            presentation with an interactive</span> <strong data-fusion-font="true">Question-Answer session</strong> <span data-fusion-font="true">to answer all the participants’ questions
            efficiently.</span>
          </p>
          <p>
            <span data-fusion-font="true">After that,</span> <strong data-fusion-font="true">Mashrur Sakib Choyon</strong> <span data-fusion-font="true">delivered the concluding speech, where he
            expressed his wholehearted gratitude towards the honorable speaker and all participants for their valuable participation in the webinar. Lastly, he concluded by urging the participants to
            fill up the feedback form to point out the factors where IEEE AIUB Student Branch can ameliorate organizing such events in the future. The event was graced by the presence of 133
            registered participants, and everyone was provided with the Certificate of Participation for their enthusiastic engagement in the webinar.</span>
          </p>
          <p>
            <img src="/images/ieee/2020/04/1-1024x549.png" alt="" width="1024" height="549" srcset=
            "/images/ieee/2020/04/1-200x107.png 200w, /images/ieee/2020/04/1-300x161.png 300w, /images/ieee/2020/04/1-400x214.png 400w, /images/ieee/2020/04/1-600x322.png 600w, /images/ieee/2020/04/1-768x412.png 768w, /images/ieee/2020/04/1-800x429.png 800w, /images/ieee/2020/04/1-1024x549.png 1024w, /images/ieee/2020/04/1.png 1360w"
             /> <img src="/images/ieee/2020/04/2-1024x546.png" alt="" width="1024" height="546" srcset=
            "/images/ieee/2020/04/2-200x107.png 200w, /images/ieee/2020/04/2-300x160.png 300w, /images/ieee/2020/04/2-400x213.png 400w, /images/ieee/2020/04/2-600x320.png 600w, /images/ieee/2020/04/2-768x409.png 768w, /images/ieee/2020/04/2-800x426.png 800w, /images/ieee/2020/04/2-1024x546.png 1024w, /images/ieee/2020/04/2.png 1359w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `cs`,
  },

  {
    id: 38,
    title: `IEEE AIUB Student Branch organized a seminar on-  “Higher Study in North America with GRE and TOEFL”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/1.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 19<sup>th</sup> February 2020, <strong>IEEE AIUB Student Branch</strong> successfully organized an informative seminar titled “<strong>Higher Study in North America with GRE and
            TOEFL</strong>” in collaboration with <strong>IEEE Young Professionals Bangladesh Section</strong> and <strong>Faculty of Engineering, AIUB</strong>. The seminar was conducted by
            <strong>Sanowar Hossain Shamim</strong>, <em>GRE & TOEFL Instructor, American Center, Bangladesh; Founder, GREfly, Graduate Resources Enhancing Center (GREC).</em>
          </p>
          <p>
            The seminar was inaugurated by the opening remarks from <strong>Prof. Dr. ABM Siddique Hossain</strong>, <em>Dean, Faculty of Engineering (FE), AIUB; Advisor, IEEE AIUB Student
            Branch</em><em>,</em> who discussed the importance of postgraduate degrees for a successful career. Also, he notified the participants about the importance of studying in North America as
            it offers the most dynamic and adaptable education system responsive to the needs of a vast, multicultural student community from all over the world. He concluded by discussing the
            indispensable roles of GRE & TOEFL examinations for procuring admission to overseas universities.
          </p>
          <p>
            <img src="/images/ieee/2021/03/1.jpg" alt="" width="800" height="532" srcset=
            "/images/ieee/2021/03/1-200x133.jpg 200w, /images/ieee/2021/03/1-300x200.jpg 300w, /images/ieee/2021/03/1-400x266.jpg 400w, /images/ieee/2021/03/1-600x399.jpg 600w, /images/ieee/2021/03/1-768x511.jpg 768w, /images/ieee/2021/03/1.jpg 800w"
             />
          </p>
          <p>
            After that, the speaker <strong>Sanowar Hossain Shamim</strong> took the stage and initiated the session by discussing GRE and TOEFL examinations’ importance for those keen on acquiring
            higher studies abroad. Later, he talked about the examination structure and the elaborate discussion on various sections involved in GRE & TOEFL examinations, including the keys to
            succeeding them.  Besides, he spoke in detail about the necessity of good English writing, reading, and speaking skills to become a firm contender to any designated occupation. The
            speaker ended the discussion with an interactive Question-Answer session.<img src="/images/ieee/2021/03/2.jpg" alt="" width="800" height="552" srcset=
            "/images/ieee/2021/03/2-200x138.jpg 200w, /images/ieee/2021/03/2-300x207.jpg 300w, /images/ieee/2021/03/2-400x276.jpg 400w, /images/ieee/2021/03/2-600x414.jpg 600w, /images/ieee/2021/03/2-768x530.jpg 768w, /images/ieee/2021/03/2.jpg 800w"
             /> <img src="/images/ieee/2021/03/3.jpg" alt="" width="800" height="532" srcset=
            "/images/ieee/2021/03/3-200x133.jpg 200w, /images/ieee/2021/03/3-300x200.jpg 300w, /images/ieee/2021/03/3-400x266.jpg 400w, /images/ieee/2021/03/3-600x399.jpg 600w, /images/ieee/2021/03/3-768x511.jpg 768w, /images/ieee/2021/03/3.jpg 800w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Web Show`,
  },

  {
    id: 39,
    title: `IEEE AIUB Student Branch Members’ Orientation`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/banner-1.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 16<sup>th</sup> February 2020, <strong>IEEE AIUB Student Branch</strong> organized the <strong>IEEE Members’ Orientation 2020</strong> at <strong>American International
            University – Bangladesh</strong>. The event’s goal was to introduce and welcome the new members of the current year, followed by acknowledging the invaluable hard work and
            commitment put in by the faculty members and students who fulfilled the governing body’s role in the previous year. In the year 2020, IEEE AIUB Student Branch started its journey with
            over 350 members officially registered under the student branch.
          </p>
          <p>
            The grand event was inaugurated by <strong>Prof. Dr. A.B.M.</strong> <strong>Siddique Hossain</strong>, <em>Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student
            Branch,</em> who initiated his session with the decades-old history of IEEE and educated the audience on to primary mission and vision of IEEE. He inspired other engineering departments
            to contribute to the organization. Furthermore, he acknowledged the increasing number of members of the IEEE AIUB Student Branch and IEEE Bangladesh Section. He further described the
            different membership grades of IEEE and mentioned the membership advantages in each respective stage. Finally, he concluded the session by inspiring members to publish and educate
            themselves through IEEE vast digital libraries and conferences. Afterward, <strong>Prof. Dr. A.B.M.</strong> <strong>Siddique Hossain</strong> thanked the previous executive
            committee for their overwhelming endeavors, dedication, commitment, and support towards the branch.
          </p>
          <p>
            The second session was conducted by <strong>Prof. Dr. Md. Abdur Rahman,</strong> <em>Vice-Chair(Activity), IEEE Bangladesh Section; Advisor, IEEE AIUB Student Branch; Associate Dean,
            Faculty of Engineering, AIUB.</em> He took the stage and demonstrated the key features of a leader through the means of a video. He then inspired the future leaders to use IEEE to
            increase practical skills that may help lure employers. He described the significance of IEEE international conferences and how they help in both educational and corporate fields.
            Furthermore, he elaborated the process through which IEEE operates and introduced many of IEEE affiliates and future IEEE ventures. The speaker inspired the new members to achieve
            different IEEE grants and discounts and ways of using IEEE membership to its fullest. Afterward, <strong>Prof. Dr. Md. Abdur Rahman</strong> was provided with a token of gratitude by
            <strong>Dr. Md. Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch; Senior Assistant Professor, Faculty of Engineering, AIUB</em>, <strong>Kawshik Shikder</strong>
            <em>Motivator, IEEE AIUB Student Branch; Assistant Professor, Faculty of Engineering, AIUB;</em> and <strong>Tasnuva Tasneem,</strong> <em>Motivator & Coordinator; IEEE Women in
            Engineering AIUB Student Branch Chapter; Assistant Professor, Faculty of Engineering, AIUB.</em>
          </p>
          <p>
            Shortly after, <strong>Prof. Dr. Md. Abdur Rahman</strong>, <strong>Chowdhury Akram Hossain</strong>, <em>Former Counselor, IEEE AIUB Student Branch</em>, <em>Senior Assistant
            Professor, Faculty of Engineering, AIUB,</em> and <strong>Md. Saniat Rahman Zishan</strong>, <em>Advisor, IEEE AIUB Student Branch, Head of CoE Department, Faculty of Engineering,
            AIUB,</em> took the stage and welcomed all the members and showed gratitude for being a part of IEEE AIUB Student Branch. They then announced the Counselor, Advisors, and Executive Board
            of <em>IEEE AIUB Student Branch</em> for 2019. The two Faculty Members also provided a Token of Appreciation to the Executives of the previous year. Afterward, a token of gratitude was
            provided by Dr. Md. Hasan Imam, Kaushik Shikder, and Tasnuva Tasneem to <strong>Prof. Dr. Md. Abdul Mannan</strong>, <em>Director, Faculty of Engineering, AIUB</em>, <strong>Dr. Md. Nasir
            Uddin</strong>, <em>Associate Professor & Head of Post Graduate Program,</em> <strong>Chowdhury Akram Hossain</strong> and <strong>Md. Saniat Rahman Zishan.</strong>
          </p>
          <p>
            Later, <strong>Dr. Md. Hasan Imam</strong> took the stage for presenting Souvenir and Conveyance to the Executives of the IEEE AIUB Student Branch for their enormous effort, dedication,
            and commitment towards the branch. Following that, the cultural session took place in which multiple musical & dance performances were conducted by the <strong>AIUB Performing Arts
            Club (APAC)</strong>. Afterward, <strong>Tasnuva Tasneem</strong> presented a token of gratitude to <strong>Tajul Islam</strong>, <em>President, AIUB Performing Arts Club (APAC),</em> for
            making the Orientation Program grand and joyous.
          </p>
          <p>
            Finally, the closing speech of the event was delivered by <strong>Dr. Md. Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch, Senior Assistant Professor, Faculty of
            Engineering AIUB</em> who thanked all the participants for being a part of the event and being a part of IEEE AIUB Student Branch. He also elaborately discussed the upcoming events of the
            IEEE AIUB Student Branch.  A group photo session was then taken, which marked the end of the event. The grand event was graced with the presence of <strong>Mehedi Azad
            Shaon,</strong> <em>Lecturer, Department of EEE, Faculty of Engineering, AIUB,</em> <strong>Abir Ahmed</strong><em>, Lecturer, Faculty of Engineering, AIUB,</em> <strong>Md. Rakibul Alam
            (Polok),</strong> <em>Junior Executive, Office of Student Affairs (OSA), AIUB.</em> The event was graced by the presence of 345 registered IEEE Student Members.
          </p>
          <p>
            <img src="/images/ieee/2020/09/1-1024x671.jpg" alt="" width="1024" height="671" srcset=
            "/images/ieee/2020/09/1-200x131.jpg 200w, /images/ieee/2020/09/1-300x196.jpg 300w, /images/ieee/2020/09/1-400x262.jpg 400w, /images/ieee/2020/09/1-600x393.jpg 600w, /images/ieee/2020/09/1-768x503.jpg 768w, /images/ieee/2020/09/1-800x524.jpg 800w, /images/ieee/2020/09/1-1024x671.jpg 1024w, /images/ieee/2020/09/1.jpg 1440w"
             />
          </p>
          <p>
            <img src="/images/ieee/2021/02/Picture-2.jpg" alt="" width="800" height="572" srcset=
            "/images/ieee/2021/02/Picture-2-200x143.jpg 200w, /images/ieee/2021/02/Picture-2-300x214.jpg 300w, /images/ieee/2021/02/Picture-2-400x286.jpg 400w, /images/ieee/2021/02/Picture-2-600x429.jpg 600w, /images/ieee/2021/02/Picture-2-768x549.jpg 768w, /images/ieee/2021/02/Picture-2.jpg 800w"
             /> <img src="/images/ieee/2021/02/Picture-3.jpg" alt="" width="800" height="531" srcset=
            "/images/ieee/2021/02/Picture-3-200x133.jpg 200w, /images/ieee/2021/02/Picture-3-300x199.jpg 300w, /images/ieee/2021/02/Picture-3-400x266.jpg 400w, /images/ieee/2021/02/Picture-3-600x398.jpg 600w, /images/ieee/2021/02/Picture-3-768x510.jpg 768w, /images/ieee/2021/02/Picture-3.jpg 800w"
             /> <img src="/images/ieee/2021/02/Picture-4.jpg" alt="" width="800" height="531" srcset=
            "/images/ieee/2021/02/Picture-4-200x133.jpg 200w, /images/ieee/2021/02/Picture-4-300x199.jpg 300w, /images/ieee/2021/02/Picture-4-400x266.jpg 400w, /images/ieee/2021/02/Picture-4-600x398.jpg 600w, /images/ieee/2021/02/Picture-4-768x510.jpg 768w, /images/ieee/2021/02/Picture-4.jpg 800w"
             /> <img src="/images/ieee/2021/02/Picture-5.jpg" alt="" width="800" height="531" srcset=
            "/images/ieee/2021/02/Picture-5-200x133.jpg 200w, /images/ieee/2021/02/Picture-5-300x199.jpg 300w, /images/ieee/2021/02/Picture-5-400x266.jpg 400w, /images/ieee/2021/02/Picture-5-600x398.jpg 600w, /images/ieee/2021/02/Picture-5-768x510.jpg 768w, /images/ieee/2021/02/Picture-5.jpg 800w"
             /> <img src="/images/ieee/2021/02/Picture-6.jpg" alt="" width="800" height="531" srcset=
            "/images/ieee/2021/02/Picture-6-200x133.jpg 200w, /images/ieee/2021/02/Picture-6-300x199.jpg 300w, /images/ieee/2021/02/Picture-6-400x266.jpg 400w, /images/ieee/2021/02/Picture-6-600x398.jpg 600w, /images/ieee/2021/02/Picture-6-768x510.jpg 768w, /images/ieee/2021/02/Picture-6.jpg 800w"
             /> <img src="/images/ieee/2021/02/Picture-7.jpg" alt="" width="800" height="554" srcset=
            "/images/ieee/2021/02/Picture-7-200x139.jpg 200w, /images/ieee/2021/02/Picture-7-300x208.jpg 300w, /images/ieee/2021/02/Picture-7-400x277.jpg 400w, /images/ieee/2021/02/Picture-7-600x416.jpg 600w, /images/ieee/2021/02/Picture-7-768x532.jpg 768w, /images/ieee/2021/02/Picture-7.jpg 800w"
             /> <img src="/images/ieee/2021/02/Picture-8.jpg" alt="" width="800" height="531" srcset=
            "/images/ieee/2021/02/Picture-8-200x133.jpg 200w, /images/ieee/2021/02/Picture-8-300x199.jpg 300w, /images/ieee/2021/02/Picture-8-400x266.jpg 400w, /images/ieee/2021/02/Picture-8-600x398.jpg 600w, /images/ieee/2021/02/Picture-8-768x510.jpg 768w, /images/ieee/2021/02/Picture-8.jpg 800w"
             /> <img src="/images/ieee/2021/02/Picture-10.jpg" alt="" width="800" height="531" srcset=
            "/images/ieee/2021/02/Picture-10-200x133.jpg 200w, /images/ieee/2021/02/Picture-10-300x199.jpg 300w, /images/ieee/2021/02/Picture-10-400x266.jpg 400w, /images/ieee/2021/02/Picture-10-600x398.jpg 600w, /images/ieee/2021/02/Picture-10-768x510.jpg 768w, /images/ieee/2021/02/Picture-10.jpg 800w"
             /> <img src="/images/ieee/2020/09/2-1024x681.jpg" alt="" width="1024" height="681" srcset=
            "/images/ieee/2020/09/2-200x133.jpg 200w, /images/ieee/2020/09/2-300x199.jpg 300w, /images/ieee/2020/09/2-400x266.jpg 400w, /images/ieee/2020/09/2-600x399.jpg 600w, /images/ieee/2020/09/2-768x510.jpg 768w, /images/ieee/2020/09/2-800x532.jpg 800w, /images/ieee/2020/09/2-1024x681.jpg 1024w, /images/ieee/2020/09/2.jpg 1440w"
             /> <img src="/images/ieee/2020/09/3-1024x681.jpg" alt="" width="1024" height="681" srcset=
            "/images/ieee/2020/09/3-200x133.jpg 200w, /images/ieee/2020/09/3-300x199.jpg 300w, /images/ieee/2020/09/3-400x266.jpg 400w, /images/ieee/2020/09/3-600x399.jpg 600w, /images/ieee/2020/09/3-768x510.jpg 768w, /images/ieee/2020/09/3-800x532.jpg 800w, /images/ieee/2020/09/3-1024x681.jpg 1024w, /images/ieee/2020/09/3.jpg 1440w"
             /> <img src="/images/ieee/2021/02/Picture-11.jpg" alt="" width="800" height="531" srcset=
            "/images/ieee/2021/02/Picture-11-200x133.jpg 200w, /images/ieee/2021/02/Picture-11-300x199.jpg 300w, /images/ieee/2021/02/Picture-11-400x266.jpg 400w, /images/ieee/2021/02/Picture-11-600x398.jpg 600w, /images/ieee/2021/02/Picture-11-768x510.jpg 768w, /images/ieee/2021/02/Picture-11.jpg 800w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Orientation`,
  },

  {
    id: 40,
    title: `IEEE AIUB Student Branch organized a seminar on “ROAD TO SWEDEN”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/banner.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><p>
  On 4<sup>th</sup> February 2020, IEEE AIUB Student Branch successfully organized an informative seminar on ‘ROAD TO SWEDEN’ in collaboration with the Faculty of Engineering, AIUB. The seminar was
  successfully conducted by <strong>Mahir Mahdee,</strong> <em>Postgraduate student, Renewable Electricity Production, Uppsala University, Sweden</em>; Former <em>Facility Management Engineer and HR
  Executive,</em> <em>Compagnie Mauricienne de Textile LTTE.</em>
</p>
<p>
  The seminar was inaugurated by the opening remarks from <strong>Prof. Dr. A.B.M Siddique Hossain</strong>, <em>Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch,</em> who talked
  about the importance of higher studies to students’ life for enriching their professional career. He also gave the participants a brief idea about the education system of Sweden along with its
  lifestyle. He concluded by urging the students to be more proactive and suggested to develop skills instead of running for grades.
</p>
<p>
  Then, <strong>Mahir Mahdee</strong> took the stage and initiated the session by giving a short introduction to his educational and professional career. He then talked about the reasons for Sweden
  being the ideal place for higher studies and the wide range of job scopes it provides. Subsequently, he gave a detailed overview of <strong>Uppsala University, Sweden,</strong> including its
  offered programs, impressive scholarship opportunities, and fee structures. Besides, he talked in detail about applying to Uppsala University along with the admission requirements. Afterward, he
  talked about various research scopes that Uppsala University provides annually with healthy funding opportunities and support. Later, he concluded with an interactive Question-Answer session.
</p>
<p>
  After that, <strong>Tasnuva Tasneem</strong>, <em>Motivator & Coordinator, IEEE Women in Engineering AIUB Student Branch Chapter; Assistant Professor, Faculty of Engineering, AIUB</em>
  delivered the concluding speech where she discussed the importance of pursuing higher studies abroad and suggested the participants to develop their practical knowledge and skills for staying in
  contention in this competitive world. Later, <strong>Tasnuva Tasneem</strong> presented a token of appreciation to the speaker <strong>Mahir Mahdee</strong>. A group photo session was carried out,
  which marked the end of the seminar. The session was graced by the presence of 68 registered participants.
</p>
<p>
  <img src="/images/ieee/2020/09/1-1.jpg" alt="" width="800" height="532" srcset=
  "/images/ieee/2020/09/1-1-200x133.jpg 200w, /images/ieee/2020/09/1-1-300x200.jpg 300w, /images/ieee/2020/09/1-1-400x266.jpg 400w, /images/ieee/2020/09/1-1-600x399.jpg 600w, /images/ieee/2020/09/1-1-768x511.jpg 768w, /images/ieee/2020/09/1-1.jpg 800w"
   /> <img src="/images/ieee/2020/09/2-1.jpg" alt="" width="800" height="532" srcset=
  "/images/ieee/2020/09/2-1-200x133.jpg 200w, /images/ieee/2020/09/2-1-300x200.jpg 300w, /images/ieee/2020/09/2-1-400x266.jpg 400w, /images/ieee/2020/09/2-1-600x399.jpg 600w, /images/ieee/2020/09/2-1-768x511.jpg 768w, /images/ieee/2020/09/2-1.jpg 800w"
   /> <img src="/images/ieee/2020/09/3-1.jpg" alt="" width="800" height="482" srcset=
  "/images/ieee/2020/09/3-1-200x121.jpg 200w, /images/ieee/2020/09/3-1-300x181.jpg 300w, /images/ieee/2020/09/3-1-400x241.jpg 400w, /images/ieee/2020/09/3-1-600x362.jpg 600w, /images/ieee/2020/09/3-1-768x463.jpg 768w, /images/ieee/2020/09/3-1.jpg 800w"
   />
</p>`,
    },
    category: ``,
  },

  {
    id: 41,
    title: `IEEE AIUB Student Branch organized a seminar on “Optical Fiber Sensing for Healthcare”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/banner-2.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><p>
  On 21<sup>st</sup> January 2020, <strong>IEEE AIUB Student Branch</strong> successfully organized the first seminar of the year titled “<strong>Optical Fiber Sensing For Healthcare</strong>” in
  collaboration with <strong>IEEE Engineering in Medicine and Biology Society, AIUB Student Branch Chapter,</strong> and <strong>Faculty of Engineering, AIUB</strong>. The seminar was conducted by
  <strong>Nadia Afroze</strong>, <em>Ph.D. Student, Optics and Photonics Research Group, Faculty of Engineering, University of Nottingham</em>.
</p>
<p>
  The seminar was inaugurated by the opening remarks from <strong>Prof. Dr. A.B.M Siddique Hossain</strong>, <em>Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch,</em> who talked
  about the importance of Optical Fibers and how its properties and structures have progressed significantly in recent times for the betterment of humankind. He also discussed some of the useful
  properties of Optical Fibers along with their wide range of applications in recent times.<img src="/images/ieee/2020/09/1-2.jpg" alt="" width="800" height="532" srcset=
  "/images/ieee/2020/09/1-2-200x133.jpg 200w, /images/ieee/2020/09/1-2-300x200.jpg 300w, /images/ieee/2020/09/1-2-400x266.jpg 400w, /images/ieee/2020/09/1-2-600x399.jpg 600w, /images/ieee/2020/09/1-2-768x511.jpg 768w, /images/ieee/2020/09/1-2.jpg 800w"
   />
</p>
<p>
   
</p>
<p>
  Then, <strong>Nadia Afroze</strong> took the stage and initiated the session by talking about Optical Fiber Sensors and discussed its’ benefits compared to other sensors. After that, she spoke in
  detail about a health issue known as <strong>Pressure Ulcers,</strong> including its essential effects and causes. Then, she talked briefly about <strong>Optical Fiber CO2 Sensors</strong> and
  their working mechanism, structure, and proper usage for determining the presence of Pressure Ulcers. Later, she elaborately discussed the sensing mechanism, fabrication & calibration processes
  of Optical Fiber CO2 sensors, and some experimental data that portrayed her statement. Besides, she also discussed various environmental factors and health issues that cause variations in Optical
  Fiber CO2 Sensors’ performance. Hence, she displayed some experimental results that solidified her statement.
</p>
<p>
  After that, <strong>Dr. Mohammad Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch; Senior Assistant Professor, Faculty of Engineering, AIUB</em> delivered the concluding
  speech where he discussed the wide range of applications of <strong>Optical Fibers in the Healthcare sector</strong>. He also motivated the participants to elect Optical Fiber Systems in
  higher education due to its promising future. Later, <strong>Dr. Mohammad Hasan</strong> <strong>Imam</strong> presented a token of appreciation to <strong>Nadia
  Afroze</strong>. A group photo session was carried out, which marked the end of the seminar. The seminar was graced by the presence of honorable faculty members of the <strong>EEE & CoE
  Department of AIUB</strong> and 129 registered participants<strong>.</strong>
</p>
<p>
  <img src="/images/ieee/2020/09/2-2.jpg" alt="" width="800" height="558" srcset=
  "/images/ieee/2020/09/2-2-200x140.jpg 200w, /images/ieee/2020/09/2-2-300x209.jpg 300w, /images/ieee/2020/09/2-2-400x279.jpg 400w, /images/ieee/2020/09/2-2-600x419.jpg 600w, /images/ieee/2020/09/2-2-768x536.jpg 768w, /images/ieee/2020/09/2-2.jpg 800w"
   /> <img src="/images/ieee/2020/09/3-2.jpg" alt="" width="800" height="501" srcset=
  "/images/ieee/2020/09/3-2-200x125.jpg 200w, /images/ieee/2020/09/3-2-300x188.jpg 300w, /images/ieee/2020/09/3-2-400x251.jpg 400w, /images/ieee/2020/09/3-2-600x376.jpg 600w, /images/ieee/2020/09/3-2-768x481.jpg 768w, /images/ieee/2020/09/3-2.jpg 800w"
   />
</p>`,
    },
    category: `seminar`,
  },

  {
    id: 42,
    title: `IEEE AIUB Student Branch presents “Student Professional Awareness Venture (SPAVe 4.0)”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Picture-1-4.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 28<sup>th</sup> December 2019, <strong>IEEE AIUB Student Branch</strong> successfully organized <strong>IEEE Student Professional Awareness Venture (SPAVe
            4.0), </strong>at <strong>American International University – Bangladesh</strong>. <strong>IEEE USA Student Professional Awareness Activities</strong> (SPAA) are
            oriented to enhance the leadership, career, and professional development skills of engineering students. Being a part of the grand initiative for the fourth time in the history
            of <strong>IEEE Bangladesh Section</strong> along with the entire <strong>Region 10</strong>,
          </p>
          <p>
            IEEE AIUB Student Branch presented IEEE Student Professional Awareness Venture 4.0 (SPAVe) to educate students on how to sustain a lifelong career in
            engineering. The <strong>IEEE USA</strong> branded venture was provided with technical support by <strong>IEEE Bangladesh Section</strong>. The venture was also
            supported by <strong>IEEE Bangladesh Section Student Activities Committee</strong> and <strong>IEEE Young Professionals Bangladesh Section. </strong>The flagship event
            consisted of series of professional and career-based sessions focused on professional development, conducting plenary talks on timely topics and allowing students to understand the
            ever-changing professional world and also developing skills that would not be taught in classrooms needed to pursue a career as an exemplary individual. Students from different
            universities of different places in the country came to participate in the event.
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-2-4.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-2-4-200x134.jpg 200w, /images/ieee/2022/02/Picture-2-4-300x200.jpg 300w, /images/ieee/2022/02/Picture-2-4-400x267.jpg 400w, /images/ieee/2022/02/Picture-2-4-600x401.jpg 600w, /images/ieee/2022/02/Picture-2-4-768x513.jpg 768w, /images/ieee/2022/02/Picture-2-4-800x534.jpg 800w, /images/ieee/2022/02/Picture-2-4.jpg 1024w"
             />
          </p>
          <p>
            The day was inaugurated with a welcome speech by <strong>Prof</strong> <strong>Dr. M Tanseer Ali</strong>, <em>Educational Activity Coordinator, IEEE Bangladesh Section;
            Senior Assistant Professor, Faculty of Engineering, AIUB; Special Assistant, Capstone Project</em>,<em> Faculty of Engineering, AIUB</em> who talked
            about <strong>IEEE</strong> and <strong>IEEE AIUB Student Branch</strong>. He also portrayed a video which illustrated the history of IEEE AIUB Student Branch and also
            displayed the branch’s previous SPAVe ventures. He further discussed how <strong>IEEE SPAVe</strong> is a great initiative in developing a student professionally along with
            discussing the importance of professionalism in a work environment and also advised the students to accept the change as it is a part of nature. He later stated some facts about the job
            criterions that employers will be looking forward to in the near future and inspired the participants to acquire more task specific skills to lure in a lucrative and successful future.
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-3-4.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-3-4-200x134.jpg 200w, /images/ieee/2022/02/Picture-3-4-300x200.jpg 300w, /images/ieee/2022/02/Picture-3-4-400x267.jpg 400w, /images/ieee/2022/02/Picture-3-4-600x401.jpg 600w, /images/ieee/2022/02/Picture-3-4-768x513.jpg 768w, /images/ieee/2022/02/Picture-3-4-800x534.jpg 800w, /images/ieee/2022/02/Picture-3-4.jpg 1024w"
             />
          </p>
          <p>
            The first session was entitled “<strong>Power of Good Marketing for Engineers” </strong>which was conducted interactively by <strong>Mohammad Hasan Morshed
            Khan </strong><em>,Business Development Manager, Reinhausen Asia Pacific SDN.Bhd</em> . The session solely focused on the power of good marketing skills and how engineers should
            excel in the respective field globally. He portrayed some future projects of Reinhausen Asia Pacific and described their method of work. He inspired students to pursue global education
            and global job allocations. Furthermore, the speaker gave interactive examples of how good marketing skills can in turn be useful in an engineer’s daily life and
            education. <strong>Mohammad Hasan Morshed Khan </strong>was later presented with a token of appreciation from <strong>Kawshik Shikder</strong>, <em>Motivator, IEEE
            AIUB Student Branch; Advisor, IEEE Microwave Theory and Techniques Society, AIUB Student Branch Chapter; Assistant Professor, Faculty of Engineering, AIUB.</em>
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-4-4.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-4-4-200x134.jpg 200w, /images/ieee/2022/02/Picture-4-4-300x200.jpg 300w, /images/ieee/2022/02/Picture-4-4-400x267.jpg 400w, /images/ieee/2022/02/Picture-4-4-600x401.jpg 600w, /images/ieee/2022/02/Picture-4-4-768x513.jpg 768w, /images/ieee/2022/02/Picture-4-4-800x534.jpg 800w, /images/ieee/2022/02/Picture-4-4.jpg 1024w"
             /> <img src="/images/ieee/2022/02/Picture-5-4-scaled.jpg" alt="" width="2000" height="1335" srcset=
            "/images/ieee/2022/02/Picture-5-4-200x134.jpg 200w, /images/ieee/2022/02/Picture-5-4-300x200.jpg 300w, /images/ieee/2022/02/Picture-5-4-400x267.jpg 400w, /images/ieee/2022/02/Picture-5-4-600x401.jpg 600w, /images/ieee/2022/02/Picture-5-4-768x513.jpg 768w, /images/ieee/2022/02/Picture-5-4-800x534.jpg 800w, /images/ieee/2022/02/Picture-5-4-1024x684.jpg 1024w, /images/ieee/2022/02/Picture-5-4-1200x801.jpg 1200w, /images/ieee/2022/02/Picture-5-4-1536x1025.jpg 1536w, /images/ieee/2022/02/Picture-5-4-scaled.jpg 2000w"
             />
          </p>
          <p>
            The second session was entitled <strong>“Personal Habits for Professional Success” </strong>which was conducted by <strong>Minhaz-Us-Salakeen
            Fahme, </strong><em>Co-Founder and CEO, Battery Low Interactive Ltd. </em>The session marked its inception with an inspiring and introductory speech from the speaker. The
            speaker pointed out some impressive and notable good habits for students to follow for a successful life. He then explained each habit through means of media and storytelling. Lastly, he
            pointed out the many not appreciable habits that students have in their daily lives and gave useful tips how to get rid of the bad habits. He also provided some minor tips to improve
            professional network and how to professionally interact with corporate individuals. <strong>Minhaz-Us-Salakeen Fahme</strong> was later presented with a token of appreciation
            by <strong>Prof</strong> <strong>Dr. M Tanseer Ali</strong>, <em>Educational Activity Coordinator, IEEE Bangladesh Section; Senior Assistant Professor, Faculty of
            Engineering, AIUB; Special Assistant, Capstone Project</em>,<em> Faculty of Engineering, AIUB.</em>
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-6-3.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-6-3-200x134.jpg 200w, /images/ieee/2022/02/Picture-6-3-300x200.jpg 300w, /images/ieee/2022/02/Picture-6-3-400x267.jpg 400w, /images/ieee/2022/02/Picture-6-3-600x401.jpg 600w, /images/ieee/2022/02/Picture-6-3-768x513.jpg 768w, /images/ieee/2022/02/Picture-6-3-800x534.jpg 800w, /images/ieee/2022/02/Picture-6-3.jpg 1024w"
             /> <img src="/images/ieee/2022/02/Picture-7-2.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-7-2-200x134.jpg 200w, /images/ieee/2022/02/Picture-7-2-300x200.jpg 300w, /images/ieee/2022/02/Picture-7-2-400x267.jpg 400w, /images/ieee/2022/02/Picture-7-2-600x401.jpg 600w, /images/ieee/2022/02/Picture-7-2-768x513.jpg 768w, /images/ieee/2022/02/Picture-7-2-800x534.jpg 800w, /images/ieee/2022/02/Picture-7-2.jpg 1024w"
             />
          </p>
          <p>
            The third session was entitled <strong>“Growth Vs Fixed Mindset as a Leadership Quality” </strong>conducted by <strong>Mr. Ghulam Sumdany Don</strong>, <em>Chief
            Inspirational Officer, Don Sumdany Facilitation and Consultancy.</em> The session focused on the important aspects of a person’s mental health; Growing and Fixed Mindset. Mr. Sumdany
            briefly introduced himself to the impressive audience and later thanked IEEE AIUB Student Branch for gathering such an interactive crowd. He then inspired and appreciated the huge crowd
            and took inspiration from the participants. The speaker displayed some media and stories about the usefulness of a growing mindset in a professional’s life. He encouraged the participants
            to always learn from individual and third-party mistakes. He warned the crowd to be aware of fixed mentalities and described the harmful effects it brings forth in an individual’s career.
            The speaker concluded by portraying a story which differentiated the two separate mentality types. <strong>Mr. Ghulam Sumdany Don</strong> was later presented with a token of
            appreciation from <strong>Dr. Md. Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch;</em> <em>Advisor, IEEE Engineering in Medicine and Biology Society, AIUB
            Student Branch Chapter; Senior Assistant Professor, Faculty of Engineering, AIUB.</em>
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-8-1-scaled.jpg" alt="" width="2000" height="1335" srcset=
            "/images/ieee/2022/02/Picture-8-1-200x134.jpg 200w, /images/ieee/2022/02/Picture-8-1-300x200.jpg 300w, /images/ieee/2022/02/Picture-8-1-400x267.jpg 400w, /images/ieee/2022/02/Picture-8-1-600x401.jpg 600w, /images/ieee/2022/02/Picture-8-1-768x513.jpg 768w, /images/ieee/2022/02/Picture-8-1-800x534.jpg 800w, /images/ieee/2022/02/Picture-8-1-1024x684.jpg 1024w, /images/ieee/2022/02/Picture-8-1-1200x801.jpg 1200w, /images/ieee/2022/02/Picture-8-1-1536x1025.jpg 1536w, /images/ieee/2022/02/Picture-8-1-scaled.jpg 2000w"
             />
          </p>
          <p>
            The fourth session was entitled <strong>“Making yourself Competitive as a Young professional”</strong> which was conducted by <strong>Akib Jobaer
            Rahman </strong>,<em>Vice-Chairperson, IEEE Young Professionals, Bangladesh Section; System Engineer, Planning Department, Premium Connectivity</em>. The focus of the session was to
            inspire the young participants on pursuing the correct future career. The speaker introduced himself and shared some impressive experiences he faced during his journey as a Young
            Professional. He inspired the participants to conceive challenges and be responsible for their individual actions, He further encouraged the participants to learn more basic skills and
            develop themselves as knowledgeable individuals. He concluded his session with the portrayal of the importance of a mentor in any course of life. <strong>Akib Jobaer
            Rahman </strong>was later presented with a token of appreciation from <strong>Kawshik Shikder</strong>, <em>Motivator, IEEE AIUB Student Branch; Advisor, IEEE Microwave
            Theory and Techniques Society, AIUB Student Branch Chapter; Assistant Professor, Faculty of Engineering, AIUB.</em>
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-10-1.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-10-1-200x134.jpg 200w, /images/ieee/2022/02/Picture-10-1-300x200.jpg 300w, /images/ieee/2022/02/Picture-10-1-400x267.jpg 400w, /images/ieee/2022/02/Picture-10-1-600x401.jpg 600w, /images/ieee/2022/02/Picture-10-1-768x513.jpg 768w, /images/ieee/2022/02/Picture-10-1-800x534.jpg 800w, /images/ieee/2022/02/Picture-10-1.jpg 1024w"
             />
          </p>
          <p>
            The fifth session was entitled <strong>“Preparing Yourself for a Technological Tomorrow” </strong>which was conducted by <strong>Mr. Omar Shahjalal
            Shantanu</strong>, <em>Satellite Operation Engineer, Spectra International Limited. </em>The focus of the session was to introduce the participants to the modern era of
            technology and the ever changing skill set requirement of the job market. Mr. Shantanu introduced himself and the complex operations a satellite engineer does to control satellite data.
            He then gave an interactive overview of the Bangabandhu Satelite-1, geostationary satellite hovering over Bangladesh. The speaker portrayed some recent technological advancement and also
            spoke about the ones about to come in the near future. He then inspired the participants to develop skills associated with recent advancements in technology. Lastly, the speaker addressed
            to some project based websites and tutorials. The concluding part of the session inspired the student s to work on a plethora of projects in their academic life. <strong>Mr. Omar
            Shahjalal Shantanu</strong> was later presented with a token of appreciation from <strong>A.R.M. Abdullah Rocky</strong>, <em>Chairperson, IEEE Young Personals, Bangladesh
            Section; Assistant Manager, Enterprise Architecture and Planning, Bkash LTD.</em>
          </p>
          <p>
            <em><img src="/images/ieee/2022/02/Picture-12-1.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-12-1-200x134.jpg 200w, /images/ieee/2022/02/Picture-12-1-300x200.jpg 300w, /images/ieee/2022/02/Picture-12-1-400x267.jpg 400w, /images/ieee/2022/02/Picture-12-1-600x401.jpg 600w, /images/ieee/2022/02/Picture-12-1-768x513.jpg 768w, /images/ieee/2022/02/Picture-12-1-800x534.jpg 800w, /images/ieee/2022/02/Picture-12-1.jpg 1024w"
             /> <img src="/images/ieee/2022/02/Picture-13-1.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-13-1-200x134.jpg 200w, /images/ieee/2022/02/Picture-13-1-300x200.jpg 300w, /images/ieee/2022/02/Picture-13-1-400x267.jpg 400w, /images/ieee/2022/02/Picture-13-1-600x401.jpg 600w, /images/ieee/2022/02/Picture-13-1-768x513.jpg 768w, /images/ieee/2022/02/Picture-13-1-800x534.jpg 800w, /images/ieee/2022/02/Picture-13-1.jpg 1024w"
             /></em>
          </p>
          <p>
            The sixth session of the venture was entitled “<strong>Preparing Yourself to be The Future Leader, Starting Tomorrow”</strong>. The interactive session was performed
            by <strong>Chowdhury Akram Hossain ,</strong> <em>Former Secretary, IEEE Bangladesh Section; Former Counselor, IEEE AIUB Student Branch; Senior Assistant Professor, Faculty of
            Engineering, AIUB; Special Assistant, Office of Student Affairs, AIUB. </em>Mr. Akram introduced himself and shared his long experience working
            with <strong>IEEE</strong>, <strong>IEEE AIUB Student Branch</strong> and <strong>IEEE Bangladesh Section.</strong>
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-14-1-scaled.jpg" alt="" width="2000" height="1335" srcset=
            "/images/ieee/2022/02/Picture-14-1-200x134.jpg 200w, /images/ieee/2022/02/Picture-14-1-300x200.jpg 300w, /images/ieee/2022/02/Picture-14-1-400x267.jpg 400w, /images/ieee/2022/02/Picture-14-1-600x401.jpg 600w, /images/ieee/2022/02/Picture-14-1-768x513.jpg 768w, /images/ieee/2022/02/Picture-14-1-800x534.jpg 800w, /images/ieee/2022/02/Picture-14-1-1024x684.jpg 1024w, /images/ieee/2022/02/Picture-14-1-1200x801.jpg 1200w, /images/ieee/2022/02/Picture-14-1-1536x1025.jpg 1536w, /images/ieee/2022/02/Picture-14-1-scaled.jpg 2000w"
             />
          </p>
          <p>
            <em>He encouraged the participants to know who they are and what they want to become. He explained leadership traits revolutionary leaders had which made them glorious. He differentiated
            between a Leader and a Boss, furthermore he described the different levels of leadership portrayed by everyone in their daily lives. He encouraged the young leaders to initiate ideas and
            take responsibilities of their daily surroundings. He concluded his session by thanking IEEE AIUB Student Branch and portrayed the benefits of IEEE and IEEE organized
            events. <strong>Chowdhury Akram Hossain </strong>was later presented with a token of appreciation from <strong>Dr. Md. Hasan Imam</strong>, Counselor, IEEE AIUB Student
            Branch; , IEEE Engineering in Medicine and Biology Society, AIUB Student Branch Chapter; Senior Assistant Professor, Faculty of Engineering, AIUB.</em>
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-15-1.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-15-1-200x134.jpg 200w, /images/ieee/2022/02/Picture-15-1-300x200.jpg 300w, /images/ieee/2022/02/Picture-15-1-400x267.jpg 400w, /images/ieee/2022/02/Picture-15-1-600x401.jpg 600w, /images/ieee/2022/02/Picture-15-1-768x513.jpg 768w, /images/ieee/2022/02/Picture-15-1-800x534.jpg 800w, /images/ieee/2022/02/Picture-15-1.jpg 1024w"
             />
          </p>
          <p>
            The day-long event was concluded with a closing speech from<strong> Dr. Md. Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch; , IEEE Engineering in Medicine and
            Biology Society, AIUB Student Branch Chapter; Senior Assistant Professor, Faculty of Engineering, AIUB. </em>The speaker started his speech by thanking the participants for their
            patience and attendance.
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-16.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-16-200x134.jpg 200w, /images/ieee/2022/02/Picture-16-300x200.jpg 300w, /images/ieee/2022/02/Picture-16-400x267.jpg 400w, /images/ieee/2022/02/Picture-16-600x401.jpg 600w, /images/ieee/2022/02/Picture-16-768x513.jpg 768w, /images/ieee/2022/02/Picture-16-800x534.jpg 800w, /images/ieee/2022/02/Picture-16.jpg 1024w"
             />
          </p>
          <p>
            He thanked <strong>IEEE AIUB Student Branch</strong> for organizing <strong>IEEE SPAVe 4.0</strong> and thanked the ambassadors as well as the speakers for their
            tremendous effort in making the event a success. He then presented tokens and certificates of appreciation to the ambassadors that participated from different affiliated universities. The
            counselor then awarded the best ambassador prize to<strong> Ushna Das, </strong><em>Hajee Mohammad Danesh Science and Technology University.</em> The counselor then handed
            two honorable mentions prize for best ambassador to <strong>Uthso Nandy</strong>, <em>Stamford University Bangladesh </em>and <strong>Md Ahnaf Sakif
            Chowdhury, </strong><em>Institute of Science Trade and Technology (ISTT). </em>The Counselor thanked IEEE Bangladesh Section for their ever humble support and presented a token
            of appreciation for their involvement.
          </p>
          <p>
            Finally he invited the guest speakers and the attendees for a group picture. The event was also graced by the presence of <strong>A.R.M Abdullah Rocky</strong>, <em>Assistant
            Manager, BKash Limited ; Chairperson, IEEE Young Professionals Bangladesh Section</em>
          </p>
          <p>
            and <strong>Shams Shad Rafi</strong>, <em>Chairperson, IEEE Bangladesh Section, Student Activity Committee(SAC); Mentor ,IEEE AIUB Student Branch: System Engineer, Bangla Phone
            LTD.</em>
          </p>
          <div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/Picture-17.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_10]" target="_self"><img src=
                "/images/ieee/2022/02/Picture-17.jpg" width="1024" height="684" alt="" title="Picture-17" aria-label="Picture-17" srcset=
                "/images/ieee/2022/02/Picture-17-200x134.jpg 200w, /images/ieee/2022/02/Picture-17-400x267.jpg 400w, /images/ieee/2022/02/Picture-17-600x401.jpg 600w, /images/ieee/2022/02/Picture-17-800x534.jpg 800w, /images/ieee/2022/02/Picture-17.jpg 1024w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/Picture-18.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_10]" target="_self"><img src=
                "/images/ieee/2022/02/Picture-18.jpg" width="684" height="1024" alt="" title="Picture-18" aria-label="Picture-18" srcset=
                "/images/ieee/2022/02/Picture-18-200x299.jpg 200w, /images/ieee/2022/02/Picture-18-400x599.jpg 400w, /images/ieee/2022/02/Picture-18-600x898.jpg 600w, /images/ieee/2022/02/Picture-18.jpg 684w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/Picture-19.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_10]" target="_self"><img src=
                "/images/ieee/2022/02/Picture-19.jpg" width="684" height="1024" alt="" title="Picture-19" aria-label="Picture-19" srcset=
                "/images/ieee/2022/02/Picture-19-200x299.jpg 200w, /images/ieee/2022/02/Picture-19-400x599.jpg 400w, /images/ieee/2022/02/Picture-19-600x898.jpg 600w, /images/ieee/2022/02/Picture-19.jpg 684w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/Picture-20.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_10]" target="_self"><img src=
                "/images/ieee/2022/02/Picture-20.jpg" width="1024" height="684" alt="" title="Picture-20" aria-label="Picture-20" srcset=
                "/images/ieee/2022/02/Picture-20-200x134.jpg 200w, /images/ieee/2022/02/Picture-20-400x267.jpg 400w, /images/ieee/2022/02/Picture-20-600x401.jpg 600w, /images/ieee/2022/02/Picture-20-800x534.jpg 800w, /images/ieee/2022/02/Picture-20.jpg 1024w"
                 /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `flagship event`,
  },

  {
    id: 43,
    title: `IEEE AIUB Student Branch successfully organized a seminar on “Microwave Transmission in Telecommunications”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Picture-1-3.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 4<sup>th</sup> of December 2019, <strong>IEEE AIUB Student Branch</strong> successfully organized a seminar on “<strong>Microwave Transmission in
            Telecommunications”</strong> at <strong>American International University-Bangladesh (AIUB) </strong>in collaboration with <strong>IEEE Bangladesh Section Student
            Activities Committee</strong>, <strong>IEEE Young Professionals</strong>, <strong>IEEE Microwave Theory and Techniques Society AIUB Student Branch
            Chapter</strong> and <strong>Faculty of Engineering, AIUB. </strong>The seminar was conducted by <strong>Rajesh Kumar Paul</strong>, <em>Specialist, Microwave
            Operation, Technology Division, ROBI AXIATA Limited; Treasurer, IEEE Young Professionals Bangladesh Section</em>.
          </p>
          <p>
            The seminar was inaugurated with the welcome speech of <strong>Dr. M. Tanseer Ali</strong>, <em>Former Counselor, IEEE AIUB Student Branch; Senior Assistant Professor, Faculty
            of Engineering, AIUB</em> who talked about various types of <strong>Antennas</strong> that are available right now and how its internal configurations have evolved till now
            compared to the past. He also discussed the progression of <strong>Microwave</strong> and <strong>Telecommunication</strong> sectors along with the research
            opportunities it provides for higher education.
          </p>
          <p>
             
          </p>
          <p>
            Then, the speaker <strong>Rajesh Kumar Paul</strong> took the stage and discussed the history along with the importance of Microwave Transmission systems in recent times. He
            also talked in details about various types of Antennas and other equipments that are involved in transmission along with their characteristics, infrastructure and parameters.
          </p>
          <p>
             
          </p>
          <p>
            In addition, he talked elaborately about <strong>Synchronous Transport Module (STM)</strong>, and its functions in Telecommunication system. He also gave a brief knowledge to the
            participants about <strong>Microwave Frequency Bands</strong> and also explained the suitable range of frequencies that are generally used. Finally, he concluded with an
            interactive Question-Answer session.
          </p>
          <p>
            After that, <strong>Dr. Mohammad Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch; Senior Assistant Professor, Faculty of Engineering, AIUB</em> delivered the
            concluding speech where he discussed about the wide range of applications of <strong>Microwave Transmission</strong>. He also motivated the participants for electing
            Telecommunication in higher education due to its promising future. Later, <strong>Dr. Mohammad Hasan</strong> <strong>Imam</strong> presented a token of appreciation
            to <strong>Rajesh Kumar Paul</strong>. A group photo session was carried out which marked the end of the seminar.
          </p>
          <div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/Picture-2-3.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_11]" target="_self"><img src=
                "/images/ieee/2022/02/Picture-2-3.jpg" width="1024" height="684" alt="" title="Picture-2" aria-label="Picture-2" srcset=
                "/images/ieee/2022/02/Picture-2-3-200x134.jpg 200w, /images/ieee/2022/02/Picture-2-3-400x267.jpg 400w, /images/ieee/2022/02/Picture-2-3-600x401.jpg 600w, /images/ieee/2022/02/Picture-2-3-800x534.jpg 800w, /images/ieee/2022/02/Picture-2-3.jpg 1024w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/Picture-3-3.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_11]" target="_self"><img src=
                "/images/ieee/2022/02/Picture-3-3.jpg" width="1024" height="684" alt="" title="Picture-3" aria-label="Picture-3" srcset=
                "/images/ieee/2022/02/Picture-3-3-200x134.jpg 200w, /images/ieee/2022/02/Picture-3-3-400x267.jpg 400w, /images/ieee/2022/02/Picture-3-3-600x401.jpg 600w, /images/ieee/2022/02/Picture-3-3-800x534.jpg 800w, /images/ieee/2022/02/Picture-3-3.jpg 1024w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/Picture-4-3.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_11]" target="_self"><img src=
                "/images/ieee/2022/02/Picture-4-3.jpg" width="1024" height="684" alt="" title="Picture-4" aria-label="Picture-4" srcset=
                "/images/ieee/2022/02/Picture-4-3-200x134.jpg 200w, /images/ieee/2022/02/Picture-4-3-400x267.jpg 400w, /images/ieee/2022/02/Picture-4-3-600x401.jpg 600w, /images/ieee/2022/02/Picture-4-3-800x534.jpg 800w, /images/ieee/2022/02/Picture-4-3.jpg 1024w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/Picture-5-3.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_11]" target="_self"><img src=
                "/images/ieee/2022/02/Picture-5-3.jpg" width="1024" height="563" alt="" title="Picture-5" aria-label="Picture-5" srcset=
                "/images/ieee/2022/02/Picture-5-3-200x110.jpg 200w, /images/ieee/2022/02/Picture-5-3-400x220.jpg 400w, /images/ieee/2022/02/Picture-5-3-600x330.jpg 600w, /images/ieee/2022/02/Picture-5-3-800x440.jpg 800w, /images/ieee/2022/02/Picture-5-3.jpg 1024w"
                 /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `seminar`,
  },

  {
    id: 44,
    title: `IEEE AIUB Student Branch successfully organized IEEE Student Professional Awareness Workshop (SPAW 2.0)`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Picture-1-2.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 9<sup>th</sup> November 2019, <strong>IEEE AIUB Student Branch</strong> successfully organized <strong>IEEE Student Professional Awareness Workshop (SPAW
            2.0) </strong>at <strong>American International University-Bangladesh (AIUB) </strong>for the second time in the history of <strong>IEEE Bangladesh
            Section</strong> and <strong>Region 10 (R10)</strong>. <strong>IEEE USA Student Professional Awareness Activities</strong> <strong>(SPAA) </strong>are oriented to
            enhance the leadership, career, and professional development skills of engineering students. This <strong>IEEE USA</strong> branded venture was provided with technical
            support by <strong>IEEE Bangladesh Section</strong> and also supported by <strong>IEEE Bangladesh Section Student Activities Committee</strong>, <strong>IEEE Young
            Professionals Bangladesh Section</strong> and <strong>IEEE Computer Society Bangladesh Section Chapter. </strong>The flagship event consisted of series of professional and
            career-based workshops focused on professional development, conducting plenary talks on timely topics and allowing students to understand the ever-changing professional world. Students
            from different universities from all over the country came to participate in the event.
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-2-2.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-2-2-200x134.jpg 200w, /images/ieee/2022/02/Picture-2-2-300x200.jpg 300w, /images/ieee/2022/02/Picture-2-2-400x267.jpg 400w, /images/ieee/2022/02/Picture-2-2-600x401.jpg 600w, /images/ieee/2022/02/Picture-2-2-768x513.jpg 768w, /images/ieee/2022/02/Picture-2-2-800x534.jpg 800w, /images/ieee/2022/02/Picture-2-2.jpg 1024w"
             />
          </p>
          <p>
            The day was inaugurated with a welcome speech by <strong>Dr. M Tanseer Ali</strong>, <em>Educational Activity Coordinator, IEEE Bangladesh Section; Sr. Assistant Professor,
            Faculty of Engineering, AIUB; Special Assistant, Capstone Project, Faculty of Engineering, AIUB </em>who talked about <strong>IEEE</strong> and discussed
            how <strong>IEEE SPAW</strong> is a great initiative for helping students to develop professionally. He further discussed the importance of professionalism in a work environment
            and advised the students to accept the change as it is a part of nature.The first session of the event entitled “<strong>Make a Successful Career as an Engineer”</strong> was
            interactively conducted by<strong> Md. Ariful Hoque Shuhan</strong><em>, Managing Director, REVERIE Power and Automation Engineering Ltd</em>. The session solely focused on the
            qualities an engineer needs to obtain in order to gain a successful career and the importance of setting goals in one’s life. He also talked about the importance of paradigm and
            networking in order to achieve a successful career. The Speaker was presented with a token of appreciation by <strong>Dr. Mohammad Hasan Imam</strong>, <em>Counselor, IEEE AIUB
            Student Branch; Sr. Assistant Professor, Faculty of Engineering, AIUB.</em>
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-3-2.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-3-2-200x134.jpg 200w, /images/ieee/2022/02/Picture-3-2-300x200.jpg 300w, /images/ieee/2022/02/Picture-3-2-400x267.jpg 400w, /images/ieee/2022/02/Picture-3-2-600x401.jpg 600w, /images/ieee/2022/02/Picture-3-2-768x513.jpg 768w, /images/ieee/2022/02/Picture-3-2-800x534.jpg 800w, /images/ieee/2022/02/Picture-3-2.jpg 1024w"
             />
          </p>
          <p>
            The second session titled <strong>“Strategic Interview-Workshop and Networking Session” </strong>was conducted by <strong>A.R.M Abdullah Rocky</strong>, <em>Asst.
            Manager, BKash Limited; Chairperson, IEEE Young Professionals Bangladesh Section</em> and <strong>Shams Shad Rafi</strong>, <em>Mentor, IEEE AIUB Student Branch; System
            Engineer, Bangla Phone Ltd</em>.
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-4-2.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-4-2-200x134.jpg 200w, /images/ieee/2022/02/Picture-4-2-300x200.jpg 300w, /images/ieee/2022/02/Picture-4-2-400x267.jpg 400w, /images/ieee/2022/02/Picture-4-2-600x401.jpg 600w, /images/ieee/2022/02/Picture-4-2-768x513.jpg 768w, /images/ieee/2022/02/Picture-4-2-800x534.jpg 800w, /images/ieee/2022/02/Picture-4-2.jpg 1024w"
             />
          </p>
          <p>
            <strong> </strong>
          </p>
          <p>
            The session started with inspiring speeches from the speakers and discussed the methods to tackle interview sessions conducted in the industries with the participants. Their session
            included a brief workshop on introducing the Strength, Weakness, Opportunity & Threat (SWOT) matrix in which the participants showed their skills of analysis and problem solving by
            working in groups. The best performing group was declared winner and awarded. The speakers were presented with tokens of appreciation by <strong>Dr. M Tanseer Ali</strong>.
          </p>
          <p>
             
          </p>
        </div>
        <div>
          <div>
            <div>
              <a href="/images/ieee/2022/02/Picture-5-2.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_12]" target="_self"><img src=
              "/images/ieee/2022/02/Picture-5-2.jpg" width="1024" height="724" alt="" title="Picture-5" aria-label="Picture-5" srcset=
              "/images/ieee/2022/02/Picture-5-2-200x141.jpg 200w, /images/ieee/2022/02/Picture-5-2-400x283.jpg 400w, /images/ieee/2022/02/Picture-5-2-600x424.jpg 600w, /images/ieee/2022/02/Picture-5-2-800x566.jpg 800w, /images/ieee/2022/02/Picture-5-2.jpg 1024w"
               /></a>
            </div>
          </div>
          <div>
            <div>
              <a href="/images/ieee/2022/02/Picture-6-2.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_12]" target="_self"><img src=
              "/images/ieee/2022/02/Picture-6-2.jpg" width="1024" height="979" alt="" title="Picture-6" aria-label="Picture-6" srcset=
              "/images/ieee/2022/02/Picture-6-2-200x191.jpg 200w, /images/ieee/2022/02/Picture-6-2-400x382.jpg 400w, /images/ieee/2022/02/Picture-6-2-600x574.jpg 600w, /images/ieee/2022/02/Picture-6-2-800x765.jpg 800w, /images/ieee/2022/02/Picture-6-2.jpg 1024w"
               /></a>
            </div>
          </div>
        </div>
        <div>
          <p>
             
          </p>
          <p>
            The third session titled <strong>“Initiating a Startup as an Engineer” </strong>was conducted by <strong>Arnob Kumar Saha</strong>, <em>Deputy Manager, Office of
            Professional-Development, Bangladesh Youth Leadership Centre (BYLC)</em>. The session focused on the important factors and key essentials that initialize a start-up and the methodologies
            to keep the start-up successful. He discussed different steps for designing: Empathy, Define, Ideate, Prototype and Test in details. Furthermore, he also shared some tips of properly
            ideating on the ideas of various start-ups. Lastly, the speaker conducted an interactive session which included brainstorming and solving a real-life problem in the shape of a startup,
            where the participating groups presented their unique ideas and solutions.
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-7-1.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-7-1-200x134.jpg 200w, /images/ieee/2022/02/Picture-7-1-300x200.jpg 300w, /images/ieee/2022/02/Picture-7-1-400x267.jpg 400w, /images/ieee/2022/02/Picture-7-1-600x401.jpg 600w, /images/ieee/2022/02/Picture-7-1-768x513.jpg 768w, /images/ieee/2022/02/Picture-7-1-800x534.jpg 800w, /images/ieee/2022/02/Picture-7-1.jpg 1024w"
             />
          </p>
          <p>
            The next session titled <strong>“Women in Engineering (WIE)”</strong> which was conducted by <strong>Tasnuva Anowar</strong>, <em>Asst. Engineer, Dhaka Power
            Distribution Company (DPDC)</em>. The session focused on inspiring young women to pursue a career as an engineer in the industry. The speaker talked about DPDC and their mission and she
            inspired the participants by describing some of her future projects and plans. The speaker also discussed the problems a female engineer faces in the industry along with the many ways to
            deal with such problems. Mrs Tasnuva Anowar was presented with a token of appreciation by <strong>Dr. Mohammad Hasan Imam.</strong>
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-9.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-9-200x134.jpg 200w, /images/ieee/2022/02/Picture-9-300x200.jpg 300w, /images/ieee/2022/02/Picture-9-400x267.jpg 400w, /images/ieee/2022/02/Picture-9-600x401.jpg 600w, /images/ieee/2022/02/Picture-9-768x513.jpg 768w, /images/ieee/2022/02/Picture-9-800x534.jpg 800w, /images/ieee/2022/02/Picture-9.jpg 1024w"
             />
          </p>
          <p>
            The last session of the grand venture titled <strong>“Authorship Workshop to Ensure Quality Publication” </strong>was conducted by <strong>Dr. Celia
            Shahnaz</strong>,<em> SMIEEE, FIEB; Chairperson, IEEE Bangladesh Section; Professor, Dept. of EEE, Bangladesh University of Engineering and Technology (BUET). </em>The session
            focused on introducing the participants to proper paper writing formats along with the ethics of paper publishing. The speaker initiated the session by elaborating proper etiquettes of
            paper publishing and discussed about different conferences happening in Bangladesh. She discussed about various types of scientific papers and frequently made errors in paper writing.
            Lastly, she talked about LATEX and the other peer review processes used by conference committees. <strong>Dr Celia Shahnaz </strong>was later presented with a token of
            appreciation by <strong>Dr. Mohammad Hasan Imam.</strong>
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-10.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-10-200x134.jpg 200w, /images/ieee/2022/02/Picture-10-300x200.jpg 300w, /images/ieee/2022/02/Picture-10-400x267.jpg 400w, /images/ieee/2022/02/Picture-10-600x401.jpg 600w, /images/ieee/2022/02/Picture-10-768x513.jpg 768w, /images/ieee/2022/02/Picture-10-800x534.jpg 800w, /images/ieee/2022/02/Picture-10.jpg 1024w"
             /><img src="/images/ieee/2022/02/Picture-11.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-11-200x134.jpg 200w, /images/ieee/2022/02/Picture-11-300x200.jpg 300w, /images/ieee/2022/02/Picture-11-400x267.jpg 400w, /images/ieee/2022/02/Picture-11-600x401.jpg 600w, /images/ieee/2022/02/Picture-11-768x513.jpg 768w, /images/ieee/2022/02/Picture-11-800x534.jpg 800w, /images/ieee/2022/02/Picture-11.jpg 1024w"
             />
          </p>
          <p>
            The day-long event was concluded with a closing speech from<strong> Dr. Mohammad Hasan Imam</strong> where he started his speech by thanking the participants for attending the
            day-long event. He thanked IEEE AIUB Student Branch for organizing IEEE SPAW 2.0, the ambassadors as well as the speakers, supporters, partners for their tremendous effort in making the
            event a successful one. Later, he and <strong>Kawshik Shikder</strong>,<strong> </strong><em>Motivator, IEEE AIUB Student Branch; Asst. Professor, Faculty of Engineering,
            AIUB, </em>presented tokens of appreciation and certificates to all the ambassadors who participated from different affiliated universities and also presented the best ambassador
            prize<em>.</em> A token of appreciation was handed over to <strong>Mashrur Sakib Choyon,</strong><em> Event Designer, IEEE AIUB Student Branch; Ambassador Lead, IEEE SPAW
            2.0.</em> The day long professional venture ended with a group photo.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `spaw`,
  },

  {
    id: 45,
    title: `SEMINAR ON BIOMEDICAL SIGNAL PROCESSING & ANALYSIS TECHNIQUES: CHALLENGES AND APPLICATIONS ORGANIZED BY IEEE AIUB STUDENT BRANCH`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Picture-1.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            <strong>IEEE AIUB Student Branch</strong> in collaboration with <strong>IEEE Engineering in Medicine and Biology Society (EMBS)</strong> and <strong>Department of
            Computer Engineering (CoE),</strong> <strong>Faculty of Engineering</strong>, <strong>AIUB</strong> successfully organized a seminar titled “<strong>Biomedical Signal
            Processing & Analysis Techniques: Challenges and Applications”</strong> at <strong>AIUB</strong>. The seminar focused on various types of artefacts and noises that are
            obtained during bio-signal recordings along with the ways of identifying those noises and the process of nullifying them from the raw data. The event was inaugurated by <strong>Prof.
            Dr. A.B.M</strong> <strong>Siddique Hossain</strong>, <em>Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch </em>who initiated his speech by introducing
            the importance and different sectors of Biomedical Engineering and discussed how engineering skills can be applied to the advancement of healthcare equipment to diagnose, monitor and
            analyze diseases. He concluded his speech by encouraging the participants to build a career in Biomedical Engineering to help and modernize medicine and biological sectors for the
            betterment of mankind.
          </p>
          <p>
            The seminar was conducted by <strong>Dr. Md. Kafiul Islam</strong>, <em>Technical Program Chair, ICAEE 2019; Assistant Professor, Department of EEE, School of Engineering &
            Computer Science, Independent University Bangladesh (IUB)</em>. The speaker started the session by sharing his experience of different projects those he has been incorporated with. Later,
            he explained various techniques used for the analysis and processing of biomedical signals as well as different ways of improving the techniques. He discussed elaborately about various
            types of artefacts found in different Bio-signals recordings including EEG, ECG & EMG and explained different ways to identify these artefacts. He concluded his session by discussing
            some procedures of rectifying these artefacts including the challenges faced while doing so. Afterwards, an interactive question-answer session took place where enthusiastic participants
            fulfilled their queries.
          </p>
          <p>
            The concluding speech was delivered by <strong>Dr. Mohammad Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch; Advisor, IEEE EMBS AIUB Student Branch Chapter; Sr.
            Asst. Professor, Faculty of Engineering, AIUB</em> who talked about the promising future of Biomedical Engineering and discussed the wide range of research opportunities that
            Biomedical sector provides in modern times. Afterwards, <strong>Dr. Md. Hasan Imam</strong> handed over a crest and a certificate to the speaker <strong>Dr. Md. Kafiul
            Islam</strong> as token of appreciation and group photo was taken with all the participants. The seminar was graced by the presence of <strong>Dr. Md. Humayun
            Kabir</strong>, <em>Sr. Assistant Professor, Faculty of Engineering, AIUB and</em> <strong>Kawshik Shikder</strong>, <em>Motivator, IEEE AIUB Student Branch; Asst.
            Professor, Faculty of Engineering, AIUB</em>.
          </p>
          <div>
            <div>
              <div>
                <a href="/images/ieee/2019/11/Picture-2.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_13]" target="_self"><img src=
                "/images/ieee/2019/11/Picture-2.jpg" width="800" height="533" alt="" title="Picture-2" aria-label="Picture-2" srcset=
                "/images/ieee/2019/11/Picture-2-200x133.jpg 200w, /images/ieee/2019/11/Picture-2-400x267.jpg 400w, /images/ieee/2019/11/Picture-2-600x400.jpg 600w, /images/ieee/2019/11/Picture-2.jpg 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2019/11/Picture-3.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_13]" target="_self"><img src=
                "/images/ieee/2019/11/Picture-3.jpg" width="800" height="533" alt="" title="Picture-3" aria-label="Picture-3" srcset=
                "/images/ieee/2019/11/Picture-3-200x133.jpg 200w, /images/ieee/2019/11/Picture-3-400x267.jpg 400w, /images/ieee/2019/11/Picture-3-600x400.jpg 600w, /images/ieee/2019/11/Picture-3.jpg 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2019/11/Picture-4.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_13]" target="_self"><img src=
                "/images/ieee/2019/11/Picture-4.jpg" width="800" height="533" alt="" title="Picture-4" aria-label="Picture-4" srcset=
                "/images/ieee/2019/11/Picture-4-200x133.jpg 200w, /images/ieee/2019/11/Picture-4-400x267.jpg 400w, /images/ieee/2019/11/Picture-4-600x400.jpg 600w, /images/ieee/2019/11/Picture-4.jpg 800w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a rel="noreferrer" data-rel="iLightbox[gallery_image_13]" target="_self"><img src="" width="" height="" alt="" title="" aria-label="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: ``,
  },

  {
    id: 46,
    title: `CELEBRATION OF IEEE DAY-2019`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Picture-1-1.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 13<sup>th</sup> October, 2019 <strong>IEEE AIUB Student Branch</strong> successfully celebrated <strong>“IEEE DAY-2019”</strong> at <strong>American
            International University-Bangladesh</strong>. IEEE Day is a global event that takes place annually on 1<sup>st</sup> of October in order to celebrate the anniversary in memory of the
            first time IEEE members gathered together from all over the world to share their innovative ideas in 1884. The world is in continuous search of modernization for an enhanced future; hence
            the theme of the IEEE DAY-2019 is “<strong>Leveraging Technology for a Better Tomorrow</strong>”. The joyous eventful day consisted of a Robosoccer Competition, Line Follower Robot (LFR)
            Competition along with interactive games and special cultural programme to engage and entertain the participants.
          </p>
          <p>
             
          </p>
          <p>
            The day-long venture was inaugurated with a cake cutting ceremony by honorable <strong>Dr. Carmen Z. Lamagna</strong>, <em>Vice Chancellor, American International University
            Bangladesh</em>. Afterward, she engaged with the students along with the IEEE AIUB Student Branch’s Executive Board members and thanked IEEE AIUB Student Branch for their flawless efforts
            in organizing the event. In addition, she praised IEEE AIUB Student Branch for all their activities and success that they have achieved till now. She concluded by encouraging the IEEE
            members along with their volunteers to keep on showing diligence. The cake-cutting ceremony was spectated by <strong>Prof. Dr. A.B.M Siddique Hossain</strong>, <em>Dean, Faculty
            of Engineering, AIUB; Advisor, IEEE AIUB Student Branch</em>, <strong>Prof. Dr. Md. Abdur Rahman</strong>, <em>Associate Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB
            Student Branch,</em> <strong>Prof. Dr. Md. Abdul Mannan</strong>, <em>Director, Faculty of Engineering</em>, <em>AIUB</em>,<strong> Md. Saniat Rahman
            Zishan</strong>, <em>Department Head, CoE; Assistant Professor,  Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch,</em> <strong>Chowdhury Akram
            Hossain</strong>, <em> Senior Assistant Professor, Faculty of Engineering, AIUB; Special Assistant, Office of Student Affairs, AIUB; Former Counselor, IEEE AIUB Student
            Branch; </em>along with other respected faculty members and administrative officers.
          </p>
          <p>
             
          </p>
          <p>
             
          </p>
          <p>
            The competitions for the day started after noon, as the participants engaged in vicious Robot Soccer. Consecutive competitive matches were supervised by <strong>Dr. Md. Rifat
            Hazari</strong>, <em>Assistant Professor, Faculty of Engineering, AIUB </em>with the help of student volunteers. 21 teams participated in this knockout Soccer match led by their
            powerful robots on four wheels.  The robots and their makers showed immense confidence and capability when put together on a one on one game of soccer. Finally the best performing
            robot was declared the winner.
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-2-1.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-2-1-200x134.jpg 200w, /images/ieee/2022/02/Picture-2-1-300x200.jpg 300w, /images/ieee/2022/02/Picture-2-1-400x267.jpg 400w, /images/ieee/2022/02/Picture-2-1-600x401.jpg 600w, /images/ieee/2022/02/Picture-2-1-768x513.jpg 768w, /images/ieee/2022/02/Picture-2-1-800x534.jpg 800w, /images/ieee/2022/02/Picture-2-1.jpg 1024w"
             />
          </p>
          <p>
            Later, the Line Following Robot (LFR) competition was conducted, which increased the spirits of the contestants and participants. The LFR competition was conducted
            by <strong>Mr.</strong> <strong>Asif Hasan</strong>, <em>Lecturer, Faculty of Engineering, AIUB. </em>He provided quick solutions and also helped the contestants with
            minor coding and construction for the robots. 4 teams participated in the competition, amongst whom the fastest robot to complete the IEEE shaped black pathway was announced the winner.
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-3-1.jpg" alt="" width="1024" height="576" srcset=
            "/images/ieee/2022/02/Picture-3-1-200x113.jpg 200w, /images/ieee/2022/02/Picture-3-1-300x169.jpg 300w, /images/ieee/2022/02/Picture-3-1-400x225.jpg 400w, /images/ieee/2022/02/Picture-3-1-600x338.jpg 600w, /images/ieee/2022/02/Picture-3-1-768x432.jpg 768w, /images/ieee/2022/02/Picture-3-1-800x450.jpg 800w, /images/ieee/2022/02/Picture-3-1.jpg 1024w"
             />
          </p>
          <p>
            After a short lunch break, the event was taken indoors and was initiated with a cultural program. The hall room resonated with music as the attendees enjoyed a moment of relaxation.
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-4-1.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-4-1-200x134.jpg 200w, /images/ieee/2022/02/Picture-4-1-300x200.jpg 300w, /images/ieee/2022/02/Picture-4-1-400x267.jpg 400w, /images/ieee/2022/02/Picture-4-1-600x401.jpg 600w, /images/ieee/2022/02/Picture-4-1-768x513.jpg 768w, /images/ieee/2022/02/Picture-4-1-800x534.jpg 800w, /images/ieee/2022/02/Picture-4-1.jpg 1024w"
             />
          </p>
          <p>
            Later, <strong>Prof. Dr. A.B.M Siddique Hossain</strong>, <em>Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch, <strong>Prof. Dr. Md. Abdul
            Mannan</strong>, Director, Faculty of Engineering, AIUB</em> and <strong>Dr. Md. Hasan Imam</strong>, <em>Senior Assistant Professor, Faculty of Engineering,
            AIUB; Counselor, IEEE AIUB Student Branch </em>took the stage and announced names of the runners up and winners for the Robosoccer and Line Follower Robot competitions respectively.
            They later on announced the names of the second runners up, the runners up and the winner for the online quiz competition.
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-5-1.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/02/Picture-5-1-200x134.jpg 200w, /images/ieee/2022/02/Picture-5-1-300x200.jpg 300w, /images/ieee/2022/02/Picture-5-1-400x267.jpg 400w, /images/ieee/2022/02/Picture-5-1-600x401.jpg 600w, /images/ieee/2022/02/Picture-5-1-768x513.jpg 768w, /images/ieee/2022/02/Picture-5-1-800x534.jpg 800w, /images/ieee/2022/02/Picture-5-1.jpg 1024w"
             />
          </p>
          <p>
            Furthermore he handed tokens of appreciation to <strong>Prof. Dr. Md. Abdul Mannan</strong> ,<strong>Prof. Dr. Md. Hasan Imam</strong> and <strong>Kaushik
            Shikdar</strong>,<em> Assistant Professor, Faculty of Engineering, AIUB</em>; <em>Motivator, IEEE AIUB Student Branch </em>for their participation in the event.
          </p>
          <p>
             
          </p>
          <p>
            <strong>Dr. Md. Hasan Imam</strong>, <em>Senior Assistant Professor, Faculty of Engineering, AIUB; Counselor,  IEEE AIUB Student Branch</em> provided a token of
            appreciation to <strong>Prof. Dr. A.B.M Siddique</strong> sir and thanked the attendees for their cooperation.
          </p>
          <p>
            <strong><em> </em></strong>
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-6-1.jpg" alt="" width="1024" height="683" srcset=
            "/images/ieee/2022/02/Picture-6-1-200x133.jpg 200w, /images/ieee/2022/02/Picture-6-1-300x200.jpg 300w, /images/ieee/2022/02/Picture-6-1-400x267.jpg 400w, /images/ieee/2022/02/Picture-6-1-600x400.jpg 600w, /images/ieee/2022/02/Picture-6-1-768x512.jpg 768w, /images/ieee/2022/02/Picture-6-1-800x534.jpg 800w, /images/ieee/2022/02/Picture-6-1.jpg 1024w"
             />
          </p>
          <p>
            At the end of the program,  <strong>Prof. Dr. A.B.M Siddique Hossain</strong>, <em>Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch</em> took the stage
            and delivered the concluding speech. He explained the motive of IEEE Day and inspired many to join IEEE’s vast network and privilege from it benefits. The event was concluded with a group
            photo of The IEEE AIUB Student Branch executives and a group photo with all the attendees.
          </p>
          <p>
            <img src="/images/ieee/2022/02/Picture-7.jpg" alt="" width="1024" height="428" srcset=
            "/images/ieee/2022/02/Picture-7-200x84.jpg 200w, /images/ieee/2022/02/Picture-7-300x125.jpg 300w, /images/ieee/2022/02/Picture-7-400x167.jpg 400w, /images/ieee/2022/02/Picture-7-600x251.jpg 600w, /images/ieee/2022/02/Picture-7-768x321.jpg 768w, /images/ieee/2022/02/Picture-7-800x334.jpg 800w, /images/ieee/2022/02/Picture-7.jpg 1024w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Event`,
  },

  {
    id: 47,
    title: `INDUSTRIAL TOUR TO REVERIE POWER AND AUTOMATION ENGINEERING LTD`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Picture-1.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 5<sup>th</sup> October 2019, <strong>IEEE AIUB Student Branch</strong> in collaboration with <strong>IEEE Industry Application Society (IAS) AIUB Student Branch
            Chapter</strong> and <strong>Department of EEE, Faculty of Engineering (FE), AIUB</strong> successfully organized an industrial tour to <strong>Reverie Power and
            Automation Engineering Ltd.</strong> The tour was led by <strong>Dr. Md. Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch; Senior Asst. Professor, FE,
            AIUB, </em><strong>Mr. Farhadur Arifin, </strong><em>Associate Professor, FE, AIUB, </em><strong>Dr. Md. Rifat Hazari</strong>, <em>Assistant Professor, FE, AIUB
            and </em><strong>Dr. Ferdous Jahan Shaun</strong>, <em>Assistant Professor, FE, AIUB.</em> The participants were warmly greeted by <strong>Mr. Zikrul
            Hasan, </strong><em>Senior Manager, MV/LV Division, Reverie Power and Automation Engineering Ltd.</em> and<strong> Mr. Mehedi Hasan<em>, </em></strong><em>Manager,
            R&D Department, Reverie Power and Automation Engineering Ltd.</em> They discussed about different successful projects of the company and also presented a short video about the
            company showing their agendas and future goals.
          </p>
          <p>
            After the video presentation, <strong>Dr. Md. Hasan Imam</strong> initiated the tour by inviting Mr. Mehedi Hasan to act as an educational guide for the
            students. <strong>Mr. Mehedi Hasan</strong> divided the participants into two groups and guided them through different wings of the industry, explaining the functions of each
            wing along with describing different machinery and components incorporated with them. Furthermore, he described how important it is to check the quality of the transformers as those will
            be used all over Bangladesh. He concluded the tour with a question and answer session. At the end of the tour, Dr. Md. Hasan Imam delivered the concluding speech and
            thanked <strong>IEEE AIUB Student Branch</strong> for organizing an educational industrial tour for the students and <strong>Reverie Power and Automation Engineering
            Ltd. </strong>for hosting the tour. After that, he presented tokens of appreciation to the executive team of Reverie Power and Automation Engineering Ltd. and wished them luck for
            their future endeavors.
          </p>
          <div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/Picture-2-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_14]" target="_self"><img src=
                "/images/ieee/2022/02/Picture-2-scaled.jpg" width="2000" height="1335" alt="" title="Picture-2" aria-label="Picture-2" srcset=
                "/images/ieee/2022/02/Picture-2-200x134.jpg 200w, /images/ieee/2022/02/Picture-2-400x267.jpg 400w, /images/ieee/2022/02/Picture-2-600x401.jpg 600w, /images/ieee/2022/02/Picture-2-800x534.jpg 800w, /images/ieee/2022/02/Picture-2-1200x801.jpg 1200w, /images/ieee/2022/02/Picture-2-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/Picture-3-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_14]" target="_self"><img src=
                "/images/ieee/2022/02/Picture-3-scaled.jpg" width="2000" height="1335" alt="" title="Picture-3" aria-label="Picture-3" srcset=
                "/images/ieee/2022/02/Picture-3-200x134.jpg 200w, /images/ieee/2022/02/Picture-3-400x267.jpg 400w, /images/ieee/2022/02/Picture-3-600x401.jpg 600w, /images/ieee/2022/02/Picture-3-800x534.jpg 800w, /images/ieee/2022/02/Picture-3-1200x801.jpg 1200w, /images/ieee/2022/02/Picture-3-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/Picture-4-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_14]" target="_self"><img src=
                "/images/ieee/2022/02/Picture-4-scaled.jpg" width="2000" height="1335" alt="" title="Picture-4" aria-label="Picture-4" srcset=
                "/images/ieee/2022/02/Picture-4-200x134.jpg 200w, /images/ieee/2022/02/Picture-4-400x267.jpg 400w, /images/ieee/2022/02/Picture-4-600x401.jpg 600w, /images/ieee/2022/02/Picture-4-800x534.jpg 800w, /images/ieee/2022/02/Picture-4-1200x801.jpg 1200w, /images/ieee/2022/02/Picture-4-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/Picture-5-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_14]" target="_self"><img src=
                "/images/ieee/2022/02/Picture-5-scaled.jpg" width="2000" height="1335" alt="" title="Picture-5" aria-label="Picture-5" srcset=
                "/images/ieee/2022/02/Picture-5-200x134.jpg 200w, /images/ieee/2022/02/Picture-5-400x267.jpg 400w, /images/ieee/2022/02/Picture-5-600x401.jpg 600w, /images/ieee/2022/02/Picture-5-800x534.jpg 800w, /images/ieee/2022/02/Picture-5-1200x801.jpg 1200w, /images/ieee/2022/02/Picture-5-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/Picture-6-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_14]" target="_self"><img src=
                "/images/ieee/2022/02/Picture-6-scaled.jpg" width="2000" height="1335" alt="" title="Picture-6" aria-label="Picture-6" srcset=
                "/images/ieee/2022/02/Picture-6-200x134.jpg 200w, /images/ieee/2022/02/Picture-6-400x267.jpg 400w, /images/ieee/2022/02/Picture-6-600x401.jpg 600w, /images/ieee/2022/02/Picture-6-800x534.jpg 800w, /images/ieee/2022/02/Picture-6-1200x801.jpg 1200w, /images/ieee/2022/02/Picture-6-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `ias`,
  },

  {
    id: 48,
    title: `IEEE AIUB STUDENT BRANCH WIE AFFINITY GROUP ORGANIZED A WORKSHOP TITLED, “AN ANIMATION WORKSHOP PRINCIPLES, DIGITAL TOOLS AND GENRES”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Picture-1-6.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 3<sup>rd</sup> of October 2019, <strong>IEEE AIUB Student Branch WIE Affinity Group in association with IEEE AIUB Student Branch</strong> successfully
            organized a workshop on <strong>“An Animation Workshop Principles, Digital Tools and Genres”</strong> in collaboration with <strong>Department of Computer Engineering
            (CoE)</strong>, <strong>Faculty of Engineering</strong> <strong>(FE)</strong> at <strong>American International University – Bangladesh</strong>. The workshop focused
            on encouraging women to learn and gather more skills in 2D & 3D modeling and animation designing using the <strong>Adobe Flash CC</strong> interface. The workshop was
            carried out by <strong>Mr. Nelson Pujante Udaundo</strong>, <em>Lecturer in Animation (2D/3D), Visual Graphics and Visual Effects, AIUB </em>and <strong>Ms. Rani Ellen
            V. Ramos, </strong><em>Animation Lecturer, Animation Program – MMC Department, AIUB. The introductory speech was </em>delivered by <strong>Prof. Dr.
            A.B.M</strong> <strong>Siddique Hossain</strong>, <em>Dean, FE, AIUB; Advisor, IEEE AIUB Student Branch, </em>who discussed the importance of animation in the current job
            market and how it has evolved in recent times with help of advancement in technology. He further discussed how crucial it is to have skills in animation in order to build a successful
            career in the IT industries. He concluded his speech by encouraging the participants to develop their skills rather than focusing on grades.
          </p>
          <p>
             
          </p>
          <p>
            After the inauguration speech, the keynote speaker, <strong>Mr. Nelson Pujante Udaundo</strong> took the stage and discussed the importance of animation in recent times along
            with his prospective views on animation in near future. He then provided a video presentation portraying the existing animation industry along with providing a few samples of storyboards
            of a few renowned animation designers. He later introduced the Adobe Flash CC tools software and elaborately explained various types of tools and functions within the software. He
            initiated the beginning of the ending session by providing hands on session, going through the processes of designing different types of 2D & 3D shapes along with steps for converting
            them to a smooth 2D & 3D animation. Later, <strong>Ms. Rani Ellen V. Ramos</strong> took the stage and explained how the animation industry was still a male-dominated field
            and how women should aim on creating an impact on this field. She concluded her session by thanking <strong>IEEE AIUB Student Branch WIE Affinity Group</strong> for taking such
            an initiative and also urged the participants to take the field into consideration.
          </p>
          <p>
            <img src="/images/ieee/2022/01/Picture-2-5-scaled.jpg" alt="" width="2000" height="1150" srcset=
            "/images/ieee/2022/01/Picture-2-5-200x115.jpg 200w, /images/ieee/2022/01/Picture-2-5-300x172.jpg 300w, /images/ieee/2022/01/Picture-2-5-400x230.jpg 400w, /images/ieee/2022/01/Picture-2-5-600x345.jpg 600w, /images/ieee/2022/01/Picture-2-5-768x441.jpg 768w, /images/ieee/2022/01/Picture-2-5-800x460.jpg 800w, /images/ieee/2022/01/Picture-2-5-1024x589.jpg 1024w, /images/ieee/2022/01/Picture-2-5-1200x690.jpg 1200w, /images/ieee/2022/01/Picture-2-5-1536x883.jpg 1536w, /images/ieee/2022/01/Picture-2-5-scaled.jpg 2000w"
             />
          </p>
          <p>
            <em>Afterwards, <strong>Dr. Md. Hasan Imam</strong>, Counselor, IEEE AIUB Student Branch; Senior Asst. Professor, FE, AIUB took the stage and </em>talked about the
            current demand of animations. He further talked about the necessity of having animation skill, especially if the field was engineering. He concluded the event by
            thanking<strong> IEEE AIUB Student Branch WIE Affinity Group</strong> for organizing such an event. Later, he presented crests and certificates to speakers <strong>as a
            token of appreciation. The workshop was graced by the presence of Ms. Tasnuva Tasneem, <em>Motivator and WIE Coordinator, IEEE AIUB Student Branch; Asst. Professor, FE,
            AIUB.</em></strong>
          </p>
          <div>
            <div>
              <div>
                <a href="/images/ieee/2022/01/Picture-3-4-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_15]" target="_self"><img src=
                "/images/ieee/2022/01/Picture-3-4-scaled.jpg" width="2000" height="1263" alt="" title="Picture-3" aria-label="Picture-3" srcset=
                "/images/ieee/2022/01/Picture-3-4-200x126.jpg 200w, /images/ieee/2022/01/Picture-3-4-400x253.jpg 400w, /images/ieee/2022/01/Picture-3-4-600x379.jpg 600w, /images/ieee/2022/01/Picture-3-4-800x505.jpg 800w, /images/ieee/2022/01/Picture-3-4-1200x758.jpg 1200w, /images/ieee/2022/01/Picture-3-4-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/01/Picture-4-4-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_15]" target="_self"><img src=
                "/images/ieee/2022/01/Picture-4-4-scaled.jpg" width="2000" height="1173" alt="" title="Picture-4" aria-label="Picture-4" srcset=
                "/images/ieee/2022/01/Picture-4-4-200x117.jpg 200w, /images/ieee/2022/01/Picture-4-4-400x235.jpg 400w, /images/ieee/2022/01/Picture-4-4-600x352.jpg 600w, /images/ieee/2022/01/Picture-4-4-800x469.jpg 800w, /images/ieee/2022/01/Picture-4-4-1200x704.jpg 1200w, /images/ieee/2022/01/Picture-4-4-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/01/Picture-5-2-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_15]" target="_self"><img src=
                "/images/ieee/2022/01/Picture-5-2-scaled.jpg" width="2000" height="976" alt="" title="Picture-5" aria-label="Picture-5" srcset=
                "/images/ieee/2022/01/Picture-5-2-200x98.jpg 200w, /images/ieee/2022/01/Picture-5-2-400x195.jpg 400w, /images/ieee/2022/01/Picture-5-2-600x293.jpg 600w, /images/ieee/2022/01/Picture-5-2-800x390.jpg 800w, /images/ieee/2022/01/Picture-5-2-1200x586.jpg 1200w, /images/ieee/2022/01/Picture-5-2-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
          </div>
          <p>
             
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `wie`,
  },

  {
    id: 49,
    title: `IEEE AIUB STUDENT BRANCH ORGANIZED THE SEMINAR TITLED, “SMART POWER GRID IN THE 21ST CENTURY”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Picture-1-5.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 25<sup>th</sup> September 2019, <strong>IEEE AIUB Student Branch</strong> in collaboration with Department of EEE, Faculty of Engineering (FE) successfully organized a
            seminar titled “<strong>Smart Power Grid in the 21<sup>st</sup> Century</strong>” at the Multipurpose Hall of <strong>American International University-Bangladesh
            (AIUB)</strong>. The seminar was inaugurated by <strong>Prof. Dr. A.B.M Siddique Hossain</strong>, <em>Dean, FE, AIUB; Advisor, IEEE AIUB Student Branch, </em>who discussed
            briefly the current power grid systems in Bangladesh, along with the necessities of implanting Smart power grids. He concluded his speech by encouraging the students to set their aims to
            smart power sectors due to its gradual increase in demand, illustrating different projects related to power, that the government has taken for the upcoming years.
          </p>
          <p>
             
          </p>
          <p>
            The keynote speaker, <strong>Prof. Akhtar Kalam,</strong> <em>Professor of Electrical Engineering Department, Victoria University</em>, <em>Australia</em>, came up on stage
            after a warm invitation from the Dean. His session by discussing the power sector of Bangladesh in the past and addressed sufferings that people used to have during those times. Later, he
            elaborately discussed the current conditions of the Power grid systems of Bangladesh and appreciated the way, the power sectors have successfully evolved in recent times compared to the
            past. In addition, <strong>Prof. Kalam</strong> identified the point that day by day the power demands in the world are increasing drastically compared to which the capacity
            isn’t getting upgraded. He also discussed the importance of Technology, Business, and Markets for precisely shaping the future, along with the three pillars of third industrial revolution
            including- Renewable energy, Storage technology, and the Smart Power Grid system. Therefore, for solving this issue, he explained “Smart Power Grid systems” in deep with multiple
            beneficial factors over “Old Power Grid systems”. Later, he elaborately discussed the principal characteristics of “Smart Power Grid systems” along with its advantageous factors
            including- the improvements on reliability, efficiency levels, safety, environment-friendly, reduce unemployment and many more. Before concluding his speech, he made a tentative visual
            representation of how the smart power grid systems will look compared to the older one including the integration of renewables, electric vehicles, demand response, as well as reliability
            and efficiency.
          </p>
          <p>
             
          </p>
          <p>
            Later, <strong>Rolf Boum</strong>, <em>International Recruitment Manager, Engineering Institute of Technology (EIT)-Australia, </em>took the stage and introduced EIT to the
            attendees, including their achievements, their past and upcoming initiatives in collaboration with well-known companies of the world. He also talked about tuition fees structure,
            available scholarships for postgraduate programs that EIT offers to their students and explained the curriculum in detail. He concluded his presentation by displaying some pictures that
            portray their highly equipped virtual labs.
          </p>
          <p>
             
          </p>
          <p>
            Lastly, to conclude the event, <strong>Dr. Md. Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch; Senior Asst. Professor, FE, AIUB, </em>took the stage. He
            started by addressing to the smart city movements and implementations in Australia and shared his experience of getting a doctorate in Australia with the attendees. Later, he thanked the
            speakers for their informative and interactive event. He finally concluded the event by handing over tokens of appreciation with the honorable Dean, which included certificates and
            crests, to the honorable speakers of the session. The event was graced by the presence of <strong>Md. Nahian Al Subri Ivan</strong>, <em>Asst. Professor,
            FE</em>, <strong>Rethwan Faiz</strong>, <em>Asst. Professor, FE</em>, <strong>Mehedi Hasan</strong>, <em>Asst. Professor, FE</em>, <strong>Dr. Md. Rifat
            Hazari</strong>, <em>Asst. Professor, FE</em>, <strong>S. M. Imrat Rahman</strong>, <em>Asst. Professor, FE</em>, <strong>Dr. Effat Jahan</strong>, <em>Asst.
            Professor, FE</em>, <strong>Md. Ashif Islam Oni</strong>, <em>Lecturer, FE</em>, <strong>Tasnuva Tasneem</strong><em>, Motivator and WIE Coordinator, IEEE AIUB Student
            Branch, Asst. Professor, FE,</em> and <strong>Kawshik Shikder</strong>, <em>Motivator, IEEE AIUB Student Branch; Advisor, IEEE Microwave Theory and Techniques Society
            (MTTS) AIUB SB Chapter; Asst. Professor, FE, AIUB.</em>
          </p>
          <div>
            <div>
              <div>
                <a href="/images/ieee/2022/01/Picture-2-4-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_16]" target="_self"><img src=
                "/images/ieee/2022/01/Picture-2-4-scaled.jpg" width="2000" height="1335" alt="" title="Picture-2" aria-label="Picture-2" srcset=
                "/images/ieee/2022/01/Picture-2-4-200x134.jpg 200w, /images/ieee/2022/01/Picture-2-4-400x267.jpg 400w, /images/ieee/2022/01/Picture-2-4-600x401.jpg 600w, /images/ieee/2022/01/Picture-2-4-800x534.jpg 800w, /images/ieee/2022/01/Picture-2-4-1200x801.jpg 1200w, /images/ieee/2022/01/Picture-2-4-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/01/Picture-3-3-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_16]" target="_self"><img src=
                "/images/ieee/2022/01/Picture-3-3-scaled.jpg" width="2000" height="1335" alt="" title="Picture-3" aria-label="Picture-3" srcset=
                "/images/ieee/2022/01/Picture-3-3-200x134.jpg 200w, /images/ieee/2022/01/Picture-3-3-400x267.jpg 400w, /images/ieee/2022/01/Picture-3-3-600x401.jpg 600w, /images/ieee/2022/01/Picture-3-3-800x534.jpg 800w, /images/ieee/2022/01/Picture-3-3-1200x801.jpg 1200w, /images/ieee/2022/01/Picture-3-3-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/01/Picture-4-3-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_16]" target="_self"><img src=
                "/images/ieee/2022/01/Picture-4-3-scaled.jpg" width="2000" height="1335" alt="" title="Picture-4" aria-label="Picture-4" srcset=
                "/images/ieee/2022/01/Picture-4-3-200x134.jpg 200w, /images/ieee/2022/01/Picture-4-3-400x267.jpg 400w, /images/ieee/2022/01/Picture-4-3-600x401.jpg 600w, /images/ieee/2022/01/Picture-4-3-800x534.jpg 800w, /images/ieee/2022/01/Picture-4-3-1200x801.jpg 1200w, /images/ieee/2022/01/Picture-4-3-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/01/Picture-5-1-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_16]" target="_self"><img src=
                "/images/ieee/2022/01/Picture-5-1-scaled.jpg" width="2000" height="1335" alt="" title="Picture-5" aria-label="Picture-5" srcset=
                "/images/ieee/2022/01/Picture-5-1-200x134.jpg 200w, /images/ieee/2022/01/Picture-5-1-400x267.jpg 400w, /images/ieee/2022/01/Picture-5-1-600x401.jpg 600w, /images/ieee/2022/01/Picture-5-1-800x534.jpg 800w, /images/ieee/2022/01/Picture-5-1-1200x801.jpg 1200w, /images/ieee/2022/01/Picture-5-1-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/01/Picture-6-1-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_16]" target="_self"><img src=
                "/images/ieee/2022/01/Picture-6-1-scaled.jpg" width="2000" height="1335" alt="" title="Picture-6" aria-label="Picture-6" srcset=
                "/images/ieee/2022/01/Picture-6-1-200x134.jpg 200w, /images/ieee/2022/01/Picture-6-1-400x267.jpg 400w, /images/ieee/2022/01/Picture-6-1-600x401.jpg 600w, /images/ieee/2022/01/Picture-6-1-800x534.jpg 800w, /images/ieee/2022/01/Picture-6-1-1200x801.jpg 1200w, /images/ieee/2022/01/Picture-6-1-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a rel="noreferrer" data-rel="iLightbox[gallery_image_16]" target="_self"><img src="" width="" height="" alt="" title="" aria-label="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `seminar`,
  },

  {
    id: 50,
    title: `IEEE AIUB Student Branch organized a seminar on “Road to Erasmus+ Scholarship”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Picture-1-4.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            <strong>On 1<sup>st</sup> August 2019, IEEE AIUB Student Branch</strong> in collaboration with <strong>Erasmus Mundus
            Association</strong> <strong>(EMA)</strong> successfully organized a seminar on <strong>“Road to Erasmus+ Scholarship”</strong> at <strong>American International
            University–Bangladesh (AIUB)</strong>. This seminar mainly focused on the application procedures of Erasmus+ scholarship for those who are looking forward to accomplish their goals to
            pursue higher education in Europe. The seminar was inaugurated by the opening remarks from <strong>Prof. Dr. ABM Siddique Hossain</strong>, <em>Dean, Faculty of Engineering
            (FE), AIUB; Advisor, IEEE AIUB Student Branch </em>who discussed about the importance of postgraduate degrees for an Engineer. He gave a brief idea about the demand of Erasmus+
            scholarships in recent times, its enormous networks, its requirements and the facilities it provides to its holders.
          </p>
          <p>
             
          </p>
          <p>
            The first speaker of the seminar <strong>Fakrul Islam Tushar, </strong><em>Post Graduate Research Associate, Carl E.Ravin Advanced Imaging Laboratories, Duke University Medical
            Center, USA; Erasmus+ graduate</em>, <em>MAIA</em> took the stage and initiated his presentation by giving an overview of Erasmus+ including its basic structure, requirements
            and selection procedures. He talked about how the success rate of students from Bangladesh getting into the program drastically increased in recent times, building more opportunities in
            the program.
          </p>
          <p>
            <img src="/images/ieee/2022/01/Picture-2-3.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/01/Picture-2-3-200x134.jpg 200w, /images/ieee/2022/01/Picture-2-3-300x200.jpg 300w, /images/ieee/2022/01/Picture-2-3-400x267.jpg 400w, /images/ieee/2022/01/Picture-2-3-600x401.jpg 600w, /images/ieee/2022/01/Picture-2-3-768x513.jpg 768w, /images/ieee/2022/01/Picture-2-3-800x534.jpg 800w, /images/ieee/2022/01/Picture-2-3.jpg 1024w"
             />
          </p>
          <p>
            Later on, <strong>Mohammad Irfan Yousuf</strong>, <em>Erasmus Scholar, STEPS</em>, took the stage and initiated his presentation by sharing his journey of achieving Erasmus+
            scholarship with the audience. In this venture he mainly discussed the importance of the CV, motivation letter and recommendation letter for the scholarship. After
            that, <strong>Zakia Khatun</strong><em> Erasmus Scholar, MAIA </em>took the stage and shared her journey to the Erasmus+ with the audience along with the problems that she
            faced during that journey. She then emphasized on different types of programs currently offered as well as proposed in future by the EMA. The last speaker, <strong>Siam Hasan
            Khan</strong>, <em>Erasmus scholar, STEPS</em> took the stage and initiated his presentation by discussing about the facilities provided by Erasmus to its scholarship holders.
            He concluded his presentation by suggesting the students to start preparing themselves for applying for the scholarship from now.
          </p>
          <p>
            <img src="/images/ieee/2022/01/Picture-3-2.jpg" alt="" width="1024" height="756" srcset=
            "/images/ieee/2022/01/Picture-3-2-200x148.jpg 200w, /images/ieee/2022/01/Picture-3-2-300x221.jpg 300w, /images/ieee/2022/01/Picture-3-2-400x295.jpg 400w, /images/ieee/2022/01/Picture-3-2-600x443.jpg 600w, /images/ieee/2022/01/Picture-3-2-768x567.jpg 768w, /images/ieee/2022/01/Picture-3-2-800x591.jpg 800w, /images/ieee/2022/01/Picture-3-2.jpg 1024w"
             />
          </p>
          <p>
            An interactive Question-Answer session took place at the end. Later, <strong>Dr. Md. Hasan Imam</strong>,<em> Counselor, IEEE AIUB Student Branch; Education Activity
            Coordinator, IEEE BDS Computer Society Chapter; Advisor, IEEE EMBS AIUB SB Chapter; Senior Asst. Professor, FE, AIUB</em>, took the stage and gave the concluding speech where he suggested
            the students that, instead of running for CGPA, they should focus on multiple research papers for enriching the CV. At the end, Crests and certificates have been provided to the speakers
            as a token of appreciation. The seminar was crowded with around 150 enthusiasts from reputed universities, IEEE Student Branches and organizations in Bangladesh. The event was graced
            by the presence of <strong>Kawshik Shikder</strong>,<em> Motivator, IEEE AIUB Student Branch; Advisor, IEEE MTTS AIUB SB Chapter; Asst. Professor, FE,
            AIUB, </em><strong>Safayet Ahmed</strong>, <em>Sr. Lecturer, FE, AIUB, </em><strong>Dr. Md. Rifat Hazari</strong><em>, Asst. Professor, FE, AIUB
            and </em><strong>Tasnuva Tasneem</strong><em>, Motivator and WIE Coordinator, IEEE AIUB Student Branch, Asst. Professor, FE, AIUB.</em>
          </p>
          <div>
            <div>
              <div>
                <a href="/images/ieee/2022/01/Picture-4-2.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_17]" target="_self"><img src=
                "/images/ieee/2022/01/Picture-4-2.jpg" width="1024" height="682" alt="" title="Picture-4" aria-label="Picture-4" srcset=
                "/images/ieee/2022/01/Picture-4-2-200x133.jpg 200w, /images/ieee/2022/01/Picture-4-2-400x266.jpg 400w, /images/ieee/2022/01/Picture-4-2-600x400.jpg 600w, /images/ieee/2022/01/Picture-4-2-800x533.jpg 800w, /images/ieee/2022/01/Picture-4-2.jpg 1024w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/01/Picture-5.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_17]" target="_self"><img src=
                "/images/ieee/2022/01/Picture-5.jpg" width="1024" height="682" alt="" title="Picture-5" aria-label="Picture-5" srcset=
                "/images/ieee/2022/01/Picture-5-200x133.jpg 200w, /images/ieee/2022/01/Picture-5-400x266.jpg 400w, /images/ieee/2022/01/Picture-5-600x400.jpg 600w, /images/ieee/2022/01/Picture-5-800x533.jpg 800w, /images/ieee/2022/01/Picture-5.jpg 1024w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/01/Picture-6.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_17]" target="_self"><img src=
                "/images/ieee/2022/01/Picture-6.jpg" width="1024" height="682" alt="" title="Picture-6" aria-label="Picture-6" srcset=
                "/images/ieee/2022/01/Picture-6-200x133.jpg 200w, /images/ieee/2022/01/Picture-6-400x266.jpg 400w, /images/ieee/2022/01/Picture-6-600x400.jpg 600w, /images/ieee/2022/01/Picture-6-800x533.jpg 800w, /images/ieee/2022/01/Picture-6.jpg 1024w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/01/Picture-7.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_17]" target="_self"><img src=
                "/images/ieee/2022/01/Picture-7.jpg" width="1024" height="682" alt="" title="Picture-7" aria-label="Picture-7" srcset=
                "/images/ieee/2022/01/Picture-7-200x133.jpg 200w, /images/ieee/2022/01/Picture-7-400x266.jpg 400w, /images/ieee/2022/01/Picture-7-600x400.jpg 600w, /images/ieee/2022/01/Picture-7-800x533.jpg 800w, /images/ieee/2022/01/Picture-7.jpg 1024w"
                 /></a>
              </div>
            </div>
          </div>
          <p>
             
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `seminar`,
  },

  {
    id: 51,
    title: `IEEE AIUB Student Branch organized a seminar on “Advantages of nuclear power for Bangladesh”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Picture-1-3.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            <strong>On 25<sup>th</sup> July 2019, IEEE AIUB Student Branch in collaboration with Department of Electrical and Electronic Engineering
            (EEE) </strong>and <strong>Department of Physics</strong> successfully organized a seminar on “<strong>Advantages of nuclear power for Bangladesh</strong>”
            at <strong>American International University-Bangladesh</strong>. The seminar mainly focused on nuclear power plants including its advantages and future in Bangladesh. The seminar
            was conducted by <strong>Prof. Dr. Afroza Shelley</strong>, <em>Doctor of Nuclear Engineering; Professor, Department of Physics, AIUB</em>, <strong>Prof. Dr. Shafiqul Islam
            Bhuiyan,</strong> <em>Former Chairman, Bangladesh Atomic Energy Commission</em>, <strong>Engr. M Ali Zulquarnain, </strong><em>Former Chairman, Bangladesh Atomic Energy
            Commission</em> and <strong>Prof. M. A. Quaiyum</strong>, <em>Former Chairman, Bangladesh Atomic Energy Commission; Professor, Department of EEE, AIUB</em>.
          </p>
          <p>
            The seminar was inaugurated by the opening remarks of <strong>Prof. Dr. Tafazzal Hossain, </strong><em>Pro Vice Chancellor, Dean in Charge, Faculty of Science and
            Technology, AIUB</em> who discussed the importance of nuclear energy and power plants in recent times. Later he encouraged the students to show interests in nuclear power sector in
            future.
          </p>
          <p>
            The first speaker of the seminar, <strong>Engr. M Ali Zulquarnain</strong>, <em>Former Chairman, Bangladesh Atomic Energy Commission</em> took the stage and shared his
            experiences as well as discussed the future of nuclear energy in the world. During his presentation, he mainly focused on modern nuclear reactors, especially its basic constructions,
            working principles and its advantages. Later, he discussed about major nuclear accidents in the past along with its causes and consequences. He concluded his presentation by sharing some
            construction photographs of <strong><em>Rooppur Nuclear Power Plant</em>.</strong>
          </p>
          <p>
            Then the second speaker for the session <strong>Prof. Dr. Shafiqul Islam Bhuiyan</strong>, <em>Former Chairman, Bangladesh Atomic Energy Commission</em>, took the stage and
            discussed about the future of nuclear power. During his presentation, he mainly focused on modern VVER or water-water energy reactors (generation III+) – its basic structures, performance
            and advantages of using this sort of reactor. He concluded his presentation by briefly discussing about the working process of a power plant including its active & passive safety
            systems, filtration systems, hydrogen removal systems and many more.
          </p>
          <p>
            <strong>Prof. M. A. Quaiyum</strong>, <em>Former Chairman, Bangladesh Atomic Energy Commission; Professor, Department of EEE, AIUB</em> later elaborately discussed about the
            advantages of nuclear power plants, its current and future demands along with the benefits that will be provided by <em>Rooppur Nuclear Power Plant</em>. He concluded his
            presentation by encouraging the students for studying nuclear energy in future by mentioning the wide range of facilities provided in this sector.
          </p>
          <p>
            Later on, the keynote speaker <strong>Prof. Dr. Afroza Shelley</strong>, <em>Doctor of Nuclear Engineering, Professor, Department of Physics, AIUB</em> discussed about the
            current status of electrical power in Bangladesh along with its demand and generation. Then, she briefly discussed about some interesting facts of nuclear energy, including nuclear fusion
            reactions, nuclear fission chain reactions and fission products. In addition, <strong>Prof. Dr. Afroza Shelley</strong> discussed about nuclear reactor fuels such as Uranium,
            Thorium – its cost, its current reserves in the world and the methods of producing it. Moreover, she gave a brief idea about spent fuels mainly its compositions and discussed the ways of
            restoring it to retain its activity. Before concluding her presentation, she gave some interesting and important information regarding <em>Rooppur Nuclear Power
            Plant</em> including its location, cost, capacity and its properties.
          </p>
          <p>
            Later, <strong>Dr. Md. Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch; Education Activity Coordinator, IEEE Bangladesh Section Computer Society Chapter; Advisor,
            IEEE Engineering in Medicine and Biology Society AIUB Chapter; Senior Assistant Professor, Department of EEE, Faculty of Engineering, AIUB, </em>gave a short closing speech. In his
            speech he thanked <strong>IEEE AIUB Student Branch</strong> and <strong>Department of Physics</strong> for organizing this seminar. The event was graced
            by <strong>Prof. Dr. A.B.M Siddique Hossain</strong>, <em>Advisor, IEEE AIUB Student Branch, Dean, Faculty of Engineering, AIUB</em>, <strong>Dr. Humayra
            Ferdous</strong><em>, Head in Charge, Department of Physics, AIUB </em>and <strong>Kawshik Shikder</strong>, <em>Motivator, IEEE AIUB Student Branch; Advisor, IEEE
            Microwave Theory and Techniques Society AIUB SB Chapter; Assistant Professor, Faculty of Engineering, AIUB.</em>
          </p>
          <div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/Picture-2-1.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_18]" target="_self"><img src=
                "/images/ieee/2020/09/Picture-2-1.jpg" width="1024" height="684" alt="" title="Picture-2" aria-label="Picture-2" srcset=
                "/images/ieee/2020/09/Picture-2-1-200x134.jpg 200w, /images/ieee/2020/09/Picture-2-1-400x267.jpg 400w, /images/ieee/2020/09/Picture-2-1-600x401.jpg 600w, /images/ieee/2020/09/Picture-2-1-800x534.jpg 800w, /images/ieee/2020/09/Picture-2-1.jpg 1024w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/Picture-3-1.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_18]" target="_self"><img src=
                "/images/ieee/2020/09/Picture-3-1.jpg" width="1024" height="362" alt="" title="Picture-3" aria-label="Picture-3" srcset=
                "/images/ieee/2020/09/Picture-3-1-200x71.jpg 200w, /images/ieee/2020/09/Picture-3-1-400x141.jpg 400w, /images/ieee/2020/09/Picture-3-1-600x212.jpg 600w, /images/ieee/2020/09/Picture-3-1-800x283.jpg 800w, /images/ieee/2020/09/Picture-3-1.jpg 1024w"
                 /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `seminar`,
  },

  {
    id: 52,
    title: `IEEE AIUB Student Branch organized the Ambassador’s Session on ‘Introduction to IEEEmadC’`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Picture-1-2.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 22nd July 2019, IEEE AIUB Student Branch organized an IEEEmadC Ideas Stage Awareness session titled “<strong>Ambassador’s Session on Introduction to IEEEmadC</strong>” at American
            International University Bangladesh, Bangladesh Section. <strong>Mashrur Sakib Choyon</strong>; <em>Event Designer</em>, IEEE AIUB SB; <em>Ambassador</em>, IEEE madC;
            conducted the session with the IEEE members of the student branch and other students. The session focused on the importance of android applications in this modern era. The participants
            were introduced to the basic rules and standards of the IEEEmadC as well as given some basic ideas on how a mobile app can be created using Android Studio. The session gave a brief idea
            to the participants on many sides of the competition which brings the participants to a platform to compete with a world of innovative thinkers on the same platform. The time periods
            & deadlines of the three stages of the competition were also mentioned during the session. Some videos were shown to the participants that created a much clearer concept of what were
            the features of the apps that became champions in previous years. Mobile App building software, ‘Android Studio’ and its features were also elaborated by showing a video to the
            participants; explaining how easily they can make a mobile app with the software.
          </p>
          <p>
            Later, a “Question & Answer” session was held where the ambassador answered all questions of the participants with a brief explanation. The participants were very motivated in joining
            the mobile app development competition as they got a much clear concept of the competition from the session.
          </p>
          <p>
            <img src="/images/ieee/2022/01/Picture-2-2.jpg" alt="" width="1024" height="590" srcset=
            "/images/ieee/2022/01/Picture-2-2-200x115.jpg 200w, /images/ieee/2022/01/Picture-2-2-300x173.jpg 300w, /images/ieee/2022/01/Picture-2-2-400x230.jpg 400w, /images/ieee/2022/01/Picture-2-2-600x346.jpg 600w, /images/ieee/2022/01/Picture-2-2-768x443.jpg 768w, /images/ieee/2022/01/Picture-2-2-800x461.jpg 800w, /images/ieee/2022/01/Picture-2-2.jpg 1024w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `seminar`,
  },

  {
    id: 53,
    title: `IEEE AIUB Student Branch organizes “General Meeting Summer 2019”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Picture-1-1.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 20<sup>th</sup> June, 2019, <strong>IEEE AIUB Student Branch</strong> successfully organized the general meeting for the year 2019 at American International
            University-Bangladesh.
          </p>
          <p>
            The meeting began by an introductory speech of <strong>Mashrur Sakib Choyon</strong>, <em>Event Designer, AIUB Student branch,</em> who introduced the recent achievements
            of IEEE AIUB Student Branch and discussed about the purpose of the general meeting.
          </p>
          <p>
            Later, <strong>Md. Tauhidur Rahman</strong>, <em>Chairperson, IEEE AIUB Student Branch; Design Coordinator, IEEE Region 10 SAC,</em> took the stage and began his speech in
            which he explained about the IEEE Regional Structures and also about activities performed by IEEE worldwide. In addition, he briefly explained about the benefits of IEEE memberships and
            the facilities that IEEE provides to its members which include scholarships and funds for humanitarian projects all over the world. During his speech, he asked the members some simple
            questions regarding his presentation and attractive kits have been provided to the members who gave the correct answers. In addition to the questions asked, he also replied to some basic
            questions asked by the general members regarding future seminars and workshops. He portrayed his mission and vision towards future IEEE events and asked for the general member’s constant
            support. He concluded his speech by discussing the upcoming events to be organized by IEEE AIUB Student Branch.
          </p>
          <p>
            <img src="/images/ieee/2022/01/Picture-2-1.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/01/Picture-2-1-200x134.jpg 200w, /images/ieee/2022/01/Picture-2-1-300x200.jpg 300w, /images/ieee/2022/01/Picture-2-1-400x267.jpg 400w, /images/ieee/2022/01/Picture-2-1-600x401.jpg 600w, /images/ieee/2022/01/Picture-2-1-768x513.jpg 768w, /images/ieee/2022/01/Picture-2-1-800x534.jpg 800w, /images/ieee/2022/01/Picture-2-1.jpg 1024w"
             />
          </p>
          <p>
            Then, <strong>Moin Uddin</strong>, <em>Former Chairperson, IEEE AIUB Student Branch</em> took the stage and started his speech by notifying the members about the importance
            of general meeting. He discussed about the usefulness of newsletter IEEE Spectrum and IEEE explore. Moreover he motivated the members for renewing IEEE memberships and also took feedbacks
            from the members regarding changes they think may encourage participants to attend more events.
          </p>
          <p>
            After termination of the previous session, <strong>Dr. Md. Hasan Imam</strong>, <strong><em>Counselor, IEEE AIUB Student Branch; Education Activity Coordinator, IEEE Bangladesh
            Section Computer Society Chapter; Advisor, IEEE Engineering in Medicine and Biology Society AIUB Chapter; Senior Assistant Professor,</em></strong> <em>Department of Electrical and
            Electronic Engineering</em>, <em>Faculty of Engineering, AIUB,</em> gave a short speech which mainly focused on how to write a good IEEE standard research paper. He further
            discussed about the achievements of the IEEE AIUB Student Branch and also encouraged members to participate in other IEEE events held in other branches.
          </p>
          <p>
            <img src="/images/ieee/2022/01/Picture-3-1.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/01/Picture-3-1-200x134.jpg 200w, /images/ieee/2022/01/Picture-3-1-300x200.jpg 300w, /images/ieee/2022/01/Picture-3-1-400x267.jpg 400w, /images/ieee/2022/01/Picture-3-1-600x401.jpg 600w, /images/ieee/2022/01/Picture-3-1-768x513.jpg 768w, /images/ieee/2022/01/Picture-3-1-800x534.jpg 800w, /images/ieee/2022/01/Picture-3-1.jpg 1024w"
             />
          </p>
          <p>
            At the end of the meeting an interactive Question-Answer session took place where the members asked questions regarding the future plans of IEEE AIUB Student Branch as well as motivations
            behind the chapters and affinity group affiliated with IEEE AIUB Student Branch. In addition, for recording the member feedbacks a survey form have been provided to all members. The event
            was graced by the presence of<strong> Kawshik Shikder</strong>, <em>Motivator of IEEE AIUB Student Branch, Assistant Professor, </em> <em>Faculty of Engineering,
            AIUB.</em>
          </p>
          <p>
            <img src="/images/ieee/2022/01/Picture-4-1.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/01/Picture-4-1-200x134.jpg 200w, /images/ieee/2022/01/Picture-4-1-300x200.jpg 300w, /images/ieee/2022/01/Picture-4-1-400x267.jpg 400w, /images/ieee/2022/01/Picture-4-1-600x401.jpg 600w, /images/ieee/2022/01/Picture-4-1-768x513.jpg 768w, /images/ieee/2022/01/Picture-4-1-800x534.jpg 800w, /images/ieee/2022/01/Picture-4-1.jpg 1024w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: ``,
  },

  {
    id: 54,
    title: `Unofficial Iftar Party of IEEE AIUB Student Branch 2019`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 22<sup>nd</sup> May, 2019 <strong>IEEE AIUB Student Branch</strong> unofficially arranged an <strong>Iftar</strong> meet and greet for all organizational
            members of the branch. The auspicious arrangement was made to celebrate the Holy month of <strong>Ramadan </strong>in May,2019. The casual meet included a get together of new
            committee members with the committee members of the previous year. The mood was further lifted by breaking the fast together through means a small Iftar arrangement.  The event was
            graced by <strong>Dr. M. Tanseer Ali, </strong><em>Senior Assistant Professor, Faculty of Engineering, AIUB , <strong>Safayat Ahmed, </strong>Senior Lecturer, Faculty
            of Engineering, AIUB , <strong>Kawshik Shikder, </strong>Motivator, IEEE AIUB SB; Assistant Professor , Faculty of Engineering, AIUB , <strong>Abir
            Ahmed, </strong>Lecturer, Faculty of Engineering, AIUB</em>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `seminar`,
  },

  {
    id: 55,
    title: `Seminar on Grid Connected Renewable Energy Sources`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Picture-2.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 11<sup>th</sup> April 2019, <strong>IEEE AIUB Student Branch </strong>in association with <strong>IEEE Industrial Application Society AIUB Student Branch
            Chapter</strong>, successfully organized and executed a seminar on <strong>Grid Connected Renewable Energy Sources </strong>at <strong>American International
            University-Bangladesh</strong>. The seminar concentrated on various aspects of renewable energy sources and how they can be connected to grid transmission and distribution. The seminar
            was conducted by <strong>Dr. MD. Rifat Hazari</strong><em>, Assistant Professor, Department of Electrical and Electronic Engineering, Faculty of Engineering, AIUB</em>, who holds a
            reputation for being highly skilled in the field.
          </p>
          <p>
            The event was inaugurated by<strong> Dr. Mohammad Hasan Imam, <em>Counselor, IEEE AIUB Student Branch; Advisor, IEEE Engineering in Medicine and Biology Society AIUB
            Chapter; </em></strong><em>Education Activity Coordinator, IEEE Bangladesh Section Computer Society Chapter; <strong>Senior Assistant Professor,</strong> Department of
            Electrical and Electronic Engineering, Faculty of Engineering, AIUB, who initiated his speech by portraying the problems of the use of fossil fuels and their combustion. He also
            included the use of solar and other renewable alternatives in energy production. He concluded the speech by describing the distribution and transmission of power through active grid
            systems.</em>
          </p>
          <p>
            <img src="/images/ieee/2022/01/Picture-2.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/01/Picture-2-200x134.jpg 200w, /images/ieee/2022/01/Picture-2-300x200.jpg 300w, /images/ieee/2022/01/Picture-2-400x267.jpg 400w, /images/ieee/2022/01/Picture-2-600x401.jpg 600w, /images/ieee/2022/01/Picture-2-768x513.jpg 768w, /images/ieee/2022/01/Picture-2-800x534.jpg 800w, /images/ieee/2022/01/Picture-2.jpg 1024w"
             />
          </p>
          <p>
            The speaker of the seminar,<strong> Dr. MD. Rifat Hazari </strong>initiated his session by illuminating the students of the basic types of renewable energy sources and their
            usefulness along with their respective efficiencies. The seminar continued by the comparison of wind and solar energy along with major statistics of their use worldwide was projected by
            the speaker. He further described the general importance and impact wind energy will bring to our country and the overall future of Bangladesh in renewable energy sources. A brief summary
            of wind turbines along with his own thesis proposal was described to the participants. The speaker concluded his segment with a question and answer session.
          </p>
          <p>
            <img src="/images/ieee/2022/01/Picture-3.jpg" alt="" width="1024" height="684" srcset=
            "/images/ieee/2022/01/Picture-3-200x134.jpg 200w, /images/ieee/2022/01/Picture-3-300x200.jpg 300w, /images/ieee/2022/01/Picture-3-400x267.jpg 400w, /images/ieee/2022/01/Picture-3-600x401.jpg 600w, /images/ieee/2022/01/Picture-3-768x513.jpg 768w, /images/ieee/2022/01/Picture-3-800x534.jpg 800w, /images/ieee/2022/01/Picture-3.jpg 1024w"
             />
          </p>
          <p>
            The concluding speech was given by, <strong>Dr. Mohammad Hasan Imam, who further talked about how informative the session was and he thanked the speaker for conducting such an event
            and also addressed the opportunities that these types of sessions provided to the students. Later he provided crest and tokens of appreciation to the honorary speaker for the event.
            Afterward, a photo session with the participants took place which marked the end of the seminar. The seminar was graced by the presence of Tasnuva Tasneem, <em>Motivator, IEEE AIUB
            Student Branch, Coordinator,</em></strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `ias`,
  },

  {
    id: 56,
    title: `Members’ Orientation 2019`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Picture-1.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 10<sup>th</sup> April 2019, <strong>IEEE AIUB Student Branch</strong> organized the <strong>Members’ Orientation 2019</strong> at <strong>American
            International University – Bangladesh</strong>. The goal of the event was to introduce and welcome the new members of the current year, followed by acknowledging the invaluable
            hard work and commitment put in by the faculty members and students who fulfilled the role of the governing body in the previous year.
          </p>
          <p>
            The grand event was inaugurated by <strong>Prof. Dr. A.B.M.</strong> <strong>Siddique Hossain</strong>, <em>Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student
            Branch, </em>who initiated his speech by talking about the industrial revolution and how IEEE played a huge part in the process. He further talked about how the world is advancing in
            a rapid manner and how crucial it is to upgrade ones knowledge. Afterwards, <strong>Prof. Dr. A.B.M.</strong> <strong>Siddique Hossain </strong>was provided with token of
            gratitude by <strong>Prof. Dr. Md. Abdur Rahman, </strong><em>Associate Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch.</em>
          </p>
          <p>
            Later on, <strong>Prof. Dr. Md. Abdur Rahman, </strong><em>Associate Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch </em>took the stage and extended
            the knowledge on IEEE and what are the key differences that make it an exception. He further urged the members to utilize the gifts and knowledge of IEEE, to take them on new heights.
            Afterwards, <strong>Prof. Dr. Md. Abdur Rahman </strong>was provided with token of gratitude by <strong>Prof. Dr. A.B.M.</strong> <strong>Siddique Hossain</strong>.
          </p>
          <p>
            For concluding the remarks session <strong>Prof. Dr. Md. Abdul Mannan, </strong><em>Director, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch </em>took the
            stage and asked the members to set priorities. He further advised the members to enrich networking along with finding ones true potential. Afterwards, <strong>Prof. Dr. Md. Abdul
            Mannan was provided with token of gratitude by Prof. Dr. Md. Abdur Rahman </strong>and <strong>Prof. Dr. A.B.M.</strong> <strong>Siddique Hossain.</strong>
          </p>
          <p>
            After the culmination of the remarks session, <strong>Mohammad Hameem Raihan, </strong><em>Former Secretary, IEEE AIUB Student Branch </em>took the stage and initiated the
            information session. He provided in depth core information about IEEE; <strong>IEEE Sight</strong>, <strong>IEEE Foundation, IEEE Collabratec</strong> and many more. He
            further addressed how IEEE AIUB Student Branch took part in many IEEE competitions and projects.
          </p>
          <p>
            For concluding the information session, <strong>Moin Uddin</strong>, <em>Former Chairperson, IEEE AIUB Student Branch</em>, took the stage and explained the importance and
            value of iee.org. He shared his experiences with his time in the Student Branch and the journey he has travelled. He terminated the session by advising the members to take part in
            different projects and activities related to IEEE and IEEE AIUB Student Branch.
          </p>
          <p>
            Shortly after, <strong>Chowdhury Akram Hossain</strong>, <em>Former Counselor, IEEE AIUB Student Branch</em>, <em>Senior Assistant Professor, Faculty of Engineering,
            AIUB </em>and <strong>Md. Saniat Rahman Zishan</strong>, <em>Advisor, IEEE AIUB Student Branch, Head of CoE Department,</em> <em>Faculty of Engineering,
            AIUB</em> took the stage and welcomed all the members and showed gratitude for being a part of IEEE AIUB Student Branch. They then announced the new Counselor and Executive Board for
            the year 2019. Token of Appreciation were also provided by the two Faculty Members to the Executives of the previous year. Afterwards a token of gratitude was provided
            to <strong>Chowdhury Akram Hossain </strong>and <strong>Md. Saniat Rahman Zishan </strong>by <strong>Dr. Md. Hasan Imam</strong>, <em>Counselor, IEEE AIUB
            Student Branch, Senior Assistant Professor, Faculty of Engineering AIUB.</em>
          </p>
          <p>
            Later on, <strong>Dr. Md. Hasan Imam</strong>, <em>Counselor, IEEE AIUB Student Branch, Senior Assistant Professor, Faculty of Engineering AIUB </em>took the stage and
            expressed euphoria for being honored with the prestigious position as the new Counselor of IEEE AIUB Student Branch. He further advised the members to seize all the opportunities provided
            by the Student branch. Afterwards, <strong>Dr. Md. Hasan Imam </strong>was provided with token of gratitude by <strong>Chowdhury Akram
            Hossain </strong>and <strong>Md. Saniat Rahman Zishan.</strong>
          </p>
          <p>
            The games and interactive session took place soon after. For this session, a raffle draw competition was conducted by <strong>Moin Uddin</strong>, <em>Former Chairperson, IEEE
            AIUB Student Branch</em>, <strong>Md. Symun Rezwan</strong>, <em>Vice-Chairperson (2017), IEEE AIUB Student Branch</em>and <strong>Raihanul Haque
            Raihan</strong>, <em>Event Coordinator (2017), IEEE AIUB Student Branch </em>respectively.
          </p>
          <p>
            Later, the cultural session took place. For this session, several musical performances were conducted by in-house performers.
          </p>
          <p>
            Finally, the closing speech of the event was delivered by <strong>Tasnuva Tasneem</strong>, <em>Motivator and WIE Coordinator, IEEE AIUB Student Branch, Assistant Professor,
            Faculty of Engineering AIUB</em> who thanked all the participants for being a part of the event and for also being a part of IEEE AIUB Student Branch.  A group photo session was
            then taken which marked the end of the event. The grand event was graced with the presence of <strong>Tawsif Ibne Alam,</strong> <em>Special Assistant, Department of EEE,
            Faculty of Engineering, AIUB </em>and <strong>Sadia Yasmin</strong>, <em>Senior Lecturer, Faculty of Engineering, AIUB.</em>
          </p>
          <div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/Picture-2-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_19]" target="_self"><img src=
                "/images/ieee/2020/09/Picture-2-scaled.jpg" width="2000" height="1335" alt="" title="Picture-2" aria-label="Picture-2" srcset=
                "/images/ieee/2020/09/Picture-2-200x134.jpg 200w, /images/ieee/2020/09/Picture-2-400x267.jpg 400w, /images/ieee/2020/09/Picture-2-600x401.jpg 600w, /images/ieee/2020/09/Picture-2-800x534.jpg 800w, /images/ieee/2020/09/Picture-2-1200x801.jpg 1200w, /images/ieee/2020/09/Picture-2-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/Picture-3-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_19]" target="_self"><img src=
                "/images/ieee/2020/09/Picture-3-scaled.jpg" width="2000" height="1335" alt="" title="Picture-3" aria-label="Picture-3" srcset=
                "/images/ieee/2020/09/Picture-3-200x134.jpg 200w, /images/ieee/2020/09/Picture-3-400x267.jpg 400w, /images/ieee/2020/09/Picture-3-600x401.jpg 600w, /images/ieee/2020/09/Picture-3-800x534.jpg 800w, /images/ieee/2020/09/Picture-3-1200x801.jpg 1200w, /images/ieee/2020/09/Picture-3-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/Picture-4.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_19]" target="_self"><img src=
                "/images/ieee/2020/09/Picture-4.jpg" width="1024" height="684" alt="" title="Picture-4" aria-label="Picture-4" srcset=
                "/images/ieee/2020/09/Picture-4-200x134.jpg 200w, /images/ieee/2020/09/Picture-4-400x267.jpg 400w, /images/ieee/2020/09/Picture-4-600x401.jpg 600w, /images/ieee/2020/09/Picture-4-800x534.jpg 800w, /images/ieee/2020/09/Picture-4.jpg 1024w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/Picture-5.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_19]" target="_self"><img src=
                "/images/ieee/2020/09/Picture-5.jpg" width="1024" height="684" alt="" title="Picture-5" aria-label="Picture-5" srcset=
                "/images/ieee/2020/09/Picture-5-200x134.jpg 200w, /images/ieee/2020/09/Picture-5-400x267.jpg 400w, /images/ieee/2020/09/Picture-5-600x401.jpg 600w, /images/ieee/2020/09/Picture-5-800x534.jpg 800w, /images/ieee/2020/09/Picture-5.jpg 1024w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2020/09/Picture-6.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_19]" target="_self"><img src=
                "/images/ieee/2020/09/Picture-6.jpg" width="1024" height="684" alt="" title="Picture-6" aria-label="Picture-6" srcset=
                "/images/ieee/2020/09/Picture-6-200x134.jpg 200w, /images/ieee/2020/09/Picture-6-400x267.jpg 400w, /images/ieee/2020/09/Picture-6-600x401.jpg 600w, /images/ieee/2020/09/Picture-6-800x534.jpg 800w, /images/ieee/2020/09/Picture-6.jpg 1024w"
                 /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: ``,
  },

  {
    id: 57,
    title: `IEEE AIUB Student Branch presents “Student Professional Awareness Venture (SPAVe 3.0)”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/NBI_7521.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On <strong>1<sup>st</sup> December 2018</strong>, the <strong>IEEE Student Professional Awareness Venture (SPAVe)</strong> was organized by <strong>IEEE AIUB
            Student Branch</strong> in association with <strong>IEEE, IEEE Bangladesh Section, IEEE Young Professionals Bangladesh,</strong> and <strong>IEEE BDS Professional
            Activity Committee </strong>at <strong>American International University-Bangladesh</strong>. <strong>IEEE Student Professional Awareness Activities
            (SPAA)</strong> are oriented to enhance the leadership, career, and professional development skills of engineering students. As a part of this endeavor, for the third time in
            Bangladesh, the <strong>IEEE SPAVe</strong> was presented to educate students on how to sustain a lifelong career in engineering. The flagship venture consisted of workshops,
            seminars and technical talks designed to build a student professionally.
          </p>
          <p>
            The venture was inaugurated by <strong>Dr. M Tanseer Ali</strong>, <em>Senior Assistant Professor, Faculty of Engineering, AIUB; Professional Activity Coordinator, IEEE
            Bangladesh Section,</em> who discussed the necessity of these professional development-oriented ventures and participation in such initiatives could enhance a students’ career. He
            further emphasized the importance of professionalism in a work environment and urged students to accept the change in order to rise up the ranks at jobs.
          </p>
          <p>
            The venture was inaugurated by <strong>Dr. M Tanseer Ali</strong>, <em>Senior Assistant Professor, Faculty of Engineering, AIUB; Professional Activity Coordinator, IEEE
            Bangladesh Section,</em> who discussed the necessity of these professional development-oriented ventures and participation in such initiatives could enhance a students’ career. He
            further emphasized the importance of professionalism in a work environment and urged students to accept the change in order to rise up the ranks at jobs.
          </p>
          <p>
            The second session titled <strong>Tips & Tricks to create a lasting impression</strong> was conducted by <strong>Narmin Tartila Banu</strong><em>, Senior Lecturer,
            North South University; Community Manager, Google Business Group</em>, she emphasized on the importance of building up a responsible social response, making a proper CV and etiquette. She
            mentioned different aspects of professional ethics which need to be maintained strictly in order to be successful in the long run. After the conclusion of the session, a token of
            appreciation was provided to <strong>Narmin Tartila Banu</strong> by <strong>Kawshik Shikder</strong>, <em>Motivator, IEEE AIUB Student Branch; Advisor, IEEE MTT-S
            AIUB Student Branch Chapter; Lecturer, Faculty of Engineering, AIUB.</em>
          </p>
          <p>
            <strong>Mr. M S Siddique,</strong> <em>CEO, Bangla Chemical,</em> conducted the third session of the venture titled <strong>Roadmap to Dream Career</strong>. He talked
            about the necessary requirements of establishing the right career goal for oneself which include both technical and professional skills. In addition, he stated the importance of making
            proper decisions in order to succeed in terms of career to which he concluded his talk. Following that, <strong>Tasnuva Tasneem</strong>, <em>Motivator, IEEE AIUB Student
            Branch; Coordinator, IEEE AIUB Student Branch WIE Affinity Group; Assistant Professor, Faculty of Engineering, AIUB,</em> provided a token of appreciation to <strong>Mr. M S
            Siddique</strong> for his time and contribution as a speaker for this bold initiative.
          </p>
          <p>
            Prior to the lunch break, the fourth session was conducted by <strong>Almeer Ahsan Asif,</strong> <em>Deputy Manager, Curriculum Development, Bangladesh Youth Leadership Center
            (BYLC), </em>which was based on <strong>Youth & Leadership for Career Development</strong>. It was a very interactive session as he provided a task for the participants
            which needed to be completed through group discussions. Based on that, he established the laws of Mover, Follower, By-Product and Leadership in managing a successful organization or
            institution.
          </p>
          <p>
            He also stated how leadership skills could enhance one’s career at a professional level. Following the conclusion of his talk, a token of appreciation was provided to him
            by <strong>Chowdhury Akram Hossain</strong>, <em>Counselor, IEEE AIUB Student Branch; Senior Assistant Professor, Faculty of Engineering, AIUB;</em> <em>Membership
            Development Coordinator, IEEE Computer Society BDS Chapter, </em>and <strong>ARM Abdullah Rocky</strong>, <em>Chairperson, IEEE Young Professionals Bangladesh; Digital
            Solutions & Service Specialist Engineer, Business System Management, Banglalink Digital Communications Ltd</em>.
          </p>
          <p>
            After the lunch break, an ice-breaking session was initiated among the participants where they communicated with each other regarding their background and corresponding work. Following
            that, the last session of the venture, <strong>Workshop on Business Case Solving Exercise</strong> was conducted by <strong>Mr.</strong> <strong>A R M Abdullah
            Rocky,</strong><em> Chairperson, IEEE Young Professionals Bangladesh; Digital Solutions & Service Specialist Engineer, Business System Management, Banglalink Digital
            Communications Ltd</em>. He emphasized the necessary skills for engineers needed to solve business cases. In this workshop, a business case was provided to different groups of
            participants where they had to forecast and come up with a potential sustainable solution to overcome the problem provided in the case. Following the conclusion of his session, a token of
            appreciation was provided to him by <strong>Chowdhury Akram Hossain</strong> and <strong>Shams Shad Islam Khan</strong>, <em>Student Activity Coordinator, IEEE
            Bangladesh Section; Mentor, IEEE AIUB Student Branch; System Engineer, Banglaphone Ltd.</em>
          </p>
          <p>
            The day-long venture was concluded with a closing speech from <strong>Chowdhury Akram Hossain</strong>, who acknowledged the presence of participants in such a bold initiative of
            IEEE. He also stated the importance of IEEE Membership with benefits and how the membership can create an impact in one’s professional career. He urged the students to take part in
            professional awareness more in the future. The IEEE SPAVe 3.0 was concluded with a group photo consisting of the speakers, guests, faculty members, organizing team and participants.
          </p>
          <p>
            The venture was graced by the presence of <strong>Akib Jobaer Rahman</strong>, <em>Vice-Chairperson (Activity), IEEE Young Professionals Bangladesh</em>, <strong>Rajesh
            Paul</strong>, <em>Treasurer, IEEE Young Professionals Bangladesh</em>, <strong>Shabab Iqbal</strong>, <em>Website Coordinator, IEEE Region 10 Student Activities
            Committee</em>, <strong>Md Abdul Al Azmain</strong>, <em>Membership Development Coordinator, IEEE Young Professionals Bangladesh</em>, <strong>Raihanul Haque
            Raihan</strong>, <em>Event Coordinator, IEEE Young Professionals Bangladesh</em> and <strong>Salman Farshi</strong><em>, Logistic Coordinator, IEEE Young Professionals
            Bangladesh. </em><strong>Dhaka Tribune</strong> and <strong>Channel Agami</strong> supported the venture as the print & online media partner and channel partner
            respectively.
          </p>
          <div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/NBI_7320-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_20]" target="_self"><img src=
                "/images/ieee/2022/02/NBI_7320-scaled.jpg" width="2000" height="1335" alt="" title="NBI_7320" aria-label="NBI_7320" srcset=
                "/images/ieee/2022/02/NBI_7320-200x134.jpg 200w, /images/ieee/2022/02/NBI_7320-400x267.jpg 400w, /images/ieee/2022/02/NBI_7320-600x401.jpg 600w, /images/ieee/2022/02/NBI_7320-800x534.jpg 800w, /images/ieee/2022/02/NBI_7320-1200x801.jpg 1200w, /images/ieee/2022/02/NBI_7320-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/NBI_7228-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_20]" target="_self"><img src=
                "/images/ieee/2022/02/NBI_7228-scaled.jpg" width="2000" height="1335" alt="" title="NBI_7228" aria-label="NBI_7228" srcset=
                "/images/ieee/2022/02/NBI_7228-200x134.jpg 200w, /images/ieee/2022/02/NBI_7228-400x267.jpg 400w, /images/ieee/2022/02/NBI_7228-600x401.jpg 600w, /images/ieee/2022/02/NBI_7228-800x534.jpg 800w, /images/ieee/2022/02/NBI_7228-1200x801.jpg 1200w, /images/ieee/2022/02/NBI_7228-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/NBI_7122-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_20]" target="_self"><img src=
                "/images/ieee/2022/02/NBI_7122-scaled.jpg" width="2000" height="1335" alt="" title="NBI_7122" aria-label="NBI_7122" srcset=
                "/images/ieee/2022/02/NBI_7122-200x134.jpg 200w, /images/ieee/2022/02/NBI_7122-400x267.jpg 400w, /images/ieee/2022/02/NBI_7122-600x401.jpg 600w, /images/ieee/2022/02/NBI_7122-800x534.jpg 800w, /images/ieee/2022/02/NBI_7122-1200x801.jpg 1200w, /images/ieee/2022/02/NBI_7122-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/NBI_6984-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_20]" target="_self"><img src=
                "/images/ieee/2022/02/NBI_6984-scaled.jpg" width="2000" height="1335" alt="" title="NBI_6984" aria-label="NBI_6984" srcset=
                "/images/ieee/2022/02/NBI_6984-200x134.jpg 200w, /images/ieee/2022/02/NBI_6984-400x267.jpg 400w, /images/ieee/2022/02/NBI_6984-600x401.jpg 600w, /images/ieee/2022/02/NBI_6984-800x534.jpg 800w, /images/ieee/2022/02/NBI_6984-1200x801.jpg 1200w, /images/ieee/2022/02/NBI_6984-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/NBI_6965-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_20]" target="_self"><img src=
                "/images/ieee/2022/02/NBI_6965-scaled.jpg" width="2000" height="1335" alt="" title="NBI_6965" aria-label="NBI_6965" srcset=
                "/images/ieee/2022/02/NBI_6965-200x134.jpg 200w, /images/ieee/2022/02/NBI_6965-400x267.jpg 400w, /images/ieee/2022/02/NBI_6965-600x401.jpg 600w, /images/ieee/2022/02/NBI_6965-800x534.jpg 800w, /images/ieee/2022/02/NBI_6965-1200x801.jpg 1200w, /images/ieee/2022/02/NBI_6965-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/NBI_6900-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_20]" target="_self"><img src=
                "/images/ieee/2022/02/NBI_6900-scaled.jpg" width="2000" height="1335" alt="" title="NBI_6900" aria-label="NBI_6900" srcset=
                "/images/ieee/2022/02/NBI_6900-200x134.jpg 200w, /images/ieee/2022/02/NBI_6900-400x267.jpg 400w, /images/ieee/2022/02/NBI_6900-600x401.jpg 600w, /images/ieee/2022/02/NBI_6900-800x534.jpg 800w, /images/ieee/2022/02/NBI_6900-1200x801.jpg 1200w, /images/ieee/2022/02/NBI_6900-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/NBI_6849-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_20]" target="_self"><img src=
                "/images/ieee/2022/02/NBI_6849-scaled.jpg" width="2000" height="1335" alt="" title="NBI_6849" aria-label="NBI_6849" srcset=
                "/images/ieee/2022/02/NBI_6849-200x134.jpg 200w, /images/ieee/2022/02/NBI_6849-400x267.jpg 400w, /images/ieee/2022/02/NBI_6849-600x401.jpg 600w, /images/ieee/2022/02/NBI_6849-800x534.jpg 800w, /images/ieee/2022/02/NBI_6849-1200x801.jpg 1200w, /images/ieee/2022/02/NBI_6849-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/NBI_6777-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_20]" target="_self"><img src=
                "/images/ieee/2022/02/NBI_6777-scaled.jpg" width="2000" height="1335" alt="" title="NBI_6777" aria-label="NBI_6777" srcset=
                "/images/ieee/2022/02/NBI_6777-200x134.jpg 200w, /images/ieee/2022/02/NBI_6777-400x267.jpg 400w, /images/ieee/2022/02/NBI_6777-600x401.jpg 600w, /images/ieee/2022/02/NBI_6777-800x534.jpg 800w, /images/ieee/2022/02/NBI_6777-1200x801.jpg 1200w, /images/ieee/2022/02/NBI_6777-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a rel="noreferrer" data-rel="iLightbox[gallery_image_20]" target="_self"><img src="" width="" height="" alt="" title="" aria-label="" /></a>
              </div>
            </div>
            <div>
              <div>
                <a rel="noreferrer" data-rel="iLightbox[gallery_image_20]" target="_self"><img src="" width="" height="" alt="" title="" aria-label="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `spave`,
  },

  {
    id: 58,
    title: `IEEE AIUB Student Branch presents a seminar on “Applications, Tools and Techniques of Data Science”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Capture-1.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 24<sup>th</sup> November 2018, <strong>IEEE AIUB Student Branch</strong> in association with <strong>IEEE Computer Society AIUB Student Branch
            Chapter</strong> successfully organized a seminar on <strong>Applications, Tools and Techniques of Data Science</strong> at <strong>American International
            University-Bangladesh</strong>. The seminar focused on various applications and techniques of data science. The seminar was conducted by <strong>Dr. Md. Saddam
            Hossain,</strong> <em>Assistant Professor, Department of Computer Science, AIUB,</em> who holds a reputation for being highly skilled in the field.
          </p>
          <p>
            The event was inaugurated by <strong>Prof. Dr. A.B.M</strong> <strong>Siddique Hossain</strong>, <em>Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student
            Branch, </em>who initiated his speech by talking about the importance of data science. He discussed how the world took a quick turn in terms of transporting information.  He
            further discussed how omnipresent this data has become and how it seems to play an important part in our day to day activities. Moreover, he accessed the work scopes for the field.
          </p>
          <p>
             
          </p>
          <p>
            The speaker of the seminar<strong> Dr. Md. Saddam Hossain,</strong> initiated his session by illuminating the students of the basics of data science and how it came to be. He
            discussed different procedures and applications, putting key emphasis on the current research prospects. He briefly assessed the responsibilities of a data scientist along with procedures
            required for conducting a successful data science project. He further stated the importance of the field and also provided the participants with hands-on working examples. Later on, he
            discussed about the vast career prospects for engineers interested in the field. He concluded the event with a question and answer session where enthusiastic participants fulfilled their
            queries.
          </p>
          <p>
             
          </p>
          <p>
            The concluding speech was given by<strong> Dr. Khandaker Tabin Hasan,</strong> <em>Associate Professor and Head of Graduate Program, Faculty of Science and Technology,
            AIUB, </em>who further talked about the work pattern and the importance of maths and statistics in this particular field. He thanked the speaker for conducting such an event and also
            addressed the opportunities that these types of sessions provided to the students. Later he provided crest and tokens of appreciation to the honorary speaker for the event. Afterward, a
            photo session with the participants took place which marked the end of the seminar. The seminar was graced by the presence of <strong>Tasnuva Tasneem, </strong><em>Motivator,
            IEEE AIUB Student Branch,</em> <em>Coordinator, IEEE AIUB Student Branch WIE Affinity Group; Assistant Professor, Faculty of Engineering, AIUB, </em><strong>Kawshik
            Shikder,</strong> <em>Motivator, IEEE AIUB Student Branch;</em> <em>Advisor, IEEE Microwave Theory and Techniques Society AIUB Student Branch Chapter</em>; <em>Lecturer,
            Faculty of Engineering, AIUB</em>.
          </p>
          <div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/NBI_6219-2-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_21]" target="_self"><img src=
                "/images/ieee/2022/02/NBI_6219-2-scaled.jpg" width="2000" height="1333" alt="" title="NBI_6219-2" aria-label="NBI_6219-2" srcset=
                "/images/ieee/2022/02/NBI_6219-2-200x133.jpg 200w, /images/ieee/2022/02/NBI_6219-2-400x267.jpg 400w, /images/ieee/2022/02/NBI_6219-2-600x400.jpg 600w, /images/ieee/2022/02/NBI_6219-2-800x533.jpg 800w, /images/ieee/2022/02/NBI_6219-2-1200x800.jpg 1200w, /images/ieee/2022/02/NBI_6219-2-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/NBI_6253-2-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_21]" target="_self"><img src=
                "/images/ieee/2022/02/NBI_6253-2-scaled.jpg" width="2000" height="1335" alt="" title="NBI_6253-2" aria-label="NBI_6253-2" srcset=
                "/images/ieee/2022/02/NBI_6253-2-200x134.jpg 200w, /images/ieee/2022/02/NBI_6253-2-400x267.jpg 400w, /images/ieee/2022/02/NBI_6253-2-600x401.jpg 600w, /images/ieee/2022/02/NBI_6253-2-800x534.jpg 800w, /images/ieee/2022/02/NBI_6253-2-1200x801.jpg 1200w, /images/ieee/2022/02/NBI_6253-2-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a href="/images/ieee/2022/02/NBI_6321-2-scaled.jpg" rel="noreferrer" data-rel="iLightbox[gallery_image_21]" target="_self"><img src=
                "/images/ieee/2022/02/NBI_6321-2-scaled.jpg" width="2000" height="1335" alt="" title="NBI_6321-2" aria-label="NBI_6321-2" srcset=
                "/images/ieee/2022/02/NBI_6321-2-200x134.jpg 200w, /images/ieee/2022/02/NBI_6321-2-400x267.jpg 400w, /images/ieee/2022/02/NBI_6321-2-600x401.jpg 600w, /images/ieee/2022/02/NBI_6321-2-800x534.jpg 800w, /images/ieee/2022/02/NBI_6321-2-1200x801.jpg 1200w, /images/ieee/2022/02/NBI_6321-2-scaled.jpg 2000w"
                 /></a>
              </div>
            </div>
            <div>
              <div>
                <a rel="noreferrer" data-rel="iLightbox[gallery_image_21]" target="_self"><img src="" width="" height="" alt="" title="" aria-label="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `seminar`,
  },

  {
    id: 59,
    title: `IEEE AIUB Student Branch organized an Industrial Tour to “Max Power Limited: 78.5 MW Gas-Based Power Plant”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Capture-2.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 17<sup>th</sup> November 2018, <strong>IEEE AIUB Student Branch</strong> in collaboration with <strong>IEEE Industry Application Society AIUB Student Branch
            Chapter</strong> & <strong>IEEE AIUB Student Branch WIE Affinity Group</strong> successfully organized an industrial tour to <strong>Max Power Limited: 78.5 MW
            Gas-Based Power Plant</strong> of <strong>MAX Group</strong> situated at Ghorashal, Polash, Narshingdi. The 78.5 MW gas-based power Plant is the first power plant
            constructed by MAX. The expedition was a delightful opportunity for the participants who were interested in the field of electrical technology and power sector.
          </p>
          <p>
            The team of students was led by <strong>Susmita Ghosh</strong>, <em>Assistant Professor, Faculty of Engineering</em>,<em> AIUB;</em> <strong>Abir
            Ahmed</strong>,<em> Lecturer, Faculty of Engineering, AIUB</em> & <strong>Shahriar Parvez Tushar</strong>, <em>Teacher Assistant, Faculty of Engineering,
            AIUB. </em>On arrival to the site, <strong>Md. Shamsuddoha</strong>, <em>Project Manager, MAX Power Limited</em> welcomed the students and <strong>Mr. Nurunnobi
            Khan</strong>, <em>General Manager, MAX Power Limited</em> gave the initial briefing to the students about the power plant. He discussed about the power plant and its
            infrastructure. <strong>Mr. Nurunnobi Khan</strong> informed that MAX has done the complete EPC of this simple cycle power plant using 4 × TM2500 Gas turbine for this project.
            Upon successful completion of the first phase, Max Power got an extension of 5 years and MAX has done EPC of the new plant using 2 × LM6000 gas turbine. He further added that Max Power
            achieved COD on 9th January 2016 and this Power plant is relentlessly supplying electricity to national power grid since then and soon going to be converted into the combined cycle.
          </p>
          <p>
            <img src="/images/ieee/2022/02/image1-scaled.jpg" alt="" width="2000" height="1500" srcset=
            "/images/ieee/2022/02/image1-200x150.jpg 200w, /images/ieee/2022/02/image1-300x225.jpg 300w, /images/ieee/2022/02/image1-400x300.jpg 400w, /images/ieee/2022/02/image1-600x450.jpg 600w, /images/ieee/2022/02/image1-768x576.jpg 768w, /images/ieee/2022/02/image1-800x600.jpg 800w, /images/ieee/2022/02/image1-1024x768.jpg 1024w, /images/ieee/2022/02/image1-1200x900.jpg 1200w, /images/ieee/2022/02/image1-1536x1152.jpg 1536w, /images/ieee/2022/02/image1-scaled.jpg 2000w"
             />
          </p>
          <p>
            Later, the students were divided into three groups and each of the students was provided with a helmet to enter the power plant. The groups were instructed by <strong>Md Mozaffer
            Hosen Akanda</strong>, <em>Deputy Manager (Mechanical), MAX Power Limited</em>; <strong>Md Ferdous Zaman</strong>, <em>Asst. Engineer (Mechanical), MAX Power
            Limited</em> and <strong>A.R.M. Golam Sarwar</strong>, <em>Engineer (Mechanical), Max Power Limited</em>. Throughout the expedition, the students were given much valuable
            information and gained good experience. The students were shown the Gas Booster Compressor as a gas pressure goes to the turbine from 150 to 600 PSI. The Air Compressor was also shown to
            the students which can compress up to 7bar. The Air Compressor contains two dryer and two compressors. The power plant has two turbines of LM6000, substation with the transformer of
            11KV-132 KV capabilities, water treatment where the demineralized water goes through Reverse Osmosis and a big control room. The eager students were delighted to have the experience to
            see all these and gather so much knowledge about them. The venture was concluded by handing out a token of appreciation to <strong>Mr. Nurunnobi
            Khan</strong> by <strong>Susmita Ghosh</strong> on behalf of <strong>IEEE AIUB Student Branch. </strong>A total of 50 <strong>students from the Department of
            EEE, AIUB who are IEEE Student Members </strong>participated in the industrial tour.
          </p>
          <p>
            <img src="/images/ieee/2022/02/image3-scaled.jpg" alt="" width="2000" height="1192" srcset=
            "/images/ieee/2022/02/image3-200x119.jpg 200w, /images/ieee/2022/02/image3-300x179.jpg 300w, /images/ieee/2022/02/image3-400x238.jpg 400w, /images/ieee/2022/02/image3-600x358.jpg 600w, /images/ieee/2022/02/image3-768x458.jpg 768w, /images/ieee/2022/02/image3-800x477.jpg 800w, /images/ieee/2022/02/image3-1024x610.jpg 1024w, /images/ieee/2022/02/image3-1200x715.jpg 1200w, /images/ieee/2022/02/image3-1536x915.jpg 1536w, /images/ieee/2022/02/image3-scaled.jpg 2000w"
             />
          </p>
          <p>
             
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `wie`,
  },

  {
    id: 60,
    title: `IEEE AIUB Student Branch organized a seminar on “Future Scopes of Firmware Engineering”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Capture-3.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 15<sup>th</sup> November 2018, <strong>IEEE AIUB Student Branch</strong> in collaboration with <strong>IEEE Computer Society AIUB Student Branch
            Chapter </strong>successfully organized a seminar on “<strong>Future Scopes of Firmware Engineering” </strong>at <strong>American International University – Bangladesh. The
            seminar mainly focused on firmware engineering and the future scope of this as well as the rise of demand in the job market for engineers in this sector. The seminar was conducted
            by Parvez Mahmood</strong>, <em>Director, ICEL Limited, </em><strong>Mohsinul Bari Sakir</strong>, <em>Embedded System Firmware Engineer, Signal Stream Inc.
            Canada </em>and <strong>Shamrat Apu Gazi</strong>, <em>Junior Firmware Developer, Signal Stream Inc. Canada.</em>
          </p>
          <p>
            <img src="/images/ieee/2022/02/NBI_6118-scaled.jpg" alt="" width="2000" height="1335" srcset=
            "/images/ieee/2022/02/NBI_6118-200x134.jpg 200w, /images/ieee/2022/02/NBI_6118-300x200.jpg 300w, /images/ieee/2022/02/NBI_6118-400x267.jpg 400w, /images/ieee/2022/02/NBI_6118-600x401.jpg 600w, /images/ieee/2022/02/NBI_6118-768x513.jpg 768w, /images/ieee/2022/02/NBI_6118-800x534.jpg 800w, /images/ieee/2022/02/NBI_6118-1024x684.jpg 1024w, /images/ieee/2022/02/NBI_6118-1200x801.jpg 1200w, /images/ieee/2022/02/NBI_6118-1536x1026.jpg 1536w, /images/ieee/2022/02/NBI_6118-scaled.jpg 2000w"
             />
          </p>
          <p>
            The seminar was inaugurated by the opening remarks from <strong>Prof. Dr. A.B.M Siddique Hossain</strong>, <em>Dean, Faculty of Engineering, AIUB</em> who discussed how the
            present world is progressing towards the Embedded System Technology. He also talked about the Firmware Engineering which has the aspects of both software and hardware engineering. He
            concluded his speech by advising the students not to be dependent on their digital devices all the time as it cause over-reliance on these devices.
          </p>
          <p>
            <img src="/images/ieee/2022/02/NBI_6090-scaled.jpg" alt="" width="2000" height="1333" srcset=
            "/images/ieee/2022/02/NBI_6090-200x133.jpg 200w, /images/ieee/2022/02/NBI_6090-300x200.jpg 300w, /images/ieee/2022/02/NBI_6090-400x267.jpg 400w, /images/ieee/2022/02/NBI_6090-600x400.jpg 600w, /images/ieee/2022/02/NBI_6090-768x512.jpg 768w, /images/ieee/2022/02/NBI_6090-800x533.jpg 800w, /images/ieee/2022/02/NBI_6090-1024x683.jpg 1024w, /images/ieee/2022/02/NBI_6090-1200x800.jpg 1200w, /images/ieee/2022/02/NBI_6090-1536x1024.jpg 1536w, /images/ieee/2022/02/NBI_6090-scaled.jpg 2000w"
             />
          </p>
          <p>
            The first speaker of the seminar, <strong>Parvez Mahmood </strong>gave firm idea about firmware engineering. He explained how much of study, patience, and effort it requires to
            be a successful firmware engineer. He proclaimed that within two to four years, there will be enough firmware engineers who would be able to produce products of industry standards. He
            further talked about <strong>Signal Stream Incorporated </strong>and its plan to export firmware engineering services from Bangladesh to foreign countries.
          </p>
          <p>
            The second speaker of the seminar, <strong>Mohsinul Bari Sakir </strong>discussed the history of engineering and the advent of Embedded System and Firmware Engineering. Later
            on, he emphasized on firmware engineering by giving some valuable information. He discussed the increase of firmware used products as it reached more than 20 billion within a period of a
            few decades. In addition, he discussed the key role played by the firmware engineering in the Air Traffic Control (ATC) system. He then explained about four types of embedded systems;
            which are: Stand alone embedded systems, Real-time embedded systems, Networked embedded systems, and Mobile embedded systems. The difference between microprocessor and microcontroller
            were also discussed in his speech.
          </p>
          <p>
            <img src="/images/ieee/2022/02/NBI_6067-scaled.jpg" alt="" width="2000" height="925" srcset=
            "/images/ieee/2022/02/NBI_6067-200x92.jpg 200w, /images/ieee/2022/02/NBI_6067-300x139.jpg 300w, /images/ieee/2022/02/NBI_6067-400x185.jpg 400w, /images/ieee/2022/02/NBI_6067-600x277.jpg 600w, /images/ieee/2022/02/NBI_6067-768x355.jpg 768w, /images/ieee/2022/02/NBI_6067-800x370.jpg 800w, /images/ieee/2022/02/NBI_6067-1024x474.jpg 1024w, /images/ieee/2022/02/NBI_6067-1200x555.jpg 1200w, /images/ieee/2022/02/NBI_6067-1536x710.jpg 1536w, /images/ieee/2022/02/NBI_6067-scaled.jpg 2000w"
             />
          </p>
          <p>
            The final speaker of the seminar, <strong>Shamrat Apu Gazi </strong>explained in depth about what firmware engineering involves. He gave a clear idea to the audience about the
            demand of firmware engineering worldwide. He discussed the massive demand of firmware engineers and their salary in job market depending on various types of work. At the end of the
            speech, a question and answer session was held where the speakers answered some of the audience’s questions.
          </p>
          <p>
            <img src="/images/ieee/2022/02/NBI_6007-scaled.jpg" alt="" width="2000" height="1335" srcset=
            "/images/ieee/2022/02/NBI_6007-200x134.jpg 200w, /images/ieee/2022/02/NBI_6007-300x200.jpg 300w, /images/ieee/2022/02/NBI_6007-400x267.jpg 400w, /images/ieee/2022/02/NBI_6007-600x401.jpg 600w, /images/ieee/2022/02/NBI_6007-768x513.jpg 768w, /images/ieee/2022/02/NBI_6007-800x534.jpg 800w, /images/ieee/2022/02/NBI_6007-1024x684.jpg 1024w, /images/ieee/2022/02/NBI_6007-1200x801.jpg 1200w, /images/ieee/2022/02/NBI_6007-1536x1025.jpg 1536w, /images/ieee/2022/02/NBI_6007-scaled.jpg 2000w"
             />
          </p>
          <p>
            The closing speech of the seminar was given by <strong>Nafiz Ahmed Chisty</strong>, <em>Associate Professor & Head of Undergraduate Program, Department of EEE, Faculty of
            Engineering, AIUB. </em>He discussed the importance of firmware engineering as well as the potential opportunities for firmware engineers in Bangladesh to go abroad with a better
            salary in the job market. He encouraged the students of AIUB to think about this engineering sector as they could find themselves in a better carrier in firmware engineering with the
            collaboration of AIUB. He thanked <strong>IEEE AIUB Student Branch for organizing a seminar on an important topic such as firmware</strong>. He encouraged the students of AIUB to
            join IEEE and get involved in more professional engineering activities in order to shape up their career in a perfect way. In the end, as a token of appreciation, crests &
            certificates were presented to the speakers. The successful event was graced by the presence of <strong>Dr. M. Tanseer Ali</strong>, <em>Professional Activity Coordinator, IEEE
            Bangladesh Section; Senior Assistant Professor, Faculty of Engineering, AIUB</em> along with <strong>Kawshik Shikder</strong>, <em>Motivator, IEEE AIUB Student Branch;
            Lecturer, Faculty of Engineering, AIUB.</em>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `cs`,
  },

  {
    id: 61,
    title: `IEEE AIUB Student Branch WIE Affinity Group organized a workshop on “Graphics Design for Women in Engineering”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/Capture-4.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 15<sup>th</sup> October 2018, <strong>IEEE AIUB Student Branch WIE Affinity Group </strong>in association with <strong>IEEE AIUB Student Branch</strong>successfully
            organized a workshop on <strong>Graphics Design for Women in Engineering</strong> at <strong>American International University – Bangladesh</strong>. The workshop
            encouraged women to learn and gather more skill in graphic designing. The workshop mainly focused on some of the basic designs and uses of different types of tools in <strong>Adobe
            Photoshop CC</strong>. The workshop was carried out by <strong>Ms. Rani Ellen V. Ramos, </strong><em>Animation lecturer, Animation Program – MMC Department, AIUB.</em>
          </p>
          <p>
            <img src="/images/ieee/2022/02/MG_8108-scaled.jpg" alt="" width="2000" height="1333" srcset=
            "/images/ieee/2022/02/MG_8108-200x133.jpg 200w, /images/ieee/2022/02/MG_8108-300x200.jpg 300w, /images/ieee/2022/02/MG_8108-400x267.jpg 400w, /images/ieee/2022/02/MG_8108-600x400.jpg 600w, /images/ieee/2022/02/MG_8108-768x512.jpg 768w, /images/ieee/2022/02/MG_8108-800x533.jpg 800w, /images/ieee/2022/02/MG_8108-1024x683.jpg 1024w, /images/ieee/2022/02/MG_8108-1200x800.jpg 1200w, /images/ieee/2022/02/MG_8108-1536x1024.jpg 1536w, /images/ieee/2022/02/MG_8108-scaled.jpg 2000w"
             />
          </p>
          <p>
            The inauguration speech for the workshop was delivered by <strong>Prof. Dr. A.B.M</strong> <strong>Siddique Hossain</strong>, <em>Dean, Faculty of Engineering, AIUB;
            Advisor, IEEE AIUB Student Branch, </em>who was pleased to see that IEEE AIUB Student Branch WIE Affinity Group organized a very effective workshop for the women studying in
            engineering. He also discussed how effective this workshop will be for the participants who intend to build a career in the IT industry of the country. In addition to this, he discussed
            the history and progress of modern-day graphics designing in Bangladesh as well as elaborated on how IEEE always promotes technology and women empowerment in the field of engineering.
            Lastly, he discussed the <strong>IEEE</strong> <strong>WIE Affinity Group</strong> and its inception in Bangladesh.
          </p>
          <p>
            <img src="/images/ieee/2022/02/IMG_8169-scaled.jpg" alt="" width="2000" height="1333" srcset=
            "/images/ieee/2022/02/IMG_8169-200x133.jpg 200w, /images/ieee/2022/02/IMG_8169-300x200.jpg 300w, /images/ieee/2022/02/IMG_8169-400x267.jpg 400w, /images/ieee/2022/02/IMG_8169-600x400.jpg 600w, /images/ieee/2022/02/IMG_8169-768x512.jpg 768w, /images/ieee/2022/02/IMG_8169-800x533.jpg 800w, /images/ieee/2022/02/IMG_8169-1024x683.jpg 1024w, /images/ieee/2022/02/IMG_8169-1200x800.jpg 1200w, /images/ieee/2022/02/IMG_8169-1536x1024.jpg 1536w, /images/ieee/2022/02/IMG_8169-scaled.jpg 2000w"
             />
          </p>
          <p>
            The instructor of the workshop,<strong> Ms. Rani Ellen V. Ramos</strong>, started by introducing herself and the <strong>Animation Program, MMC Department, AIUB</strong>. She
            explained how the designing industry as of today is still a male-dominated field and how women should make their impact in this field. The tasks in the workshop were carried out in two
            segments. In the first segment of the workshop, the instructor showed some magazine cover and elaborated on various type of design elements. She helped the participants understand how
            they should design a magazine cover in Adobe Photoshop CC.
          </p>
          <p>
            <strong><img src="/images/ieee/2022/02/IMG_8164-scaled.jpg" alt="" width="2000" height="1333" srcset=
            "/images/ieee/2022/02/IMG_8164-200x133.jpg 200w, /images/ieee/2022/02/IMG_8164-300x200.jpg 300w, /images/ieee/2022/02/IMG_8164-400x267.jpg 400w, /images/ieee/2022/02/IMG_8164-600x400.jpg 600w, /images/ieee/2022/02/IMG_8164-768x512.jpg 768w, /images/ieee/2022/02/IMG_8164-800x533.jpg 800w, /images/ieee/2022/02/IMG_8164-1024x683.jpg 1024w, /images/ieee/2022/02/IMG_8164-1200x800.jpg 1200w, /images/ieee/2022/02/IMG_8164-1536x1024.jpg 1536w, /images/ieee/2022/02/IMG_8164-scaled.jpg 2000w"
             /></strong>
          </p>
          <p>
            On the second segment of the workshop, she talked about various types of tools in Adobe Photoshop CC and also discussed the basics of designing (contrast, color, layer etc.). She further
            elaborated about the color combinations. Afterward, she instructed the participants step by step to create a magazine cover with their own creativity. At the end of the
            session, <strong>Afra Nawar</strong> from the <em>Department of CSE, AIUB</em>, was announced as the winner for designing the best magazine cover. Later, the prize was
            handed to the winner by <strong>Prof.</strong> <strong>Dr. Md. Abdul Mannan, </strong><em>Director, Faculty of Engineering, AIUB, </em><strong>Ms. Rani Ellen V.
            Ramos</strong> and <strong>Tasnuva Tasneem</strong>, <em>Motivator, IEEE AIUB Student Branch, Coordinator, IEEE AIUB Student Branch WIE Affinity Group, Assistant Professor,
            Faculty of Engineering, AIUB</em>.
          </p>
          <p>
            In the closing session, <strong>Prof.</strong> <strong>Dr. Md. Abdul Mannan </strong>explained the importance and demand of graphic designing in modern times. He also
            talked about the importance of skills on graphic designing for every engineer. He finished his speech by thanking IEEE AIUB Student Branch along with IEEE AIUB Student Branch WIE Affinity
            Group for organizing such a workshop. Following that, <strong>Nelson Pujante Udaundo</strong>, <em>Animation Lecturer & Head of Animation Program, Department of MMC,
            AIUB</em>, gave the closing speech. He stated that, even though the animation program is only taught to the students from the department of MMC at AIUB, students from all department and
            field should have the basic knowledge on designing and art to enhance their vision and creativity. In the end, crest and certificate were presented to <strong>Ms. Rani Ellen V.
            Ramos </strong>by<strong> Prof.</strong> <strong>Dr. Md. Abdul Mannan</strong>. A group photo with the participants was taken afterward which marked the end of the
            workshop.
          </p>
          <p>
            <img src="/images/ieee/2022/02/Capture-4.jpg" alt="" width="763" height="508" srcset=
            "/images/ieee/2022/02/Capture-4-200x133.jpg 200w, /images/ieee/2022/02/Capture-4-300x200.jpg 300w, /images/ieee/2022/02/Capture-4-400x266.jpg 400w, /images/ieee/2022/02/Capture-4-600x399.jpg 600w, /images/ieee/2022/02/Capture-4.jpg 763w"
             />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `wie`,
  },

  {
    id: 62,
    title: `IEEE AIUB Student Branch organizes “Seminar For Engineers on Building Your Career Through Leadership Development”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/PICTURE03-2.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            <img src="/images/ieee/2021/03/PICTURE01-2.jpg" alt="" width="1024" height="683" srcset=
            "/images/ieee/2021/03/PICTURE01-2-200x133.jpg 200w, /images/ieee/2021/03/PICTURE01-2-300x200.jpg 300w, /images/ieee/2021/03/PICTURE01-2-400x267.jpg 400w, /images/ieee/2021/03/PICTURE01-2-600x400.jpg 600w, /images/ieee/2021/03/PICTURE01-2-768x512.jpg 768w, /images/ieee/2021/03/PICTURE01-2-800x534.jpg 800w, /images/ieee/2021/03/PICTURE01-2.jpg 1024w"
             /> <img src="/images/ieee/2021/03/PICTURE02-2.jpg" alt="" />
          </p>
          <p>
            On 17th February 2016, IEEE AIUB Student Branch in association with Teach for Bangladesh, organized a seminar titled “Building your Career through Leadership Development” at Room # 266,
            Faculty of Engineering Building, American International University-Bangladesh (AIUB). The event was hosted in an attempt to engage and enlighten the +60 participants, regarding the
            significance of valuable non-technical leadership and managerial skills, that can aid them in their professional careers.
          </p>
          <p>
            <img src="/images/ieee/2021/03/PICTURE03-2.jpg" alt="" width="1024" height="957" srcset=
            "/images/ieee/2021/03/PICTURE03-2-200x187.jpg 200w, /images/ieee/2021/03/PICTURE03-2-300x280.jpg 300w, /images/ieee/2021/03/PICTURE03-2-400x374.jpg 400w, /images/ieee/2021/03/PICTURE03-2-600x561.jpg 600w, /images/ieee/2021/03/PICTURE03-2-768x718.jpg 768w, /images/ieee/2021/03/PICTURE03-2-800x748.jpg 800w, /images/ieee/2021/03/PICTURE03-2.jpg 1024w"
             />
          </p>
          <p>
            <strong>Prof. Dr. A. B. M. Siddique Hossain</strong>, <em>Dean, Faculty of Engineering, AIUB & Advisor of IEEE AIUB Student Branch</em> inaugurated the event with the
            opening speech; motivating the participants and informing them of the importance of leadership in any field of work. After this, <strong>Mr. Osman Dhali
            Tusher</strong>, <em>Fellowship Recruitment & Selection Associate, Teach for Bangladesh</em> began the seminar. Mr. Tusher opened up a dialogue with the participants,
            raising important questions such as what fundamental traits attributed to the making of a leader. He further built upon this with thought-provoking videos and hypothetical scenarios,
            allowing the audience to grasp the true meaning of the word leadership with regards to empathy, respect and being a visionary.  Following him, was <strong>Mr. Arnob Kumar
            Saha</strong>, <em>Fellowship Recruitment & Selection Associate, Teach for Bangladesh, </em>who carried the seminar forward through an elaborate media presentation. Mr. Saha
            focussed on the technical aspects of leadership, tying the word to the engineering profession and one’s transformation to a professional life. Explaining the differences between a
            “manager” and a “leader”, Mr. Saha stressed on the different technical and non-technical skills that separated the two. Alongside a plethora of interactive Q/A sessions, open discussions
            and a case study, the program was further accompanied by a brief overview of the organization, <strong>Teach for Bangladesh</strong> and their prestigious Fellowship Program.
          </p>
          <p>
            The event concluded with the instructors being accredited with tokens of appreciation for their time and participation at the event, by <strong>Mr. Rinku
            Basak</strong>, <em>Head of EEE Graduate Program & Assistant Professor, Faculty of Engineering, AIUB</em>. Furthermore, the attending faculty members and the top 5 most active
            participants were presented bags of goodies and gifts, by the generous guests from Teach for Bangladesh. Following this, the floor was open to a collaborative networking session. The
            event was also graced by the presence of <strong>Mr. Shahriar Hasan</strong>, <em>Lecturer, Faculty of Engineering, AIUB & Motivator of IEEE AIUB
            Student </em>Branch, <strong>Ms. Shahreen Hassan</strong>, <em>Lecturer, Faculty of Engineering, AIUB </em>and <strong>Mr. Kazi Ahmed Asif
            Fuad</strong>, <em>Lecturer, Faculty of Engineering; Advisor of IEEE IA-S AIUB SB Chapter.</em>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `seminar`,
  },

  {
    id: 63,
    title: `IEEE AIUB Student Branch organizes “Industrial Tour 01 – Ghorashal Power Station”`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/PICTURE02-1.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><p>
  <img src="/images/ieee/2021/03/PICTURE01-1.jpg" alt="" width="960" height="638" srcset=
  "/images/ieee/2021/03/PICTURE01-1-200x133.jpg 200w, /images/ieee/2021/03/PICTURE01-1-300x199.jpg 300w, /images/ieee/2021/03/PICTURE01-1-400x266.jpg 400w, /images/ieee/2021/03/PICTURE01-1-600x399.jpg 600w, /images/ieee/2021/03/PICTURE01-1-768x510.jpg 768w, /images/ieee/2021/03/PICTURE01-1-800x532.jpg 800w, /images/ieee/2021/03/PICTURE01-1.jpg 960w"
   /> <img src="/images/ieee/2021/03/PICTURE02-1.jpg" alt="" width="960" height="640" srcset=
  "/images/ieee/2021/03/PICTURE02-1-200x133.jpg 200w, /images/ieee/2021/03/PICTURE02-1-300x200.jpg 300w, /images/ieee/2021/03/PICTURE02-1-400x267.jpg 400w, /images/ieee/2021/03/PICTURE02-1-600x400.jpg 600w, /images/ieee/2021/03/PICTURE02-1-768x512.jpg 768w, /images/ieee/2021/03/PICTURE02-1-800x533.jpg 800w, /images/ieee/2021/03/PICTURE02-1.jpg 960w"
   /> <img src="/images/ieee/2021/03/PICTURE03-1.jpg" alt="" width="960" height="640" srcset=
  "/images/ieee/2021/03/PICTURE03-1-200x133.jpg 200w, /images/ieee/2021/03/PICTURE03-1-300x200.jpg 300w, /images/ieee/2021/03/PICTURE03-1-400x267.jpg 400w, /images/ieee/2021/03/PICTURE03-1-600x400.jpg 600w, /images/ieee/2021/03/PICTURE03-1-768x512.jpg 768w, /images/ieee/2021/03/PICTURE03-1-800x533.jpg 800w, /images/ieee/2021/03/PICTURE03-1.jpg 960w"
   />
</p>
<p>
  On 13th February, 2016, <strong>IEEE AIUB Student Branch</strong> successfully organized its first industrial tour of the year to Ghorashal Thermal Power Station, Narshingdi. The
  power plant is a state of the art with the total capacity of 1000 MW, which is generated by 6 different generator units. It was a one-day tour and the participating students got the chance to
  directly observe and study the generation, transmission and distribution methodology and process of the power plant.
</p>
<p>
  <strong>Mr. Masud Rana</strong>, <em>Deputy Manager, Bangladesh Power Development Board, </em><strong>Mr. Kshirod Mohan Bose, </strong><em>Assistant Chief Engineer, Ghorashal
  Power Station </em>and <strong>Mr. Amirul Momenin, </strong><em>Executive Engineer, Bangladesh Power Development Board </em>enthusiastically guided the students through myriad
  processes regarding the power plant. Students got practical demonstration on several power plant equipments namely Turbine, Generator, Governor, Cooling System, Boiler, Economiser, Superheater,
  Re-Heater, Sub-Station, Protection Devices, Switchgear Facilities.
</p>
<p>
  <strong>Dr. Md. Tanvir Hasan</strong>, <em>Assistant Professor, Dept. of EEE, AIUB</em> presented the instructors with a token of appreciation from AIUB to honor their wholehearted
  effort<em>. </em>The tour was blessed with the presence of <strong>Mr. Shameem Ahmad, </strong><em>Lecturer, Dept. of EEE, AIUB, </em><strong>Mr. Mahmoodul
  Islam, </strong><em>Assistant Professor, Dept. of EEE, AIUB </em>and <strong>Mr. Shuvra Saha, </strong><em>Lecturer, Dept. of EEE, AIUB.</em>
</p>
<p>
  <img src="/images/ieee/2021/03/PICTURE04.jpg" alt="" width="960" height="712" srcset=
  "/images/ieee/2021/03/PICTURE04-200x148.jpg 200w, /images/ieee/2021/03/PICTURE04-300x223.jpg 300w, /images/ieee/2021/03/PICTURE04-400x297.jpg 400w, /images/ieee/2021/03/PICTURE04-600x445.jpg 600w, /images/ieee/2021/03/PICTURE04-768x570.jpg 768w, /images/ieee/2021/03/PICTURE04-800x593.jpg 800w, /images/ieee/2021/03/PICTURE04.jpg 960w"
   />
</p>`,
    },
    category: `Industrial Tour`,
  },

  {
    id: 64,
    title: `Modern Control Centers and Prevention of Large-Scale Blackouts of the National Grid`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/PICTURE03.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            <span><img width="300" height="200" title="PICTURE01" src="/images/ieee/2020/09/PICTURE01.jpg" srcset=
            "/images/ieee/2020/09/PICTURE01-200x133.jpg 200w, /images/ieee/2020/09/PICTURE01.jpg 300w" sizes=
            "(max-width: 992px) 100vw, 300px" /></span>
          </p>
          <p>
            On the 3rd of February, 2016; IEEE AIUB student branch organized a seminar on “Modern Control Centers and Prevention of Large-Scale Blackouts of the National Grid” at room 266, Faculty of
            Engineering building, AIUB. The topic was of huge importance for electrical engineers in Bangladesh, as the electric grid is extremely susceptible to such problems.<br />
            The seminar started with opening remarks from Prof. Dr. A.B.M. Siddique Hossain, Honorable Dean, Faculty of Engineering, AIUB. Following this Dr. Enamul Haq, Senior Advisor, California
            ISO, Folsom, California, USA; Senior Member, IEEE Power and Energy Society (PES) & Chair, IEEE Computational Intelligence Magazine (CIM) Task Force; took the stage. He started by
            talking about the North American electric grid and the different agencies overlooking different aspects of the grid. He then went onto describe the consequences of losing a substation,
            the causes of blackouts and a case of a worldwide blackout. He also shared his insights on the obstacles for renewable energy.<br />
            <span><img width="300" height="225" title="PICTURE02" src="/images/ieee/2020/09/PICTURE02.jpg" srcset=
            "/images/ieee/2020/09/PICTURE02-200x150.jpg 200w, /images/ieee/2020/09/PICTURE02.jpg 300w" sizes=
            "(max-width: 992px) 100vw, 300px" /></span>
          </p>
          <p>
            Later, Mr. Farhadur Arefin, Assistant Professor, Faculty of Engineering, AIUB & Counselor, IEEE AIUB student branch and Dr. Md. Abdul Mannan, Head, Undergraduate Program &
            Associate Professor, AIUB; each delivered inspiring speeches. Afterwards, the speaker was handed a token of appreciation by Prof. Dr. A.B.M. Siddique Hossain, Dr. Md. Abdul Mannan and Mr.
            Farhadur Arefin, on behalf of IEEE AIUB student branch. Mr. Chowdhury Akram Hossain, Assistant Professor & Special Assistant (OSA), Faculty of Engineering, AIUB & Mentor, IEEE
            AIUB student branch, Mr. Shameem Ahmed, Lecturer, Faculty of Engineering, Dr. Abu Abdullah, Assistant Professor, Faculty of Engineering, AIUB, Mr. Mortoja Salequin, Lecturer and
            Mr.Khursiduzzman, Assistant Professor, Faculty of Engineering, AIUB; blessed the event with their presence.
          </p>
          <p>
            <span><img width="300" height="200" title="PICTURE03" src="/images/ieee/2020/09/PICTURE03-1.jpg" srcset=
            "/images/ieee/2020/09/PICTURE03-1-200x133.jpg 200w, /images/ieee/2020/09/PICTURE03-1.jpg 300w" sizes=
            "(max-width: 992px) 100vw, 300px" /></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `workshop-series`,
  },

  {
    id: 65,
    title: `IEEE AIUB Student Branch hosts “IEEE Members’ Orientation 2016`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            On 4<sup>th</sup> February 2016; IEEE AIUB student branch hosted the members’ orientation at the Auditorium, Faculty of Business Administration building, AIUB. The orientation is an
            annual event, organized to give the members a brief idea about IEEE, IEEE AIUB student branch and the prospective event schedule for the year.
          </p>
          <p>
            The event started with a series of videos about IEEE AIUB student branch. Following this <strong>Mr.</strong> <strong>Anindo Saha, </strong><em>Vice Chairperson, IEEE AIUB
            student branch, </em>delivered an extremely detailed presentation on IEEE and the benefits of being a member of IEEE. Then <strong>Prof. Dr. A.B.M. Siddique
            Hossain</strong>, <em>Honorable Dean, Faculty of Engineering, AIUB; </em>took the stage to deliver an inspirational speech towards the student branch members. The Vice
            Chairperson then presented a presentation on IEEE AIUB student branch for the year 2015, the strategic plan of IEEE and the activity plan for the year 2016. Following which short video
            clips were played highlighting the achievements of IEEE AIUB student branch for the year 2015.
          </p>
          <p>
            Afterwards, <strong>Mr. Farhadur Arifin, </strong><em>Assistant Professor, Faculty of Engineering, AIUB & Former Counselor, IEEE AIUB student branch; </em>marked the
            end of his tenure as Counselor of IEEE AIUB student branch with a speech. Following this <strong>Dr. Tanseer Ali, </strong><em>Assistant Professor, Faculty of Engineering, AIUB
            & Counselor, IEEE AIUB student branch; </em>was introduced as the new Counselor of IEEE AIUB student branch. He delivered a speech highlighting the plans for his tenure.
          </p>
          <p>
            Later <strong>Prof. Dr. A.B.M. Siddique Hossain</strong><em>, </em>awarded <strong>Mr. Farhadur Arefin, </strong><em>Assistant Professor, Faculty of Engineering, AIUB
            & Former Counselor, IEEE AIUB student branch,</em><strong> Mr. Chowdhury Akram Hossain, </strong><em>Assistant Professor & Special Assistant (OSA), Faculty of
            Engineering, AIUB & Mentor, IEEE AIUB student branch </em>and<em> </em><strong>Mr. Saniat Rahman Zishan, </strong><em>Assistant Professor & Special Assistant (OSA),
            Faculty of Engineering, AIUB & Advisor, IEEE AIUB student branch, </em><strong>Mr. Shahriar Hasan, </strong><em>Lecturer, Faculty of Engineering, AIUB & Motivator, IEEE
            AIUB student branch </em>and <strong>Ms. Tasnuva Tasneem, </strong><em>Lecturer, Faculty of Engineering, AIUB & WIE Coordinator, IEEE AIUB student
            branch; </em>certificates for guiding the student branch through the year of 2015. Afterwards, the award winning poster of the IEEE Region 10 congress 2015 was shown to the
            audience. <strong>Mr. Chowdhury Akram Hossain </strong>and<strong> Mr. Saniat Rahman Zishan</strong> then presented the executive board of 2015, with a personalized
            award to each member.
          </p>
          <p>
            A interactive talk session with the <strong>Mr. Mahmudul Haque Jishan</strong>,<em> Chair, IEEE IA-S AIUB student branch chapter</em>, <strong>Mr. Nasim Al
            Islam, </strong><em>Chair,<strong> </strong>IEEE MTT-S AIUB student branch chapter</em> and <strong>Ms.Farhana Choudhury, </strong><em>Representative, IEEE WIE
            AIUB affinity group; </em>took place. This was followed by a speeches from past alumni of AIUB and executive board members of IEEE AIUB student branch which included <strong>Mr.
            Muhammad Faheem Faruq, </strong><em>Project and Design Engineer, M&E consultants, </em><strong>Mr. Azizul Haque Faysal, </strong><em>Support Engineer, technical
            division, Link 3 technology Ltd, </em><strong>Mr. Ahmed Shaaek, </strong><em>Scheduling and Office Engineer and Engineer, Infrastructure Services, Mott
            MacDonald </em>and<strong> Mr. Shaon M. Shahjalal, </strong><em>Assistant System Admin, Apple Communication limited. </em>Following this <strong>Mr. Chowdhury
            Akram Hossain </strong>and<strong> Mr. Saniat Rahman Zishan, </strong>each gave speeches to inspire those in the audience. Following this, they announced the executive
            board for the year 2016.
          </p>
          <p>
            The event had cultural shows, musical performances, an interactive quiz and a raffle draw, which took place at different intervals of the orientation. Over 230 IEEE AIUB student branch
            members were seated in the audience.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `Orientation`,
  },

  {
    id: 66,
    title: `Modern Control Centers and Prevention of Large-Scale Blackouts of the National Grid`,
    body: {
      __html: `<figure>
            <img
              className="w-full rounded-lg"
              src="/images/event/PICTURE03.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure><div>
  <div>
    <div>
      <div>
        <div>
          <p>
            <img src="/images/ieee/2021/03/PICTURE01.jpg" alt="" width="300" height="200" srcset=
            "/images/ieee/2021/03/PICTURE01-200x133.jpg 200w, /images/ieee/2021/03/PICTURE01.jpg 300w" sizes=
            "(max-width: 300px) 100vw, 300px" />
          </p>
          <p>
            On the 3<sup>rd</sup> of February, 2016; IEEE AIUB student branch organized a seminar on “Modern Control Centers and Prevention of Large-Scale Blackouts of the National Grid” at room
            266, Faculty of Engineering building, AIUB. The topic was of huge importance for electrical engineers in Bangladesh, as the electric grid is extremely susceptible to such problems.
          </p>
          <p>
            The seminar started with opening remarks from <strong>Prof. Dr. A.B.M. Siddique Hossain</strong>, <em>Honorable Dean, Faculty of Engineering, AIUB.</em> Following
            this <strong>Dr. Enamul Haq, </strong><em>Senior Advisor, California ISO, Folsom, California, USA; Senior Member, IEEE Power and Energy Society (PES) & Chair, IEEE
            Computational Intelligence Magazine (CIM) Task Force;</em> took the stage. He started by talking about the North American electric grid and the different agencies overlooking
            different aspects of the grid. He then went onto describe the consequences of losing a substation, the causes of blackouts and a case of a worldwide blackout. He also shared his insights
            on the obstacles for renewable energy.
          </p>
          <p>
            <img src="/images/ieee/2021/03/PICTURE02.jpg" alt="" width="300" height="225" srcset=
            "/images/ieee/2021/03/PICTURE02-200x150.jpg 200w, /images/ieee/2021/03/PICTURE02.jpg 300w" sizes=
            "(max-width: 300px) 100vw, 300px" />
          </p>
          <p>
            Later, <strong>Mr. Farhadur Arefin, </strong><em>Assistant Professor, Faculty of Engineering, AIUB & Counselor, IEEE AIUB student branch</em> and <strong>Dr. Md.
            Abdul Mannan</strong>, <em>Head, Undergraduate Program & Associate Professor, AIUB; </em>each delivered inspiring speeches.  Afterwards, the speaker was handed a token
            of appreciation by <strong>Prof. Dr. A.B.M. Siddique Hossain, Dr. Md. Abdul Mannan </strong>and <strong>Mr. Farhadur Arefin, </strong>on behalf of IEEE AIUB
            student branch. <strong>Mr. Chowdhury Akram Hossain, </strong><em>Assistant Professor & Special Assistant (OSA), Faculty of Engineering, AIUB & Mentor, IEEE AIUB student
            branch, </em><strong>Mr. Shameem Ahmed</strong>, <em>Lecturer, Faculty of Engineering, </em><strong>Dr. Abu Abdullah, </strong><em>Assistant Professor, Faculty of
            Engineering, AIUB, </em><strong>Mr. Mortoja Salequin, </strong><em>Lecturer </em>and <strong>Mr.Khursiduzzman, </strong><em>Assistant Professor, Faculty of
            Engineering, AIUB; </em>blessed the event with their presence.
          </p>
          <p>
            <img src="/images/ieee/2021/03/PICTURE03.jpg" alt="" width="300" height="200" srcset=
            "/images/ieee/2021/03/PICTURE03-200x133.jpg 200w, /images/ieee/2021/03/PICTURE03.jpg 300w" sizes=
            "(max-width: 300px) 100vw, 300px" />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
    category: `PES`,
  },
  {
    id: 67,
    title: `Seminar on “Women in Engineering”`,
    body: {
      __html: `<p style="margin-left:2px; margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><span style="font-family:&quot;Times New Roman&quot;,serif">On&nbsp;<strong>Wednesday, February 22<sup>nd</sup>, 2023,</strong>&nbsp;the<strong>&nbsp;IEEE AIUB Student Branch WIE Affinity Group</strong>&nbsp;successfully organized a seminar session titled&nbsp;<strong>&ldquo;Women in Engineering&rdquo;</strong>. The event was held to gain insightful information about the successes and experiences of successful female engineers. The seminar was intended to encourage women to pursue engineering careers by providing insights into the experiences and accomplishments of a successful female engineer.</span></span></span></span></p>

<p style="margin-left:2px; margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><span style="font-family:&quot;Times New Roman&quot;,serif">The seminar was inaugurated by Advisor of IEEE AIUB Student Branch<em>,</em><strong>Prof. Dr. Mohammed Abdul Mannan,</strong>&nbsp;<em>Associate Dean, Faculty of Engineering, AIUB.&nbsp;</em>He spoke about the female students in engineering fields while also briefly narrating the distinguished speakers&rsquo; achievements. Furthermore, he discussed the factors that discourage women from studying engineering and encouraged female students to work hard to achieve their goals. Following the inauguration speech,&nbsp;<strong>Dr. Dilshad Mahjabeen,</strong>&nbsp;<em>Acting Chairman &amp;</em>&nbsp;<em>Associate professor, Department of EEE, Stamford University Bangladesh &amp; Counselor, IEEE Stamford Student Branch,&nbsp;</em>took the stage. She began her speech by clarifying the fact that her views are optimistic and not feminist. She proceeded by briefly discussing the importance of Women in Engineering and talked about the capabilities and understanding of women regarding the matter. Additionally, she discussed the reasons for more women choosing medical science over engineering and provided statistics on the percentage of men and women pursuing engineering careers. To encourage her audiences, she briefly narrated the stories of the 3 women who pursued engineering while also discussing the lack of participation and issues concerned with WIE in Bangladesh. Before ending her speech, she suggested arranging more seminars regarding Women in Engineering at both school and university levels. She provided some insights into what the future holds for Women in Engineering. Then&nbsp;<em>Advisor of IEEE AIUB Student Branch,&nbsp;</em><strong>Prof. Dr. A.B.M Siddique Hossain,&nbsp;</strong><em>Dean, Faculty of Engineering, AIUB,&nbsp;</em>briefly discussing Women in Engineering and presenting the token of appreciation to the honorable speaker.</span></span></span></span></p>

<p style="margin-left:2px; margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><span style="font-family:&quot;Times New Roman&quot;,serif">The seminar started at&nbsp;<strong>03:00 PM</strong>&nbsp;and finished at&nbsp;<strong>4:00 PM.</strong>&nbsp;A total of 60+ participants attended the event.</span></span></span></span></p>

<p>&nbsp;</p>
`,
    },
    catagory: `WIE`,
  },

  {
    id: 68,
    title: `IEEE Student Professional Awareness Venture (SPAVe) 6.0`,
    body: {
      __html: `<p style="margin-left:2px; margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><span style="font-family:&quot;Times New Roman&quot;,serif">On&nbsp;<strong>Thursday, March 16<sup>th</sup>, 2023</strong>, The&nbsp;<strong>IEEE AIUB Student Branch</strong>&nbsp;successfully organized the&nbsp;<strong>IEEE Student Professional Awareness Venture 6.0</strong>&nbsp;at&nbsp;<strong>American International University-Bangladesh</strong>. The venture was technically supported by&nbsp;<strong>IEEE, IEEE Bangladesh Section,&nbsp;</strong>and<strong>&nbsp;IEEE Young Professionals Bangladesh&nbsp;</strong>and was sponsored and partnered by<strong>&nbsp;Catec, Kishwan Group, Talukdar Foods,</strong>&nbsp;and&nbsp;<strong>Doinik Amader Shomoi</strong>.</span></span></span></span></p>

<p style="margin-left:2px; margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><span style="font-family:&quot;Times New Roman&quot;,serif">The major focus of the event was a series of professional and career-focused sessions centered on professional development. The daylong venture was inaugurated with an opening remark by&nbsp;<strong>Prof. Dr. Md. Abdur Rahman,&nbsp;</strong><em>Pro Vice Chancellor, AIUB&nbsp;</em>who emphasized the advantages of these professional development activities. The first session of the venture titled&nbsp;<strong>&ldquo;Impact of Renewable Energy on Climate Change&rdquo;</strong>&nbsp;was led by<strong>&nbsp;Dr. Shameem Ahmad,</strong>&nbsp;<em>Motivator, IEEE AIUB SB and Assistant Professor, Faculty of Engineering, AIUB.&nbsp;</em>He talked about how to develop a sustainable future, the goals to raise awareness to contribute to the C02 emission zero targets, and how everyone is involved in research work. Another session titled&nbsp;<strong>&ldquo;The Future of Work: Embracing Technological Disruptions &amp; Developing In-Demand Skills&rdquo;&nbsp;</strong>was conducted by&nbsp;<strong>Dr. M. Tanseer Ali</strong>,&nbsp;<em>SAC, IEEE BDS ExCom 2 and Associate Professor &amp; Special Assistant, Capstone Project, Faculty of Engineering, AIUB.&nbsp;</em>The third session was conducted by&nbsp;<strong>Dr. Celia Shahnaz,&nbsp;</strong><em>2023 Global IEEE WIE Chair, professor BUET, Member IEEE New initiative and History Committee, IEEE EAB FRC.&nbsp;</em>She conversed about&nbsp;<strong>WIE</strong>&nbsp;and engineering scope for female students. She discussed research work, innovation, collaboration, and sharing.</span></span></span></span></p>

<p style="margin-left:2px; margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><span style="font-family:&quot;Times New Roman&quot;,serif">After the lunch break, the fourth session of the venture, entitled&nbsp;<strong>&lsquo;Engineers Career Potentials and Readiness&rsquo;</strong>, was conducted by&nbsp;<strong>Muhammad Abdul Bari,&nbsp;</strong><em>Head of IT (Associate Director), Brac Enterprises.&nbsp;</em>He demonstrated how to look for the right career path and highlighted how to be prepared and the readiness for the job market. The last session was entitled&nbsp;<strong>&ldquo;Ins and Outs of Entrepreneurship&rdquo;</strong>, conducted by&nbsp;<strong>Ghulam Sumdany Don</strong>,<em>&nbsp;Chief Inspirational Officer at Don Sumdany Facilitation, Managing Director at DS Education, Ikigai HR Services, &amp; LoveGen Bangladesh.&nbsp;</em>The session focused on the important aspects of a person&rsquo;s mental health, growth, persistence &amp; patience, adaptability, willingness to act and fixed mindset in a professional&rsquo;s life. After that,&nbsp;<strong>Prof. Dr. A.B.M Siddique Hossain,&nbsp;</strong><em>Advisor, IEEE AIUB SB; Dean, Faculty of Engineering, AIUB,</em>&nbsp;gave his remarks where he thanked the participants for their patience, the ambassadors, and the speakers for their tremendous effort to make the event successful.&nbsp;<strong>Dr. Md. Raju Ahmed</strong>,&nbsp;<em>Dean, Faculty of Engineering; Director of IQAC, DUET; Vice-Chair (Activity), IEEE Bangladesh Section; Life Fellow IEB, Member IEEE,&nbsp;</em>gave the closing remarks for the session. The Venture ended with a cultural program performed by&nbsp;<strong>AIUB Performing Arts Club,</strong>&nbsp;a thanksgiving ceremony, and a group photo session of the speakers, guests, faculty members, organizing team, and participants. 120+ participants from several universities around the nation participated in this mega flagship event.</span></span></span></span></p>

<p style="margin-left:2px; margin-right:1px; text-align:justify">&nbsp;</p>

<p>&nbsp;</p>
`,
    },
    category: `Flagship Event`,
  },
  {
    id: 69,
    title: `Workshop on "Microwave Antenna Design and Simulation"`,
    body: {
      __html: `<p style="margin-left:2px; margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><span style="font-family:&quot;Times New Roman&quot;,serif">On <strong>20<sup>th</sup>&nbsp;April 2023</strong>, the <strong>IEEE Microwave Theory and Techniques Society AIUB SB Chapter</strong>, in collaboration with the <strong>IEEE AIUB Student Branch</strong>, organized an online workshop titled <strong>&quot;Microwave Antenna Design and Simulation&quot;</strong>. This workshop began at 02:00 pm with more than 100 attendees. The workshop aimed to provide a comprehensive overview of microwave antenna design and its simulation.</span></span></span></span></p>

<p style="margin-left:2px; margin-right:1px; text-align:justify">&nbsp;</p>

<p style="margin-left:2px; margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><em><span style="font-family:&quot;Times New Roman&quot;,serif">Advisor</span></em><span style="font-family:&quot;Times New Roman&quot;,serif"> of IEEE AIUB Student Branch, <strong>Dr. Md. Saniat Rahman Zishan</strong><em>, (Director &amp; Associate Professor, Faculty of Engineering, AIUB)</em>&nbsp;inaugurated the program. He showed his appreciation towards the instructor, organizer, and participants of the online workshop. He then discussed the future perspective of designing antennas. After the inauguration, <em>Student Activity Coordinator</em> of <em>IEEE Bangladesh Section Executive Committee 2023</em>, <strong>Dr. M. Tanseer Ali</strong>, (<em>Associate Professor, Special Assistant, Capstone Project, Faculty of Engineering, AIUB)</em>&nbsp;started his session. He initially demonstrated the CST Studio Suite&#39;s installation procedure and briefly explained its usage. Then, he explained the calculations required for designing an antenna. He also covered the transmission line theory, the significance of frequency, wavelength, reflection coordinates, the three transverse waves, and the dipole moment calculation. Afterwards, he designed and simulated a dipole microwave antenna. A Q&amp;A session was held, where he demonstrated S-parameter, Y-matrix, Z-matrix, electric field, return loss, and parameter sweep. Following the Q&amp;A session, <em>Counselor</em> of IEEE AIUB Student Branch, <strong>Dr. Mohammad Hasan Imam</strong>, (<em>Advisor, IEEE EMBS AIUB SB Chapter, Associate Professor, Faculty of Engineering, AIUB</em>), provided closing remarks and a virtual token of appreciation to the speaker.</span></span></span></span></p>

<p><br />
&nbsp;</p>
`,
    },
    category: `MTTS`,
  },

  {
    id: 70,
    title: `IEEE AIUB Student Branch Celebrated PES Day 2023 with Engaging Webinar`,
    body: {
      __html: ` <p style="margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><span style="font-family:&quot;Times New Roman&quot;,serif">On&nbsp;<strong>Sunday, May 21<sup>st</sup>, 2023, the IEEE AIUB Student Branch</strong>&nbsp;successfully organized a webinar session titled&nbsp;<strong>&ldquo;Advancements in Renewable Energy Technologies: Shaping the Future of Power and Energy&rdquo;</strong>&nbsp;in celebration of the&nbsp;<strong>6<sup>th</sup>&nbsp;IEEE PES Day</strong>. The webinar aimed to inform students about the latest developments in the power and renewable energy sectors, including advancements in wind, solar, and hydro technologies. It highlighted the potential of renewable energy to meet growing energy demands while addressing the climate crisis, inspiring students in their career choices.</span></span></span></span></p>

<p style="margin-right:1px; text-align:justify">&nbsp;</p>

<p style="margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><em><span style="font-family:&quot;Times New Roman&quot;,serif">Advisor of IEEE AIUB Student Branch</span></em><span style="font-family:&quot;Times New Roman&quot;,serif">&nbsp;<strong>Dr. Md. Saniat Rahman Zishan</strong>,&nbsp;<em>Director, Faculty of Engineering, American International University - Bangladesh&nbsp;</em>inaugurated the event by emphasizing the significance of&nbsp;<strong>PES Day</strong>&nbsp;and its relevance to the participants. He shed light on the power and energy sector, setting the stage for an insightful session. Advisor of IEEE Power and Energy Society AUST Student Branch Chapter&nbsp;<strong>Dr. Taskin Jamal</strong>,&nbsp;<em>Assistant Professor, Department of EEE, AUST</em>&nbsp;took the floor as the speaker of the session. His session revolved around sustainability and its crucial role in combating the global energy crisis. He delved into topics such as the impact of climate change, the revolution in renewable energy, and the importance of achieving a carbon emission-free environment. The webinar&#39;s objective aligned with United Nations Sustainable Development Goals (SDGs) 7 and 13. SDG 7 aims to ensure access to affordable, reliable, sustainable, and modern energy for all, while SDG 13 calls for urgent actions to combat climate change and its impacts. The webinar aimed to inspire participants to contribute to a more sustainable future by addressing these goals. The discussion further explored the volatile energy market, shifting energy forecasts, and the expanding capacity of renewable resources.</span></span></span></span></p>

<p style="margin-right:1px; text-align:justify">&nbsp;</p>

<p style="margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><strong><span style="font-family:&quot;Times New Roman&quot;,serif">Dr. Taskin</span></strong><span style="font-family:&quot;Times New Roman&quot;,serif">&nbsp;emphasized China&#39;s dominance in renewable energy manufacturing and the potential for wind and solar energy to double within the next five years. He also touched upon alternative fuels, fuel cells, and the increasing adoption of renewable energy in various sectors. Following the completion of the speaker&#39;s session, an engaging&nbsp;<strong>Q&amp;A&nbsp;</strong>session took place, allowing participants to further delve into the topics discussed.&nbsp;<em>Motivator of IEEE AIUB Student Branch</em>&nbsp;<strong>Dr. Shameem Ahmad</strong>,&nbsp;<em>Assistant Professor, Department of EEE, Faculty of Engineering, AIUB&nbsp;</em>concluded the session by expressing gratitude to the esteemed speaker and presenting a token of appreciation on behalf of the&nbsp;<strong>IEEE AIUB Student Branch</strong>. Overall, the webinar served as an educational platform, fostering awareness, and understanding of sustainable energy solutions while emphasizing the importance of taking action to combat climate change in line with United Nations SDGs 7 and 13.</span></span></span></span></p>

<p style="margin-right:1px; text-align:justify">&nbsp;</p>

<p style="margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><span style="font-family:&quot;Times New Roman&quot;,serif">The webinar started at 7:10 PM and ended at 8:40 PM. A total of 100+ participants attended the webinar.</span></span></span></span></p>

<p><br />
&nbsp;</p>
`,
    },
    category: `PES`,
  },
  {
    id: 71,
    title: `Unlocking Your Potentials and Pushing Your Boundaries with IEEEXtreme 17.0`,
    body: {
      __html: `<p style="margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><span style="font-family:&quot;Times New Roman&quot;,serif">On&nbsp;<strong>Sunday, May 28<sup>th</sup>, 2023,&nbsp;</strong>the&nbsp;<strong>IEEE AIUB Student Branch&nbsp;</strong>successfully organized a webinar titled&nbsp;<strong>&ldquo;Unlocking Your Potentials and Pushing Your Boundaries with IEEEXtreme 17.0&rdquo;.&nbsp;</strong>The webinar was held with the purpose of helping participants better prepare for the upcoming&nbsp;<strong>IEEEXtreme</strong>&nbsp;<strong>17.0</strong>&nbsp;by providing relevant and productive information. It highlighted the importance of teamwork, creativity, time management, a healthy lifestyle along with having skills for instant challenges and problem solving.</span></span></span></span></p>

<p style="margin-right:1px; text-align:justify">&nbsp;</p>

<p style="margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><strong><span style="font-family:&quot;Times New Roman&quot;,serif">Dr. Mohammad Hasan Imam,&nbsp;</span></strong><em><span style="font-family:&quot;Times New Roman&quot;,serif">Associate Professor, Faculty of Engineering, AIUB; Counselor, IEEE AIUB Student Branch, Advisor, IEEE EMBS AIUB SB Chapter,&nbsp;</span></em><span style="font-family:&quot;Times New Roman&quot;,serif">inaugurated the event by discussing briefly IEEEXtreme and its significance. He further went on to emphasize the need for problem solving, before handing over the stage to the honorable speaker.<strong>&nbsp;Md. Jamil Istiaq</strong>,&nbsp;<em>Information Technology Officer, Semiotify; Former chairperson, IEEE Computer Society AIUB SB Chapter,&nbsp;</em>took the floor as the speaker of the session. His session focused on IEEEXtreme, its benefits, the opportunity it provides, and its recognition. He inquired about topics such as how the competition is conducted, methods for hosting, participating, organizing and highlighted the various activities involved in IEEEXtreme. The webinar aimed to inspire IEEE members to participate in IEEEXtreme 17.0 and showcase their abilities on this platform.</span></span></span></span></p>

<p style="margin-right:1px; text-align:justify">&nbsp;</p>

<p style="margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><span style="font-family:&quot;Times New Roman&quot;,serif">The discussion continued to explore the importance of teamwork and creativity along with the need for proper health and rest.&nbsp;<strong>Md. Jamil&nbsp;</strong>mentioned that problem-solving is a key aspect of the competition and described different types of problem-solving approaches. Furthermore, he provided tips for practicing, managing time, using programming languages and tools, demonstrating problem analysis, implementation, testing, and solution submission. Lastly, he gave an idea for the IEEEXtreme Portal and CS Academy Website and provided a guideline for the activities on the day of IEEEXtreme. Following the completion of the speaker&rsquo;s session, an engaging&nbsp;<strong>Q&amp;A</strong>&nbsp;session took place, allowing participants to further delve into the topics discussed.<strong>&nbsp;Dr. Shameem Ahmad</strong>,&nbsp;<em>Assistant Professor, Department of EEE, Faculty of Engineering, AIUB; Motivator, IEEE AIUB Student Branch</em>, concluded the session by expressing gratitude to the honorable speaker and presenting a token of appreciation on behalf of the&nbsp;<strong>IEEE AIUB Student Branch.&nbsp;</strong>Overall, the webinar served as an educational platform, noting the importance and benefits of IEEEXtreme while signifying the necessity of different types of skills required for the competition. The webinar&#39;s objective aligned with United Nations Sustainable Development Goals (SDGs) 4 which aims to ensure access to quality education for all. </span></span></span></span></p>

<p style="margin-right:1px; text-align:justify">&nbsp;</p>

<p style="margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><span style="font-family:&quot;Times New Roman&quot;,serif">The webinar started at&nbsp;<strong>7:00 PM&nbsp;</strong>and ended at&nbsp;<strong>8:30 PM.&nbsp;</strong>A total of 95+ participants attended the webinar.</span></span></span></span></p>

<p><br />
&nbsp;</p>
`,
    },
    category: `CS`,
  },
  {
    id: 72,
    title: `Seminar on “EEG Signal Processing & Application to the Neurofeedback:
Operant Conditioning of Brain and Behaviors”.`,
    body: {
      __html: `<p style="margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><span style="font-family:&quot;Times New Roman&quot;,serif">On <strong>Thursday, 22<sup>nd</sup>&nbsp;June 2023</strong>, the <strong>IEEE EMBS AIUB Student Branch</strong> <strong>Chapter</strong> successfully hosted a seminar titled <strong>&ldquo;EEG Signal Processing &amp; Application to the Neurofeedback: Operant Conditioning of Brain and Behaviors&rdquo;</strong>. This seminar was organized in collaboration with the <strong>IEEE AIUB Student Branch</strong> and <strong>Centre for Biomedical Research (CBR), Dr. Anwarul Abedin Institute of Innovation</strong>. The event was held with the purpose to raise and increase public understanding about EEG Signals and Neurofeedback and develop its knowledge among the population.</span></span></span></span></p>

<p style="margin-right:1px; text-align:justify">&nbsp;</p>

<p style="margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><span style="font-family:&quot;Times New Roman&quot;,serif">The seminar was inaugurated by the&nbsp;<em>Advisor of IEEE AIUB Student Branch</em>&nbsp;<strong>Prof. Dr. A.B.M Siddique Hossain</strong><strong>,&nbsp;</strong><em>Dean, Faculty of Engineering, AIUB.&nbsp;</em>During his speech, he briefly explained about electrical signal and signal processing along with what neurons are and their specifications. After the inaugurating speech, the distinguished speaker of the session,&nbsp;<strong>Prof. Dr. M.O.K Wahedi</strong>,&nbsp;<em>MBBS(BD), MRCP (UK), MRCPCH (UK), FRCP (Edin), DCH(Hon&#39;s) Ire NUI, MSc ECD (BRACU); Professor of Pediatrics &amp; Child Health,&nbsp;</em>took the floor as the speaker of the session. He introduced the audience to EEG (electroencephalogram) and QEEG (quantitative electroencephalogram), explaining how these techniques are used to record and analyze brain activity. He explained the digital processing of EEG signals and the application of QEEG, highlighting their role in brain mapping and understanding brainwave characteristics. Furthermore, he provided an overview of the neurofeedback market and discussed the types of brainwaves that EEG measures, emphasizing the different brainwave patterns and frequencies. Afterwards, he shared his real-life experiences and discussed the use of neurofeedback in treating conditions such as ADHD, autism, epilepsy, depression, and anxiety. Before concluding his session, he discussed training programs and awareness related to neurofeedback, along with additional research in the field and demonstrated the outcomes and processes through a video, providing a practical illustration of neurofeedback in action.&nbsp;<em>Advisor of IEEE AIUB Student Branch,&nbsp;</em><strong>Prof. Dr. Mohammad Abdul Mannan</strong><strong>,</strong>&nbsp;<em>Associate Dean, Faculty of Engineering, AIUB&nbsp;</em>delivered the closing remarks of the session where he encouraged participants to carry out research in this field.</span></span></span></span></p>

<p style="margin-right:1px; text-align:justify">&nbsp;</p>

<p style="margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><span style="font-family:&quot;Times New Roman&quot;,serif">The event concluded with Prof. Dr. A.B.M Siddique Hossain and Prof. Dr. Mohammad Abdul Mannan provided the token of appreciation to the distinguished speaker. This seminar also focused on raising awareness on good health and wellbeing, which aims to ensure healthy lives and promotes well-being for all at all ages. A total of 50+ participants attended the seminar.&nbsp;<em>Counselor of IEEE AIUB Student Branch,&nbsp;</em><strong>Dr. Mohammad Hasan Imam</strong>,<em>&nbsp;Associate Professor, Faculty of Engineering, AIUB,&nbsp;</em><strong>Ms. Humayra Fredous<em>,</em></strong><em>&nbsp;Deputy Director,&nbsp;Center for Biomedical Research (CBR), Dr. Anwarul Abedin Institute of Innovation and Head-in-Charge, Department of Physics, AIUB</em>,&nbsp;<strong>Dr. Md. Humayun Kabir</strong>,&nbsp;<em>Associate Professor, Faculty of Engineering, AIUB</em>&nbsp;attended the event.</span></span></span></span></p>

<p><br />
&nbsp;</p>
`,
    },
    category: `EMBS`,
  },
  {
    id: 73,
    title: `IEEE AIUB Student Branch WIE Affinity Group Successfully Celebrated “WIE Day”`,
    body: {
      __html: `<p style="margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><span style="font-family:&quot;Times New Roman&quot;,serif">On&nbsp;<strong>Sunday, June 18<sup>th</sup>, 2023,&nbsp;</strong>the&nbsp;<strong>IEEE AIUB Student Branch WIE Affinity Group&nbsp;</strong>successfully celebrated&nbsp;<strong>&ldquo;WIE Day&rdquo;.&nbsp;</strong>The event was held with the aim of empowering and motivating more women to pursue a career in engineering. It highlighted the significant contributions made by current female engineers to various industries and the challenges women engineers face in the traditionally male-dominated field.&nbsp;<em>Advisor of IEEE AIUB Student Branch,&nbsp;</em><strong>Prof. Dr. A.B.M Siddique Hossain,&nbsp;</strong><em>Dean, Faculty of Engineering, AIUB,&nbsp;</em>inaugurated the event by briefly talking about women&rsquo;s advancement in engineering and education before handing over the stage to the honorable speaker.</span></span></span></span></p>

<p style="margin-right:1px; text-align:justify">&nbsp;</p>

<p style="margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><strong><span style="font-family:&quot;Times New Roman&quot;,serif">Dr. Dilshad Mahjabeen,&nbsp;</span></strong><em><span style="font-family:&quot;Times New Roman&quot;,serif">Counselor, IEEE STAMFORD Student Branch, Acting Chairman &amp; Associate professor, Department of EEE, Stamford University Bangladesh,&nbsp;</span></em><span style="font-family:&quot;Times New Roman&quot;,serif">took the floor as the speaker of the session. She provided an insightful discussion on women&#39;s involvement in Artificial Intelligence (AI) during the event and talked about the current state of women in AI while acknowledging both the specialties of women and the challenges they face.&nbsp;<strong>Dr. Dilshad&nbsp;</strong>continued the session by mentioning the benefits of diversity and inclusion in corporations, as well as the availability of grants, scholarships, and mentorship programs for women in technical disciplines.&nbsp;<em>Advisor of IEEE AIUB Student Branch</em><strong>&nbsp;Prof. Dr. Mohammad Abdul Mannan,</strong><em>&nbsp;Associate Dean, Faculty of Engineering, AIUB,&nbsp;</em>delivered the closing remarks of the session. The event concluded with Prof<strong>. Dr. Mohammad Abdul Mannan&nbsp;</strong>providing the token of appreciation to the distinguished speaker. Following a designated break period,&nbsp;<strong>Khan Farhana Ma&rsquo;am,</strong>&nbsp;<em>International Relations Specialist, Consultant, Systech Digital Limited; Founder, Farhana&rsquo;s Brainstation.&nbsp;</em>assumed the role of the session&rsquo;s speaker. She delivered an informative session centered around empowering women globally while emphasizing the importance of equality between men and women, highlighting the significance of education for both genders and acknowledged the crucial support of friends and family in women&#39;s empowerment. She touched upon the importance of SWOT analysis and its relevance, emphasizing the value of analytical thinking. Additionally, the speaker demonstrated and provided guidance on emailing a resume effectively. &nbsp;</span></span></span></span></p>

<p style="margin-right:1px; text-align:justify">&nbsp;</p>

<p style="margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><em><span style="font-family:&quot;Times New Roman&quot;,serif">Advisor of IEEE AIUB Student Branch,&nbsp;</span></em><strong><span style="font-family:&quot;Times New Roman&quot;,serif">Dr. Md. Saniat Rahman Zishan,&nbsp;</span></strong><span style="font-family:&quot;Times New Roman&quot;,serif">Director<em>, Faculty of Engineering, AIUB&nbsp;</em>presented the closing remarks of the event. He highlighted on the positive change in number of female engineers in engineering studies in recent years and appreciated the significant contribution of women in engineering. Afterwards he congratulated the&nbsp;<strong>IEEE AIUB Student Branch WIE Affinity Group&nbsp;</strong>for arranging the event and thanked the participants for attending the event. Overall, the event served as a medium to update and inform about the current state of females in different engineering industries and motivate the current female participants to pursue a career in engineering. This event aimed to raise awareness on gender equality and empower all women. A total of 90+ attended the event.&nbsp;<strong>Dr. Rifat Hazari</strong>,&nbsp;<em>Senior Assistant Professor, Faculty of Engineering, AIUB</em>,&nbsp;<strong>Md. Shahariar Parvez</strong>,<em>&nbsp;Lecturer, Faculty of Engineering, AIUB</em>&nbsp;and&nbsp;<strong>Tamim Hossain</strong>,&nbsp;<em>Lecturer, Faculty of Engineering, AIUB</em>&nbsp;attended the session.</span></span></span></span></p>

<p>&nbsp;</p>
`,
    },
    category: `WIE`,
  },

  {
    id: 74,
    title: ` Seminar on ‘Terahertz and Novel Antenna Design Techniques for Next Generation 6G Technologies’`,
    body: {
      __html: `<p style="margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><span style="font-family:&quot;Times New Roman&quot;,serif">On <strong>4<sup>th</sup>&nbsp;July 2023</strong>, the <strong>IEEE MTT-S AIUB Student Branch Chapter</strong>, in collaboration with the <strong>IEEE AIUB Student Branch</strong>, hosted a seminar titled <strong>&lsquo;Terahertz and Novel Antenna Techniques for Next Generation 6G Technologies&rsquo;</strong>. The seminar began at 4:00 pm with more than 50 attendees and concluded at 6:00 pm. The seminar aimed to provide an overview on the possibilities of terahertz frequencies to bring the next generation wireless communication technologies.</span></span></span></span></p>

<p style="margin-right:1px; text-align:justify">&nbsp;</p>

<p style="margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><strong><span style="font-family:&quot;Times New Roman&quot;,serif">Prof. Dr. A.B.M Siddique Hossain</span></strong><span style="font-family:&quot;Times New Roman&quot;,serif">,&nbsp;<em>Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch</em> inaugurated the program. He provided a concise overview of various topics, including the wireless band, electromagnetic spectrum, smart grid, 6G, applications of wireless systems and antennas (WSA), and the prospects and advancements in the ICT sector. After the inauguration, Alumnus of the Department of EEE, AIUB,&nbsp;<strong>Dr. Nasim Al Islam</strong>,&nbsp;<em>Postdoctoral Research Fellow, Kyungpook National University, South Korea</em> took the floor. He began by introducing the audience to the concept of the 6G network. He explained the timeline for allocating the 6G spectrum, forecasted the deployment and expansion of the network, and discussed the challenges associated with operating in high frequency ranges. In addition, he gave an overview of metamaterials, discussing the various types of metamaterials and emphasizing their benefits and fabrication methods. Furthermore, he discussed the performance of nanoantenna-integrated MOS diodes. Before concluding his session, he highlighted the role of funding agencies and acknowledged the contributions of his co-workers in his device fabrication project. He closed the session by emphasizing the abundant opportunities in the field of communication and the application of processes in South Korea, sharing his own personal experience.&nbsp;</span></span></span></span></p>

<p style="margin-right:1px; text-align:justify">&nbsp;</p>

<p style="margin-right:1px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#181717"><span style="font-family:&quot;Times New Roman&quot;,serif">Following the keynote session, Advisor of IEEE AIUB Student Branch,&nbsp;<strong>Dr. Md. Saniat Rahman Zishan</strong>,&nbsp;<em>Director, Faculty of Engineering, AIUB</em> presented a token of appreciation to the honorable speaker, followed by a closing speech. In his speech, he expressed his admiration for the speaker&#39;s dedication to his work and research, while also encouraging the participants to pursue research in this field. Distinguished faculty members,&nbsp;<strong>Prof. Dr. Mohammad Abdul Mannan,</strong>&nbsp;<em>Associate Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch</em>;&nbsp;<strong>Dr. Mohammad Hasan Imam,</strong>&nbsp;<em>Associate Professor, Faculty of Engineering, AIUB; Counselor, IEEE AIUB Student Branch</em>;<strong>&nbsp;Dr. Shameem Ahmad,</strong>&nbsp;<em>Assistant Professor, Department of EEE, Faculty of Engineering, AIUB, Motivator, IEEE AIUB Student Branch</em>;&nbsp;<strong>Sadman Shahriar Alam</strong>, <em>Lecturer, Faculty of Engineering, AIUB</em>;&nbsp;<strong>Tamim Hossain</strong>,&nbsp;<em>Lecturer, Faculty of Engineering, AIUB</em>,&nbsp;also attended the session.</span></span></span></span></p>

<p style="margin-right:1px; text-align:justify">&nbsp;</p>

<p>&nbsp;</p>
`,
    },
    category: `MTTS`,
  },
  {
    id: 75,
    title: `Seminar on ‘Climate Change and Human Health : Unraveling the nexus’`,
    body: {
      __html: `<p style="margin-right:1px; text-align:justify">On <strong>Saturday, July 29<sup>th</sup>, 2023, the IEEE AIUB Student Branch WIE Affinity Group </strong>successfully organized a webinar titled “<strong>Climate Change and Human Health: Unraveling the Nexus</strong>”. The event was held with the aim of enlightening participants about the current state of the climate. It highlighted the significant contributions made by the changes in climate towards human health.

      <strong>Dr. Mohammad Hasan Imam Sir</strong>, <em>Counselor, IEEE AIUB Student Branch; Advisor IEEE EMBS AIUB SB; Associate Professor, Faculty of Engineering, American International University – Bangladesh</em><em>,</em> inaugurated the event by speaking briefly about climates and its impacts on human well-being, He then proceeded to introduce the honorable speaker before handing over the platform the speaker.
      
      <strong>Dr. Celia Shahnaz Ma’am,</strong> <em>2023 IEEE WIE Chair, professor BUET, Member IEEE New initiative and history Committee, IEEE EAB FRC, </em>took the stage as the honorable speaker of the session. She began by emphasizing the importance of Women in Engineering (WIE) and the scope it offers for female students. She shared her own short biography and remarkable achievements, highlighting her passion for engineering and its impact. The speaker then discussed the various IEEE societies and emphasized the value of diversity and collaboration within the organization. She specifically talked about IEEE HKN and encouraged everyone to update vtools to stay up-to-date with the latest IEEE and IEEE WIE updates.
      
      Afterwards, she spoke about initiatives to use eco-friendly products and prevent climate change to address the importance of climate health for high-risk populations. The session concluded with a motivational speech, where the speaker highlighted the significance of capstone projects aligning with Sustainable Development Goals (SDGs) and contributing positively to the climate. She encouraged participants to bring novelty and innovative solutions to address the challenges of climate change.
      
      <strong>Dr. Mohammad Hasan Imam Sir</strong>, <em>Counselor, IEEE AIUB Student Branch; Advisor IEEE EMBS AIUB SB; Associate Professor, Faculty of Engineering, American International University – Bangladesh, </em>proceeded with the closing remarks of the session. He presented a virtual token of appreciation to the honorable speaker and thanked her and the <strong>IEEE AIUB Student Branch WIE Affinity Group</strong> for arranging the webinar.
      
      The event started at 8:10 PM and ended at 9:30 PM. A total of 70+ attended the event.</p>`,
    },
    category: ``,
  },
  {
    id: 76,
    title: `Members' Orientation 2023 - IEEE AIUB Student Branch`,
    body: {
      __html: ` 				 	
      <p>On&nbsp;<strong>Tuesday, 8<sup>th</sup>&nbsp;August 2023,&nbsp;</strong>the&nbsp;<strong>IEEE AIUB Student Branch&nbsp;</strong>successfully organized the “<strong>Members’ Orientation 2023</strong>”. The event was held with the intention of helping new members become familiar with IEEE and strengthening their dedication to the IEEE Community. The event highlighted numerous benefits and the importance of being affiliated with&nbsp;<strong>IEEE</strong>. It also introduced the executive committee members of 2023 and explained the important roles they will take on.</p>
<p>The event was inaugurated by&nbsp;<strong>Prof. Dr. Mohammad Abdul Mannan,&nbsp;</strong><em>Associate Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch</em><strong>.&nbsp;</strong>He welcomed the members warmly and provided a brief overview of&nbsp;<strong>IEEE</strong>&nbsp;along with its advantages, emphasizing how they could make the most of these benefits.&nbsp;<strong>Dr. Md. Saniat Rahman Zishan,</strong>&nbsp;<em>Director, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch,&nbsp;</em>engaged with the session by sharing his personal experience with the&nbsp;<strong>IEEE AIUB Student Branch</strong>&nbsp;while encouraging the new members to be more involved with the organization and get into volunteering. Subsequently,&nbsp;<strong>Nafiz Ahmed Chisty</strong>,&nbsp;<em>Associate Professor &amp; Head, Department of EEE, Faculty of Engineering, AIUB; Advisor; IEEE AIUB Student Branch&nbsp;</em>provided his own remarks by sharing his experience with&nbsp;<strong>IEEE&nbsp;</strong>and appreciated the student branch and ExCom members for their contribution. Afterwards,&nbsp;<strong>Chowdhury Akram Hossain</strong>,&nbsp;<em>Head, Department of CoE, Faculty of Engineering, Advisor, IEEE AIUB Student Branch</em>&nbsp;continued the session. He reminisced about his own journey with&nbsp;<strong>IEEE</strong>&nbsp;and the&nbsp;<strong>IEEE AIUB Student Branch</strong>, highlighting the significant experiences and opportunities he gained from&nbsp;<strong>IEEE</strong>. The following session was continued by&nbsp;<strong>Dr. Mohammad Hasan Imam,</strong>&nbsp;<em>Associate Professor, Faculty of Engineering, AIUB; Advisor, IEEE EMBS AIUB SB Chapter; Counselor (2022), IEEE AIUB Student Branch;&nbsp;</em>who provided a brief remark for the event.</p>
<p>Following a brief intermission, former members of the Executive Committee were invited to the stage. They shared their own experiences from their time serving in the&nbsp;<strong>IEEE AIUB Student Branch</strong>. After their speech, the advisors of the&nbsp;<strong>IEEE AIUB Student Branch</strong>&nbsp;revealed the newly appointed Executive Committee of 2023. This was followed by a cultural performance by the&nbsp;<strong>AIUB Performing Arts Club (APAC)</strong>. Afterward,&nbsp;<strong>Dr. Mohammad Nasir Uddin,&nbsp;</strong><em>Head, Graduate Program, Department of EEE, AIUB;&nbsp;</em>he shared his perspectives and experiences. The event concluded with a speech from the newly appointed counselor of 2023,&nbsp;<strong>Dr. Shameem Ahmad</strong>,&nbsp;<em>Assistant Professor, Department of EEE, AIUB.&nbsp;</em>He shared his experience and insights and thanked all the members for joining the session. Distinguished faculty members&nbsp;<strong>Dr. Rifat Hazari</strong>,<em>&nbsp;Senior Assistant Professor, Faculty of Engineering, AIUB;&nbsp;</em><strong>Abir Ahmed</strong>,<em>&nbsp;Assistant Professor &amp; Special Assistant, Department of EEE, AIUB&nbsp;</em>and&nbsp;<strong>Md. Shahariar Parvez</strong>,<em>&nbsp;Lecturer, Faculty of Engineering, AIUB;&nbsp;</em>were also present at the event. The event started at&nbsp;<strong>4:05 PM&nbsp;</strong>and concluded at&nbsp;<strong>6:40 PM.&nbsp;</strong>A total of&nbsp;<strong>125+</strong>&nbsp;participants attended the event.</p>
<p>Link: <a href="https://www.aiub.edu/ieee-aiub-student-branch-organized-members-orientation-2023">https://www.aiub.edu/ieee-aiub-student-branch-organized-members-orientation-2023</a></p>
`,
    },
    category: ``,
  },
  {
    id: 77,
    title: ` Seminar on ‘Postgraduate Studies In Engineering	’`,
    body: {
      __html: `	 				 	
      <p>On&nbsp;<strong>Sunday</strong>,<strong>&nbsp;August 13<sup>th</sup>, 2023</strong>, the&nbsp;<strong>Department of Electrical &amp; Electronic Engineering (EEE),</strong>&nbsp;<strong>Faculty of Engineering, AIUB&nbsp;</strong>in collaboration with the<strong>&nbsp;IEEE AIUB Student Branch</strong>, successfully organized a research seminar titled “<strong>Postgraduate Studies in Engineering</strong>.” The event aimed to cover diverse topics like postgraduate benefits, funding options, research areas, and the impact of advanced education on careers. It also aimed to connect students with seasoned academics for insights into shaping their futures in various fields of engineering. The event was inaugurated by&nbsp;<strong>Prof. Dr. Mohammad Abdul Mannan,&nbsp;</strong><em>Associate Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch</em>. He delved into the benefits and significance of postgraduate studies and research, offering advice on initiating the process. After the inauguration,&nbsp;<strong>Dr. Mohammad Nasir Uddin</strong>,&nbsp;<em>Department Head, Graduate Program, Faculty of Engineering, AIUB</em>&nbsp;shared his insights on the session.</p>
<p>Then&nbsp;<strong>Dr. Mohammad Tawhidul Alam</strong>,&nbsp;<em>Associate Professor, Department of EEE, AIUB&nbsp;</em>took the stage as the first keynote speaker. His presentation, titled “<strong>Simultaneous AC-DC System – A New Approach to Power Transmission</strong>,” began with a concise overview of the topic before delving into deeper topics such as HVDC systems, monopolar links, and the necessity of power transmission enhancements. Following his session,&nbsp;<strong>Dr. Tanbir Ibne Anowar</strong>,&nbsp;<em>Associate Professor, Department of EEE, AIUB</em>&nbsp;initiated his session on “<strong>Prospects on Wireless Power Transfer and its Recent Trends</strong>”. He delved into the potential of wireless power transfer and its contemporary advancements. He elaborated on topics like frequency splitting phenomena, optimal coupling mechanisms, IEEE standards, and safety considerations. Next,&nbsp;<strong>Raja Rashidul Hasan</strong>,&nbsp;<em>Assistant Professor, Department of EEE, AIUB</em>&nbsp;took the stage for his session titled “<strong>Advantage of 2D Materials in Wireless Applications</strong>”. He discussed the utilization of antennas in various applications, including capsule endoscopy, integration of antennas in textiles, the role of 2D titanium carbide, and the advantages offered by microstrip patch antennas. The final session, titled “<strong>Electrical Impedance Sensing for Chlorophyll-a Estimation using Machine Learning Approaches</strong>” was presented by&nbsp;<strong>Dr. Rinku Basak</strong>,&nbsp;<em>Associate professor, Department of EEE, AIUB</em>. He discussed the development of electrical impedance spectroscopy, utilization of MATLAB, and the estimation of Chlorophyll-a concentration in algae species through machine learning methodologies.</p>
<p>The event ended with&nbsp;<strong>Prof. Dr. Mohammad Abdul Mannan</strong>&nbsp;delivering the closing remarks, where he shared his insights on the seminar and its outcomes. Among the esteemed faculty members in attendance were&nbsp;<strong>Dr. Md. Saniat Rahman Zishan,&nbsp;</strong><em>Director<strong>,&nbsp;</strong>Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch</em>;<strong>&nbsp;Mohammad Khurshed Alam</strong>,&nbsp;<em>Assistant Professor,&nbsp;Faculty of Engineering, AIUB</em>;&nbsp;<strong>Dr. Md. Rifat Hazari</strong>&nbsp;<em>Deputy Director, Dr. Anwarul Abedin Institute of Innovation, Senior Assistant Professor,&nbsp;Faculty of Engineering AIUB</em>;<strong>&nbsp;Mehedi Azad Shawon</strong>&nbsp;<em>Assistant Professor, Faculty of Engineering, AIUB,&nbsp;</em>and&nbsp;<strong>Amzad Ali Sarkar</strong>,&nbsp;<em>Assistant Professor, Faculty of Engineering, AIUB</em>. The event’s discussions strongly resonate with SDG’s, including Quality Education, Industry, Innovation, and Infrastructure, Climate Action, as well as Life on Land and Life Below Water. The event started at&nbsp;<strong>05:30 PM</strong>&nbsp;and finished at&nbsp;<strong>08:00 PM</strong>. A total of 50+ participants attended the event.</p>
<p>Link: <a href="https://www.aiub.edu/research-seminar-titled-postgraduate-studies-in-engineering">https://www.aiub.edu/research-seminar-titled-postgraduate-studies-in-engineering</a></p>`,
    },
    category: ``,
  },
  {
    id: 78,
    title: ` Seminar on ‘Reliability and Safety Risks for the AI Hardware in the Perspective of the Future Metaverse ’`,
    body: {
      __html: ` 	 				 	
      <p>On&nbsp;<strong>Saturday, September 9, 2023,</strong>&nbsp;the&nbsp;<strong><em>IEEE AIUB Student Branch</em>&nbsp;</strong>in collaboration with the&nbsp;<strong><em>Faculty of Engineering (FE), American International University-Bangladesh (AIUB)</em>&nbsp;</strong>successfully organized a webinar titled&nbsp;<strong><em>“Reliability and Safety Risks for the AI Hardware in the Perspective of the Future Metaverse”</em></strong>. The webinar was held with the purpose of providing an informative session for individuals who are passionate about AI and metaverse applications. It highlighted the integration in the future metaverse, the reliability, and the safety of its implementing hardware with respect to faults and aging conditions possibly occurring during its operation in the field.</p>
<p><strong><em>Cecilia Metra</em></strong><em>,</em>&nbsp;<em>Professor, PhD, Eng,<strong>&nbsp;IEEE Fellow</strong>;&nbsp;<strong>2022-2023 IEEE Director/Division V Delegate; President, IEEE Computer Society 2019; DEI – ARCES, University of Bologna, Italy</strong></em>&nbsp;conducted the session. Her session focused on the intricacies of financial investments within the metaverse, emphasizing the critical aspects of reliability and safety. This was accomplished through an exploration of the definition of artificial intelligence (AI) and a comprehensive discussion of the methodologies employed to ensure memory reliability, particularly in the context of System Entities.</p>
<p>The webinar had two main goals, to motivate and educate people on algorithmic concepts and important security practices necessary for navigating a technology-driven virtual world. After the speaker session, there was an interactive Q&amp;A session where participants could explore the discussed topics in more depth.&nbsp;<strong><em>Prof. Dr. Md. Abdur Rahman</em>,</strong>&nbsp;<em>Pro Vice Chancellor, AIUB; Advisor, IEEE AIUB Student Branch</em>, concluded the session by expressing gratitude to the honorable speaker and presenting a token of appreciation.</p>
<p>The webinar started at&nbsp;<strong>7 PM (GMT +6)</strong>&nbsp;and ended at&nbsp;<strong>8 PM (GMT +6).&nbsp;</strong>A total of 90+ participants attended the webinar. Distinguished faculty members&nbsp;<strong><em>Prof. Dr. Mohammad Abdul Mannan</em>,</strong><em>&nbsp;Associate Dean, Faculty of Engineering, AIUB;&nbsp;<strong>Dr. Md. Saniat Rahman Zishan</strong></em><strong>,&nbsp;</strong><em>Director, Faculty of Engineering, AIUB;&nbsp;<strong>Dr. Mohammad Tawhidul Alam</strong></em><strong>,&nbsp;</strong><em>Associate Professor, Department of EEE, Faculty of Engineering, AIUB;&nbsp;<strong>Dr. Shameem Ahmad</strong></em><strong>,&nbsp;</strong><em>Assistant Professor, Department of EEE, Faculty of Engineering, AIUB; Counselor, IEEE AIUB Student Branch</em>;&nbsp;<strong><em>Mr.&nbsp;MD. Ashiquzzaman</em>,</strong><em>&nbsp;Assistant Professor, Department of EEE, Faculty of Engineering, AIUB;&nbsp;<strong>Mr.&nbsp;Rifath Mahmud</strong></em><strong>,&nbsp;</strong><em>Lecturer, Department of Computer Science, Faculty of Science and Technology, AIUB;&nbsp;</em>and&nbsp;<strong><em>Mr.&nbsp;Abu Shufian,</em>&nbsp;</strong><em>Lecturer, Department of EEE, Faculty of Engineering, AIUB&nbsp;</em>also attended the webinar.</p>
<p>Link: <a href="https://www.aiub.edu/webinar-on-reliability-and-safety-risk-for-the-ai-hardware-in-the-perspective-of-the-future-metaverse">https://www.aiub.edu/webinar-on-reliability-and-safety-risk-for-the-ai-hardware-in-the-perspective-of-the-future-metaverse</a></p>`,
    },
    category: ``,
  },
  {
    id: 79,
    title: ` Seminar on ‘Securing the Bits and Bytes: Navigating through Classical and Modern Measures of Digital Security’`,
    body: {
      __html: ` 		 				 	
      <p>On&nbsp;<strong>Saturday, 16<sup>th&nbsp;</sup>September 2023</strong>,&nbsp;<strong><em>IEEE AIUB Student Branch</em>,&nbsp;</strong>in collaboration with the&nbsp;<strong><em>IEEE Computer Society AIUB SB Chapter</em>,</strong>&nbsp;successfully hosted a webinar titled&nbsp;<em>“<strong>Securing the Bits and Bytes: Navigating through Classical and Modern Measures of Digital Security</strong>”</em>. The event was held with the purpose of providing some context on cryptography and computer security and developing its knowledge among the participants. It highlighted the significance and the need for cryptography and computer security in the modern era. The session also emphasized the importance of advancements in digital security technologies and infrastructure, ultimately in alignment with SDG 9 (industry, innovation, and infrastructure).</p>
<p>The webinar was inaugurated by&nbsp;<strong><em>Dr.&nbsp;Shameem Ahmad,&nbsp;</em></strong><em>Assistant Professor, Faculty of Engineering, Department of EEE, AIUB</em>;&nbsp;<strong><em>Counselor</em></strong><em>, IEEE AIUB Student Branch.&nbsp;</em>During his speech he briefly talked about cyber security and then welcomed the speaker. After this&nbsp;<strong><em>Ms.</em></strong>&nbsp;<strong><em>Cybele Ghanem</em>,</strong>&nbsp;<em>Implementation and Support Engineer, INVIGO OFFSHORE;&nbsp;<strong>Chair, IEEE DAY 2023</strong>; Social Media Lead, IEEE XTREME 17.0</em>&nbsp;took the floor as the speaker of the session. Initially, she began the session by delivering a clear and concise introduction about herself and the topic she would be discussing.</p>
<p>She proceeded with a discussion on networking and cybersecurity. Subsequently, she elaborated on the concept of computer security, delving extensively into the objectives of security using the “CIA TRIAD” model. She gave a thorough overview of several types of attacks and their distinctive targeting tactics. She also discussed passive and active forms of security attacks. She continued by showing a video of the worst threat, “Social Engineering.” Finally, she concluded her lecture by expressing gratitude to the IEEE AIUB Student Branch for extending the invitation to the session. The event concluded as&nbsp;<strong><em>Dr.&nbsp;Shameem Ahmad</em></strong>&nbsp;gave the closing remarks and handed over the token of appreciation to the distinguished speaker.</p>
<p>The webinar began at 7 PM and ended around 8:30 PM (GMT +6). Over 90 participants attended the webinar. Distinguished faculty members&nbsp;<strong><em>Dr. Mohammad Hasan Imam</em></strong>,&nbsp;<em>Associate Professor,</em>&nbsp;<em>Department of EEE, Faculty of Engineering, AIUB</em>;&nbsp;<em>Advisor, IEEE EMBS AIUB Student Branch Chapter;&nbsp;<strong>Mr. Md. Ashiquzzaman</strong></em>,&nbsp;<em>Assistant Professor, Faculty of Engineering, AIUB;</em>&nbsp;<strong><em>Mr. Bishwajit Banik Pathik</em></strong>,&nbsp;<em>Assistant Professor, Faculty of Engineering, AIUB;</em>&nbsp;<strong><em>Mr. Abu Shufian</em></strong>,<em>&nbsp;Lecturer, Faculty of Engineering, AIUB</em>&nbsp;also attended the webinar.</p>
<p>Link: <a href="https://www.aiub.edu/webinar-on-securing-the-bits-and-bytes-navigating-through-classical-and-modern-measures-of-digital-security">https://www.aiub.edu/webinar-on-securing-the-bits-and-bytes-navigating-through-classical-and-modern-measures-of-digital-security</a></p>
`,
    },
    category: ``,
  },
  {
    id: 80,
    title: `Seminar on ‘A Rapid & Low-Cost Multifrequency Electrical Impedance Tomography System for Precision Agriculture’`,
    body: {
      __html: `      <p>On&nbsp;<strong>Wednesday</strong>,<strong>&nbsp;September 27<sup>th</sup>, 2023</strong>, the&nbsp;<strong>IEEE&nbsp;AIUB Student Branch&nbsp;</strong>in collaboration with the<strong>&nbsp;IEEE MTT-S AIUB Student Branch Chapter</strong>, successfully organized a seminar titled&nbsp;<strong>“A Rapid and Low-Cost Multifrequency Electrical Impedance Tomography Data Acquisition System for Precision Agriculture”</strong>. The event was held for the students to engage with the future of precision agriculture.</p>
      <p>The seminar was inaugurated by&nbsp;<strong>Prof. Dr. Mohammad Abdul Mannan,&nbsp;</strong><em>Associate Dean, Faculty of Engineering,&nbsp;AIUB; Advisor, IEEE AIUB Student Branch.&nbsp;</em>He welcomed the attendees and introduced our honorable speaker for the session. He discussed the significance of machine learning and how the speaker could guide students in their research endeavors. Afterwards, the honorable speaker of the session,&nbsp;<strong>Dr. Rinku Basak,</strong><em>&nbsp;Associate Professor, Department of EEE, Faculty of Engineering, AIUB</em>, took the floor and expressed his gratitude to&nbsp;<strong>IEEE AIUB Student Branch</strong>&nbsp;for organizing the seminar. He shared insights into the Electrical Impedance Tomography (EIT) system, emphasizing its relevance in studying plant morphology, physiology, and biochemical aspects. Afterward, he discussed Electrical Impedance Spectroscopy (EIS). The presentation also touched on the available measurement tools for plant phenotyping and explored research collaborations with universities such as Saskatchewan, Ryerson, and Calgary. Next, he shared his own research journey and explored the future possibilities of the EIT system and precision agriculture. The importance of MATLAB was highlighted, and attendees were encouraged to foster additional collaborations and tap into the resources offered by IEEE.</p>
      <p>The session wrapped up with a closing speech expressing gratitude to IEEE AIUB SB for the invitation, followed by a Q&amp;A session. Finally,&nbsp;<strong>Dr. Shameem Ahmad,&nbsp;</strong><em>Assistant Professor, Department of EEE, Faculty of Engineering, AIUB; Counselor, IEEE AIUB Student Branch</em>&nbsp;delivered the closing remarks. During his address, he explored capstone project concepts associated with smart agriculture, considering cost and resource considerations. He also presented a token of appreciation to the speaker as a gesture of gratitude.</p>
      <p>The seminar successfully achieved its objective of increasing participants’ understanding of precision agriculture and its associated benefits. It effectively introduced the concept of EIT to the audience, providing comprehensive coverage of all relevant aspects. The seminar had a broader goal of improving food production efficiency while controlling costs, aligning with Sustainable Development Goal 2 (Zero Hunger).The seminar also underscored the importance of advancements in precision agriculture, aligning with Sustainable Development Goal 9 (Industry, Innovation, and Infrastructure).</p>
      <p>A total of 40+ participants attended the event. Notably, Honorable faculty member&nbsp;<strong>Mahamudul Hassan,&nbsp;</strong><em>Assistant Professor, Department of IPE, Faculty of Engineering, AIUB&nbsp;</em>was among the distinguished participants.</p>
      <p>Link: <a href="https://www.aiub.edu/seminar-on-a-rapid-and-low-cost-multifrequency-electrical-impedance-tomography-data-acquisition-system-for-precision-agriculture">https://www.aiub.edu/seminar-on-a-rapid-and-low-cost-multifrequency-electrical-impedance-tomography-data-acquisition-system-for-precision-agriculture</a></p>`,
    },
    category: ``,
  },
  {
    id: 81,
    title: `Celebration of IEEE Day 2023`,
    body: {
      __html: `   <p>On&nbsp;<strong>Tuesday, 10<sup>th</sup>&nbsp;October 2023</strong>, the&nbsp;<strong><em>IEEE AIUB Student Branch</em></strong>&nbsp;organized an all-day long event celebrating&nbsp;<em>“<strong>IEEE Day 2023</strong>”</em>. The event aimed to unite members and supporters of the&nbsp;<strong><em>IEEE AIUB Student Branch</em></strong>, showcasing the collaborative efforts of local IEEE members in shaping technology for a brighter future. It emphasized the collective impact of community-driven ideas and contributions in creating a positive change.</p>
      <p>At the first phase of the&nbsp;<strong><em>IEEE DAY 2023</em></strong>&nbsp;celebration,&nbsp;<strong><em>Dr. Shameem Ahmad</em>,</strong>&nbsp;<em>Counselor, IEEE AIUB Student Branch; Assistant Professor, Department of EEE, Faculty of Engineering, AIUB</em>, conducted the workshop titled&nbsp;<em>“<strong>Modeling and Analysis of PV Inverter using MATLAB/Simulink</strong>”</em>. He discussed PV panel output voltage, IPS, and power conversion, as well as designing single-phase inverters using MATLAB and hardware-in-loop setups. Additionally, discussed the role of DSP, microcontrollers, Arduino, and MATLAB in the design process.&nbsp; The transient period, H-bridge inverters, power electronic switches, pulse generation, initial stages, component selection, gate pulse generation, relationship of frequency and time in DC to AC conversion, and the significance of Total Harmonics Distortion in inverter output, including filter design and LC filter construction was explained. The workshop on PV inverters aligns with SDG 7 by promoting clean and affordable energy and supports SDG 13 by contributing to climate action using solar energy technology.</p>
      <p>The second phase of the event began with a moment of silence to honor and remember<strong>&nbsp;<em>Late</em>&nbsp;<em>Mr. A.N.M Nasimunnabi</em>,&nbsp;</strong><em>Chair of IEEE Young Professionals Bangladesh</em>, who passed away tragically on&nbsp;<strong>October 4, 2023,</strong>&nbsp;due to complications from dengue fever. Then&nbsp;<strong><em>Prof. Dr. A.B.M Siddique Hossain</em>,</strong>&nbsp;<em>Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch,&nbsp;</em>inaugurated the seminar session which was followed by a&nbsp;<strong>cake cutting ceremony&nbsp;</strong>to celebrate&nbsp;<strong><em>IEEE Day 2023</em></strong>. Afterwards, the honorable speaker&nbsp;<strong><em>Dr. Shahriar Khan</em>,&nbsp;</strong><em>Professor, Department of EEE, Independent University Bangladesh (IUB)&nbsp;took the stage to conduct a seminar on “<strong>Smart Power Systems: Automating Sustainability in the Age of Climate Change</strong>”.&nbsp;</em>He thanked the faculties and&nbsp;<strong><em>IEEE AIUB SB</em></strong>&nbsp;for inviting him to the session. He discussed a wide range of topics, such as automation, sustainability, and climate change, focusing on renewable energy which relates to&nbsp;<strong>SDG 13</strong>: “Climate Action”. He discussed solar energy and electric vehicles (EVs) and shared experiences from visits to power-generating facilities and discussed biofuels, global warming, and the future of oil production. Nuclear energy and climate change were also discussed. The speaker also discussed smart grid evolution, AI origins, and smart load tripping. The discussion concluded with IEEE’s opportunities and contributions to major global companies, followed by a Q&amp;A session.&nbsp;The seminar also explored the complexities of the modern world and the various forms of energy, aligning with various SDGs like&nbsp;<strong>SDG 7&nbsp;</strong><em>(Affordable and Clean Energy)</em>&nbsp;and&nbsp;<strong>SDG 12</strong>&nbsp;<em>(Responsible Consumption and Production)</em>.&nbsp;<strong><em>Prof. Dr. Mohammad Abdul Mannan,</em>&nbsp;</strong><em>Associate Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student&nbsp;</em><em>Branch,&nbsp;</em>presented the token of appreciation to the honorable speaker and gave his kind remarks for the session<em>.</em></p>
      <p>There was a&nbsp;<strong>poster presentation competition</strong>&nbsp;involving a total of thirteen groups from which the top three groups were awarded. The winners were judged by Distinguished faculty members&nbsp;<strong><em>Dr. Tanbir Ibne Anowar</em></strong>,&nbsp;<em>Associate Professor, Department of EEE, Faculty of Engineering, AIUB&nbsp;</em>and&nbsp;<strong><em>Dr. Rifat Hazari</em></strong>,&nbsp;<em>Senior Assistant Professor, Department of EEE, Faculty of Engineering, AIUB</em>;<em>&nbsp;Deputy Director, Dr. Anwarul Abedin Institute of Innovation;</em>&nbsp;The segment aimed to promote the integration of Sustainable Development Goals (SDGs) into projects and ideas. Attendees were encouraged to incorporate&nbsp;<strong>SDG</strong>&nbsp;<strong>7&nbsp;</strong><em>(affordable &amp; clean energy)</em>,<strong>&nbsp;SDG 9</strong>&nbsp;<em>(Industry, innovation, and infrastructure)</em>,&nbsp;<strong>SDG</strong>&nbsp;<strong>11</strong>&nbsp;<em>(sustainable cities and communities)</em>&nbsp;and&nbsp;<strong>SDG</strong>&nbsp;<strong>13</strong>&nbsp;<em>(Climate action)</em>. The poster presentation competition was followed by a lively cultural event. At the end of the event<em>&nbsp;<strong>Dr. Md. Saniat Rahman Zishan</strong></em><strong>,&nbsp;</strong><em>Director<strong>,&nbsp;</strong>Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch&nbsp;</em>&amp;<strong><em>&nbsp;Mr. Chowdhury Akram Hossain</em>,&nbsp;</strong><em>Department Head, CoE, Faculty of Engineering; Special Assistant, Office of Student Affairs (OSA), AIUB; Advisor, IEEE AIUB Student Branch,&nbsp;</em>declared the winners of the poster presentation competition. After the closing remarks, a photo session was arranged which concluded the session.</p>
      <p>The event was attended by around 100+ attendees, including IEEE members and non-members. Honorable faculty members&nbsp;<strong><em>Mr. Md. Shahariar Parvez</em></strong>,&nbsp;<em>Lecturer, Department of Computer Engineering, Faculty of Engineering, AIUB;</em>&nbsp;<strong><em>Mr. Tamim Hossain</em></strong>,&nbsp;<em>Lecturer, Department of EEE, Faculty of Engineering, AIUB,</em>&nbsp;also attended the daylong event.</p>
      <p>Link: <a href="https://www.aiub.edu/celebration-of-ieee-day-2023">https://www.aiub.edu/celebration-of-ieee-day-2023</a></p>`,
    },
    category: ``,
  },
  {
    id: 82,
    title: ` Seminar on ‘A Road to Erasmus Mundus Joint Masters (EMJM) and Erasmus Mundus Scholarship’`,
    body: {
      __html: `  				 	
      <p>On&nbsp;<strong>Sunday, 22th October 2023</strong>, the&nbsp;<strong>IEEE AIUB Student Branch</strong>&nbsp;organized a webinar titled&nbsp;<strong><em>“A Road to Erasmus Mundus Joint Masters (EMJM) and Erasmus Mundus Scholarship”</em>&nbsp;</strong>in collaboration with&nbsp;<strong><em>Erasmus Mundus Association Bangladesh</em></strong>.&nbsp;The main focus of the webinar was to aware students about the Erasmus Mundus Program and its benefits.</p>
<p><strong>Dr. Shameem Ahmad</strong><strong>,</strong>&nbsp;<em>Counselor, IEEE AIUB Student Branch; Assistant Professor, Department of EEE, Faculty of Engineering, AIUB</em>, inaugurated the webinar by emphasizing the significance of the Erasmus Mundus Scholarship program and sharing his expertise regarding the program. Additionally, he discussed the speaker and the speaker’s previous affiliations. Then,&nbsp;<strong><em>Mr. Sayed Muhammad Baker,</em>&nbsp;</strong><em>Country Representative for Bangladesh Erasmus Mundus Association (EMA AISBL); PhD Candidate,</em>&nbsp;<em>Technical University of Kaiserslautern, Germany;</em>&nbsp;<em>Project Engineer, COHERENT-DILAS Diodenlaser GmbH, Germany;&nbsp;</em>initiated the session by expressing his gratitude to IEEE AIUB Student Branch for organizing the webinar.</p>
<p>He began by giving a brief preview of the subjects he would cover, touching on scholarship eligibility, the application process, and sharing his own journey. Then, he delved into a thorough discussion of the Erasmus Mundus Scholarship, highlighting its significance as a fully funded option for international students to pursue a master’s degree at a consortium of European universities. He highlighted the scholarship’s benefits, such as gaining international exposure, language proficiency, and a global network. For the application process, he shared insights on program selection, website navigation, and crafting a persuasive motivation letter that conveys academic interests and career goals. He also covered vital documents, including CVs, recommendation letters, and English proficiency proof, offering tips for their preparation. He concluded by encouraging students to engage in extracurricular activities and research to showcase their potential and emphasized the value of participating in the Erasmus Mundus Scholarship for international experience.</p>
<p>With a strong commitment to advancing global education and progress, this webinar proudly serves as a beacon of knowledge and collaboration, in alignment with Sustainable Development Goal 4 (<em>SDG 4</em>), Quality Education, striving to ensure that every learner has access to a comprehensive, equitable, and enriching educational experience.&nbsp;<strong><em>Dr. Shameem Ahmad</em></strong>&nbsp;wrapped up the session with his closing remarks, expressing gratitude to&nbsp;<strong><em>Erasmus Mundus Association Bangladesh</em></strong>&nbsp;for their collaboration with&nbsp;<strong><em>IEEE AIUB Student Branch</em></strong>. He also presented a virtual token of appreciation on behalf of IEEE AIUB Student Branch to the speaker.</p>
<p>The webinar started at&nbsp;<strong>6:00 PM</strong>&nbsp;and ended at&nbsp;<strong>7:30 PM.</strong>&nbsp;A total of 80+ participants attended the webinar. Distinguished faculty members&nbsp;<strong><em>Dr. Md. Saniat Rahman Zishan,</em>&nbsp;</strong><em>Director, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch&nbsp;</em>and<strong>&nbsp;<em>Dr. Md. Ehasanul Haque</em></strong><em>,</em>&nbsp;<em>Department Head, IPE &amp; Senior Assistant Professor, Department of Engineering, AIUB&nbsp;</em>joined the webinar.</p>
<p>Link: <a href="https://www.aiub.edu/webinar-on-a-road-to-erasmus-mundus-joint-masters-emjm-and-erasmus-mundus-scholarship">https://www.aiub.edu/webinar-on-a-road-to-erasmus-mundus-joint-masters-emjm-and-erasmus-mundus-scholarship</a></p>
`,
    },
    category: ``,
  },
  {
    id: 83,
    title: `Webinar on “AIUBIANS on ERASMUS”`,
    body: {
      __html: `<!-- wp:paragraph -->
      <p>On <strong>Sunday, November 19, 2023</strong>, the <strong>IEEE AIUB Student Branch</strong> successfully organized a webinar titled <strong><em>“AIUBians on Erasmus.”</em></strong> The webinar aimed to provide an informative session for individuals passionate about availing themselves of the <strong>ERASMUS MUNDUS</strong> scholarship. The speakers were AIUB alumni who had successfully received this prestigious scholarship. They covered the fundamentals and offered helpful guidance on various Erasmus programs.</p>
      <p><strong><em>Dr. Shameem Ahmad</em></strong>, Assistant Professor, Faculty of Engineering, Department of EEE, AIUB; Counselor, IEEE AIUB Student Branch, conducted the inaugural session and then welcomed the speakers<strong><em>. Mr.  Mashrur Sakib Choyon</em></strong>, Engineer and Production Manager at Zimmer &amp; Peacock, conducted the first segment of the session. He provided insights into the programs, universities, and the countries providing the <em>Erasmus Mundus Joint Master’s Degree (EMJMD)</em> scholarship. He also talked about the requirements and the application procedure, emphasizing the importance of strong reference and motivation letters.</p>
      <p>The following segment was conducted by <strong><em>Ms.</em></strong> <strong><em>Tulsi Chowdhury</em></strong>, Technical Project Leader at Robert BOSCH GmbH. She discussed her involvement in the <em>Smart System Integrated Solutions (SSIs)</em> program, explaining the program's structure spanning four semesters across three universities. She also highlighted the program's benefits and future opportunities.</p>
      <p>The next session was conducted by <strong><em>Ms.</em></strong> <strong><em>Jannatul Mawa Akanto</em></strong>, who spoke about the <em>EMJMD in Smart Cities and Communities (SMACCs)</em>. Providing a brief overview of the essential pathways for applicants, she briefed about the SMACCs program and the universities offering it, concluding with insights from her personal experience. Following that, <strong><em>Mr. MD Kamrul Islam</em></strong> shared his experience of the <em>Renewable Energy in the Marine Environment (REM+)</em> program, and <strong><em>Mr. Dewan Mahnaaz Mahmud</em></strong> spoke about the <em>European master’s in dynamics of Renewables-based Power Systems (DREAM)</em>, providing the attendees with a concise overview of the program. Afterward, the session was conducted by <strong><em>Mr.</em></strong><em> <strong>Mohammad Jaber Hossain</strong></em>, discussing the details regarding the master’s Program in <em>Security and Cloud Computing (SECCLO)</em>. <strong><em>Mr. Mohammad Eyasin Rahman</em></strong> then talked about the <em>European Master in Embedded Computing Systems (EMECS)</em> program and shared his experiences. The <em>Erasmus Mundus master’s in biomedical engineering (EMMBIOME)</em> program was discussed by <strong><em>Mr. Osim Kumar Paul</em></strong>. In the concluding session,<strong> <em>Mr. Mohammad Mukit</em></strong>, PhD Researcher at Eindhoven University of Technology, gave an overview of the <em>Photonic Integrated Circuits, Sensors, and Networks (PIXNET)</em> program. He also discussed the <em>Photonics for Security, Reliability, and Safety (PSRS)</em> and <em>RADMEP</em> programs. Following the comprehensive presentations, a dynamic Q&amp;A session allowed attendees to delve deeper into the topics.</p>
      <p><strong><em>Dr. Md. Saniat Rahman Zishan</em></strong>, <em>Director of the Faculty of Engineering at AIUB and Advisor, IEEE AIUB Student Branch,</em> expressed gratitude to the speakers. He emphasized the importance of higher education and its transformative impact on personal and professional growth. He then presented a token of appreciation to the speakers and concluded the session. The webinar showcased the significance and benefits of ERASMUS programs, serving as a platform for concise educational information aligned with SDG 4 (Quality Education).</p>
      <!-- /wp:paragraph -->`,
    },
    category: ``,
  },
  {
    id: 84,
    title: `The IEEE AIUB SB successfully organized International Student Led-Conference 2023`,
    body: {
      __html: `<!-- wp:paragraph -->
      <p><strong>IEEE Bangladesh Section, IEEE </strong><strong>AIUB Student Branch</strong>, and <strong>IEEE NSU Student Branch</strong> jointly organized the <strong>International Student-Led Conference 2023</strong>. The conference was held at the <strong>Long Beach Hotel</strong> in <strong>Cox's Bazar, Bangladesh</strong> as a co-located conference of the <strong>26th International Conference on Computer and Information Technology (ICCIT)</strong> and the <strong>10th International Conference on Power Systems (ICPS) </strong>on<strong> 13<sup>th</sup> December 2023</strong>. The hybrid conference format allowed participants from all over the world to exchange scientific ideas. It featured seven competitive events titled the <em>Postgraduate Thesis Paper Contest, Postgraduate Research Paper Contest, Undergraduate Research Paper Contest, Undergraduate Thesis Paper Contest, Undergraduate Project Video Contest, Undergraduate Student Activity Video Contest, and IEEE Student Branch Website Contest.</em></p>
      <p>The purpose of the competitive events was to encourage innovation, teamwork, and technology for the benefit of humanity. The entries submitted for the competitions were exclusively centered on significant Sustainable Development Goals (SDGs) such as Good Health and Well-being (SDG 3), Affordable and Clean Energy (SDG 7), Responsible Consumption and Production (SDG 12), and Climate Action (SDG 13). The final round of the contests was held virtually on <strong>December 28th, 2023</strong>, and there was an closing ceremony on <strong>December 31st, 2023</strong>, on the Zoom meeting platform. The conference played a crucial role in connecting students and professionals, fostering long-term relationships for future collaborations.</p>
      <!-- /wp:paragraph -->`,
    },
    category: ``,
  },
  {
    id: 85,
    title: `Webinar on “Green Computing for AI: Compact and Energy-Efficient Compute-in-Memory”`,
    body: {
      __html: `<!-- wp:paragraph -->
      <p>On <strong>Monday, 22nd January 2024</strong>, the <strong>IEEE AIUB Student Branch</strong> in collaboration with the <strong>IEEE Industry Applications Society AIUB Student Branch Chapter</strong> and <strong>IEEE Computer Society AIUB Student Branch Chapter</strong> successfully hosted a webinar <em>titled <strong>“Green Computing for AI: Compact and Energy-Efficient Compute-in-Memory”</strong></em><strong>.</strong> The event emphasized the importance of integrating energy-efficient and compact compute-in-memory solutions into AI systems for high-performance and environmentally conscious AI applications.</p>
      <p>The seminar was inaugurated by <strong><em>Prof. Dr. Mohammad Abdul Mannan</em></strong>, <a name="_Hlk157089731"></a><em>Associate Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch.</em> During his speech, he briefly talked about artificial intelligence (AI) systems and then welcomed the speaker. Following that, <strong><em>Dr.</em></strong><em> <strong>Vijaykrishnan Narayanan</strong>; Robert Noll Chair Professor, Computer Science &amp; Engineering and Electrical Engineering, Pennsylvania State University, United States; Co-Director, Microsystems Design Lab; IEEE Fellow; Fellow, ACM; Fellow, National Academy of Inventors,</em> took the floor as the speaker of the webinar. During his presentation, he discussed several topics related to distributed intelligence, analytics, and processing with intelligent memory and storage. He also introduced the concept of 3D Flash Memory (3DFeM) and talked about AI and machine learning. Additionally, he presented the green training paradigm, explained the memory hierarchy, and discussed computing in memory. He provided an overview of PIM/3D architectures, introduced the concept of 3D SRAM LUT-driven Calculation in Memory, and talked about the implementation difficulties of PIM approaches. Lastly, he introduced the Bfree Architecture, its LUT Function, and discussed its potential applications. He covered Bfree Execution Flow, GraphR, and important considerations in developing new efficiency systems. A final speech expressed gratitude to the IEEE AIUB Student Branch for the invitation, followed by a Q&amp;A session.</p>
      <p>Finally, <strong><em>Prof. Mannan</em>,</strong> concluded the event by giving closing remarks and presenting a token of appreciation to the distinguished speaker. The webinar aimed to provide insights into the latest advancements and help attendees comprehend the potential applications, implications, and opportunities associated with compute-in-memory technology. The event highlighted recent developments in this field that align with Sustainable Development Goal 9 (Industry, Innovation, and Infrastructure) and Sustainable Development Goal 12 (Responsible Consumption and Production).</p>
      <p>The webinar began at <strong>08:10 PM </strong>and ended around <strong>09:30 PM</strong>. A total of more than 90 participants attended the webinar. Honorable faculty members <strong><em>Mr.</em></strong><em> <strong>Md. Ashiquzzaman</strong></em><strong>, </strong><em>Assistant Professor, <strong>Dr. Tanbir Ibne Anowar</strong></em><strong>, </strong><em>Associate Professor, <strong>Dr. Amirul Islam</strong></em><strong>, </strong><em>Assistant Professor </em>and <strong><em>Mr. Sujan Howlader</em>, </strong><em>Assistant Professor, </em>from the Department of EEE, Faculty of Engineering, AIUB<em>, </em>were also present as participants.</p>
      <!-- /wp:paragraph -->`,
    },
    category: ``,
  },
  {
    id: 86,
    title: `Seminar on “Emerging Research Highlights in Power & Energy”`,
    body: {
      __html: `<!-- wp:paragraph -->
      <p>On <strong>Wednesday</strong>, <strong>31<sup>st</sup> January 2024,</strong> the <strong>Department of EEE,</strong> <strong>Faculty of Engineering, AIUB,</strong> in collaboration with <strong>IEEE AIUB Student Branch </strong>successfully organized a seminar on <strong><em>“Emerging Research Highlights in Power &amp; Energy”</em></strong><strong>.</strong> The main goal of this session was to provide insights into the current developments in the power and energy sector while also motivating participants to engage in further research on this topic, particularly focusing on renewable energy.</p>
      <p>The event was inaugurated with a warm welcoming elocution of <a name="_Hlk85143749"></a><strong>Prof. Dr. ABM Siddique Hossain</strong>, <em>Dean, Faculty of Engineering, AIUB;</em> <em>Advisor, IEEE AIUB Student Branch</em><em>.</em> <em>He engaged in a comprehensive discussion on global issues pertaining to power and energy, underscoring their significance. Then, the floor was taken by the esteemed speaker of the session <strong>Dr. Rabiul Islam</strong></em><em>, Senior Lecturer, University of Wollongong, Australia.</em> <em>The speaker</em><em> emphasized the significance of research in advancing knowledge and resolving real-world challenges. He offered practical guidance for aspiring researchers by sharing insights into the recruitment process for research positions in companies. <strong>Dr. Islam</strong> discussed the rapidly evolving landscape of electric vehicles and urged a focus on fostering the skills of future engineers to cater to the growing demand in this sector. He also highlighted the challenges related to charging electric vehicles and proposed a new concept of universal charging stations. He emphasized the importance of problem-solving in engineering and discussed achieving 100% renewable energy utilization, including grid-connected systems, solar panel planning, offshore winds, wind turbine installation, and direct grid integration. He discussed ocean wave energy, new generators, solar panel costs, economic challenges in renewable energy, and power grid surveillance. He encouraged a research mindset and shared his experiences. In the Q&amp;A session, he enthusiastically answered all the queries.</em></p>
      <p>Following the Q&amp;A session, <strong>Prof. Dr. Mohammad Abdul Mannan, </strong><em>Associate Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch</em>, took the floor to share his insights as the concluding remarks of the session where he highlighted the speaker's credentials and discussed potential study opportunities in Australia. <strong>Dr. M Abdur Razzak, </strong><em>Professor, Department of EEE, IUB; SMIEEE, Fellow JSPS, Fellow IEB</em>, attended the seminar as the honorable guest. His presence added further prestige to the occasion, while contributing to the intellectual atmosphere of the gathering.</p>
      <p>The seminar successfully educated participants about power and energy, motivating them to conduct further research and generate innovative solutions. It highlighted the practical use of renewable energy, aligning with SDG 7 (Affordable and Clean Energy). Additionally, it emphasized reducing carbon emissions and provided perspectives on the power and energy sector, corresponding to SDG 9 (Industry, Innovation, and Infrastructure) and SDG 13 (Climate Action), respectively.</p>
      <p>The session began at <strong>2:00 PM</strong> and ended at <strong>4:00 PM</strong>. A total of 80+ participants attended the webinar. Honorable faculty members <strong>Mr. Nafiz Ahmed Chisty<em>,</em></strong><em> Associate Professor &amp; Department Head, Undergraduate Program; Advisor; IEEE AIUB Student Branch</em>; <strong>Mr. Chowdhury Akram Hossain,</strong> <em>Department Head, Computer Engineering (CoE),  Special Assistant, Office of Student Affairs (OSA), AIUB; Advisor, IEEE AIUB Student Branch;</em> <strong>Dr. Rifat Hazari,</strong> <em>Senior Assistant Professor,EEE,; Deputy Director, Dr. Anwarul Abedin Institute of Innovation;</em> <strong>Mr. Bishwajit Banik Pathik,</strong> <em>Assistant Professor,EEE;</em> <strong>Dr. Gour Chand Mazumder<em>,</em></strong><em> Assistant Professor, EEE</em>; <strong>Mr. Tamim Hossain<em>,</em></strong><em> Lecturer, EEE,</em>; <strong>Mr. Md. Shahariar Parvez<em>,</em></strong><em> Lecturer, CoE, </em>were present among the participants.</p>
      <!-- /wp:paragraph -->`,
    },
    category: ``,
  },
  {
    id: 87,
    title: `Seminar on “Beyond Boundaries: Electrochemical Sensors Shaping Tomorrow's World`,
    body: {
      __html: `<p>On <b>Wednesday, 7<sup>th</sup>February 2024</b>, the <b>IEEE AIUB Student Branch</b> successfully organized a seminar titled <b>“Beyond Boundaries: Electrochemical Sensors Shaping Tomorrow’s World”</b> in collaboration with the <b>IEEE Industry Applications Society (IAS) AIUB Chapter.</b> The objective of this session was to explore the intriguing domain of electrochemical sensors and their fundamental significance in reshaping the trajectory of future technologies.

                <p>The event was commenced by <b>Prof. Dr. ABM Siddique Hossain,</b> Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch with a heartfelt and welcoming speech. He started by commending the speaker's accomplishments, delivered his remarks about the topic and its significance. Additionally, he emphasized the advantages of IEEE membership, highlighting its benefits regarding journals, publications, and research opportunities. Afterwards, the distinguished speaker for the session, <b>Mr. Mashrur Sakib Choyon,</b> Engineer and Production Manager, Zimmer & Peacock Ltd; took the stage. He delved into the details of the company he works for, and the technology involved. Encouraging the audience, he emphasized the importance of setting goals in life. Moving on, he provided a detailed explanation of electrochemistry and its applications, particularly in biosensors. The speaker also touched upon the topic of addictive functions before demonstrating the uses and functionality of screen printing. Furthermore, he described the company's technology stack and discussed the growing trend in European countries of measuring the spiciness of chili. The speaker elaborated on his company's <b>“Agri-Tech”</b> project and discussed their ongoing work in microbiology. Additionally, he mentioned the various types of tests they conduct and emphasized the relevance of chemical sensors in ensuring food quality and safety. At the end of his presentation, there was an interactive Q&A session.</p>

                <p>Following the Q&A session, <b>Prof. Dr. Mohammad Abdul Mannan,</b> <i>Associate Dean, Faculty of Engineering, AIUB; Advisor, IEEE AIUB Student Branch,</i> took the floor to provide his thoughts during the session's closing remarks, highlighting the accomplishments and works of the speaker.</p>

                <p>The seminar shed light on the implications of electrochemical sensors, aligning with various Sustainable Development Goals. It emphasized the role of electrochemical sensors in medical diagnostics and monitoring, thereby contributing to the goal of <b>Good Health and Well-Being.</b> Furthermore, it highlighted their significance in detecting water pollutants and ensuring access to safe drinking water, aligning with <b>Clean Water and Sanitation.</b></p>

                <p>The session began at <b>3:00 PM</b> and ended around <b>4:30 PM.</b> A total of 60+ participants attended the seminar. Honorable faculty member <b>Dr. MD. Rukonuzzaman</b> also attended the seminar, whose presence added further significance to the occasion. was among the participants.</p>`,
    },
    category: ``,
  },
  {
    id: 88,
    title: `Scientific visit to Secondary Standard Dosimetry Laboratory (SSDL) funded by IEEE EMBS`,
    body: {
      __html: `<p>On <strong>February 28<sup>th</sup>, 2024</strong>, the <strong>IEEE EMBS AIUB Student Branch Chapter</strong> organized a scientific visit to the <strong>Secondary Standard Dosimetry Laboratory (SSDL)</strong> located at the <strong>Atomic Energy Research Establishment (AERE)</strong>, <strong>Institute of Nuclear Science and Technology (INST), Ganakbari, Savar, Dhaka</strong>. The visit aimed to promote practical understanding and knowledge exchange in the field of nuclear science, application of engineering principles to radiology, medicine, and healthcare to provide effective solutions to related problems, which falls within the field of interest of the <strong>IEEE EMBS</strong>. The visit was also supported by the <strong>IEEE</strong> <strong>Engineering in Medicine and Biology Society (EMBS)</strong>.</p> 

        <p>The <strong>IEEE Engineering in Medicine and Biology Society (EMBS)</strong> is a prominent international organization within the <strong>IEEE</strong>, which focuses on advancing the application of engineering and technology in medicine and biology. <strong>EMBS</strong> grants <strong>Chapter Project Initiative Funding</strong> awards to its chapters, student chapters, and clubs to initiate impactful initiatives. The <strong>IEEE Engineering in Medicine and Biology Society (EMBS) AIUB Student Branch Chapter </strong>was awarded this funding for taking the initiative to organize an impactful scientific visit. The funds were utilized to arrange the visit to the <strong>Secondary Standard Dosimetry Laboratory</strong>, which aimed to delve deeper into the field of biomedical engineering and create an impact.</p>

        <p>The program began with an inaugural session conducted by <strong>Dr. Swapan Kumar Chakraborty,</strong> <em>Director &amp; CSO</em>, <em>Scientific Information Unit, AERE</em>. During this session, the participants were introduced to the operations and functions of the facility, which set the stage for an enriching day ahead. Following the inaugural session, <strong>Dr. Shakilur Rahman</strong>, <em>Chief Scientific Officer &amp; Director, NSSSD, BAEC</em>, led a comprehensive briefing session covering topics ranging from the basics of radioactivity, radiation, and nuclear medicine to the intricate schemes for radiation protection. His expertise illuminated key concepts, providing attendees with a solid foundation for the day's activities.</p>

        <p>The most noteworthy aspect of the visit was the tour of the laboratories situated within the SSDL. Led by <strong>Dr. Shakilur Rahman</strong>, the tour offered firsthand insights into the methodologies and equipment utilized in activities such as whole-body counting, gross alpha-beta counting, beta and gamma calibration, gamma spectrometry, and many more. The interactive nature of the tour allowed participants to engage directly with cutting-edge technologies and procedures, enhancing their understanding of practical applications in the field of radiology and nuclear medicine. The visit concluded with a brief closing ceremony and a pleasant lunch. Participants left with newfound knowledge and a deeper appreciation for the complexities of radiation-related research and applications.</p>

        <p>SSDL calibrates dosimetry equipment used in medical procedures that rely on ionizing radiation for diagnosis and treatment. This helps in measuring the amount of radiation delivered and in ensuring the safety of staff and the public. The contents, procedures, and objectives of each laboratory within the SSDL are entirely dedicated to human health and radiation protection, aligning closely with the 17<sup>th</sup> Sustainable Development Goal <strong>"Good Health and Well-being"</strong>.&nbsp; A total of <strong>25 Selected </strong>Participants, mostly IEEE Student members attended the visit, along with honorable faculty members <strong>Dr. Shameem Ahmad</strong>, <em>Assistant Professor, Dept. of EEE, AIUB</em> and <strong>Dr. Humayra Ferdous</strong><em> Associate Professor, Department Head, Department of Natural Science [Physics], AIUB. </em></p>
`,
    },
    category: ``,
  },
  {
    id: 89,
    title: `Seminar on “Navigating Higher Education Opportunities at Indiana Tech University”`,
    body: {
      __html: `On <strong>Monday</strong>, <strong>12<sup>th</sup> February 2024,</strong> the <strong>IEEE AIUB Student Branch</strong> successfully organized a seminar on <strong>“Navigating Higher Education Opportunities at Indiana Tech”</strong><strong>.</strong> The prime aim of this session was to provide valuable information about pursuing higher education at <strong>Indiana Tech, USA</strong> with the conjunction of <strong>Education USA </strong>so the audience can have an idea about the academic programs, admission process and the opportunities provided by the university.
      The <em>esteemed speaker of the session </em><strong>Sharmila Chowdhury, </strong><em>Director of International Admissions, Indiana Tech, USA, </em>commenced the event where she began by sharing her journey from Bangladesh to <strong>Indiana Tech</strong>, offering insights into her personal background. She emphasized the significance of thorough research before embarking on a study path, while also shedding light on the diverse opportunities available to students. Providing a glimpse into <strong>Indiana Tech's</strong> dynamic environment, she discussed its range of activities, degree programs, and vibrant student community. <strong>Ms.</strong> <strong>Sharmila </strong>highlighted the importance of financial management, in addition to highlighting the campus amenities and support services offered by <strong>Indiana Tech</strong>. She delved into the institution's focus on career-oriented education and shared inspiring success stories, offering practical tips on resume building and navigating work permits. She thoroughly outlined details regarding the application process, required documents, and the overall cost of pursuing a graduate degree. Then she encouraged prospective applicants to explore the campus virtually. The speaker shared testimonials from international students and drew insightful comparisons between the education systems of the USA and Bangladesh, drawing from her own experiences. As the session neared its end, the speaker thanked the attendees and passed the stage to <strong>Sheak Md. Shabuddin</strong>. <em>Advisor, Education USA.</em> He offered a clear and concise summary of Education USA, highlighting its crucial role in assisting students with navigating the intricacies of American study programs and educational systems. He emphasized the importance of prioritizing opportunities over rankings, highlighting the practical benefits of seeking guidance from <strong>Education USA</strong>. Additionally, <strong>Mr.</strong> <strong>Sheak</strong> informed attendees about upcoming events and information available on the <strong>Education USA</strong> website. The session concluded with him expressing his appreciation to the audience for their active participation.
      An interactive Question-Answer session took place after the session where the speakers enthusiastically responded to all the queries of the fellow participants. Following the Q/A session, <strong>Dr.</strong> <strong>Shameem Ahmad, </strong><em>Counselor, IEEE AIUB Student Branch; Assistant Professor, Department of EEE, Faculty of Engineering, AIUB, </em>took the floor to share his insights as the concluding remarks of the session where he highlighted the speaker's credentials and discussed potential study opportunities in the USA.
      The seminar effectively delivered insights into pursuing higher education at <strong>Indiana Tech University.</strong> Through its promotion of high-quality education and facilitation of access to opportunities, the seminar effectively aligned with <strong>SDG 4 (<em>Quality Education</em>).</strong>
      The session started at <strong>12:00 PM</strong> and ended at <strong>1:30 PM</strong>. A total of 50+ participants attended the seminar.`,
    },
    category: ``,
  },
  {
    id: 90,
    title: `Webinar on “Data-Driven Electric Vehicle Customer Profiling”`,
    body: {
      __html: `Electric vehicles (EVs) are revolutionizing the automotive industry with their sustainable and efficient mode of transportation. As the demand for EVs continues to grow, understanding the preferences and behaviors of electric vehicle customers becomes crucial for manufacturers, policymakers, and other stakeholders. In this context, the IEEE AIUB Student Branch is organizing a webinar titled “Data-Driven Electric Vehicle Customer Profiling.”
      This webinar will delve into the intersection of data analytics and electric vehicle adoption, exploring how data-driven insights can inform marketing strategies, infrastructure planning, and policy decisions related to electric vehicles. By analyzing various data sources such as consumer surveys, vehicle usage patterns, and charging behaviors, participants will gain valuable insights into the diverse needs and preferences of electric vehicle customers.`,
    },
    category: ``,
  },
  {
    id: 91,
    title: `Seminar titled “IEEE USER-AWARENESS SESSION-2024”`,
    body: {
      __html: `On <strong>Monday, 27th May 2024</strong>,<strong> American International University-Bangladesh</strong> successfully hosted an informative seminar titled <strong>“IEEE USER-AWARENESS SESSION-2024”</strong>. The goal of this seminar was to inform attendees on IEEE resources and how to use them for research and career advancement.<br>
      The event was inaugurated with a warm welcoming elocution of <strong>Prof. Dr. ABM Siddique Hossain</strong>, <em>Dean, Faculty of Engineering, AIUB</em>. He at first praised the speaker for his achievements and then engaged in a comprehensive discussion on <strong>IEEE</strong> and its significance. Then, the floor was taken by the esteemed speaker of the session <strong>Mr. Ranbir S Sedhey,</strong> <em>IEEE International Client Service Manager</em>. The speaker discussed the reasons for holding <strong>IEEE</strong> sessions and touched upon various other platforms within <strong>IEEE</strong>. He spoke about his efforts to raise awareness about <strong>IEEE</strong> and emphasized the organization's 140 years of existence. In addition, he discussed various publications such as journals, hybrid journals, and eBooks, as well as IEEE eLearning and free resources. He also mentioned access to patent citations, Google Scholar CASA, IEEE Xplore features, and remote access. Moreover, he highlighted the opportunities to participate in webinars and access the Journal Citation Report. The speaker also mentioned that there have been 2000 IEEE conferences hosted worldwide, and he discussed the IEEE Standard Association and popular topics within IEEE. He talked about access to journals and conferences through Nokia's Bell Labs technical and collaborations with AIUB, their journal publications, and IEEE conferences. He demonstrated live use of IEEE Xplore, discussed climate change research and featured articles within IEEE, and mentioned IEEE Collabratec, author profiles, advanced search features, and IEEE DATAPORT.<br>
      The seminar highlighted its contribution to several Sustainable Development Goals (SDGs), including SDG 4 (Quality Education) through its educational platforms and resources, SDG 9 (Industry, Innovation, and Infrastructure) through its long history and innovation-promoting activities, SDG 13 (Climate Action) by raising awareness on climate change research, and SDG 17 (Partnerships for the Goals) by fostering collaborations with organizations like Nokia's <strong>Bell Labs</strong>, <strong>AIUB</strong>, and <strong>IEEE Standard Association</strong>.<br>
      The session began at <strong>12:00 PM </strong>and ended around <strong>1:00 PM</strong>. A total of 60+ participants attended the seminar. This seminar was supported by IEEE AIUB Student Branch.&nbsp;&nbsp;
      `,
    },
    category: ``,
  },
  {
    id: 92,
    title: `IEEE Student Professional Awareness Venture (SPAVe) 7.0`,
    body: {
      __html: `On <strong>Thursday, June 6, 2024, </strong>the <strong>IEEE AIUB Student Branch </strong>successfully organized the 7<sup>th</sup> rendition of the <strong>IEEE USA</strong> &amp; <strong>SPAA</strong> branded flagship event, the <strong>IEEE Student Professional Awareness Venture 7.0 (SPAVe 7.0) </strong>at <strong>American International University-Bangladesh. </strong>The venture was greatly supported by <strong>American International University-Bangladesh </strong>and technically supported by <strong>IEEE, IEEE Bangladesh Section </strong>and <strong>IEEE Young Professionals Bangladesh. </strong>It was also sponsored by <strong>Bachar Engineering Ltd</strong>, supported by <strong>GIGABYTE Bangladesh</strong> as the technology partner, and <strong>Kishwan Group</strong> as the Food Partner. The primary emphasis of the event was a sequence of sessions aimed towards enhancing professional skills and career growth.<br>
      The daylong event commenced with an inaugural speech delivered by <a name="_Hlk168746084"><strong>Prof. Dr. A.B.M Siddique Hossain, </strong><em>Dean, Faculty of Engineering, AIUB</em></a><em>,</em> who covered the importance of cultivating passion in the present and diligently working to attain career success. Following the inaugural address, <strong>Dr. Shameem Ahmad</strong>,<em> Assistant Professor, Faculty of Engineering, AIUB; Counselor, IEEE AIUB Student Branch, </em>led the first session of the venture. The session was titled “<strong>How to Choose Research Projects Aligned with UN Sustainable Development Goals</strong>”. He discussed the topic of Sustainable Development Goals (SDGs), highlighting their significance across various fields and the necessity of their proper understanding. He emphasized the role of research, quality education, and renewable energy in achieving SDGs, particularly in addressing climate change issues, and encouraged participants to implement projects aligned with these goals. The next session was titled “<strong>The Mechanics of Power Distribution: Inside Substation Operations</strong>” conducted by <a name="_Hlk168746343"><strong>Eng. SK. Abid Hossain, </strong><em>Deputy General Manager, Bachar Engineering Ltd</em>.</a> This was followed by a short Q&amp;A session by <strong>GIGABYTE Bangladesh </strong>and lunch break.<br>
      <strong>Prof.</strong> <strong>Dr. Celia Shahnaz, </strong><em>2023-24 IEEE WIE Committee Chair; Professor, Department of EEE, BUET, </em>commenced the next session titled “<strong>Diversity and Inclusion for Women Empowerment and Advancement</strong>”. She spoke about the opportunities and potential in engineering for female students through WIE, touching on research, innovation, collaboration, and knowledge sharing. The subsequent session titled “<strong>AI Driven Smart Technology for Smart Future</strong>” was conducted by <strong>Prof.</strong> <strong>Dr. Shaikh Anwarul Fattah, </strong><em>Professor, Department of EEE, BUET; Director, Institute of Robotics and Automation, BUET (IRAB)</em>. He accentuated the transformative impact of AI and smart technologies on industries and daily life, highlighting the need for understanding, planning, skill development, and leveraging these technologies for innovation and automation. <strong>Muhammad Abdul Bari, </strong><em>Head of IT (Associate Director), BRAC Enterprises, </em>was the speaker for the latter session titled “<strong>Navigating the Workforce: A Guide for STEM Graduates</strong>”, where he demonstrated the necessity for engineers to prepare for various career paths by developing both technical and soft skills, gaining relevant experience, and being ready for new challenges. The last session of the venture titled “<strong>Innovative Minds: Cultivating Entrepreneurship in the Modern Era</strong>” was held by <strong>Ghulam Sumdany Don, </strong><em>Chief Inspirational Officer, Don Sumdany Facilation; Managing Director, DS Education. </em>He emphasized the importance of encouraging entrepreneurship by identifying market gaps, maintaining a positive and adaptable mindset, demonstrating persistence, taking risks, and being willing to take action. Following the session, <strong>Dr. Shameem Ahmad</strong> delivered the closing remarks. The event concluded with a cultural performance by <strong>AIUB Performing Arts Club (APAC)</strong>, an appreciation ceremony, delivering the Best Ambassador Award, and a group photo session.<br>
      The initiative highlighted its commitment to several Sustainable Development Goals (SDGs). <strong>SDG 4 (Quality Education)</strong> and <strong>SDG 5 (Gender Equality)</strong> connects with sessions on how to choose research projects aligned with SDGs, diversity and inclusion in education for women empowerment, and preparing STEM graduates for the workforce. <strong>SDG 7 (Affordable and Clean Energy)</strong> and <strong>SDG 13 (Climate Action)</strong> ties directly to the discussion on the role of renewable energy in achieving SDGs and the emphasis on addressing climate change issues through research, quality education, and renewable energy. Encouraging entrepreneurship and preparing graduates for diverse career paths align with <strong>SDG 8 (Decent Work and Economic Growth)</strong>. <strong>SDG 9 (Industry, Innovation, and Infrastructure)</strong> aligns perfectly with the discussions of the transformative impact of AI and smart technologies on industries and daily life.<br>
      This mega flagship event featured <strong>170+</strong> participants from various universities around the nation including Ahsanullah University of Science and Technology (AUST), Rajshahi University of Engineering &amp; Technology (RUET), Bangladesh University of Professionals (BUP), Daffodil International University (DIU), North South University (NSU), East West University (EWU), National University (NU), Prime University (PU), University of Asia Pacific (UAP), and Bangladesh University of Business and Technology (BUBT). Additionally, the event was attended by several honorable faculty members including <strong>Dr. Md Saniat Rahman Zishan, </strong><em>Director<strong>, </strong>Faculty of Engineering, AIUB, </em><strong>Chowdhury Akram Hossain</strong><em>, Department Head, CoE, Faculty of Engineering, Special Assistant, Office of Student Affairs (OSA), AIUB, </em><strong>Dr. Mohammad Hasan Imam</strong><em>, Associate Professor, Faculty of Engineering, AIUB, </em><strong>Dr. Muhibul Haque Bhuyan, </strong><em>Professor, Faculty of Engineering, AIUB, </em><strong>Mahamudul Hassan, </strong><em>Assistant Professor,</em> <em>Faculty of Engineering, AIUB</em><strong>, Md. Shahariar Parvez, </strong><em>Lecturer Faculty of Engineering, Special Assistant, Office of Student Affairs (OSA), AIUB </em>and <strong>Tamim Hossain, </strong><em>Lecturer, Faculty of Engineering, AIUB.</em><em></em>`,
    },
    category: ``,
  },
];

function BackgroundPattern() {
  return (
    <>
      <div
        className="relative mx-auto h-full max-w-prose text-lg"
        aria-hidden="true"
      >
        <svg
          className="absolute top-12 left-full translate-x-32 transform"
          width={404}
          height={384}
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={384}
            fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
          />
        </svg>
        <svg
          className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
          width={404}
          height={384}
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={384}
            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
          />
        </svg>
        <svg
          className="absolute bottom-12 left-full translate-x-32 transform"
          width={404}
          height={384}
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="d3eb07ae-5182-43e6-857d-35c643af9034"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={384}
            fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
          />
        </svg>
      </div>
    </>
  );
}

export default function Post({ params }) {
  // if(isNaN(params.id)) return notFound();
  // else if (params.id > 74 || params.id < 1) return notFound();

  let post = posts.filter((post) => post.id == params.id)[0];
  if (!post) notFound();

  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
        <BackgroundPattern />
      </div>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-lg">
          <h1>
            <span className="block text-center text-lg font-semibold text-cyan-600">
              {post.category}
            </span>
            <span className="mt-2 block text-center text-4xl font-bold leading-8 tracking-tight text-gray-900 sm:text-5xl">
              {post.title}
            </span>
          </h1>
        </div>
        <div
          className="max-w-5xl prose-lg prose-indigo mx-auto mt-6 text-gray-500 text-justify"
          dangerouslySetInnerHTML={post.body}
        ></div>
      </div>
    </div>
  );
}
