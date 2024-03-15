/**
 * 
 * @param {string} command 
 * @param {string} target 
 * @param {string} type 
 * @param {string} id
 * @param {string} x 
 * @param {string} y 
 * @param {string} z 
 * @return string
 */
function build_execute_command(command, target, type, id, x, y, z){
	target = target.replace("'", "");
	type = type.replace("'", "");
	id = id.replace("'", "");
	x = x.replace("'", "");
	y = y.replace("'", "");
	z = z.replace("'", "");
	return 'send("'+command+'","'+target+'","'+type+'","'+id+'","'+x+'","'+y+'","'+z+'");\n';
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

  Blockly.Blocks['teleport'] = {
	init: function() {
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
		  .appendField("の位置にテレポートする");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };

  Blockly.Blocks['locate'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField(new Blockly.FieldDropdown([["バイオーム","biome"], ["構造物","structure"]]), "TYPE");
	  this.appendValueInput("ENTITY")
		  .setCheck("String")
		  .appendField(new Blockly.FieldLabelSerializable(""), "ENTITY");
	  this.appendDummyInput()
		  .appendField("の位置を調べる");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };

  Blockly.Blocks['setblock'] = {
	init: function() {
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
	  this.appendDummyInput()
		  .appendField("の位置に");
	  this.appendValueInput("BLOCK")
		  .setCheck("String")
		  .appendField(new Blockly.FieldLabelSerializable(""), "BLOCK");
	  this.appendDummyInput()
		  .appendField("を置く");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };

  Blockly.Blocks['start'] = {
	init: function() {
		this.appendDummyInput()
		  .appendField("▶を押した時");
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
  }

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
	return build_execute_command("summon", "", "", value_entity, value_x, value_y, value_z);
};

javascript.javascriptGenerator.forBlock['teleport'] = function(block, generator) {
	var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
	var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
	var value_z = generator.valueToCode(block, 'Z', javascript.Order.ATOMIC);
	// TODO: Assemble javascript into code variable.
	return build_execute_command("tp", "s", "", "", value_x, value_y, value_z);
  };

  javascript.javascriptGenerator.forBlock['locate'] = function(block, generator) {
	var dropdown_type = block.getFieldValue('TYPE');
	var value_entity = generator.valueToCode(block, 'ENTITY', javascript.Order.ATOMIC);
	// TODO: Assemble javascript into code variable.
	return build_execute_command("locate", "", dropdown_type, value_entity, "", "", "");
  };

  javascript.javascriptGenerator.forBlock['setblock'] = function(block, generator) {
	var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
	var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
	var value_z = generator.valueToCode(block, 'Z', javascript.Order.ATOMIC);
	var value_block = generator.valueToCode(block, 'BLOCK', javascript.Order.ATOMIC);
	// TODO: Assemble javascript into code variable.
	return build_execute_command("setblock", "", "", value_block, value_x, value_y, value_z);
  };

javascript.javascriptGenerator.forBlock['start'] = function(block, generator) {
	// TODO: Assemble javascript into code variable.
	var code = '// This block is a starting block.\n';
	return code;
};
  
javascript.javascriptGenerator.forBlock['sleep'] = function(block, generator) {
	// TODO: Assemble javascript into code variable.
	var value_sec = generator.valueToCode(block, 'SEC', javascript.Order.ATOMIC);
	var code = '(function(ms) {var start = Date.now();while(Date.now() - start < ms){}})('+(parseInt(value_sec)*1000)+');\n';
	return code;
};