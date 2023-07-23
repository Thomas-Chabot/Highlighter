## Introduction
@rbxts/highlighter is a package for highlighting MeshParts and BaseParts. It provides utility methods that can be used on the parts, and provides highlights around those parts.

## Installation
npm install @rbxts/highlighter

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