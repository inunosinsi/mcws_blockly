Blockly.Blocks['sammon_call'] = {
	init: function() {
	  this.appendValueInput("CMD")
		  .setCheck("String")
		  .appendField(new Blockly.FieldLabelSerializable(""), "CMD");
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
	var value_cmd = generator.valueToCode(block, 'CMD', javascript.Order.ATOMIC);
	var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
	var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
	var value_z = generator.valueToCode(block, 'Z', javascript.Order.ATOMIC);
	// TODO: Assemble javascript into code variable.
	return 'window.mcwsApi.sammon('+value_cmd+','+value_x+','+value_y+','+value_z+');\n';
  };
  
  javascript.javascriptGenerator.forBlock['sleep'] = function(block, generator) {
	// TODO: Assemble javascript into code variable.
	return 'window.mcwsApi.sleep();\n';
  };