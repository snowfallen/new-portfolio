<template>
  <div>
    <div class="skills d-flex flex-wrap flex-column gap-5">
      <div class="card-container">
        <div class="card__front d-flex justify-content-center flex-column"><h2>Frontend</h2></div>
        <div class="card__back">
          <div>
            <div><p class="skill-tooltip">JavaScript (JS) <span class="tooltip-text">A programming language for creating interactive websites. <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">Documentation</a></span>
            </p></div>
            <div><p class="skill-tooltip">TypeScript (TS) <span class="tooltip-text">An extension of JavaScript with added type checking. <a
                href="https://www.typescriptlang.org/docs/" target="_blank">Documentation</a></span></p></div>
            <div><p class="skill-tooltip">Vue.js <span class="tooltip-text">A flexible JavaScript framework for building web interfaces. <a
                href="https://vuejs.org/v2/guide/" target="_blank">Documentation</a></span></p></div>
            <div><p class="skill-tooltip">React <span class="tooltip-text">A library for creating user interfaces in JavaScript. <a
                href="https://reactjs.org/docs/getting-started.html" target="_blank">Documentation</a></span></p></div>
            <div><p class="skill-tooltip">HTML <span class="tooltip-text">A language for structuring web pages. <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">Documentation</a></span></p>
            </div>
            <div><p class="skill-tooltip">CSS <span class="tooltip-text">A styling language for web pages. <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">Documentation</a></span></p>
            </div>
            <div><p class="skill-tooltip">SCSS (Sass) <span class="tooltip-text">An extension of CSS with added features. <a
                href="https://sass-lang.com/documentation" target="_blank">Documentation</a></span></p></div>
          </div>

        </div>
      </div>
      <div class="card-container">
        <div class="card__front d-flex justify-content-center"><h2>Backend</h2></div>
        <div class="card__back">
          <div>
            <div><p class="skill-tooltip">PHP <span class="tooltip-text">A server-side scripting language for web development. <a
                href="https://www.php.net/manual/en/index.php" target="_blank">Documentation</a></span></p></div>
            <div><p class="skill-tooltip">Laravel <span class="tooltip-text">A PHP web application framework. <a
                href="https://laravel.com/docs" target="_blank">Documentation</a></span></p></div>
            <div><p class="skill-tooltip">Symfony <span class="tooltip-text">A PHP web application framework and a set of reusable PHP components. <a
                href="https://symfony.com/doc/current/index.html" target="_blank">Documentation</a></span></p></div>
            <div><p class="skill-tooltip">SQL <span class="tooltip-text">Structured Query Language used for managing relational databases. <a
                href="https://dev.mysql.com/doc/" target="_blank">Documentation</a></span></p></div>
            <div><p class="skill-tooltip">NoSQL <span class="tooltip-text">A non-relational database management system. <a
                href="https://www.mongodb.com/nosql-explained" target="_blank">Documentation</a></span></p></div>
            <div><p class="skill-tooltip">Solr <span class="tooltip-text">An open-source search platform. <a
                href="https://lucene.apache.org/solr/guide/8_8/getting-started.html"
                target="_blank">Documentation</a></span></p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="skills d-flex flex-wrap mt-5">
      <div class="card-container">
        <div class="card__front d-flex justify-content-center"><h2>DevOps and Tools</h2></div>
        <div class="card__back">
          <div>
            <div><p class="skill-tooltip">Git <span class="tooltip-text">A version control system for tracking changes in source code. <a
                href="https://git-scm.com/doc" target="_blank">Documentation</a></span></p></div>
            <div><p class="skill-tooltip">Jira <span class="tooltip-text">A popular project management and issue tracking tool. <a
                href="https://support.atlassian.com/jira-software-cloud/docs/get-started/"
                target="_blank">Documentation</a></span></p></div>
            <div><p class="skill-tooltip">Docker <span class="tooltip-text">A platform for developing, shipping, and running applications in containers. <a
                href="https://docs.docker.com/" target="_blank">Documentation</a></span></p></div>
            <div><p class="skill-tooltip">AWS (Amazon Web Services) <span class="tooltip-text">A cloud computing platform by Amazon. <a
                href="https://aws.amazon.com/getting-started/" target="_blank">Documentation</a></span></p></div>
            <div><p class="skill-tooltip">TDD (Test-Driven Development) <span class="tooltip-text">A software development methodology that emphasizes writing tests before code. <a
                href="https://en.wikipedia.org/wiki/Test-driven_development" target="_blank">Learn More</a></span></p>
            </div>
            <div><p class="skill-tooltip">PHPUnit <span class="tooltip-text">A popular testing framework for PHP. <a
                href="https://phpunit.de/getting-started/phpunit-10.html" target="_blank">Documentation</a></span></p>
            </div>
            <div><p class="skill-tooltip">Behat <span
                class="tooltip-text">A PHP framework for behavior-driven development. <a
                href="https://docs.behat.org/en/latest/quick_intro.html" target="_blank">Documentation</a></span></p>
            </div>
            <div><p class="skill-tooltip">Integration Testing <span class="tooltip-text">A type of testing that checks the interaction between different components of an application. <a
                href="https://en.wikipedia.org/wiki/Integration_testing" target="_blank">Learn More</a></span></p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "MySkill",
  data() {
    return {
      flippedFront: false,
      flippedBack: false,
      flippedTools: false,

    }
  },
  mounted(): void {
    const cardContainers = document.querySelectorAll(".card-container");
    cardContainers[0].addEventListener("mouseenter", () => {
      const cardBack: HTMLElement | null = cardContainers[0].querySelector(".card__back");
      const cardFront: HTMLElement | null = cardContainers[0].querySelector(".card__front");

      if ((cardBack && cardFront) && !this.flippedFront) {
        cardBack.style.transform = "rotateY(0deg)";
        cardBack.style.zIndex = "2";

        cardFront.style.transform = "rotateY(180deg)";
        cardFront.style.zIndex = "-1";
        setTimeout(() => {
          this.flippedFront = true
        }, 300)
      }
    });
    cardContainers[0].addEventListener("mouseleave", () => {
      const cardBack: HTMLElement | null = cardContainers[0].querySelector(".card__back");
      const cardFront: HTMLElement | null = cardContainers[0].querySelector(".card__front");

      if ((cardBack && cardFront) && this.flippedFront) {
        cardBack.style.transform = "rotateY(-180deg)";
        cardBack.style.zIndex = "0";

        cardFront.style.transform = "rotateY(0deg)";
        cardFront.style.zIndex = "1";
        setTimeout(() => {
          this.flippedFront = false
        }, 300)
      }
    });

    cardContainers[1].addEventListener("mouseenter", () => {
      const cardBack: HTMLElement | null = cardContainers[1].querySelector(".card__back");
      const cardFront: HTMLElement | null = cardContainers[1].querySelector(".card__front");

      if ((cardBack && cardFront) && !this.flippedBack) {
        cardBack.style.transform = "rotateY(0deg)";
        cardBack.style.zIndex = "2";

        cardFront.style.transform = "rotateY(180deg)";
        cardFront.style.zIndex = "-1";
        setTimeout(() => {
          this.flippedBack = true
        }, 300)
      }
    });
    cardContainers[1].addEventListener("mouseleave", () => {
      const cardBack: HTMLElement | null = cardContainers[1].querySelector(".card__back");
      const cardFront: HTMLElement | null = cardContainers[1].querySelector(".card__front");

      if ((cardBack && cardFront) && this.flippedBack) {
        cardBack.style.transform = "rotateY(-180deg)";
        cardBack.style.zIndex = "0";

        cardFront.style.transform = "rotateY(0deg)";
        cardFront.style.zIndex = "1";
        setTimeout(() => {
          this.flippedBack = false
        }, 300)
      }
    });

    cardContainers[2].addEventListener("mouseenter", () => {
      const cardBack: HTMLElement | null = cardContainers[2].querySelector(".card__back");
      const cardFront: HTMLElement | null = cardContainers[2].querySelector(".card__front");

      if ((cardBack && cardFront) && !this.flippedTools) {
        cardBack.style.transform = "rotateY(0deg)";
        cardBack.style.zIndex = "2";

        cardFront.style.transform = "rotateY(180deg)";
        cardFront.style.zIndex = "-1";
        setTimeout(() => {
          this.flippedTools = true
        }, 300)
      }
    });
    cardContainers[2].addEventListener("mouseleave", () => {
      const cardBack: HTMLElement | null = cardContainers[2].querySelector(".card__back");
      const cardFront: HTMLElement | null = cardContainers[2].querySelector(".card__front");

      if ((cardBack && cardFront) && this.flippedTools) {
        cardBack.style.transform = "rotateY(-180deg)";
        cardBack.style.zIndex = "0";

        cardFront.style.transform = "rotateY(0deg)";
        cardFront.style.zIndex = "1";
        setTimeout(() => {
          this.flippedTools = false
        }, 300)
      }
    });
  }
});
</script>

