/*
	Main interface for the Highlighter code. This applies and removes the highlights from parts.
*/

import Object from "@rbxts/object-utils";
import { IHighlighter } from "./interfaces";
import { BoxHighlighter, MeshHighlighter } from "./classes";
import { Configuration } from "./config";

const highlights = new Map<BasePart, IHighlighter>();

const highlightsFolder = new Instance("Folder");
highlightsFolder.Name = "Highlights";
highlightsFolder.Parent = game.Workspace;

let configured: boolean = false;

function Configure(config: Configuration) {
	MeshHighlighter.SetConfig(config);
	BoxHighlighter.SetConfig(config);
	configured = true;
}

// Highlights the target part. Applies the given configuration.
export function Highlight(part: BasePart, configuration: Configuration) {
	assert(
		!highlights.has(part),
		`Attempted to highlight ${part}, but a previous highlight was already applied. Please remove the highlight first.`,
	);

	Configure(configuration);

	const HighlightClass = part.IsA("MeshPart") ? MeshHighlighter : BoxHighlighter;
	const highlighterClass = new HighlightClass(part, highlightsFolder);
	highlights.set(part, highlighterClass);
}

// Removes highlight from a part.
export function RemoveHighlight(part: BasePart) {
	assert(highlights.get(part), `Could not find highlight for part: ${part}`);
	highlights.get(part)?.Destroy();
	highlights.delete(part);
}
export function Clear() {
	highlights.forEach((highlight) => highlight.Destroy());
	highlights.clear();
}
export function GetAllHighlighted(): BasePart[] {
	return Object.keys(highlights);
}
