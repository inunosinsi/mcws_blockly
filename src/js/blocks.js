  const toolbox = {
	"kind": "flyoutToolbox",
	"contents": [
		{
			"kind": "block",
			"type": "text"
		},
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
			"type": "math_number"
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
		}
	]

}