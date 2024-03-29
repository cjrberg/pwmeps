﻿// dependencies: Vector2D
function Sub(width,height,color,mass){
	if(typeof(width)==='undefined') width = 20;
	if(typeof(height)==='undefined') height = 20;
	if(typeof(color)==='undefined') color = '#0000ff';
	if(typeof(mass)==='undefined') mass = 1;	
	this.width = width;
	this.height = height;	
	this.color = color;
	this.mass = mass;
	this.tankWidth = 0.5*this.width;	
	this.tankHeight = 0.5*this.height;	
	this.waterHeight = 0;
	this.x = 0;
	this.y = 0;
	this.vx = 0;
	this.vy = 0;	
}		

Sub.prototype = {
	get pos2D (){
		return new Vector2D(this.x,this.y);			
	},
	set pos2D (pos){
		this.x = pos.x;
		this.y = pos.y;
	},
	get velo2D (){
		return new Vector2D(this.vx,this.vy);			
	},
	set velo2D (velo){
		this.vx = velo.x;
		this.vy = velo.y;
	},
	draw: function (context) {  
		// draw sub
		context.fillStyle = this.color;
		context.fillRect(this.x,this.y,this.width,this.height);
		context.fillRect(this.x+0.4*this.width,this.y-0.2*this.height+1,0.2*this.width,0.2*this.height);		
		context.beginPath();
		context.arc(this.x, this.y+0.5*this.height, 0.5*this.height, 0, 2*Math.PI, true);
		context.arc(this.x+this.width, this.y+0.5*this.height, 0.5*this.height, 0, 2*Math.PI, true);		
		context.closePath();
		context.fill();		
		context.fillStyle = '#ffffff';
		context.beginPath();
		context.arc(this.x-0.1*this.width, this.y+0.5*this.height, 0.1*this.height, 0, 2*Math.PI, true);		
		context.arc(this.x+0.0*this.width, this.y+0.5*this.height, 0.1*this.height, 0, 2*Math.PI, true);		
		context.arc(this.x+0.1*this.width, this.y+0.5*this.height, 0.1*this.height, 0, 2*Math.PI, true);
		context.arc(this.x+0.9*this.width, this.y+0.5*this.height, 0.1*this.height, 0, 2*Math.PI, true);		
		context.arc(this.x+1.0*this.width, this.y+0.5*this.height, 0.1*this.height, 0, 2*Math.PI, true);
		context.arc(this.x+1.1*this.width, this.y+0.5*this.height, 0.1*this.height, 0, 2*Math.PI, true);		
		context.closePath();
		context.fill();		
		// draw tank
		context.fillStyle = '#ffffff';
		context.fillRect(this.x+0.5*this.tankWidth,this.y+0.5*this.tankHeight,this.tankWidth,this.tankHeight);	
		// draw water in tank
		context.fillStyle = '#000000';
		context.fillRect(this.x+0.5*this.tankWidth,this.y+1.5*this.tankHeight-this.waterHeight,this.tankWidth,this.waterHeight);		
	}
};
