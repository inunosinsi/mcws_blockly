/**
 * js-interpreter用で作成した関数
 * @param {string} command 
 * @param {string} target 
 * @param {string} type 
 * @param {string} id 
 * @param {string} x 
 * @param {string} y 
 * @param {string} z 
 */
function send(command, target, type, id, x, y, z){
	window.mcwsApi.execute_command(command, target, type, id, x, y, z);
}

// 上で作成した関数を登録する
function initApi(interpreter, globalObject) {
	var wrapper = function(command, target, type, id, x, y, z) {
		return send(command, target, type, id, x, y, z);
	};
	interpreter.setProperty(globalObject, 'send',
		interpreter.createNativeFunction(wrapper));
}