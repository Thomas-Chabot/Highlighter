/*
    The SelectionBox class applies highlights through the use of SelectionBox.
*/

import { Configuration } from "../config";
import { IHighlighter, IHighlighterStatic } from "../interfaces";
import { staticImplements } from "../lib";

let config: Configuration;

@staticImplements<IHighlighterStatic>()
export class BoxHighlighter implements IHighlighter {
	_object: SelectionBox;

	Destroy(): void {
		this._object.Destroy();
	}

	constructor(target: BasePart, parent: Instance) {
		const selectionBox = new Instance("SelectionBox") as SelectionBox;
		selectionBox.Adornee = target;

		// Apply the settings
		selectionBox.Color3 = config.OutlineColor as Color3;
		selectionBox.SurfaceColor3 = config.FillColor as Color3;
		selectionBox.Transparency = config.OutlineTransparency as number;
		selectionBox.SurfaceTransparency = config.FillTransparency as number;
		selectionBox.LineThickness = config.BoxOutlineSize as number;

		// Parent to the game so that it gets shown
		selectionBox.Parent = parent;
		this._object = selectionBox;
	}

	static SetConfig(configuration: Configuration) {
		config = configuration;
	}
}
