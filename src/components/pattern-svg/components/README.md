# Adding New Pattern Style
To add a new Pattern style in the Divi Builder, follow the Action Items.

## Action Items
- [ ] Copy one of the Pattern Templates (see below).
- [ ] Update `NAME` in the template.
- [ ] Update `TITLE` in the template.
- [ ] Update `default` and `rotated` from the `regular` and `inverted` group with appropriate value (should only contain all tags inside the `<svg></svg>` file).
- [ ] Update `width` and `height` with appropriate value (e.g. `64px`)
- [ ] (Optional) Add `"priority": "NUMBER"` (e.g. 1-10) in the template, lower number will make it show-up early in _Pattern Style Dropdown_ list in the VB.
- [ ] Save in a new file, e.g: `some-name.json`, in this folder, add/commit to the repository.

**Tip**:
- For `NAME`, if it's multiple words like `Diagonal Lines`, use `-` to join and make it lower case, e.g `diagonal-lines`.
- For `filename`, if it's multiple words like `Diagonal Lines`, use `-` to join and make it lower case, e.g `diagonal-lines.json`.
- `default`, `rotated`, `thumbnail` should only contain all tags inside the `<svg></svg>` file, e.g:

```
		"thumbnail": "<path d=\"M28,28H56V56H28ZM0,0H28V28H0Z\"/>"
```

<hr>

### Pattern Template without Priority (Default):

```
{
	"name": "NAME",
	"label": "TITLE",
	"svgContent": {
		"regular": {
			"default": "REPLACE",
			"rotated": "REPLACE"
		},
		"inverted": {
			"default": "REPLACE",
			"rotated": "REPLACE"
		},
		"thumbnail": "REPLACE"
	},
	"width": "REPLACE",
	"height": "REPLACE"
}

```

### Pattern Template with Priority (Optional):

```
{
	"label": "TITLE",
	"svgContent": {
		"regular": {
			"default": "REPLACE",
			"rotated": "REPLACE"
		},
		"inverted": {
			"default": "REPLACE",
			"rotated": "REPLACE"
		},
		"thumbnail": "REPLACE"
	},
	"width": "REPLACE",
	"height": "REPLACE",
	"priority": NUMBER
}

```

<hr>

**Last Updated**: Aug 01, 2022.
