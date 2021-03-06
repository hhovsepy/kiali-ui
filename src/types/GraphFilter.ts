import Namespace from './Namespace';
import { GraphParamsType } from './Graph';

export interface GraphFilterProps extends GraphParamsType {
  disabled: boolean;
  onLayoutChange: (newLayout: Layout) => void;
  onFilterChange: (newDuration: Duration) => void;
  onNamespaceChange: (newValue: Namespace) => void;
  onBadgeStatusChange: (newValue: BadgeStatus) => void;
  onRefresh: () => void;
}

export interface GraphFilterState {
  availableNamespaces: { name: string }[];
}

export interface Layout {
  name: string;
}

export interface Duration {
  value: number;
}

export interface BadgeStatus {
  hideCBs: boolean;
}
