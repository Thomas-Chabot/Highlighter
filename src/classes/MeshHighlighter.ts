import { Configuration } from "../config";
import { IHighlighter, IHighlighterStatic } from "../interfaces";
import { staticImplements } from "../lib";

const EXTRA_OFFSET = new Vector3(0, 0, 0);
let config: Configuration;

@staticImplements<IHighlighterStatic>()
export class MeshHighlighter implements IHighlighter {
	_object: Part;

	Destroy(): void {
		this._object.Destroy();
	}

	constructor(targetBP: BasePart, parent: Instance) {
		const target = targetBP as MeshPart;
		const offset = new Vector3(config.MeshOutlineSize, 0, config.MeshOutlineSize);
		const meshScale = target.Size.div(target.MeshSize).add(offset).add(EXTRA_OFFSET);

		// Create the Highlight part
		const highlight = new Instance("Part");
		highlight.CFrame = target.CFrame;
		highlight.Size = target.Size.add(offset).add(EXTRA_OFFSET);
		highlight.Color = config.OutlineColor;
		highlight.Name = `${target.Name}Highlight`;
		highlight.Anchored = true;
		highlight.CanCollide = false;
		highlight.Transparency = config.OutlineTransparency;

		// Invert the mesh for the highlight
		const invertedMesh = new Instance("SpecialMesh");
		invertedMesh.Parent = highlight;
		invertedMesh.Scale = new Vector3(-meshScale.X, meshScale.Y, meshScale.Z);
		invertedMesh.MeshId = target.MeshId;

		highlight.Parent = parent;
		this._object = highlight;
	}

	static SetConfig(configuration: Configuration) {
		config = configuration;
	}
}
