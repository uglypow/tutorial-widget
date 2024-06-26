import CleanPageTourModal from '@/components/CleanPageTourModal';
import Empty from '@/components/Empty';

export type TourComponent = "CleanPageTourModal" | "Empthy"

export const componentMapping = {
  CleanPageTourModal: CleanPageTourModal,
  Empthy: Empty,
};
