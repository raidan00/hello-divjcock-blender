import * as t from "three"
import { ammoTmp, defaultLights, MoveController, ArrowHelper } from 'dvijcock';

export default class{
	constructor(model){
		this.model = model;
	}
	init(){
		let dcWorld = this.dcWorld;
		dcWorld.camera = this.model.cameras[0];
		dcWorld.addObj(this.model.scene);

		let lastTouch = Date.now();
		this.model.scene.traverse((obj)=>{
			if(obj.name == "Sphere"){
				new MoveController(obj, this.model.cameras[0], 1, 4);
			}else if(obj.userData.type == "Enemy"){
				obj.dcData.onCollision = () => {
					lastTouch = Date.now();
				}
			}
		});
		setInterval(()=>{
			if(lastTouch + 1000 < Date.now()){
				alert("you win")
				lastTouch = Infinity;
			}
		}, 100);


	}
}
