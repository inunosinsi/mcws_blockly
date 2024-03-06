  const toolbox = {
	"kind": "categoryToolbox",
	"contents": [
		{
			"kind": "category",
			"name": "Control",
			"contents": [
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
			]
		},
		{
			"kind": "category",
			"name": "Text",
			"contents": [
				{
					"kind": "block",
					"type": "text"
				}
			]
		},
		{
			"kind": "category",
			"name": "Math",
			"contents": [
				{
					"kind": "block",
					"type": "math_number"
				},
			]
		},
		{
			"kind": "category",
			"name": "Minecraft",
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
			]
		},
		{
			"kind": "category",
			"name": "Custom",
			"contents": [
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
				}
			]
		}
	]
}