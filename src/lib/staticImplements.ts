export function staticImplements<T>() {
	return <U extends T>(construct: U) => {
		construct;
	};
}
