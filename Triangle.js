class Triangle {
	constructor(x, y, sides, radius) {
		var options = {
			restitution: 0.1,
			friction: 1,
			density: 2.0,
			isStatic: false,
			angle: PI / 4
		};

		this.body = Bodies.polygon(x, y, sides, radius, options);

		//this.body = Bodies.rectangle(x, y, side, radius, options);
		World.add(world, this.body);
	}
	display(width, height) {
		var pos = this.body.position;

		fill(255);
		triangle(pos.x, pos.y, pos.x - width, pos.y + height, pos.x + width, pos.y + height);
	}
}
