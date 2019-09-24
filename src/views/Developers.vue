<template>
  <v-container
    fluid
    class="outside"
  >
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <h1 class="heading-1">
          DEVELOPERS
        </h1>
      </v-flex>
    </v-layout>

    <vue-particles
      class="Neeche"
      color="#dedede"
      :particle-opacity="0.7"
      :particles-number="50"
      shape-type="circle"
      :particle-size="4"
      lines-color="#dedede"
      :lines-width="1"
      :line-linked="true"
      :line-opacity="0.4"
      :lines-distance="150"
      :move-speed="3"
      :hover-effect="true"
      hover-mode="grab"
      :click-effect="true"
      click-mode="push"
    />
    <br><br><br><br><br>
<div style="text-align:center">
    <div class="card">
      <div class="additional">
        <img
          class="rajath"
          src="../../public/rajath.jpg"
        >
        <div class="more-info">
          <h1>Rajath Reghunath</h1>
          <div class="coords">
            <span>rrgodhorus@gmail.com<br>Designer and Developer</span>
          </div>
          <div class="stats">
            <div>
              <div class="title">
                GitHub
              </div>
              <a href="https://github.com/rrgodhorus/">
                <i class="fab fa-github-square" />
              </a>
            </div>
            <div>
              <div class="title">
                LinkedIn
              </div>
              <a href="https://www.linkedin.com/in/rajath-reghunath-4180b8163/">
                <i class="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="general">
        <h1>Rajath Reghunath</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
        <span class="more">
          Mouse over the card for more info
        </span>
      </div>
    </div>

    <div class="card">
      <div class="additional">
        <img
          class="manav"
          src="../../public/manav.jpg"
        >
        <div class="more-info">
          <h1>Manav Seksaria</h1>
          <div class="coords">
            <span>seksariamanav.2000@gmail.com<br>Designer and Developer</span>
          </div>
          <div class="stats">
            <div>
              <div class="title">
                GitHub
              </div>
              <a href="https://github.com/plutoniumblast/">
                <i class="fab fa-github-square" />
              </a>
            </div>
            <div>
              <div class="title">
                LinkedIn
              </div>
              <a href="https://www.linkedin.com/in/manav-seksaria-866961180/">
                <i class="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="general">
        <h1>Manav Seksaria</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
        <span class="more">
          Mouse over the card for more info
        </span>
      </div>
    </div>

    <div class="card">
      <div class="additional">
        <img
          class="nikhil"
          src="../../public/nikhil.jpg"
        >
        <div class="more-info">
          <h1>Nikhil Boddupalli</h1>
          <div class="coords">
            <span>nikhil2001.12.5@gmail.com<br>Designer and Developer</span>
          </div>
          <div class="stats">
            <div>
              <div class="title">
                GitHub
              </div>
              <a href="https://github.com/f20180106/">
                <i class="fab fa-github-square" />
              </a>
            </div>
            <div>
              <div class="title">
                LinkedIn
              </div>
              <a href="https://www.linkedin.com/in/nikhil-boddupalli-504257129/">
                <i class="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="general">
        <h1>Nikhil Boddupalli</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
        <span class="more">
          Mouse over the card for more info
        </span>
      </div>
    </div>

    <div class="card">
      <div class="additional">
        <img
          class="pulkit"
          src="../../public/pulkit.jpg"
        >
        <div class="more-info">
          <h1>Pulkit Purwar</h1>
          <div class="coords">
            <span>ppulkit2707@gmail.com<br>Designer and Developer</span>
          </div>
          <div class="stats">
            <div>
              <div class="title">
                GitHub
              </div>
              <a href="https://github.com/Pulkitp2707/">
                <i class="fab fa-github-square" />
              </a>
            </div>
            <div>
              <div class="title">
                LinkedIn
              </div>
              <a href="https://www.linkedin.com/in/pulkitp27/">
                <i class="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="general">
        <h1>Pulkit Purwar</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
        <span class="more">
          Mouse over the card for more info
        </span>
      </div>
    </div>
</div>
  </v-container>
</template>

