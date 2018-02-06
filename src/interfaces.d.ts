interface QMAppState {
	error: boolean;
	loading: boolean;
}

interface QMListProps {
	id: string;
}
interface QMListState {
	checked: Array<number | string>;
}

interface QMListItemProps {
	id: string;
	checked?: boolean;
	textValue: string;
}
interface QMListItemState {
	checked: boolean;
	textValue: string;
}