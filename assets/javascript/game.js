//Ideas
//SET THE FUNCTION INSIDE THE VAR
//FOR - IN loop to assign iterate through an object




var luke = {
	Name: "Luke Skywalker",
	HP: "100",
	AttackPower: 5,
	CounterAttackPower: 5,
	status: "Enemy",
	status2: "idle"

}

var obi = {
	Name: "Obi-wan Kenobi",
	HP: 125,
	AttackPower: 10,
	CounterAttackPower: 10,
	status: "Enemy",
	status2: "idle"

};

var maul = {
	Name: "Darth Maul",
	HP: 150,
	AttackPower: 15,
	CounterAttackPower: 15,
	status: "Enemy",
	status2: "idle"

};

var vader = {
	Name: "Darth Vader",
	HP: 175,
	AttackPower: 20,
	CounterAttackPower: 20,
	status: "Enemy",
	status2: "idle"

};

// $("#luke").append(luke);

$("img").click(function() {
	var health = this.getAttribute("data-hp");
	console.log(health);
	});