<style scoped lang="scss">
.card-container {
  position: relative;
  width: 70vw;
  min-height: 50vh;
  margin: 0 auto;
  color: white;
  border-radius: 40px;
  border: #333333 solid 1px;
  padding: 10px;
  perspective: 1000px; /* Додано перспективу для 3D-ефекту */
}

.card__front {
  border: #333333 solid 1px;
  border-radius: 40px;
  z-index: 1;
  position: absolute;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  top: 10px;
  background: rgba(17, 8, 37, 0.97);
  color: hsl(261deg 70% 80%);
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  transition: transform .6s cubic-bezier(.2, .85, .4, 1.275);
}

.card__back {
  border-radius: 40px;
  border: #333333 solid 1px;
  z-index: 0;
  position: absolute;
  top: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  text-align: center;
  backface-visibility: hidden;
  background: hsl(261deg 80% 90%);
  color: rgba(17, 8, 37, 0.97);
  transform: rotateY(-180deg);
  transition: transform .6s cubic-bezier(.2, .85, .4, 1.275);

  div {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
      min-height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: row;

      p {
        font-size: 20px;
        cursor: pointer;
        width: fit-content;
      }
    }
  }
}

.skill-tooltip {
  position: relative;
  display: inline-block;
}

.skill-tooltip .tooltip-text {
  visibility: hidden;
  width: 200px;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -100px;
  opacity: 0;
  transition: opacity 0.3s;
}

.skill-tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
</style>
