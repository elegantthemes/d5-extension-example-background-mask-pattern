# Adding New Mask Style
To add a new Mask style in the Divi Builder, follow the Action Items.

## Action Items
- [ ] Copy one of the Mask Templates (see below).
- [ ] Update `NAME` in the template.
- [ ] Update `TITLE` in the template.
- [ ] Update `landscape`, `square` and `portrait` from the `regular`/`inverted` and `default`/`rotated` group with appropriate value (should only contain all tags inside the `<svg></svg>` file).
- [ ] (Optional) Add `"priority": "NUMBER"` (e.g. 1-10) in the template, lower number will make it show-up early in _Mask Style Dropdown_ list in the VB.
- [ ] Save in a new file, e.g: `some-name.json`, in this folder, add/commit to the repository.

**Tip**:
- For `NAME`, if it's multiple words like `Layer Blob`, use `-` to join and make it lower case, e.g `layer-blob`.
- For `filename`, if it's multiple words like `Layer Blob`, use `-` to join and make it lower case, e.g `layer-blob.json`.
- `landscape`, `square`, `portrait` should only contain all tags inside the `<svg></svg>` file, e.g:

```
		"landscape": "<path d=\"M28,28H56V56H28ZM0,0H28V28H0Z\"/>"
```

<hr>

### Mask Template without Priority (Default):

```
{
	"name": "NAME",
	"label": "TITLE",
	"svgContent": {
		"regular": {
			"default": {
				"landscape": "",
				"portrait": "",
				"square": ""
			},
			"rotated": {
				"landscape": "",
				"portrait": "",
				"square": ""
			}
		},
		"inverted": {
			"default": {
				"landscape": "",
				"portrait": "",
				"square": ""
			},
			"rotated": {
				"landscape": "",
				"portrait": "",
				"square": ""
			}
		}
	}
}

```

### Mask Template with Priority (Optional):

```
{
	"name": "NAME",
	"label": "TITLE",
	"svgContent": {
		"regular": {
			"default": {
				"landscape": "",
				"portrait": "",
				"square": ""
			},
			"rotated": {
				"landscape": "",
				"portrait": "",
				"square": ""
			}
		},
		"inverted": {
			"default": {
				"landscape": "",
				"portrait": "",
				"square": ""
			},
			"rotated": {
				"landscape": "",
				"portrait": "",
				"square": ""
			}
		}
	},
	"priority": NUMBER
}

```

<hr>

**Last Updated**: Aug 01, 2022.
