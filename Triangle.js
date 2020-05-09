class Triangle {
	constructor(x, y, side, radius) {
		var options = {
			restitution: 1,
			friction: 3.0,
			density: 2.0
		};

		this.body = Bodies.polygon(x, y, side, radius, options);

		//this.body = Bodies.rectangle(x, y, side, radius, options);
		World.add(world, this.body);
	}
	display(a, b) {
		var pos = this.body.position;

		fill(0);
		rectMode(CENTER);
		triangle(pos.x, pos.y, pos.x - a, pos.y + b, pos.x + a, pos.y + b);
	}
}
