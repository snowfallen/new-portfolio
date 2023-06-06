<template>
  <header>
    <div id="top-nav">
      <menu class="d-none d-md-block">
        <ul class="d-flex justify-content-center">
          <li class="p-2"><a>Home</a></li>
          <li class="p-2"><a>Skills</a></li>
          <li class="p-2"><a>Experience</a></li>
          <li class="p-2"><a>Contact</a></li>
        </ul>
      </menu>
      <div class="nav-menu" :class="{ open: isMenuOpen }">
        <div class="menu-list" :class="{ 'list-open': isMenuOpen }">
          <ul>
            <li><a>Home</a></li>
            <li><a>Skills</a></li>
            <li><a>Experience</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div id="burger-wrap">
          <a class="burger" @click="toggleMenu"><span></span></a>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";
interface MenuOpen {
  isMenuOpen: boolean
}
export default defineComponent({
  name: "AppHeader",
  data(): MenuOpen {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
})
</script>


<style lang="scss" scoped>
h1 {
  margin: 0;
  padding: 18px 20px;
  font-family: 'Open Sans', Helvetica;
  font-size: 30px;
}
p {
  position: inherit;
  width: 100%;
  top: 0;
  margin: 5px 0;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  cursor: pointer;
}
#top-nav {
  position: fixed;
  width: 100%;
  height: 70px;
  background: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.14),0px 0px 5px rgba(0, 0, 0, 0.14);
}
.nav-menu {
  background: none;
  width: 60px;
  height: 80px;
  top: 0;
  right: 15px;
}
.open {
  position: fixed;
  background: #5833dd;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  transition: 0.5s;
  -webkit-transition: width 0.2s ease, height 0.4s ease;
  -moz-transition: width 0.2s ease, height 0.4s ease;
  -o-transition: width 0.2s ease, height 0.4s ease;
  transition: width 0.2s ease, height 0.4s ease;

}
.menu-list {
  margin-top: 100px;
  text-align: center;
  font-family: 'Open Sans', Helvetica;
  font-size: 30px;
  opacity: 0;
}
.list-open {
  opacity: 1;
  -webkit-transition: opacity 0.3s ease;
  -moz-transition: opacity 0.3s ease;
  -o-transition: opacity 0.3s ease;
  transition: opacity 0.64s ease;
  -webkit-transition-delay: 0.34s;
  -moz-transition-delay: 0.34s;
  -o-transition-delay: 0.34s;
  transition-delay: 0.34s;

}
.menu-list li {
  padding: 10px;
  background: none;
  color: #fff;
}
.menu-list li:hover {
  background: #fff;
  color: #4a33dd;
  cursor: pointer;
}
li .social-icons:hover {
  background: none;
}
.social-icons {
  margin-top: 20px;
  font-size: 24px
}
.social-icons a {
  margin: 18px;
  color: #fff;
}

/* Burger */
#burger-wrap {
  position: fixed;
  top: 0;
  right: 15px;
  margin: 0;
  padding: 0;
  width: 60px;
  height: 80px;
}
.burger {
  position: fixed;
  top: 9px;
  right: 15px;
  overflow: hidden;
  cursor: pointer;
  margin: 0;
  padding: 0;
  width: 60px;
  height: 80px;
  border-radius: 50%;
  border: none;
  -webkit-transition: all .3s;
  transition: all .3s;
  background-color: transparent;
}
.burger span {
  display: block;
  position: absolute;
  top: 30px;
  left: 16px;
  right: 16px;
  height: 3px;
  background: #5833dd;
  border-radius: 15px;
  -webkit-transition: background 0.3s .3s;
  transition: background 0.3s .3s;
  -o-transition: background 0s 0s;
  -webkit-transition-delay: 0.4s,0s;
  transition-delay: 0.4s,0s;
}
.open .burger span {
  background: 0 0 transparent;
  transform: rotate(90deg);
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  -o-transition: all 0s ease;
  -webkit-transition-delay: 0s,0s;
  transition-delay: 0s,0s;
}
.burger span::after,
.burger span::before {
  position: absolute;
  display: block;
  left: 0;
  width: 100%;
  height: 3px;
  background: #5833dd;
  content: "";
  border-radius: 5px;
  -webkit-transition-duration: .3s,.3s;
  transition-duration: .3s,.3s;
  -webkit-transition-delay: 0.4s,0s;
  transition-delay: 0.4s,0s;
}
.burger span::before {
  top: -8px;
  -webkit-transition-property: top,-webkit-transform;
  transition-property: top,transform;
}
.burger span::after {
  bottom: -8px;
  -webkit-transition-property: bottom,-webkit-transform;
  transition-property: bottom,transform;
}

.open .burger span::after,
.open .burger span::before {
  -webkit-transition-delay: 0s,.4s;
  transition-delay: 0s,.4s;
  background-color: #fafafa;
}
.open .burger span::before {
  top: 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.open .burger span::after {
  bottom: 1px; /* Fix for codepen, set to zero for normal use */
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
/* Disable scrollbar on Chrome and Safari browsers! */
html::-webkit-scrollbar { width: 0 !important; height: 0 !important; }
@media (min-width: 768px) {
  .nav-menu {
    display: none;
  }
}
</style>