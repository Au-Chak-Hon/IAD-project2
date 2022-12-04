<template>
<div>
  <div class="header">
            <div class="box">
                <h1>
                  <img src="../assets/logo.png">
                  <span>I am an SB</span>
                </h1>
                <nav>
                  <ul>
                    <li><router-link active-class="active" to="/Map">Map</router-link></li>
                    <li><router-link active-class="active" to="/Req2">Weird Animation</router-link></li>
                    <li><router-link active-class="active" to="/Music">Music</router-link></li>
                    <li><router-link active-class="active" to="/Visualisation">Data Visualization</router-link></li>
                  </ul>
                </nav>
            </div>
            <div class="box">
                <img src="../assets/logo2.jpg">
            </div>
    </div>	
    <div class="makeGif" id="gif"></div>
</div>
</template>

<script>
import gifshot from 'gifshot';

export default {
  data() {
    return {
    	imgsList: [
                   require("../assets/seq00.png"),
                   require("../assets/seq01.png"),
                   require("../assets/seq02.png"),
                   require("../assets/seq03.png"),
                   require("../assets/seq04.png"),
                   require("../assets/seq05.png"),
                   require("../assets/seq06.png"),
                   require("../assets/seq07.png"),
                   require("../assets/seq08.png"),
                   require("../assets/seq09.png"),
                   require("../assets/seq10.png"),
                   require("../assets/seq11.png"),
                   require("../assets/seq12.png")
                  ],
        gifWidth: 640,
        gifHeight: 360,
        gifTime: 5,
   	}
  },
  created() {
    this.createGIF();
  },
  methods: {
      createGIF() {
      gifshot.createGIF(
        {
          gifWidth: this.gifWidth,
          gifHeight: this.gifHeight,
          images: this.imgsList,
          interval: 0.1,
          numFrames: 2,
          frameDuration: this.gifTime, 
          fontWeight: "normal", 
          fontSize: "16px", 
          fontFamily: "sans-serif",
          fontColor: "#ffffff",
          textAlign: "center", 
          textBaseline: "bottom",
          sampleInterval: 30,
          numWorkers: 2,
        },
        function (obj) {
          if (!obj.error) {
            var image = obj.image,
            animatedImage = document.createElement("img");
            animatedImage.src = image;
            document.getElementById("gif").appendChild(animatedImage);
          }
        }
      );
    },
  },
};
</script>


<style scoped>
.makeGif {
  width: 640px;
  height: 360px;
}


</style>