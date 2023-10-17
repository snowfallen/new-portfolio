<template>
  <div id="experience">
    <div class="container mb-5">
      <nav>
        <menu>
          <li @click="this.changeSlide(0)" class="nav-item">
            ETER-MED
          </li>
          <li @click="this.changeSlide(1)" class="nav-item">
            Deosite
          </li>
          <li @click="this.changeSlide(2)" class="nav-item">
            Freelance
          </li>
          <li @click="this.changeSlide(3)" class="nav-item">
            Promin
          </li>
        </menu>
      </nav>
      <div class="exp">
        <div class="carousel">
          <MyJobHistory v-for="experience in experiences" :key="experience" :experience="experience"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import MyJobHistory from "@/components/blocks/MyJobHistory.vue";

interface Experience {
  titles: string;
  baseInfos: string;
  experienceSummary: string;
  experienceDescription: string[][];
  skills: string;
}

interface Experiences {
  experiences: Experience[];
}

export default defineComponent({
  name: "MyJobHistories",
  components: {
    MyJobHistory
  },

  data(): Experiences {
    return {
      experiences: [
        {
          titles: 'Full Stack Developer',
          baseInfos: 'ETER-MED · Full-time Oct 2022 - Jul 2023 · Gdańsk, Pomorskie, Poland',
          experienceSummary: 'Designed, created and updated a web applications for clinic staff by Laravel and Vue.js:',
          experienceDescription: [
            ['Created a robust web application using Laravel and Vue.js tailored for clinic staff, enhancing their workflow efficiency. '],
            ['Implemented cloud uploading functionality for file storage and retrieval.'],
            ['Integrated Apache Solr to enable efficient searching of files, articles, and categories.'],
            ['Wrote Bash scripts to expedite developer tasks.'],
            ['Utilized Docker and created a docker-compose files for seamless projects deployment. '],
            ['Configured and ran the projects in Jenkins for automated builds and deployments. '],
            ['Streamlined the email delivery process to enhance website speed and performance.'],
            ['Contributed to multiple projects by implementing new features and enhancements. '],
            ['Provided ongoing support and maintenance for legacy projects.'],
            ['Actively participated in code reviews to ensure code quality and adherence to best practices.']
          ],
          skills: 'PHP · JavaScript · Laravel · Vue.js · Git · Docker · Jenkins · Front-End Development · Back-End Web Development · Agile Methodologies · Remote Teamwork · Visual Communication · Scrum · AJAX · MySQL · Object-Oriented Programming (OOP) · Cascading Style Sheets (CSS) · HTML · SQL · Bootstrap · Apache Solr · HTML5 · jQuery',
        },
        {
          titles: 'Backend Developer',
          baseInfos: 'Deosite / creating desire · Full-time Jan 2022 - Sep 2022 · Gdańsk, Pomorskie, Poland',
          experienceSummary: 'Engaged in the development and modification of online stores:',
          experienceDescription: [
            ['Developed Symfony controllers, helpers, twig templates, and other components. '],
            ['Developed a custom Magento 2 module to streamline the administration of discount coupons, simplifying the workflow. '],
            ['Modified an existing module for delivery and shipping to meet specific business requirements.'],
            ['Utilized the M2E Pro plugin to create over 100 new product templates for the eBay shop, optimizing the listing process. '],
            ['Collaborated with the team to gather requirements, implement new features, and troubleshoot issues.'],
            ['Engaged in the planning phase to acquire a comprehensive understanding of the project\'s requirements and objectives.']
          ],
          skills: 'PHP · JavaScript · Symfony Framework · Git · Docker · Front-End Development · Back-End Web Development · Agile Methodologies · Remote Teamwork · Visual Communication · Written Communication · Scrum · AJAX · MySQL · Object-Oriented Programming (OOP) · Cascading Style Sheets (CSS) · HTML · SQL · Magento 2 · jQuery'
        },
        {
          titles: 'Freelance Full-Stack Developer',
          baseInfos: 'Freelance May 2020 - Oct 2022',
          experienceSummary: 'Made many different web projects:',
          experienceDescription: [
            ['Translated designs from Figma, PSD, and other formats into semantic, accessible, and valid HTML templates using HTML5, CSS3 (SCSS), and JavaScript.'],
            ['Developed a robust backend using PHP and utilized Laravel and Vue.js to build a full-featured web application.'],
            ['Designed and implemented the frontend and backend components to deliver a seamless user experience.'],
            ['Integrated various APIs and third-party services to enhance the functionality of the application.'],
            ['Implemented authentication and authorization mechanisms to ensure data security and user privacy.'],
            ['Optimized application performance and scalability through efficient database design and query optimization techniques.'],
            ['Conducted thorough testing and debugging to ensure the application\'s stability and reliability.']
          ],
          skills: 'PHP · JavaScript · Laravel · Vue.js · Git · Docker · Jenkins · Front-End Development · Back-End Web Development · Remote Teamwork · Written Communication · AJAX · MySQL · Cascading Style Sheets (CSS) · HTML · SQL · Gulp.js · Scss · Bootstrap · SASS · HTML5 · jQuery',
        },
        {
          titles: 'Internet Network Specialist and System Administrator',
          baseInfos: 'AUTO COOPERATIVE "Promin" · Full-time Jan 2016 - Jun 2018 · Cherkasy, Cherkasy, Ukraine',
          experienceSummary: 'Administration of computers and Internet networks:',
          experienceDescription: [
            ['Implemented of fiber optic connectivity in residential buildings, bringing high-speed internet access to residents.'],
            ['Configured and established PPPoE connections on clients\' computers, enabling them to connect to the fiber optic network.'],
            ['Provided comprehensive setup and configuration services for clients\' computers, ensuring optimal performance and functionality.'],
            ['Administered and maintained computers running Linux and Windows operating systems, addressing technical issues and ensuring smooth operations.'],
            ['Conducted troubleshooting and diagnostic tasks to resolve hardware and software issues, ensuring minimal downtime.'],
            ['Assisted clients in software installations, updates, and configuration adjustments to meet their specific requirements.'],
            [' Provided technical support and guidance to clients, resolving technical inquiries and issues in a professional and efficient manner.']
          ],
          skills: 'Visual Communication · Cascading Style Sheets (CSS) · HTML · SQL · Linux · Network Administration · System Administration · Computer Hardware · Transmission Control Protocol (TCP) · Windows · Internet Protocol Suite (TCP/IP) · PPPoE'
        }
      ]
    }
  },
  methods: {
    changeSlide(index: number): void {
      const carousel = document.querySelector('.carousel') as HTMLElement;
      carousel.style.transform = `translateX(-${index * 100}%)`;

      const navItems = document.querySelectorAll('.nav-item');
      navItems.forEach(item => item.classList.remove('active'));
      navItems[index].classList.add('active');
    }
  },
  mounted() {
    window.addEventListener('scroll', function () {
      const navItems = document.querySelectorAll('.nav-item');
      const sections = document.querySelectorAll('.item');

      let currentSectionIndex = 0;
      for (let i = 0; i < sections.length; i++) {
        const rect = (sections[i] as HTMLElement).getBoundingClientRect();
        if (rect.top <= 0) {
          currentSectionIndex = i;
        }
      }

      navItems.forEach(item => item.classList.remove('active'));
      navItems[currentSectionIndex].classList.add('active');
    });
  }
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

#experience {
  width: 100vw;
  height: 100%;
  justify-content: center;
  display: flex;
  padding-top: 150px;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

nav {
  width: 100%;
  height: 10%;
}

nav menu {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #4a33dd;
}

nav menu li {
  font-size: 100%;
  padding: 10px;
  cursor: pointer;
  border: 0;
}

.exp {
  width: 100%;
  height: 90%;
  overflow: hidden;
}

.exp .carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
  backface-visibility: hidden;
}

.exp .carousel .item {
  padding: 20px;
  min-width: 100%;
}

.nav-item {
  transition: 0.6s;
}

.active {
  color: mediumpurple;
  transition: 0.6s;
}
</style>