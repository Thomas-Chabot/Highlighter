## Introduction
@wiggly-games/highlighter is a package for highlighting MeshParts and BaseParts. It provides utility methods that can be used on the parts, and provides highlights around those parts.

## Installation
npm install @wiggly-games/highlighter

## Documentation
The Highlighter package provides a few methods that can be used for interacting with highlights.

### Highlight(Part: BasePart, configuration: Configuration)
Highlights a part with the given configuration settings.

### RemoveHighlight(Part: BasePart)
Removes a highlight from a part.

### GetAllHighlighted(): BasePart[]
Returns an array of all objects that are currently highlighted.

### Clear()
Removes all highlights.

## Configuration
Configuration is controlled by passing in a Configuration object. The Configuration should specify the following properties:
	FillColor: Color3;
        The Color to fill the object in with.
	OutlineColor: Color3;
        The Color to outline the object with.
	FillTransparency: number;
        The transparency of the filler portion of the highlight. Should be set between 0-1; 1 is fully invisible.
	OutlineTransparency: number;
        The transparency for the outline of the highlight. Should be set between 0-1; 1 is fully invisible.
	MeshOutlineSize: number;
        The Outline Size to use with meshes. This should be small; a good example value is 0.025.
	BoxOutlineSize: number;
        The Outline Size to use with box highlights. This is used for regular parts.