var note = new Vue({
	el: "#appBox",
	data:{
		score:0,
		remainingArrow:10,
		targetPosition:0,
		gameOver: false
	},
	methods:{
		fire(){
			var cordY = this.$refs.bow_arrow.offsetTop;
			var target_box = this.$refs.target_box.offsetTop;
			var target_box_height = this.$refs.target_box.offsetHeight;
			var target_red = this.$refs.target_red.offsetTop;
			var target_red_height = this.$refs.target_red.offsetHeight;

			if (cordY > target_red && cordY < target_red + target_red_height) {
				this.score = this.score + 3;
				console.log("boğa gözü");
			}else if(cordY > target_box && cordY < target_box + target_box_height) {		
				this.score = this.score + 1;	
				console.log("tam isabet");
			}else{	
				this.remainingArrow = this.remainingArrow - 1;
				console.log("mal");				
			}
			this.arrowEffect();
			this.newPosition();
		},
		arrowEffect(){

		},
		newPosition(){
			var varHeight = this.$el.offsetHeight - this.$refs.target_box.offsetHeight - 20;
			var generateNumber = Math.floor(Math.random() * varHeight) + 1;  
			this.targetPosition = generateNumber;
		},
		gameOver(){

		},
		restart(){
			this.score = 0;
			this.remainingArrow = 10;
			this.targetPosition = 0;
			this.gameOver = false;
		}

	},
	mounted(){
		this.newPosition();
	},
	watch:{
		remainingArrow(){
			if(this.remainingArrow === 0){
				this.gameOver = true;
				this.gameOver();
			}
		}
	}

})