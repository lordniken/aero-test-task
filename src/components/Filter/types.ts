export interface CategoryProps {
  title: string;
  specs: string[];
  selectedChkb: string[];
  setSelectedChkb: (state: string[]) => void;
}
