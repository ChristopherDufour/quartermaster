interface QMAppState {
  error: boolean;
  loading: boolean;
  lists: Array<QMListProps>
}

interface QMListProps {
  id: string;
  title: string;
}
interface QMListState {
  id: string;
  title: string;
  items: Array<QMListItemProps>;
}

interface QMListItemProps {
  id: string;
  checked?: boolean;
  value?: string;
}
interface QMListItemState {
  id: string;
  checked: boolean;
  value: string;
}