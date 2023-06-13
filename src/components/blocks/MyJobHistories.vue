<template>
  <div id="experience">
    <div class="container mb-5">
      <h1 class="text-center">My Work Experience</h1>
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
          titles:'Junior Full Stack Developer',
          baseInfos: 'ETER-MED · Full-time Oct 2022 - Jul 2023 · Gdańsk, Pomorskie, Poland',
          experienceSummary: 'Designed and created a web application for clinic staff by Laravel and Vue.js:',
          experienceDescription: [
              ['Designed UI , UX, database and tables for project, developed Frontend and Backend, implement' +
              'cloud uploading functionality, added searching files, articles and category possibility by' +
              'Apache Solr, created a docker-compose file for my project, ran project in Jenkins.'],
              ['Modified the several projects by adding new features.'],
              ['Created the images with Docker Compose for our projects.'],
              ['Supported old projects.'],
              ['Engaged in code review.']
          ],
          skills: 'PHP · JavaScript · Laravel · Vue.js · Git · Docker · Jenkins · Front-End Development · Back-End Web Development · Agile Methodologies · Remote Teamwork · Visual Communication · Scrum · AJAX · MySQL · Object-Oriented Programming (OOP) · Cascading Style Sheets (CSS) · HTML · SQL · Bootstrap · Apache Solr · HTML5 · jQuery',
        },
        {
          titles: 'Intern Backend Developer',
          baseInfos: 'Deosite / creating desire · Full-time Jan 2022 - Sep 2022 · Gdańsk, Pomorskie, Poland',
          experienceSummary: 'Engaged in the development and modification of online stores:',
          experienceDescription: [
              ['Created a Magento 2 module to simplify the work of the admin with discount coupons'],
              ['Made the email templates for Magento 2.'],
              ['Modifieded a Magento 2 module for delivery and shipping'],
              ['Created more than 100 new products templates to eBay shop using M2E Pro plugin for Magento 2'],
              ['Created a simple Symfony Controllers , Helpers, Twig templates and other components']
          ],
          skills: 'PHP · JavaScript · Symfony Framework · Git · Docker · Front-End Development · Back-End Web Development · Agile Methodologies · Remote Teamwork · Visual Communication · Written Communication · Scrum · AJAX · MySQL · Object-Oriented Programming (OOP) · Cascading Style Sheets (CSS) · HTML · SQL · Magento 2 · jQuery'
        },
        {
          titles: 'Freelance Programmer',
          baseInfos: 'Freelance May 2021 - Oct 2022',
          experienceSummary: 'Made many different web projects:',
          experienceDescription: [
              ['Converted from figma , psd and other formats into semantic, accessible and valid HTML templates with HTML5, CSS3 (SCSS) and JS'],
              ['Created a backend with PHP and built a full featured web app with Laravel + Vue.js']
          ],
          skills: 'PHP · JavaScript · Laravel · Vue.js · Git · Docker · Jenkins · Front-End Development · Back-End Web Development · Remote Teamwork · Written Communication · AJAX · MySQL · Cascading Style Sheets (CSS) · HTML · SQL · Gulp.js · Scss · Bootstrap · SASS · HTML5 · jQuery',
        },
        {
          titles: 'Internet Network Specialist and System Administrator',
          baseInfos: 'AUTO COOPERATIVE "Promin" · Full-time Jan 2016 - Jun 2018 · Cherkasy, Cherkasy, Ukraine',
          experienceSummary: 'Administration of computers and Internet networks:',
          experienceDescription: [
              ['Brought fibre to residential buildings'],
              ['Connected the clients\' computer to the using PPPoE'],
              ['Engaged in administration of computers with Linux and Windows operating systems.'],
              ['Set up the clients\' computer']
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
}

nav menu li {
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
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