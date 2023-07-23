import { Configuration } from "../config/Configuration";

export interface IHighlighter {
	Destroy(): void;
}
export interface IHighlighterStatic {
	new (target: BasePart, parent: Instance): IHighlighter;
	SetConfig(config: Configuration): void;
}
