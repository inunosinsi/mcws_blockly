  const toolbox = {
	"kind": "categoryToolbox",
	"contents": [
		{
			"kind": "category",
			"name": "イベント",
			"contents": [
				{
					"kind": "block",
					"type": "start",
				},
			]
		},
		{
			"kind": "category",
			"name": "コマンド",
			"contents": [
				{
					"kind": "block",
					"type": "summon",
					"inputs": {
						"ENTITY": {
							"block": {
								"type": "text",
								"fields": {
									"TEXT": "chicken"
								}
							}
						},
						"X": {
							"block": {
								"type": "text",
								"fields": {
									"TEXT": "^"
								}
							}
						},
						"Y": {
							"block": {
								"type": "text",
								"fields": {
									"TEXT": "^"
								}
							}
						},
						"Z": {
							"block": {
								"type": "text",
								"fields": {
									"TEXT": "^"
								}
							}
						},
					}
				},
				{
					"kind": "block",
					"type": "teleport",
					"inputs": {
						"X": {
							"block": {
								"type": "text",
								"fields": {
									"TEXT": "^"
								}
							}
						},
						"Y": {
							"block": {
								"type": "text",
								"fields": {
									"TEXT": "^"
								}
							}
						},
						"Z": {
							"block": {
								"type": "text",
								"fields": {
									"TEXT": "^"
								}
							}
						},
					}
				},
				{
					"kind": "block",
					"type": "locate",
					"inputs": {
						"ENTITY": {
							"block": {
								"type": "text",
								"fields": {
									"TEXT": ""
								}
							}
						}
					}
				},
				{
					"kind": "block",
					"type": "setblock",
					"inputs": {
						"X": {
							"block": {
								"type": "text",
								"fields": {
									"TEXT": "^"
								}
							}
						},
						"Y": {
							"block": {
								"type": "text",
								"fields": {
									"TEXT": "^"
								}
							}
						},
						"Z": {
							"block": {
								"type": "text",
								"fields": {
									"TEXT": "^"
								}
							}
						},
						"BLOCK": {
							"block": {
								"type": "text",
								"fields": {
									"TEXT": "stone"
								}
							}
						},
					}
				},
			]
		},
		{
			"kind": "category",
			"name": "制御",
			"contents": [
				{
					"kind": "block",
					"type": "controls_if"
				},
				{
					"kind": "block",
					"type": "sleep",
					"inputs": {
						"SEC": {
							"block": {
								"type": "math_number",
								"fields": {
									"NUM": 1
								}
							}
						},
					}
				},
				{
					"kind": "block",
					"type": "controls_repeat_ext",
					"inputs": {
						"TIMES": {
							"block": {
								"type": "math_number",
								"fields": {
									"NUM": 1
								}
							}
						},
					}
				},
				{
					"kind": "block",
					"type": "controls_whileUntil"
				},
				{
					"kind": "block",
					"type": "controls_for"
				},
				{
					"kind": "block",
					"type": "controls_forEach"
				},
				{
					"kind": "block",
					"type": "controls_flow_statements"
				}
			]
		},
		{
			"kind": "category",
			"name": "文字列",
			"contents": [
				{
					"kind": "block",
					"type": "text"
				},
				{
					"kind": "block",
					"type": "text_join"
				},
				{
					"kind": "block",
					"type": "text_append"
				},
				{
					"kind": "block",
					"type": "text_length"
				},
				{
					"kind": "block",
					"type": "text_isEmpty"
				},
				{
					"kind": "block",
					"type": "text_indexOf"
				},
				{
					"kind": "block",
					"type": "text_charAt"
				},
				{
					"kind": "block",
					"type": "text_getSubstring"
				},
				{
					"kind": "block",
					"type": "text_changeCase"
				},
				{
					"kind": "block",
					"type": "text_trim"
				},
				{
					"kind": "block",
					"type": "text_print"
				}
			]
		},
		{
			"kind": "category",
			"name": "数字",
			"contents": [
				{
					"kind": "block",
					"type": "math_number"
				},
				{
					"kind": "block",
					"type": "math_arithmetic"
				},
				{
					"kind": "block",
					"type": "math_single"
				},
				{
					"kind": "block",
					"type": "math_trig"
				},
				{
					"kind": "block",
					"type": "math_constant"
				},
				{
					"kind": "block",
					"type": "math_number_property"
				},
				{
					"kind": "block",
					"type": "math_round"
				},
				{
					"kind": "block",
					"type": "math_on_list"
				},
				{
					"kind": "block",
					"type": "math_modulo"
				},
				{
					"kind": "block",
					"type": "math_constrain"
				},
				{
					"kind": "block",
					"type": "math_random_int"
				},
				{
					"kind": "block",
					"type": "math_random_float"
				},
				{
					"kind": "block",
					"type": "math_atan2"
				}
			]
		},
		{
			"kind": "category",
			"name": "論理",
			"contents": [
				{
					"kind": "block",
					"type": "logic_compare"
				},
				{
					"kind": "block",
					"type": "logic_operation"
				},
				{
					"kind": "block",
					"type": "logic_negate"
				},
				{
					"kind": "block",
					"type": "logic_boolean"
				},
				{
					"kind": "block",
					"type": "logic_null"
				},
				{
					"kind": "block",
					"type": "logic_ternary"
				}
			]
		},
	]
}