Blockly.Blocks['sammon_call'] = {
	init: function() {
	  this.appendValueInput("NAME")
		  .setCheck("String");
	  this.appendDummyInput()
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField("召喚する");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
	}
};

javascript.javascriptGenerator.forBlock['sammon_call'] = function(block, generator) {
	var value_name = generator.valueToCode(block, 'NAME', javascript.Order.ATOMIC);
	// TODO: Assemble javascript into code variable.
	var code = 'window.mcwsApi.sammon();\n';
	return code;
  };