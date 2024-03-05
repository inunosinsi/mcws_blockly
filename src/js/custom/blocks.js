/**
 * 
 * @param {string} command 
 * @param {string} target 
 * @param {string} entity 
 * @param {string} x 
 * @param {string} y 
 * @param {string} z 
 * @return string
 */
function build_execute_command(command, target, entity, x, y, z){
	target = target.replace("'", "");
	entity = entity.replace("'", "");
	x = x.replace("'", "");
	y = y.replace("'", "");
	z = z.replace("'", "");
	return 'window.mcwsApi.execute_command("'+command+'","'+target+'","'+entity+'","'+x+'","'+y+'","'+z+'");\n';
}

Blockly.Blocks['summon'] = {
	init: function() {
	  this.appendValueInput("ENTITY")
		  .setCheck("String")
		  .appendField(new Blockly.FieldLabelSerializable(""), "ENTITY");
	  this.appendEndRowInput()
		  .appendField("を");
	  this.appendDummyInput()
		  .appendField("X：");
	  this.appendValueInput("X")
		  .setCheck("String")
		  .appendField(new Blockly.FieldLabelSerializable(""), "X");
	  this.appendEndRowInput();
	  this.appendDummyInput()
		  .appendField("Y：");
	  this.appendValueInput("Y")
		  .setCheck("String")
		  .appendField(new Blockly.FieldLabelSerializable(""), "Y");
	  this.appendEndRowInput();
	  this.appendDummyInput()
		  .appendField("Z：");
	  this.appendValueInput("Z")
		  .setCheck("String")
		  .appendField(new Blockly.FieldLabelSerializable(""), "Z");
	  this.appendEndRowInput();
	  this.appendEndRowInput()
		  .appendField("の位置にスポーンする");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };

  Blockly.Blocks['sleep'] = {
	init: function() {
		this.appendValueInput("SEC")
		  .setCheck("Number")
		  .appendField(new Blockly.FieldLabelSerializable(""), "SEC");
		this.appendDummyInput()
		  .appendField("秒待つ");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

javascript.javascriptGenerator.forBlock['summon'] = function(block, generator) {
	var value_entity = generator.valueToCode(block, 'ENTITY', javascript.Order.ATOMIC);
	var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
	var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
	var value_z = generator.valueToCode(block, 'Z', javascript.Order.ATOMIC);
	return build_execute_command("summon", "", value_entity, value_x, value_y, value_z);
};
  
javascript.javascriptGenerator.forBlock['sleep'] = function(block, generator) {
	// TODO: Assemble javascript into code variable.
	var value_sec = generator.valueToCode(block, 'SEC', javascript.Order.ATOMIC);
	var code = '(function(ms) {var start = Date.now();while(Date.now() - start < ms){}})('+(parseInt(value_sec)*1000)+');\n';
	return code;
};