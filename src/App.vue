<template>
  <div>
    <nav>
      <div class="stage">
        <div id="logo">
          <router-link to="/">
            <img src="@/assets/logo.svg" title="AppJam+" alt="AppJam+" />
          </router-link>
        </div>
        <div id="pages">
          <router-link to="/who"><span>Who We Are</span></router-link>
          <router-link to="/why"><span>Why STEM?</span></router-link>
          <router-link to="/apps"><span>Student Apps</span></router-link>
          <router-link to="/news"><span>News</span></router-link>
          <router-link to="/resources"><span>Resources</span></router-link>
          <router-link to="/contact"><span>Contact</span></router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <section id="footer">
      <div class="stage">
        <div class="footer-block">
          <h3>About</h3>
          <router-link to="/who"><p>Who We Are</p></router-link>
          <router-link to="/why"><p>Why STEM?</p></router-link>
        </div>
        <div class="footer-block">
          <h3>Get Involved</h3>
          <router-link to="/mentor"><p>Become a Mentor</p></router-link>
          <router-link to="/host"><p>Host AppJam+</p></router-link>
          <router-link to="/partner"><p>Become a Partner</p></router-link>
          <router-link to="/volunteer"><p>Volunteer with Us</p></router-link>
        </div>
        <div class="footer-block" id="signup">
          <form
            action="https://appjamplus.us10.list-manage.com/subscribe/post?u=e39157003aaf6749aa4639ca1&id=dee7d7a89d"
            method="post"
            target="_blank"
          >
            <h3>Stay Connected</h3>
            <input
              type="email"
              name="EMAIL"
              placeholder="Email"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
            />
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  -webkit-appearance: none;
  box-sizing: border-box;
  border-radius: 0;
}
body {
  margin: 0;
  font-family: "Source Sans Pro", sans-serif;
  color: #1a1a1a;
}
h2 {
  margin: 8pt 0;
  font-size: 24pt;
}
h3 {
  margin: 8pt 0;
  font-size: 18pt;
}
p {
  margin: 8pt 0;
  opacity: 40%;
}
a {
  text-decoration: none;
  color: currentColor;
}
.stage {
  margin: auto;
  max-width: 1080px;
}
nav {
  height: 96px;
}
nav .stage {
  padding: 0 32px;
}
nav #logo {
  float: left;
}
nav #logo img {
  padding: 16px 0;
  height: 96px;
}
nav #pages {
  float: right;
}
nav #pages a {
  margin-left: 32px;
}
nav #pages a span {
  display: inline-block;
  line-height: 96px;
  opacity: 60%;
  transition: all 0.2s ease;
}
nav #pages a:hover span {
  opacity: 1;
}
section {
  position: relative;
  width: 100%;
}
#footer {
  background-color: #1a1a1a;
}
#footer .stage {
  display: table;
  width: 100%;
  padding: 128px 32px 80px 32px;
}
.footer-block {
  float: left;
  width: calc((100% - 32px) / 3);
}
.footer-block:nth-of-type(3n-2),
.footer-block:nth-of-type(3n-1) {
  margin: 0 16px 48px 0;
}
.footer-block:nth-of-type(3n) {
  margin: 0 0 48px 0;
}
.footer-block h3,
.footer-block p {
  color: #fff;
}
.footer-block a p {
  transition: all 0.2s ease;
}
.footer-block a:hover p {
  opacity: 1;
}
#signup input {
  position: relative;
  outline: none;
  border: none;
  border-radius: 2px;
  width: 100%;
  max-width: 256px;
  height: 36px;
  padding: 0 12px;
  background-color: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 12pt;
  transition: all 0.2s ease;
}
#signup input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}
#signup input:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
#signup input:focus {
  background-color: rgba(255, 255, 255, 0.2);
}
@media (max-width: 640px) {
  .footer-block {
    width: 100%;
  }
  .footer-block:nth-of-type(3n-2),
  .footer-block:nth-of-type(3n-1) {
    margin: unset;
  }
  .footer-block:nth-of-type(3n) {
    margin: unset;
  }
  .footer-block:nth-of-type(n) {
    margin: 0 0 48px 0;
  }
}
</style>
