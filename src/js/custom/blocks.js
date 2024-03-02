Blockly.Blocks['sammon_call'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField(new Blockly.FieldTextInput("chicken"), "CMD");
	  this.appendDummyInput()
		  .appendField("を");
	  this.appendDummyInput()
		  .appendField(new Blockly.FieldTextInput("^"), "X");
	  this.appendDummyInput()
		  .appendField(new Blockly.FieldTextInput("^"), "Y");
	  this.appendDummyInput()
		  .appendField(new Blockly.FieldTextInput("^"), "Z");
	  this.appendDummyInput()
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
	  this.appendDummyInput()
		  .appendField("1秒待つ");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };

  javascript.javascriptGenerator.forBlock['sammon_call'] = function(block, generator) {
	var text_cmd = block.getFieldValue('CMD');
	var text_x = block.getFieldValue('X');
	var text_y = block.getFieldValue('Y');
	var text_z = block.getFieldValue('Z');
	// TODO: Assemble javascript into code variable.
	return 'window.mcwsApi.sammon("'+text_cmd+'","'+text_x+'","'+text_y+'","'+text_z+'");\n';
  };

  
  javascript.javascriptGenerator.forBlock['sleep'] = function(block, generator) {
	// TODO: Assemble javascript into code variable.
	return 'window.mcwsApi.sleep();\n';
  };