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
    <div id="main" style="width: 100%;height: 600px;"></div>
</div>
</template>

<script>
export default {
  name: 'Echarts',
  methods:{
	  myEcharts(){
		  // 基于准备好的dom，初始化echarts实例
		  var myChart = this.$echarts.init(document.getElementById('main'));

		  // 指定图表的配置项和数据
		  var option = {
			  title: {
				  text: '广州2022年11月19日至2022年12月2日累计疫情数据'
			  },
			  tooltip: {},
			  legend: {
				  data:['日期']
			  },
			  xAxis: {
				  data: ["11月19日","11月20日","11月21日","11月22日","11月23日","11月24日","11月25日","11月26日","11月27日","11月28日","11月29日","11月30日","12月1日","12月2日"]
			  },
			  yAxis: {},
			  series: [{
				  name: '累计阳性个案',
				  type: 'bar',
				  data: [83015, 91207, 99449, 107438, 115067, 122611, 130057, 137494, 144876, 152184, 159185, 165498, 171358, 176302]
			  }]
		  };

		  // 使用刚指定的配置项和数据显示图表。
		  myChart.setOption(option);
		  }
  },
  mounted() {
  	this.myEcharts();
  }
}
</script>

<style>
#container {
  width: 500px;
  height: 500px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* border: #ccc solid 1px; */
}
.header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100px;
        background-color:#dddddd;
        color: #333333;

        /*吸顶效果*/
       /* position: sticky;
        position: -webkit-sticky;    !*兼容 -webkit 内核的浏览器*!
        top: 0px;                    !*必须设一个值，否则不生效*!*/
}
.box{
    display: flex;
    align-items: center;
}
</style>

