<template>
  <div>
    <router-link :to="`/report/${report.id}`">
      <section
        id="news"
        :style="{
          backgroundImage: `url('${
            report.get('picture') ? report.get('picture').url() : null
          }')`
        }"
      >
        <div class="stage">
          <h1 id="news-title">
            <span>
              {{ report.get("title") }}
            </span>
          </h1>
        </div>
      </section>
    </router-link>
    <section id="functions">
      <div class="stage">
        <router-link to="/mentor" class="function">
          <h3>Become a mentor</h3>
          <p>Application is open for the Summer 2019 Season</p>
        </router-link>
        <router-link to="/host" class="function">
          <h3>Host AppJam+</h3>
          <p>Bring AppJam+ to your school</p>
        </router-link>
        <router-link to="/partner" class="function">
          <h3>Partner with us</h3>
          <p>Become one of our sponsors</p>
        </router-link>
        <router-link to="/volunteer" class="function">
          <h3>Volunteer with us</h3>
          <p>Get your leadership skills practiced</p>
        </router-link>
      </div>
    </section>
    <section id="about">
      <div class="stage">
        <div id="about-text">
          <span>
            <h2>AppJam+</h2>
            <p>
              An initiative of Dreams for Schools focused on educating youth
              about Science, Technology, Engineering and Math fields.
            </p>
            <p>
              Partnering with universities to recruit college mentors from CS
              and Engineering fields to teach middle school students how to
              create a mobile app in 8-10 weeks while exposing them to careers
              in technology.
            </p>
          </span>
        </div>
        <div id="about-video">
          <iframe
            src="https://www.youtube.com/embed/md8TtM7W-lc?wmode=opaque"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
    <section id="team">
      <div class="stage">
        <h2>Our Team</h2>
        <div id="team-members">
          <div v-for="member in members" :key="member.id" class="team-member">
            <div class="team-member-headshot">
              <img :src="member.get('picture').url()" />
            </div>
            <div>
              <h3>{{ member.get("name") }}</h3>
              <p>{{ member.get("title") }}<br />{{ member.get("company") }}</p>
              <p class="team-member-contacts">
                <a
                  v-if="member.get('email')"
                  :href="`mailto:${member.get('email')}`"
                >
                  <font-awesome-icon :icon="['fas', 'envelope-square']" />
                </a>
                <a
                  v-if="member.get('linkedin')"
                  :href="
                    `https://www.linkedin.com/in/${member.get('linkedin')}/`
                  "
                  target="_blank"
                >
                  <font-awesome-icon :icon="['fab', 'linkedin']" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AV from "leancloud-storage";
export default {
  name: "HomePage",
  data() {
    return {
      report: new AV.Object("Report"),
      members: []
    };
  },
  created() {
    const vm = this;
    const reportQuery = new AV.Query("Report");
    reportQuery
      .descending("createdAt")
      .first()
      .then(report => {
        vm.report = report;
      })
      .catch(error => {
        alert(error);
      });
    const memberQuery = new AV.Query("Member");
    memberQuery
      .ascending("createdAt")
      .limit(1000)
      .find()
      .then(members => {
        vm.members = members;
      })
      .catch(error => {
        alert(error);
      });
  }
};
</script>

<style scoped>
#news {
  background-size: cover;
  background-position: center;
}
#news .stage {
  padding: 420px 32px 60px 32px;
}
#news-title {
  line-height: 2em;
  font-size: 36pt;
  color: #fff;
}
#news-title span {
  background-color: #1a1a1a;
  padding: 8px 16px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
#functions {
  background-color: #f2f2f2;
}
#functions .stage {
  display: flex;
  max-width: unset;
  width: 100%;
}
.function {
  width: 25%;
  margin: 48px 0;
  padding: 0 48px;
  text-align: center;
}
.function:nth-of-type(1),
.function:nth-of-type(2),
.function:nth-of-type(3) {
  border-right: 1px solid #e6e6e6;
}
#about .stage {
  display: table;
  width: 100%;
  padding: 64px 32px 16px 32px;
}
#about-text,
#about-video {
  float: left;
  width: 50%;
  height: 280px;
}
#about-text {
  padding: 0 32px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
#about-video {
  padding: 0 0 0 32px;
}
#about-video iframe {
  border: none;
  width: 100%;
  height: 100%;
}
#team .stage {
  padding: 64px 32px 48px 32px;
}
#team h2 {
  margin-bottom: 64px;
  text-align: center;
}
#team-members {
  display: table;
  width: 100%;
}
.team-member {
  float: left;
  width: calc((100% - 192px) / 4);
  height: 360px;
}
.team-member:nth-of-type(4n-3),
.team-member:nth-of-type(4n-2),
.team-member:nth-of-type(4n-1) {
  margin: 0 64px 32px 0;
}
.team-member:nth-of-type(4n) {
  margin: 0 0 32px 0;
}
.team-member-headshot {
  width: 100%;
}
.team-member-headshot img {
  width: 100%;
}
.team-member-contacts a {
  margin-right: 4px;
}
@media (max-width: 840px) {
  #functions .stage {
    display: table;
  }
  .function {
    float: left;
    width: 100%;
    margin: 0;
    padding: 24px 24px;
  }
  .function:nth-of-type(1),
  .function:nth-of-type(2),
  .function:nth-of-type(3) {
    border-right: none;
    border-bottom: 1px solid #e6e6e6;
  }
  .team-member {
    width: calc((100% - 128px) / 3);
  }
  .team-member:nth-of-type(4n-3),
  .team-member:nth-of-type(4n-2),
  .team-member:nth-of-type(4n-1) {
    margin: unset;
  }
  .team-member:nth-of-type(4n) {
    margin: unset;
  }
  .team-member:nth-of-type(3n-2),
  .team-member:nth-of-type(3n-1) {
    margin: 0 64px 32px 0;
  }
  .team-member:nth-of-type(3n) {
    margin: 0 0 32px 0;
  }
}
@media (max-width: 640px) {
  #news .stage {
    padding: 240px 32px 16px 32px;
  }
  #news-title {
    font-size: 24pt;
  }
  #about-text {
    float: unset;
    width: 100%;
  }
  #about-video {
    display: none;
  }
  .team-member {
    width: calc((100% - 64px) / 2);
  }
  .team-member:nth-of-type(3n-2),
  .team-member:nth-of-type(3n-1) {
    margin: unset;
  }
  .team-member:nth-of-type(3n) {
    margin: unset;
  }
  .team-member:nth-of-type(2n-1) {
    margin: 0 64px 32px 0;
  }
  .team-member:nth-of-type(2n) {
    margin: 0 0 32px 0;
  }
}
</style>