<script>
  export default {
    name: 'Developers'
  }
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Inconsolata);
@import url(https://use.fontawesome.com/releases/v5.9.0/css/all.css);
.heading-1 {
	margin-bottom: 2%;
	margin-top: 2%;
	font-size: 3.5em;
	font-family: Inconsolata, cursive;
	color: #fff;
	z-index: 0;
	position: absolute;
	left: 42vw;
	top: 0
}

.Neeche {
	position: fixed;
	left: 0;
	top: 5%;
	width: 100%;
	height: 100vh
}

.outside {
	width: 100%;
	height: 97.7vh;
	background-image: linear-gradient(to bottom, #a3ad32 0%, #0c639a 100%);
	padding-left: 0;
	padding-right: 0;
}

a {
	text-decoration: none
}

.fa-github-square {
	color: #fff;
	font-size: 250%;
	transition: all .5s
}

.fa-github-square:hover {
	display: inline;
	color: #6e5494;
	font-size: 250%;
	transition: all .5s
}

.fa-linkedin {
	color: #fff;
	font-size: 250%;
	transition: all .5s
}

.fa-linkedin:hover {
	display: inline;
	color: #0077b5;
	font-size: 250%;
	transition: all .5s
}

.manav {
	position: absolute;
	left: -180px;
	top: 0;
	width: 420px;
	height: auto;
	transition: all .5s
}

.card:hover .manav {
	width: 500px;
	left: 0;
	top: -50px;
	height: auto;
	opacity: .9;
	filter: blur(5px);
	transition: all .5s
}

.rajath {
	position: absolute;
	left: -75px;
	top: 0;
	width: 275px;
	height: auto;
	transition: all .5s
}

.card:hover .rajath {
	width: 500px;
	left: 0;
	top: -160px;
	height: auto;
	opacity: .9;
	filter: blur(5px);
	transition: all .5s
}

.pulkit {
	position: absolute;
	left: -110px;
	top: -120px;
	width: 375px;
	height: auto;
	transition: all .5s
}

.card:hover .pulkit {
	width: 500px;
	left: 0;
	top: -200px;
	height: auto;
	opacity: .9;
	filter: blur(5px);
	transition: all .5s
}

.nikhil {
	position: absolute;
	left: -75px;
	top: -20px;
	width: 275px;
	height: auto;
	transition: all .5s
}

.card:hover .nikhil {
	width: 500px;
	left: 0;
	top: -180px;
	height: auto;
	opacity: .9;
	filter: blur(5px);
	transition: all .5s
}

.card {
	display: inline-block;
	width: 500px;
	height: 275px;
	background-color: rgba(211, 211, 211, .75);
	box-shadow: 0 8px 16px -8px rgba(0, 0, 0, .4);
	border-radius: 6px;
	overflow: hidden;
	position: relative;
	margin: 1.5rem
}

.card h1 {
	text-align: center
}

.card .additional {
	position: absolute;
	width: 150px;
	height: 100%;
	background: auto;
	transition: width .4s;
	overflow: hidden;
	z-index: 2
}

.card:hover .additional {
	width: 100%;
	text-shadow: 1px 1px 1.5px #000;
	background: rgba(0,0,0,1);
	border-radius: 0 5px 5px 0
}

.card .additional {
	width: 150px;
	height: 100%;
	position: relative;
	float: left
}

.card .additional .more-info {
	width: 300px;
	float: left;
	position: absolute;
	left: 150px;
	height: 100%
}

.card .additional .more-info h1 {
	color: #fff;
	margin-bottom: 0
}

.card .additional .coords {
	margin: 0 1rem;
	color: #fff;
	font-size: 1rem
}

.card .additional .coords span+span {
	float: right
}

.card .additional .stats {
	font-size: 2rem;
	display: flex;
	position: absolute;
	bottom: 1rem;
	left: 1rem;
	right: 1rem;
	top: auto;
	color: #fff
}

.card .additional .stats>div {
	flex: 1;
	text-align: center
}

.card .additional .stats i {
	display: block
}

.card .additional .stats div.title {
	font-size: .75rem;
	font-weight: 700;
	text-transform: uppercase
}

.card .general {
	width: 300px;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1;
	box-sizing: border-box;
	padding: 1rem;
	padding-top: 0
}

.card .general .more {
	position: absolute;
	bottom: 1rem;
	right: 1rem;
	font-size: .9em
}
</style>
